import { Portfolio } from "./../Types/Types";

// about
import myProfilePhoto from "../Assets/Images/profile.jpeg";
// projects
import smokelabPhoto from "../Assets/Images/Projects/smokelab.png";
import cartelPhoto from "../Assets/Images/Projects/cartel.png";
import reacPhoto from "../Assets/Images/Projects/reac.png";
import rioPhoto from "../Assets/Images/Projects/rio.png";
import sortingPhoto from "../Assets/Images/Projects/learn-sorting.png";
import tomatPhoto from "../Assets/Images/Projects/tomat.jpeg";
import persDataPhoto from "../Assets/Images/Projects/get-pers-data.png";
import passGeneratorPhoto from "../Assets/Images/Projects/pass-generator.png";
import portfolioPhoto from "../Assets/Images/Projects/portfolio.png";
import hmongoPhoto from "../Assets/Images/Projects/hmongo.png";
import surveyAPIPhoto from "../Assets/Images/Projects/survey-api.png";

const lorem =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit saepe voluptas officiis, doloribus cum totam dolor expedita minus ipsam voluptates, necessitatibus cupiditate! Id optio ab, voluptate a dolor dolore animi? Eum sunt, quaerat suscipit iusto iure fugit. Itaque dolorum aut perspiciatis asperiores voluptatem voluptates a culpa nostrum dolor? Laborum corporis at quo eveniet sunt aut nemo, ipsa iure ad autem? Neque quos libero alias, voluptatibus esse porro dignissimos maxime ";

