(function ($) {
	$.prototype.changeColor = function (color) {
		return this.each(function () {
			$(this).css('color', color);
		});
	};
})($);
