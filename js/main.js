// window.onload = (function getLoadTime(){
//   let loadTime = window.performance.getEntries()[0].duration;
//   document.getElementById("load_time").innerText = loadTime.toString();
//   return loadTime;
// }());

(function() {
  let startTime = performance.now();
  window.addEventListener('load', function() {
    let endTime = performance.now();
    let loadTime = endTime - startTime;
    document.getElementById('load_time').innerText = "Page load time is " + loadTime.toString() + " milliseconds";
    document.getElementById('load_time').style.backgroundColor = '#F9AFFB';
  });
})();

document.addEventListener('mouseover', (event) => {

  if (event.target.matches('.nav_link'))
  {
    event.target.style.transform = "scale(1.5)";
  }
});

document.addEventListener('mouseout', (event) => {

  if (event.target.matches('.nav_link'))
  {
    event.target.style.transform = "scale(1)";
  }
});

window.onload = function (){
  if(document.location.href.includes("index")){
    document.getElementsByTagName('h1').item(0).classList.add("active_link");
  }
  if(document.location.href.includes("calculator")){
    document.getElementsByClassName('nav_link').item(0).classList.add("active_link");
  }
  else if(document.location.href.includes("trainings")){
    document.getElementsByClassName('nav_link').item(2).classList.add("active_link");
  }
}
