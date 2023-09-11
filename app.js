window.onload = function () {
  var groups = document.querySelectorAll("g");
  var delayIncrement = 0.2; // Verzögerung in Sekunden

  for (var i = 0; i < groups.length; i++) {
    var lines = groups[i].querySelectorAll("line");

    for (var j = 0; j < lines.length; j++) {
      var delay = delayIncrement * j;
      lines[j].style.animationDelay = delay + "s";
    }
  }
};
gsap.registerPlugin(
  ScrollTrigger,
  MotionPathPlugin,
  ScrollToPlugin,
  TextPlugin
);
let vh = window.innerHeight * 0.01;

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#stern",
    start: "center center",
    end: "200%",
    scrub: 4,
    toggleActions: "restart none none none",
    pin: true,
    pinSpacing: true,
    markers: true,
  },
});

tl.fromTo(
  "#stern",
  { opacity: 0, scale: 0.8 },
  { opacity: 1, scale: 1, ease: "power4.easeIn" }
).pause(0.15); // Pause die Timeline nach 25% der Dauer

tl.to("#stern", {
  scale: 1, // Setze den Stern zurück auf die normale Größe für den Rest der Scroll-Animation
});

let tl_koenige1 = gsap.timeline({
  scrollTrigger: {
    trigger: "#stern",
    start: "50% 50%", // Startet, wenn .stern 25% des Viewports erreicht
    end: "150%", // Die Animation endet, nachdem 1000 Pixel gescrollt wurden
    scrub: true,
    toggleActions: "restart none none none",
    markers: true,
  },
});

tl_koenige1
  .from("#koenige1", { opacity: 0, y: 0, scale: 0.8 }) // Ursprungszustand
  .to("koenige1", {
    opacity: 0,
    y: 600,
    scale: 0.8,
  })
  .to("#koenige1", {
    opacity: 1,
    scale: 1.2,
    duration: 1,
    ease: "power4.easeIn",
    y: "+=50%",
  }) // Erscheint und vergrößert

  .to("#koenige1", { opacity: 0, scale: 0.8 }); // Verschwindet wieder
