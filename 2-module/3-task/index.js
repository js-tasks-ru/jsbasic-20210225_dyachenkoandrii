let calculator = {
sum: function() {
	return (this.a + this.b);
},
mul: function() {
	return (this.a * this.b);
},
read: function() {
	this.a = +prompt('a', '');
	this.b = +prompt('b', '');
}

};



// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
