// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Jesse",
  middleName: "",
  lastName: "Hurtado",
  message: "Welcome to my creative and research portfolio",
  icons: [
    {
      pre: "fab",
      image: "fa-github",
      url: "https://github.com/jhurtado19",
    },
    {
      pre: "fas",
      image:  "fa-camera",
      url: "https://jessehurtado.myportfolio.com/",
    },
    {
      pre: "fab",
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jesse-hurtado-811185288/",
    },
  ],
};

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/profile2.png"),
  imageSize: 350,
  message:
    "My name is Jesse Hurtado. I'm a 2023 graduate with a degree in Biology from the University of California, Monterey Bay. I specialize in creative thinking as a solutions architect advancing concepts into functional programs. I have experience in developing a range of website front ends to fulfill various purposes and utilizing technologies such as AWS, Alchemy, and Vercel to produce smooth full stack applications that not only look visually aesthetic, but also operate smoothly as well. I enjoy exploring the sciences, adventures to new places, and expanding my repertoire to overcome all challenges. ",
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
//  reposLength: 6,
//  specificRepos: [],
  list: [{
    category: "App",
    title: "Spatial Rate Map",
    url: "https://github.com/jhurtado19/2DRateMaps/blob/main/2D_Map_Report%20(4).pdf",
    repo: "https://github.com/jhurtado19/2DRateMaps/blob/main/RateMaps2D.m",
    notes: "Plots a map of the firing activity of neurons in a 200cm in diameter round platform environment. This project aimed at visualizing the firing activity of neurons and correlating it to their physical position in space.",
    thumbnail:require("../assets/img/rm.png"), 
   },
   {
    category: "App",
    title: "Point Source Approximation",
    url: "https://github.com/jhurtado19/PSA-Simulations/blob/main/PSA.pptx.pdf",
    repo: "https://github.com/jhurtado19/PSA-Simulations/blob/main/PSASIM.m",
    notes: "Simulation of two neurons firing in a homogenously conductive extracellular medium with simulated noise, based on Euler's Method and based on a mathematical approximation that treats the current source as a point allowing for simplified integration of the function, as described by Koch, Buzaki, and Gold.",
    thumbnail:require("../assets/img/psa.png"), 
   },
   {
    category: "App",
    title: "EKG Analysis",
    url: "https://github.com/jhurtado19/EKG-Analysis/blob/main/Final%20Project%20Report.pdf",
    repo: "https://github.com/jhurtado19/EKG-Analysis",
    notes: "Analysis using Python to operate an Arduino and a micro-EKG simultaneously during bench press workout to calculate change in voltage during concentric and eccentric muscle action to investigate possible power output and voltage correlation.",
    thumbnail:require("../assets/img/ekg.png"), 
   },
   {
    category: "App",
    title: "Morris-Lecar Model Simulations ",
    url: "https://github.com/jhurtado19/ML-Simulations/blob/main/phase_portrait.m",
    repo: "https://github.com/jhurtado19/ML-Simulations",
    notes: "A repository that contains a function based on Euler's Method that will simulate a the dynamics of a user specificed neuron at incrementally increasing applied currents, and will generate a plot with all of the simulated voltage traces, and will finally output a phase portait of all the simulated trials to visualize the dynamics of neurons at or near bifurcation points. ",
    thumbnail:require("../assets/img/MLHB.png"), 
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
    { name: "Matlab"},
    { name: "Microsoft Office"},
    { name: "R"},
    { name: "PyCharm"},
    { name: "Linux"},
    { name: "Signal Processing"},
    { name: "Data Visualization"},
    { name: "Python"},
    { name: "Automation"},
    { name: "Github"},
    { name: "Spyder"},
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
    "Please feel free to contact me at my email:",
  email: "jhurtado19@g.ucla.edu",
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
