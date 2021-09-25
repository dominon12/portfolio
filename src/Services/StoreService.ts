import { Portfolio } from "./../Types/Types";

import MyProfilePhoto from "../Assets/Images/profile_gray.jpeg";

const lorem =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit saepe voluptas officiis, doloribus cum totam dolor expedita minus ipsam voluptates, necessitatibus cupiditate! Id optio ab, voluptate a dolor dolore animi? Eum sunt, quaerat suscipit iusto iure fugit. Itaque dolorum aut perspiciatis asperiores voluptatem voluptates a culpa nostrum dolor? Laborum corporis at quo eveniet sunt aut nemo, ipsa iure ad autem? Neque quos libero alias, voluptatibus esse porro dignissimos maxime ";

const portfolioData: Portfolio = {
  about: {
    title: "Hi there, my name is Max 👋",
    description:
      "I am passionate about coding self-taught full-stack web developer from Russia, based in Spain. Welcome to my personal website-portfolio!",
    image: MyProfilePhoto,
  },
  projects: [
    {
      id: 1,
      title: "PriceTomat Bot",
      image:
        "https://mediacloud.kiplinger.com/image/private/s--x2_BoIgn--/v1604352227/Investing/stock-market-today-110220.jpg",
      shortDescription:
        "Telegram bot which sends a message when price for selected assets meets target price set by user",
      description: lorem,
      dateStarted: new Date("07-13-2020"),
      type: "Bot",
      technologies: {
        backend: ["Python3", "PyTelegramBotAPI", "MongoDB", "REST API"],
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
      dateStarted: new Date("01-26-2021"),
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
      image: "https://cartel-hookah.com/static/media/logo.de6858c6.png",
      shortDescription: 'E-commerce web site for company "Cartel Hookah"',
      description: lorem,
      dateStarted: new Date("05-05-2021"),
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
      image: "https://smokelaboratory.eu/static/img/favicons/logo.png",
      shortDescription: 'E-commerce web site for company "Smoke Laboratory"',
      description: lorem,
      dateStarted: new Date("12-20-2020"),
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
      image: "https://learn-sorting.web.app/favicon.ico",
      shortDescription:
        "Visualization of the operation of some sorting algorithms. A project made in two evenings.",
      description: lorem,
      dateStarted: new Date("03-25-2021"),
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
      image: "https://rio-kld.ru/static/img/main/big_logo.jpg",
      shortDescription:
        'Landing page with simple animations for outdoor children\'s playground "Rio"',
      description: lorem,
      dateStarted: new Date("12-04-2020"),
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
      image: "https://reac39.ru/static/img/logos/big-logo.png",
      shortDescription:
        "Website for the Children's Department of Neurology and Reflexology",
      description: lorem,
      dateStarted: new Date("12-09-2020"),
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
  ],
  technologies: [
    {
      id: 1,
      name: "Front-end",
      technologies: [
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
      technologies: [
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
          id: 8,
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
      technologies: [
        {
          id: 11,
          name: "Git",
          level: 3,
        },
        {
          id: 12,
          name: "VSCode",
          level: 4,
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
      id: 1,
      title: "Finished high school",
      description:
        "Information technology class with an emphasis on physics, mathematics and computer science.",
      place: "Lyceum №49, Kaliningrad, Russia",
      date: new Date("05-31-2018"),
      isRelevant: true,
    },
    {
      id: 2,
      title: "Obtained driver's license",
      description: "Passed all the stages in one try",
      place: "Kaliningrad, Russia",
      date: new Date("07-15-2018"),
      isRelevant: false,
    },
    {
      id: 3,
      title: "Started university",
      description:
        "In the direction of Enterprise Management. Studying in Polish.",
      place: "Gdansk, Poland",
      date: new Date("10-01-2018"),
      isRelevant: true,
    },
    {
      id: 4,
      title: "First job",
      description: "As a salesman and cashier. Worked there for 1 month.",
      place: '"Dobry Sklep", Gdansk, Poland',
      date: new Date("03-10-2019"),
      isRelevant: false,
    },
    {
      id: 5,
      title: "First business",
      description:
        'Alimentary shop "Magnat". Managed a team of 10 people. Became a bankrupt 1 year later.',
      place: "Kaliningrad, Russia",
      date: new Date("06-20-2019"),
      isRelevant: false,
    },
    {
      id: 6,
      title: "Food truck",
      description:
        'Second business. In collaboration with a contact zoo "Ara park". Sold 1 year later.',
      place: "Kaliningrad, Russia",
      date: new Date("09-10-2019"),
      isRelevant: false,
    },
    {
      id: 7,
      title: "Pyszne.pl (Takeaway.com)",
      description:
        'Worked as a courier for 4 month. Could have been promoted to a "Team leader", but went to Glovo.',
      place: "Gdansk, Poland",
      date: new Date("11-10-2019"),
      isRelevant: false,
    },
    {
      id: 13,
      title: "Started learning programming",
      description: "From Python3 language.",
      place: "Gdansk, Poland",
      date: new Date("02-10-2020"),
      isRelevant: true,
    },
    {
      id: 8,
      title: "Glovo",
      description: "Worked 5 month until left Poland.",
      place: "Gdansk, Poland",
      date: new Date("03-01-2020"),
      isRelevant: false,
    },
    {
      id: 9,
      title: "Finished university",
      description:
        'Defended my bachelor\'s degree on the topic "The influence of management style on employee motivation".',
      place: "Gdansk, Poland",
      date: new Date("07-10-2020"),
      isRelevant: false,
    },
    {
      id: 10,
      title: "Started learning spanish",
      description:
        "And moved to Spain realizing the dream of living in a country with a pleasant climate.",
      place: "Valencia, Spain",
      date: new Date("08-10-2020"),
      isRelevant: false,
    },
    {
      id: 123,
      title: "First freelance order",
      description:
        'E-commerce website for "Smoke Laboratory" made with Django.',
      place: "Valencia, Spain",
      date: new Date("12-16-2020"),
      isRelevant: true,
    },
    {
      id: 11,
      title: "Obtained DELE B2 diploma (Spanish)",
      description: "After finishing 2 month long preparation course.",
      place: "Valencia, Spain",
      date: new Date("07-14-2021"),
      isRelevant: false,
    },
    {
      id: 12,
      title: "Started college",
      description:
        'In the direction of "Web applications development". Studying in Spanish.',
      place: "Valencia, Spain",
      date: new Date("09-20-2021"),
      isRelevant: true,
    },
  ],
};

export default portfolioData;
