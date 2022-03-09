const publicArt = [
  {
    subTitle: "Below is the ER diagram for our public art website: ",
    img: "./assets/img/publicart/content/public1.JPG",
    content: "",
  },
  {
    subTitle: "Database Structure in myPHP:",
    img: "./assets/img/publicart/content/public2.PNG",
    content: "",
  },
  {
    img: "./assets/img/publicart/content/public3.SVG",
    content:
      "All relationships have a many-to-many relationship. Members can comment on and rate multiple artworks, and artworks can contain comments and ratings from different users. Members can have multiple artworks in their favorites list and artworks can belong to different members’ lists. This is also the case for a member’s following list and artists. We decided in the end to have a MemberSetting table to save each member’s preferences as it worked better than using cookies. In each relationship, unique ID’s are assigned to each record and used as the primary key to easily distinguish between each of them.  After downloading the Excel spreadsheets of the public art and artists data, artwork names were added manually to the public art spreadsheet as explained previously. Unused columns such as photo credit or URL to the City of Vancouver website were removed. We then created the tables in the database in myPHP and imported the public art spreadsheet for the artwork table and artists spreadsheet for the artist table. Primary keys and foreign keys are then set. ",
  },
  {
    reportURL:
      "https://docs.google.com/document/d/1S6ugw-3hkn-ho02ipkG7Y0xfqz2d9Cg28cIjpvvUMO8/edit?usp=sharing",
  },
];
const sfuPet = [
  {
    subTitle: "Below is the wireframe for the desktop device in figma: ",
    img: "./assets/img/pet/content/pet1.PNG",
    content: "This is content",
  },
  {
    subTitle: "Below is the wireframe for the mobile device in figma: ",
    img: "./assets/img/pet/content/pet2.PNG",
    content: "This is content",
  },
];
const tracker = [
  {
    apiURL: [
      {
        name: "News API",
        url: "https://newsapi.org/",
      },
      {
        name: "COVID 19 API",
        url: "https://covid19api.com/",
      },
    ],
  },
];
const weather = [
  {
    apiURL: [
      {
        name: "OPEN WEATHER API",
        url: "https://openweathermap.org/api",
      },
    ],
  },
];
const projectDetails = [
  {
    id: "publicArt",
    img: [
      "./assets/img/publicart/p1.PNG",
      "./assets/img/publicart/p2.PNG",
      "./assets/img/publicart/p3.PNG",
      "./assets/img/publicart/p4.PNG",
      "./assets/img/publicart/p5.PNG",
      "./assets/img/publicart/p6.PNG",
      "./assets/img/publicart/p7.PNG",
      "./assets/img/publicart/p8.PNG",
    ],
    Category: "Web Development",
    Language: "Ajax Jquery MySQL PHP",
    Type: "Academic Project (IAT 352)",
    Code: "https://github.com/WoodyXiao/IAT352-Final-Project",
    URL: "https://youtu.be/gCQtmSpzUAo",
    Title: "Vancouver Public Art website",
    Description:
      "The Vancouver Public Art website is created to promote the exploration of artworks throughout the city of Vancouver.",
    Details:
      "The Vancouver Public Art website is created to promote the exploration of artworks throughout the city of Vancouver.It features new artworks to explore for visiting users, lists of artworks tailored for members, encourages community participation through rating and commenting on artworks by members and more functionalities.This report will describe the specifications of the website in detail, the process of gathering data, the design of the database, implementation of the database with data, and explain the backend operations for each page in the website.",
    Content: publicArt,
  },
  {
    id: "tracker",
    img: [
      "./assets/img/tracker/tracker1.PNG",
      "./assets/img/tracker/tracker2.PNG",
      "./assets/img/tracker/tracker3.PNG",
    ],
    Category: "Web Development",
    Language: "JavaScript Fetch",
    Type: "Personal Project",
    Code: "https://github.com/WoodyXiao/covid-19-tracker",
    URL: "https://woodyxiao.github.io/covid-19-tracker/",
    Title: "Covid 19 Tracker",
    Description:
      "A simple covid-19 tracker that show stats of countries as well as the world. Geoplugin.js is not using at this moment. Since the News API plan limitation, the part of showing different countries covid-19 news are not available and only work on localhost.",
    Details:
      "Covid-19 tracker is created for checking different countries pandemic stat, including the positive case confirmed, death amount and recovery amount, as well as the global stat. those data are being fetching from covid-19 API. the second function of this website is fetching all the least news about pandemic from the country that being search. these news data are fetching from the news API.",
    Content: tracker,
  },
  {
    id: "weather",
    img: [
      "./assets/img/weather/weather1.PNG",
      "./assets/img/weather/weather2.PNG",
      "./assets/img/weather/weather3.PNG",
      "./assets/img/weather/weather4.PNG",
    ],
    Category: "Web Development",
    Language: "React.js Weather API",
    Type: "Personal Project",
    Code: "",
    URL: "",
    Title: "Weather Checker",
    Description:
      "A simple Weather chcker to search any city's weather and its details, predict weather",
    Details:
      "This is a personal project that using React.js, user can type cicty name in the input field, and seach its weather information, and including 10 days futuer weather prediction. all those of data are getting from OPEN WEATHER API, bseide, the layout of this website is resiponsive, showing properly in the mobile device size. ",
    Content: weather,
  },
  {
    id: "pet",
    img: [
      "./assets/img/pet/pet1.PNG",
      "./assets/img/pet/pet2.PNG",
      "./assets/img/pet/pet3.PNG",
      "./assets/img/pet/pet4.PNG",
      "./assets/img/pet/pet5.PNG",
      "./assets/img/pet/pet6.PNG",
      "./assets/img/pet/pet7.PNG",
      "./assets/img/pet/pet8.PNG",
      "./assets/img/pet/pet9.PNG",
      "./assets/img/pet/pet10.PNG",
      "./assets/img/pet/pet11.PNG",
      "./assets/img/pet/pet12.PNG",
      "./assets/img/pet/pet13.PNG",
      "./assets/img/pet/pet14.PNG",
    ],
    Category: "Web Development",
    Language: "HTML CSS JS",
    Type: "Academic Project (IAT 235)",
    Code: "https://github.com/WoodyXiao/xwd-website-practice",
    URL: "https://woodyxiao.github.io/xwd-website-practice/",
    Title: "SFUPet Business Website",
    Description:
      "Simple school project, a mockup website for therapist pet bussiness",
    Details:
      "Using HTML, CSS, JS to redesign an responsible mockup webstite for SFU therapist bet bussiness",
    Content: sfuPet,
  },
];
function popupEvent(el, content, distant) {
  el.addEventListener(
    "click",
    (e) => {
      if (
        e.target === el ||
        e.target == el.firstElementChild ||
        e.target == el.querySelector(".portfolio_title")
      ) {
        console.log(el.firstElementChild);
        content.style.display = "flex";
        const list = document.querySelectorAll(".project-detail");
        for (let i = 0; i < list.length; i++) {
          list[i].style.transform = `translate3d(${distant}%, 0px, 0px)`;
        }
      }
    },
    false
  );
}
function closePopup(window, content) {
  window.addEventListener(
    "click",
    (e) => {
      if (e.target === content) {
        document.getElementById("details").style.display = "none";
      }
    },
    false
  );
  window.addEventListener(
    "touchstart",
    (e) => {
      if (e.target === content) {
        console.log("a");
        document.getElementById("details").style.display = "none";
      }
    },
    false
  );
}

const box = document.querySelector(".project-detail-window");
box.innerHTML = template("tpl-project-details", {
  projectDetails: projectDetails,
});

popupEvent(
  document.getElementById("public"),
  document.getElementById("details"),
  0
);
popupEvent(
  document.getElementById("tracker"),
  document.getElementById("details"),
  -109
);
popupEvent(
  document.getElementById("weather"),
  document.getElementById("details"),
  -217
);
popupEvent(
  document.getElementById("pet"),
  document.getElementById("details"),
  -326
);

closePopup(window, document.getElementById("details"));
const list = document.querySelectorAll(".close-icon");
for (let i = 0; i < list.length; i++) {
  closePopup(list[i], list[i]);
}
