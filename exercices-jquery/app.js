//Exercice 1 //


$(document).ready(function() {
    $('#exercice_1').click(function() {
        $('.b1e1').hide();

    });

});

//Exercice 2 //

$(document).ready(function() {
    $('.clic').click(function() {
        $('.cible').toggle();

    });

    //Exercice 3 //

    $('#b0e3').dblclick(function() {
        $('#b1e3').toggleClass('highlight');
    });

    //Exercice 4 //

    $('#b0e4').dblclick(function() {
        $('#b1e4').toggle();
    });

    //Exercice 5 //

    $('#b0e5').mouseover(function() {
        $('#b0e5').fadeOut("slow");
    });

    //Exercice 6 //

    $('#b0e6').mouseover(function() {
        $('#b0e6').css('opacity', '0.5');
    });

    $('#b0e6').mouseout(function() {
        $('#b0e6').css('opacity', '1');
    });

    //Exercice 7 //

    $('#exercice_7 input').focus(function() {
        $('#b0e7').toggle();
    });

    //Exercice 8 //

    $('#exercice_8 input').focusout(function() {
        $('#exercice_8 div').toggle();
    });






});

$(document).ready(function() {
    // Ici, le DOM est entièrement défini
});