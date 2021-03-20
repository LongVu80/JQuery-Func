$(document).ready(function(){
    $('.button').click(function(){
        $('h1').addClass('red');
    })
    $('.hide').click(function(){
        $('.bookworm').hide();
    })
    $('.show').click(function(){
        $('.bookworm').show();
    })
    $('.out').click(function(){
        $('.bee').fadeOut();
    })
    $('.in').click(function(){
        $('.bee').fadeIn();
    })
    $(".fadeToggle").click(function(){
        $(".bee").fadeToggle("slow");
    });
    $('.up').click(function(){
        $('.computer').slideUp("slow");
    })
    $('.down').click(function(){
        $('.computer').slideDown("slow");
    })
    $('.slideToggle').click(function(){
        $('.computer').slideToggle("slow");
    })
    $('.before').click(function(){
        $('.investigate').before('I am a detective!!');
    })
    $('.after').click(function(){
        $('.investigate').after('Give me a hint!!');
    })
    $('.attr').click(function(){
        $("img").attr({ 
            height: "350" 
             }); 
    })
    $('.html').click(function(){
        $('.h3').html('POWAHHHHH!!');
    })
    $('.val').click(function(){
        $("input:text").val("Long Vu!!");
    })
    $('.text').click(function(){
        $('.hi').text('whoooooooo!!!!')
    })
    $('.append').click(function(){
        $('.container').append("'What happened to my clover leaf image???'");
    })
    $('.magic').click(function(){
        $('img').animate( {
            width: 'toggle'
        });
    })
})

