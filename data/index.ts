import { PersonalInfo, Education, Project, Course, Experience } from './types';

export const personalInfo: PersonalInfo = {
  name: "Jegatheesh C",
  title: "Software Engineer",
  email: "jega7354@gmail.com",
  phone: "+919894371096",
  address: "27/111, Kollakudi vilai, Eathavilai, Mekkamandapam(post), Kanyakumari - 629166",
  linkedin: "https://in.linkedin.com/in/jegatheesh-c",
  facebook: "https://m.facebook.com/profile.php?id=100007325178542",
  instagram: "https://www.instagram.com/_.jegatheesh._.c._/",
  image: "/assets/img/jega.jpg",
  bio: [
    "Software Development Engineer with 4+ years of experience specializing in full-stack web application development.",
    "I architect and build scalable web applications using modern technologies including Java, Spring Boot, REST APIs, SQL, JavaScript, React, and Angular.",
    "My solutions have powered business applications serving thousands of users, with optimized AWS cloud implementations.",
    "I thrive in optimizing systems - whether refining code architecture, improving performance, or implementing CI/CD pipelines.",
    "When not coding, I explore emerging technologies."
  ],
  skills: [
    "Full-Stack Development",
    "Problem Solving & Debugging",
    "Time Management",
    "Task Prioritization",
    "Agile Methodology",
    "Customer-Centric Development",
    "Self-Motivation & Independence",
    "Cross-Functional Team Collaboration"
  ]
};

export const education: Education[] = [
  {
    year: "2014",
    degree: "SSLC",
    institution: "L.M.S Higher Secondary School, Kadamalikuntu",
    percentage: "91.20%",
    image: "/assets/img/Education/1.jpg"
  },
  {
    year: "2016",
    degree: "HSC",
    institution: "L.M.S Higher Secondary School, Kadamalikuntu",
    percentage: "83.33%",
    image: "/assets/img/Education/1.jpg"
  },
  {
    year: "2020",
    degree: "BE (ECE)",
    institution: "SNS College of Technology, Coimbatore",
    percentage: "9.18 CGPA",
    image: "/assets/img/Education/3.jpg"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Health Monitoring with Virtual Health Assistant",
    category: "IoT",
    thumbnail: "/assets/img/Project/01-thumbnail.jpg",
    fullImage: "/assets/img/Project/01-full.jpg",
    duration: "3 months",
    description: "At present situation, people want to realize their current health condition and also want proper care rapidly at their home. As a result, this project is an attempt to solve a healthcare problem currently society is facing. The main objective of the project was to design a remote healthcare system with healthcare assistant. It's comprised of five main parts. The first part being, detection of patient's vitals using sensors, second for sending data to cloud storage and this can be monitored from anywhere in the world over internet, the third part was providing the detected data for remote viewing. Remote viewing of the data enables a doctor and guardian to monitor a patient's health progress away from hospital premises and also send an email/SMS alert whenever those readings goes beyond critical values, fourth part is the two-way communication the doctor can send required prescription to the patient or guardians through SMS or Emails, and the last part was the virtual health assistant which can interact with the patient to take their medicine on time and give some suggestions about their current health condition and also it communicate with the patient to avoid the loneliness."
  },
  {
    id: "2",
    title: "Jegatheesh - Conspectus",
    category: "Web Application",
    thumbnail: "/assets/img/Project/02-thumbnail.jpg",
    fullImage: "/assets/img/Project/02-full.jpg",
    duration: "1 week",
    description: "This web-site project was designed to express my knowledge and skills in the web development."
  },
  {
    id: "3",
    title: "Home Automation using Google Assistant",
    category: "IoT",
    thumbnail: "/assets/img/Project/03-thumbnail.jpg",
    fullImage: "/assets/img/Project/03-full.jpg",
    duration: "3 months",
    description: "Google assistant is AI (Artificial Intelligence) based voice command service. Using voice, we can interact with google assistant and it can search on the internet, schedule events, set alarms, control appliances, etc. This service is available on smartphones and Google Home devices. We can control smart home devices including lights, switches, fans and thermostats using our Google Assistant. We will build an application which can control home appliances. Here, we will control a 60W bulb and Table fan using Google Assistant service. We can also include many devices to control through our voice command. This application includes Google assistant along with Adafruit server and IFTTT service."
  },
  {
    id: "4",
    title: "Smart Door Lock Using Face Recognition",
    category: "IoT",
    thumbnail: "/assets/img/Project/04-thumbnail.jpg",
    fullImage: "/assets/img/Project/04-full.jpg",
    duration: "3 months",
    description: "The most important of feature of any home security system is to detect the people who enter or leave the house. Instead of monitoring that through passwords or pins unique faces can be made use of as they are one's biometric trait. These are innate and cannot be modified or stolen easily. The level of security can be raised by using face detection. The proposed face recognition door lock security system has been developed to prevent robbery in highly secure areas like home environment with lesser power consumption and more reliable standalone security device for both Intruder detection and for door security. This system is powered by raspberry pi circuit. Raspberry Pi electronic board is operated on Battery power supply, wireless internet connectivity by using USB modem, it includes camera, PIR motion sensor and a door. Whenever the person coxmes in front of the door, it recognizes the face and if it is registered then it unlocks the door, if the face is not registered it will raise an alarm and clicks a picture and send it on the registered number."
  },
  {
    id: "5",
    title: "Floor Cleaning Robot",
    category: "Embedded",
    thumbnail: "/assets/img/Project/05-thumbnail.jpg",
    fullImage: "/assets/img/Project/05-full.jpg",
    duration: "3 months",
    description: "Automatic floor cleaning robot is an automated machine that facilitates the user to keep their place clean and hygienic. Many industries are working in the automation field to make autonomous cleaners. Now a day's major emphasis is given on the field of robotics for decreasing human efforts. Our aim is to construct a floor cleaning Robot that can detect the obstacles & objects in front of it and can continue moving, avoiding the obstacles, until the whole room is cleaned. It has a small brush attached to it to clean the floor."
  }
];

