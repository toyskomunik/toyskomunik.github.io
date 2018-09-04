$(document).ready(function(){

    // Jumping letters
    $('.jump').html(`<span>${$('.jump').text().split('').join('</span><span>')}</span>`);

    // Animation Picture
    $('#bgPicture').animate(
        { 
            opacity: 1 
        },
        2000,
        'swing',
        // Animation Content
        function() {
            $('#content').animate(
                {
                    maxWidth: '100%',
                    maxHeight: 'inherit',
                    // opacity: 1
                },
                1500,
                'swing',
            );
            $('#content').animate(
                {
                    opacity: 1
                },
                750,
                'linear'
            )
        }  
    );

});