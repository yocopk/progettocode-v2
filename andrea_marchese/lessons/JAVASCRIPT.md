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

## Operatore membro punto "`.`", cos'è?

L'operatore punto in **JavaScript** è un simbolo (".") utilizzato per accedere alle proprietà e ai metodi di un oggetto. Quando viene utilizzato seguito dal nome di una proprietà o di un metodo, permette di **navigare** all'interno della struttura dell'oggetto per ottenere o modificare i suoi valori o per chiamare i suoi metodi.

In pratica, l'operatore punto è usato per specificare la relazione di appartenenza tra un oggetto e i suoi membri. Quando si scrive `oggetto.nomeProprietà`, JavaScript interpreterà ciò come "prendi la proprietà `nomeProprietà` dell'oggetto `oggetto`".

Ecco un esempio molto semplice:

```javascript
var persona = {
  nome: "Mario",
  età: 30,
};

console.log(persona.nome); // Stampa: "Mario"
```

Qui, l'operatore punto viene utilizzato per accedere alla proprietà `nome` dell'oggetto `persona`.

In breve, l'operatore punto in JavaScript è un meccanismo essenziale per interagire con gli oggetti e accedere ai loro membri.

## OPP (Object-Oriented Programming)

In JavaScript, l'**OOP** è supportata principalmente attraverso il concetto di prototipi. Nonostante JavaScript non abbia una classica implementazione basata sul concetto di classi come alcuni altri linguaggi orientati agli oggetti (come Java o C++), è comunque possibile implementare il paradigma OOP attraverso prototipi e costruttori di oggetti.

1.  **Costruttori di oggetti**: I costruttori di oggetti sono funzioni che vengono utilizzate per creare nuove istanze di oggetti. Queste funzioni definiscono la struttura di un oggetto e le sue proprietà. Ad esempio:

```javascript
function Persona(nome, età) {
  this.nome = nome;
  this.età = età;
}

var mario = new Persona("Mario", 30);
console.log(mario.nome); // Output: "Mario"
console.log(mario.età); // Output: 30
```

2. **Prototipi**: In JavaScript, ogni oggetto ha un prototipo che può contenere proprietà e metodi che possono essere condivisi tra tutte le istanze di quell'oggetto. È possibile aggiungere metodi a un prototipo per consentire la condivisione di codice tra tutte le istanze di un oggetto. Ad esempio:

```javascript
Persona.prototype.saluta = function () {
  console.log("Ciao, sono " + this.nome);
};

mario.saluta(); // Output: "Ciao, sono Mario"
```

3.  **Ereditarietà prototipica**: In JavaScript, l'ereditarietà viene gestita attraverso la catena dei prototipi. Ogni oggetto ha un riferimento al suo prototipo padre, e le proprietà e i metodi di questo prototipo possono essere ereditati dall'oggetto stesso. Ad esempio:

```javascript
function Studente(nome, età, corso) {
  Persona.call(this, nome, età);
  this.corso = corso;
}

Studente.prototype = Object.create(Persona.prototype);
Studente.prototype.constructor = Studente;

Studente.prototype.presentati = function () {
  console.log("Ciao, sono " + this.nome + " e studio " + this.corso);
};

var luca = new Studente("Luca", 25, "Informatica");
luca.saluta(); // Output: "Ciao, sono Luca"
luca.presentati(); // Output: "Ciao, sono Luca e studio Informatica"
```

In questo esempio, la funzione `Studente` eredita le proprietà e i metodi della funzione `Persona` attraverso il prototipo. La funzione `Object.create()` viene utilizzata per creare un nuovo oggetto il cui prototipo è il prototipo di `Persona`, in modo che la catena di ereditarietà sia stabilita.

In sintesi, l'**OOP** in JavaScript si basa sul concetto di prototipi e costruttori di oggetti per consentire la creazione e l'organizzazione di codice orientato agli oggetti. Sebbene sia diverso dall'**OOP** in altri linguaggi, può essere altrettanto potente e flessibile una volta compreso.

## Operatori logici JS

Gli operatori logici in JavaScript sono utilizzati per eseguire operazioni logiche su valori booleani (true o false) o su valori che possono essere convertiti in booleani. Gli operatori logici principali sono:

1. **AND logico (&&)**: Restituisce true se entrambe le espressioni sono vere, altrimenti restituisce false. Ad esempio:

   ```javascript
   let a = true;
   let b = false;
   console.log(a && b); // Output: false
   ```

