
	$(".send-us-link").click(function (e) {
		e.preventDefault();
		$(".modal-send").addClass("modal-show");
	});

	$(".modal-close").click(function (e) {
		e.preventDefault();
		$(".modal-send").removeClass("modal-show");
	});