const portfolioData: Portfolio = {
  about: {
    title: "Hi there, my name is Max 👋",
    description:
      "I am passionate about coding self-taught full-stack web developer from Russia, based in Spain. Welcome to my personal website-portfolio!",
    cvDescription:
      "I am passionate about coding self-taught full-stack web developer from Russia, based in Spain.",
    image: myProfilePhoto,
    firstName: "Maksim",
    lastName: "Sobolev",
    jobTitle: "Full stack web developer",
  },
  projects: [
    {
      id: 1,
      title: "PriceTomat Bot",
      image: tomatPhoto,
      shortDescription:
        "Telegram bot which sends a message when price for selected assets meets target price set by user",
      description: lorem,
      dateStarted: new Date("2020/07/13"),
      type: "Bot",
      technologies: {
        backend: ["Python3", "PyTelegramBotAPI", "MongoDB"],
        frontend: [],
        devops: [],
      },
      link: "https://t.me/PriceTomatBot",
      implementationTime: 0,
    },
    {
      id: 2,
      title: "Pokyza Shop",
      image: "https://pokyzashop.com/assets/img/favicons/logo.png",
      shortDescription: "E-commerce web app for dropshipping project",
      description: lorem,
      dateStarted: new Date("2021/01/26"),
      type: "E-commerce",
      technologies: {
        backend: [
          "Python3",
          "Django",
          "Django Rest Framework",
          "PostgreSQL",
          "Celery",
          "RabbitMQ",
        ],
        frontend: ["Angular", "TypeScript", "HTML", "SCSS"],
        devops: [
          "Debian 10",
          "supervisord",
          "pgbouncer",
          "Nginx",
          "gunicorn",
          "firebase",
        ],
      },
      link: "https://pokyzashop.com",
      implementationTime: 0,
    },
    {
      id: 3,
      title: "Cartel Hookah",
      image: cartelPhoto,
      shortDescription: 'E-commerce web site for company "Cartel Hookah"',
      description: lorem,
      dateStarted: new Date("2021/05/05"),
      type: "E-commerce",
      technologies: {
        backend: [
          "Python3",
          "Django",
          "Django Rest Framework",
          "PostgreSQL",
          "Celery",
          "RabbitMQ",
        ],
        frontend: ["React", "JavaScript", "HTML", "SCSS"],
        devops: ["Debian 10", "supervisord", "pgbouncer", "Nginx", "gunicorn"],
      },
      link: "https://cartel-hookah.com/",
      implementationTime: 0,
    },
    {
      id: 4,
      title: "Smoke Laboratory",
      image: smokelabPhoto,
      shortDescription: 'E-commerce web site for company "Smoke Laboratory"',
      description: lorem,
      dateStarted: new Date("2020/12/20"),
      type: "E-commerce",
      technologies: {
        backend: [
          "Python3",
          "Django",
          "Django Rest Framework",
          "PostgreSQL",
          "Celery",
          "RabbitMQ",
        ],
        frontend: ["JavaScript", "HTML", "SCSS", "jQuery", "gsap"],
        devops: ["Debian 10", "supervisord", "pgbouncer", "Nginx", "gunicorn"],
      },
      link: "https://smokelaboratory.eu/",
      implementationTime: 0,
    },
    {
      id: 5,
      title: "Learn Sorting!",
      image: sortingPhoto,
      shortDescription:
        "Visualization of the operation of some sorting algorithms. A project made in two evenings.",
      description: lorem,
      dateStarted: new Date("2021/03/25"),
      type: "Web app",
      technologies: {
        backend: [],
        frontend: ["Angular", "HTML", "SCSS", "TypeScript"],
        devops: ["firebase"],
      },
      link: "https://learn-sorting.web.app/",
      repository: "https://github.com/dominon12/SortVisualizer",
      implementationTime: 0,
    },
    {
      id: 6,
      title: '"Rio" Outdoor Children\'s Playground',
      image: rioPhoto,
      shortDescription:
        'Landing page with simple animations for outdoor children\'s playground "Rio"',
      description: lorem,
      dateStarted: new Date("2020/12/04"),
      type: "Landing",
      technologies: {
        backend: ["Python3", "Django", "PostgreSQL", "Celery", "RabbitMQ"],
        frontend: ["HTML", "CSS", "JavaScript", "jQuery"],
        devops: ["Debian 10", "supervisord", "memcached", "Nginx", "gunicorn"],
      },
      link: "https://learn-sorting.web.app/",
      implementationTime: 0,
    },
    {
      id: 7,
      title: "Reacenter",
      image: reacPhoto,
      shortDescription:
        "Website for the Children's Department of Neurology and Reflexology",
      description: lorem,
      dateStarted: new Date("2020/12/09"),
      type: "Web app",
      technologies: {
        backend: ["Python3", "Django", "PostgreSQL", "Celery", "RabbitMQ"],
        frontend: ["HTML", "CSS", "JavaScript", "jQuery"],
        devops: [
          "Debian 10",
          "supervisord",
          "pgbouncer",
          "memcached",
          "Nginx",
          "gunicorn",
        ],
      },
      link: "https://learn-sorting.web.app/",
      repository: "https://github.com/dominon12/SortVisualizer",
      implementationTime: 0,
    },
    {
      id: 8,
      title: "GetPersData",
      image: persDataPhoto,
      shortDescription: "Web app which allows to steal personal data",
      description: lorem,
      dateStarted: new Date("2021/08/16"),
      type: "Web app",
      technologies: {
        backend: [],
        frontend: ["React", "TypeScript", "HTML", "SCSS"],
        devops: [],
      },
      link: "https://get-pers-data.web.app/",
      repository: "https://github.com/dominon12/GetPersData",
      implementationTime: 0,
    },
    {
      id: 9,
      title: "WebPassGenerator",
      image: passGeneratorPhoto,
      shortDescription: "Generates password depending on selected options",
      description: lorem,
      dateStarted: new Date("2021/08/08"),
      type: "Web app",
      technologies: {
        backend: [],
        frontend: ["JavaScript", "HTML", "CSS"],
        devops: [],
      },
      link: "https://dominon12.github.io/WebPassGenerator/",
      repository: "https://github.com/dominon12/WebPassGenerator",
      implementationTime: 0,
    },
    {
      id: 10,
      title: "Portfolio",
      image: portfolioPhoto,
      shortDescription: "This Web App",
      description: lorem,
      dateStarted: new Date("2021/09/17"),
      type: "Web app",
      technologies: {
        backend: [],
        frontend: ["React", "TypeScript", "HTML", "SCSS"],
        devops: [],
      },
      link: "https://dominon12.web.app/",
      repository: "https://github.com/dominon12/portfolio",
      implementationTime: 0,
    },
    {
      id: 11,
      title: "HMongo",
      image: hmongoPhoto,
      shortDescription:
        "Library to easy work with NoSQL database MongoDB written in Python3",
      description: lorem,
      dateStarted: new Date("2020/06/12"),
      type: "Library",
      technologies: {
        backend: ["Python3"],
        frontend: [],
        devops: [],
      },
      repository: "https://github.com/dominon12/HMongo",
      implementationTime: 0,
    },
    {
      id: 12,
      title: "SurveyAPI",
      image: surveyAPIPhoto,
      shortDescription:
        "REST API for creating and managing surveys of different types",
      description: lorem,
      dateStarted: new Date("2021/02/11"),
      type: "REST API",
      technologies: {
        backend: ["Python3", "Django", "DRF"],
        frontend: [],
        devops: [],
      },
      repository: "https://github.com/dominon12/SurveyAPI",
      implementationTime: 0,
    },
  ],
  skills: [
    {
      id: 1,
      name: "Front-end",
      skills: [
        {
          id: 1,
          name: "JavaScript",
          level: 4,
        },
        {
          id: 2,
          name: "TypeScript",
          level: 4,
        },
        {
          id: 3,
          name: "HTML",
          level: 5,
        },
        {
          id: 4,
          name: "CSS",
          level: 5,
        },
        {
          id: 5,
          name: "SCSS",
          level: 4,
        },
        {
          id: 14,
          name: "React",
          level: 4,
        },
        {
          id: 15,
          name: "Angular",
          level: 3,
        },
        {
          id: 16,
          name: "Vue",
          level: 2,
        },
      ],
    },
    {
      id: 2,
      name: "Back-end",
      skills: [
        {
          id: 6,
          name: "Python3",
          level: 3,
        },
        {
          id: 8,
          name: "Django",
          level: 4,
        },
        {
          id: 99,
          name: "DRF",
          level: 4,
        },
        {
          id: 7,
          name: "C#",
          level: 2,
        },
        {
          id: 9,
          name: "Flask",
          level: 2,
        },
        {
          id: 10,
          name: "SQL",
          level: 3,
        },
      ],
    },
    {
      id: 3,
      name: "Other",
      skills: [
        {
          id: 11,
          name: "Git",
          level: 3,
        },
        {
          id: 13,
          name: "Bash",
          level: 4,
        },
        {
          id: 17,
          name: "Postgres",
          level: 3,
        },
        {
          id: 18,
          name: "MongoDB",
          level: 3,
        },
      ],
    },
  ],
  experience: [
    {
      id: 14,
      title: "Was born",
      description: "",
      place: "Kaliningrad, Russia",
      date: new Date("1999/05/27"),
      isRelevant: true,
    },
    {
      id: 1,
      title: "Finished high school",
      description:
        "Information technology class with an emphasis on physics, mathematics and computer science.",
      place: "Lyceum №49, Kaliningrad, Russia",
      date: new Date("2018/05/31"),
      isRelevant: true,
    },
    {
      id: 2,
      title: "Obtained driver's license",
      description: "Passed all the stages in one try",
      place: "Kaliningrad, Russia",
      date: new Date("2018/07/15"),
      isRelevant: false,
    },
    {
      id: 3,
      title: "Started university",
      description:
        "In the direction of Enterprise Management. Studying in Polish.",
      place: "Gdansk, Poland",
      date: new Date("2018/10/01"),
      isRelevant: true,
    },
    {
      id: 4,
      title: "First job",
      description: "As a salesman and cashier. Worked there for 1 month.",
      place: '"Dobry Sklep", Gdansk, Poland',
      date: new Date("2019/03/10"),
      isRelevant: false,
    },
    {
      id: 5,
      title: "First business",
      description:
        'Alimentary shop "Magnat". Managed a team of 10 people. Became a bankrupt 1 year later.',
      place: "Kaliningrad, Russia",
      date: new Date("2019/06/20"),
      isRelevant: false,
    },
    {
      id: 6,
      title: "Food truck",
      description:
        'Second business. In collaboration with a contact zoo "Ara park". Sold 1 year later.',
      place: "Kaliningrad, Russia",
      date: new Date("2019/09/10"),
      isRelevant: false,
    },
    {
      id: 7,
      title: "Pyszne.pl (Takeaway.com)",
      description:
        'Worked as a courier for 4 month. Could have been promoted to a "Team leader", but went to Glovo.',
      place: "Gdansk, Poland",
      date: new Date("2019/11/10"),
      isRelevant: false,
    },
    {
      id: 13,
      title: "Started learning programming",
      description: "From Python3 language.",
      place: "Gdansk, Poland",
      date: new Date("2020/02/10"),
      isRelevant: true,
    },
    {
      id: 8,
      title: "Glovo",
      description: "Worked 5 month until left Poland.",
      place: "Gdansk, Poland",
      date: new Date("2020/03/01"),
      isRelevant: false,
    },
    {
      id: 9,
      title: "Finished university",
      description:
        'Defended my bachelor\'s degree on the topic "The influence of management style on employee motivation".',
      place: "Gdansk, Poland",
      date: new Date("2020/07/10"),
      isRelevant: false,
    },
    {
      id: 10,
      title: "Started learning spanish",
      description:
        "And moved to Spain realizing the dream of living in a country with a pleasant climate.",
      place: "Valencia, Spain",
      date: new Date("2020/08/10"),
      isRelevant: false,
    },
    {
      id: 123,
      title: "First freelance order",
      description:
        'E-commerce website for "Smoke Laboratory" made with Django.',
      place: "Valencia, Spain",
      date: new Date("2020/12/16"),
      isRelevant: true,
    },
    {
      id: 11,
      title: "Obtained DELE B2 diploma (Spanish)",
      description: "After finishing 2 month long preparation course.",
      place: "Valencia, Spain",
      date: new Date("2021/07/14"),
      isRelevant: false,
    },
    {
      id: 12,
      title: "Started college",
      description:
        'In the direction of "Web applications development". Studying in Spanish.',
      place: "Valencia, Spain",
      date: new Date("2021/09/20"),
      isRelevant: true,
    },
  ],
  languages: [
    {
      id: 1,
      name: "English",
      code: "gb",
      level: "Fluent",
      learningStory:
        "I learn english all my life. Can't say that I know grammar very well, but I can freely talk about any topic. I always search coding info in english, read technical documentation.",
    },
    {
      id: 2,
      name: "Russian",
      code: "ru",
      level: "Native",
      learningStory:
        "I'm russian native speaker with all the ensuing consequences",
    },
    {
      id: 3,
      name: "Polish",
      code: "pl",
      level: "Fluent",
      learningStory:
        "I was learning Polish for 1 year become coming to Poland for studying and then lived and studied there for 3 years. I have a lot of experience in speaking Polish because I was studying in this language in university and working on different jobs for about 1 year.",
    },
    {
      id: 4,
      name: "Spanish",
      code: "es",
      level: "Fluent",
      learningStory:
        'I started learning Spanish using mobile app called "Duolingo" and continued in school of spanish language in Valencia "Hispania". After about 1 year of studying I\'ve passed DELE B2 exam.',
    },
  ],
  contactLinks: [
    {
      id: 1,
      name: "Telegram",
      url: "https://t.me/ScouttBot",
    },
    {
      id: 2,
      name: "Instagram",
      url: "https://instagram.com/_____shika_____",
    },
    {
      id: 3,
      name: "Mail",
      url: "mailto:youneedmax@gmail.com",
    },
    {
      id: 4,
      name: "GitHub",
      url: "https://github.com/dominon12",
    },
    {
      id: 5,
      name: "LinkedIn",
      url: "https://linkedin.com/in/maksim-sobolev-351029215/",
    },
  ],
  donationMethods: [
    {
      id: 1,
      type: "btc",
      name: "Bitcoin",
      comment: "Here's my bitcoin wallet address",
      linkUrl: "1E3NzhUvkpcRLhgisfL7Mv4AVNn1KFNdN6",
    },
    {
      id: 2,
      type: "eth",
      name: "Ethereum",
      comment: "Here's my ethereum wallet address",
      linkUrl: "0x781253123f5fc0B9795839B8C02383F1c7E4ADa0",
    },
    {
      id: 3,
      type: "tinkoff",
      name: "Tinkoff",
      comment: "Here you can donate me in rubbles",
      linkUrl: "https://www.tinkoff.ru/cf/3QOy3SthG4o",
      isLink: true,
    },
    {
      id: 4,
      type: "buymeacoffee",
      name: "Buy me a coffee",
      comment: "Here you can buy me a coffee",
      linkUrl: "https://buymeacoffee.com/dominon12",
      isLink: true,
    },
  ],
};

export default portfolioData;
