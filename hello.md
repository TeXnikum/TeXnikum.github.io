---
layout: default
title: hello
---

# TeXnikum
Velkommen til.

Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.

<div class="email-list">
kage
</div>


Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.

<script type="text/javascript">

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
    alert("fugl");
    document.write("bye");
}

window.addEventListener('load', modifyPage, true);

</script>
