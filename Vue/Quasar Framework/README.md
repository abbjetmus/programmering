# Quasar Framework

Quasar Framework är ett ramverk baserat på Vue som förenklar utvecklingen av applikationer avsevärt.

## Resurser
<a href="https://quasarcast.com">Quasar Videos</a>

# Skapa ett Quasar Projekt

Skriv in följande kommandon i terminalen på en plats där du vill ha dina Quasar projekt.
```
$ npm i -g @quasar/cli
$ npm init quasar
```

Vid frågorna som dyker upp välj svaren enligt nedan val:

```
$ npm init quasar
Need to install the following packages:
  create-quasar
Ok to proceed? (y) y


 .d88888b.
d88P" "Y88b
888     888
888     888 888  888  8888b.  .d8888b   8888b.  888d888
888     888 888  888     "88b 88K          "88b 888P"
888 Y8b 888 888  888 .d888888 "Y8888b. .d888888 888
Y88b.Y8b88P Y88b 888 888  888      X88 888  888 888
 "Y888888"   "Y88888 "Y888888  88888P' "Y888888 888
       Y8b

√ What would you like to build? » App with Quasar CLI, let's go!
√ Project folder: ... quasar-project
√ Pick Quasar version: » Quasar v2 (Vue 3 | latest and greatest)
√ Pick script type: » Javascript
√ Pick Quasar App CLI variant: » Quasar App CLI with Webpack
√ Package name: ... quasar-project
√ Project product name: (must start with letter if building mobile apps) ... Quasar App
√ Project description: ... A Quasar Project
√ Author: ... abbjetmus <jeton.mustini@abbindustrigymnasium.se>
√ Pick your CSS preprocessor: » Sass with SCSS syntax
√ Check the features needed for your project: » ESLint, State Management (Pinia), Axios
√ Pick an ESLint preset: » Standard

 Quasar • Generating files...

 - babel.config.js
 - quasar.config.js
 - README.md
 - .editorconfig
 - .gitignore
 - .npmrc
 - .postcssrc.js
 - jsconfig.json
 - package.json
 - public/favicon.ico
 - src/App.vue
 - src/index.template.html
 - .vscode/extensions.json
 - .vscode/settings.json
 - public/icons/favicon-128x128.png
 - public/icons/favicon-16x16.png
 - public/icons/favicon-32x32.png
 - public/icons/favicon-96x96.png
 - src/assets/quasar-logo-vertical.svg
 - src/boot/.gitkeep
 - src/components/EssentialLink.vue
 - src/layouts/MainLayout.vue
 - src/pages/ErrorNotFound.vue
 - src/pages/IndexPage.vue
 - src/router/index.js
 - src/router/routes.js
 - src/css/app.scss
 - src/css/quasar.variables.scss
√ Install project dependencies? (recommended) » Yes, use npm
```

För att starta projektet måste man cd in i det först enligt:

```
$ cd quasar-project
$ npm quasar dev
```

Om man öppnar projektet i Visual Studio Code så ser mapp strukturen enligt.

<img src="./images/folder-structure.png"></a>

Den mappen som vi endast behöver fokusera på 99% av tiden är **src**-mappen.

* **assets**  
I assets så lägger man in bilder och andra resurser som man vill ha på hemsidan.
* **boot**  
I boot sätter man upp användning av 3:e parts kod tex om man använder Firebase eller ett graf-bibliotek.
* **components**  
I components lägger man in mindre vue-komponenter t.ex. en sektion av en sida.
* **css**  
I css mappen finns filer att justera CSS för hela hemsidan.
* **layouts**  
I layouts finns MainLayout komponenten som är den layout som används förr alla sidor.
* **pages**  
I pages skapar man komponenter som blir en hel sida i applikationen.
* **router**  
I router definerar man hur url eller sökvägarna ser ut till dem olika sidorna i applikationen tex /home ska gå till startsidan och /about ska gå till om-oss sidan osv.
* **stores**
I stores kan man definera data som blir tillgängligt över alla komponenter.