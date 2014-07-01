$('*:contains("Game of Thrones")').each(function(){
	$element = $(this);
	if($element.children().length < 1) {
		$element.addClass('spoiled');
		if($element.is("strong,span,b,i,em")) {
			$element.parent().addClass('spoiled');
		}
	}
});
