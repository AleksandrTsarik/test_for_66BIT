
let clickDocument = function() {    
    let 
        e = window.event,
        str = e.key,
        code = e.code,
        keycode = e.keyCode;
    
        console.log(e); 
    
    if (code.indexOf('Key') > -1) {
        $('.js-field').append('<div class="letter">' + str + '</div>');
        $('.letter:last').hide().fadeIn(3000);
    }
    
    if (keycode == 8) {
        $('.letter:last').remove();
    }

    console.log(keycode);
}
