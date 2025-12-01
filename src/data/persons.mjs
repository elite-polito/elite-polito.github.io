const people = [
    {
        name: 'Fulvio Corno',
        img: '/img/people/FulvioCorno.webp',
        role: 'Full Professor',
        email: 'fulvio.corno@polito.it',
        github: 'fulcorno',
        // twitter: 'fulcorno',
        telegram: 'fulcorno',
        linkedin: 'fulviocorno',
        youtube: 'fulcorno',
    },
    {
        name: 'Laura Farinetti',
        img: '/img/people/LauraFarinetti.jpg',
        role: 'Assistant Professor',
        email: 'laura.farinetti@polito.it'
    },
    {
        name: 'Luigi De Russis',
        img: '/img/people/LuigiDeRussis.jpg',
        role: 'Associate Professor',
        email: 'luigi.derussis@polito.it',
        github: 'luigidr',
        linkedin: 'luigidr',
        youtube: 'LuigiDeRussis'
    },
    {
        name: 'Alberto Monge Roffarello',
        role: 'Assistant Professor (RTDb)',
        img: '/img/people/AlbertoMonge.jpg',
        email: 'alberto.monge@polito.it',
        github: 'alberto-mr'
    },
    {
        name: 'Juan Pablo Sáenz',
        role: 'Assistant Professor (RTDa)',
        email: 'juan.saenz@polito.it',
        img: '/img/people/JuanSaenz.png',
        github: 'jpsaenzmo',
        linkedin: 'jpsaenz',
        youtube: '@jpsaenzmo.polito'
    },
    {
        name: 'Tommaso Calò',
        role: 'Post-Doc Researcher',
        email: 'tommaso.calo@polito.it',
        img: '/img/people/TommasoCalo.jpeg',
        github: 'tommasocalo',
        linkedin: 'tommaso-caló-20509512a',
        website: 'https://tommasocalo.github.io/'
    },
    {
        name: 'Luca Scibetta',
        role: 'Ph.D. Student',
        email: 'luca.scibetta@polito.it',
        img: '/img/people/LucaScibetta.jpg',
        github: 'LucaScibetta',
        linkedin: 'luca-scibetta-26290b22b',
    },
    {
        name: 'Daniela Finotto',
        role: 'Research Fellow',
        email: 'daniela.finotto@polito.it',
    },
    {
        name: 'Robert Schwartz',
        role: 'Ph.D. Student',
        email: 'robert.schwartz@polito.it',
        img: '/img/people/RobertSchwartz.jpg'
    },
    {
        name: 'Francesca Russo',
        role: 'Ph.D. Student',
        email: 'francesca.russo@polito.it',
        img: '/img/people/FrancescaRusso.jpg',
        github: 'frarus',
        linkedin: 'francesca-russo2',
    },
    {
        name: 'Miriam Fiorenza',
        role: 'Ph.D. Student',
        email: 'miriam.fiorenza@polito.it',
        img: '/img/people/MiriamFiorenza.jpeg',
        linkedin: 'miriam-fiorenza-725611137'
    },
    {
        name: 'Andrea Sillano',
        role: 'Ph.D. Student',
        email: 'andrea.sillano@polito.it',
        img: '/img/people/AndreaSillano.jpg',
        github: 'AndreaSillano',
        linkedin: 'andrea-sillano-a051562b9'
    },
    {
        name: 'Riccardo Graziosi',
        role: 'Ph.D. Student',
        email: 'riccardo.graziosi@polito.it',
        img: '/img/people/RiccardoGraziosi.png',
        github: 'riggraz',
        linkedin: 'riccardo-graziosi'
    },
    {
        name: 'Giuseppe Arbore',
        role: 'Research Grant Holder',
        email: 'giuseppe.arbore@polito.it',
        img: '/img/people/GiuseppeArbore.jpg',
        github: 'GiuseppeArbore',
        linkedin: 'giuseppe-arbore-099057331',
        youtube: 'peppearb'
    },
]

