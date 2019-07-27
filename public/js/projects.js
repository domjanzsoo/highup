let projectPanels=document.getElementsByClassName('project');
let slideInAction="none";
for(var i=0;i<projectPanels.length;i++){
	
	projectPanels[i].addEventListener('mouseenter',function(){
		
		console.log('Mouse is on a project panel');
		let id=this.getAttribute('id');
		let info=this.querySelector('.infocover');
		let infoMargin=600;
		if(slideInAction==="none"){
		let slide=setInterval(function(){

			if(infoMargin===0){
				clearInterval(slide);
				slideInAction="none";
			}else{
			infoMargin-=20;
			info.style.marginLeft=infoMargin+'px';
			}
		
		},8);
		}else{
			console.log("Sliding action is active");
		
		}
		this.style.backgroundImage='url("/img/projects/'+id+'blurred.png")';
	});
	
		projectPanels[i].addEventListener('mouseleave',function(){
		slideInAction="close";
		console.log('Mouse is on a project panel');
		let info=this.querySelector('.infocover');
		let infoMargin=0;
		let id=this.getAttribute('id');
			if(slideInAction==="close" || slideInAction==="none"){
		let slide=setInterval(function(){
	
			if(infoMargin===600){
				clearInterval(slide);
				slideInAction="none";
			}else{
			infoMargin+=20;
			info.style.marginLeft=infoMargin+'px';
			
			}
			},8);	
		}else{
			console.log("Sliding is active");
		}
		this.style.backgroundImage='url("/img/projects/'+id+'.png")';
	});
}