---
authors: [corno, mannella]
tags: [conference, paper]
description: From the 5th to the 8th of July, the e-Lite research group participated in the 7th International Conference on Smart and Sustainable Technologies (SpliTech 2022). The conference was held in Croatia, in Split, and in Bol (Brač island). During this event, Luca Mannella presented a paper entitled "A Threat Model for Extensible Smart Home Gateways".
image: ./SpliTech2022-banner.png
image_alt: Banner of the SpliTech 2022 conference
---
import SpliTech2022banner from './SpliTech2022-banner.png';


# Participation at SpliTech 2022

Last week, from the 5th to the 8th of July, the e-Lite research group participated (in person) in the 7th International Conference on Smart and Sustainable Technologies (**SpliTech 2022**).
The conference was held in Croatia, in Split, and in Bol (Brač island). According to the current COVID-19 pandemic, the conference was held in a hybrid form.

During this event, Luca Mannella presented a paper entitled: "[*A Threat Model for Extensible Smart Home Gateways*](https://www.researchgate.net/publication/360627814_A_Threat_Model_for_Extensible_Smart_Home_Gateways)".

<p className="text--center"><img src={SpliTech2022banner} alt="SpliTech 2022 banner"></img></p>

<!-- truncate -->

This paper proposes a threat model for a specific class of components of IoT infrastructures: smart home gateways extensible through plug-ins. The purpose of the proposed model is twofold.

From one side, it helps to understand some possible issues that could be generated from a malicious or defective plug-in implementation and affect the gateway itself or other smart home devices. Consequently, the model could help programmers of gateway applications, plug-ins, and devices think about possible countermeasures and develop more resilient solutions.

On the other side, the model could be regarded as a set of guidelines. Indeed, plug-in developers should not create plug-ins acting like the threats reported in the paper.

To provide a first validation of the model, the paper presents a use case based on Home Assistant, an open-source smart home gateway application.

The slides of the presentation are [available on SlideShare](https://www.slideshare.net/LucaMannella/a-threat-model-for-extensible-smart-home-gateways).

You can also find the video recorder presentation on YouTube:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Hczqbm3rWSE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

Additional information about this work and the conference:

* [Paper at PORTO@IRIS](https://iris.polito.it/handle/11583/2963822)
* DOI: [10.3233/AISE210074](https://doi.org/10.3233/AISE210074)
* [Conference website](https://2022.splitech.org)
