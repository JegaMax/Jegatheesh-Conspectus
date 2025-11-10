export const personalInfo = {
  name: "Jegatheesh C",
  title: "Software Engineer",
  tagline: "Software Development Engineer with 4+ years of experience",
  email: "jega7354@gmail.com",
  phone: "+919894371096",
  location: {
    address: "27/111, Kollakudi vilai, Eathavilai, Mekkamandapam(post)",
    city: "Kanyakumari",
    state: "Tamil Nadu",
    postalCode: "629166",
    country: "India"
  },
  social: {
    linkedin: "https://in.linkedin.com/in/jegatheesh-c",
    github: "https://github.com/jegamax",
    facebook: "https://m.facebook.com/profile.php?id=100007325178542",
    instagram: "https://www.instagram.com/_.jegatheesh._.c._/"
  },
  quote: "Philosophy gets on my nerves. If we analyze the ultimate ground of everything, then everything finally falls into nothingness. But I have decided to resume my lectures again and look the Hydra of doubt straight into the eye, and it be quite ominous if one values one's life.",
  image: "/assets/img/jega.jpg"
};

export const about = {
  title: "About",
  subtitle: '"I never dreamed about success, I built it line by line."',
  description: [
    "Software Development Engineer with 4+ years of experience specializing in full-stack web application development.",
    "I architect and build scalable web applications using modern technologies including Java, Spring Boot, REST APIs, SQL, JavaScript, React, and Angular.",
    "My solutions have powered business applications serving thousands of users, with optimized AWS cloud implementations.",
    "I thrive in optimizing systems - whether refining code architecture, improving performance, or implementing CI/CD pipelines.",
    "When not coding, I explore emerging technologies."
  ],
  skills: [
    "Java", "Spring Boot", "REST APIs", "SQL", "JavaScript", 
    "React", "Angular", "AWS", "CI/CD", "Full-Stack Development"
  ]
};

export const education = [
  {
    year: "2020",
    degree: "BE (ECE)",
    institution: "SNS College of Technology",
    location: "Coimbatore",
    grade: "9.18 CGPA",
    image: "/assets/img/Education/3.jpg"
  },
  {
    year: "2016",
    degree: "HSC",
    institution: "L.M.S Higher Secondary School",
    location: "Kadamalikuntu",
    grade: "83.33%",
    image: "/assets/img/Education/1.jpg"
  },
  {
    year: "2014",
    degree: "SSLC",
    institution: "L.M.S Higher Secondary School",
    location: "Kadamalikuntu",
    grade: "91.20%",
    image: "/assets/img/Education/1.jpg"
  }
];

export const projects = [
  {
    id: 1,
    title: "Health Monitoring with Virtual Health Assistant",
    category: "IoT",
    thumbnail: "/assets/img/Project/01-thumbnail.jpg",
    image: "/assets/img/Project/01-full.jpg",
    description: "At present situation, people want to realize their current health condition and also want proper care rapidly at their home. As a result, this project is an attempt to solve a healthcare problem currently society is facing. The main objective of the project was to design a remote healthcare system with healthcare assistant. It's comprised of five main parts. The first part being, detection of patient's vitals using sensors, second for sending data to cloud storage and this can be monitored from anywhere in the world over internet, the third part was providing the detected data for remote viewing. Remote viewing of the data enables a doctor and guardian to monitor a patient's health progress away from hospital premises and also send an email/SMS alert whenever those readings goes beyond critical values, fourth part is the two-way communication the doctor can send required prescription to the patient or guardians through SMS or Emails, and the last part was the virtual health assistant which can interact with the patient to take their medicine on time and give some suggestions about their current health condition and also it communicate with the patient to avoid the loneliness.",
    duration: "3 months"
  },
  {
    id: 2,
    title: "Jegatheesh - Conspectus",
    category: "Web Application",
    thumbnail: "/assets/img/Project/02-thumbnail.jpg",
    image: "/assets/img/Project/02-full.jpg",
    description: "This web-site project was designed to express my knowledge and skills in the web development.",
    duration: "1 week"
  },
  {
    id: 3,
    title: "Home Automation using Google Assistant",
    category: "IoT",
    thumbnail: "/assets/img/Project/03-thumbnail.jpg",
    image: "/assets/img/Project/03-full.jpg",
    description: "Google assistant is AI (Artificial Intelligence) based voice command service. Using voice, we can interact with google assistant and it can search on the internet, schedule events, set alarms, control appliances, etc. This service is available on smartphones and Google Home devices. We can control smart home devices including lights, switches, fans and thermostats using our Google Assistant. We will build an application which can control home appliances. Here, we will control a 60W bulb and Table fan using Google Assistant service. We can also include many devices to control through our voice command. This application includes Google assistant along with Adafruit server and IFTTT service.",
    duration: "3 months"
  },
  {
    id: 4,
    title: "Smart Door Lock Using Face Recognition",
    category: "IoT",
    thumbnail: "/assets/img/Project/04-thumbnail.jpg",
    image: "/assets/img/Project/04-full.jpg",
    description: "The most important of feature of any home security system is to detect the people who enter or leave the house. Instead of monitoring that through passwords or pins unique faces can be made use of as they are one's biometric trait. These are innate and cannot be modified or stolen easily. The level of security can be raised by using face detection. The proposed face recognition door lock security system has been developed to prevent robbery in highly secure areas like home environment with lesser power consumption and more reliable standalone security device for both Intruder detection and for door security. This system is powered by raspberry pi circuit. Raspberry Pi electronic board is operated on Battery power supply, wireless internet connectivity by using USB modem, it includes camera, PIR motion sensor and a door. Whenever the person comes in front of the door, it recognizes the face and if it is registered then it unlocks the door, if the face is not registered it will raise an alarm and clicks a picture and send it on the registered number.",
    duration: "3 months"
  },
  {
    id: 5,
    title: "Floor Cleaning Robot",
    category: "Embedded",
    thumbnail: "/assets/img/Project/05-thumbnail.jpg",
    image: "/assets/img/Project/05-full.jpg",
    description: "Automatic floor cleaning robot is an automated machine that facilitates the user to keep their place clean and hygienic. Many industries are working in the automation field to make autonomous cleaners. Now a day's major emphasis is given on the field of robotics for decreasing human efforts. Our aim is to construct a floor cleaning Robot that can detect the obstacles & objects in front of it and can continue moving, avoiding the obstacles, until the whole room is cleaned. It has a small brush attached to it to clean the floor.",
    duration: "3 months"
  }
];

