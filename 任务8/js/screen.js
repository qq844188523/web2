function change(t,boxname,titlename,menuname1,menuname2){
	var title = document.querySelectorAll('.'+titlename);
	console.log(title);
	var box1 = document.querySelector('.'+menuname1);
	var box2 = document.querySelector('.'+menuname2);
	for(var i=0;i<title.length;i++){
		if(title[i].id == 'current'){
			title[i].id = '';
		}
	}

	t.id = 'current';
	if(boxname == menuname1){
		box2.style.display = 'none';
		box1.style.display = 'block';
	}else{
		box2.style.display = 'block';
		box1.style.display = 'none';
	}
}




function accordion(id){
	var body = document.querySelector('.'+id);
	if(body.style.maxHeight == '0em'){
		body.style.maxHeight = '15em';
	}else{
		body.style.maxHeight = '0em';
	}
	

}




var count=0;
function sidebar(){
	var sidebar = document.querySelector('.sidenav');
	var container = document.querySelector('.container');
	count = count + 1;
	if(count%2==1){
		sidebar.style.width = '200px';
		container.style.marginLeft = '200px';
	}else{
		sidebar.style.width = '0px';
		container.style.marginLeft = '0px';	
	}
}