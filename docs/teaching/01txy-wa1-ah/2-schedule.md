---
description: "Course schedule"
---

import {LectureRow, LectureDivider, LectureTable} from '@site/src/components/Lectures'


# Schedule

:::info
- Slides: [GitHub](https://github.com/polito-WA1-AW1-2023/materials)
- Exercises: [GitHub](https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks)
- Video Lectures: [YouTube playlist](https://youtube.com/playlist?list=PLqRTLlwsxDL8WgeiSZVJzjEr1f9aHy2gz)
:::

<LectureTable defaultTeacher="Fulvio Corno" defaultType="Lecture" showMaterial={true} language='EN'>

<LectureDivider topic='Week 01'/>{/*-------------------------------------------*/}

<LectureRow
    date="28/02/2023" time="10:00-11:30"
    pdf='https://polito-wa1-aw1-2023.github.io/materials/slide/00-intro-2023-WA1-AH.pdf' 
    video={['https://youtu.be/envFBChQo_I', 'https://youtu.be/-fwCwGPbZrI']}
    >
    L01a Introduction to the course<br/>
    L01b Introduction to JavaScript (first part)
</LectureRow>

<LectureRow 
    date="28/02/2023" time="11:30-13:00"
    topic='L02 Introduction to JavaScript (second part)'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/slide/1-01-javascript-basics.pdf' 
    video='https://youtu.be/DiRpJz7zYTs' 
    github='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/tree/main/week01' />

<LectureRow
    date="02/03/2023" time="08:30-10:00"
    topic='L03 JavaScript Exercises on Arrays and Strings'
    type='Exercise'
    github='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/blob/main/week01/exercise.md'
    video='https://youtu.be/KB2pBvPmcUA'
/>

<LectureRow
    date="02/03/2023" time="10:00-11:30"
    topic='L04 JavaScript Objects and Functions'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/slide/1-02-javascript-objects-functions.pdf'
    video='https://youtu.be/z91wQzDXxtY'
 />

<LectureRow
    topic='Week 01 exercises'
    teacher='' type=''
    github='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/tree/main/week01' />


<LectureDivider topic='Week 02'/>{/*-------------------------------------------*/}

<LectureRow 
    date="07/03/2023" time="10:00-11:30"
    topic='L05 Constructor Functions. Callbacks. Functional programming.'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/slide/1-03-javascript-async-programming.pdf'
    video='https://youtu.be/POb9VAqnEHs'
/>

<LectureRow 
    date="07/03/2023" time="11:30-13:00"
    topic='L06 Exercises. Asynchronous callbacks.'
    github='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/blob/main/week02/exercise.md'
    video='https://youtu.be/1_mbF0vayOs'
/>

<LectureRow 
    date="09/03/2023" time="08:30-10:00"
    type='Lab'
    topic='Lab 01 - Group 1 (AA-DE)'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/labs/lab01-getting-started-node.pdf'
    github='https://github.com/polito-WA1-AW1-2023/lab01-node'
    teacher='Juan Pablo Sáenz'
/>

<LectureRow 
    date="09/03/2023" time="10:00-11:30"
    type='Lab'
    topic='Lab 01 - Group 2 (DI-HZ)'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/labs/lab01-getting-started-node.pdf'
    github='https://github.com/polito-WA1-AW1-2023/lab01-node'
    teacher='Juan Pablo Sáenz'
/>

<LectureRow
    topic='Week 02 exercises'
    teacher='' type=''
    github='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/tree/main/week02' />


<LectureDivider topic='Week 03'/>{/*-------------------------------------------*/}

<LectureRow 
    date="14/03/2023" time="10:00-11:30"
    topic='L07 Asynchronous programming. SQLite.'
    github='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/blob/main/week03/exercise.md'
    video='https://youtu.be/_xmvE7L3fIw'
/>

<LectureRow 
    date="14/03/2023" time="11:30-13:00"
    topic='L08 Promises. Exercise with SQLite and Promises.'
    video='https://youtu.be/0-f8uSUBs9s'
/>

<LectureRow 
    date="16/03/2023" time="08:30-10:00"
    type='Lab'
    topic='Lab 02 - Group 1 (AA-DE)'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/labs/lab02-node-database.pdf'
    github='https://github.com/polito-WA1-AW1-2023/lab02-node-database'
    teacher='Juan Pablo Sáenz'
/>

<LectureRow 
    date="16/03/2023" time="10:00-11:30"
    type='Lab'
    topic='Lab 02 - Group 2 (DI-HZ)'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/labs/lab02-node-database.pdf'
    github='https://github.com/polito-WA1-AW1-2023/lab02-node-database'
    teacher='Juan Pablo Sáenz'
/>

<LectureRow
    topic='Week 03 exercises'
    teacher='' type=''
    github='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/tree/main/week03' />


<LectureDivider topic='Week 04'/>{/*-------------------------------------------*/}

<LectureRow 
    date="20/03/2023" time="" teacher=''
    type='Reading 1'
    topic='Introduction to Web Architectures, HTML, and CSS'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/readings/2-0-reading-web-architecture-html-css.pdf'
    variant='success'
/>

<LectureRow
    variant='danger'
    teacher='' type='WARNING'
    topic='The class on 21/03 will be from 08:30 to 11:30 and is moved in Room 3S'
/>

<LectureRow
    date="21/03/2023" time="08:30-09:00"
    topic='L09a Async and Await'
    video='https://youtu.be/Gnlqpj-n3b8'
/>

<LectureRow
    date="21/03/2023" time="09:00-10:00"
    topic='L09b HTML and CSS: Example-driven review of Reading 1'
    pdf={['https://polito-wa1-aw1-2023.github.io/materials/slide/2-01-web-architecture.pdf', 'https://polito-wa1-aw1-2023.github.io/materials/slide/2-02-html.pdf', 'https://polito-wa1-aw1-2023.github.io/materials/slide/2-03-css.pdf']}
    video='https://youtu.be/wKFN8lvWlsw'
/>

<LectureRow
    date="21/03/2023" time="10:00-11:30"
    type='Exercise'
    topic='L10 Modern CSS, Bootstrap.'
    github='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/blob/main/week04/exercise.md'
    video='https://youtu.be/ZoDJ1Kn9jog'
/>

<LectureRow
    date="23/03/2023" time="08:30-10:00"
    type='Lab'
    topic='Lab 03 - Group 1 (AA-DE)'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/labs/lab03-html-css.pdf'
    github='https://github.com/polito-WA1-AW1-2023/lab03-html-css'
    teacher='Juan Pablo Sáenz'
/>

<LectureRow 
    date="23/03/2023" time="10:00-11:30"
    type='Lab'
    topic='Lab 03 - Group 2 (DI-HZ)'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/labs/lab03-html-css.pdf'
    github='https://github.com/polito-WA1-AW1-2023/lab03-html-css'
    teacher='Juan Pablo Sáenz'
/>

<LectureRow
    topic='Week 04 exercises'
    teacher='' type=''
    github='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/tree/main/week04' />


<LectureDivider topic='Week 05'/>{/*-------------------------------------------*/}


<LectureRow 
    date="28/03/2023" time="10:00-11:30"
    topic='L11 JavaScript in the Browser - DOM, Events'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/slide/2-04-JS-browser.pdf'
    video='https://youtu.be/bR5-i6CKMYE'
/>

<LectureRow 
    date="28/03/2023" time="11:30-13:00"
    topic='L12 JavaScript in the Browser - Exercise'
    github='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/blob/main/week05/exercise.md'
    video='https://youtu.be/SvpXehlJ600'
/>

<LectureRow 
    date="30/03/2023" time="08:30-10:00"
    type='Lab'
    topic='Lab 04 - Group 1 (AA-DE)'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/labs/lab04-js-browser.pdf'
    teacher='Juan Pablo Sáenz'
/>

<LectureRow 
    date="30/03/2023" time="10:00-11:30"
    type='Lab'
    topic='Lab 04 - Group 2 (DI-HZ)'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/labs/lab04-js-browser.pdf'
    teacher='Juan Pablo Sáenz'
/>

<LectureRow
    topic='Week 05 exercises'
    teacher='' type=''
    github='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/tree/main/week05' />


<LectureDivider topic='Week 06'/>{/*-------------------------------------------*/}

<LectureRow 
    date="20/03/2023" time="" teacher=''
    type='Reading 2'
    topic="The 'this' keyword in JavaScript"
    variant='success'
/>


<LectureRow 
    date="04/04/2023" time="10:00-11:30"
    topic='L13 Introduction to React'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/slide/3-01-React-intro.pdf'
/>

<LectureRow 
    date="04/04/2023" time="11:30-13:00"
    topic='L14 JSX, Components, props'
    pdf='https://polito-wa1-aw1-2023.github.io/materials/slide/3-02-Elements-and-JSX.pdf'
/>

<LectureRow
    variant='warning'
    teacher='' type='🐰'
    topic='Easter vacations'
/>

<LectureRow
    variant='danger'
    teacher='' type='WARNING'
    topic='On 13/04 we will have 3 hours of lectures, instead of Labs'
/>

<LectureRow 
    date="13/04/2023" time="08:30-10:00"
    topic='L15 Components and State'
/>

<LectureRow 
    date="13/04/2023" time="10:00-11:30"
    topic='L16 Controlled Components and Forms (part 1)'
/>

<LectureRow
    topic='Week 06 exercises'
    teacher='' type=''
    nogithub='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/tree/main/week06' />


<LectureDivider topic='Week 07'/>{/*-------------------------------------------*/}


<LectureRow 
    date="18/04/2023" time="10:00-11:30"
    topic='L17 Controlled Components and Forms (part 2)'
/>

<LectureRow 
    date="18/04/2023" time="11:30-13:00"
    topic='L18 Controlled Components and Forms (part 3)'
/>

<LectureRow 
    date="20/04/2023" time="08:30-10:00"
    type='Lab'
    topic='Lab 05 - Group 1 (AA-DE)'
    teacher='Juan Pablo Sáenz'
/>

<LectureRow 
    date="20/04/2023" time="10:00-11:30"
    type='Lab'
    topic='Lab 05 - Group 2 (DI-HZ)'
    teacher='Juan Pablo Sáenz'
/>

<LectureRow
    topic='Week 07 exercises'
    teacher='' type=''
    nogithub='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/tree/main/week07' />


<LectureDivider topic='Week 08'/>{/*-------------------------------------------*/}

<LectureRow
    date='25/04/2023'
    variant='warning'
    teacher='' type=''
    topic='Holiday -- No lectures'
/>

<LectureRow 
    date="27/04/2023" time="08:30-10:00"
    type='Lab'
    topic='Lab 06 - Group 1 (AA-DE)'
    teacher='Luca Pezzolla'
/>

<LectureRow 
    date="27/04/2023" time="10:00-11:30"
    type='Lab'
    topic='Lab 06 - Group 2 (DI-HZ)'
    teacher='Luca Pezzolla'
/>

<LectureRow
    topic='Week 08 exercises'
    teacher='' type=''
    nogithub='https://github.com/polito-WA1-AW1-2023/wa1-ah-weeks/tree/main/week08' />


</LectureTable>

## Video lectures

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLqRTLlwsxDL8WgeiSZVJzjEr1f9aHy2gz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>