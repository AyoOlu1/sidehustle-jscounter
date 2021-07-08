let i = 0;

function addCount() {  
      if (i < 50) {
          i++;
      } else if (i = 50) {
          i = 0;
      }
      document.getElementById("current-count").innerHTML = i;
};

function lowerCount() {
     if (i > 0) {
         i--;
     } else if (i = 0) {
         i = 50;
     }
     document.getElementById("current-count").innerHTML = i;
};

document.getElementById("add-count").addEventListener("click", function () {
    addCount();
});
document.getElementById("lower-count").addEventListener("click", function () {
    lowerCount();
});