2. **OR logico (||)**: Restituisce true se almeno una delle espressioni è vera, altrimenti restituisce false. Ad esempio:

   ```javascript
   let a = true;
   let b = false;
   console.log(a || b); // Output: true
   ```

3. **NOT logico (!)**: Restituisce true se l'espressione è falsa e viceversa. Ad esempio:

   ```javascript
   let a = true;
   console.log(!a); // Output: false
   ```

Gli operatori logici sono ampiamente utilizzati in JavaScript per controllare il flusso di esecuzione del codice, per effettuare confronti e per eseguire azioni condizionali. Vengono spesso utilizzati insieme agli operatori di confronto (come `==`, `!=`, `===`, `!==`, `>`, `<`, `>=`, `<=`) per creare condizioni complesse.

Ecco un esempio di come gli operatori logici possono essere utilizzati in una struttura di controllo condizionale (ad esempio, un'istruzione if):

```javascript
let a = 10;
let b = 5;
if (a > 0 && b > 0) {
  console.log("Entrambi i numeri sono positivi");
} else if (a > 0 || b > 0) {
  console.log("Almeno uno dei numeri è positivo");
} else {
  console.log("Entrambi i numeri sono negativi");
}
```

In questo esempio, l'AND logico `&&` viene utilizzato per verificare se entrambi `a` e `b` sono positivi, mentre l'OR logico `||` viene utilizzato per verificare se almeno uno dei due è positivo.

## Array in Javascript

In JavaScript, un array è una struttura dati che può contenere zero o più elementi, ognuno dei quali può essere di qualsiasi tipo di dati JavaScript, come numeri, stringhe, oggetti o persino altri array. Gli array in JavaScript sono oggetti speciali che hanno un insieme di proprietà e metodi che li rendono molto versatili e utili per memorizzare e manipolare collezioni di dati.

Ecco un esempio di come creare un array in JavaScript:

```javascript
let numeri = [1, 2, 3, 4, 5];
let nomi = ["Mario", "Luigi", "Peach", "Yoshi"];
let misto = [1, "due", true, { nome: "Mario", punteggio: 100 }];
```

In questo esempio, abbiamo creato tre array: uno contenente una serie di numeri interi, uno contenente una serie di stringhe e uno contenente una miscela di tipi di dati diversi, inclusi numeri, stringhe, booleani e oggetti.

Gli array in JavaScript sono zero-based, il che significa che il primo elemento ha l'indice 0, il secondo elemento ha l'indice 1 e così via. Puoi accedere agli elementi di un array utilizzando la sintassi degli array con le parentesi quadre `[]` e specificando l'indice dell'elemento desiderato.

```javascript
console.log(numeri[0]); // Output: 1
console.log(nomi[2]); // Output: Peach
console.log(misto[3]); // Output: { nome: 'Mario', punteggio: 100 }
```

# Metodi e proprietà degli `array`

Negli array JavaScript, ci sono molti metodi e proprietà utilizzati comunemente per manipolare e accedere ai dati contenuti negli array. Ecco alcuni dei più diffusi:

1. **length**: La proprietà `length` restituisce il numero di elementi presenti nell'array.

   ```javascript
   const numeri = [1, 2, 3, 4, 5];
   console.log(numeri.length); // Output: 5
   ```

2. **push()**: Il metodo `push()` aggiunge uno o più elementi alla fine dell'array e restituisce la nuova lunghezza dell'array.

   ```javascript
   const numeri = [1, 2, 3];
   numeri.push(4, 5);
   console.log(numeri); // Output: [1, 2, 3, 4, 5]
   ```

3. **pop()**: Il metodo `pop()` rimuove l'ultimo elemento dall'array e lo restituisce.

   ```javascript
   const numeri = [1, 2, 3];
   const ultimoElemento = numeri.pop();
   console.log(ultimoElemento); // Output: 3
   console.log(numeri); // Output: [1, 2]
   ```

4. **shift()**: Il metodo `shift()` rimuove il primo elemento dall'array e lo restituisce.

   ```javascript
   const numeri = [1, 2, 3];
   const primoElemento = numeri.shift();
   console.log(primoElemento); // Output: 1
   console.log(numeri); // Output: [2, 3]
   ```

5. **unshift()**: Il metodo `unshift()` aggiunge uno o più elementi all'inizio dell'array e restituisce la nuova lunghezza dell'array.

   ```javascript
   const numeri = [2, 3, 4];
   numeri.unshift(1);
   console.log(numeri); // Output: [1, 2, 3, 4]
   ```

6. **slice()**: Il metodo `slice()` restituisce una parte dell'array, selezionata dal punto di inizio al punto di fine (o alla fine dell'array) come nuovo array.

   ```javascript
   const numeri = [1, 2, 3, 4, 5];
   const nuovoArray = numeri.slice(1, 3);
   console.log(nuovoArray); // Output: [2, 3]
   ```

