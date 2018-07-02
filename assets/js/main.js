$(document).ready(function(){

	$('.name_next_keis a').click(function(){
		var index = $(this).attr('href');
		$(this).parents('.project').fadeOut(700);
		var show_project = '#' + index;
		$(show_project).fadeIn(1500);
		return false;
	});

	var slide_all = 6; // общее количество слайдов
	$(function(){
		var  slider;
		slider = jQuery('.work_slider').bxSlider({
			pager: true,
			responsive: true,
			touchEnabled: true,
			infiniteLoop: false,
			hideControlOnEnd: true,
			onSlideBefore: function(){
				slide_num();
			}
		});
		slide_num(0);
		function slide_num(n) {
			if (n) var current = n;
			else var current = slider.getCurrentSlide();

			$('.navigation_slider ul li a').each(function(){
				$(this).removeClass('active');
			});
			var index_step = current;
			$('.navigation_slider ul li a').each(function(){
				var nav_index = +$(this).attr('data-index') - 1;
				if ( index_step == nav_index) $(this).addClass('active');
			});

		}
	});


	$('.prev_block').click(function(){
		$('.bx-prev').click();
		$('.navigation_slider ul li a').each(function(){
			$(this).removeClass('active');
		});
		var index_step = $('.bx-pager-link.active').attr('data-slide-index');
		$('.navigation_slider ul li a').each(function(){
			var nav_index = +$(this).attr('data-index') - 1;
			if ( index_step == nav_index) $(this).addClass('active');
		});
	});

	$('.next_block').click(function(){
		$('.bx-next').click();
		$('.navigation_slider ul li a').each(function(){
			$(this).removeClass('active');
		});
		var index_step = $('.bx-pager-link.active').attr('data-slide-index');
		$('.navigation_slider ul li a').each(function(){
			var nav_index = +$(this).attr('data-index') - 1;
			if ( index_step == nav_index) $(this).addClass('active');
		});
	});

	$(function(){
		$('.navigation_slider ul li a').click(function(){
			$('.navigation_slider ul li a').each(function(){
				$(this).removeClass('active');
			});
			$(this).addClass('active');
			var index_btn = $(this).attr('data-index');
			$('.bx-pager-link').each(function(){
				var slide_index = +$(this).attr('data-slide-index') + 1;
				if ( index_btn == slide_index) $(this).click();
			});
			return false;
		});
	});


	$(function(){
		var numdwnl = 1;
		var count = 0;
		$('#add_file').click(function(){
			count = $('input[type="file"]').length;
			if (count >= 5) return false; // Максимальное количество загружаемых файлов
			else {
				$(".add_files").append('<div class="file"><div class="close_file" onclick="$(this).parent().remove();">+</div><div class="name_file">Имя файла: </div><input type="file" id="file_'+numdwnl+'" name="file_'+numdwnl+'" style="display: none;"></div>');
				$("#file_"+numdwnl).trigger('click');
				$('input[type="file"]#file_'+numdwnl).change(function(){
					       var filename = $(this).val().replace(/.*\\/, "");
					       $(this).parent().children('.name_file').html("Имя файла: " + filename);
					  });
				numdwnl++;
			}
		});
	});

	$(function(f){
	    var element = f('#to_top');
	    f(window).scroll(function(){
	        element['fade'+ (f(this).scrollTop() > 900 ? 'In': 'Out')](500);           
	    });
	});

	$(function(){
	    $('#to_top').click(function(){
	    	$('html, body').stop().animate({scrollTop: $('html').offset().top}, 500);
	    	return false;
	    });
	});

	$(function(){	
		$(window).scroll(function(){
			if($(this).scrollTop()>800){
				$('header').addClass('fixed_out');
				$('main').addClass('main_padding');
			}
			else if ($(this).scrollTop()<800){
				$('main').removeClass('main_padding');
				$('header').removeClass('fixed_out');
			}
		});
	});
	$(function(){	
		$(window).scroll(function(){
			if($(this).scrollTop()>1000){
				$('header').addClass('fixed');
			}
			else if ($(this).scrollTop()<1000){
				$('header').removeClass('fixed');
			}
		});
	});

	$(function(){	
		$('.btn_menu a').click(function(){
			$(this).parent().parent().toggleClass('active');
			$(this).parent().parent().children('nav').children('a').toggleClass('active');
			return false;
		});
		$('.close_menu').click(function(){
			$(this).toggleClass('active');
			$(this).parent().parent().toggleClass('active');
			return false;
		});
	});

	$(function(){
		var window_width = $(window).width();
			if (window_width < 770) {
				$('header').addClass('mobile_menu');
			}
			else {
				$('header').removeClass('mobile_menu');
			}
		$(window).resize(function(){
			var window_width = $(window).width();
			if (window_width < 770) {
				$('header').addClass('mobile_menu');
			}
			else {
				$('header').removeClass('mobile_menu');
			}

		});
	});


	$(function(){
		var audio = $("#sound")[0];
		$('.sound_matador').click(function(){
			$(this).toggleClass('play');
			if ($(this).hasClass('play')) {
				audio.play();
			}
			else {
				audio.pause();
			}
		});
	});


});