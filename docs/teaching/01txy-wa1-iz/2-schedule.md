---
description: "Course schedule"
---

import {LectureRow, LectureDivider, LectureTable} from '@site/src/components/Lectures'


# Schedule

:::tip Quick Links
* [Code developed](https://github.com/polito-WA1-AW1-2023/wa1-iz-weeks) during the lectures (on GitHub)
* [Videolectures' playlist](https://www.youtube.com/playlist?list=PLs7DWGc_wmwTGEyUzKpqQDaa5TSnhshmp) (on YouTube)
* [Course material](https://github.com/polito-WA1-AW1-2023/materials) (on GitHub)
:::

This section hosts the schedule and learning materials of all the lectures and labs, with topics described for each of them. Please consider the following information as a _tentatitive preview_ of the course organization; it is provided only for helping students organize and plan, and is subject to change without notice.

All slides, examples, exercises, and any other material used in the classroom and in the lab will be also posted in a [GitHub repository](https://github.com/polito-WA1-AW1-2023/materials). Moreover, all lectures will be video-recorded and will be available on the Portale della Didattica, as well as here and in a dedicated [YouTube playlist](https://www.youtube.com/playlist?list=PLs7DWGc_wmwTGEyUzKpqQDaa5TSnhshmp).

<LectureTable defaultTeacher="Luigi De Russis" defaultType="Lecture" showMaterial={false} language='EN'>

<LectureDivider topic='Week 01'/>{/*-------------------------------------------*/}

<LectureRow
    date="28/02/2023" time="08:30-10:00"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/slide/00-intro-2023-WA1-iz.pdf" title="Course introduction">Introduction to the course</a>
</LectureRow>

<LectureRow 
    date="28/02/2023" time="10:00-11:30"
    video={["https://youtu.be/uU6nzRjdRKs","https://youtu.be/U1fd3nM28Ac"]}
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/slide/1-01-javascript-basics.pdf" title="JavaScript Basics">JavaScript: introduction</a>
</LectureRow>

<LectureRow
    date="02/03/2023" time="08:30-10:00" type="Exercise"
    video="https://youtu.be/EvbBeE76p2M"
>
    <a href="https://github.com/polito-WA1-AW1-2023/wa1-iz-weeks/tree/main/week01/exercises" title="Week 1 exercises">Exercises on Javascript</a> (on GitHub)
</LectureRow>

<LectureRow
    date="02/03/2023" time="10:00-11:30"
    video="https://youtu.be/1_JaYMJepfo"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/slide/1-02-javascript-objects-functions.pdf" title="Objects and Functions in JS">JavaScript: objects and functions</a>
</LectureRow>


<LectureDivider topic='Week 02'/>{/*-------------------------------------------*/}

<LectureRow
    date="07/03/2023" time="08:30-10:00"
    video="https://youtu.be/wcM4vwOUEAQ"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/slide/1-03-javascript-async-programming.pdf" title="Async programming in JS">JavaScript: async programming</a>
</LectureRow>

<LectureRow 
    date="07/03/2023" time="10:00-11:30" type="Exercise"
    video="https://youtu.be/4TqQXHpwRYc"
>
    <a href="https://github.com/polito-WA1-AW1-2023/wa1-iz-weeks/tree/main/week02" title="Week 2 examples">Exercise with functional methods</a>
</LectureRow>

<LectureRow
    date="09/03/2023" time="08:30-10:00" type="Lab" teacher="Luca Mannella"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab01-getting-started-node.pdf"> Getting started with Node</a> (group 1, IA-OU)
</LectureRow>

<LectureRow
    date="09/03/2023" time="10:00-11:30" type="Lab" teacher="Luca Mannella"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab01-getting-started-node.pdf"> Getting started with Node</a> (group 2, PA-ZZ)
</LectureRow>

<LectureRow
    type="Lab Solution" teacher=""
>
    <a href="https://github.com/polito-WA1-AW1-2023/lab01-node">Possible solution</a> (on GitHub)
</LectureRow>


<LectureDivider topic='Week 03'/>{/*-------------------------------------------*/}

<LectureRow
    date="14/03/2023" time="08:30-10:00" teacher="Luca Mannella"
    video="https://youtu.be/I7ouKm2morM"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/slide/1-03-javascript-async-programming.pdf" title="Async programming in JS">JavaScript: async programming (cont'd)</a>
</LectureRow>

<LectureRow
    date="14/03/2023" time="10:00-11:30" type="Exercise" teacher="Luca Mannella"
    video="https://youtu.be/rudqonIo9ew"
>
    <a href="https://github.com/polito-WA1-AW1-2023/wa1-iz-weeks/tree/main/week03">Exercise on async programming</a>
</LectureRow>

<LectureRow
    date="16/03/2023" time="08:30-10:00" type="Lab" teacher="Luca Mannella"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab02-node-database.pdf">Async programming in Node</a> (group 1, IA-OU)
</LectureRow>

<LectureRow
    date="16/03/2023" time="10:00-11:30" type="Lab" teacher="Luca Mannella"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab02-node-database.pdf">Async programming in Node</a> (group 2, PA-ZZ)
</LectureRow>

<LectureRow
    type="Lab Solution" teacher=""
>
    <a href="https://github.com/polito-WA1-AW1-2023/lab02-node-database">Possible solution</a> (on GitHub)
</LectureRow>


<LectureDivider topic='Week 04'/>{/*-------------------------------------------*/}

<LectureRow
    type="Reading" date="20/03/2023" teacher=""
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/readings/2-0-reading-web-architecture-html-css.pdf" title="Reading on Web Architectures, HTML, and CSS">Introduction to Web Architectures, HTML, and CSS</a>
</LectureRow>

<LectureRow
    date="21/03/2023" time="08:30-10:00" type="Exercise"
    video="https://youtu.be/cCP3K-7s3_s"
>
    Review of Reading 1 <a href="https://github.com/polito-WA1-AW1-2023/wa1-iz-weeks/tree/main/week04">through examples</a>
    <ul>
        <li><a href="https://polito-wa1-aw1-2023.github.io/materials/slide/2-01-web-architecture.pdf" title="Overview on Web Architectures">Web Architecture</a></li>
        <li><a href="https://polito-wa1-aw1-2023.github.io/materials/slide/2-02-html.pdf" title="HTML">Introduction to HTML</a></li>
        <li><a href="https://polito-wa1-aw1-2023.github.io/materials/slide/2-03-css.pdf" title="CSS">Introduction to CSS</a></li>
    </ul>
</LectureRow>

<LectureRow
    date="21/03/2023" time="10:00-11:30"
    video="https://youtu.be/puBYXkAAel8"
>
    Modern CSS and Bootstrap (cont'd)
</LectureRow>

<LectureRow
    date="23/03/2023" time="08:30-10:00" type="Lab" teacher="Luca Mannella"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab03-html-css.pdf">Getting started with HMTL and CSS</a> (group 1, IA-OU)
</LectureRow>

<LectureRow
    date="23/03/2023" time="10:00-11:30" type="Lab" teacher="Luca Mannella"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab03-html-css.pdf">Getting started with HMTL and CSS</a> (group 2, PA-ZZ)
</LectureRow>

<LectureRow
    type="Lab Solution" teacher=""
>
    <a href="https://github.com/polito-WA1-AW1-2023/lab03-html-css">Possible solution</a> (on GitHub)
</LectureRow>


<LectureDivider topic='Week 05'/>{/*-------------------------------------------*/}

<LectureRow
    date="28/03/2023" time="08:30-10:00" teacher="Luca Mannella"
    video="https://youtu.be/Kq1O3bmzn8o"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/slide/2-04-JS-browser.pdf">JavaScript in the browser</a>
</LectureRow>

<LectureRow
    date="28/03/2023" time="10:00-11:30" type="Exercise" teacher="Luca Mannella"
    video="https://youtu.be/T9iTxLVUBUA"
>
    <a href="https://github.com/polito-WA1-AW1-2023/wa1-iz-weeks/blob/main/week05" title="Exercise 6">Exercise on JavaScript in the browser</a>
</LectureRow>

<LectureRow
    date="30/03/2023" time="08:30-10:00" type="Lab" teacher="Luca Mannella"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab04-js-browser.pdf">JavaScript in the browser</a> (group 1, IA-OU)
</LectureRow>

<LectureRow
    date="30/03/2023" time="10:00-11:30" type="Lab" teacher="Luca Mannella"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab04-js-browser.pdf">JavaScript in the browser</a> (group 2, PA-ZZ)
</LectureRow>

<LectureRow
    type="Lab Solution" teacher=""
>
    <a href="https://github.com/polito-WA1-AW1-2023/lab04-javascript-browser">Possible solution</a> (on GitHub)
</LectureRow>


<LectureDivider topic='Week 06'/>{/*-------------------------------------------*/}

<LectureRow
    date="04/04/2023" time="08:30-10:00"
    video="https://youtu.be/zVG1DnWePMc"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/slide/3-01-React-intro.pdf" title="React">Introduction to React</a>. <a href="https://github.com/polito-WA1-AW1-2023/wa1-iz-weeks/tree/main/week06">Exercise</a> (on GitHub).
</LectureRow>

<LectureRow 
    date="04/04/2023" time="10:00-11:30"
    video="https://youtu.be/ZL3mcs9wCRE"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/slide/3-02-Elements-and-JSX.pdf">React: elements and JSX</a>
</LectureRow>

<LectureRow 
    variant="info" type="🐰" teacher=""
>
    Easter vacation
</LectureRow>

<LectureRow
    date="13/04/2023" time="08:30-10:00"
    video="https://youtu.be/_4OmU7RSoWs"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/slide/3-03-Components-and-state.pdf" title="React's state">React: components and state</a>. <a href="https://github.com/polito-WA1-AW1-2023/wa1-iz-weeks/tree/main/week07">Exercise</a> (on GitHub).
</LectureRow>

<LectureRow
    date="13/04/2023" time="10:00-11:30"
    video="https://youtu.be/gHj46aGVgBY"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/slide/3-04-Forms.pdf" title="React's forms">Forms in React</a>. Exercise (cont'd, on GitHub).
</LectureRow>


<LectureDivider topic='Week 07'/>{/*-------------------------------------------*/}

<LectureRow
    date="18/04/2023" time="08:30-10:00" type="Exercise"
>
    Exercise on Forms and State
</LectureRow>

<LectureRow 
    date="18/04/2023" time="10:00-11:30" type="Exercise"
>
    Exercise on Forms and State (cont'd)
</LectureRow>

<LectureRow
    date="20/04/2023" time="08:30-10:00" type="Lab" teacher="Luca Mannella"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab05-getting-started-react.pdf">Getting started with React</a> (group 1, IA-OU)
</LectureRow>

<LectureRow
    date="20/04/2023" time="10:00-11:30" type="Lab" teacher="Luca Mannella"
>
    <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab05-getting-started-react.pdf">Getting started with React</a> (group 2, PA-ZZ)
</LectureRow>

<!-- <LectureRow type="Lab Solution" teacher=""> <a href="https://github.com/polito-WA1-AW1-2023/lab05-react">Possible solution</a> (on GitHub)</LectureRow> -->


<LectureDivider topic='Week 08'/>{/*-------------------------------------------*/}

<LectureRow
    type="Reading" date="24/04/2023" teacher=""
>
    The 'this' keyword in JavaScript
</LectureRow>
    
<LectureRow
    date="25/04/2023" type="-" teacher=""
>
    No class (<em>holiday</em>)
</LectureRow>

<LectureRow
    date="27/04/2023" time="08:30-10:00" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab06-forms.pdf">Forms in React</a> (group 1, IA-OU) */}
    Forms in React (group 1, IA-OU)
</LectureRow>

<LectureRow
    date="27/04/2023" time="10:00-11:30" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab06-forms.pdf">Forms in React</a> (group 2, PA-ZZ) */}
    Forms in React (group 2, PA-ZZ)
</LectureRow>

<!-- <LectureRow type="Lab Solution" teacher=""> <a href="https://github.com/polito-WA1-AW1-2023/lab06-forms">Possible solution</a> (on GitHub)</LectureRow> -->


<LectureDivider topic='Week 09'/>{/*-------------------------------------------*/}

<LectureRow
    type="Reading" date="01/05/2023" teacher=""
>
    Modules in JavaScript
</LectureRow>

<LectureRow
    date="02/05/2023" time="08:30-10:00"
>
    React Context. React Router.
</LectureRow>

<LectureRow
    date="02/05/2023" time="10:00-11:30" type="Exercise"
>
    Exercise on React Router
</LectureRow>

<LectureRow
    date="04/05/2023" time="08:30-10:00" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab07-routes.pdf">React Routes</a> (group 1, IA-OU) */}
    React Routes (group 1, IA-OU)
</LectureRow>

<LectureRow
    date="04/05/2023" time="10:00-11:30" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab07-routes.pdf">React Routes</a> (group 2, PA-ZZ) */}
    React Routes (group 2, PA-ZZ)
</LectureRow>

<!-- <LectureRow type="Lab Solution" teacher=""> <a href="https://github.com/polito-WA1-AW1-2023/lab07-routes">Possible solution</a> (on GitHub)</LectureRow> -->


<LectureDivider topic='Week 10'/>{/*-------------------------------------------*/}

<LectureRow
    date="09/05/2023" time="08:30-10:00"
>
    Express. HTTP APIs.
</LectureRow>

<LectureRow
    date="09/05/2023" time="10:00-11:30" type="Exercise"
>
    Exercise on Express
</LectureRow>

<LectureRow
    date="11/05/2023" time="08:30-10:00" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab08-express.pdf">APIs with Express</a> (group 1, IA-OU) */}
    APIs with Express (group 1, IA-OU)
</LectureRow>

<LectureRow
    date="11/05/2023" time="10:00-11:30" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab08-express.pdf">APIs with Express</a> (group 2, PA-ZZ) */}
    APIs with Express (group 2, PA-ZZ)
</LectureRow>

<!-- <LectureRow type="Lab Solution" teacher=""> <a href="https://github.com/polito-WA1-AW1-2023/lab08-express">Possible solution</a> (on GitHub)</LectureRow> -->


<LectureDivider topic='Week 11'/>{/*-------------------------------------------*/}

<LectureRow
    type="Reading" date="15/05/2023" teacher=""
>
    Client-server interaction in React
</LectureRow>

<LectureRow
    date="16/05/2023" time="08:30-10:00"
>
    Fetch. Review of the reading.
</LectureRow>

<LectureRow
    date="16/05/2023" time="10:00-11:30"
>
    useEffect and LifeCycle
</LectureRow>

<LectureRow
    date="18/05/2023" time="08:30-10:00" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab09-client-server-I.pdf">Client-server interaction</a> (group 1, IA-OU) */}
    Client-server interaction (group 1, IA-OU)
</LectureRow>

<LectureRow
    date="18/05/2023" time="10:00-11:30" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab09-client-server-I.pdf">Client-server interaction</a> (group 2, PA-ZZ) */}
    Client-server interaction (group 2, PA-ZZ)
</LectureRow>

<!-- <LectureRow type="Lab Solution" teacher=""> <a href="https://github.com/polito-WA1-AW1-2023/lab09-client-server-I">Possible solution</a> (on GitHub)</LectureRow> -->


<LectureDivider topic='Week 12'/>{/*-------------------------------------------*/}

<LectureRow
    date="23/05/2023" time="08:30-10:00"
>
    About the exam. LifeCycle: advanced aspects.
</LectureRow>

<LectureRow
    date="23/05/2023" time="10:00-11:30" type="Exercise"
>
    Exercise on useEffect and fetch
</LectureRow>

<LectureRow
    date="25/05/2023" time="08:30-10:00" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab10-client-server-II.pdf">Client-server interaction</a> (group 1, IA-OU) */}
    Client-server interaction (group 1, IA-OU)
</LectureRow>

<LectureRow
    date="25/05/2023" time="10:00-11:30" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab10-client-server-II.pdf">Client-server interaction</a> (group 2, PA-ZZ) */}
    Client-server interaction (group 2, PA-ZZ)
</LectureRow>

<!-- <LectureRow type="Lab Solution" teacher=""> <a href="https://github.com/polito-WA1-AW1-2023/lab10-client-server-II">Possible solution</a> (on GitHub)</LectureRow> -->


<LectureDivider topic='Week 13'/>{/*-------------------------------------------*/}

<LectureRow
    date="30/05/2023" time="08:30-10:00"
>
    Authentication with Passport.js
</LectureRow>

<LectureRow
    date="30/05/2023" time="10:00-11:30" type="Exercise"
>
    Exercise on authentication
</LectureRow>

<LectureRow
    date="01/06/2023" time="08:30-10:00" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab11-authentication.pdf">Authentication</a> (group 1, IA-OU) */}
    Authentication (group 1, IA-OU)
</LectureRow>

<LectureRow
    date="01/06/2023" time="10:00-11:30" type="Lab" teacher="Luca Mannella"
>
    {/* <a href="https://polito-wa1-aw1-2023.github.io/materials/labs/lab11-authentication.pdf">Authentication</a> (group 2, PA-ZZ) */}
    Authentication (group 2, PA-ZZ)
</LectureRow>

<!-- <LectureRow type="Lab Solution" teacher=""> <a href="https://github.com/polito-WA1-AW1-2023/lab11-authentication">Possible solution</a> (on GitHub)</LectureRow> -->


<LectureDivider topic='Week 14'/>{/*-------------------------------------------*/}

<LectureRow
    date="06/06/2023" type="-" teacher=""
>
    No class
</LectureRow>

<LectureRow
    date="08/06/2023" time="08:30-10:00" type="Lab" teacher="Luigi De Russis"
>
    Exam simulation (both groups)
</LectureRow>

<LectureRow
    date="08/06/2023" time="10:00-11:30" type="Lab" teacher="Luigi De Russis"
>
    Exam simulation (both groups)
</LectureRow>

</LectureTable>

## Video lectures

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLs7DWGc_wmwTGEyUzKpqQDaa5TSnhshmp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
