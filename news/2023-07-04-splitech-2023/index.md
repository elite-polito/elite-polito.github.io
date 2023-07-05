---
authors: [mannella]
tags: [conference, paper]
description: On June 21st, 2023, Luca Mannella presented the paper "A Gateway-based MUD Architecture to Enhance Smart Home Security" at SpliTech 2023. The paper was presented during the Special Session on CyberSecurity and IoT, chaired by Luca.
image: ./LM-presentation.jpg
image_alt: Luca Mannella during the presentation of the submitted paper
---
import SpliTechBanner from './SpliTech2023-banner.png'
import LMPresentation from './LM-presentation.jpg'

# Presentation of "A Gateway-based MUD Architecture to Enhance Smart Home Security" at SpliTech 2023

On June 21st, 2023, Luca Mannella presented the paper "[**A Gateway-based MUD Architecture to Enhance Smart Home Security**](https://www.researchgate.net/publication/370609562_A_Gateway-based_MUD_Architecture_to_Enhance_Smart_Home_Security)" at SpliTech 2023 ([The 8th International Conference on Smart and Sustainable Technologies](https://2023.splitech.org)).

The paper was presented during the **Special Session on CyberSecurity and IoT**, chaired by Luca. The special session was held within the *International Symposium on Internet of Things*.

<p className="text--center"><img src={SpliTechBanner} alt="SpliTech 2023 banner"></img></p>

<!-- truncate -->

The presented paper, co-authored with Prof. Fulvio Corno, introduces an extended architecture compliant with the [Manufacturer Usage Description](https://www.rfc-editor.org/rfc/rfc8520.html) (MUD) — a standard proposed by the Internet Engineering Task Force (IETF).

The research emphasizes the enhancement of an extensible smart home gateway to provide an additional layer of security for the connected devices. Indeed, by allowing developers to specify the endpoints their plug-ins need to access, the architecture generates a consolidated gateway-level MUD file, ensuring protection for non-MUD-enabled devices integrated through suitable plug-ins.

<p className="text--center"><img src={LMPresentation} alt="Luca Mannella during the presentation of the submitted paper"></img></p>

It is important to notice that our proposed approach is transparent for the devices themselves and it has full compatibility with traditional MUD. Moreover, this solution protect every kind of software plug-in; even those that do not integrate any physical device.

To demonstrate the feasibility of the proposed approach, a proof-of-concept was implemented using [Home Assistant](https://www.home-assistant.io/), a popular open-source smart home gateway.


Read the full paper by following the links at the end of this news, and have a look to [the presented slides on SlideShare](https://www.slideshare.net/LucaMannella/a-gateway-based-mud-architecture-to-enhance-smart-home-security)!

<!-- original 476x400 -->
<p className="text--center">
<iframe src="https://www.slideshare.net/slideshow/embed_code/key/nHB5HJ7FDmWbdJ?hostedIn=slideshare&page=upload" width="620" height="400" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
</p>

---

Additional information:

* [Paper on PORTO@IRIS](https://hdl.handle.net/11583/2978408)
<!-- * DOI: [10.3233/AISE210074](https://doi.org/10.3233/AISE210074) -->
* [Conference website](https://2023.splitech.org)
* [Full Conference program](https://2023.splitech.org/assets/SpliTech%20PROGRAM%20FINALNO%204.pdf)
