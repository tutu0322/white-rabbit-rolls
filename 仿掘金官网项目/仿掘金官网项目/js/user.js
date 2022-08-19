window.onload = function () {
   var act = document.querySelector(".act");
   var art = document.querySelector(".art");
   var frin = document.querySelector("#frin");
   var secn = document.querySelector(".secn");
   frin.onclick = function () {
      art.style.display = 'none';
      act.style.display = 'block';
      var linFri = frin.querySelector(".anormal");
      var lineSec = secn.querySelector(".line");
      linFri.className = "line";
      lineSec.className = "anormal";
   }
   secn.onclick = function () {
      act.style.display = 'none';
      art.style.display = 'block';
      var linFri = frin.querySelector("div");
      var lineSec = secn.querySelector("div");
      linFri.className = "anormal";
      lineSec.className = "line";
   }

}