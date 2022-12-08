const container = document.querySelector(".container");
const big = document.querySelector(".big");

container.addEventListener("click", function (e) {
  // cek apakah yg diklik adalah thumb
  if (e.target.className == "thumb") {
    big.src = e.target.src;
  }
});

// number spinner 1
// $(function () {
//   $('input[type="number"]').niceNumber();
// });

// number spinner 2
$(document).on("click", ".number-spinner button", function () {
  var btn = $(this),
    oldValue = btn.closest(".number-spinner").find("input").val().trim(),
    newVal = 0;

  if (btn.attr("data-dir") == "up") {
    newVal = parseInt(oldValue) + 1;
  } else {
    if (oldValue > 1) {
      newVal = parseInt(oldValue) - 1;
    } else {
      newVal = 1;
    }
  }
  btn.closest(".number-spinner").find("input").val(newVal);
});
