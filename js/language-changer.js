// ----------------------------------- Language Changer

function switchLanguage() {
  var checkbox = document.getElementById("language_switch");
  var englishBody = document.getElementById("en");
  var nepaliBody = document.getElementById("np");
  if (checkbox.checked) {
    englishBody.style.display = "block";
    nepaliBody.style.display = "none";
    localStorage.setItem("language", "english");
  } else {
    englishBody.style.display = "none";
    nepaliBody.style.display = "block";
    localStorage.setItem("language", "nepali");
  }
}

window.onload = function () {
  var storedLanguage = localStorage.getItem("language");
  if (storedLanguage) {
    var checkbox = document.getElementById("language_switch");
    var englishBody = document.getElementById("en");
    var nepaliBody = document.getElementById("np");
    if (storedLanguage === "english") {
      checkbox.checked = true;
      englishBody.style.display = "block";
      nepaliBody.style.display = "none";
    } else {
      checkbox.checked = false;
      englishBody.style.display = "none";
      nepaliBody.style.display = "block";
    }
  } else {
    localStorage.setItem("language", "nepali");
    var checkbox = document.getElementById("language_switch");
    checkbox.checked = false;
    var englishBody = document.getElementById("en");
    englishBody.style.display = "none";
    var nepaliBody = document.getElementById("np");
    nepaliBody.style.display = "block";
  }
};
