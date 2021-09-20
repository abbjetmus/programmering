# Javascript

## Innehåll
* Variabler
* Datatyper
* Operatorer
* Jämförelser
* If-satser
* Loopar: while & for
* Switch
* Funktioner
* Arrow-funktioner
* Objekt
* Listor/arrays

## Intro

I det här första kapitlet på våran resa i kursen programmering 1 så ska vi lära oss grunderna i Javascript/HTML/CSS. Javascript är programmeringsspråket som körs i webbapplikationer och används för att kontrollera webbläsaren vilket resulterar i mer interaktiva webbsidor. På senare tid använder man även Javascript utanför webbläsaren som t.ex. mobilappar och serverapplikationer. Instagram och Facebook är exempel på mobilappar som är utvecklade i Javascript.

Det här är Wikipedias defintion på Javascript:

>Javascript, i marknadsföringssyfte skrivet JavaScript och förkortat JS, är ett prototyp-baserat skriptspråk som är dynamiskt, svagt typat och hanterar funktioner som första-klass-objekt. Javascript används främst på klientsidan i webbtillämpningar, det vill säga exekveras i en webbläsares Javascriptmotor. Då Javascript används i webbläsare arbetar det mot ett gränssnitt som kallas Document Object Model (DOM). 
>
>Vanligtvis inbäddas Javascript i, eller inkluderas från, HTML-sidor. Exempel på användningsområden är kontroll av ifyllda fält innan formulär skickas till en server, funktioner för att visa eller dölja delar av en sida och växling av annonsbilder med visst intervall. Javascript kan även användas för mer avancerade funktioner i en webbläsare såsom spel och bildbehandling.
>
>Skriptspråket kan implementeras i andra program än webbläsare. Ett numera vanligt exempel av implementation utanför webbläsaren är Node.js, som tillåter utvecklaren att använda Javascript på serversidan för att kunna arbeta med anslutningar till databaser, skicka e-post-meddelanden och så vidare.

Detta är en mer teknisk beskrivning som vi kommer förstå bättre när vi är klara med javascript delen.

Vi lär oss alla på olika sätt och i den här kursen kommer det finnas material som förhoppningsvis också passar alla. Kursmaterialet finns som text, Youtube-videor och interaktiva videor i Scrimba.
Scrimba är interaktiva videor där du som elev när som helst under videons gång kan pausa och börja programmera rätt i videon. Exempelkod för dessa videor ligger även här i undermappen exempelkod.

Våga testa och fråga kompisar och lärare för att få bästa möjligheter till att utvecklas.

Till varje del så kommer det finnas lite övningsuppgifter.

## Övergripande resurser för denna modul:

