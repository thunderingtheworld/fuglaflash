$(document).ready(function(){

	$('#innri-gerd-container img').hide();
	// $('#innri-gerd-container span').hide();
	$('#innri-gerd-container').click( function(){
		$('#innri-gerd-container img').show();
		$('#innri-gerd-container').css('background','url("innri-gerd-fugla/background.png")');
		$('#innri-gerd-container').css('background-repeat','no-repeat');
	});

	$('#nyru').click( function() {
		$(this).css('left','390px');
		$(this).css('top','100px');
		$("#nyru-label").show();
	})

	$('#hjarta').click( function() {
		$(this).css('left','0px');
		$(this).css('top','220px');
		$("#hjarta-label").show();
	})

	$('#hryggsula').click( function() {
		$(this).css('left','0px');
		$(this).css('top','0px');
		$("#hryggsula-label").show();
	})

	$('#eggja').click( function() {
		$(this).css('left','100px');
		$(this).css('top','30px');
		$("#eggja-label").show();
	})

	$('#lungu').click( function() {
		$(this).css('left','430px');
		$(this).css('top','0px');
		$("#lungu-label").show();
	})

	$('#melting').click( function() {
		$(this).css('left','350px');
		$(this).css('top','170px');
		$("#melting-label").show();
	})

	$('#lifur').click( function() {
		$(this).css('left','370px');
		$(this).css('top','310px');
		$("#lifur-label").show();
	})

	$('#gallbladra').click( function() {
		$(this).css('left','400px');
		$(this).css('top','260px');
		$("#gallbladra-label").show();
	})

	$('#heili').click( function() {
		$(this).css('left','220px');
		$(this).css('top','0px');
		$("#heili-label").show();
	})
})