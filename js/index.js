$(".es").hide()
$(".esToggle").click(() => {
    $(".en").hide()
    $(".es").show()
})
$(".enToggle").click(() => {
    $(".en").show()
    $(".es").hide()
})

$(".modeToggle").click(() => {
    $(".homeSection,.servicesSection,.teamSection").toggleClass("darkBG1");
    $(".aboutSection,.portfolioSection,.contactSection").toggleClass("darkBG2");
    $("header").toggleClass("headerDark");
    $(".section,.navbar li a").toggleClass("darkText");
    $(".modeToggle").toggleClass("darkbtn");
})