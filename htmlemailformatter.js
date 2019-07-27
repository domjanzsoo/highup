
module.exports={
	htmlAdmin:function(fname,lname,email,mess){
	let output='<h3 style="font-family:Arial, Helvetica, sans-serif;">Hello Zsolt</h3>'+
				'<div style="display:block;position:relative;margin:50px auto 10px auto;">You received a message through the hoptoit contact form</div>'+
				'<div><i>Sender: </i><span style="font-weight:bold">'+fname+' '+lname+'</span></div>'+
				'<div><i>Sender email address: </i><span style="font-weight:bold">'+email+'</span>'+
				'<div style="display:block;position:relative;margin-top:40px;font-weight:bold;"><i>Message received:</i>'+ 
				'</br></div>'+mess+'</div>'+
				'<div style="display:block;position:relative;width:800px;margin:70px auto 0 auto;background-image:url(/emailbackground.jpg);backrground-size:cover;background-repeat:no-repeat;background-position:center;">'+
				'<img src="/img/logo/emfooterlogo.png" style="width:100px;height:40px;">'+
				'<table style="width:100%;border:none;">'+
				'<tr><td>'+
				'<div style="display:flex;position:relative;margin-bottom:5px;">'+
				'<img style="display:inline-block;width:19px;height:20px;" src="/img/footerarrows/linkedin.png" />'+
				'<a style="font-family:Lucida Sans Unicode, Lucida Grande, sans-serif;font-size:12px;text-decoration:none;color:black;vertical-align:middle;float:right;position:relative;margin:2px 0 0px 10px;" href="#">linked in</a>'+
				'</div><div style="display:flex;margin-bottom:5px;">'+
				'<img style="display:inline-block;width:19px;height:20px;" src="/img/footerarrows/facebook.png" />'+
				'<a style="display:block;font-family:Lucida Sans Unicode, Lucida Grande, sans-serif;font-size:12px;text-decoration:none;color:black;vertical-align:middle;float:right;position:relative;margin:2px 0 0 10px;" href="#">facebook</a>'+
				'</div><div style="display:flex;margin-bottom:5px;">'+
				'<img style="display:inline-block;width:19px;height:20px;" src="/img/footerarrows/twitter.png" />'+
				'<a style="display:block;font-family:Lucida Sans Unicode, Lucida Grande, sans-serif;font-size:12px;text-decoration:none;color:black;vertical-align:middle;float:right;position:relative;margin:2px 0 0 10px;" href="#">twitter</a>'+
				'</div></td></tr></table></div>';
			
	return output;		
			
	}	
	
}