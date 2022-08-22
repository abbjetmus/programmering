# Programmering 1
Välkommen till kursen Programmering 1 på ABB Gymnasiet 2022. Under kursens gång kommer vi gå igenom de tre språken som används för att programmera mot webben HTML/CSS/JavaScript. Även om teknikerna oftast används mot webben så går det bygga alla typer av applikationer med dem.

När vi lärt oss grunderna kommer vi lära oss hur man bygger mer avancerade applikationer med javascript-ramverket Vue.js.

Vi kommer även lära oss hur man kommunicerar med webbtjänster genom HTTP-protokollet och databaser iform av Firebase.

Dessa tekniker kommer vi applicera på olika projekt som till exempel bygga en uppkopplad termometer eller en robot bil.
Projekten är i samarbete med andra kurser som Andreas och Pär undervisar.

![alt text](https://cdn.bamahadigital.com/q:i/r:1/wp:1/w:372/u:https://bamahadigital.com/wp-content/uploads/2021/03/wa2.png "Web Anatomy")

## HTML
Kort så är **HTML** en webbsidas struktur och innehåll på samma sett som vårt skelett är för kroppen.

## CSS
**CSS** Är det som ger en webbsida utseende och design i form av färger och positionering. På samma sätt som huden, färgen och kläderna på människan.

## JavaScript
**JavaScript** är det som ger funktionalitet till en webbsida, att något ska hända när man klickar på en knapp osv. Motsvarande för människokroppen är nervsystemet och härnan som tillsammans får kroppen att röra på sig.

## Övergripande resurser för denna modul:
Undervisningen kommer bestå av lärarledda genomgångar av olika koncept i kombination med övningar och en utbildningsserie på Youtube.

Kursens resurser kommer finnas här på Github och följande länkar. 

- [W3School Javascript](https://www.w3schools.com/js/default.asp)
- [W3School HTML](https://www.w3schools.com/html/)
- [W3School CSS](https://www.w3schools.com/css/default.asp)
- [HTML/CSS av The Net Ninja på Youtube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G)
- [Modern Javascript av The Net Ninja på Youtube](https://www.youtube.com/playlist?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc)



# Testmiljö
Det finns många sätt att testa sin kod, här är dem två exempel vi föreslår i början, men på sikt är det bäst att köra Visual Studio Code.

**Visual Studio Code** är programmerings-editor (ett program vi använder för att skriva kod i).

1. Skapa en mappstruktur som tex C:/programmering  
För JavaScript skapar du en under-mapp med namnet JavaScript.
I javascript mappen öppnar du Visual Studio Code. Från Visual Studio Code skapar du en fil tex **test.html**.
I filen **test.html** lägger du in en script tagg:  
```html
<script>
    let x = 5
    console.log(x)
</script>
```

Innanför script-taggen kan du skriva din javascript.
För att se resultatet från koden öppnar du filen från mappen i webbläsaren. I webbläsaren klickar du på tangenten F12 för att öppna **developer-tools** och **konsol-fönstret**.

Man när man gör ändringar i sin fil så måste man ladda om sidan i webbläsaren. Men genom ett tillägg som heter LiveServer i Visual Studio Code kan man öppna filen så att den uppdateras live.

2. Eller så kan man testa i en online miljö som heter Plunker.  
Här är en länk till en plunk som ni kan använda: <https://plnkr.co/edit/9OnAVyIK7Tk1cP6d> 

## W3Schools
Mycket bra sida för HTML, CSS och JavaScript <https://www.w3schools.com/default.asp> som vi kommer utgå ifrån.

## Checklista HTML/CSS

* Känna till de vanligaste HTML-taggarna h1-h6, p, div, span, a, img, form, button, input...
* Förstå skillnaden mellan inline och block element i HTML
* Hur man skapar listor
* Vad som menas BOX-modellen och hur man ändrar margin, padding, border, width and height
* Positionering static, relative, absolute, fixed...
* Hur man jobbar med färger och bakgrundsfärger i CSS
* Hur man jobbar med text i CSS
* Vad flexbox är och hur man jobbar med det för att designa en layout
* Olika sätt att inkludera CSS i HTML
