# $SCAM — The Transparency Protocol

Sito statico a pagina singola. Dark, futuristico, sofisticato. Tre file.

## I file
- **index.html** -> contenuti (testi, sezioni, link).
- **style.css** -> aspetto (colori, font, spazi).
- **script.js** -> interazioni (copia contratto, comparse, conteggio numeri).

## Le cose che cambierai più spesso

**Colori:** in cima a `style.css`, blocco `:root { ... }`. Cambia i codici (es. `--accent: #6E86FF;`) e ridipingi tutto in un colpo.

**Testi:** in `index.html`, cambia le parole tra i tag. Non toccare i simboli `< >`.

**Link social:** in `index.html`, sezione `.links`, sostituisci gli `href="#"` con i tuoi link (es. `https://x.com/tuonome`).

**Contratto:** in `index.html`, cerca `contractAddr` e metti l'indirizzo vero.

## La tua GIF / animazione 3D (il pezzo forte)
Nel `index.html`, dentro `<figure class="hero__visual">` c'è un segnaposto `<div class="coin">...</div>`.
Sostituiscilo con:

- La moneta è già montata (`scam-coin.png`).
- Un video MP4: `<video src="tuacoin.mp4" autoplay muted loop playsinline></video>`

Consiglio: un **MP4/WebM** pesa molto meno di una GIF e si vede più fluido. Metti il file
nella stessa cartella del sito.

## Vederlo sul computer
Doppio clic su `index.html`. (Tieni tutti i file nella stessa cartella.)

## Pubblicarlo online (GitHub Pages)
Te lo spiego passo passo in chat.
