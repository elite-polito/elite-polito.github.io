import { ConferenceCarousel, ConferenceCarouselCover, ConferenceCarouselPaper } from '@site/src/components/ConferenceCarousel/ConferenceCarousel';

export default function CHI2026Carousel() {
  return(
  <ConferenceCarousel>
    <ConferenceCarouselCover
      title="The e-Lite group will be at the ACM CHI conference in Barcelona!"
      dates="April 13-17, 2026"
      imageStyle={{ background: `url(${require('./CHI-logo.png').default}) center/cover` }}
    />
    <ConferenceCarouselPaper
      title="What is Digital Wellbeing? A Leverage Points Framework to Guide Research and Action"
      typeEmoji="📄"
      type="FULL PAPER"
      award="🏅 Honorable Mention"
      authors="Monge Roffarello, Molino, De Russis"
      day="Friday 17 April"
      time="9:00-10:30"
      room="Room 112"
      session="Digital Wellbeing Frameworks and Design Strategies"
    />
    <ConferenceCarouselPaper
      title="When Handwriting Goes Social: Creativity, Anonymity, and Communication in Graphonymous Online Spaces"
      typeEmoji="📄"
      type="FULL PAPER"
      award="🏅 Honorable Mention"
      authors="Purohit, Upadhyaya, Ruiz, Monge Roffarello, Heuer"
      day="Friday 17 April"
      time="9:00-10:30"
      room="Room 112"
      session="Digital Wellbeing Frameworks and Design Strategies"
    />
    <ConferenceCarouselPaper
      title="The Digital Attention Heuristics: Supporting the User's Attention by Design"
      typeEmoji="📄"
      type="TOCHI PAPER"
      authors="Monge Roffarello, De Russis, Lukoff"
      day="Monday 13 April"
      time="16:30-18:00"
      room="Room M211/212"
      session="Cognition Uncertainty and Tool Support"
    />
    <ConferenceCarouselPaper
      title="Am I in Control? How the Design of the TikTok Feed Shapes Users' Sense of Agency"
      typeEmoji="📝"
      type="POSTER"
      authors="Monge Roffarello, De Luca"
      day="Wednesday 15 April"
      time="14:15-18:00"
      room="Area 1+2+3: posters"
    />
    <ConferenceCarouselPaper
      title="CAT-AI: Supporting Teacher Workflows with AI-Assisted Exercise Creation"
      typeEmoji="📝"
      type="POSTER"
      authors="Calò, Cuccu, De Russis"
      day="Thursday 16 April"
      time="14:15-18:00"
      room="Area 1+2+3: posters"
    />
    <ConferenceCarouselPaper
      title="From Text-First to Structure-First: A Visual Pipeline for Narrative Writing"
      typeEmoji="📝"
      type="POSTER"
      authors="Sillano, Calò, De Russis"
      day="Thursday 16 April"
      time="14:15-18:00"
      room="Area 1+2+3: posters"
    />
    <ConferenceCarouselPaper
      title="Investigating Web Project Assessment in an AI World"
      typeEmoji="📝"
      type="POSTER"
      authors="Russo, Saénz Moreno, De Russis"
      day="Wednesday 15 April"
      time="14:15-18:00"
      room="Area 1+2+3: posters"
    />
    <ConferenceCarouselPaper
      title="Measuring the Semantic Accessibility Gap in LLM-Generated Web UIs"
      typeEmoji="📝"
      type="POSTER"
      authors="Calò, Gurita, De Russis"
      day="Tuesday 14 April"
      time="14:15-18:00"
      room="Area 1+2+3: posters"
    />
    <ConferenceCarouselPaper
      title="WebUI-95: A Large-Scale Dataset of Normalized Web Interfaces via UI-to-Code Generation"
      typeEmoji="📝"
      type="POSTER"
      authors="Calò, De Russis"
      day="Wednesday 15 April"
      time="14:15-18:00"
      room="Area 1+2+3: posters"
    />
    <ConferenceCarouselPaper
      title="Supporting Young People Digital Awareness through Novel Interactive Systems"
      typeEmoji="🎓"
      type="SMP POSTER"
      authors="Scibetta"
      day="Wednesday 15 April"
      time="14:15-18:00"
      room="Banquet Hall"
      session="Student Mentoring Program: Dissertation Research Roundtable"
    />
    <ConferenceCarouselPaper
      title="Bridge Over Troubled Water: Aligning Commercial Incentives With Ethical Design Practice To Combat Deceptive Patterns"
      typeEmoji="🔬"
      type="WORKSHOP"
      authors="Essmeyer, Gunawan, Gray, Sánchez Chamorro, Monge Roffarello, Seaborn, Sandhaus, Lukoff, Savino, Chivukula, Nakamura"
      day="Thursday 16 April"
      time="14:15-18:00"
      room="Room 114"
    />
    <ConferenceCarouselPaper
      title="Building Persona-Based Agents On Demand: Tailoring Multi-Agent Workflows to User Needs"
      typeEmoji="🎤"
      type="WORKSHOP PAPER"
      authors="Arbore, Sillano, De Russis"
      day="Tuesday 14 April"
      time="14:15-18:00"
      room="Room 119"
      session="Agentic Automation Experiences: Rethinking the Interaction of Humans and AI Agents"
    />
    <ConferenceCarouselPaper
      title="Design Transparency Labels: Fostering User Trust and Well-Being Through Design Transparency"
      typeEmoji="🎤"
      type="WORKSHOP PAPER"
      authors="Graziosi, Passarella"
      day="Thursday 16 April"
      time="14:15-18:00"
      room="Room 114"
      session="Bridge Over Troubled Water: Aligning Commercial Incentives With Ethical Design Practice To Combat Deceptive Patterns"
    />
    <ConferenceCarouselPaper
      title="Mapping Personas to Text Transformations: A Taxonomy Outline for Content Adaptation"
      typeEmoji="🎤"
      type="WORKSHOP PAPER"
      authors="Sillano, De Russis, Calò, Troncy, Lisena"
      day="Monday 13 April"
      time="14:15-18:00"
      room="Room 118"
      session="From Generation to Simulation: Responsible Use of AI Personas in Human-Centered Design and Research"
    />
  </ConferenceCarousel>
  );
}