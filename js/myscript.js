$(document).ready(function(){

    $(".header-icon").click(function(){
        $(".header").toggle();

        // changing the icon of header on click
        $('.header-icon-togggler').toggleClass("icon-menu icon-cross")
        
    })
    

    
    var Shuffle = window.Shuffle;
    var element = document.querySelector('.my-shuffle-container');
    var sizer = element.querySelector('.my-sizer-element');

    var shuffleInstance = new Shuffle(element, {
    itemSelector: '.picture-item',
    sizer: sizer // could also be a selector: '.my-sizer-element'
    });

    $("#all").on("click", function(){
    shuffleInstance.filter();
    });
    $("#btn-app").on("click", function(){
    shuffleInstance.filter('app');
    });
    $("#btn-card").on("click", function(){
    shuffleInstance.filter('cardd');
    });
    $("#btn-web").on("click", function(){
    shuffleInstance.filter('web');
    });


    $(".p-anchor").click(function(e)
    {
        e.preventDefault();
    })

    $('.section-5 .main-section-buttons ul li').on('click',function(){
        $(this).addClass('current-active').siblings().removeClass('current-active');
    })

    // owl carousel js

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        // nav:true,
        // items:3,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


     // form validation 

     $('#submit-key').click(function(e){

        e.preventDefault();

        // getting the user data

        var name=$('#inputname').val();

        var email=$('#inputEmail4').val();

        var subject=$('#inputsubject').val();

        var message=$('#exampleTextarea1').val();

        if(name.length<4)
        {
            $('.name-valid').removeClass('d-none');
        }

        if(name.length>4)
        {
            $('.name-valid').addClass('d-none');
        }

        if(email.length==0)
        {
            $('.mail-valid').removeClass('d-none');
        }

        if(email.length!=0)
        {
            $('.mail-valid').addClass('d-none');
        }

        if(subject.length<8)
        {
            $('.subject-valid').removeClass('d-none');
        }
        
        if(subject.length>=8)
        {
            $('.subject-valid').addClass('d-none');
        }

        if(message.length==0)
        {
            $('.message-valid').removeClass('d-none');
        }
        
        if(message.length!=0)
        {
            $('.message-valid').addClass('d-none');
        }

        // if all the data are entered correct so slear the form

        if(name.length>4 && email.length!=0 && subject.length>8 && message.length!=0)
        {
            $('#frm').trigger('reset');
        }
    })


    // scroll buttton 

    $(window).scroll(function(){
        var scrool_value=$(window).scrollTop();
        // console.log(scrool_value);
        if(scrool_value>=40)
        {
            $('.scrool-bar-btn').removeClass('d-none')
        }
        else
        {
            $('.scrool-bar-btn').addClass('d-none')
        }
    })


    $('.scrool-bar-btn').click(function(){
        $(window).scrollTop(0);
    })


    // typed js

    var t=new Typed("#one",{
        strings:["Designer","Freelancer"],
        loop:true,
        typeSpeed:100,
        backSpeed:100,
        cursorChar:"|",
        startDelay:0,
    })
    
})