7. **splice()**: Il metodo `splice()` modifica il contenuto di un array rimuovendo o sostituendo elementi esistenti e/o aggiungendo nuovi elementi in posizioni specifiche.

   ```javascript
   const numeri = [1, 2, 3, 4, 5];
   numeri.splice(2, 1); // Rimuove un elemento a partire dall'indice 2
   console.log(numeri); // Output: [1, 2, 4, 5]
   ```

8. **forEach()**: Il metodo `forEach()` esegue una funzione callback una volta per ciascun elemento nell'array.

   ```javascript
   const numeri = [1, 2, 3];
   numeri.forEach((numero) => console.log(numero));
   // Output:
   // 1
   // 2
   // 3
   ```

Questi sono solo alcuni dei metodi e delle proprietà più comuni degli array in JavaScript. Ce ne sono molti altri che consentono di eseguire una vasta gamma di operazioni sugli array, come la ricerca di elementi, la modifica di elementi esistenti e la concatenazione di array.

Gli array in JavaScript sono molto flessibili e possono essere utilizzati in una varietà di situazioni, dall'organizzazione dei dati alla gestione delle collezioni di elementi HTML dinamici. Sono uno degli strumenti fondamentali per lo sviluppo web e l'elaborazione dei dati in JavaScript.

## Oggetti in JS

In JavaScript, gli oggetti sono strutture dati fondamentali che consentono di organizzare e manipolare dati complessi. Gli oggetti sono collezioni di coppie chiave-valore, dove ogni valore è associato a una chiave univoca. Le chiavi sono di solito stringhe, mentre i valori possono essere di qualsiasi tipo di dati JavaScript, compresi altri oggetti, funzioni e array.

Ecco come puoi creare un oggetto in JavaScript:

```javascript
let persona = {
  nome: "Mario",
  cognome: "Rossi",
  eta: 30,
  indirizzo: {
    via: "Via Roma",
    numero: 10,
    città: "Milano",
  },
  hobby: ["calcio", "musica", "viaggi"],
};
```

In questo esempio, abbiamo creato un oggetto chiamato `persona` che ha diverse proprietà, come `nome`, `cognome`, `eta`, `indirizzo` e `hobby`. Le proprietà dell'oggetto sono definite come coppie chiave-valore, dove la chiave è una stringa e il valore può essere di qualsiasi tipo di dati JavaScript.

Puoi accedere alle proprietà di un oggetto utilizzando la sintassi del punto `.` o la sintassi delle parentesi quadre `[]`:

```javascript
console.log(persona.nome); // Output: "Mario"
console.log(persona["cognome"]); // Output: "Rossi"
console.log(persona.indirizzo.città); // Output: "Milano"
```

Puoi anche modificare le proprietà di un oggetto o aggiungere nuove proprietà in qualsiasi momento:

```javascript
persona.eta = 35; // Modifica il valore della proprietà 'eta'
persona.professione = "Ingegnere"; // Aggiunge una nuova proprietà 'professione'
```

Inoltre, puoi accedere alle chiavi e ai valori di un oggetto utilizzando i metodi `Object.keys()`, `Object.values()` e `Object.entries()`:

```javascript
console.log(Object.keys(persona)); // Output: ["nome", "cognome", "eta", "indirizzo", "hobby"]
console.log(Object.values(persona)); // Output: ["Mario", "Rossi", 35, { via: "Via Roma", numero: 10, città: "Milano" }, ["calcio", "musica", "viaggi"]]
console.log(Object.entries(persona)); // Output: Array di array contenente coppie chiave-valore
```

Gli oggetti in JavaScript sono molto flessibili e potenti e vengono ampiamente utilizzati per rappresentare dati complessi e strutturare il codice in applicazioni JavaScript.

## Costrutti in JS

I costrutti in JavaScript sono gli elementi fondamentali che consentono di controllare il flusso di esecuzione del codice, eseguire operazioni ripetute e gestire le eccezioni. I principali costrutti in JavaScript includono:

