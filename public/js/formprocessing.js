let sendButton=document.getElementById('submitmsg');
let buttonClicked=false;
console.log("For processing script loaded");
sendButton.addEventListener('click',submit,true);
function submit(e){
	console.log("Click handler function triggered");
	e.preventDefault();
	if(buttonClicked==false){
	buttonClicked=true;
	let fname=document.getElementById('fullname').value;
	let emailaddress=document.getElementById('email').value;
	let message=document.getElementById('message').value;
	let contactObject={
		fullname:fname,
		email:emailaddress,
		msg:message
	};
	console.log(contactObject);
	$.ajax({
		type:'POST',
		url:'/contactmsg',
		data:contactObject,
		dataType:'json',
		timeoout:1000000,
		success:function(data){
			console.log("Message successfully sent");
			let iTag=document.createElement('i');
			iTag.textContent=data.msg;
			document.getElementById('serverresponse').appendChild(iTag);
			let inputs=document.getElementsByClassName('input');
			for(var i=0;i<inputs.length;i++)
				inputs[i].value='';
			
			
		}
		
	});
	
		setTimeout(function(){
			buttonClicked=false;
			console.log("buttonClicked is false again");
		},6000);
	}else{
		
		console.log('Buttonclicked is still true');
	}
}