export const courses = [
  {
    title: "Oracle Certified Associate, Java SE 8 Programmer",
    issuer: "Oracle",
    date: "March 28, 2021",
    type: "Certificate"
  },
  {
    title: "JavaScript",
    issuer: "Educba",
    date: "June 15, 2022",
    type: "Certificate"
  },
  {
    title: "Search Engine Optimization",
    issuer: "Udemy",
    duration: "2 weeks",
    type: "Course"
  },
  {
    title: "The Online Marketing Fundamentals",
    issuer: "Google Digital Unlocked",
    duration: "4 weeks",
    type: "Course"
  }
];

export const experience = [
  {
    title: "Software Engineer",
    company: "Aadhtech",
    type: "Full-time",
    mode: "Remote",
    location: "Mysore, Karnataka, India",
    startDate: "Nov 2023",
    endDate: "Present",
    description: [
      "Designed & developed 20+ features for a Point-of-Sale (POS) application, improving UX and functionality.",
      "Resolved critical bugs, ensuring application stability and performance.",
      "Built scalable cloud architecture using AWS (Lambda, SES, S3, Systems Manager).",
      "Integrated Angular frontend with Spring Boot backend via RESTful APIs for seamless data flow."
    ],
    techStack: [
      "AWS Lambda", "AWS SES", "AWS S3", "Spring Boot", "Angular", 
      "MySQL", "OpenAI", "Twilio", "JWT", "REST API"
    ]
  },
  {
    title: "Software Engineer (Development)",
    company: "Vaken Technologies",
    type: "Full-time",
    mode: "Hybrid",
    location: "Chennai, Tamil Nadu, India",
    startDate: "Mar 2021",
    endDate: "Nov 2023",
    duration: "2 years 9 months",
    positions: [
      {
        title: "Software Trainee Engineer",
        startDate: "Mar 2021",
        endDate: "Mar 2023",
        duration: "2 yrs 1 mo"
      }
    ],
    description: [
      "Built an enterprise admin portal for managing Android employee devices.",
      "Developed interactive web modules using Java, Spring Boot, React.js, MySQL.",
      "Enhanced & debugged existing Android/web apps, delivering bug-free releases.",
      "Led client discussions for requirements and project updates."
    ],
    techStack: [
      "Java", "Spring Boot", "React.js", "MySQL", 
      "REST API", "Android", "Hibernate"
    ]
  }
];

export const highlights = [
  "Full-Stack Development",
  "Problem Solving & Debugging",
  "Time Management",
  "Task Prioritization",
  "Agile Methodology",
  "Customer-Centric Development",
  "Self-Motivation & Independence",
  "Cross-Functional Team Collaboration"
];
