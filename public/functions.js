
function replaceEmail (divClass, address) {
    var emails = document.getElementsByClassName(divClass);
    for (var i = 0; i < emails.length; i++) {
        var enc = address.replace(/./g, function(letter) {return String.fromCharCode(letter.charCodeAt(0)+30)});
        emails[i].innerHTML = enc
    }
}

function modifyPage () {
    replaceEmail('email-list', 'CNNG"VGZPKMWOFM');
    replaceEmail('email-admin', 'CFOKP"VGZPKMWOFM');
}

window.addEventListener('DOMContentLoaded', modifyPage, true);
