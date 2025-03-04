
gsap.registerPlugin(ScrollTrigger) 



tl = gsap.timeline({

    scrollTrigger:{


        trigger:"section",
        start:"top end",
        end: "bottom top",
        ease:1,
        scrub: true,       



    }


})


tl.to("section",{

    x:900,
    y:500,


})

tl.to("section",{

    x:0,

})
