$(document).ready(function() {

    $('#submit').click(function() {

        event.preventDefault();

        var ValidEmail = $('#username').val() === 'Spencer';
        var ValidPassword = $('#password').val() === 'Baker';

        if (ValidEmail === true && ValidPassword === true) {
            $('.valid').css('display', 'block');
            window.location = "index.html";
        }
        else {
            $('.error').css('display', 'block');
        }
    });
});