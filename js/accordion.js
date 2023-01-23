jQuery(function () {

    jQuery(".skills-column:not(:first-of-type)").css("display", "none");

    jQuery(".acc-title:first-of-type").addClass("open");

    jQuery(".acc-title").click(function () {
        jQuery(".open").not(this).removeClass("open").next().slideUp(300);
        jQuery(this).toggleClass("open").next().slideToggle(300);
    });
});