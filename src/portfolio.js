/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Prince's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Prince Amit Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/"
  }
};

//Home Page
const greeting = {
  title: "Prince Amit",
  logo_name: "PrinceAmit",
  nickname: "Python_monk",
  subTitle: "A passionate individual that always loves to work on practical issues to produce a sustainable and scalable technical system that impacts society.",
  resumeLink:
    "https://drive.google.com/file/d/18zLynWwG7Lnx-yZLzexDBWlv41DYO3AK/view?usp=sharing",
  portfolio_repository: "https://github.com/princeamitlali",
  githubProfile: "https://github.com/princeamitlali"
};

const socialMediaLinks = [
{
  // github :"https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"
},
  {
    name: "Github",
    link: "https://github.com/princeamitlali",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/princeamitlali/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UC8T3_nlM2FkjIBocbVWflHA",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:princeamitlali@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/princeamitlali",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/princeamitlali/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/princeamitlali/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",

      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using Angular",
        "⚡ Worked on diffrent type of databases",
        "⚡ Creating application backend in Node, Express ,Django",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
          style: {
            color: "#DD0031",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on Amazon cloud platform",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Expertise in serverless backend development using AWS Services",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "cib:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/princeamitlali",
    },
    {
      siteName: "Leet Code",
      iconifyClassname: "cib:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/princeamitlali/",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@princeamitlali",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/princeamit",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Bakhtiyarpur College of Engineering",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "bce_logo.jpg",
      alt_name: "B.C.E Patna",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Was in the top 10 percentile students",
      ],
      website_link: "https://bcebakhtiyarpur.org/s/prince-amit/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to machine Learning",
      subtitle: "- Prof. Balaraman Ravindran",
      logo_path: "iitm.png",
      certificate_link:
        "https://archive.nptel.ac.in/noc/Ecertificate/?q=noc18-cs26/NPTEL18CS26S37200991810090917.jpg",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Big Social Data Analysis",
      subtitle: "- Erik Cambria",
      logo_path: "iitp.png",
      certificate_link:
        "https://drive.google.com/file/d/11MGORemW70SIFOA9XjAb8cVObhGDOxwt/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Unsupervised data mining ",
      subtitle: "-  Stefan Karmar",
      logo_path: "iitp.png",
      certificate_link:
        "https://drive.google.com/file/d/1W0k2jtgoOBdaq8AKgtEdItMUwi7KIRw6/view",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Machine Learning & Artificial Intelligence Workshop",
      subtitle: "- H T India Labs",
      logo_path: "ht_india.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "AI from data centers to the Edge",
      subtitle: "- Intel",
      logo_path: "intel1.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#0071C5",
    },
    {
      title: "Django 2.2 & Python | The Ultimate Web Development Bootcamp",
      subtitle: "- Nick Walter",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#A435F0",
    },
    {
      title: " Build a Python REST API with the Django Rest Framework",
      subtitle: "- Justin Mitchel",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#A435F0",
    },
    {
      title: "Applied Machine Learning in Python",
      subtitle: "- Kevyn Collins-Thompson",
      logo_path: "michigan.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00274c",
    }
  ],
};

// score card
const scorecards = {
  scorecards: [
    {
      title: "Introduction to machine Learning",
      subtitle: " 56 %",
      logo_path: "iitm.png",
      certificate_link:
        "https://archive.nptel.ac.in/noc/Ecertificate/?q=noc18-cs26/NPTEL18CS26S37200991810090917.jpg",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Big Social Data Analysis",
      subtitle: "90 %",
      logo_path: "iitp.png",
      certificate_link:
        "https://drive.google.com/file/d/1BnqcfzKVRUc9pBE0Q7z2rVVkarlFHJPh/view?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Unsupervised data mining ",
      subtitle: "100 %",
      logo_path: "iitp.png",
      certificate_link:
        "https://drive.google.com/file/d/1W0k2jtgoOBdaq8AKgtEdItMUwi7KIRw6/view?usp=sharing",
      alt_name: "Google",
      color_code: "#0C9D5899",
    }

  ],
};


