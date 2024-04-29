# Lezione su JavaScript: `document`, `window`, Scope, Variabili, Funzioni e Costanti

## `document` e `window`

In JavaScript, `document` e `window` sono oggetti fondamentali che rappresentano il documento HTML corrente e la finestra del browser, rispettivamente.

- `document`: Rappresenta la struttura del documento HTML e fornisce metodi per manipolarlo dinamicamente, ad esempio, modificando elementi, aggiungendo o rimuovendo elementi DOM, gestendo eventi, ecc.

- `window`: Rappresenta la finestra del browser e fornisce metodi e proprietà per controllare la finestra del browser stessa, come la gestione dei popup, la navigazione, l'apertura di nuove finestre, il controllo dei timer, ecc.

```javascript
// Esempio di utilizzo di document e window
console.log(document.title); // Stampa il titolo del documento HTML
window.alert("Ciao!"); // Apre una finestra di avviso con il messaggio "Ciao!"
```

## Scope

Lo scope in JavaScript si riferisce alla visibilità e all'accessibilità delle variabili e delle funzioni all'interno del codice. JavaScript ha lo scope globale e lo scope locale.

- **Scope Globale**: Le variabili definite al di fuori di qualsiasi funzione sono globali e possono essere accessibili da qualsiasi parte dello script.

- **Scope Locale**: Le variabili definite all'interno di una funzione sono locali e accessibili solo all'interno di quella funzione.

```javascript
// Esempio di scope
let globalVariable = "Variabile globale";

function exampleFunction() {
  let localVariable = "Variabile locale";
  console.log(globalVariable); // Accessibile (Variabile globale)
  console.log(localVariable); // Accessibile (Variabile locale)
}

console.log(globalVariable); // Accessibile (Variabile globale)
console.log(localVariable); // Non accessibile (Errore)
```

## Variabili

Le variabili in JavaScript sono contenitori per memorizzare dati. In JavaScript, le variabili possono essere dichiarate con `var`, `let` o `const`.

- `var`: Dichiarazione di variabili tradizionale. Le variabili dichiarate con `var` hanno lo scope di funzione.

- `let`: Introdotta in ES6, consente di dichiarare variabili con scope di blocco, limitandone la visibilità all'interno del blocco in cui sono state dichiarate.

- `const`: Introdotta in ES6, consente di dichiarare costanti il cui valore non può essere modificato dopo l'inizializzazione.

```javascript
// Esempio di variabili
var x = 10; // Dichiarazione con var
let y = 20; // Dichiarazione con let
const number = 4; // Dichiarazione di una costante

x = 15; // Modifica di una variabile
y = 25; // Modifica di una variabile
number = 10; // Errore! Impossibile modificare una costante
```

## Funzioni

Le funzioni in JavaScript sono blocchi di codice riutilizzabili che possono essere richiamati per eseguire operazioni specifiche.

```javascript
// Esempio di funzione
function greet(name) {
  console.log("Ciao, " + name + "!");
}

greet("Mario"); // Output: Ciao, Mario!
```

## Costanti

Le costanti sono variabili il cui valore non può essere modificato dopo l'inizializzazione. In JavaScript, è possibile definire costanti utilizzando la parola chiave `const`.

```javascript
// Esempio di costante
const number = 2;
console.log(number); // Output: 2
number = 4; // Errore! Impossibile modificare una costante
```
