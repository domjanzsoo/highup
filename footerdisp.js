	<html>
	<head>
	</head>
	<body>
	<script>
		let output='<h3 style="font-family:Arial, Helvetica, sans-serif;">Hello Zsolt</h3>'+
				'<div style="display:block;position:relative;margin:50px auto 10px auto;">You received a message through the hoptoit contact form</div>'+
				'<div>Sender: <span style="font-weight:bold">'+fname+' '+lname+'</span>'+
				'<div>Sender email address: <span style="font-weight:bold">'+email+'</span>'+
				'<div style="display:block;position:relative;margin-top:40px;font-weight:bold;">Message received: '+
				'</br><div><i>'+mess+'</i></div>'+
				'<div style="display:block;position:relative;margin-top:100px;">'+
				'<div style="display:block;width:100%;"><img src="/img/logo/fox.png" style="width:40px;height:40px;">'+
				'<table style="width:100%;border:none;">'+
				'<tr><td>'+
				'<div style="display:inline-block;">'+
				'<img style="width:24px;height:25px;" src="/img/footerarrows/linkedin.png" />'+
				'<a class="footerlink" href="#">linked in</a>'+
				'</div></div>';
				
	let div=document.createElement('div');
	div.innerHTML=output;
	</script>
	</body>
	</html>
	