1. **Istruzione condizionale (if...else)**: Utilizzata per eseguire blocchi di codice condizionalmente, in base al valore di una condizione.

   ```javascript
   if (condizione) {
     // Codice da eseguire se la condizione è vera
   } else {
     // Codice da eseguire se la condizione è falsa
   }
   ```

2. **Cicli (for, while, do...while)**: Utilizzati per eseguire ripetutamente blocchi di codice.

   - Ciclo for:

     ```javascript
     for (inizializzazione; condizione; iterazione) {
       // Codice da eseguire ripetutamente
     }
     ```

   - Ciclo while:

     ```javascript
     while (condizione) {
       // Codice da eseguire finché la condizione è vera
     }
     ```

   - Ciclo do...while:
     ```javascript
     do {
       // Codice da eseguire almeno una volta e poi finché la condizione è vera
     } while (condizione);
     ```

3. **Switch**: Utilizzato per eseguire una delle molteplici istruzioni in base al valore di una variabile.

   ```javascript
   switch (espressione) {
     case valore1:
       // Codice da eseguire se espressione è uguale a valore1
       break;
     case valore2:
       // Codice da eseguire se espressione è uguale a valore2
       break;
     default:
     // Codice da eseguire se espressione non corrisponde a nessun caso
   }
   ```

4. **Istruzione try...catch**: Utilizzata per gestire le eccezioni e gli errori nel codice.

   ```javascript
   try {
     // Codice che potrebbe generare un errore
   } catch (errore) {
     // Codice da eseguire se viene generato un errore
   }
   ```

5. **Istruzione throw**: Utilizzata per generare manualmente un'eccezione.

   ```javascript
   throw "Errore personalizzato";
   ```

6. **Istruzione break e continue**: Utilizzate per controllare il flusso di esecuzione all'interno di cicli e switch.

   - `break`: Termina l'esecuzione di un ciclo o di uno switch.
   - `continue`: Salta l'iterazione corrente di un ciclo e passa alla successiva.

Questi sono solo alcuni dei principali costrutti di controllo di flusso in JavaScript. Sono essenziali per la scrittura di codice efficiente e per gestire situazioni diverse durante l'esecuzione del programma.

## Tipi su JS (`typeof`)

In JavaScript, booleano, stringa e numero sono tre tipi di dati fondamentali utilizzati per rappresentare valori diversi. Ecco le differenze principali tra di essi:

1. **Booleano**: Un booleano rappresenta un valore logico che può essere vero (true) o falso (false). È utilizzato per eseguire operazioni logiche e decisionali nel codice.

   ```javascript
   let vero = true;
   let falso = false;
   ```

2. **Stringa**: Una stringa è una sequenza di caratteri, come lettere, numeri e simboli, racchiusa tra virgolette singole ('') o doppie (""). Le stringhe sono utilizzate per rappresentare testo nel codice.

   ```javascript
   let nome = "Mario";
   let messaggio = "Ciao, mondo!";
   ```

3. **Numero**: Un numero rappresenta un valore numerico, che può essere intero o decimale. In JavaScript, i numeri possono essere sia interi che in virgola mobile e vengono utilizzati per eseguire operazioni matematiche.

   ```javascript
   let intero = 42;
   let decimale = 3.14;
   ```

Le differenze principali tra booleani, stringhe e numeri includono:

- **Tipo di valore**: Un booleano può essere solo vero o falso. Una stringa può contenere qualsiasi sequenza di caratteri. Un numero può essere un valore numerico.

- **Sintassi di dichiarazione**: Per dichiarare un booleano, si utilizzano i valori true o false. Per dichiarare una stringa, si utilizzano le virgolette singole ('') o doppie (""). Per dichiarare un numero, non ci sono caratteri speciali necessari.

- **Utilizzo**: I booleani sono utilizzati per eseguire decisioni logiche. Le stringhe sono utilizzate per rappresentare testo. I numeri sono utilizzati per eseguire operazioni matematiche.

È importante notare che JavaScript è un linguaggio di scripting dinamico, il che significa che non è necessario dichiarare esplicitamente il tipo di dati di una variabile quando viene creata. JavaScript determina automaticamente il tipo di dati in base al valore assegnato alla variabile. Questo rende JavaScript molto flessibile, ma può anche portare a comportamenti imprevisti se non si è attenti.