// Achievements card
const Achievements = {
  Achievements: [
    {
      title: "Introduction to machine Learning",
      subtitle: "- Prof. Balaraman Ravindran",
      logo_path: "iitm.png",
      certificate_link:
        "https://archive.nptel.ac.in/noc/Ecertificate/?q=noc18-cs26/NPTEL18CS26S37200991810090917.jpg",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Big Social Data Analysis",
      subtitle: "- Erik Cambria",
      logo_path: "iitp.png",
      certificate_link:
        "https://drive.google.com/file/d/1BnqcfzKVRUc9pBE0Q7z2rVVkarlFHJPh/view?usp=sharing",
      alt_name: "iitp",
      color_code: "#00000099",
    },
    {
      title: "Unsupervised data mining ",
      subtitle: "-  Stefan Karmar",
      logo_path: "iitp.png",
      certificate_link:
        "https://drive.google.com/file/d/1W0k2jtgoOBdaq8AKgtEdItMUwi7KIRw6/view",
      alt_name: "iitp",
      color_code: "#0C9D5899",
    },
    {
      title: "Machine Learning & Artificial Intelligence Workshop",
      subtitle: "- H T India Labs",
      logo_path: "ht_india.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:"I have experience working with the Indian Institute of Technology as an ML and DL researcher in the fields of computer vision and natural language processing. I have also collaborated with a few multinational corporations, primarily in the field of machine learning and now working on Mindtree's Amazon Web Services cloud ",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Mindtree",
          company_url: "https://www.mindtree.com/",
          logo_path: "mind.png",
          duration: "march 2021 - PRESENT",
          location: "Banglore",
          description:"As a full-stack developer, I use Angular in the front end and Python with AWS services at the back end of the applications I develop. I am collaborating on a project with a leading real estate firm that operates in the United States and Canada. Our main goal is to shorten the drawn-out property investment processes ",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "MACHINE LEARNING INTERN",
          company: "vestellalab.com",
          company_url: "http://vestellalab.com/",
          logo_path: "vestella.png",
          duration: "January 2020 - july 2020",
          location: "Seoul,korea",
          description:"I worked as a machine learning developer to develop an anti-cheating system that might cut cheating by up to 40% while simultaneously improving data quality by 20% through scrutinising and automating the pipeline for data screening and anomaly detection ",
          color: "#000000",
          certificate_link:
        "https://drive.google.com/file/d/1PC8oBGbaL3mPRWsIbvd0OZCLRXZzxYVN/view",
        },
        {
          title: "Research Intern",
          company: "Indian Institute of Technology",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "iitp.png",
          duration: "may 2019 - july 2019",
          location: "Patna",
          description:"The Extractive Summarization model was trained in NLP to a 41.59 R-score. In contrast, computer vision used data processing to produce more than 5 lakh data points that were used with a paragraph generator model to produce paragraphs. Moreover, the dataset for the multilingual research was annotated.",
          color: "#0071C5",
          certificate_link:
        "https://drive.google.com/file/d/1aZwDq8bxlZd-yoz-fvjXVuthgMheXKf6/view?usp=sharing",
        },
        {
          title: "Web Developer Intern",
          company: "B.E.L.T.R.O.N",
          company_url:
            "https://bsedc.bihar.gov.in/",
          logo_path: "beltron.png",
          duration: "may 2018 - August 2018",
          location: "Patna",
          description:"For marine engineers, we created a fully functional website with a recommendation and suggestion system built on SQL.",
          color: "#0071C5",
          certificate_link:
        "https://drive.google.com/file/d/1tKr3KzO87diGRiwIgwmxRW1hiky8OKFu/view?usp=sharing",
        },
      ],
    },
    {
      title: "Achievements and Awards",
      experiences: [
        {
          title: "All India Topper",
          company: "Ministry of Human resource development",
          company_url: "https://www.india.gov.in/official-website-ministry-human-resource-development-0",
          logo_path: "mhrd.png",
          duration: "2013",
          location: "New Delhi",
          description:"1/100 in India were congratulated by the prime minister. MHRD chose them based on their academic performance in the secondary test.",
          color: "#4285F4",
          certificate_link:
          "https://drive.google.com/file/d/1GM3i8W4Q0l427qsJdW1KrXTq8YtwLwVx/view",
          
        },
        {
          title: "World Skill Competition",
          company: "B.S.D.M",
          company_url: "https://skillmissionbihar.org/",
          logo_path: "bsdm.png",
          duration: "2019",
          location: "Patna, Bihar",
          description:"Bronze medalist in the World skill competition organized by the skill devlopment department of Bihar",
          color: "#D83B01",
          certificate_link:"https://drive.google.com/file/d/1R5u3IpdTi98X6YB020orI8b5l1x0klf8/view",
        },
        {
          title: "Ideathon",
          company: "Department of Information Technology",
          company_url: "https://dit.bihar.gov.in/",
          logo_path: "dit.png",
          duration: "2019",
          location: "Patna, Bihar",
          description:"My proposal PhoNav, which was essentially an idea for a navigation system for those who are blind or visually impaired, was chosen among 35 others from across the country to present to major companies and IT giants in India.",
          color: "#000000",
          certificate_link:"https://drive.google.com/file/d/1UA_zYZcA4QWKoD4dha99sWjY-kacUAxk/view",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:"My designs utilise a wide range of cutting-edge technological techniques. Using cloud infrastructure, I have the most experience developing Data Science projects and deploying them to web apps ",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pp.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Angular, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://medium.com/@princeamitlali",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      " H No 410, Vivan residency, 7th cross. 3rd main, 1st phase, Mylasandra Global Village back gate, Bengaluru - 560059",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/VIVAAN+RESIDENCY+PG+for+Gents+%26+Service+Apartments/@12.9141402,77.4981665,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae3f1c4bab60f5:0x11e5ce6c9e2469ae!8m2!3d12.9141402!4d77.5003552",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 6202421727",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
  scorecards,
  Achievements
};
