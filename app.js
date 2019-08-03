
var fs=require('fs');
var express=require('express');
var exphbs=require('express-handlebars');
var path=require('path');
var nodemailer=require('nodemailer');
var bodyParser=require('body-parser');
var hbsmailer=require('nodemailer-express-handlebars');
let validator=require('./validation.js');
let htmlemail=require('./htmlemailformatter.js');
let emailTemplates=require('swig-email-templates');
var templates=new emailTemplates();
var app=express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.set('port',process.env.PORT||3000);
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.urlencoded({extended:true}));



app.engine('handlebars',exphbs());
app.set('view engine','handlebars');


app.get('/',function(req,res){
	
	console.log("Main page is rendering");
	res.render('mainpage');
	
});

app.get('/blogs',function(req,res){
	fs.readFile(__dirname+"/data/blogging/blogging2.json",(err,data)=>{
		var bloggsToPass=[];
		if(err) throw err;
		
		var bloggs=JSON.parse(data);
		for(var b in bloggs){
			
			let bloggPiece={
			id:bloggs[b]['id'],
			title:bloggs[b]['title'],
			date:bloggs[b]['date']
		};
			
			bloggsToPass.push(bloggPiece);
		}
		console.log(bloggsToPass);
		res.render('blogpage',{layout:'blogglayout',bloggPages:bloggsToPass,title:'Zsolts Blogg Page'});	
	});	
	
});

app.get('/blog/:id',function(req,res){
	var bloggId=req.params.id;
	console.log("Received blogg id is: "+bloggId);
	fs.readFile(__dirname+"/data/blogging/blogging2.json",(err,data)=>{
		
		if(err) throw err;
		
		var bloggs=JSON.parse(data);
		console.log(bloggs);
		for(var i in bloggs){
			console.log("Blogg with the id "+bloggs[i]['id']+" with the title: "+bloggs[i]['title'])
			if(bloggs[i]['id'].trim()==bloggId.trim()) {
				console.log("Blogg found by id, having the template name :"+bloggs[i]['templatename'])
				res.render(bloggs[i]['templatename'],{layout:'blogglayout',date:bloggs[i]['date'],subject:bloggs[i]['subject'],title:bloggs[i]['title']});
		}else{
			console.log("Not the blogg searched");
		}
		}
		
		console.log("No blogg template found");
	});
});
app.get('/projects',function(req,res){
	
	res.render('projects');
});
app.get('/contact',function(req,res){
	res.render('contact');
});
app.get('/contactmsg',function(req,res){
	console.log('Contact form is present');
});

app.post('/contactmsg',validator.myValidator,(req,res)=>{
	req.setTimeout(20000);
	console.log(req.body);
	var validError=validator.validResult(req.body);
	var errorToSend='';
	if(!validError.isEmpty()){
		console.log(validError.array()[0]);
		errorToSend=validError.array()[0].msg;
		res.json({errorMsg:errorToSend});
	}else{
	var fullName=req.body.fullname;
	var email=req.body.email;
	var msg=req.body.msg;
	console.log('Contact message is processed.Message from '+fullName+' .Emails address: '+email);
	var transporter=nodemailer.createTransport({
		host:'mail.supaidea.com',
		port:25,
		auth:{
			user:'postmaster@supaidea.com',
			pass:'Jelszo-99'
		},
		secure:false,
		tls: {rejectUnauthorized: false},
	});

	var mailOptionsConfirm={
		from:'postmaster@supaidea.com',
		to:email,
		subject:'Thank you for your message',
		text:'Thanks for contacting me. I will get back to you asap.'
	};
	
		

	
	var context={
			sendername:fullName,
			senderemail:email,
			message:msg,
			
		};
	templates.render(__dirname+'/public/emailtemplates/main/maintemplate.html',context,function(err,html,text,subj){
		
					
		let mailOptionsConfirm={
		from:'postmaster@supaidea.com',
		to:email,
		subject:'Thank you for contacting me',
		html:html,
		text:text
		};
		
	transporter.sendMail(mailOptionsConfirm,function(error,info){
			
		
		if(error){
			console.log(error);
		}else{
			console.log('Email sent');
			res.json({msg:'Message sent successfully'});
		}
	});
	});
	/*readHTMLFile(__dirname+'/public/emailtemplates/main/maintemplate.html',function(err,html){
		var template=exphbs.compile(html);
		

	
	transporter.sendMail(mailOptionsConfirm,function(error,info){
		if(error){
			console.log(error);
		}else{
			console.log('Email sent to the visitor' );

		}
	
	});
	});*/
	

	/*transporter.sendMail(mailOptionsInform,function(error,info){
		if(error){
			console.log(error);
		}else{
			console.log('Email sent to Zsolt');
			res.json({msg:'Email sent successfully sent'});
		}
		
		
	});*/
	}
	});
	
//custom 404 page
app.use(function(req,res){
	res.type('text/plain');
	res.status(404);
	res.send('404-Not Found');
});


//custom 500 page
app.use(function(err,req,res,next){
	console.log(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500-Server Error');
});

app.listen(app.get('port'),function(){
	
	console.log('Express app started on http://localhost:'+app.get('port')+'.Press control c to terminate');
});
