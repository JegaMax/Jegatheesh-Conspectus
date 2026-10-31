export const personalInfo = {
  name: "Jegatheesh C",
  title: "Software Engineer",
  tagline: "Software Development Engineer",
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
  image: "/assets/img/jega.jpg",
  // No resume file exists in the repo yet. Drop a PDF into /public and set
  // this to its path (e.g. "/resume/Jegatheesh-C-Resume.pdf") to enable the
  // "Download resume" button in the Contact section.
  resume: null as string | null,
  // Approximate coordinates of Kanyakumari (decorative hero detail only).
  coordinates: "8.08° N, 77.54° E",
  timeZone: "Asia/Kolkata"
};

/** Start of professional experience (first role: Vaken Technologies, Mar 2021). */
export const careerStart = { year: 2021, month: 3 };

export const about = {
  title: "About",
  subtitle: '"I never dreamed about success, I built it line by line."',
  description: [
    "Software Development Engineer with {years}+ years of experience specializing in full-stack web application development.",
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
    slug: "health-monitoring",
    title: "Health Monitoring with Virtual Health Assistant",
    category: "IoT",
    thumbnail: "/assets/img/Project/01-thumbnail.jpg",
    image: "/assets/img/Project/01-full.jpg",
    imageKey: "p01",
    imageAlt: "Prototype circuit board with an LCD showing temperature, humidity and heartbeat readings, next to a phone displaying the same data over Bluetooth",
    imageSize: { width: 739, height: 415 },
    description: "At present situation, people want to realize their current health condition and also want proper care rapidly at their home. As a result, this project is an attempt to solve a healthcare problem currently society is facing. The main objective of the project was to design a remote healthcare system with healthcare assistant. It's comprised of five main parts. The first part being, detection of patient's vitals using sensors, second for sending data to cloud storage and this can be monitored from anywhere in the world over internet, the third part was providing the detected data for remote viewing. Remote viewing of the data enables a doctor and guardian to monitor a patient's health progress away from hospital premises and also send an email/SMS alert whenever those readings goes beyond critical values, fourth part is the two-way communication the doctor can send required prescription to the patient or guardians through SMS or Emails, and the last part was the virtual health assistant which can interact with the patient to take their medicine on time and give some suggestions about their current health condition and also it communicate with the patient to avoid the loneliness.",
    duration: "3 months",
    problem: "People want to understand their health at home and get proper care quickly, without being physically close to a hospital.",
    solution: "A remote healthcare system with a virtual health assistant, built in five parts.",
    architecture: [
      "Sensors detect the patient's vitals",
      "Readings are sent to cloud storage, viewable from anywhere over the internet",
      "Doctors and guardians monitor progress remotely, with email/SMS alerts when readings pass critical values",
      "Two-way communication: prescriptions reach the patient or guardians by SMS or email",
      "A virtual assistant reminds the patient to take medicine, offers suggestions and keeps them company"
    ],
    stack: ["Vitals sensors", "Cloud storage", "Email / SMS alerts", "Virtual assistant"],
    github: null as string | null,
    demo: null as string | null
  },
  {
    id: 2,
    slug: "conspectus",
    title: "Jegatheesh - Conspectus",
    category: "Web Application",
    thumbnail: "/assets/img/Project/02-thumbnail.jpg",
    image: "/assets/img/Project/02-full.jpg",
    imageKey: "p02",
    imageAlt: "Phone screenshot of an earlier version of this portfolio website",
    imageSize: { width: 540, height: 980 },
    description: "This web-site project was designed to express my knowledge and skills in the web development.",
    duration: "1 week",
    problem: "A place to express my knowledge and skills in web development.",
    solution: "This portfolio: first a static site, now a Next.js application with TypeScript and Framer Motion.",
    architecture: [] as string[],
    stack: ["Next.js", "React", "TypeScript", "Framer Motion"],
    github: "https://github.com/jegamax/Jegatheesh-Conspectus",
    demo: "https://jegamax.github.io/Jegatheesh-Conspectus/"
  },
  {
    id: 3,
    slug: "home-automation",
    title: "Home Automation using Google Assistant",
    category: "IoT",
    thumbnail: "/assets/img/Project/03-thumbnail.jpg",
    image: "/assets/img/Project/03-full.jpg",
    imageKey: "p03",
    imageAlt: "Home automation project controlling household appliances by voice through Google Assistant",
    imageSize: { width: 800, height: 449 },
    description: "Google assistant is AI (Artificial Intelligence) based voice command service. Using voice, we can interact with google assistant and it can search on the internet, schedule events, set alarms, control appliances, etc. This service is available on smartphones and Google Home devices. We can control smart home devices including lights, switches, fans and thermostats using our Google Assistant. We will build an application which can control home appliances. Here, we will control a 60W bulb and Table fan using Google Assistant service. We can also include many devices to control through our voice command. This application includes Google assistant along with Adafruit server and IFTTT service.",
    duration: "3 months",
    problem: "Controlling everyday appliances without touching a switch.",
    solution: "An application that controls a 60W bulb and a table fan by voice, with room to add more devices.",
    architecture: [] as string[],
    stack: ["Google Assistant", "Adafruit server", "IFTTT"],
    github: null as string | null,
    demo: null as string | null
  },
  {
    id: 4,
    slug: "smart-door-lock",
    title: "Smart Door Lock Using Face Recognition",
    category: "IoT",
    thumbnail: "/assets/img/Project/04-thumbnail.jpg",
    image: "/assets/img/Project/04-full.jpg",
    imageKey: "p04",
    imageAlt: "Raspberry Pi based door lock prototype with a camera for face recognition",
    imageSize: { width: 800, height: 533 },
    description: "The most important of feature of any home security system is to detect the people who enter or leave the house. Instead of monitoring that through passwords or pins unique faces can be made use of as they are one's biometric trait. These are innate and cannot be modified or stolen easily. The level of security can be raised by using face detection. The proposed face recognition door lock security system has been developed to prevent robbery in highly secure areas like home environment with lesser power consumption and more reliable standalone security device for both Intruder detection and for door security. This system is powered by raspberry pi circuit. Raspberry Pi electronic board is operated on Battery power supply, wireless internet connectivity by using USB modem, it includes camera, PIR motion sensor and a door. Whenever the person comes in front of the door, it recognizes the face and if it is registered then it unlocks the door, if the face is not registered it will raise an alarm and clicks a picture and send it on the registered number.",
    duration: "3 months",
    problem: "Passwords and PINs can be shared or stolen; a face is a biometric trait that cannot be modified or stolen easily.",
    solution: "A standalone, battery-powered door lock that recognises registered faces. An unknown face raises an alarm, captures a photo and sends it to the registered number.",
    architecture: [] as string[],
    stack: ["Raspberry Pi", "Camera", "PIR motion sensor", "USB modem"],
    github: null as string | null,
    demo: null as string | null
  },
  {
    id: 5,
    slug: "floor-cleaning-robot",
    title: "Floor Cleaning Robot",
    category: "Embedded",
    thumbnail: "/assets/img/Project/05-thumbnail.jpg",
    image: "/assets/img/Project/05-full.jpg",
    imageKey: "p05",
    imageAlt: "Floor cleaning robot prototype with a small cleaning brush",
    imageSize: { width: 488, height: 382 },
    description: "Automatic floor cleaning robot is an automated machine that facilitates the user to keep their place clean and hygienic. Many industries are working in the automation field to make autonomous cleaners. Now a day's major emphasis is given on the field of robotics for decreasing human efforts. Our aim is to construct a floor cleaning Robot that can detect the obstacles & objects in front of it and can continue moving, avoiding the obstacles, until the whole room is cleaned. It has a small brush attached to it to clean the floor.",
    duration: "3 months",
    problem: "Keeping a room clean takes human effort that automation can reduce.",
    solution: "A robot that detects obstacles in front of it and keeps moving around them until the whole room is cleaned, with a small brush attached.",
    architecture: [] as string[],
    stack: ["Obstacle detection", "Embedded control"],
    github: null as string | null,
    demo: null as string | null
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

export const availability = {
  label: "Currently",
  text: "Software Engineer at Aadhtech",
  detail: "Remote"
};

export const skillGroups = [
  {
    id: "backend",
    label: "Backend",
    items: [
      { name: "Java", usedAt: "Vaken Technologies" },
      { name: "Spring Boot", usedAt: "Vaken Technologies, Aadhtech" },
      { name: "Hibernate", usedAt: "Vaken Technologies" },
      { name: "JPA" }
    ]
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "Angular", usedAt: "Aadhtech" },
      { name: "React", usedAt: "Vaken Technologies" },
      { name: "JavaScript" },
      { name: "TypeScript" }
    ]
  },
  {
    id: "data",
    label: "Database",
    items: [
      { name: "MySQL", usedAt: "Vaken Technologies, Aadhtech" },
      { name: "PostgreSQL" },
      { name: "RDBMS" }
    ]
  },
  {
    id: "architecture",
    label: "Architecture",
    items: [
      { name: "Microservices" },
      { name: "REST APIs", usedAt: "Vaken Technologies, Aadhtech" },
      { name: "Distributed Systems" }
    ]
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    items: [
      { name: "AWS", usedAt: "Aadhtech: Lambda, SES, S3, Systems Manager" },
      { name: "CI/CD" }
    ]
  },
  {
    id: "ai",
    label: "AI-assisted development",
    items: [
      { name: "Cursor" },
      { name: "Claude" },
      { name: "AI-powered workflows" }
    ]
  }
];

export const philosophy = [
  { k: "Optimise", v: "I thrive in optimising systems, whether that means refining code architecture, improving performance or implementing CI/CD pipelines." },
  { k: "Own it", v: "Self-motivated and independent, with a customer-centric view of what gets built." },
  { k: "Together", v: "Agile and cross-functional: I lead client discussions for requirements and project updates." }
];

export const careerHighlights = [
  { figure: "20+", text: "features designed and developed for a Point-of-Sale application at Aadhtech" },
  { figure: "AWS", text: "scalable cloud architecture on Lambda, SES, S3 and Systems Manager" },
  { figure: "Admin", text: "enterprise portal for managing Android employee devices, built at Vaken Technologies" },
  { figure: "OCA", text: "Oracle Certified Associate, Java SE 8 Programmer (March 2021)" }
];
