---
description: "Calendario delle lezioni e materiale utilizzato in ciascuna lezione"
---

import {LectureRow, LectureDivider, LectureTable} from '@site/src/components/Lectures'

# Calendario delle lezioni

<LectureTable defaultTeacher="Fulvio Corno" defaultType="Lezione">

<LectureRow
    topic='Istruzioni di installazione del software (Windows)'
    pdf='https://tdp-2023.github.io/materiale/info/Istruzioni%20di%20installazione%20software%20(Win).pdf'
    type='Info'
    teacher=''
/>

<LectureRow
    topic='Istruzioni di installazione del software (Mac OS X)'
    pdf='https://tdp-2023.github.io/materiale/info/Istruzioni%20di%20installazione%20software_MAC.pdf'
    type='Info'
    teacher=''
/>

<LectureDivider topic="Settimana 01"/>

<LectureRow
    date="27/02/2023" time="08:30-10:00"
    pdf="https://tdp-2023.github.io/materiale/slide/01-01-introduzione_2023.pdf"
    video={["https://youtu.be/s5KHDBx4cvc", "https://youtu.be/EFh496p2898"]}
>
L01a Introduzione al corso<br/>
L01b Introduzione a JavaFX (prima parte)
</LectureRow>

<LectureRow
    date="27/02/2023" time="10:00-11:30"
    topic="L02 Introduzione a JavaFX (seconda parte)"
    pdf='https://tdp-2023.github.io/materiale/slide/02-01-javafx-crashcourse.pdf'
    video='https://youtu.be/B1UqFRcdtKQ'
    github='https://github.com/TdP-2023/Primo'
/>

<LectureRow
    date="28/02/2023" time="13:00-16:00"
    type="Lab"
    teacher='Giuseppe Averta'
    topic="Lab 0: JavaFX (Squadra 1)"
    github='https://github.com/TdP-2023/Lab0'
/>

<LectureRow
    date="01/03/2023" time="13:00-14:30"
    topic="L03 Esercizio Programmazione JavFX"
    teacher='Carlo Masone'
/>

<LectureRow
    date="01/03/2023" time="16:00-19:00"
    type="Lab"
    teacher='Carlo Masone'
    topic="Lab 0: JavaFX (Squadra 2)"
    github='https://github.com/TdP-2023/Lab0'
/>


</LectureTable>


