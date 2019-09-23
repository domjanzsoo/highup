
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
const { check, validationResult } = require('express-validator');
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
			console.log("Blogg with the id "+bloggs[i]['id']+" with the title: "+bloggs[i]['title']);
			if(bloggs[i]['id'].trim()==bloggId.trim()) {
				console.log("Blogg found by id, having the template name :"+bloggs[i]['templatename']);
				metaTags={
					date:bloggs[i]['date'],
					subject:bloggs[i]['subject'],
					title:bloggs[i]['title'],
					time:bloggs[i]['read-duration'],
					topic:bloggs[i]['topic'],
					desc:bloggs[i]['description'],
					thumbnail:bloggs[i]['thumbnail'],
					url:bloggs[i]['url']
				};

				res.render(bloggs[i]['templatename'],{layout:'blogglayout',subject:bloggs[i]['subject'],title:bloggs[i]['title'],descript:bloggs[i]['description']});

				//.render(bloggs[i]['templatename'],{layout:'blogglayout',date:bloggs[i]['date'],subject:bloggs[i]['subject'],title:bloggs[i]['title'],time:bloggs[i]['read-duration'],topic:bloggs[i]['topic'],desc:bloggs[i]['description'],thumbnail:bloggs[i]['thumbnail'],url:bloggs[i]['url']});
		}else{
			console.log("Not the blogg searched");
		}
		}
		
		console.log("No blogg template found");
	});
});
app.get('/blogs/bytopic/:topic',function(req,res){
	fs.readFile(__dirname+"/data/blogging/blogging2.json",(err,data)=>{
		var bloggsToPass=[];
		if(err) throw err;
		
		var bloggs=JSON.parse(data);
		for(var b in bloggs){
			
		if(bloggs[b]['subject'].trim()===req.params.topic.trim()){
			
			bloggsToPass.push(bloggs[b]);
		}
		}
		console.log(bloggsToPass);
		res.send(bloggsToPass);	
	});	
});
app.get('/abilities',function(req,res){
	res.render('zsolt-domjan-abilities');
});
app.get('/aboutme',function(req,res){
	res.render('zsolt-domjan-about');
});

app.get('/downloadcv',function(req,res){
	let file=__dirname+'/public/crossbrowser/about/cv.pdf';
	res.download(file);
});
app.get('/projects',function(req,res){
	
	res.render('projects');
});
app.get('/contact',function(req,res){
	res.render('zsolt-domjan-contact');
});
app.get('/contactmsg',function(req,res){
	console.log('Contact form is present');
});
app.post('/contactmsg',[
	check('fullname').isLength({ min: 3 }).withMessage('The name field is required!Please provide us you full name'),
	check('email').isLength({min:1}).withMessage('The email field is required!').isEmail().withMessage('Please give a valid email address!'),
	
],(req,res)=>{
	req.setTimeout(20000);
	console.log(req.body);

	const errors=validationResult(req);
	var errorToSend='';
	var formType=req.body.formtype;
	if(!errors.isEmpty()){
		console.log(errors.array()[0]);
		errorToSend=errors.array()[0];

		if(formType==="normal"){
		res.render('zsolt-domjan-contact',{errorMsg:errorToSend.msg,reloadReason:'inputerror'});
		}else if(formType==="embedded"){
		res.json({msgtype:'error',msg:errorToSend.msg});
		}
	}else{
	var fullName=req.body.fullname;
	var email=req.body.email;
	var msg=req.body.msg;
	
	console.log('Contact message is processed.Message from '+fullName+' .Emails address: '+email);
	var transporter=nodemailer.createTransport({
		host:'mail.privateemail.com',
		port:587,
		auth:{
			user:'zsolt.domjan@highup.me',
			pass:'Jelszo99'
		},
		secure:	false,
		tls:{rejectUnauthorized: false}
	});


	
	var context={
			sendername:fullName,
			senderemail:email,
			message:msg,
			
		};
		
	/*templates.render(__dirname+'/public/emailtemplates/main/informingtemplate.html',context,function(err,html,text,subj){
		
			let mailOptionsInform={
			from:'postmaster@supaidea.com',
			to:'domjanzsoo@yahoo.com',
			subject:'New message received from Highup',
			html:html,
			text:text			
		};
			transporter.sendMail(mailOptionsInform,function(error,info){
			
		
		if(error){
			console.log(error);
		}else{
			console.log('Email sent');
	
		}
	});	
	});	*/
	templates.render(__dirname+'/public/emailtemplates/main/maintemplate.html',context,function(err,html,text,subj){
	
					
		let mailOptionsConfirm={
		from:'zsolt.domjan@highup.me',
		to:email,
		subject:'Thank you for contacting me',
		html:html,
		text:text
		};
		
		let mailOptionsInform={
		from:'zsolt.domjan@highup.me',
		to:'domjanzsoo@yahoo.com',
		subject:'New message received from Highup',
		text:"Hi Zsolt,\r\n\r\n Here is a new highup message received from "+fullName+" having the email address "+email+".\r\nSee the message below:\r\n\r\n"+msg			
		};
		
	transporter.sendMail(mailOptionsInform,function(error,info){
		
		console.log('Information sent');
	});
	transporter.sendMail(mailOptionsConfirm,function(error,info){
			
		
		if(error){
			console.log(error);
		}else{
			console.log('Email sent');
		if(formType==="normal"){
			res.render('zsolt-domjan-contact',{msg:'Message sent successfully'});
		}else if(formType==="embedded"){
			res.json({msgtype:'confirmation',msg:'Message sent successfully'});
		}
		}
	});
	});
	
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