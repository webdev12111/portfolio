$(document).ready(function(){

    // fucntion for header on scroll -> bgc changes
    $(window).scroll(function(){
        var scroll_value = $(window).scrollTop();
        if(scroll_value>=40)
        {
            $('.header').addClass('header-on-scrool');


            $('.go-top-btn').removeClass('d-none');  // button will be dis-appear till poinnt 40
        }
        else
        {
            $('.header').removeClass('header-on-scrool');

            $('.go-top-btn').addClass('d-none');  // button will be visible after point 40
        }

    })

    // setting on value of scrool at 0 after clicking on go up button

    $('.go-top-btn').scrollTop( 0 );


    // AOS 
    AOS.init({
        duration:1200,
    });

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

    // portfolio section - 7 JS start here
    
    var Shuffle = window.Shuffle;
    var element = document.querySelector('.my-shuffle-container');
    var sizer = element.querySelector('.my-sizer-element');



    var shuffleInstance = new Shuffle(element, {
    itemSelector: '.picture-item',
    sizer: sizer // could also be a selector: '.my-sizer-element'
    });
    // shuffleInstance.filter('animal');
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


    // change the background color of active tab in the section - 7 

    $('.section-7 .main-section-buttons ul li').on('click',function(){
    $(this).addClass('current-active').siblings().removeClass('current-active');
    })


    // changing the default behaviour of the a tag on click

    $('.p-anchor').click(function(e){
        e.preventDefault();
    })

})