# vue-prov-2020-12-08
Börja med att klona eller ladda ner projektet.
<br>
`git clone https://github.com/abbjetmus/vue-prov-2020-12-08.git`
<br>
## Att tänka på

1. Använd back-ticks **\` \` (shift + `)** om du vill ha html över flera rader i en komponent.
```
var testcomponent = {
       template: `
           <div>
              <p></p>
           </div>
          `
       }
```
2.	Använd små bokstäver på komponent-namn och events/metoder.

## Fråga 1 - Interpolation

Skapa två data variabler som heter **pi** och **e**, tilldela pi värdet 3.14 och e värdet 2.71.<br>
Skriv sedan ut texten **"Pi har värdet 3.14"** och **"E har värdet 2.71"** med hjälp av data variablerna och valfria taggar.

### Resultat
**Pi har värdet 3.14**<br><br>
**E har värdet 2.71**<br>

## Fråga 2 - Loopa
1. Skapa en data variabel med namnet **students** som är en **array [ ]** och innehåller tre objekt med studenter:

```
{id: 1, name: 'Kalle'},
{id: 2, name: 'Pelle'},
{id: 3, name: 'Nalle'}
```

2. Loopa sedan igenom arrayen med studenterna i en html lista där du skriver ut namnet,<br>
du väljer själv om du vill använda <**ul**> unorderd-list eller <**ol**> ordered-list.

### Resultat
* Kalle
* Pelle
* Nalle

## Fråga 3 – Två-vägs-bindning
1. Skapa ett inmatningsfält med **input**-taggen. 
2. Fältet ska två-vägs-binda med hjälp av **v-model** till en data variabel som heter image.
3. Skapa en <img> tagg som också binder till image variabeln med src attributet och visar bilden som matas in i input-taggen.
4. Googla en valfri bild och kopiera bild-addressen till input-fältet så det visas i <img> taggen.

### Resultat
![](https://github.com/abbjetmus/vue-prov-2020-12-08/blob/main/uppgift3.gif)

## Fråga 4 – Watch 
1. Skapa en data variabel med namnet **politiker** som är en **array [ ]** och innehåller fem objekt med politiker:
```
{id: 1, firstName: 'Stefan', lastName: 'Löven'},
{id: 2, firstName: 'Annie', lastName: 'Lööv'},
{id: 3, firstName: 'Nyamko', lastName: 'Sabuni'},
{id: 4, firstName: 'Jimmie', lastName: 'Åkesson'},
{id: 5, firstName: 'Per', lastName: 'Bolund'},
```

2. Skapa ett inmatningsfält med **input**-taggen. 
3. Fältet ska kunna ta in en siffra och två-vägs-binda med hjälp av v-model till en data variabel som heter **selectedId**.
4. Skapa ytterligare en variabel som heter **selectedPolitiker**.
5. Skapa sedan en **watcher** som lyssnar på värdet i selectedId och baserat på selectedId filtrerar politiker arrayen efter politikern med det **id:t**. 
Använd JavaScript **find** funktionen: <https://www.w3schools.com/jsref/jsref_find.asp>
selectedPolitiker ska tilldelas den filtrerade politikern i watchern.
6. Visa namnet på selectedPolitiker med valfri tagg i html-koden.

### Resultat
![](https://github.com/abbjetmus/vue-prov-2020-12-08/blob/main/uppgift4.gif)

## Fråga 5 – Klass bindning (Class binding)
1. Skapa en checkbox med input-taggen som två-vägs binder med **v-model** till en data variabel som heter **background** med värdet **false**.
2. Använd sedan två css-klasser i styles-taggen innanför head-taggen som heter "backgroundGreen", och "backgroundRed".
```
    <style>
        .backgroundGreen {
            background-color: green;
        }

        .backgroundRed {
            background-color: red;
        }
    </style>
```
klasserna ska sätta background-color till red respektive green.
3. Skapa sedan en div tagg med koden nedan:
```
<div style="width: 200px; height: 200px;"></div>
```
4. Bind div-taggens class attribut så att backgroundsfärgen ändras mellan rött och grönt när man bockar i och av den.

### Resultat
![](https://github.com/abbjetmus/vue-prov-2020-12-08/blob/main/uppgift5.gif)

### Fråga 6 – Slots 
1. Skapa en komponent som heter **kroppcomponent**. 
2. **kroppcomponent** ska ha fyra namngivna slots med namnen "head", "shoulder", "knee" och "toe".
3. Använd sedan **kroppcomponent** i '#app'-komponenten och skicka in fyra valfria taggar via slotsen med texten
"Huvud", "Axlar", "Knä" och "Tå".

### Resultat

**Huvud**<br><br>
**Axlar**<br><br>
**Knä**<br><br>
**Tå**<br><br>


## Fråga 7 – Komponent kommunikation
1. Skapa en data variabel med namnet **politikerList** som är en **array [ ]** och innehåller fem objekt med politiker:

```
{id: 1, firstName: 'Stefan', lastName: 'Löven', party: 'Socialdemokraterna'},
{id: 2, firstName: 'Annie', lastName: 'Lööv', party: 'Centerpartiet'},
{id: 3, firstName: 'Nyamko', lastName: 'Sabuni', party: 'Liberalerna'},
{id: 4, firstName: 'Jimmie', lastName: 'Åkesson', party: 'Sverigedemokraterna'},
{id: 5, firstName: 'Per', lastName: 'Bolund', party: 'Mijlöpartiet'},
```

Skapa också en variabel som heter **selectedPolitiker**<br>

2. Skapa sedan en komponent som heter **politikeritem** som tar in en politiker som props.
**politikeritem** visar politikerns namn tillsammans med en knapp bredvid.<br>
3. När man klickar på knappen ska politikern skickas till parent komponenten (app-komponenten) och tilldelas till
selectedPolitiker.<br>
4. **selectedPolitiker** ska sedan visas i html med all information.

### Resultat
![](https://github.com/abbjetmus/vue-prov-2020-12-08/blob/main/uppgift6.gif)

## Fråga 8 – Life-cycle-hooks
1. Gör ett API anrop med följande fetch-anrop på lämplig life-cycle metod:

```
fetch('https://jsonplaceholder.typicode.com/photos/1')
  .then(response => response.json())
  .then(json => console.log(json))
```

2. Titta på datats typer i webbläsarens konsol.
3. Lagra sedan datat i en variabel som heter photo.
4. Presentera photo i html:en med lämpliga taggar.


### Resultat
![](https://github.com/abbjetmus/vue-prov-2020-12-08/blob/main/uppgift8.png)

