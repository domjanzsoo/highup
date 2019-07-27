var menuClicked=false;
var displayedPage='Main';
let svg;
var container=null;
var nameSpace="http://www.w3.org/2000/svg";
var gradients=[];
console.log('Window is loaded for javascript');


//setting up the container and the svg
svg=document.getElementById('svgCanvas');


//the polygon object
var polygon=function(){
	
	this.id='';
	this.poly=null;
	this.layer=null;
	this.points='';
	this.fill='red';

	this.init=function(){
		this.poly=document.createElementNS(nameSpace,"polygon");
		console.log('polygon created');
		this.poly.setAttribute('points',this.points);
		this.poly.setAttribute('id',this.id);
		this.layer.appendChild(this.poly);
		
	};
	
	this.addGradient=function(id){
		let poly=this.poly;
		console.log('gradient adding function');
		let grad=this.layer.querySelector('#'+id);
		console.log('Gradient is: '+grad);
		if(grad && grad!==null){
			if(poly!==null){
			poly.setAttribute('fill','url("#'+id+'")');
			}
		}else{
			
			console.log('Gradient with the id  '+id+' not found.');
		}
	
		
	};
	
	this.init=this.init.bind(this);
	this.addGradient=this.addGradient.bind(this);
	return this.poly;

};
//image object
var image=function(type,name,layer,w,h,trans,style){
	this.img=null;
	this.imghover=null;
	this.x=0;
	this.y=0;
	this.relatedElement=null;
	this.layer=layer;
	this.width=w;
	this.height=h;
	this.transform=trans;
	this.style=style;
	this.init=function(){
		let that=this;
		if(type==='shadow'){
		this.img=document.createElementNS(nameSpace,'image');
		this.img.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','/img/shadows/'+name+'.png');
		this.img.classList.add('shadow');
		
		}else if(type==='link'){
		this.imghover=document.createElementNS(nameSpace,'image');
		
		this.img=document.createElementNS(nameSpace,'image');
		this.img.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','/img/menutexts/'+name+'.png');
		this.imghover.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','/img/menutexts/'+name+'hovered.png');
		this.img.classList.add('menutext');
		this.imghover.classList.add('menutext');
		this.img.addEventListener('mouseenter',function(e){
		
			that.img.classList.remove('textdisplayed');
			//that.img.setAttribute('style','opacity:0;');
			console.log('Menu text hovered');
		
		},true);
		this.img.addEventListener('mouseleave',function(){
			
			
				console.log('Mouse is out');
				that.img.classList.add('textdisplayed')
				//that.img.setAttribute('style','opacity:1;');

			},true);
		}
		
			if(this.imghover!==null){
				
			this.imghover.setAttribute('width',this.width);
			this.imghover.setAttribute('height',this.height);
			this.imghover.setAttribute('transform',this.transform);
			
			this.layer.appendChild(this.imghover);
		}
		
		
		this.img.setAttribute('width',this.width);
		this.img.setAttribute('height',this.height);
		this.img.setAttribute('transform',this.transform);
		
		if(this.imghover!==null){
			this.layer.appendChild(this.imghover);
		}
		if(this.layer && this.layer!==null){
		this.layer.appendChild(that.img);
		console.log('Image rendered');
		}else{
			
			console.log('No layer found');
		
		}
		this.img.setAttribute('x',this.x);
		this.img.setAttribute('y',this.y);
		
	}

};
//the gradient object

let gradient=function(id,x1,x2,y1,y2,layer){
	
	
	this.reatedElement=null;
	this.stops=[];
	this.layer=document.getElementById(layer);
	this.x1=x1;
	this.x2=x2;
	this.y1=y1;
	this.y2=y2;
	this.id=id;
	this.element=null;
	this.addStopColor=function(offset,color){
		
		let newStop=new stop(offset,color);
		newStop.grad=this.element;
		newStop.init();
	
		
		
	}
	this.init=function(){
		
		this.element=document.createElementNS(nameSpace,'linearGradient');
		this.element.setAttribute('id',this.id);
		this.element.setAttribute('x1',this.x1);
		this.element.setAttribute('x2',this.x2);
		this.element.setAttribute('y1',this.y1);
		this.element.setAttribute('y2',this.y2);
		this.element.setAttribute('gradientUnits','userSpaceOnUse');
		this.layer.appendChild(this.element);
		
	}
	
	this.init=this.init.bind(this);
	this.addStopColor=this.addStopColor.bind(this);
};

//color stop object 

let stop=function(offset,color){
	this.offset=offset;
	this.stopColor=color;
	this.grad=null;
	this.element=null;
	this.init=function(){
		
		this.element=document.createElementNS(nameSpace,'stop');
		this.element.setAttribute('offset',this.offset);
		this.element.setAttribute('style','stop-color:'+this.stopColor);
		if(this.grad && this.grad!==null){
		this.grad.appendChild(this.element);
		}
		return this.element;
		
	}
	
}





//additional functions/event handlers
function createLayer(id,classname){
	
	let layer=document.createElementNS(nameSpace,'g');
	layer.setAttribute('id',id);
	layer.classList.add(classname);
	layer.classList.add('polylayer');
	svg.appendChild(layer);
	return layer;
};

let path=function(color,layer){
	this.color=color;
	this.points='';
	this.layer=layer;
	this.p=document.createElementNS(nameSpace,'path');
	this.init=function(){
		this.p.setAttribute('d',this.points);
		this.p.setAttribute('fill',this.color);
		this.layer.appendChild(this.p);
		
	};
};

function clicked(item){
	if(displayedPage!=='item'){
	console.log(item+" is clicked.Eventhandler triggered");
	let newElement=document.createElement('div');
	newElement.classList.add('hidden');
	let container=document.getElementById('container');
		if(item==='abilities'){
		
		container.style.overflow="visible";
		console.log("Height of container changed to auto");
	}
	let hiddenElement=container.querySelector('.hidden');
	let presentView=container.querySelector('.activeview');
	let displayObject=document.createElement('object');
	let containerWidth=container.offsetWidth;
	displayObject.setAttribute('data','/crossbrowser/'+item+'/zsolt-domjan-'+item+'.html');

	hiddenElement.appendChild(displayObject);
	
	//hiddenElement.setAttribute('style','width:'+containerWidth+'px;');
	hiddenElement.style.width=containerWidth+'px';
	//presentView.remove();
	container.removeChild(presentView);
	hiddenElement.classList.remove('hidden');
	hiddenElement.classList.add('activeview');
	
	container.insertBefore(newElement,hiddenElement);
	
	
	

	}else{
		
		console.log('The present displayed page is '+item);
	}
	
};

