---
authors: [saenz]
tags: [conference, paper, poster, creative coding]
description: On April 26, 2023, Mauricio Verano and Juan Pablo Sáenz presented the Late-Breaking Work "The Art of Creating Code-Based Artworks" at ACM CHI 2023, the premier international conference of Human-Computer Interaction. 
image: ./slide-0.png
image_alt: First slide of the video presentation
---
import chicau from './chicau.jpg';
import tim from './tim.jpg';

# Presentation of "The Art of Creating Code-Based Artworks" at ACM CHI 2023

On April 26, [Mauricio Verano](https://maveme.github.io/) and I presented our work "**The Art of Creating Code-Based Artworks**" in the Late-Breaking Work session at ACM CHI ([Conference on Human Factors in Computing Systems](https://chi2023.acm.org/)) 2023, the premier international conference of Human-Computer Interaction.

Our work stems from the fact that software has become an artistic medium, and programming with artistic purposes has been portrayed under the umbrella term _Creative Coding_: a discovery-based process consisting of exploration, iteration, and reflection, where code is used as the primary medium to create a wide range of media artifacts designed for an artistic context. Concerning traditional programming, Creative Coding has a different development process and poses distinctive challenges, technically and conceptually.

<!-- truncate -->

In this context, we aimed to identify fundamental characteristics and commonalities in the development process of code artists. To that end, the paper reports a user study consisting of an in-depth interview with 5 code artists with diverse backgrounds (e.g., Music Composition, Choreography, Performace, Graphic Design, Typography, Physics, and Applied Optical Sciences), years of experience, and fields of interest (e.g., Live Coding, Sound Sculpture, Generative Typography, Abstract Data Visualizations, Installations, and Creative Coding Teaching), working on different code-based artistic expressions.

Among the most exciting findings, the interviewed artists provided consensus around the absence of a predefined arrival point. They all characterized their development process as a trial-error process with many iterations in which real-time feedback is highly appreciated. The final artwork is reached by continuously modifying the code. As one of the participants stated: "(...) just trying things out, and it removes the pressure of you arriving at any potential conclusion.".

<p class="text--center"><img src={chicau} alt="Joana Chicau, one of the interviewed artists, Live Performance" width="60%"></img></p>

Surprisingly, most participants considered that looking for inspiration in other code-based artworks might interfere with the originality of their work ("I think if you want to develop a very individual style, you should not orient yourself too much on others' code or tutorials."). Besides, understanding someone else's code might be painful and time-consuming. So, instead, participants integrate concepts from diverse disciplines into their coding practices rather than constantly exploring other code-based artworks.

Regarding the Creative Coding development tools, artists appreciated that [p5.js](https://p5js.org/) and [Processing](https://processing.org/) are well-documented rather than sophisticated functionalities. Furthermore, contrary to our expectations, participants were not particularly tied to a specific development environment. Actually, we found an unconventional use of development tools. For instance, one of the interviewed artists used the browser inspector to create visuals in a live performance by changing the values of the HTML elements on a website.

<p class="text--center"><img src={tim} alt="Tim Rodenbröker, one of the interviewed artists, Generative Typography artwork" width="30%"></img></p>

However, we also identified that existing Version Control Systems do not suit the artist's needs and present a steep learning curve. Therefore, we consider that there is a need for tools to support version management in a more automated way without requiring a complex setup process and providing visual feedback on the artworks' partial versions.

Finally, stemming from the findings of our work, in our future research, we will dive into the Creative Coding commonalities with other domains, particularly Data Science, whose tasks are highly iterative and exploratory. Specifically, since the literate programming approach (that interleaves prose with executable code and interactive and static output) has been widely adopted in Data Science and Computer Science education, we wonder if this approach might suit the exploratory nature of Creative Coding. On the other hand, since managing versions of code-based artworks and searching and navigating previous versions are still not supported by existing tools, we will focus on proposing tools to help version management in a more automated way without requiring a complex setup process.

If you're interested in learning more, our additional material is just a click away! 

Read the paper by following the links at the end of this news, and watch the [3-mins video presentation](https://youtu.be/lbbecQ3e0lI) on YouTube!

<p class="text--center"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lbbecQ3e0lI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></p>

---

* [Paper on PORTO@IRIS](https://hdl.handle.net/11583/2976495)
* [Paper on the ACM DL](https://doi.org/10.1145/3544549.3585743)
* [Poster presented at CHI](./chi-23-cc-poster.pdf)
* [Video presentation slides](./video-slides.pdf)