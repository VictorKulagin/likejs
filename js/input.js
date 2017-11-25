function fun1(){
	var chbox;
	chbox = document.getElementById('one');

	if(chbox.checked){
		alert('Выбран');
	}
	else
	{
		alert('Не выбран');
	}
}

function fun2(){
	var radi = document.getElementsByName('r1');
	for (var i = 0; i < radi.length; i++){
		if (radi[i].checked){
			alert('Выбран ' + i + ' элемент');
		}
	}	
}

function fun3(){
	var sel = document.getElementById('mySelect').selectedIndex;
	var optinns = document.getElementById('mySelect').options;
	console.log(optinns);
	alert('Выбрана опция ' +optinns[sel].text);
}

function fun4(){
	var rng = document.getElementById('range1');
	var p = document.getElementById('one1');
	p.innerHTML = rng.value;
}