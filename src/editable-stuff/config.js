// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Frankie",
  middleName: "",
  lastName: "Leyva",
  message: "Creative Developer driving innovation through experimentalism.",
  icons: [
    {
      pre: "fab",
      image: "fa-github",
      url: "https://github.com/MarineNewt",
    },
    {
      pre: "fab",
      image: "fa-twitter",
      url: "https://www.twitter.com/Newt936",
    },
    {
      pre: "fa",
      image: "fa-envelope",
      url: "mailto: frankieiii15@comcast.net",

    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile2.png"),
  imageSize: 375,
  message:
    "My name is Frankie Leyva. I'm a 2022 graduate with a degree in Biology from the University of California, Monterey Bay. I specialize in creative thinking as a solutions architect bringing flair to projects with immersive user experiences. I enjoy exploring the unknown, giving life to unique concepts, and expanding my repertoire to overcome all challenges. ",
  resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
//  gitHubUsername: "MarineNewt",
//  reposLength: 6,
//  specificRepos: [],
  list: [{
    category: "App",
    title: "Ship Wars",
    url: "https://www.shipwars.net/",
    repo: "https://github.com/MarineNewt/ShipGame",
    notes: "Ship Wars is a real time battle game on the polygon network using NFTs as game pieces with actions taken on chain. To begin users pick stats and mint a ship NFT altered based on their token's assigned stats. Then users can use their ship to 'fire' at others in an attempt to sink their ships thereby burning their opponet's NFT and claiming a matic reward for each opponet sunk. ",
    thumbnail:require("../assets/img/shipwars.png"), 
   },
   {
    category: "App",
    title: "Twitter Automation",
    url: "https://twitter.com/OceanOfTheDay",
    repo: "https://github.com/MarineNewt/TwitterAutomation",
    notes: "Automated twitter bot posting randomized emoji art daily. My Twitter bot code can be modified to pull data from any available APIs to aggregate data and post real time updated statistics to twitter.",
    thumbnail:require("../assets/img/twitterauto.jpg"), 
   },
   {
    category: "App",
    title: "On Chain Canvas",
    url: "https://canvasonchain.com/",
    repo: "https://github.com/MarineNewt",
    notes: "On Chain Canvas is an dynamic & interactive on-chain NFT. The token featuring a SVG canvas can be altered by holders one pixel at a time, once every 600 blocks. The evolving piece shows the capabilities of NFTs to be developed by communities over time and are not limited to static instances of art.",
    thumbnail:require("../assets/img/canvasonchain.png"), 
   },
   {
    category: "App",
    title: "Love Token",
    url: "https://opensea.io/collection/love-spreadlove",
    repo: "https://github.com/MarineNewt",
    notes: "Love token is a proliferative NFT breaking the standard means of NFT ownership and mobility. This token whenever transfered by any means will mint a new token to the wallet the token was tranferred from, thereby making anyone in possesion of Love Token a lifelong holder of the collection.",
    thumbnail:require("../assets/img/Love.png"), 
   },
   {
    category: "App",
    title: "Project Landing Page",
    url: "https://galaxyfighterkongz.netlify.app/",
    repo: "https://github.com/MarineNewt/GalaxyFK-website",
    notes: "NFT Project landing page presenting the project along with its art, roadmap, and team.",
    thumbnail:require("../assets/img/galalter.png"), 
   },
   {
    category: "App",
    title: "Portfolio Website",
    url: "https://portfolio-newt.netlify.app/",
    repo: "https://github.com/MarineNewt/PortfolioWebsite",
    notes: "This website you are viewing here! A online portfolio showcasing my capabilities and projects.",
    thumbnail:require("../assets/img/portfoliometa.png"), 
   },
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/profile2.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/profile2.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Solidity"},
    { name: "Contract Auditing"},
    { name: "HTML/CSS"},
    { name: "Node"},
    { name: "React"},
    { name: "Alchemy"},
    { name: "Python"},
    { name: "Github"},
  ],
  softSkills: [
    { name: "Problem Solving"},
    { name: "Communication"},
    { name: "Adaptability"},
    { name: "Creativity"},
    { name: "Optimistic"},
    { name: "Goal-Oriented"},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Currently accepting roles within Web3 Development fulfilling both Contract and Front-end needs. If you have an oppurtunity to share, have questions about myself, or simply want to say hi, please reach out to me via Email at:",
  email: "frankieiii15@comcast.net",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Solidity Developer',// Here Add Company Name
      companylogo: require("../editable-stuff/profile2.png"),// Add logo
      date: 'June 2018 – Present',//Add dates
    },
    {
      role: 'Front-End Developer',
      companylogo: require("../editable-stuff/profile2.png"),
      date: 'May 2017 – May 2018',
    },
  ]
}


export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
