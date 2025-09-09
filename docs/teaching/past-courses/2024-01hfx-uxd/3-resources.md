---
description: "Risorse per lo Sviluppo"
---

# Risorse per lo Sviluppo

Questa sezione presenta alcune risorse utili per lo sviluppo del software che *potrebbero* essere rilevanti per i prototipi (finali) ad alta fedeltà.

Avete bisogno di rinfrescarvi la memoria sullo **sviluppo web**? [Web Fundamentals](https://developers.google.com/web/fundamentals/) è "il punto di riferimento di Google per costruire esperienze web straordinarie".

## Software Suggerito

- [Node.js](https://nodejs.org/en/) 18.17.1 (LTS) and npm
- [Visual Studio Code](https://code.visualstudio.com/)
- [git](https://git-scm.com/)
- [ngrok](https://ngrok.com/download)


## Risorse per il Design

- **Font**: [Google Fonts](https://fonts.google.com/) è una  risorsa di font facili da usare, mentre [FontPair](https://fontpair.co/) può aiutarvi ad abbinarli.
- **Icone**: [Font Awesome](https://fontawesome.com/) e [Noun Project](https://thenounproject.com/) sono dei buoni pacchetti di icone gratuite.
- **Sfondi**: [Subtle Patterns](https://www.toptal.com/designers/subtlepatterns/) è utile per la creazione di background.
- **Immagini**: [Wunderstock](https://wunderstock.com/) e [Unsplash](https://unsplash.com/) sono un buon punto di partenza per trovare immagini con licenza Creative Commons.
- **Colori**: [Adobe Color](https://color.adobe.com/) è una applicazione web che vi aiuta a scegliere schemi di colori da utilizzare nelle vostre applicazioni.

## Risorse per lo Sviluppo Web

- Simulare un **dispositivo mobile** da un browser desktop (ad esempio, con la [Modalità dispositivo] di Chrome(https://developers.google.com/web/tools/chrome-devtools/device-mode)).
- **Geolocalizzazione**:
  - [HTML5 Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
  - [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)
- **Orientamento del dispositivo**: è possibile accedere al giroscopio/accelerometro del dispositivo tramite l'apposita [API HTML5](https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation)
  - [Step-by-step tutorial](https://developers.google.com/web/fundamentals/native-hardware/device-orientation/)
- **Microfono e camera**: ottenere audio e scattare foto con [HTML5 Media Capture API](https://developer.mozilla.org/en-US/docs/Web/API/Media_Streams_API)
- **Galleria di immagini**: per aprire la galleria di immagini su uno smartphone utilizzare:
```html
<input type="file" accept="image/*" capture="camera">
```
- **Vibrazione**: far vibrare il telefono con [HTML5 Vibration API](https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API)
- **Touch** gesture: abilitare touch gestures avanzate (ad esempio, multi-touch, force touch, ecc.) con [HTML5 Touch events](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events)
- **Notifiche**: [HTML5 Notifications API](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API) allows the generation of notifications from the browser
  - lettura utile: [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) and [PWA](https://developers.google.com/web/progressive-web-apps)
- Esempi di utilizzo nell'organizzazione del corso 2020 su GitHub: https://github.com/polito-hci-2020?q=sample