---
layout: default
title: Mailinglister
---

# Hvad er en mailingliste?

Mailinglister er en teknologi der gør det nemmere at kommunikere med flere mennesker på en gang via email.

## Uden mailinglister
<img src="/images/illustration-0.png" class="img">

Hvis Alice ønsker at sende en mail til alle de andre i de forskellige revyers texnikgrupper kræver det at hun kender alle de andres mailaddresser hvortil hun kan sende en mail.

Hvis Carl nu ønsker at svare på Alices mail, er det vigtigt at han sender svaret til alle (via *reply all*), ellers sendes svaret kun til Alice.

Hvis nu Emil kommer til som ny i texnikken skal han nu til at finde og informere alle de andre der kunne tænkes at sende mails til alle texnikkere så de husker at sende mails til ham fremover.

<img src="/images/illustration-1.png" class="img">

Ellers bliver Emil ked af det når Bob sender en mail ud til alle andre men glemmer (eller ikke kender til) Emil.

## Med mailinglister

For at undgå dette kan man bruge en mailingliste. En mailingliste er en speciel mailaddresse (f.eks. {{ site.email-list }}) som man kan blive medlem af/abonere på. Når man er med i en mailingliste sørger mailinglisten for at holde styr på hvem der er med og hvem der ikke er, så brugerne ikke behøver det.

Når man sender en mail til mailinglisten sørger den for at sende mailen ud til alle medlemmerne, og ligeledes med alle svarene til denne mail.

<img src="/images/illustration-3.png" class="img">

<img src="/images/illustration-4.png" class="img">

Når man bliver tilmeldt mailinglisten modtager man således al post sendt dertil indtil man melder sig fra igen.


<a id="svar_til_folk_udenfor_listen"></a>

## Svar til folk udenfor listen

Mailman, som er det program vi bruger til mailinglisten, har en enkel mangel.

Når personer der ikke er på listen, sender en mail til denne vil alle medlemerne modtage denne.

<img src="/images/illustration-5.png" class="img">

Men når folk svarer på denne mail sender mailman jo kun svar ud til medlemerne af listen.

Davids besked bliver derfor kun set af medlemerne på listen, og ikke af rekvisitbossen.

<img src="/images/illustration-6.png" class="img">

Derfor bør man når man svarer på mails i en tråd startet af en udefrakommende altid sikre sig at alle deltagere modtager svaret.

Emil er klar over dette og har derfor indsat rekvisitbossen som ekstra modtager.

<img src="/images/illustration-7.png" class="img">
