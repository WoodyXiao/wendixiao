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
    URL: "",
    Title: "Vancouver Public Art website",
    Description:
      "The Vancouver Public Art website is created to promote the exploration of artworks throughout the city of Vancouver.It features new artworks to explore for visiting users, lists of artworks tailored for members, encourages community participation through rating and commenting on artworks by members and more functionalities.This report will describe the specifications of the website in detail, the process of gathering data, the design of the database, implementation of the database with data, and explain the backend operations for each page in the website.",
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
  },
];
function popupEvent(el, content, distant) {
  el.addEventListener(
    "click",
    () => {
      content.style.display = "flex";
      const list = document.querySelectorAll(".project-detail");
      for (let i = 0; i < list.length; i++) {
        list[i].style.transform = `translate3d(${distant}%, 0px, 0px)`;
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
        console.log("a");
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
  -100
);
popupEvent(
  document.getElementById("weather"),
  document.getElementById("details"),
  -200
);

closePopup(window, document.getElementById("details"));
const list = document.querySelectorAll(".close-icon");
for (let i = 0; i < list.length; i++) {
  closePopup(list[i], list[i]);
}
