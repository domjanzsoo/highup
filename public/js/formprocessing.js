let sendButton=document.getElementById('submitbutt');
let buttonClicked=false;
console.log("For processing script loaded");
sendButton.addEventListener('click',submit,true);
let responsediv=document.getElementById('serverresponse');
function submit(e){
	console.log("Click handler function triggered");
	
	e.preventDefault();
	if(buttonClicked==false){
	buttonClicked=true;
	responsediv.innerText='Processing the given details...';
	document.getElementById('errors').innerText='';
	let fname=document.getElementById('fullname').value;
	let emailaddress=document.getElementById('email').value;
	let message=document.getElementById('message').value;
	let ftype=document.getElementById('ftype').value;
	let contactObject={
		fullname:fname,
		email:emailaddress,
		msg:message,
		formtype:ftype
		
	};
	console.log(contactObject);
	$.ajax({
		type:'POST',
		url:'/contactmsg',
		data:contactObject,
		dataType:'json',
		timeout:1000000,
		success:function(data){
			if(data.msgtype==="confirmation"){
			console.log("Message successfully sent");
			responsediv.innerText='Message sent successfully';
			let inputs=document.getElementsByClassName('input');
			for(var i=0;i<inputs.length;i++)
			{
				inputs[i].value='';
			}
			
		
		}else if(data.msgtype==="error"){
			//alert(data.msg);
			responsediv.innerText='';
			document.getElementById('errors').innerText=data.msg;
		}	
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