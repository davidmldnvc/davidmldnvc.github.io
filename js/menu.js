let navItems = jQuery(".nav li a");
let win = jQuery(window);
let items = jQuery("section");

win.scroll(function (e) {
  jQuery.each(items, function (key, value) {
    var item = jQuery(value);
    if (win.scrollTop() >= item.offset().top / 1.1) {
      jQuery(".nav li a").removeClass("current");
      var id = item.attr("id");

      jQuery.each(navItems, function (key, value) {
        var navItem = jQuery(value);
        if (navItem.attr("href") == "#" + id) navItem.addClass("current");
      });
    }
  });
});

//H1 animation========================================

let title = document.querySelector(".intro");
let text = title.textContent;
let splittedText = text.split("");
title.innerHTML = "";

splittedText.forEach((letter) => {
  title.innerHTML += `<span>${letter}</span>`;
});

let spanS = title.querySelectorAll("span");
let k = 0;
let j = 0;

let interval = setInterval(() => {
  let singleSpan = spanS[k];
  k++;

  singleSpan.className = "title-animation";

  if (k === spanS.length) {
    clearInterval(interval);
  }
}, 300);
