const publicArt = [
  {
    subTitle: "1. Below is the ER diagram for our public art website: ",
    img: ["./assets/img/publicart/content/public1.PNG"],
    content:
      "Firstly, me and my groupmate have a discussion on the design of databases to hold all information that our website will need. So, we use a online software which is called diagrams.net to draw general ER diagrams. Define all these database diagram relationships and decide each primary key and foreign key.",
  },
  {
    subTitle: "2. Database Structure in myPHP:",
    img: ["./assets/img/publicart/content/public2.PNG"],
    content:
      "Secondly, after we done the design, we created these databases in the  open-source cross-platform web server solution stack package, XAMPP, there are 8 tables in total, which are 'artist', 'artwork', 'comment', 'favouritelist', 'followinglist', 'member', 'memerbersetting', and 'ratting'. ",
  },
  {
    subTitle: "3. Relationship of each tables in visualization:",
    img: ["./assets/img/publicart/content/public3.PNG"],
    content:
      "All relationships have a many-to-many relationship. Members can comment on and rate multiple artworks, and artworks can contain comments and ratings from different users. Members can have multiple artworks in their favorites list and artworks can belong to different members' lists. This is also the case for a member's following list and artists. We decided in the end to have a 'MemberSetting' table to save each member's preferences as it worked better than using cookies. In each relationship, unique IDs are assigned to each record and used as the primary key to easily distinguish between each of them.  After downloading the Excel spreadsheets of the public art and artists data, artwork names were added manually to the public art spreadsheet as explained previously. Unused columns such as photo credit or URL to the City of Vancouver website were removed. We then created the tables in the database in the myPHP and imported the public art spreadsheet for the artwork table and artists spreadsheet for the artist table. Primary keys and foreign keys and then being set.",
  },
  {
    subTitle: "4. Login fucntion in Code (login.php)",
    img: ["./assets/img/publicart/detail/login/login.PNG"],
    content:
      "For one of the login functionality of this web application, I created a 'login.php' file and this file is designed for the login html page, with the login form, and use the 'POST' method to submit the login request.",
  },
  {
    subTitle: "4.1 Login fucntion in Code (register.php)",
    img: ["./assets/img/publicart/detail/login/register.PNG"],
    content:
      "This PHP file is a html page for new user register, and also with the PHP form and 'POST' method for submitting the new account register request.",
  },
  {
    subTitle: "4.2 Login fucntion in Code (loginUser.php)",
    img: ["./assets/img/publicart/detail/login/user.PNG"],
    content:
      "In this PHP file, there are two main functions, one is registering a new account while the other one is for logging. So, the first method, when user clicked the submit button on ‘register.php’, it will use POST method to access all the information that input by user, there are couple helper functions to check the account number, username, or email address has been registered or not. if not, then will call another function helper to create a new data record in the database of user. It means created new account successfully, then it will call the login function automatically by transferring account information and password information as parameters. On the other hand, if user click log in button on the ‘login.php’, which is mean user already have account and try to login, therefore, I used one of PHP built-in method which is 'SESSION' to store user's username and it's password, after make sure there is no mistake between the password that in the database and by the user, it will call the login function at the end.",
  },
  {
    subTitle: "5. Live Search autocomplete fucntion in Code (fetch_data.js)",
    img: [
      "./assets/img/publicart/detail/autocomplete/autocompletejs.PNG",
      "./assets/img/publicart/detail/autocomplete/autocompletejs2.PNG",
    ],
    content:
      "In fetch_data.js file, I first created a function named 'autocomplete()' with the parameter by using jQuery, inside the function, calling the 'ajax()' method, passing the configs as show above that URL is 'filterData/autocomplete.php’, type is 'POST', data with the key name of search and its input value. When the data getting successfully, passing the data into the selected DOM, class name of 'autocomplete'. Next, I selected a input filed with the ID of 'form1', and adding a method of ‘keyup()’ to it, inside, there is a variable named 'input' will store the information that user just type, and then pass 'input' to the function of 'autocomplete(input)', then will go through to that ‘autocomplete.php’ file right away.",
  },
  {
    subTitle:
      "5.1 Live Search autocomplete fucntion in Code (autocomplete.php)",
    img: ["./assets/img/publicart/detail/autocomplete/autocomplete.PNG"],
    content:
      "In this 'autocomplete.php' file will receive a request sent by the ajax in fetch_data.js by using 'isset($_POST['search'])'. Created a PHP variable of '$search' to store the information that input by the user, and pass this into a preset MySQL query with using 'LIKE' to search any record match the information by user. next, called the function helper that responsible of working on getting the data from database, and save into '$result'. In the end, create some DOM template and set this result as contents and then pass to the '$output'. And the main page, this information will be there.",
  },
  {
    reportURL:
      "https://docs.google.com/document/d/1S6ugw-3hkn-ho02ipkG7Y0xfqz2d9Cg28cIjpvvUMO8/edit?usp=sharing",
  },
];
const sfuPet = [
  {
    subTitle:
      "1. Design the wireframe for the website in the desktop device size by using Figma: ",
    img: ["./assets/img/pet/content/pet1.PNG"],
    content:
      "First of all, We discuss and design a wireframe of the website by implementing Figma. Design each paages layout and font-size.",
  },
  {
    subTitle:
      "2. Design the wireframe for the website in mobile device size by using Figma",
    img: ["./assets/img/pet/content/pet2.PNG"],
    content:
      "Secondly, When we have an layout design for the desktop size, We then converted the design into the mobile device size. ",
  },
  {
    subTitle: "3. Final result in the main page",
    img: ["./assets/img/pet/detail/1.1.gif"],
    content: "",
  },
  {
    subTitle: "4. Final result in the second page",
    img: ["./assets/img/pet/detail/2.2.gif"],
    content: "",
  },
];
const tracker = [
  {
    subTitle:
      "1. For the country selection and country search function (countries.js) ",
    img: ["./assets/img/tracker/detail/country/countryjs.PNG"],
    content:
      "As the image shown above, I first create a long list that include almost all the country name and its code. Code is for using a keyword to fetch different country covid-19 stats from covid-19 API. Nextly, to create an effect that showing a country list when user click the change button, I first use 'querySelector()' to select the button DOM, then adding a 'eventListener' to this, and then use 'innerHTML' to add the html tag '<li></li>' with looping through the country list that I created early. For the input setting, and country filter effect. I first used 'querySelector()' to select input DOM, and use a 'value' variable to store the user input content, then call the JavaScript method 'startsWith()' to filter the country names that match to the user input by adding or removing the CSS class of 'hide' or 'show'.",
  },
  {
    subTitle:
      "1.1 For the country selection and country search function (countries.js) ",
    img: [
      "./assets/img/tracker/detail/country/country.PNG",
      "./assets/img/tracker/detail/country/country1.PNG",
    ],
    content:
      "So, as the image as shown above, this will be the general effect look like after the code implement. When use click 'change' button, a list of country name will be shown, then if user type country name in the input field, the result of list will be changed based on the content that input by user.",
  },
  {
    subTitle:
      "2. For the country selection and country search function (js.js) ",
    img: ["./assets/img/tracker/detail/fetch/tracker.PNG"],
    content:
      "To build a function that could fetch different countries' covid-19 stats based on different countries that selected by users. first of all, I have created a list of variables to get all the DOM elements that I need by 'querySelector()', I also created some empty array lists to hold covid-19 death case data, recovery data, total amount data and covid-19 news data etc.",
  },
  {
    subTitle:
      "2.1 For the country selection and country search function (js.js) ",
    img: ["./assets/img/tracker/detail/fetch/fetchdata.PNG"],
    content:
      "In the second step, I created a function that called 'api_fetch', inside the function, I called a 'fetch()' with pass the interface of Covid-19 API, and method type of 'GET', when getting data from interface successfully, will be saved into each array lists that I created early. For the part of global stats, I used regular expression like '/B(?=(d{3})+(?!d))/g' to make the number look better for reading.",
  },
  {
    subTitle:
      "2.2 For the country selection and country search function (js.js) ",
    img: ["./assets/img/tracker/detail/fetch/updatestat.PNG"],
    content:
      "In the third step, I created a updateStats() function, inside the function, as I already got the array list of all data of covid-19 cases, death amounts, recovered amounts, from the pass until now, to get the currently data, I used the last data to subtract the last second one. so that, I could get all current data. And then I put those data into the selected DOM and show them into the main page.",
  },
  {
    subTitle:
      "2.3 For the country selection and country search function (js.js) ",
    img: ["./assets/img/tracker/detail/fetch/chart.PNG"],
    content:
      "For the functionality of display data into the chart form, I used a free, open-source JavaScript library called 'Chart.js' to visualize these data. Then, I create a new Chart object called 'my_chart', and I initialize the config of chart as shown above. Passing those array lists that I created early into the 'datasets', setting up the X-axis, and Y-axis, and also format the month name, and make it look better for read.",
  },
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
    subTitle: "1. Import React, and useState, API setting",
    img: ["./assets/img/weather/detail/1.PNG"],
    content:
      "Firstly, I import ‘React’, and ‘useState’ in the app.js file. Inside the 'function App(){}', I declared one new state variable called 'query' for holding the query that will be input by user, one object called 'weather' for storing the today weather data that getting from Weather.API, and also one arraylist called 'weather1' for storing the dataset for weather of forecast 7 days that from Weather.API.",
  },
  {
    subTitle: "2. Created search, FetchWeather. FetchFrocastWeather functions",
    img: ["./assets/img/weather/detail/2.PNG"],
    content:
      "In the next step, I created three functions, one is called 'FetchWeather()', which will fetch data from the API, the data will be depended on the city name that input by user. the second function is called 'FetchFrocastWeather()', which is using for fetching the forecast weather data. the last function is 'search()', this function will have the last two functions inside, and it will be called when user finished typing and click the 'search' button.",
  },
  {
    subTitle: "3. Date formate function and windDirection function",
    img: ["./assets/img/weather/detail/3.PNG"],
    content:
      "To make the date easy to read, I created a data formatter called 'dateBuilder()' for it as the time coming back from the API is a form of timestamp. On the other hand, the second function is 'windDirection()', this function is designed for make some data are more easy to understand, such as the direction of wind. as the data are just degree, without text explanation, they will be hard to understand.",
  },
  {
    subTitle: "4. Export the output into the page",
    img: ["./assets/img/weather/detail/4.PNG"],
    content:
      "Lastly, inside the 'return()', there are will be mainly HTML by passing the data from API when user searched a city. As 'weather', 'weather1', 'query', has already store data from the API after click search button. I just looped through the 'weather' object and 'weather1' array list to DOM elements.",
  },
  {
    apiURL: [
      {
        name: "OPEN WEATHER API",
        url: "https://openweathermap.org/api",
      },
      {
        name: "React Document",
        url: "https://reactjs.org/docs/hooks-intro.html",
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
    Category: "Academic Project",
    Language: "Ajax Jquery MySQL PHP",
    Type: "Group",
    Name: ["Woody Xiao (Web developer)", "Jasmine Wong (UX/UI)"],
    Code: "https://github.com/WoodyXiao/IAT352-Final-Project",
    URL: "https://youtu.be/gCQtmSpzUAo",
    Title: "Vancouver Public Art website",
    Description:
      "The Vancouver Public Art website is created to promote the exploration of artworks throughout the city of Vancouver.",
    Details:
      "The Vancouver Public Art website is created to promote the exploration of artworks throughout the city of Vancouver.It features new artworks to explore for visiting users, lists of artworks tailored for members, encourages community participation through rating and commenting on artworks by members and more functionalities.This report will describe the specifications of the website in detail, the process of gathering data, the design of the database, implementation of the database with data, and explain the backend operations for each page in the website.",
    Content: publicArt,
    Reflection:
      "After we finished this project, my team members and I all learned and understood how to correctly create ER database and the relatively basic PHP syntax above. In addition, I also learned how to combine the jQuery syntax using ajax requests to get new information don't need to update the pages at the same time, it is very helpful to me, I also use this knowledge to create a user comment function, when the user to send comments, pages don't need to be updated, new comment content is displayed on the page, this will improve the page-friendly experience. However, I also feel throughout the project, I do not perfect, I should control management page to add a background, in this page, managers can modify or add or delete all the data in it, it is a pity that I didn't do it, and my project file path structure is a bit too bloated, there are some store I'm a little too much, so good method that could lead to me The project performance of PHP is not in the ideal state. In a word, I still need more practice and more in-depth knowledge points in PHP.",
  },
  {
    id: "tracker",
    img: [
      "./assets/img/tracker/tracker1.PNG",
      "./assets/img/tracker/tracker2.PNG",
      "./assets/img/tracker/tracker3.PNG",
    ],
    Category: "Personal Project",
    Language: "JavaScript Fetch chart.js",
    Type: "Personal",
    Name: ["Woody Xiao"],
    Code: "https://github.com/WoodyXiao/covid-19-tracker",
    URL: "https://woodyxiao.github.io/covid-19-tracker/",
    Title: "Covid 19 Tracker",
    Description:
      "A simple covid-19 tracker that show stats of countries as well as the world. Geoplugin.js is not using at this moment. Since the News API plan limitation, the part of showing different countries covid-19 news are not available and only work on localhost (like live server extension in VSCode).",
    Details:
      "Covid-19 tracker is created for checking different countries pandemic stat, including the positive case confirmed, death amount and recovery amount, as well as the global stat. those data are being fetching from covid-19 API. the second function of this website is fetching all the least news about pandemic from the country that being search. these news data are fetching from the news API.",
    Content: tracker,
    Reflection:
      "During the process of creating this project, I have learnt a lot of basic knowledges about the 'fetch' methods and 'async' function. In addition, I also have a very basic understanding of Interface, API, learn how to use 'fetch' method to fetch data from API. This is very interesting and also a little bit challenged to me. However, I also think this project could be done better, like the UI design, or add more functionality to it, or make into multi-pages for different functions.",
  },
  {
    id: "weather",
    img: [
      "./assets/img/weather/weather1.PNG",
      "./assets/img/weather/weather2.PNG",
      "./assets/img/weather/weather3.PNG",
      "./assets/img/weather/weather4.PNG",
    ],
    Category: "Personal Project",
    Language: "React.js Weather API",
    Type: "Personal",
    Name: ["Woody Xiao"],
    Code: "",
    URL: "",
    Title: "Weather Checker",
    Description:
      "A simple Weather chcker to search any city's weather and its details, predict weather",
    Details:
      "This is a personal project that using React.js, user can type cicty name in the input field, and seach its weather information, and including 10 days futuer weather prediction. all those of data are getting from OPEN WEATHER API, bseide, the layout of this website is resiponsive, showing properly in the mobile device size. ",
    Content: weather,
    Reflection:
      "To build this project, I have learned some basic knowledges of React, like its syntax, methods. After done the project, I feel like have a basic understanding of using React framework to fetch data from API. I also have a general idea of the Lifecyle of React. However, I think I still need more time to study deep in React, All I have to do is keep practice and practice in my spare time.",
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
    Category: "Academic Project",
    Language: "HTML CSS JS",
    Type: "Group",
    Name: ["Woody Xiao (Front-end)", "Kelly Hu (UX/UI)"],
    Code: "https://github.com/WoodyXiao/xwd-website-practice",
    URL: "https://woodyxiao.github.io/xwd-website-practice/",
    Title: "SFUPet Business Website",
    Description:
      "Simple school project, a mockup website for therapist pet bussiness",
    Details:
      "Using HTML, CSS, JS to redesign an responsible mockup webstite for SFU therapist bet bussiness",
    Content: sfuPet,
    Reflection:
      "I have learned and gained some experience of not only the design side but also the development side. It is kind of a nice experience for me to start creating a website template from the scratch (Not including the back-end side of course), in addition, I also realize that the important of responsive design in a website, if we want the website always show nicely in any device. This is the key point knowledge I learnt in this project. On the other hand, I think my project also have some unsatisfying, like the folders structure lack of organize, it would turn into bad case if dealing with multipage project. therefore, I should take this in the consideration in my further projects.",
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
      document.body.style.overflow = "hidden";
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
        document.body.style.overflow = "visible";
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
        document.body.style.overflow = "visible";
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
  document.getElementById("public1"),
  document.getElementById("details"),
  0
);
// popupEvent(
//   document.getElementById("tracker"),
//   document.getElementById("details"),
//   -109
// );
// popupEvent(
//   document.getElementById("tracker1"),
//   document.getElementById("details"),
//   -109
// );
// -217 -326
popupEvent(
  document.getElementById("weather"),
  document.getElementById("details"),
  -217
);
popupEvent(
  document.getElementById("weather1"),
  document.getElementById("details"),
  -217
);
popupEvent(
  document.getElementById("pet"),
  document.getElementById("details"),
  -326
);
popupEvent(
  document.getElementById("pet1"),
  document.getElementById("details"),
  -326
);

closePopup(window, document.getElementById("details"));
const list = document.querySelectorAll(".close-icon");
for (let i = 0; i < list.length; i++) {
  closePopup(list[i], list[i]);
}

let b = document.querySelectorAll(".backToTopButtonIcon");

for (let i = 0; i < b.length; i++) {
  b[i].addEventListener(
    "click",
    (event) => {
      event.target.parentNode.parentNode.scrollTop = 0;
    },
    false
  );
  b[i].parentNode.parentNode.addEventListener(
    "scroll",
    (event) => {
      if (b[i].parentNode.parentNode.scrollTop > 1000) {
        b[i].parentNode.style.top = `${
          b[i].parentNode.parentNode.scrollTop +
          b[i].parentNode.parentNode.clientHeight -
          70
        }px`;
      } else {
        b[
          i
        ].parentNode.style.bottom = `${b[i].parentNode.parentNode.clientHeight}px`;
      }
    },
    false
  );
}
