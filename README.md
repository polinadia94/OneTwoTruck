# OneTwoTruck

## Descrizione generale

Il progetto OneTwoTruck consiste in una piattaforma web per il matching tra aziende e privati/professionisti/PMI per la collaborazione in ambito logistico.
L'utente privato può registrarsi, comparire sulla piattaforma, e ricevere richieste e proposte di contatto con bozza di contratto dalle aziende.
L'utente azienda, oltre alle funzionalità di cui sopra, può inviare richieste a privati e aziende. All'invio della richiesta, l'applicazione genera automaticamente una bozza di contratto in base ai dati inseriti dall'utente azienda in fase di richiesta.

L'applicazione è a TRL4, e consiste in un MVP funzionante che permette all'utente di testare le funzionalità della piattaforma.
Completamente sviluppata in Angular Material e CDK, l'MVP al momento non include un backend né un database, componenti che sono da implementare in future iterazioni a TRL superiori.

L'intera applicazione ha comportamenti simulati da un database statico (situato nella cartella shared/users).
Molte funzionalità sono limitate proprio a causa di una mancaza request/response (come generazione storico contratti).

Si consiglia, per vedere tutte le funzionalità, di loggarsi come azienda (database.db incluso nel progetto) o di fare una registrazione come azienda. Infatti l'azienda è l'unica che può generare contratti.
ll privato può modificare il suo profilo o visualizzare i contratti (funzione attualmente non implementata);

## Requisiti di sistema

Attualmente per poter visualizzare l'applicazione si necessita l'installazione in locale di NodeJS e di AngularCLI.

## Istruzioni per l'utilizzo

Dopo l'installazione dei requisiti minimi software indicati al punto precedente, aprire una sessione di terminale (nella cartella OneTwoTruck contenente il progetto) e digitare

ng serve

e premere invio.

Una volta compilato entrare sul proprio browser preferito e digitare nella barra dell'URL

localhost:4200

A questo è possibile utilizzare l'applicazione

## Percorso per testare le funzionalità

Registrarsi come azienda oppure effettuare login utilizzando uno qualsiasi degli utenti pre-registrati presenti nel database.

Nella dashboard, cliccare sull'icona Search

Effettuare una ricerca utilizzando il motore presente a sinistra

Selezionare un utente a cui si vuole effettuare una richiesta, e cliccare su di esso

Cliccare su "Genera Contratto"

Completare la richiesta

Verificare il risultato e il documento pdf relativo al contratto automaticamente generato.
Eventuali bug in fase di visualizzazione sono causati dall'assenza di backend, che impedisce la corretta implementazione del canvas e il riconoscimento adeguato degli spazi e della fine del documento.
L'implementazione futura di una struttura backend può sopperire a questa limitazione.


