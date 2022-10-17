function zoom(param){
	switch (param) {
		case 1:
		cont.innerHTML = "<img src='Рубашка_main.png' id='pic'>";
		break;
	case 2:
		cont.innerHTML = "<img src='Фото2.png' id='pic'>";
		break;
	case 3:
		cont.innerHTML = "<img src='Фото3.png' id='pic'>";
		break;
	default:
	 cont.innerHTML = "<img src='Рубашка_main.png' id='pic'>";
	}
}
