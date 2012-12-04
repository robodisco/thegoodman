/*! The Good Man */
$(document).ready(function() {

	/* toggle fullscreen */
	$('.fs').toggle($(document).fullScreen() != null).click(function() {$(document).toggleFullScreen()});

	/* play */
	var audio = $('audio')[0];
	var animation = $('article');
	$('.play p').click(function() {
		$('h1').addClass('tchau');
		$('.play, nav').fadeOut(900);
		$('aside').fadeIn().addClass('sup').css('display','table');
	});
	$('.go').click(function() {
		audio.play();
		animation.css('display','block');
		$('aside').removeClass('sup').addClass('tchau').fadeOut(900);
		$('body').addClass('bg').addClass('cursor');
		$('footer').fadeIn('fast');
		
		/* remove cursor in fullscreen */
		if ($('body').is('.full')){$(this).addClass('cursor');};
	
		/* vanish animation */
		setTimeout(function(){$('header, h2, h3, .enemys').remove();},9500);
		setTimeout(function(){$('.good').remove();},13200);
		setTimeout(function(){$('.plus q').remove();},19000);
		setTimeout(function(){$('.plus').remove();},23500);
		setTimeout(function(){$('.fire').remove();},27000);
		setTimeout(function(){$('.flames').remove();},36000);
		setTimeout(function(){$('.fight').remove();},39000);
		setTimeout(function(){$('.smash').remove();},38000);
		setTimeout(function(){$('.claw, .proud, .citizen, .virus').remove();},60000);
		setTimeout(function(){$('.transition').remove();},60200);
		setTimeout(function(){$('.bars, .shoot').remove();},76000);
		setTimeout(function(){$('.officer').remove();},76400);
		setTimeout(function(){$('.greatman').remove();},77500);
		setTimeout(function(){$('.heart').remove();},88000);
		setTimeout(function(){$('.coming, .read, .build').remove();},93000);
		setTimeout(function(){$('.fish').remove();},98500);
		setTimeout(function(){$('.all').remove();},112000);
		setTimeout(function(){$('.am, .fly').remove();},126500);
		setTimeout(function(){$('.box').remove();},127000);
		setTimeout(function(){$('.explode').remove();},132000);
		
		/* vanish animation */
		if ($('body').is('.nosub')){$('footer').remove();};
		setTimeout(function(){$('footer, .progress').remove();},127500);
		setTimeout(function(){$('body').removeClass('cursor').removeClass('bg');},126000);
		setTimeout(function(){$('nav').fadeIn(900);},130000);
	});

	/* toggle fullscreen class */
	$('.fs').click(function(){$('body').toggleClass('full');});

	/* toggle sub */
	$('.st em, .fs em').click(function() {$(this).toggleClass('on');});
	$('.st em').click(function() {$('body').toggleClass('sub').toggleClass('nosub');});

	/* random enemys */
	$('.enemys').find('p').each(function() {
		$(this).css('top', Math.floor((Math.random())*100) + '%');
		$(this).css('left', Math.floor((Math.random())*100) + '%');
	});

	/* fight the fire */
	$('.fight').find('p').each(function() {
		$(this).css('top', Math.floor((Math.random())*100) + '%');
		$(this).css('left', Math.floor((Math.random())*100) + '%');
	});

	/* virus */
	$('.virus').find('p').each(function() {
		$(this).css('top', Math.floor((Math.random())*100) + '%');
		$(this).css('left', Math.floor((Math.random())*100) + '%');
	});
});

$(window).load(function() {
	$('.play p').fadeIn(1200);
	$('.play span').fadeOut(700);
});