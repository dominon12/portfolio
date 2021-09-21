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
};

export default portfolioData;
