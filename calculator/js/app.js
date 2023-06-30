function storeDate(v) {
	var n=document.getElementById('num1')
	var oldData=n.value;
	n.value=oldData+v;
}


function calData(){
	var n=document.getElementById('num1');
	var calValue=eval(n.value);
	n.value=calValue;
}

function clsScreen(){
	document.getElementById('num1').value=' '
}