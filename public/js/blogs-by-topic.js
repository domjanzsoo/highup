	var topicArea=document.getElementById('blogs-by-topics');
	var topics=document.getElementsByClassName('topic');
	for(var i=0;i<topics.length;i++){
	
	topics[i].addEventListener('click',topicClick);

	}
	
	function topicClick(e){
	topicArea.innerHTML="";
	let theTopic=this.id;
	console.log(theTopic+' is clicked');
		$.ajax({
		type:'GET',
		url:'/blogs/bytopic/'+theTopic,
		dataType:'json',
		timeoout:1000000,
		success:function(data){
		
			console.log(data);
			//let resultData=JSON.parse(data);
			for(var i in data){
				let link=document.createElement('a');
				link.classList.add('topicLink');
				link.setAttribute('href','blog/'+data[i]['id']);
				link.innerText=data[i]['title'];
				topicArea.appendChild(link);
			}
		}
		
	});
	}
	
	let blogLinks=document.getElementsByClassName('bloglink');
	for(var j=0;j<blogLinks.length-5;j++){
		
		blogLinks[j].style.display="none";
	}