const alumni = [
    {
        name: 'Massimiliano Pellegrino',
        role: 'Front-end Developer',
        //email: 'massimiliano.pellegrino@polito.it',
        img: '/img/people/MassimilianoPellegrino.jpg',
        github: 'MassimilianoPellegrino',
        linkedin: 'massimiliano-pellegrino',
    },
    {
        name: 'Luca Pezzolla',
        role: 'Co-Founder & CEO at Sbam',
        // email: 'luca.pezzolla@polito.it',
        img: '/img/people/LucaPezzolla.jpg',
        github: 'lpezzolla',
        linkedin: 'lpezzolla',
    },
    {
        name: 'Luca Mannella',
        role: 'Post-Doc Researcher at Politecnico di Torino',
        // email: 'luca.mannella@polito.it',
        img: '/img/people/LucaMannella.jpg',
        github: 'LucaMannella',
        linkedin: 'lucamannella',
        twitter: 'LukeMannella',
        youtube: '@LucaMannella'
    },
    {
        name: 'Lorenzo Canale',
        role: 'Artificial Intelligence Researcher at RAI - Radiotelevisione Italiana',
        img: 'img/people/LorenzoCanale.jpeg',
        linkedin: 'lorenzo-canale-a09436a7',
    },
    {
        name: 'Luisa Barrera León',
        role: 'Post-Doc Researcher at Università degli Studi del Piemonte Orientale ',
        img: '/img/people/LuisaBarrera.jpg',
        github: 'luifabelo',
        linkedin: 'luisabarreraleon',
    },
    {
        name: 'Fabio Ballati',
        role: 'Systemic-relational Counselor',
        img: '/img/people/FabioBallati.webp',
        linkedin: 'fabio-ballati-290853ba',
    },
    {
        name: 'Teodoro Montanaro',
        role: 'Post-Doc Researcher at Università del Salento',
        img: '/img/people/TeodoroMontanaro.webp',
        github: 'tmontanaro',
        linkedin: 'teodoro-montanaro-94a50991',
    },
    {
        name: 'Sebastián Aced López',
        role: 'Computer Science Teacher and Robotic Instructor',
        img: '/img/people/SebastianAcedLopez.webp',
        linkedin: 'sebastián-aced-lópez-3a07b870',
    },
    {
        name: 'Dario Bonino',
        role: 'Senior Software Engineer at Sysdig',
        img: '/img/people/DarioBonino.jpeg',
        linkedin: 'dariobonino',
        github: 'dbonino',
    },
    {
        name: 'Muhammad Sanaullah',
        role: 'Associate Professor, Air University (Multan Campus)',
        img: '/img/people/MuhammadSanaullah.jpeg',
        linkedin: 'muhammad-sanaullah-dr-a3a4849',
    },
    {
        name: 'Emiliano Castellina',
        role: 'Insegnante di informatica presso IIS Avogadro Vercelli',
        img: '/img/people/EmilianoCastellina.jpg',
        linkedin: 'emiliano-castellina',
    },
    {
        name: 'Faisal Razzak',
        role: 'Senior Product Manager, R&D at Venafi Inc.',
        img: '/img/people/FaisalRazzak.jpg',
        linkedin: 'faisalrazzak',
    },
    {
        name: 'Liu Min',
    },
    {
        name: 'Alessandro Garbo',
        role: 'Senior Software Engineering at Cerence Inc. ',
        img: '/img/people/AlessandroGarbo.jpeg',
        linkedin: 'alessandro-garbo-325506147',
    },
    {
        name: 'Michele Debandi',
        role: 'Developer, System integrator at Dedalus S.p.A.',
        img: '/img/people/MicheleDebandi.jpeg',
        linkedin: 'michele-debandi-9a43246',
    },
    {
        name: 'Paolo Pellegrino',
        role: 'Developer at Zirak srl',
    },
    {
        name: 'Francesco Gerace',
        role: 'IT Developer at Finance Evolution srl',
        img: '/img/people/FrancescoGerace.jpg',
    },
    {
        name: 'Alessio Bosca',
        role: 'Research Development Software Engineer at H-Farm Innovation',
        img: '/img/people/AlessioBosca.jpg',
        linkedin: 'alessio-bosca',
    },
    {
        name: 'Federico Pescarmona',
        role: 'Software development engineer at Apple',
        img: '/img/people/FedericoPescarmona.jpg',
        linkedin: 'federicopescarmona',
    },
    {
        name: 'Florin Bota',
        role: 'Head of Sector - Data and Content Management - Operations and Security at European Commission',
        img: '/img/people/FlorinBota.jpg',
        linkedin: 'florin-bota-903b435',
    },
    {
        name: 'Marco Luca Sbodio',
        role: 'Senior Research Scientist at IBM Research',
        img: '/img/people/MarcoSbodio.jpg',
        linkedin: 'sbodio',
    },
    {
        name: 'Franco Borello',
        role: 'High School Teacher',
        img: '/img/people/FrancoBorello.jpg',
    },



]

export {people, alumni};
