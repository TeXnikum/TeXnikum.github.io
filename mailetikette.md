---
layout: default
title: Mailetikette
---

# Hvordan man opfører sig på en mailingliste

For at få komunikation via mails til at fungere bedst bør man følge nogle simple men vigtige retningslinjer.

## Svar til alle
Husk at tilføje afsenderen manuelt hvis han ikke er en del af mailinglisten.
<a href="/mailinglister#svar_til_folk_udenfor_listen">Se mere her</a>

## Lad være med at topposte!

Når man svarer på en email er standard praksis at man citerer den besvarede mail. De fleste mailklienter gør automatisk dette.

Desværre er der en ærgelig tendens til at den citerede tekst placeres under selve besvarelsen.
Dette gør det sværrere at læse.

Der er flere måder at "læse" sine mails på, hvis ligger ordnet i en mailtråd og de er kommet nogenlunde samtidigt kan man læse mailsne en ad gangen og huske konteksten i form af samtalen uden at skulle læse tilbage.

Det elegante ved mails er dog at hver mail kan læses selvstændigt uden for denne kontekst. Hvis det f.eks. er et svar på en gammel tråd, hvis ikke man har læst hele tråden, hvis ikke man har en trådet klient men aller vigtigst:
For at holde styr på hvem og hvad folk svarer på.

### Hvordan ser topposting ud?
Lad os kigge på eksemplet hvor folk topposter

Alice skriver

```
Jeg synes kun vi skal have blå lamper til revyen
```

Bob svarer

```
Jeg synes kun vi skal have røde lamper.

Blå er sådan en grim farve.

>Alice skrev:
>Jeg synes kun vi skal have blå lamper til revyen
```

Carl svarer

```
Jeg er uenig

>Bob skrev:
>Jeg synes kun vi skal have røde lamper.
>
>Blå er sådan en grim farve.
>
>>Alice skrev:
>>Jeg synes kun vi skal have blå lamper til revyen
```

Hvis man går ind og læser Carls mail alene giver den ikke mening.
Han er uenig men i hvad?
Først derefter kommer man til den citerede tekst som han svarer på.

Ydermere, hvis man vil læse hele konteksten i rækkefølge er man nød til at starte bagfra i mailen, bevæge sig op til den dybest citerede mail starter, læse denne, bevæge sig lidt længere op, læse nedad igen og såfremt.
Det er ikke specielt elegant.

# Bundposting
Ovenstående samtale kunne istedet foregå således:

Alice skriver

```
Jeg synes kun vi skal have blå lamper til revyen
```

Bob svarer

```
>Alice skrev:
>Jeg synes kun vi skal have blå lamper til revyen

Jeg synes kun vi skal have røde lamper.

Blå er sådan en grim farve.
```

Carl svarer

```
>Bob skrev:
>>Alice skrev:
>>Jeg synes kun vi skal have blå lamper til revyen
>Jeg synes kun vi skal have røde lamper.
>
>Blå er sådan en grim farve.
>

Jeg er uenig
```

Vi kan nu se at Carl svarer på en mail som Bob skrev som et svar til Alice.
Ligeledes kan vi gå ind og læse Carls mail fra top til bund og forstå præcis hvad han svarede på.

Mailen er dermed uafhængig af konteksten, men hvis vi godt kan huske hvad Alice og Bob skrev kan vi bare bladre forbi dette.

Mange mailklienter folder automatisk citatet sammen.


## Hvordan skriver man en *ikke*toppost

Det kommer selvfølgelig and på din mailklient.

Nogle mailklienter laver svarfeltet som et stort tekstfelt hvori den citerede tekst allerede er indsat.
Du skal så blot bladre cursoren ned under denne tekst og skrive her

### Gmail
Hvis du bruger Gmail har Google indsat yderligere forhindringer ind for at gemme den citerede tekst af vejen.

Først trykker du **Reply** til den mail du vil svare på.

Nu kommer det sædvanlige svarfelt op.
Men nede i venstre hjørne findes en grå firkant med 3 prikker.

<img src="show-citation.png" class="img">

Trykker man på denne firkant kommer den citerede tekst op.

<img src="reply-field.png" class="img">

Man kan nu rykke cursoren ned under den citerede tekst og begynde at skrive sit svar.
