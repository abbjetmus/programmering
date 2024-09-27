# 1. Webbläsaren - DOM (Document Object Model) - BOM (Browser Object Model) - Events
Hittills har vi gått igenom HTML/CSS/JS för sig och även applicerat CSS i HTML. 
Nu ska vi lära oss hur vi kan göra ändringar i hemsidan med JavaScript.
Detta görs via ett object som heter DOM (Document Object Model). Med det objektet kan vi hämta och manipulera HTML-taggarna på hemsidan. I igenom resurserna på W3Schools och gör övningsuppgifterna.

## Resurser

- [W3Schools JS-HTML-DOM](https://www.w3schools.com/js/js_htmldom.asp)
- [W3Schools JS-Browser-BOM](https://www.w3schools.com/js/js_window.asp)

# 2. Övningar: DOM (Document Object Model) - BOM (Browser Object Model) - Events

## DOM

### Övning 2.1

1. Skapa en html sida med följande innehåll. Lägg till javascript antingen i en separat fil eller i en script-tagg.
   Använd `document.getElementById()`, `document.getElementsByTagName()` och `document.getElementsByClassName()` för att hämta och skriva ut `div`-taggen, `li`-taggen och `h4 och p`-taggarna.
   Skriv ut med `alert()` och använd egenskapen `.nodeName`.

2. Gör samma sak men med `document.querySelector()` och `document.querySelectorAll()` ``

```
<html>
<body>
  <div id="myDiv">Users:</div>
  <ul>
    <li>John</li>
    <li>Pete</li>
  </ul>
  <h4 class="myClass">These where all the users</h4>
  <p class="myClass">Thanks for checking in</p>
</body>
</html>
```

### Övning 2.2

Skapa en HTML sida med innehållet nedan. Och lägg till javascript enligt uppgift 2.1.
Svara sedan på frågorna efter koden.

```
<!DOCTYPE HTML>
<html>
<body>
  <form name="search">
    <label>Search the site:
      <input type="text" name="search">
    </label>
    <input type="submit" value="Search!">
  </form>

  <hr>

  <form name="search-person">
    Search the visitors:
    <table id="age-table">
      <tr>
        <td>Age:</td>
        <td id="age-list">
          <label>
            <input type="radio" name="age" value="young">less than 18</label>
          <label>
            <input type="radio" name="age" value="mature">18-50</label>
          <label>
            <input type="radio" name="age" value="senior">more than 50</label>
        </td>
      </tr>

      <tr>
        <td>Additionally:</td>
        <td>
          <input type="text" name="info[0]">
          <input type="text" name="info[1]">
          <input type="text" name="info[2]">
        </td>
      </tr>

    </table>

    <input type="submit" value="Search!">
  </form>
</body>
</html>
```

Html dokumentet visar en tabell (table) och ett formulär (form).

Använd rätt metod för att hämta ut följande med javascript.

1. The table with id="age-table".
2. All label elements inside that table (there should be 3 of them).
3. The first td in that table (with the word “Age”).
4. The form with name="search".
5. The first input in that form.
6. The last input in that form.

## Övning 2.3

Skriv koden för att välja elementet med attributet 'data-widget-name' från dokumentet och skriv ut dess värde.

```
<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
    /* your code */
  </script>
</body>
</html>
```

## Övning 2.4

Gör alla externa länkar orange genom att sätta/ändra deras `style`-egenskap.<br>
En länk är extern om:<br>
Dess `href` har :// i den. <br>

1. Dvs ni ska hämta alla `<a>`-taggar
2. Loopa igenom dem med for-loop
3. Kolla ifall attributet `href` innehåller ://, kan göras med methoden `includes()` google upp den i W3Schools
4. Sätta färgen `orange` i så fall.

```
<a name="list">the list</a>
<ul>
  <li><a href="http://google.com">http://google.com</a></li>
  <li><a href="/tutorial">/tutorial.html</a></li>
  <li><a href="local/path">local/path</a></li>
  <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
  <li><a href="http://nodejs.org">http://nodejs.org</a></li>
  <li><a href="http://internal.com/test">http://internal.com/test</a></li>
</ul>

<script>
  // your code goes here.
</script>
```

![DOM 2.4](https://github.com/abbjoafli/Programmering-1/blob/master/1.Javascript/%C3%B6vningar/DOM_2_4.PNG)
