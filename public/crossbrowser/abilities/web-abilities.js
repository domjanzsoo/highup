	var RADIUS=34;
	var CIRCUMREFERENCE=2*Math.PI*RADIUS;
	
	var progress=function(id,value){
	let item=document.getElementById(id+"meter");
	/*document.getElementById(id+'group').addEventListener('mouseover',function(){
		item.setAttribute('stroke','#12356e');
	});
	
	item.addEventListener('mouseleave',function(){
		item.setAttribute('stroke','#37defc');
	});
	console.log("Progress function is running on "+id);*/
	var progress=value/100;
	var dashOffset=CIRCUMREFERENCE*(1-progress);
	setTimeout(function(){
	item.style.strokeDashoffset=dashOffset;
	
	},2000);
	};
	
	let progressNumber=document.getElementsByClassName('percentage');
	progressCounter=0;
	let numberCount=function(){
	console.log("Progress counting is next");
	
	
	setTimeout(function(){

				
			let Loop=setInterval(function(){
				if(progressCounter===100)
				{
					console.log("Loop is over");
					clearInterval(Loop);
				}else{
				
				progressCounter++;
				console.log("Loop function is running");
				for(let x=0;x<progressNumber.length;x++){
				
					switch (progressNumber[x].getAttribute('id')){
					
						case 'htmltext':
							console.log("Html progress chart found");
							if(progressCounter<=80){
							progressNumber[x].textContent=progressCounter+'%';
							}else{
							
							console.log('Progress on css/html has reached the limit');
							}
							
						break;
						
						case 'jstext':
							if(progressCounter<=68){
							
							progressNumber[x].textContent=progressCounter+'%';
							
							}else{
							
							console.log('Progress on javascript has reached the limit');
							}
						break;
						
						case 'svgtext':
						
							if(progressCounter<=64){
							
							progressNumber[x].textContent=progressCounter+'%';
							
							}else{
							
							console.log('Progress on svg has reached the limit');
							}
							
						break;
						
						case 'phptext':
						
							if(progressCounter<=40){
							
							progressNumber[x].textContent=progressCounter+'%';
							
							}else{
							console.log('Progress on php has reached the limit');
							}
						break;
						
						case 'vstext':
							
							if(progressCounter<=38){
							
							progressNumber[x].textContent=progressCounter+'%';
							
							}else{
							
							console.log('Progress on visual studio has reached the limit');
							
							}
						break;
						
						case 'adobetext':
						
							if(progressCounter<=55){
							
							progressNumber[x].textContent=progressCounter+'%';
							
							}else{
							
							console.log('Progress on adobe has reached the limit');
							}
						break;
						
						case 'nodetext':
						
							if(progressCounter<=30){
							
							progressNumber[x].textContent=progressCounter+'%';
							
							}else{
							
							console.log('Progress on node js has reached the limit');
							}
						break;
						
						}
				
				
				}
				
				}
			},25);
			
		
	},1800);
};
	
	let elements=document.getElementsByClassName('progress');
	for(var j=0;j<elements.length;j++){
	elements[j].style.strokeDashoffset=CIRCUMREFERENCE;

	elements[j].style.strokeDasharray=CIRCUMREFERENCE;
	}
	
	
	
	
	window.onload=function(){
	console.log("Window loaded, progress function is next");
	let elements=document.getElementsByClassName('progress');
	numberCount();
	progress('html',80);
	progress('js',68);	
	progress('svg',64);
	progress('php',40);
	progress('vs',38);
	progress('adobe',55);
	progress('node',30);
	eventListeners();
	};
	
	function eventListeners(){
	console.log("Event listener function is running...");
	let groups=document.querySelectorAll('.ability');
	for(var i=0;i<groups.length;i++){
	groups[i].addEventListener('mouseover',mouseOver,false);
	groups[i].addEventListener('mouseout',mouseOut,false);
	groups[i].addEventListener('click',abilityInfo,false);
	
	}
	}
	
	function mouseOver(){
		this.querySelector('.progress').setAttribute('stroke','#02acbf');
	}
	function mouseOut(){
		this.querySelector('.progress').setAttribute('stroke','#37defc');
	}
	
	function abilityInfo(){
	let id=this.id;
	console.log(id+" is clicked.");
	let display=document.getElementById('infodisplay');
	let infoText="";
	switch(id){
	
	case 'htmlgroup':
	
	infoText="<h3 class='title'>Knowledge of dom level, never enough</h3><p>Everything has a frame,all details and functionalities taking the required and appropriate place in it. My first experience with web development was in high-school learning HTML. Of course, back then resources were more restricted,and the interpretation of it given by the teacher more dry. Based on my 'studies' at that time, all I was able to do with HTML was creating tables and positioning images after hours of struggling.That is probably the main reason why I lost all my entusiasm in learning any sort of development science. Nowadays we can get a different perspective on these things. And as I use HTML/CSS in daily basis, I think is important to track my progress of the way I'm dealing with the language.The way we use these tools has a huge impact on the outcome of design,marketing,UI efficiency and of course SEO; what makes me think, there is always something new to learn.</p> ";
	display.innerHTML=infoText;
	display.style.height="500px";

	break;
	
	case 'jsgroup':
	
	infoText="<h3 class='title'>Javascript seen with my eyes</h3><p>I can still clearly remember those quiet winter evenings, when I used to sit down to my desk trying to figure out the right direction to take in my life.At one of these occasions, after some googling with no purpose, I managed to find a nice colorful tutorial about javascript.I grabbed a pen ,a piece of paper and I started to write notes, codes and small illustrations from the tutorial. After ten minutes I had to admit; I had no idea what I'm reading.Few years later my full involvement in web development was an absolute coincidence, I started to read a book, what gave me an exact task to finish using the knowledge offered .The front-end approach of the book was jQuery, but after reading the last page, I had become a different person with an absolute new, drastically changed mindset. My view of javascript ,as a whole ,had got an absolute new angle. A wise man once said: coincidences do not exist, everything happens for a reason. If that's the case, then I had to read that book to realise, there is nothing what we as humans cannot learn, only wrong perspective exists. I had to learn, how to step back, and take a new look on the other side of things. I'm really fascinated about back-end development, but I feel that JS can be the break out for my career as a developer.That's why I decided to work on both sides simultanously. </p> ";
	display.innerHTML=infoText;
	display.style.height="500px";
	
	
	break;
	
	case 'svggroup':
	
	infoText="<h3 class='title'>Looking forward to the future</h3><p>Svg is one of the greatest graphic inventions for web browsers.Since the official release of it in 2001, many things have changed in web development,as in the number of upgrades being made on all the existing web browsers. In the present there is still a narrow precentage of internet users, who can find difficulties in displaying svg images in their browsers. Main reason of this is internet explorer, but starting from the upgrade to version 9 of ie, even Microsoft had realised,SVG cannot be ignored. After becoming more confident in using pure javascript I started to feel that something is missing. I needed somehow to get the ability to express emotions and dynamism rendered at the same time, but still to be able to interact with this graphic manifestations. I started to play around with html5 and canvas, which is a really useful tool, and I think there are plenty of long term projects waiting for me to be done with canvas and javascript. But still, something was missing, and that was SVG. Being a vector image is freely scalable and size saving.To create svg, we can find plenty of online svg editors/generators, but with some adobe illustrator knowledge we can create anything we need . Also, for interactions, developers all around the world created javascript libraries for all kind of purposes, but if someone has some javascript experience, is really simple to create his own small 'library' as I did for the main menu of this page.SVG is written in XML, that means as a markup language properties can be easily modified, class or id names added or changed for any individual element, and of course it can be easily generated by javascript. Animation and event handling cannot be a problem at all. I really love this tool,and I think it is definitely part of the future web.   </p> ";
	display.innerHTML=infoText;
	display.style.height="500px";
	
	break;
	
	case 'phpgroup':
	
	infoText="<h3 class='title'>The ugly one, who is still on the top</h3><p>Github made a study last year, ranging the ten most popular programming languages of the year. Surprisingly PHP is in the top five. Web giants ,like Facebook and Yahoo built there platforms using this language and they still stick to it. These dominant pages, and of course wordpress makes the language to be alive and constantly growing. 'Training wheels without the bike' , as it is described in an article, PHP can be a good entry point in the back-end programming world.As I already mentioned , my programming studies started with the reading of a book, what I did just to kill my time with something. I must give a credit to that book, because I think is genial, keeping dry theories between boundaries, focusing on the action, a planner calendar app, which actually gives the full plot of the book.Jason Lengstorf:Pro PHP and jQuery, a life changing book.It gave me the necassary skillset to build a scanning application for my actual workplace at that time. The app was able to save scanned orders,allocate them to specific locations, and display it if is any request.It's not rocket science, but not bad from a person,who 7-8 months before had nothing to do with web development. Learning PHP can give an accurate account of object orientation, MVC structure, data handling or any other back-end technique. PHP probably doesn't have the same magic anymore, but it's a programming language, which can be written and reused in a clear and easy way.  </p> ";
	display.innerHTML=infoText;
	display.style.height="500px";
	
	break;
	
	
	case 'vsgroup':
	
	infoText="<h3 class='title'>Microsoft on the web</h3><p>Since the first release of the Visual Studio 97 many things have changed in web development, and still Microsoft keeps the pace with the newest technologies. Being a simple end-user and never getting involved in development as a profession, I missed to realise the real power of some tech companies of the world. Of course we can enjoy using our mac books, or our last updated windows operation systems, but there is much more behind of these actions, what we cannot imagine. There is a constant race and fight for every little corner of the world-wide-web world. The more developers start to use a technology(reaching out for more users and conquering more 'territory'), the success is bigger. The idea to use visual studio to compile c# code for back-end is brilliant. The reason I stopped to dig deeper is the complexity of asp.net.In order to start my developer career, I had to learn how to build efficient web application from scratch asap. But .net and visual studio is still on my magic bucket list, because I really believe it is going to become a dominant back-end development platform(if is not already).  </p> ";
	display.innerHTML=infoText;
	display.style.height="500px";
	
	break;
	
	case 'adobegroup':
	
	infoText="<h3 class='title'>When what is ready offered is not enough</h3><p>Nowadays is really easy to obtain a well captured and edited picture. Many modern smart phones include cameras competing with medium ranged proffesional cameras. We can have apps and filters for nearly any adjustment. Few taps on the screen and voila, we have the final product. Back in the old days things were not so simple. You had the choice to hire someone to do some graphical/editing job for you, or you could just learn. My choice at that time was the latter. Though I had nothing to do with web development at that time, but I was really excited about opportunities given by the adobe products. I was impressed about the compatibility of different formats created by diferent software, and the possiblity of how much these softwares can do together. I'm still not a pro, but if I need something vectorial(a logo for example),a precised image element or just a stunning background  I prefer to try my adobe skills first. It's not easy but it gives an extra credit to my projects.  </p> ";
	display.innerHTML=infoText;
	display.style.height="500px";
	
	break;
	
	case 'nodegroup':
	
	infoText="<h3 class='title'>When what is ready offered is not enough</h3><p>Nowadays is really easy to obtain a well captured and edited picture. Many modern smart phones include cameras competing with medium ranged proffesional cameras. We can have apps and filters for nearly any adjustment. Few taps on the screen and voila, we have the final product. Back in the old days things were not so simple. You had the choice to hire someone to do some graphical/editing job for you, or you could just learn. My choice at that time was the latter. Though I had nothing to do with web development at that time, but I was really excited about opportunities given by the adobe products. I was impressed about the compatibility of different formats created by diferent software, and the possiblity of how much these softwares can do together. I'm still not a pro, but if I need something vectorial(a logo for example),a precised image element or just a stunning background  I prefer to try my adove skills first. It's not easy but it gives an extra credit to my projects.  </p> ";
	display.innerHTML=infoText;
	display.style.height="500px";
	
	break;
	
	}
	
	
	}