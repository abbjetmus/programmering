# Javascript

## Innehåll

- Variabler
- Datatyper
- Operatorer
- Jämförelser
- If-satser
- Loopar: while & for
- Switch
- Funktioner
- Arrow-funktioner
- Objekt
- Listor/arrays

## Intro

I det här första kapitlet på våran resa i kursen Programmering 1 så ska vi lära oss grunderna i Javascript/HTML/CSS. Javascript är programmeringsspråket som körs i webbapplikationer och används för att kontrollera webbläsaren vilket resulterar i mer interaktiva webbsidor. På senare tid använder man även Javascript utanför webbläsaren som t.ex. mobilappar och serverapplikationer. Instagram och Facebook är exempel på mobilappar som är utvecklade i Javascript.

Det här är Wikipedias defintion på Javascript:

> Javascript, i marknadsföringssyfte skrivet JavaScript och förkortat JS, är ett prototyp-baserat skriptspråk som är dynamiskt, svagt typat och hanterar funktioner som första-klass-objekt. Javascript används främst på klientsidan i webbtillämpningar, det vill säga exekveras i en webbläsares Javascriptmotor. Då Javascript används i webbläsare arbetar det mot ett gränssnitt som kallas Document Object Model (DOM).
>
> Vanligtvis inbäddas Javascript i, eller inkluderas från, HTML-sidor. Exempel på användningsområden är kontroll av ifyllda fält innan formulär skickas till en server, funktioner för att visa eller dölja delar av en sida och växling av annonsbilder med visst intervall. Javascript kan även användas för mer avancerade funktioner i en webbläsare såsom spel och bildbehandling.
>
> Skriptspråket kan implementeras i andra program än webbläsare. Ett numera vanligt exempel av implementation utanför webbläsaren är Node.js, som tillåter utvecklaren att använda Javascript på serversidan för att kunna arbeta med anslutningar till databaser, skicka e-post-meddelanden och så vidare.

Detta är en mer teknisk beskrivning som vi kommer förstå bättre när vi är klara med javascript delen.

Vi lär oss alla på olika sätt och i den här kursen kommer det finnas material som förhoppningsvis också passar alla. Kursmaterialet finns som text och Youtube-videor.

Våga testa och fråga kompisar och lärare för att få bästa möjligheter till att utvecklas.

Till varje del så kommer det finnas lite övningsuppgifter.

## Övergripande resurser för denna modul:

- [W3School Javascript](https://www.w3schools.com/js/default.asp)

- [Modern Javascript av The Net Ninja på Youtube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc)

# 0. Testmiljö

Det finns många sätt att testa sin kod, här är dem två exempel.

1. Skapa en mappstruktur som tex C:/programmering/javascript.  
   I javascript mappen öppnar du Visual Studio Code. Från Visual Studio Code skapar du en fil tex **test.html**.
   I filen **test.html** lägger du in en script tagg:

```html
<script>
  let x = 5;
  console.log(x);
</script>
```

Innanför script-taggen kan du skriva din javascript.
För att se resultatet från koden öppnar du filen från mappen i webbläsaren. I webbläsaren klickar du på tangenten F12 för att öppna **developer-tools** och **konsol-fönstret**.

2. Eller så kan man testa i en online miljö som heter Plunker.  
   Här är en länk till en plunk som ni kan använda: <https://plnkr.co/edit/9OnAVyIK7Tk1cP6d>

# 1. Variabler, datatyper, jämförelser, if-satser, loopar, objekt och listor

## 1.1 Variabler

### Resurser

[W3Schools Variabels](https://www.w3schools.com/js/js_variables.asp)

### Övningsuppgifter

[Övningar Variabler](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#11-variabler)

## 1.2 Datatyper

### Resurser

[W3Schools Datatypes](https://www.w3schools.com/js/js_datatypes.asp)

### Övningsuppgifter

[Övningar Datatyper](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-1)

## 1.3 Operatorer

### Resurser

[W3Schools Operators](https://www.w3schools.com/js/js_operators.asp)

### Övningsuppgifter

[Övningar Operatorer](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#13-operatorer)

## 1.4 Jämförelser

### Resurser

[W3Schools Comparisons](https://www.w3schools.com/js/js_comparisons.asp)

### Övningsuppgifter

[Övningar Jämförelser](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-3)

## 1.5 If-satser

### Resurser

[W3Schools If-statement](https://www.w3schools.com/js/js_if_else.asp)

### Övningsuppgifter

[Övningar If-satser](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-4)

## 1.6 Loopar: while och for

### Resurser

[W3Schools Loops: for](https://www.w3schools.com/js/js_loop_for.asp)
[W3Schools Loops: while](https://www.w3schools.com/js/js_loop_while.asp)

### Övningsuppgifter

[Övningar Loopar: while och for](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-5)

## 1.7 Switch-satsen

### Resurser

[W3Schools The "Switch" statement](https://www.w3schools.com/js/js_switch.asp)

### Övningsuppgifter

[Övningar Switch-satsen](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-6)

## 1.7 Funktioner

### Resurser

[W3Schools Functions](https://www.w3schools.com/js/js_functions.asp)

### Övningsuppgifter

[Övningar Fuktioner](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-7)

## 1.8 Arrow functions (pil-funktioner)

### Resurser

[W3Schools Arrow-functions](https://www.w3schools.com/js/js_arrow_function.asp)

### Övningsuppgifter

[Övningar Arrow functions](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-8)

## 1.9 Objekt

### Resurser

[W3Schools Objects](https://www.w3schools.com/js/js_objects.asp)

### Övningsuppgifter

[Övningar Objekt](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-9)

## 1.10 Listor (Arrays)

### Resurser

[W3Schools Arrays](https://www.w3schools.com/js/js_arrays.asp)

### Övningsuppgifter

[Övningar Arrays](https://github.com/abbjetmus/programmering/tree/master/Javascript/%C3%B6vningar#%C3%B6vningsuppgifter-10)