export const courses: Course[] = [
  {
    name: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    date: "March 28, 2021"
  },
  {
    name: "JavaScript",
    issuer: "Educba",
    date: "June 15, 2022"
  },
  {
    name: "Search Engine Optimization",
    issuer: "Udemy",
    duration: "2 weeks"
  },
  {
    name: "The online Marketing Fundamentals",
    issuer: "Google Digital Unlocked",
    duration: "4 weeks"
  }
];

export const experiences: Experience[] = [
  {
    title: "Software Engineer",
    company: "Aadhtech",
    type: "Full-time",
    location: "Mysore, Karnataka, India",
    duration: "Nov 2023 – Present",
    responsibilities: [
      "Designed & developed 20+ features for a Point-of-Sale (POS) application, improving UX and functionality.",
      "Resolved critical bugs, ensuring application stability and performance.",
      "Built scalable cloud architecture using AWS (Lambda, SES, S3, Systems Manager).",
      "Integrated Angular frontend with Spring Boot backend via RESTful APIs for seamless data flow."
    ],
    techStack: [
      "AWS Lambda",
      "AWS SES",
      "AWS S3",
      "Spring Boot",
      "Angular",
      "MySQL",
      "OpenAI",
      "Twilio",
      "JWT",
      "REST API"
    ]
  },
  {
    title: "Software Engineer (Development)",
    company: "Vaken Technologies",
    type: "Full-time",
    location: "Chennai, Tamil Nadu, India",
    duration: "Mar 2021 – Nov 2023 · 2 years 9 months",
    previousTitle: "Software Trainee Engineer",
    previousDuration: "Mar 2021 – Mar 2023 · 2 yrs 1 mo",
    responsibilities: [
      "Built an enterprise admin portal for managing Android employee devices.",
      "Developed interactive web modules using Java, Spring Boot, React.js, MySQL.",
      "Enhanced & debugged existing Android/web apps, delivering bug-free releases.",
      "Led client discussions for requirements and project updates."
    ],
    techStack: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST API",
      "Android",
      "Hibernate"
    ]
  }
];

export const quotes = {
  masthead: "Philosophy gets on my nerves. If we analyze the ultimate ground of everything, then everything finally falls into nothingness. But I have decided to resume my lectures again and look the Hydra of doubt straight into the eye, and it be quite ominous if one values one's life.",
  about: "I never dreamed about success\nI built it line by line.",
  education: "Education is simply the soul of a society as it passes from one generation to another",
  projects: "Where you innovate, how you innovate, and what you innovate are design problems.",
  courses: "A Learning Curve is Essential to Growth",
  experience: "Turning complex problems into elegant code.",
  experienceFooter: "It's not what you achieve, it's what you overcome. That's what defines your career.",
  contact: "One day or Day one It's your choice\nFeel free to contact with me"
};
