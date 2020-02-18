function getTimeRemaining(endtime){
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(endtime){
    var timeinterval = setInterval(function(){
        var t = getTimeRemaining(endtime);
        $('.timer-d').html(t.days);
        $('.timer-h').html(t.hours);
        $('.timer-m').html(t.minutes);
        $('.timer-s').html(t.seconds);
        if(t.total<=0){
            clearInterval(timeinterval);
        }
    },1000);
}

$(document).ready(function(){

    initializeClock(window.endtime);

	$(window).load(function () {
        let phones = [
            {'mask': '+7 \\ \\ ###-###-##-##'}
        ];

        $('input[type=tel]').inputmask({
            mask: phones,
            greedy: false,
            definitions: {
                '#':
                    {
                        validator: '[0-9]',
                        cardinality: 1
                    }
            }
        });
    });

	jQuery("a.scrollto").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 700);
        return false;
    });

    $('.rewiews-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
           responsive: [
        {
          breakpoint: 701,
          settings: {
            arrows: false
          }
        }
    ]
    });

    $('.tabs a').click(function(){
        $('.tabs').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.text-box').find('.text-box__item').hide();
        $('#'+$(this).data('switch')).show();
    });

    $('.b-mobile_open_nav').click(function(){
        $(this).toggleClass('b-mobile_open_nav_active');
        if($(this).hasClass('b-mobile_open_nav_active')) {
            $('.b-links').addClass('b-links_active');
            $('.b-links a').each(function (index, el) {
                setTimeout(function () {
                    $(el).addClass('showed');
                }, index * 100);
            });
        }else{
            var time = 0;
            $($('.b-links a').get().reverse()).each(function (index, el) {
                time = index * 100;
                setTimeout(function () {
                    $(el).removeClass('showed');
                }, time);
            });
            setTimeout(function () {
                $('.b-links').removeClass('b-links_active');
                $('.b-links').find('.showed').removeClass('showed');
            }, $('.b-links a').length * 100);
        }
    });

    $('input[type=tel]').bind("change keyup input click", function() {
      if (this.value.match(/[^\+0-9]/g)) {
       this.value = this.value.replace(/[^\+0-9]/g, '');
      }
     });

    $('input[type=tel]').on('focus', function(){
       if($(this).val() == '') $(this).val('+7');
    });
    
    $('input[type=tel]').on('blur', function(){
       if($(this).val() == '+7') $(this).val('');
    });

    $(window).on('load resize scroll', function () {
        var width = $(window).width();

        if ((width > '319') && (width < '701')) {
            $(".btn-callback").insertAfter($(".header-top-line"));
        }

    });

     // if ((width > '700') && (width < '1000')) {
        
     // }

    //   $(document).on('af_complete', function(event, response) {
    //     if(response.success) $.fancybox.close();
    // })

});