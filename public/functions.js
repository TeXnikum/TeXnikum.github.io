
function replaceEmail (divClass, address) {
    var emails = document.getElementsByClassName(divClass);
    for (var i = 0; i < emails.length; i++) {
        var enc = s.replace(/./g, function(letter) {return String.fromCharCode(letter.charCodeAt(0)+30)});
        emails[i].innerHTML = enc
    }
}

function modifyPage () {
    replaceEmail('email-list', 'WUGT"GZCORNGEQO');
    replaceEmail('email-admin', 'WUGT"GZCORNGEQO');
}

window.addEventListener('load', modifyPage, true);

document.write("hello");
alert("fisk");