- [Modern Javascript](https://javascript.info/)
- [W3School HTML](https://www.w3schools.com/html/)
- [W3School CSS](https://www.w3schools.com/css/default.asp)
- [HTML/CSS av The Net Ninja på Youtube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
- [W3School Javascript](https://www.w3schools.com/js/default.asp)
- [Modern Javascript av The Net Ninja på Youtube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc)

# 0. Testmiljö

När vi testar våran JavaScript kod så kommer vi börja med att göra det i Plunker som är en online miljö för att testa webbtekniker.

Här är en länk till en plunk som ni kan använda: <https://plnkr.co/edit/9OnAVyIK7Tk1cP6d>


<!--
När vi skriver programmeringskod i oavsett vilket språk så behöver vi en kod-editor för att skriva koden i, på samma sätt som vi använder Microsoft Word när vi vill skriva dokument.
-->
<!--
1. Vi kommer använda oss av en kod-editor som heter Visual Studio Code. Så börja med att ladda ner och installera den på den här länken:
<https://code.visualstudio.com/download>
-->
<!--
2. För att kunna köra Javascript utanför webbläsaren så behöver vi något som förstår och kan köra (exekvera) javascript koden. För det kommer vi använda körningsprogrammet Node.js.
<br>Ladda ner och installera Node.js på den här länken:
<https://nodejs.org/en/download>
-->
<!--
3. När det är gjort så kan ni skapa en mapp under C: disken som heter Programmering1 och en ytterligare mapp under den som heter Test -> *C:\Programmering1\Test*
Öppna sedan mappen i Visual Studio Code.
Inne i Visual Studio Code skapa en javascript fil som heter *test.js*, i test.js filen skriv in följande kod:
`console.log("Mitt första javascript program!")`
Öppna sedan terminal fönstret i Visual Studio Code finns under View -> Terminal och skriv in `node test`, då ska ni se följande utskrift:
-->
<!--
![Första Javascript programmet!](https://github.com/abbjoafli/Programmering-1/blob/master/img/first_javascript_program.PNG?raw=true)
-->
<!--
Grattis du har skapat och kört ditt första javascript program! 
-->

# 1. Variabler, datatyper, jämförelser, if-satser, loopar, objekt och listor

<!-- [Stega igenom koden](http://pythontutor.com/live.html#code=%0A//Numbers%0Alet%20number%3D431%3B%0Alet%20number2%3D45%3B%0Alet%20answer%3D%20number%2Bnumber2%3B%20//First%20and%20second%20number%20added%20together%0Aconsole.log%28answer%29%20//Print%20out%20the%20answer%0Aconsole.log%28answer-number2%29%20//Answer%20minus%20the%20second%20number%0Alet%20anotheranswer%3D%20answer*2/number2%3B%20//A%20more%20complicated%20answer%0Aconsole.log%28anotheranswer%29%20%0A%0A%0Alet%20fname%3D%20%22Joakim%22%20//First%20name%0Alet%20lname%3D%20%22Flink%22%20//Last%20name%0A%0Alet%20name%3D%20fname%2B%20lname%3B%20//First%20and%20lastname%0A%0Aname%3D%20fname%2B%22%20%22%2B%20lname%3B%20//Changed%20the%20the%20name%20variable%0A%0Aconsole.log%28name%29%20%0A%0A%0A//Boolean%20true%20or%20false%0Alet%20LivesAtHome%3D%20false%0Aconsole.log%28%22Lives%20at%20home%20%22%2BLivesAtHome%29%20//%20text%20%2B%20Boolean%20variable%0A%0A%0A//Array%20of%20cats%0Alet%20Cats%3D%20%5B%22Arvid%22,%22Andy%22,%22Vince%22%5D%0A%0Aconsole.log%28%22The%20cats%20%22%2BCats%29%0A//Foreach%20object%20in%20Cat%20array%0ACats.forEach%28Cat%20%3D%3E%20%7B%0A%20%20%20%20if%28Cat.length%3E4%29%0Aconsole.log%28%22The%20cat's%20name%20is%20%22%2BCat%29%0A%0A%7D%29%3B%0A%0A//Object%0Alet%20CatArvid%3D%7Bname%3A%22Arvid%22,%20weight%3A10,%20likes%3A%5B%22Eating%22,%20%22Sleeping%22,%22Chasing%20flies%22%5D,%20lazy%3Atrue%20%7D%0A%0Aconsole.log%28CatArvid%29%0Aconsole.log%28CatArvid.weight%29%0A%0Aconsole.log%28typeof%28CatArvid.weight%29%29%0Aconsole.log%28CatArvid.name%2B%22%20the%20cat%20weight%20is%20%22%2BCatArvid.weight%2B%22%20kg%22%29%0Aif%28CatArvid.lazy%3D%3Dtrue%29%0Aconsole.log%28CatArvid.name%2B%22%20%C3%A4r%20lat!%22%29%0Aelse%20if%28CatArvid.weight%3C%3D10%29%0Aconsole.log%28CatArvid.name%2B%22%20%20kan%20beh%C3%B6va%20tappa%20lite%20vikt!%22%29%0Aelse%0Aconsole.log%28CatArvid.name%2B%22%20%C3%A4r%20en%20liten%20katt%20som%20beh%C3%B6ver%20%C3%A4ta%20lite!%22%29%0A&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-live.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false) -->

## 1.1 Variabler

### Resurser
<!-- - [W3School Variabels](https://www.w3schools.com/js/js_variables.asp) -->
<!-- - [W3School Objects](https://www.w3schools.com/js/js_objects.asp) -->
[JavaScript.Info Variabels](https://javascript.info/variables)

### Övningsuppgifter
[Övningar Variabler](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#11-variabler)

## 1.2 Datatyper
### Resurser
[JavaScript.Info Datatypes](https://javascript.info/types)

### Övningsuppgifter
[Övningar Datatyper](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#12-datatyper)
  
## 1.3 Operatorer
### Resurser
[JavaScript.Info Operators](https://javascript.info/operators)

### Övningsuppgifter
[Övningar Operatorer](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#13-operatorer)

## 1.4 Jämförelser
### Resurser
[JavaScript.Info Comparison](https://javascript.info/comparison)

### Övningsuppgifter
[Övningar Jämförelser](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#14-j%C3%A4mf%C3%B6relser)

## 1.5 If-satser
### Resurser
[JavaScript.Info Comparison](https://javascript.info/ifelse)

### Övningsuppgifter
[Övningar If-satser](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#15-if-satser)

## 1.6 Loopar: while och for
### Resurser
[JavaScript.Info Loops: while and for](https://javascript.info/while-for)

### Övningsuppgifter
[Övningar Loopar: while och for](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#16-loopar-while-och-for)

## 1.7 Switch-satsen

### Resurser
[JavaScript.Info The "Switch" statement](https://javascript.info/switch)

### Övningsuppgifter
[Övningar Switch-satsen](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#17-switch-satsen)

## 1.7 Funktioner
### Resurser
[JavaScript.Info Functions](https://javascript.info/function-basics)

### Övningsuppgifter
[Övningar Fuktioner](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#17-funktioner)

## 1.8 Arrow functions (pil-funktioner)
### Resurser
[JavaScript.Info Arrow-functions](https://javascript.info/arrow-functions-basics)

### Övningsuppgifter
[Övningar Arrow functions](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#18-arrow-functions-pil-funktioner)


## 1.9 Objekt
### Resurser
[JavaScript.Info Objects](https://javascript.info/object)

### Övningsuppgifter
[Övningar Objekt](https://github.com/abbjoafli/Programmering-1/tree/master/1.Javascript/%C3%B6vningar#19-objekt)

## 1.10 Listor (Arrays)
### Resurser
[JavaScript.Info Arrays](https://javascript.info/array)

### Övningsuppgifter
[Övningar Arrays](https://github.com/abbjoafli/Programmering-1/blob/master/1.Javascript/%C3%B6vningar/README.md#110-listor-array)

# 4. HTML - CSS
## Resurser
- [W3School HTML](https://www.w3schools.com/html/)
- [W3School CSS](https://www.w3schools.com/css/default.asp)

# 5. Webbläsaren - DOM (Document Object Model) - BOM (Browser Object Model) - Events
## Resurser
* [JavaScript.Info UI](https://javascript.info/ui)
* [W3Schools JS-HTML-DOM](https://www.w3schools.com/js/js_htmldom.asp)
* [W3Schools JS-Browser-BOM](https://www.w3schools.com/js/js_window.asp)

## 5.1 - DOM
* [Webbläsarens miljö](https://javascript.info/browser-environment)
* [DOM Noder](https://javascript.info/dom-nodes)
* [DOM Navigering](https://javascript.info/dom-navigation)
* [DOM Nod-Egenskaper](https://javascript.info/basic-dom-node-properties)
* [Modifiera Dokumentet DOMen](https://javascript.info/modifying-document)
