---
description: "Calendario"
---

import {LectureRow, LectureDivider, LectureTable} from '@site/src/components/Lectures';
import Link from '@docusaurus/Link';


# Calendario

:::tip Quick Links
* [Playlist delle videolezioni](https://www.youtube.com/playlist?list=PLs7DWGc_wmwT7lSFgUpuNX80Pc7wp5rah) (su YouTube)
* [Materiale del corso](https://github.com/polito-iaw-2023/materiale) (su GitHub)
:::

Questa sezione contiene il calendario del corso e i materiali di tutte le lezioni e i laboratori, con gli argomenti per ognuno di essi. Le seguenti informazioni sono un'*anteprima non definitiva* dell'organizzazione del corso. Sono fornite per aiutare gli studenti a organizzarsi e possono cambiare in ogni momento.

Tutte le slide, esempi, esercizi e ogni altro materiale usato in aula e durante il laboratorio saranno anche pubblicate in un [repository GitHub](https://github.com/polito-iaw-2023/materiale). Inoltre, tutte le lezioni saranno video-registrate e rese disponibili sul Portale della Didattica e in una [playlist YouTube](https://www.youtube.com/playlist?list=PLs7DWGc_wmwT7lSFgUpuNX80Pc7wp5rah) dedicata.


<LectureTable defaultTeacher="Luigi De Russis" defaultType="Lezione" showMaterial={false} language='IT'>

<LectureDivider topic='Settimana 1'/>{/*---------------------------------------*/}

<LectureRow
    date="09/10/2023" time="16:00-17:30"
    video="https://youtu.be/K2Tp8YXECKk"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/slide/00-intro.pdf" title="Slide introduttive in PDF">Introduzione al corso</Link>
</LectureRow>

<LectureRow
    date="09/10/2023" time="17:30-19:00"
    video="https://youtu.be/jKFGAZzhev4"
    >
     <Link to="https://polito-iaw-2023.github.io/materiale/slide/01-web-architectures.pdf" title="Panoramica sulle architetture web">Architetture web</Link>
</LectureRow>

<LectureRow
    date="12/10/2023" time="16:00-17:30"
    video="https://youtu.be/RPkBuD1LFQM"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/slide/02-html.pdf" title="Materiale su HTML">HTML5</Link>
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/02-html/">Esempio</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureRow
    date="09/10/2023" time="17:30-19:00" type="Esercizio"
    video="https://youtu.be/mxfFhfyUd1g"
    >
    <Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/02-html/esercizio/"title="Esercizio su HTML">HTML5</Link> (su GitHub)
</LectureRow>

<LectureDivider topic='Settimana 2'/>{/*---------------------------------------*/}

<LectureRow
    date="16/10/2023" time="16:00-17:30" teacher="Juan Pablo Sáenz Moreno"
    video="https://youtu.be/b1fuJl7T4tE"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/slide/03-css.pdf" title="CSS3">CSS3</Link>
</LectureRow>

<LectureRow
    date="16/10/2023" time="17:30-19:00" type="Esercizio" teacher="Juan Pablo Sáenz Moreno"
    video="https://youtu.be/yPBdMv1Pl7g"
    >
    <Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/03-css/esercizio/" title="Materiale su CSS3">CSS3</Link> (su GitHub)
</LectureRow>

<LectureRow
    date="19/10/2023" time="16:00-17:30" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-01/lab-01-primi-passi-html-css.pdf">Primi passi con HTML e CSS</Link> (gruppo I)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-01/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureRow
    date="19/10/2023" time="17:30-19:00" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-01/lab-01-primi-passi-html-css.pdf">Primi passi con HTML e CSS</Link> (gruppo II)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-01/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureDivider topic='Settimana 3'/>{/*---------------------------------------*/}

<LectureRow
    date="23/10/2023" time="16:00-17:30" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/slide/04-more-css.pdf" title="CSS3: aspetti avanzati">CSS3: aspetti avanzati</Link>
</LectureRow>

<LectureRow
    date="23/10/2023" time="17:30-19:00" type="Esercizio" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/04-more-css/" title="Esercizio su flex">CSS3: aspetti avanzati</Link> (su GitHub)
</LectureRow>

<LectureRow
    date="26/10/2023" time="16:00-17:30" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-02/lab-2-css-avanzato.pdf">CSS Avanzato</Link> (gruppo I)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-02/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureRow
    date="26/10/2023" time="17:30-19:00" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-02/lab-2-css-avanzato.pdf.pdf">CSS Avanzato</Link> (gruppo II)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-02/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureDivider topic='Settimana 4'/>{/*---------------------------------------*/}

<LectureRow
    date="30/10/2023" time="16:00-17:30" type="Esercizio" teacher="Juan Pablo Sáenz Moreno"
    video="https://youtu.be/byT8hecsTkA"
    >
    <Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/05-bootstrap/" title="Esercizio su Bootstrap">Framework CSS: Bootstrap</Link> (su GitHub)
</LectureRow>

<LectureRow
    date="02/11/2023" time="16:00-17:30" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-03/lab-3-bootstrap.pdf">
    Framework CSS: Bootstrap</Link> (gruppo I)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-03/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureRow
    date="02/11/2023" time="17:30-19:00" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-03/lab-3-bootstrap.pdf">
    Framework CSS: Bootstrap</Link> (gruppo II)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-03/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureDivider topic='Settimana 5'/>{/*---------------------------------------*/}

<LectureRow
    date="06/11/2023" time="16:00-17:30"
    video="https://youtu.be/wQGosi69A-E"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/slide/05-ia-visual-design.pdf" title="Architettura dell'informazione e visual design">Progettare per il web: architettura dell'informazione e visual design</Link>
</LectureRow>

<LectureRow
    date="06/11/2023" time="17:30-19:00"
    video="https://youtu.be/QpCX4UTAGs4"
    >
    Progettare per il web: architettura dell'informazione e visual design (continua)
</LectureRow>

<LectureRow
    date="09/11/2023" time="16:00-17:30" type="Lab"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-04/lab-4-progettare-web.pdf">Progettare per il web</Link> (gruppo I)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-04/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureRow
    date="09/11/2023" time="17:30-19:00" type="Lab"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-04/lab-4-progettare-web.pdf">Progettare per il web</Link> (gruppo II)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-04/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureDivider topic='Settimana 6'/>{/*---------------------------------------*/}

<LectureRow
    date="13/11/2023" time="16:00-17:30"
    video="https://youtu.be/GQ_kPVjCmfQ"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/slide/06-flask.pdf" title="Il framework Flask">Flask</Link>
</LectureRow>

<LectureRow
    date="13/11/2023" time="17:30-19:00"
    video="https://youtu.be/1U-I4pHbxRQ"
    >
    Flask (continua). <Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/06-flask">Esempi</Link> (su GitHub).
</LectureRow>

<LectureRow
    date="16/11/2023" time="16:00-17:30" type="Lab"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-05/lab-5-flask.pdf">Primi passi con Flask</Link> (gruppo I)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-05/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureRow
    date="16/11/2023" time="17:30-19:00" type="Lab"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-05/lab-5-flask.pdf">Primi passi con Flask</Link> (gruppo II)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-05/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureDivider topic='Settimana 7'/>{/*---------------------------------------*/}

<LectureRow
    date="20/11/2023" time="16:00-17:30"
    video="https://youtu.be/AarxYv4SO3M"
    >
    Flask (continua), con esempi
</LectureRow>

<LectureRow
    date="20/11/2023" time="17:30-19:00" type="Esercizio"
    video="https://youtu.be/F81P3h6JZQU"
    >
    <Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/06-flask/esercizio">Flask</Link> (su GitHub)
</LectureRow>

<LectureRow
    date="23/11/2023" time="16:00-17:30" type="Lab"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-06/lab-6-flask-avanzato.pdf">Flask avanzato</Link> (gruppo I)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-06/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureRow
    date="23/11/2023" time="17:30-19:00" type="Lab"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-06/lab-6-flask-avanzato.pdf">Flask avanzato</Link> (gruppo II)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-06/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureDivider topic='Settimana 8'/>{/*---------------------------------------*/}

<LectureRow
    date="27/11/2023" time="16:00-17:30" teacher="Juan Pablo Sáenz Moreno"
    video="https://youtu.be/kRvW_o5O8jk"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/slide/07-forms.pdf" title="Form in HTML">Form in HTML</Link>
</LectureRow>

<LectureRow
    date="27/11/2023" time="17:30-19:00" teacher="Juan Pablo Sáenz Moreno"
    video="https://youtu.be/4kgBtRLF33U"
    >
    Form in Flask. <Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/07-forms">Esempio</Link> (su GitHub).
</LectureRow>

<LectureRow
    date="30/11/2023" time="16:00-17:30" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-07/lab-7-form.pdf">Form in HTML</Link> (gruppo I)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-07/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureRow
    date="30/11/2023" time="17:30-19:00" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-07/lab-7-form.pdf">Form in HTML</Link> (gruppo II)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-07/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureDivider topic='Settimana 9'/>{/*---------------------------------------*/}

<LectureRow
    date="04/12/2023" time="16:00-17:30" type="Esercizio" teacher="Juan Pablo Sáenz Moreno"
    video="https://youtu.be/TaEAZ96esD0"
    >
    Form in Flask. <Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/08-forms-avanzato">Esercizio</Link> (su GitHub)
</LectureRow>

<LectureRow
    date="04/12/2023" time="17:30-19:00" teacher="Juan Pablo Sáenz Moreno"
    video="https://youtu.be/tF8fVcRBnX0"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/slide/08-database.pdf" title="Interazione col database">Interazione col database</Link>
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/08-database/">Esempio</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureRow
    date="07/12/2023" time="16:00-17:30" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-08/lab-8-form-avanzato.pdf">Form in Flask</Link> (gruppo I)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-08/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureRow
    date="07/12/2023" time="17:30-19:00" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-08/lab-8-form-avanzato.pdf">Form in Flask</Link> (gruppo II)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-08/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureDivider topic='Settimana 10'/>{/*---------------------------------------*/}

<LectureRow
    date="11/12/2023" time="16:00-17:30" type="Esercizio" teacher="Juan Pablo Sáenz Moreno"
    video="https://youtu.be/Ua2xqJONFow"
    >
    Ripasso sui database. <Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/08-database/esercizio">Interazione col database</Link> (su GitHub)
</LectureRow>

<LectureRow
    date="11/12/2023" time="17:30-19:00" type="Esercizio" teacher="Juan Pablo Sáenz Moreno"
    video="https://youtu.be/CtPTD8-D2Cc"
    >
    <Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/08-database/esercizio">Interazione col database</Link> (su GitHub, continua)
</LectureRow>

<LectureRow
    date="14/12/2023" time="16:00-17:30" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-09/lab-9-database.pdf">Interazione col database</Link> (gruppo I)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-09/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureRow
    date="14/12/2023" time="17:30-19:00" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-09/lab-9-database.pdf">Interazione col database</Link> (gruppo II)
    <ul><li><Link to="https://github.com/polito-iaw-2023/materiale/tree/main/laboratori/lab-09/soluzione">Soluzione</Link> (su GitHub)</li></ul>
</LectureRow>

<LectureDivider topic='Settimana 11'/>{/*---------------------------------------*/}

<LectureRow
    date="18/12/2023" time="16:00-17:30" teacher="Juan Pablo Sáenz Moreno"
    video="https://youtu.be/av2ZEb1PYO0"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/slide/09-autenticazione.pdf" title="Sessioni e autenticazione">Sessioni e autenticazione</Link>
</LectureRow>

<LectureRow
    date="18/12/2023" time="17:30-19:00" type="Esercizio" teacher="Juan Pablo Sáenz Moreno"
    video="https://youtu.be/fLOhKRHQkPA"
    >
    <Link to="https://github.com/polito-iaw-2023/materiale/tree/main/esercizi/09-autenticazione">Autenticazione</Link> (su GitHub)
</LectureRow>

<LectureRow
    date="21/12/2023" time="16:00-17:30" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-10/lab-10-autenticazione.pdf">Autenticazione</Link> (gruppo I)
</LectureRow>

<LectureRow
    date="21/12/2023" time="17:30-19:00" type="Lab" teacher="Juan Pablo Sáenz Moreno"
    >
    <Link to="https://polito-iaw-2023.github.io/materiale/laboratori/lab-10/lab-10-autenticazione.pdf">Autenticazione</Link> (gruppo II)
</LectureRow>

<LectureDivider />{/*---------------------------------------*/}

<LectureRow variant="warning" type="" teacher="">
    <em>Vacanze di Natale</em>
</LectureRow>

<LectureDivider topic='Settimana 12'/>{/*---------------------------------------*/}

<LectureRow
    date="08/01/2024" time="16:00-17:30"
    >
    Manipolazione del DOM con JavaScript
</LectureRow>

<LectureRow
    date="08/01/2024" time="17:30-19:00" type="Esercizio"
    >
    Manipolazione del DOM con JavaScript (su GitHub)
</LectureRow>

<LectureRow
    date="11/01/2024" time="16:00-17:30" type="Lab"
    >
    Manipolazione del DOM con JavaScript (gruppo I)
</LectureRow>

<LectureRow
    date="11/01/2024" time="17:30-19:00" type="Lab"
    >
    Manipolazione del DOM con JavaScript (gruppo II)
</LectureRow>

<LectureDivider topic='Settimana 13'/>{/*---------------------------------------*/}

<LectureRow
    date="15/01/2024" time="16:00-17:30"
    >
    Ripasso e domande
</LectureRow>

<LectureRow
    date="15/01/2024" time="17:30-19:00" type="Esercizio"
    >
    Simulazione tema d'esame
</LectureRow>

<LectureRow
    date="18/01/2024" time="16:00-17:30" type="Lab"
    >
    Simulazione tema d'esame (gruppo unico)
</LectureRow>

<LectureRow
    date="18/01/2024" time="17:30-19:00" type="Lab"
    >
    Simulazione tema d'esame (gruppo unico)
</LectureRow>

</LectureTable>

## Video lezioni

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/videoseries?si=TMcymcbyjluEndMw&amp;list=PLs7DWGc_wmwT7lSFgUpuNX80Pc7wp5rah" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
