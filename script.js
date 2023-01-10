let aboutMe = document.querySelector("#aboutMeExpanded");
let aboutMeButton = document.querySelector("#aboutMe");
let aboutMeShape = document.querySelector("#aboutMeTriangle")
let projects = document.querySelector("#projectsExpanded");
let projectsButton = document.querySelector("#projects");
let projectShape = document.querySelector("#projectsCircle")
let contact = document.querySelector("#contactExpanded");
let contactButton = document.querySelector("#contact");
let contactShape = document.querySelector("#contactSquare");
function aboutMeToggle() {
  aboutMe.classList.toggle("inactive");
  if(aboutMe.classList.contains("inactive")){
    aboutMeButton.classList.add("aboutMeReturn");
    aboutMeButton.classList.remove("aboutMeCenter");
  }
  else{
    aboutMeButton.classList.remove("aboutMeReturn");
    aboutMeButton.classList.add("aboutMeCenter");
  }
  projects.classList.add("inactive");
  projectsButton.classList.toggle("projectsFlyRight");
  contact.classList.add("inactive");
  contactButton.classList.remove("contactReturn");
  contactButton.classList.toggle("contactFlyRight");
  updateRoad();
}
function projectsToggle() {
  aboutMe.classList.add("inactive");
  aboutMeButton.classList.remove("aboutMeReturn");
  aboutMeButton.classList.toggle("aboutMeFlyLeft");
  projects.classList.toggle("inactive");
  contact.classList.add("inactive");
  contactButton.classList.remove("contactReturn");
  contactButton.classList.toggle("contactFlyRight");
  updateRoad();
}
function contactToggle() {
  aboutMe.classList.add("inactive");
  aboutMeButton.classList.remove("aboutMeReturn");
  aboutMeButton.classList.toggle("aboutMeFlyLeft");
  projects.classList.add("inactive");
  projectsButton.classList.toggle("projectsFlyLeft");
  contact.classList.toggle("inactive");
  if(contact.classList.contains("inactive")){
    contactButton.classList.add("contactReturn");
    contactButton.classList.remove("contactCenter");
  }
  else{
    contactButton.classList.remove("contactReturn");
    contactButton.classList.add("contactCenter");
  }
  updateRoad();
}
let road = document.querySelector("#road");
function updateRoad() {
  if(aboutMe.classList.contains("inactive") 
    && projects.classList.contains("inactive")
    && contact.classList.contains("inactive")) {
      road.classList.add("inactive");
      road.classList.remove("animateUp");
    }
  else {
    road.classList.remove("inactive");
    road.classList.add("animateUp");
    let van = document.querySelector("#van");
    if(!aboutMe.classList.contains("inactive"))
      van.style.backgroundColor = 'var(--orange)';
    else if(!projects.classList.contains("inactive"))
      van.style.backgroundColor = 'var(--green)';
    else
      van.style.backgroundColor = 'var(--blue)';
  }
}
function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    )
}
function amountscrolled(){
    var winheight= window.innerHeight || (document.documentElement || document.body).clientHeight
    var docheight = getDocHeight()
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
    var trackLength = docheight - winheight
    var pctScrolled = Math.floor(scrollTop/trackLength*100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
    //console.log(pctScrolled + '% scrolled')
    return pctScrolled;
}
 
window.addEventListener("scroll", function(){
    let coef = amountscrolled();
    let van = document.querySelector('#van');
    van.style.left = coef +'vw';
}, false)