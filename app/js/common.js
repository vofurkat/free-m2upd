$(function() {

	//loader
	function explode(){
	  $(".loader").fadeOut(300);
	}
	setTimeout(explode, 100);

	// button open header menu 
	$(".toggle-mnu").click(function() {
		$(this). toggleClass("on");
		$(".mmnu"). slideToggle('slow');
	});

	// button open footer menu 
	$(".toggle-foot").click(function() {
		$(this). toggleClass("on");
		$(".footer-mnu ul"). slideToggle('slow');
		return false;
	});


	// for fixed img
	$('.section-one__box .item .item-img').imgLiquid();
	$('.section-four__box .item .item-img').imgLiquid();
	$('.section-six__box .item .item-img').imgLiquid();
	$('.section-seven__box .item .item-in .item-img').imgLiquid();

	// slider for news
	$(".section-one__box").owlCarousel({
		loop:true,
	    margin:10,
	    navText : ["",""],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        580:{
	            items:2,
	            nav:true,
	            loop:false,
	            margin:10
	        },
	        768:{
	            items:3,
	            nav:false,
	            loop:false,
				margin:10
	        },
	        992:{
	            items:3,
	            nav:false,
	            loop:false,
	            margin:10
	        },
	        1200:{
	            items:4,
	            nav:false,
	            loop:true
	        }
	    }
	});

	// slider for inexpensive
	$(".section-four__box").owlCarousel({
		loop:true,
	    margin:25,
	    navText : ["",""],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	    	0:{
	            items:1,
	            nav:true
	        },
	        460:{
	            items:2,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false,
	            loop:false,
	            margin:10
	        },
	        768:{
	            items:3,
	            nav:false,
	            loop:false,
				margin:10
	        },
	        992:{
	            items:4,
	            nav:false,
	            loop:false,
	            margin:10
	        },
	        1200:{
	            items:5,
	            nav:true,
	            loop:true
	        }
	    }
	});

	// slider for inexpensive
	$(".section-six__box").owlCarousel({
		loop:true,
	    margin:25,
	    navText : ["",""],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	    	0:{
	            items:1,
	            nav:true
	        },
	        460:{
	            items:2,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false,
	            loop:false,
	            margin:10
	        },
	        768:{
	            items:3,
	            nav:false,
	            loop:false,
				margin:10
	        },
	        992:{
	            items:4,
	            nav:false,
	            loop:false,
	            margin:10
	        },
	        1200:{
	            items:5,
	            nav:true,
	            loop:true
	        }
	    }
	});

	// slider for inexpensive
	$(".section-seven__box").owlCarousel({
		loop:true,
	    margin:10,
	    navText : ["",""],
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	    	0:{
	            items:1,
	            nav:true
	        },
	        768:{
	            items:1,
	            nav:false,
	            loop:false,
				margin:10
	        },
	        992:{
	            items:2,
	            nav:false,
	            loop:false,
	            margin:10
	        },
	        1200:{
	            items:3,
	            nav:true,
	            loop:true
	        }
	    }
	});

	// for fixed text
	$(".section-one__box .item .item-foot").dotdotdot();
	$(".section-one__box .item .item-head").dotdotdot();
	
	// for height
	$(".section-three .heig").equalHeights();

	$(".counter").each(function(){
		$(this).counterUp({
			delay: 10,
			time: 1000
		});
	})
	 
	
	$('.search-box .choose-buy select').select2();

	$(".flat-down").click(function(){
		$(".select2").removeClass("select2-container--open");
		$(".room-dropdown").removeClass("show-room");
		$(".room-down").removeClass("icon-room");
		$(".flat-doropdown").toggleClass("show-flat");
		$(this).toggleClass("show-flat__icon");
		$(".price-dropdown").removeClass("show-price");
		return false;
	});

	$(".select2-selection__rendered").click(function(){
		$(".room-dropdown").removeClass("show-room");
		$(".room-down").removeClass("icon-room");
		$(".flat-doropdown").removeClass("show-flat");
		$(".flat-down").removeClass("show-flat__icon");
		$(".price-dropdown").removeClass("show-price");
		return false;
	});

	$(".room-down").click(function(){
		$(this).toggleClass("icon-room");
		$(".room-dropdown").toggleClass("show-room");
		$(".flat-doropdown").removeClass("show-flat");
		$(".select2").removeClass("select2-container--open");
		$(".flat-down").removeClass("show-flat__icon");
		$(".price-dropdown").removeClass("show-price");
		return false;
	});

	$(".price-down").click(function(){
		$(".price-dropdown").toggleClass("show-price");
		$(".flat-doropdown").removeClass("show-flat");
		$(".select2").removeClass("select2-container--open");
		$(".room-dropdown").removeClass("show-room");
		$(".room-down").removeClass("icon-room");
		$(".flat-down").removeClass("show-flat__icon");
		return false;
	});

	$("#slider").slider({
        min: 800000,
        max: 16000000,
        step: 100,
        range: true,
        values: [3524900, 11771700],
        slide: function(event, ui) {
            for (var i = 0; i < ui.values.length; ++i) {
                $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
            }
        }
    });

    $("input.sliderValue").change(function() {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
    });

    // $(".js-example-basic-multiple").select2();

	function matchStart (term, text) {
		if (text.toUpperCase().indexOf(term.toUpperCase()) == 0) {
		return true;
	}

	return false;
	}

	$("select.choose-st").flexselect();
	// $("input.choose-st").val("");

	$(".choose-st").focus(function(){
		$(".price-dropdown").removeClass("show-price");
		$(".flat-doropdown").removeClass("show-flat");
		$(".room-dropdown").removeClass("show-room");
		$(".room-down").removeClass("icon-room");
		$(".flat-down").removeClass("show-flat__icon");
	});

	

	$(".dropdown img.flag").addClass("flagvisibility");

    $(".dropdown dt a").click(function() {
        $(".dropdown dd ul").toggle();
    });
                
    $(".dropdown dd ul li a").click(function() {
        var text = $(this).html();
        $(".dropdown dt a span").html(text);
        $(".dropdown dd ul").hide();
        $("#result").html("Selected value is: " + getSelectedValue("sample"));
    });
                
    function getSelectedValue(id) {
        return $("#" + id).find("dt a span.value").html();
    }

    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (! $clicked.parents().hasClass("dropdown"))
            $(".dropdown dd ul").hide();
    });


    $("#flagSwitcher").click(function() {
        $(".dropdown img.flag").toggleClass("flagvisibility");
    });

    $('#formDate').validator();
    $('#formDate2').validator();

});
