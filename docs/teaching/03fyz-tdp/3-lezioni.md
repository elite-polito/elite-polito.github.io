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
    topic="L03 Esercizio Programmazione JavFX (Indovina Numero)"
    teacher='Carlo Masone'
    video='https://youtu.be/JJb5wVWBhJg'
    github='https://github.com/TdP-2023/IndovinaNumero'
/>

<LectureRow
    date="01/03/2023" time="16:00-19:00"
    type="Lab"
    teacher='Carlo Masone'
    topic="Lab 0: JavaFX (Squadra 2)"
    github='https://github.com/TdP-2023/Lab0'
/>

<LectureDivider topic="Settimana 02"/>

<LectureRow
    date="06/03/2023" time="08:30-10:00"
    topic='L04 Introduzione a Git e GitHub' 
    pdf='https://tdp-2023.github.io/materiale/slide/01-02-Git-quickintro.pdf'
    video='https://youtu.be/QkvwO-iC4OM'
/>

<LectureRow
    date="06/03/2023" time="10:00-11:30"
    topic="L05 Oggetti e Collection (esercizio 'Libretto Voti')"
    github='https://github.com/TdP-2023/LibrettoVoti'
    video='https://youtu.be/hYl6jJeWR30'
/>

<LectureRow
    date="07/03/2023" time="13:00-16:00"
    type="Lab"
    teacher='Carlo Masone'
    topic="Lab 1: JavaFX (Squadra 2)"
    github='https://github.com/TdP-2023/Lab01'
/>

<LectureRow
    date="08/03/2023" time="13:00-14:30"
    topic="L06 Hash, Map, Set"
    teacher='Giuseppe Averta'
    pdf={["https://tdp-2023.github.io/materiale/slide/03-03-Sets%26Hash.pdf", "https://tdp-2023.github.io/materiale/slide/03-04-Map.pdf"]}
    video='https://youtu.be/3vDgzwtQMwE' 
/>

<LectureRow
    date="08/03/2023" time="16:00-19:00"
    type="Lab"
    teacher='Giuseppe Averta'
    topic="Lab 1: JavaFX (Squadra 1)"
    github='https://github.com/TdP-2023/Lab01'
/>

<LectureDivider topic="Settimana 03"/>

<LectureRow
    date="13/03/2023" time="08:30-10:00"
    topic='L07 Pattern MVC. (Esercizio Indovina Numero)'
    teacher='Carlo Masone'
    pdf='https://tdp-2023.github.io/materiale/slide/02-02-javafx-mvc-pattern.pdf'
    github='https://github.com/TdP-2023/IndovinaNumero'
    video='https://youtu.be/FY5zcpr9UWo'
/>

<LectureRow
    date="13/03/2023" time="10:00-11:30"
    topic="L08 Oggetti e Collection (esercizio 'Libretto Voti') - segue"
    github='https://github.com/TdP-2023/LibrettoVoti'
    video='https://youtu.be/RiU9H6Bj0K0'
/>

<LectureRow
    date="14/03/2023" time="13:00-16:00"
    type="Lab"
    teacher='Giuseppe Averta'
    topic="Lab 2 - Squadra 1"
    github='https://github.com/TdP-2023/Lab02.git'
/>

<LectureRow
    date="15/03/2023" time="13:00-14:30"
    topic="L09 Conclusione esercizio Libretto Voti e applicazione Pattern MVC"
    teacher='Fulvio Corno'
    video='https://youtu.be/y_demw4dQEE'
    github='https://github.com/TdP-2023/LibrettoVoti'
/>

<LectureRow
    date="15/03/2023" time="16:00-19:00"
    type="Lab"
    teacher='Giuseppe Averta'
    topic="Lab 2 - Squadra 2"
    github='https://github.com/TdP-2023/Lab02.git'
/>

<LectureDivider topic="Settimana 04"/>

<LectureRow
    date="20/03/2023" time="08:30-10:00"
    topic='L10 Accesso a Database e Libreria JDBC'
    pdf='https://tdp-2023.github.io/materiale/slide/04-01-jdbc-dao.pdf'
    video='https://youtu.be/0rE932vQwGE'
    teacher='Fulvio Corno'
/>

<LectureRow
    date="20/03/2023" time="10:00-11:30"
    topic="L11 Pattern 'DAO'. Esercizio."
    video='https://youtu.be/WB4YKTCfVjY'
    github='https://github.com/TdP-2023/LibrettoVoti/tree/database'
    teacher='Fulvio Corno'
/>

<LectureRow
    date="21/03/2023" time="13:00-16:00"
    type="Lab"
    teacher='Giuseppe Averta'
    topic="Lab 3 - Squadra 2"
    github='https://github.com/TdP-2023/Lab03.git'
/>

<LectureRow
    date="22/03/2023" time="13:00-14:30"
    topic="L12 Esercizio 'Gestione Corsi'"
    teacher='Giuseppe Averta'
    video='https://youtu.be/nwnYTiQHqIw'
    github='https://github.com/TdP-2023/GestoreCorsi.git'
/>

<LectureRow
    date="22/03/2023" time="16:00-19:00"
    type="Lab"
    teacher='Carlo Masone'
    topic="Lab 3 - Squadra 1"
    github='https://github.com/TdP-2023/Lab03.git'
/>

<LectureDivider topic="Settimana 05"/>

<LectureRow
    date="27/03/2023" time="08:30-10:00"
    topic="L13 Esercizio 'Gestione Corsi'"
    teacher='Carlo Masone'
    github='https://github.com/TdP-2023/GestoreCorsi.git'
/>

<LectureRow
    date="27/03/2023" time="10:00-11:30"
    topic="L14 Introduzione alla ricorsione"
    teacher='Fulvio Corno'
    pdf='https://tdp-2023.github.io/materiale/slide/05-01-recursion.pdf'
/>

<LectureRow
    date="28/03/2023" time="13:00-16:00"
    type="Lab"
    teacher='Giuseppe Averta'
    topic="Lab 4 - Squadra 1"
    github="https://github.com/TdP-2023/Lab04.git"
/>

<LectureRow
    date="29/03/2023" time="13:00-14:30"
    topic="L15 Esempi sulla ricorsione"
    teacher='Fulvio Corno'
/>

<LectureRow
    date="29/03/2023" time="16:00-19:00"
    type="Lab"
    teacher='Carlo Masone'
    topic="Lab 4 - Squadra 2"
    github="https://github.com/TdP-2023/Lab04.git"
/>

<LectureDivider topic="Settimana 06"/>

<LectureRow
    date="03/04/2023" time="08:30-10:00"
    topic="L16 Esempi sulla ricorsione"
    teacher='Giuseppe Averta'
/>

<LectureRow
    date="03/04/2023" time="10:00-11:30"
    topic="L17 Esempi sulla ricorsione"
    teacher='Fulvio Corno'
/>

<LectureRow
    date="04/04/2023" time="13:00-16:00"
    type="Lab"
    teacher='Carlo Masone'
    topic="Lab 5 - Squadra 2"
/>

<LectureRow
    date="05/04/2023" time="13:00-14:30"
    topic="L18 Gestione delle date in Java e SQL"
    teacher='Fulvio Corno'
/>

<LectureRow
    date="05/04/2023" time="16:00-19:00"
    type="Lab"
    teacher='Carlo Masone'
    topic="Lab 5 - Squadra 1"
/>

<LectureRow variant='info'
    teacher=''
    type=''
    topic='Sospensione didattica (Vacanze di Pasqua)'
 />


</LectureTable>


