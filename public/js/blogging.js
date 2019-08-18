console.log('Blogging javascript runinng');
let bListHeader=document.getElementById('listheader');
bListHeader.addEventListener('click',function(){
	console.log("List header clicked");
	document.getElementById('listContainer').classList.toggle('listClicked');
});

