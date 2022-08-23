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
    $(".homeSection, .servicesSection, .contactSection").toggleClass("darkBG1");
    $(".aboutSection, .teamSection").toggleClass("darkBG2");
    $("header, .sideMenu").toggleClass("headerDark");
    $(".section,.navbar li a, .menuNav a").toggleClass("darkText");
    $(".modeToggle").toggleClass("darkbtn");
})
$(".menuBtn").click(() => {
    $(".sideMenu").toggleClass("menuActive")
})
$(".section").click(() => {
    $(".sideMenu").removeClass("menuActive")
})

// GSAP ANIMATIONS
gsap.from(".homeS2 img", {
    x:"20%",
    opacity: "0",
    duration: 2,
    ease: "power1.in"
})
gsap.from(".homeS2", {
    backgroundPosition: "100%",
    duration: 2,
    ease: "power1.in"
})
gsap.from(".homeS1", {
    x:"-10%",
    opacity: "0",
    duration: 2,
    ease: "power1.in"
})
gsap.from(".aboutSection", {
    opacity: "0",
    duration: 4,
    ease: "power1.in"
})