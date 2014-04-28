---
layout: default
title: Gmail
---

# Min indbakke er helt rodet
Selv om man bruger en trådet emailklient kan ens indbakke hurtigt bliver rodet hvis man abonere på op til flere mailinglister.

For at afhjælpe dette kan man lave seperater indbakker til forskellige lister. På den måde kan man hurtigere få et overblik over ens egne mails og mails til listerne man er med på.

## Filtre
Gmail understøtter en funktion kaldet filtre (lignende koncepter findes formententligt til de fleste andre veludbyggede mailklienter).

Et filter er en søgning/kategorisering som Google laver over ens mails, man kan så f.eks. sende mails der matcher filtret til en seperat indbakke.

## Opret et filter
Hvis du allerede har modtaget en mail fra listen kan du oprette et filter ved at åbne mailen og trykke på knappen **more** i toppen.

<img src="/images/more.png" class="img">

Der er et punkt kaldet **Filter messages like these** eller tilsvarende.

Alternativt kan du trykke på tandhjulet i øverste højre hjørne, og trykke **Settings**.

<img src="/images/settings.png" class="img">

Klik ind på **Filters** fanen.

<img src="/images/filters.png" class="img">

Scroll ned til bunden og tryk **Create a new filter**

<img src="/images/create-filter.png" class="img">

## Søgekriterier
Nu kommer der en menu frem med et forslag til at filtrere alle mails ud fra googles bud på din søgning.
Ofte vil dette bud være at filtrere på at mailen indeholder *list:(<texnikum.dk--admin.dikumail.dk>)*. Dette er et tag mailman putter på mails den sender ud. Desværre betyder det så at alle mails du sender til listen ikke havner i dette filter (med mindre det er en del af en tråd andre har svaret på).

<img src="/images/first-filter.png" class="img">

For at undgå dette ændrer vi filtret til at dække alle mails sendt til *alle@teknikum.dk*

<img src="/images/filter.png" class="img">

Alternativt kan man vælge at fange mails sendt til *texnikum.dk*, derved fanger man mails til alle mailinglister på texnikum.dk domænet i ét filter.

Hvis man gør dette kan man stadig kende forskel på hvilken liste der er skrevet til ud fra det tag (f.eks. **[alle]** eller **[admin]**) der automatisk sættes foran emnefeltet.

Tryk nu **Create filter with this search**

## Indstilling
Nu skal vi vælge hvad der skal ske med de mails filtret fanger.

<img src="/images/filter-settings.png" class="img">

Kryds **Skip the inbox** af hvis filtret skal sende mailsne ned i en seperat indbakke, ellers smides de både ned i texnikum mappen og findes i din normalle indbakke.

Tryk **Apply the label** og vælg **New label**

<img src="/images/create-label.png" class="img">

Skriv navnet på den indbakke du ønsker at oprette, f.eks. *texnikum*

Kryds **Never send it to spam** af. Gmail har et ret aggresivt spam filter der har en tendens til at ramme folk der skriver flere beskeder til listen i træk. Mailinglisten har et spamfilter så vi skal nok undgå uønsket spam.

Kryds **Also apply filter to X matching conversations** af, så alle mails allerede sendt til listen også ryger i filtret.

## Tilykke
Du har nu oprettet et filter.

Der ligger en indbakke i venstre menu kaldet **texnikum** som indeholder alle mails sendt til listen.
