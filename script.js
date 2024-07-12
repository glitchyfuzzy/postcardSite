const hiTxtScreen = document.querySelector("#hi-txt-window");
const hiTxtOpen = document.querySelector("#hi-icon"); 
const hiTxtClose = document.querySelector("#hi-close");
const fileLinkOpen = document.querySelector("#folder");
const leaveMessageScreen = document.querySelector("#leave-message");
const leaveMessageOpen = document.querySelector("#message-button");
const leaveMessageClose = document.querySelector("#leave-message-close");
const surpriseScreen = document.querySelector("#surprise-window")
const surpriseScreenOpen = document.querySelector("#surprise-icon");
const surpriseScreenClose = document.querySelector("#surprise-close");

function closeWindow(element) {
    element.style.display = "none";
}

function openWindow(element) {
    element.style.display = "block";
}
  
hiTxtOpen.addEventListener("click", function() {
  openWindow(hiTxtScreen);
});

hiTxtClose.addEventListener("click", function() {
  closeWindow(hiTxtScreen);
});

fileLinkOpen.addEventListener("click", function() {
  window.open("https://drive.google.com/drive/u/0/folders/1SanyQmwUJV8SX5PeAX-BjIylLymWPg41");
});

leaveMessageOpen.addEventListener("click", function() {
  openWindow(leaveMessageScreen);
});

leaveMessageClose.addEventListener("click", function() {
  closeWindow(leaveMessageScreen);
});

surpriseScreenOpen.addEventListener("click", function() {
  openWindow(surpriseScreen);
});

surpriseScreenClose.addEventListener("click", function() {
  closeWindow(surpriseScreen);
});