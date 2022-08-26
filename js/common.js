// Анимация
// data-wow-delay="0.3s" // задержка анимации
// data-wow-offset="10" // — расстояние в пикселях
	new WOW().init();

// Маска для формы телефона
// <input type="tel" placeholder="+3 (___) ___-___" name="tel">
   $("input[type='tel']").inputmask({"mask": "+380 (99) 999-9999"});


// Бургер меню
	$("#navToggle").click(function () {
	    $(this).toggleClass("active");
	    $(".overlay").toggleClass("open");
	    $("body").toggleClass("locked");
	});

	$(".overlay a").click(function () {
	    $("#navToggle").toggleClass("active");
	    $(".overlay").toggleClass("open");
	    $("body").toggleClass("locked");
	});
