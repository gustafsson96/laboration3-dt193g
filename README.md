# Laboration 3 - Filmsida i Vue

## Beskrivning

Denna laboration utgörs av ett Vue-projekt där användaren kan visa, lägga till och ta bort filmer från en tabell via ett egenskapat REST API. Lösningen är skapad med Vue 3 och Vue Router. 
<br><br>
Webbplatsen innehåller: 

* En startsida med kortfattad information om webbplatsen. 
* En filmsida med ett formulär för att lägga till nya filmer och en tabell som listar redan tillagda filmer. 
* Knappar för att ta bort en film från tabellen. 
* Responsiv design. 
* En komponentbaserad struktur skapad med Vue och scoped CSS. 

## Funktionalitet
* Lista filmer med titel, år, genre, längd och om filmen är sedd. 
* Lägga till nya filmer med validering och felmeddelanden. 
* Ta bort filmer baserat på id med en DeleteButton-komponent. 
* Responsiv design som inkluderar en hamburgermeny för skärmar mindre än 768px. 

## Vue-specifika funktioner
* Props: Används för att skicka data från föräldern till barnkomponenten:
    * Definieras i FilmRow.vue för att skicka ett movie-objekt till FilmView.vue.
* Emits: Används för att skicka events från barnkomponent till förälder enligt följande: 
    * refreshTable - används från AddMovie.vue till FilmView.vue för att uppdatera tabellen. 
    * click - används från DeleteButton.vue till FilmRow.vue för att signalera att knappen klickats.
    * deleteMovie - används från FilmRow.vue till FilmView.vue för att ta bort en film baserat på id. 
* v-model: För two-way binding mellan formulär-input och variabler i AddMovies.vue. 
* Scoped CSS: Komponentspecifik styling. 
* Vue Router: Hanterar navigering mellan HomeView.vue, FilmView.vue och InfoView.vue med RouterLinks i huvudmenyn.
* Reactive State: Används för status på huvudmenyn, i filmlistan och för felmeddelanden i formuläret så att ändringar uppdateras automatiskt i gränssnittet.
* Lifecycle Hooks: onMounted() används för att hämta data från API:et via getMovies() när komponenten FilmView.vue renderas.

## Komponenter och views
| Namn | Typ | Beskrivning |
|----------------|-----|-------------|
| `HomeView.vue`  | View | Startsidan för appen |
| `FilmView.vue`  | View | Innehåller formulär och visar alla filmer i tabellen |
| `InfoView.vue`  | View | Informationssida med reflektioner kring uppgiften |
| `Header.vue`       | Komponent | Navigationsmeny med hamburgare-ikon på små skärmar |
| `Footer.vue`       | Komponent | Sidfot med laboration och namn |
| `AddMovie.vue`  | Komponent | Formulär för att lägga till nya filmer |
| `FilmRow.vue`  | Komponent | En rad i filmtabellen |
| `DeleteButton.vue` | Komponent | Återanvändbar knapp för att ta bort filmer |

## Installation lokalt
1. Klona repot med git clone https://github.com/gustafsson96/laboration3-dt193g.git 
2. Navigera till projektmappen och installera dependencies med: npm install
3. Starta utvecklingsservern med: npm run dev
4. Öppna webbläsaren: http://localhost:5173
