---
authors: [monge]
tags: [conference, paper, digital wellbeing]
description: On April 26, 2023, Alberto presented the paper "Defining and Identifying Attention Capture Damaging Patterns in Digital Interfaces" at ACM CHI 2023, the premier international conference of Human-Computer Interaction. 
image: ./background.png
image_alt: Intro slide of the paper presentation
---
import fakesocial from './fakesocialnotification.png';
import autoplay from './autoplay.png';
import playing from './playingbyappoitnment.png';

# Presentation of "Defining and Identifying Attention Capture Damaging Patterns in Digital Interfaces" at ACM CHI 2023

On April 26, 2023, Alberto presented the paper "_Defining and Identifying Attention Capture Damaging Patterns in Digital Interfaces_" in the "Digital Wellbeing" session at ACM CHI 2023, the premier international conference of Human-Computer Interaction. The paper is a collaboration between the e-Lite group and the [Human-Computer Interaction Lab](https://kailukoff.com) at Santa Clara University, CA (USA). 

Our work is motivated by the growing public discussion and research attention on the negative aspects of overusing technology. We all know that digital services like social media and video games often capture us, even against our will. In the paper, we investigated how these digital services can capture our attention so much and, in particular, if this attention-capture can be created by design.

<!-- truncate -->

Specifically, we conducted a systematic literature review to shed light on the definition, impacts, and strategies of what we called **Attention-Capture Damaging Patterns (ACDPs)**. Our work resulted in a typology of eleven patterns leading to attentional harm. We also created a website with the typology – [attentioncapture.com](http://attentioncapture.com/) - to increase the reach of our work among the public and design professionals.

Overall, designers use ACDPs in digital interfaces to capture the user's attention and maximize metrics like time spent and interactions. To this end, they exploit users' psychological vulnerabilities and cognitive biases. Unfortunately, using these patterns can result in the user becoming distracted from their intended goals, losing the sense of time and control, and experiencing regret. 

Our work divides ACDPs into two main categories: deceptive and seductive patterns. _Deceptive designs_ – as the name suggests – introduce some forms of deception in the user interface to deceive users into performing some actions rather than others. An example is a pattern called **Fake Social Notifications,** common across different kinds of digital services, including video games, social media, and messaging applications. In its basic form, it's a pattern through which a digital platform sends messages pretending to be a real user. In the figure, you can see an example from LinkedIn: the platform asks the user to try a premium plan by sending an automatic message – and this violates the expectation that messages in a chat should actually be from a real person.

<p class="text--center"><img src={fakesocial} alt="Fake Social Notification on LinkedIn" width="30%"></img></p>

The other category of ACDPs is what we call _seductive designs_. These patterns are not necessarily deceptive but tempt users with short-term satisfaction to engage them more frequently and for a long time. The figure, for example, shows the **Neverending Autoplay** pattern on YouTube: when the current video ends, the platform automatically plays a new recommended video by default.

<p class="text--center"><img src={autoplay} alt="Neverending Autoplay on YouTube" width="80%"></img></p>

Another seductive design is **Playing By Appointment** – a pattern through which the user is forced to use a digital service at specific times that are defined by the service rather than the user. The pattern originated from the gaming community but can also be generalized to social media use. It is often engineered to encourage users to re-visit a digital service to avoid losing something, like a badge or the possibility of unlocking some achievements. The example reported in the figure is about Snapchats' social streaks, which count how many consecutive days two people have been sending Snaps to each other. Here, even a single day without sending a Snap breaks the streak. 

<p class="text--center"><img src={playing} alt="Playing by Appointment on Snapchat" width="30%"></img></p>

Besides identifying different kinds of patterns, our review shows that ACDPs – especially seductive designs – automate the user experience, reducing the need for autonomous decision-making. This is sometimes useful and may also improve usability. However, such a strategy may also be a deliberate design decision to induce experiences of normative dissociation – all those situations during which we unconsciously consume content. Furthermore, ACDPs nearly always adopt a variable reward technique. Specifically, they create the illusion that there is always new exciting content to be consumed, but this is not always true. For example, platforms like TikTok or YouTube Shorts continuously suggest new videos to watch. Still, the quality of the next recommendation cannot be predicted by us, at least precisely: we are, therefore, trapped in a loop, hoping that the next video will be more exciting than the previous ones.

Overall, we see our typology as a promising starting point to establish new procedures for evaluating existing interfaces and support designers in adopting patterns that preserve and respect the users' attention. Furthermore, we hope that our work will give rise to new regulations and policies, something that is already happening for dark patterns that lead to financial and privacy harm. Read the paper by following the links at the end of this news, and watch the [10-mins video presentation](https://youtu.be/Bw9m8j3_jJ0) on YouTube!

<p class="text--center"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Bw9m8j3_jJ0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></p>

---

Additional information:

* [Paper on PORTO@IRIS](https://hdl.handle.net/11583/2974641)
* [Paper on the ACM DL](https://doi.org/10.1145/3544548.3580729)
* [Presentation slides](./acdps.pdf)


