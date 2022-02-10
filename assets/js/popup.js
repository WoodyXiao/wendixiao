const projectDetails = [
    {
        id: 'publicArt',
        img: [
            "./assets/img/publicart/p1.PNG",
            "./assets/img/publicart/p2.PNG",
            "./assets/img/publicart/p3.PNG",
            "./assets/img/publicart/p4.PNG",
            "./assets/img/publicart/p5.PNG",
            "./assets/img/publicart/p6.PNG",
            "./assets/img/publicart/p7.PNG",
            "./assets/img/publicart/p8.PNG"
        ],
        Category: 'Web Development',
        Language: 'Ajax Jquery MySQL PHP',
        Type: 'Academic Project (IAT 352)',
        Code: 'https://github.com/WoodyXiao/IAT352-Final-Project',
        URL: '',
        Title: 'Vancouver Public Art website',
        Description: 'The Vancouver Public Art website is created to promote the exploration of artworks throughout the city of Vancouver.It features new artworks to explore for visiting users, lists of artworks tailored for members, encourages community participation through rating and commenting on artworks by members and more functionalities.This report will describe the specifications of the website in detail, the process of gathering data, the design of the database, implementation of the database with data, and explain the backend operations for each page in the website.'
    }

];
function popupEvent(el, content) {

    el.addEventListener("click", () => {
        content.style.display = "block";

    }, false);
}
function closePopup(window, content) {
    window.addEventListener("click", (e) => {
        if (e.target === content) {
            console.log('a');
            content.style.display = "none";
        }

    }, false);
}

const box = document.querySelector('.project-detail-window');
box.innerHTML = template("tpl-project-details", { projectDetails: projectDetails })

popupEvent(document.getElementById("myBtn"), document.getElementById("details"));
closePopup(window, document.getElementById("details"));