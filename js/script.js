$(document).ready(function() {
	var christine = ['Beauty is a perfect moment. The sun broke through the clouds like a glimmer of hope in an otherwise dark time. The scent of fresh rain mixed with the salty ocean breeze. Beauty is peace and joy and wonder. Beauty is simple.', 'My friend Chris Masoner gave me permission to use this photograph. Chris is an artist with his camera and amazes me with his talent. I asked for this image in particular because it is beautiful to me. It is balance, light and dark, spirit, elegance.', 'I went to Netarts Bay on the Oregon Coast with my parents for a week a few years ago. I woke up early and went down to the bay. The sun was promising to come up, but the world was still sleepy and quiet except for the gentle sound of the waves coming in. My normal life is so busy. This moment was simple, quiet, elegant, perfect, and beautiful.'];
	var david = ["It is a beautiful thing that humans can set themselves out for whatever venture they deem necessary, and accomplish their task.", 'My children. They are the most beautiful thing in the world. When they smile, I see the innocent beauty within them.', 'There exists different types of beauty in the world. When one can sit on top of the world, and say \'I did that\', that is truly beautiful'];


	var text = 'beau·ty - noun<br>a combination of qualities, such as shape, color, or form, that pleases the aesthetic senses, especially the sight.';

	$('#christineText, #davidText, #jinoText').html(text);


	//Christine Hovers
	$('.cimg1').hover(function() {
		$('#christineText').html(christine[0])
	}, function() {
		$('#christineText').html(text);
	});

	$('.cimg2').hover(function() {
		$('#christineText').html(christine[1])
	}, function() {
		$('#christineText').html(text);
	});

	$('.cimg3').hover(function() {
		$('#christineText').html(christine[2])
	}, function() {
		$('#christineText').html(text);
	});


	//David Hovers
	$('.dimg1').hover(function() {
		$('#davidText').html(david[0])
	}, function() {
		$('#davidText').html(text);
	});

	$('.dimg2').hover(function() {
		$('#davidText').html(david[1])
	}, function() {
		$('#davidText').html(text);
	});

	$('.dimg3').hover(function() {
		$('#davidText').html(david[2])
	}, function() {
		$('#davidText').html(text);
	});


	//Jino Hovers
	$('.jimg1').hover(function() {
		$('#jinoText').html(christine[0])
	}, function() {
		$('#jinoText').html(text);
	});

	$('.jimg2').hover(function() {
		$('#jinoText').html(christine[1])
	}, function() {
		$('#jinoText').html(text);
	});

	$('.jimg3').hover(function() {
		$('#jinoText').html(christine[2])
	}, function() {
		$('#jinoText').html(text);
	});





	// Smooth Scrolling
	$('#christineLink').on('click', function() {
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '#christine'
    		});
    		return false;
  	});

	$('#davidLink').on('click', function() {
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '#david'
    		});
    		return false;
  	});

	$('#jinoLink').on('click', function() {
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '#jino'
    		});
    		return false;
  	});

	$('#contactLink').on('click', function() {
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '.contact'
    		});
    		return false;
  	});
})