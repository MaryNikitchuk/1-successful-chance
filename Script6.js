//Глобальная переменная (объявлена вне функции)
var a = 0;

function zoom(param){
	//var obj = $("#pic");
	var p = ['Рубашка_main.png', 'Фото2.png', 'Фото3.png'];

	$("#pic").attr("src", p[param]);

	//console.log('yes');
	/*
	switch (param) {
		case 1:
	  obj.html("<img src='Рубашка_main.png' id='pic'>");
		break;
	case 2:
	  obj.html("<img src='Фото2.png' id='pic'>");
		break;
	case 3:
		obj.html("<img src='Фото3.png' id='pic'>");
		break;
	default:
	  obj.html("<img src='Рубашка_main.png' id='pic'>");
	}
	*/
}

function count(p){
//	console.log('yes');
//alert('aaa');
	if (p == 1)
		a++;
	else
		if (a > 0)
			a--;

	txt.value = a;
}

function msg(){
	$.notify("В корзину добавлено товаров: " + a);
}
