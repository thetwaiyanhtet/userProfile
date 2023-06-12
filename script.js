$(document).ready(function () {
  let mode = localStorage.getItem("mode");
   (mode === "dark") ? dark() : light()
  $("#btn button").click(saveInputValues);
  loadSavedInputValues();
});

function dark() {
  localStorage.setItem("mode", "dark");
  $(".card").css("background-color", "white");
  $("body").css("background-color", "black");
  $(".card").css("color", "black");
  $("input").css("color", "black");
  $("button").css("color", "black");
  $("#right").empty();
  $("#right").append(`
    <ion-icon name="sunny-outline" id="sun"></ion-icon>
  `);

  $("#sun").click(light); // Add click event handler to the newly appended sun icon
}

function light() {
  localStorage.setItem("mode", "light");
  $(".card").css("background-color", "black");
  $("body").css("background-color", "white");
  $(".card").css("color", "white");
  $("input").css("color", "white");
  $("button").css("color", "white");
  $("#right").empty();
  $("#right").append(`
    <ion-icon name="moon-outline" id="moon"></ion-icon>
  `);

  $("#moon").click(dark); // Add click event handler to the newly appended moon icon
}

function saveInputValues() {
  $("input").each(function () {
      const fieldName = $(this).parent().text();
      console.log(fieldName);
    const value = $(this).val();
    localStorage.setItem(fieldName, value);
  });
}

function loadSavedInputValues() {
  $("input").each(function () {
    const fieldName = $(this).parent().text();
    const savedValue = localStorage.getItem(fieldName);
    if (savedValue !== null) {
      $(this).val(savedValue);
    }
  });
}
