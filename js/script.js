$(document).ready(function(){
    $(window).bind('scroll', function() {
        var navHeight = 55;
        if ($(window).scrollTop() > navHeight) {
            $('#pageHome .navbar').addClass('bg-dark');
        } else {
            $('#pageHome .navbar').removeClass('bg-dark');
        }
    });

    $(".carouselMultiple").owlCarousel({
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 5,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:4
				},
				1000:{
					items:5					
				}
			},
			margin: 0,
			navText: ["<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='s-ion-icon'><path d='M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z'></path></svg>", 
						"<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='s-ion-icon'><path d='M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z'></path></svg>"],
			loop: false,
			nav: true,
			dots: false,
			center:false
		});
});

// $( document ).ready(function() {
//         $("#contactForm").submit(function(event){
//             console.log('submit');
//             // event.preventDefault();
//             submitForm();
//         });
//     });

//     function submitForm(){
//         // Initiate Variables With Form Content
//         var name = $("#name").val();
//         var email = $("#email").val();
//         var subject = $("#subject").val();
//         var message = $("#message").val();
//         console.log($("#email").val());

//         $.ajax({
//             type: "POST",
//             url: "../php/test.php",
//             data: "name=" + name + "&email=" + email + "&subject=" + subject + "&message=" + message,
//             success : function(text){
//                 if (text == "invalid"){
//                     formSuccess();
//                 } else {
//                     formInvalide();
//                 }
//             }
//         });
//     }
//     function formSuccess(){
//         console.log('formSuccess');
//         $( "#msgSubmit" ).removeClass( "hidden" );
//     }
//     function formInvalide(){
//         console.log('formInvalide');
//         $( "#msgSubmit" ).removeClass( "hidden" );
//     }