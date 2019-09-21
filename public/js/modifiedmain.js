var menuOpened=false;
var counter=0;
var opening=false;
var closing=false;

function isIE(){
	
	let ua=window.navigator.userAgent;
	let msie=ua.indexOf('MSIE ');//ie 10 or older
	let trident=ua.indexOf('Trident/');//ie 11
	
	return(msie>0 || trident>0);
	
}

function mainCore(){
	
if(isIE()){
console.log('WTF');
document.getElementById('middleSVGContainer').style.display='none';	
document.getElementById('ieversion').style.display='inline-block';	

document.getElementById('internet-explorer-contact').addEventListener('click',function(){
			
			clicked('contact');
			
		});
		
document.getElementById('internet-explorer-projects').addEventListener('click',function(){
			
			clicked('projects');
			
		});
		
document.getElementById('internet-explorer-abilities').addEventListener('click',function(){
			
			clicked('abilities');
			
		});

}else{

document.getElementById('ieversion').style.display='none';	
//Layer 1(Layer_11)
let L1=createLayer('L1','right');//#SVGID_1_
let L1element1=new polygon();
L1element1.id='L1element1';
L1element1.points='442.3,256.9 313.8,389 326.1,323.5';
L1element1.layer=L1;
let L1gradient1=new gradient('gradient1','373.029','384.3911','401.5176','291.3593','L1');
L1element1.init();
L1gradient1.init();
L1gradient1.addStopColor('0','#ed683c');
L1gradient1.addStopColor('0.1914','#c54c28');
L1gradient1.addStopColor('0.516','#8a2104');
L1element1.addGradient('gradient1');


let L1element2=new polygon();//#SVGID_2_
L1element2.id='L1element2';
L1element2.points='444.2,256.9 339.1,238.5 326.1,323.5';
L1element2.layer=L1;
let L1gradient2=new gradient('L1gradient2','402.8174','320.0525','266.1348','352.0672','L1');
L1element2.init();
L1gradient2.init();
L1gradient2.addStopColor('0','#ED683C');
L1gradient2.addStopColor('0.1051','#DA5B33');
L1gradient2.addStopColor('0.3622','#b84221');
L1gradient2.addStopColor('0.5901','#9E3013');
L1gradient2.addStopColor('0.7782','#8F2508');
L1gradient2.addStopColor('0.9031','#8A2104');
L1element2.addGradient('L1gradient2');


//Layer 2(Layer_10)

let L2=createLayer('L2','topright');
let L2element1=new polygon();//#SVGID_3_
L2element1.id='L2element1';
L2element1.points='304.5,279.2 430.9,282.1 241,306.4';
L2element1.layer=L2;
let L2gradient1=new gradient('L2gradient1','288.8066','345.3495','218.4082','309.3578','L2');
L2element1.init();
L2gradient1.init();
L2gradient1.addStopColor('2.040820e-002','#F3903F');
L2gradient1.addStopColor('0.2098','#ED683C');
L2gradient1.addStopColor('0.2905','#E7653A');
L2gradient1.addStopColor('0.3804','#DD5D34');
L2gradient1.addStopColor('0.4748','#CC512C');
L2gradient1.addStopColor('0.5723','#B54020');
L2gradient1.addStopColor('0.6713','#972B0E');
L2gradient1.addStopColor('0.7152','#892003');
L2gradient1.addStopColor('0.948','#851D00');
L2element1.addGradient('L2gradient1');

let L2element2=new polygon();//#SVGID_4_
L2element2.id='L2element2';
L2element2.points='430.9,282.1 256.2,209.5 304.5,279.2';
L2element2.layer=L2;
L2gradient2=new gradient('L2gradient2','356.457','319.6908','219.6328','294.1009','L2');
L2element2.init();
L2gradient2.init();
L2gradient2.addStopColor('2.040820e-002','#f3903f');
L2gradient2.addStopColor('3.583180e-002','#F28A3F');
L2gradient2.addStopColor('0.3728','#ED683C');
L2gradient2.addStopColor('0.4629','#CC512B');
L2gradient2.addStopColor('0.5568','#B23E1E');
L2gradient2.addStopColor('0.6523','#9D2F12');
L2gradient2.addStopColor('0.8465','#871F02');
L2gradient2.addStopColor('0.948','#851D00');
L2element2.addGradient('L2gradient2');


let L2element3=new polygon();//#SVGID_5_
L2element3.id='L2element3';
L2element3.points='304.6,278.7 243,306.4 256.4,209.5';
L2element3.layer=L2;
L2gradient3=new gradient('L2gradient3','287.5142','249.3546','229.8477','307.1378','L2');
L2element3.init();
L2gradient3.init();
L2gradient3.addStopColor('2.040820e-002','#f3903f');
L2gradient3.addStopColor('3.583180e-002','#F28A3F');
L2gradient3.addStopColor('0.1649','#ED683C');
L2gradient3.addStopColor('0.2452','#CE522D');
L2gradient3.addStopColor('0.3377','#B33F1F');
L2gradient3.addStopColor('0.431','#9E3013');
L2gradient3.addStopColor('0.5243','#902508');
L2gradient3.addStopColor('0.6173','#871F02');
L2gradient3.addStopColor('0.7103','#851D00');
L2element3.addGradient('L2gradient3');



//Layer3 (Layer_9)
let L3=createLayer('L3','bottomright');
let L3element1=new polygon();//#SVGID_6_
L3element1.id='L3element1';
L3element1.points='365.2,366.1 358.5,326.7 334.6,326.7';
L3element1.layer=L3;
L3gradient1=new gradient('L3gradient1','353.5449','347.3296','327.5322','359.9725','L3');
L3element1.init();
L3gradient1.init();
L3gradient1.addStopColor('0','#ED683C');
L3gradient1.addStopColor('0.335','#C54C28');
L3gradient1.addStopColor('0.9031','#8A2104');
L3element1.addGradient('L3gradient1');

let L3element2=new polygon();//#SVGID_7_
L3element2.id='L3element2';
L3element2.points='453.4,297.7 304.6,285.3 387.7,396 390.7,315.1';
L3element2.layer=L3;
L3gradient2=new gradient('L3gradient2','766.9785','669.7482','351.7598','154.5184','L3');
L3element2.init();
L3gradient2.init();
L3gradient2.addStopColor('0','#ED683C');
L3gradient2.addStopColor('0.2005','#CA4F2B');
L3gradient2.addStopColor('0.4084','#AE3B1C');
L3gradient2.addStopColor('0.6016','#9A2D10');
L3gradient2.addStopColor('0.7725','#8E2407');
L3gradient2.addStopColor('0.9031','#8A2104');
L3element2.addGradient('L3gradient2');


let L3element3=new polygon();//#SVGID_8_
L3element3.id='L3element3';
L3element3.points='387.7,396 461,343.2 453.4,297.7 390.7,315.1';
L3element3.layer=L3;
L3gradient3=new gradient('L3gradient3','738.5088','716.1366','204.9219','321.6914','L3');
L3element3.init();
L3gradient3.init();
L3gradient3.addStopColor('0.4268','#ED683C');
L3gradient3.addStopColor('0.4828','#DE5E35');
L3gradient3.addStopColor('0.7048','#B03D1D');
L3gradient3.addStopColor('0.8678','#94290C');
L3gradient3.addStopColor('0.9534','#8A2104');
L3gradient3.element.setAttribute('gradientTransform','matrix(-0.8959 0.4443 -0.4443 -0.8959 1000.6846 307.8086)');
L3element3.addGradient('L3gradient3');


let L3element4=new polygon();//#SVGID_9_
L3element4.id='L3element4';
L3element4.points='387.7,396 302.7,285.3 390.7,315.1';
L3element4.layer=L3;
L3gradient4=new gradient('L3gradient4','411.6816','243.5848','364.0928','300.1847','L3');
L3element4.init();
L3gradient4.init();
L3gradient4.addStopColor('0.2849','#ED683C');
L3gradient4.addStopColor('0.2919','#E8653A');
L3gradient4.addStopColor('0.4065','#BF4725');
L3gradient4.addStopColor('0.5055','#A23215');
L3gradient4.addStopColor('0.5841','#902609');
L3gradient4.addStopColor('0.6326','#8A2104');
L3element4.addGradient('L3gradient4');



let L3element5=new polygon();//#SVGID_11_
L3element5.id='L3element5';
L3element5.points='362.2,362.8 390.7,315.1 356.4,355.3';
L3element5.layer=L3;
L3gradient5=new gradient('L3gradient5','390.4248','349.3526','321.0791','371.1334','L3');
L3element5.init();
L3gradient5.init();
L3gradient5.addStopColor('0.163','#ED683C');
L3gradient5.addStopColor('0.1782','#E8653A');
L3gradient5.addStopColor('0.4257','#BF4725');
L3gradient5.addStopColor('0.6396','#A23215');
L3gradient5.addStopColor('0.8094','#902609');
L3gradient5.addStopColor('0.914','#8A2104');
L3element5.addGradient('L3gradient5');

		let contact=new image('link','3B5E78EC2',L3,244,137,'matrix(0.24 -0.02 -0.05 0.24 396.3682 319.7041)','display:none;overflow:visible;opacity:0.67;transition:0.4s;-webkit-transition:0.4s;-moz-transition:0.4s;');
			contact.init();
			contact.img.addEventListener('click',function(){
			
			clicked('contact');
			
		});

//Layer4(Layer_8)
let L4=createLayer('L4','bottom');
let L4element1=new polygon();//#SVG_16_
L4element1.id='L4element1';
L4element1.points='300.5,272.6 323.8,274.2 358.5,430.6 325.7,433.5';
L4element1.layer=L4;
L4gradient1=new gradient('L4gradient1','360.1367','266.8021','403.293','272.8929','L4');
L4element1.init();
L4gradient1.init();
L4gradient1.addStopColor('0','#F28A3F');
L4gradient1.addStopColor('8.020187e-002','#DD7634');
L4gradient1.addStopColor('0.2785','#B64f20');
L4gradient1.addStopColor('0.4525','#9A340F');
L4gradient1.addStopColor('0.5937','#8A2304');
L4gradient1.addStopColor('0.6845','#851D00');
L4element1.addGradient('L4gradient1');
	

let L4element2=new polygon();//#SVG_17_
L4element2.id='L4element2';
L4element2.points='325.7,433.5 206.5,314 302,272.9';
L4element2.layer=L4;
L4gradient2=new gradient('L4gradient2','257.3394','305.3959','394.4248','280.6533','L4');
L4element2.init();
L4gradient2.init();
L4gradient2.addStopColor('2.040820e-002','#F3903F');
L4gradient2.addStopColor('3.583180e-002','#F28A3F');
L4gradient2.addStopColor('0.1649','#ED683C');
L4gradient2.addStopColor('0.2367','#CE522D');
L4gradient2.addStopColor('0.3194','#B33F1F');
L4gradient2.addStopColor('0.4028','#9E3013');
L4gradient2.addStopColor('0.4862','#902508');
L4gradient2.addStopColor('0.5694','#871F02');
L4gradient2.addStopColor('0.6525','#851D00');
L4element2.addGradient('L4gradient2');

	let products=new image('link','proddd',L4,400,250,'matrix(0.24 -0.02 -0.05 0.24 240 315)','display:none;overflow:visible;opacity:0.67;transition:0.4s;-webkit-transition:0.4s;-moz-transition:0.4s;');
			products.init();
			products.img.addEventListener('click',function(){
			
			clicked('products');
			
		});

let L5=createLayer('L5','bottomleft');//Layer_7
let shadowL5E2=new image('shadow','731A186E',L5,438,414,'matrix(0.24 0 0 0.24 253.8467 255.2266)','overflow:visible;opacity:0.67;');
shadowL5E2.init();


let L5element2=new polygon();//#SVG_18_
L5element2.id='L5element2';
L5element2.points='327.8,279.2 246.8,354.5 263.8,326.7 327.8,279.2';
L5element2.layer=L5;
L5gradient2=new gradient('L5gradient2','298.8081','277.6479','332.0791','304.0344','L5');
L5element2.init();
L5gradient2.init();
L5gradient2.addStopColor('1.366760e-002','#ED683C');
L5gradient2.addStopColor('0.1752','#E8653A');
L5gradient2.addStopColor('0.3308','#DF5E35');
L5gradient2.addStopColor('0.4842','#D0542E');
L5gradient2.addStopColor('0.6361','#BC4523');
L5gradient2.addStopColor('0.7855','#A23215');
L5gradient2.addStopColor('0.9031','#8A2104');
L5element2.addGradient('L5gradient2');


let L5element3=new polygon();//#SVG_19_
L5element3.id='L5element3';
L5element3.points='327.8,278.6 199.7,257.5 202.6,396';
L5element3.layer=L5;
L5gradient3=new gradient('L5gradient3','208.7295','264.7854','364.3535','266.2339','L5');
L5element3.init();
L5gradient3.init();
L5gradient3.addStopColor('1.366760e-002','#ED683C');
L5gradient3.addStopColor('0.2886','#C54B28');
L5gradient3.addStopColor('0.5634','#A43416');
L5gradient3.addStopColor('0.7769','#912609');
L5gradient3.addStopColor('0.9031','#8A2104');
L5element3.addGradient('L5gradient3');


let L5element4=new polygon();//#SVG_20_
L5element4.id='L5element4';
L5element4.points='202.6,396 250.5,311.6 327.8,278.6';
L5element4.layer=L5;
L5gradient4=new gradient('L5gradient4','296.6655','228.6043','379.7919','288.7668','L5');
L5element4.init();
L5gradient4.init();
L5gradient4.addStopColor('1.366760e-002','#ED683C');
L5gradient4.addStopColor('0.1752','#E8653A');
L5gradient4.addStopColor('0.3308','#DF5E35');
L5gradient4.addStopColor('0.6361','#BC4523');
L5gradient4.addStopColor('0.7855','#A23215');
L5gradient4.addStopColor('0.9031','#8A2104');
L5element4.addGradient('L5gradient4');

let L5element5=new polygon();//#SVG_21_
L5element5.id='L5element5';
L5element5.points='202.6,396 250.5,311.6 199.9,260.7';
L5element5.layer=L5;
L5gradient5=new gradient('L5gradient5','177.3574','238.5276','348.5146','296.9855','L5');
L5element5.init();
L5gradient5.init();
L5gradient5.addStopColor('1.366760e-002','#ED683C');
L5gradient5.addStopColor('0.1531','#D57530');
L5gradient5.addStopColor('0.5261','#9E3013');
L5gradient5.addStopColor('0.6993','#8A2104');
L5element5.addGradient('L5gradient5');



//Layer 6(Layer_6)

let L6=createLayer('L6','left');

let L6element1=new polygon();//#SVG_22_
L6element1.id='L6element1';
L6element1.points='304.5,279.2 199.9,260.7 181.1,206.2';
L6element1.layer=L6;
L6gradient1=new gradient('L6gradient1','171.312','294.728','242.7344','242.7344','L6');
L6element1.init();
L6gradient1.init();
L6gradient1.addStopColor('0','#FBB040');
L6gradient1.addStopColor('4.106710e-003','#F3903F');
L6gradient1.addStopColor('0.2912','#ED683C');
L6gradient1.addStopColor('1','#851D00');
L6element1.addGradient('L6gradient1');


let L6element2=new polygon();//#SVG_23_
L6element2.id='L6element2';
L6element2.points='304.5,279.2 186,143.4 181.1,206.2';
L6element2.layer=L6;
L6gradient2=new gradient('L6gradient2','162.8013','247.6152','152.2246','244.4497','L6');
L6element2.init();
L6gradient2.init();
L6gradient2.addStopColor('0','#FBB040');
L6gradient2.addStopColor('4.106710e-003','#F3903F');
L6gradient2.addStopColor('0.4441','#ED683C');
L6gradient2.addStopColor('1','#851D00');
L6element2.addGradient('L6gradient2');

let abilities=new image('link','94A7799F2',L6,275,242,'matrix(0.24 0 0.1 0.24 185.4395 188.6909)','transition:0.4s;-webkit-transition:0.4s;-moz-transition:0.4s;');
abilities.init();
abilities.img.addEventListener('click',function(){
	clicked('abilities');
});

//Layer 7(Layer_4)
let L7=createLayer('L7','bottomright');

let shadowL7E1=new image('shadow','731A1863',L7,622,661,'matrix(0.24 0 0 0.24 176.4165 148.8037)','overflow:hidden;opacity:0.72;');
shadowL7E1.init();

L7element1=new polygon();//#SVG_24_
L7element1.id='L7element1';
L7element1.points='185.4,150.8 273.8,209.5 304.5,279.2';
L7element1.layer=L7;
L7gradient1=new gradient('L7gradient1','234.6953','270.1886','224.166','192.5807','L7');
L7element1.init();
L7gradient1.init();
L7gradient1.addStopColor('0','#FBB040');
L7gradient1.addStopColor('4.106710e-003','#F3903F');
L7gradient1.addStopColor('0.2912','#ED683C');
L7gradient1.addStopColor('0.447','AE3B1C');
L7gradient1.addStopColor('1','#851D00');
L7element1.addGradient('L7gradient1');


L7element2=new polygon();//#SVG_25_
L7element2.id='L7element2';
L7element2.points='304.5,279.2 166.4,130.3 319.6,180.4';
L7element2.layer=L7;
L7gradient2=new gradient('L7gradient2','154.1865','263.4076','204.7461','204.7461','L7');
L7element2.init();
L7gradient2.init();
L7gradient2.addStopColor('0','#FBB040');
L7gradient2.addStopColor('4.106710e-003','#F3903F');
L7gradient2.addStopColor('0.2912','#ED683C');
L7gradient2.addStopColor('1','#851D00');
L7element2.addGradient('L7gradient2');

L7element3=new polygon();//#SVG_26_
L7element3.id='L7element3';
L7element3.points='250.2,220.6 278,166.8 238.6,206.2';
L7element3.layer=L7;
L7gradient3=new gradient('L7gradient3','224.2686','298.6086','229.1768','163.0211','L7');
L7element3.init();
L7gradient3.init();
L7gradient3.addStopColor('0','#FBB040');
L7gradient3.addStopColor('4.106710e-003','#F3903F');
L7gradient3.addStopColor('0.2912','#ED683C');
L7gradient3.addStopColor('0.447','#AE3B1C');
L7gradient3.addStopColor('1','#851D00');
L7element3.addGradient('L7gradient3');


//Layer 8(Layer_5)
let L8=createLayer('L8','top');

let shadowL8E1=new image('shadow','731A1867',L8,148,533,'matrix(0.24 0 0 0.24 288.541 165.5234)','overflow:visible;opacity:0.72;');
shadowL8E1.init();
L8element1=new polygon();//#SVG_27_
L8element1.id='L8element1';
L8element1.points='304.6,175.5 304.5,279.2 316,234.9';
L8element1.layer=L8;
L8gradient1=new gradient('L8gradient1','362.3057','287.1164','306.8398','203.3552','L8');
L8element1.init();
L8gradient1.init();
L8gradient1.addStopColor('2.040820e-002','#F3903F');
L8gradient1.addStopColor('0.2328','#ED683C');
L8gradient1.addStopColor('0.757','#851D00');
L8element1.addGradient('L8gradient1');

let shadowL8E2=new image('shadow','731A1860',L8,370,167,'matrix(0.24 0 0 0.24 314.541 254.376)','overflow:visible;opacity:0.72;');
shadowL8E2.init();
L8element2=new polygon();//#SVG_28_ 
L8element2.id='L8element2';
L8element2.points='369.3,279.2 334.6,263.4 304.5,279.2';
L8element2.layer=L8;
L8gradient2=new gradient('L8gradient2','345.3239','332.3533','294.1309','271.1053','L8');
L8element2.init();
L8gradient2.init();
L8gradient2.addStopColor('2.040820e-002','#F3903F');
L8gradient2.addStopColor('0.3724','#ED683C');
L8gradient2.addStopColor('1','#851D00');
L8element2.addGradient('L8gradient2');


L8element3=new polygon();//#SVG_29_
L8element3.id='L8element3';
L8element3.points='303.6,279.2 369.3,279.2 413.5,149.9';
L8element3.layer=L8;
L8gradient3=new gradient('L8gradient3','390.4922','353.3654','271.2607','205.3794','L8');
L8element3.init();
L8gradient3.init();
L8gradient3.addStopColor('2.040820e-002','#F3903F');
L8gradient3.addStopColor('0.3724','#ED683C');
L8gradient3.addStopColor('1','#851D00');
L8element3.addGradient('L8gradient3');


L8element4=new polygon();//#SVG_30_
L8element4.id='L8element4';
L8element4.points='304.5,279.2 302.7,165.7 366.5,206.2 ';
L8element4.layer=L8;
L8gradient4=new gradient('L8gradient4','378.8594','295.5255','302.3496','187.6555','L8');
L8element4.init();
L8gradient4.init();
L8gradient4.addStopColor('2.040820e-002','#F3903F');
L8gradient4.addStopColor('0.2328','#ED683C');
L8gradient4.addStopColor('0.757','#851D00');
L8element4.addGradient('L8gradient4');

L8element4=new polygon();//#SVG_31_
L8element4.id='L8element4';
L8element4.points='414.4,149.9 302.7,165.7 361.5,211.3';
L8element4.layer=L8;
L8gradient4=new gradient('L8gradient4','408.2168','316.4037','128.3198','200.8862','L8');
L8element4.init();
L8gradient4.init();
L8gradient4.addStopColor('2.040820e-002','#F3903F');
L8gradient4.addStopColor('0.2971','#ED683C');
L8gradient4.addStopColor('0.3718','#E7653A');
L8gradient4.addStopColor('0.4551','#DD5D34');
L8gradient4.addStopColor('0.5425','#CC512C');
L8gradient4.addStopColor('0.6327','#B54020');
L8gradient4.addStopColor('0.7243','#972B0E');
L8gradient4.addStopColor('0.765','#892003');
L8gradient4.addStopColor('0.948','#851D00');
L8element4.addGradient('L8gradient4');

let projects=new image('link','projects',L8,364,287,'matrix(0.24 0 0.05 0.24 300.73 157.8882)','display:none;overflow:visible;opacity:0.67;transition:0.4s;-webkit-transition:0.4s;-moz-transition:0.4s;');
projects.init();
	projects.img.addEventListener('click',function(){
		clicked('projects');
	});


let aboutm=new image('link','94A779992',L5,306,111,'matrix(0.22 0 0.1 0.24 219.2939 272.1641)','display:none;overflow:visible;transition:0.4s;-webkit-transition:0.4s;-moz-transition:0.4s;');		
aboutm.init();
		aboutm.img.addEventListener('click',function(){
			
			clicked('about');
			
		});


//Clicing openup functionality


function openUpMenu(status){
	
	console.log("Menu is opening up");
	
	let shadows=svg.querySelectorAll('.shadow');
	let topleft=svg.querySelectorAll('.topleft');
	let left=svg.querySelectorAll('.left');
	let bottomleft=svg.querySelectorAll('.bottomleft');
	let bottom=svg.querySelectorAll('.bottom');
	let bottomright=svg.querySelectorAll('.bottomright');
	let right=svg.querySelectorAll('.right');
	let topright=svg.querySelectorAll('.topright');
	let top=svg.querySelectorAll('.top');
	if(status==='open'){
		
		if(menuOpened===false && counter===0){
			menuOpened=true;
	for(i=0;i<shadows.length;i++){
		shadows[i].setAttribute('style','display:none;');
		
	}
	
	let loop=setInterval(function(){
		counter+=2;

	for(let j=0;j<right.length;j++){
		
		right[j].setAttribute('transform','translate('+counter+',0)');
	}
	
	for(let x=0;x<bottomright.length;x++){
		
		bottomright[x].setAttribute('transform','translate('+counter+','+counter+')');
	}
	
	for(let y=0;y<topright.length;y++){
		
		topright[y].setAttribute('transform','translate('+counter+','+-counter+')');
	}
	
	for(let z=0;z<bottom.length;z++){
		
		bottom[z].setAttribute('transform','translate(0,'+counter+')');
	}
	//L6.setAttribute('transform','translate('+-counter+',0)');
	
	for(let k=0;k<bottomleft.length;k++){
		
		bottomleft[k].setAttribute('transform','translate('+-counter+','+counter+')');
	}
	
	for(let g=0;g<top.length;g++){
		
		top[g].setAttribute('transform','translate(0,'+-counter+')');
	}
		
		for(let a=0;a<left.length;a++){
		
		left[a].setAttribute('transform','translate('+-counter+',0)');
	}	
		
		if(counter===30){
			
			clearInterval(loop);	
		}
		
	},13);
	
		}else{
			
			console.log('menu is already opened');
		}	
	
}else if(status==='close'){
	if(menuOpened===true && counter===30){
	console.log('Menu is closing');
	
	menuOpened=false;
	
	let loop=setInterval(function(){
		counter-=2;
		
	for(let j=0;j<right.length;j++){
		
		right[j].setAttribute('transform','translate('+counter+',0)');
	}
	
	for(let x=0;x<bottomright.length;x++){
		
		bottomright[x].setAttribute('transform','translate('+counter+','+counter+')');
	}
	
	for(let y=0;y<topright.length;y++){
		
		topright[y].setAttribute('transform','translate('+counter+','+-counter+')');
	}
	
	for(let z=0;z<bottom.length;z++){
		
		bottom[z].setAttribute('transform','translate(0,'+counter+')');
	}
	//L6.setAttribute('transform','translate('+-counter+',0)');
	
	for(let k=0;k<bottomleft.length;k++){
		
		bottomleft[k].setAttribute('transform','translate('+-counter+','+counter+')');
	}
	
	for(let g=0;g<top.length;g++){
		
		top[g].setAttribute('transform','translate(0,'+-counter+')');
	}
		
		for(let a=0;a<left.length;a++){
		
		left[a].setAttribute('transform','translate('+-counter+',0)');
	}	
		
		if(counter===0){
			closing=false;
			clearInterval(loop);
			for(i=0;i<shadows.length;i++){
		shadows[i].setAttribute('style','display:block;');
		
	}
		}
		
	},20);
	
}else{
	
	console.log("Menu shape is closed");
}
}
}


document.getElementById('svgCanvas').addEventListener('mouseover',function(e){
	console.log("Closing is: "+closing);
	console.log("Opening is: "+opening);

	let menutexts=document.getElementsByClassName('menutext');
		console.log("Hovered over menu shape item");
		openUpMenu('open');
		for(let i=0;i<menutexts.length;i++){
	
		menutexts[i].classList.add('textdisplayed');
		//menutexts[i].setAttribute('style','opacity:1;');
		}
	
		
});

document.getElementById('svgCanvas').addEventListener('mouseleave',function(){


	let menutexts=document.getElementsByClassName('menutext');	
		openUpMenu('close');
			for(let i=0;i<menutexts.length;i++){
	
			menutexts[i].classList.remove('textdisplayed');
			//menutexts[i].setAttribute('style','opacity:0;');
			}
	
});

document.getElementById('logo').addEventListener('click',function(){
	
	location.reload();
});

}
}

mainCore();