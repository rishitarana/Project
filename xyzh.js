var numslides=0,currentslide=0;
var slides = new Array();
function MakeSlideShow() {
// find all images with the class "slide"
imgs=document.getElementsByTagName("img");
for (i=0; i<imgs.length; i++) {
if (imgs[i].className != "slide") continue;
slides[numslides]=imgs[i];
// hide all but first image
if (numslides==0) {
imgs[i].style.display="block";
} else {
imgs[i].style.display="none";
}
imgs[i].onclick=NextSlide;
numslides++;
} // end for loop
} // end MakeSlideShow()
function NextSlide() {
slides[currentslide].style.display="none";
currentslide++;
if (currentslide >= numslides) currentslide = 0;
slides[currentslide].style.display="block";
}
// create the slideshow when the page loads
window.onload=MakeSlideShow;
setInterval(showTime, 1000);
        function showTime() {
            let time = new Date();
            let hour = time.getHours();
            let min = time.getMinutes();
            let sec = time.getSeconds();
            am_pm = "AM";
  
            if (hour > 12) {
                hour -= 12;
                am_pm = "PM";
               
            }
            
            if (hour == 0) {
                hr = 12;
                am_pm = "AM";
            }
            if ((hour>=5 && am_pm=="PM") || (hour<=9 && am_pm=="AM")){
                document.getElementById("clock").style.color="red"
            }
            else{
                document.getElementById("clock").style.color="green"
            }
            
  
            hour = hour < 10 ? "0" + hour : hour;
            min = min < 10 ? "0" + min : min;
            sec = sec < 10 ? "0" + sec : sec;
  
            let currentTime = hour + ":" 
                + min + ":" + sec + am_pm;
  
            document.getElementById("clock")
                .innerHTML = currentTime;
        }
  
        showTime();

























































