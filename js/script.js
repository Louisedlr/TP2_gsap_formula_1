gsap.registerPlugin(ScrollTrigger);



let music = document.querySelector('#music');




document.querySelector('.sound').addEventListener('click', play_audio);

// Fonction pour la music 

function play_audio() {
	if (music.paused) {
		document.querySelector("#music").play();
		document.querySelector("#sound-on").style.display= "block";
        document.querySelector("#sound-off").style.display= "none";

	} else { 
		music.pause();
		document.querySelector("#sound-on").style.display= "none";
        document.querySelector("#sound-off").style.display= "block";
	}
}


gsap.from('.intro-img', {opacity:0, xPercent:-60, duration:1, ease: "power4.out" ,delay:0.4});
gsap.from('.logo', {opacity:0, Scale:0.7, duration:0.9, ease: "power4.out",delay:0.2});


gsap.to('.intro-img',{
    scrollTrigger:{
        trigger:"#ecurie",
        scrub: 1,
        ease: "power4.out",
    },
    x:800, duration:1
     

})


let menu = document.querySelector('.menu-wrap');

menu.addEventListener('click', function() {
    document.querySelector(".menu-open").classList.toggle("menu-active");
    gsap.from('.menu-open h3', {opacity:0, delay:0.7, yPercent:-20, duration:0.9, ease: "power4.out", stagger:0.2});
    
})



        var tl_ecurie = gsap.timeline({});
        tl_ecurie.from("#sous-titre-ecurie", {opacity:0, x:200, duration:1});
        tl_ecurie.from("#sous-titre-text-ecurie", { opacity:0.5, duration:0.5});
        
        ScrollTrigger.create({
            trigger: ".ecurie-info",
            start: "center center",
            pin: true,
            scrub: true,
            animation: tl_ecurie
        });
        // gsap.from("#sous-titre-ecurie",{
        //     scrollTrigger:{
        //         trigger:"#ecurie",
        //         scrub: 1,
        //     },
        //     opacity:0.8, x:200, duration:3
             
        
        // })
        
        
        // gsap.from("#sous-titre-text-ecurie",{
        //     scrollTrigger:{
        //         trigger:"#sous-titre-ecurie",
        //         scrub: 1,
        //     },
        //     opacity:0.5, duration:0.5
             
        
        // })


        let container = document.getElementById('container');

gsap.to(container, {
            x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => "+=" + container.offsetWidth,
                scrub: true,
                pin: true,
                // anticipatePin: 1
            }

        });

        ScrollTrigger.refresh();


gsap.from("#titre-ecurie-RD",{
    scrollTrigger:{
        trigger:".titre-ecurie-ferrari",
        scrub: 1,
        ease: "power2",
    },
    opacity:0.5, x:100, duration:1
     

})




gsap.from("#logo-team-RB",{
    scrollTrigger:{
        trigger:"#logo-team-RB",
        scrub: 1,

        ease: "power2"
    },
    scale:0.5, duration:3,
     

})






gsap.from(".RedBull-f1",{
    scrollTrigger:{
        trigger:"#titre-ecurie-RD",
        scrub: 1,
    },
    x:-400, duration:1
})



gsap.to(".titre-ecurie-williams",{
    scrollTrigger:{
        trigger:"#pilote",
        scrub: 1,
        ease: "power2",
    },
    opacity:0.5, x:-100, duration:1
     

})




gsap.to(".logo-team-williams",{
    scrollTrigger:{
        trigger:"#pilote",
        scrub: 1,

        ease: "power2"
    },
    scale:0.5, duration:3,
     

})


gsap.to(".williams-f1",{
    scrollTrigger:{
        trigger:"#pilote",
        scrub: 1,
    },
    x:800, duration:1
})

gsap.to(".pilote-williams",{
    scrollTrigger:{
        trigger:"#pilote",
        scrub: 1,
        ease: "power2"
    },
    opacity:0, duration:1
})

gsap.to(".palmares-williams",{
    scrollTrigger:{
        trigger:"#pilote",
        scrub: 1,
        ease: "power2"
    },
    opacity:0, duration:1
})



// gsap.from("#sous-titre-pilote",{
//     scrollTrigger:{
//         trigger:"#pilote",
//         scrub: 1,
//     },
//     opacity:0.8, x:200, duration:3
     

// })


// gsap.from("#sous-titre-text-pilote",{
//     scrollTrigger:{
//         trigger:"#sous-titre-pilote",
//         scrub: 1,
//     },
//     opacity:0.8, duration:0.5
     

// })


var tl_pilote = gsap.timeline({});
tl_pilote.from("#sous-titre-pilote", {opacity:0, x:200, duration:1});
tl_pilote.from("#sous-titre-text-pilote", { opacity:0.5, duration:0.5});

ScrollTrigger.create({
    trigger: ".pilote-info",
    start: "center center",
    pin: true,
    scrub: true,
    animation: tl_pilote
});


var tl = gsap.timeline({});
// tl.from(".podium-img", { opacity: 0, duration: 1 });
tl.from(".perez", { opacity: 0, duration: 1 });
tl.from(".leclerc", { opacity: 0, duration: 1 });
tl.from(".max", { opacity: 0, duration: 1});

ScrollTrigger.create({
    trigger: ".podium",
    start: "center center",
    pin: true,
    scrub: true,
    animation: tl
});

gsap.from(".russell",{
    scrollTrigger:{
        trigger:".russell",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})




gsap.from(".sainz",{
    scrollTrigger:{
        trigger:".sainz",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".lewis",{
    scrollTrigger:{
        trigger:".lewis",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})


gsap.from(".lando",{
    scrollTrigger:{
        trigger:".lando",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})


gsap.from(".ocon",{
    scrollTrigger:{
        trigger:".ocon",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".alonzo",{
    scrollTrigger:{
        trigger:".alonzo",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".bottas",{
    scrollTrigger:{
        trigger:".bottas",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".ricciardo",{
    scrollTrigger:{
        trigger:".ricciardo",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".vettel",{
    scrollTrigger:{
        trigger:".vettel",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".mag",{
    scrollTrigger:{
        trigger:".mag",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".gasly",{
    scrollTrigger:{
        trigger:".gasly",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".stroll",{
    scrollTrigger:{
        trigger:".stroll",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".mick",{
    scrollTrigger:{
        trigger:".mick",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".yuki",{
    scrollTrigger:{
        trigger:".yuki",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".zhou",{
    scrollTrigger:{
        trigger:".zhou",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".albon",{
    scrollTrigger:{
        trigger:".albon",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

gsap.from(".latifi",{
    scrollTrigger:{
        trigger:".latifi",
        scrub: 1,
        ease: "power2"
    },
    opacity:0.6,scale:0.8, duration:1
     

})

// gsap.from("#sous-titre-circuit",{
//     scrollTrigger:{
//         trigger:"#circuit",
//         scrub: 1,
//     },
//     opacity:0.8, x:200, duration:3
     

// })


// gsap.from("#sous-titre-text-circuit",{
//     scrollTrigger:{
//         trigger:"#sous-titre-circuit",
//         scrub: 1,
//     },
//     opacity:0.8, duration:0.5
     

// })


var tl_pilote = gsap.timeline({});
tl_pilote.from("#sous-titre-circuit", {opacity:0, x:200, duration:1});
tl_pilote.from("#sous-titre-text-circuit", { opacity:0.5, duration:0.5});

ScrollTrigger.create({
    trigger: ".circuit-info",
    start: "center center",
    pin: true,
    scrub: true,
    animation: tl_pilote
});



let frise = document.getElementById('frise');

gsap.to(frise, {
            x: () => -(frise.scrollWidth - document.documentElement.clientWidth) + "px",
            ease: "none",
            scrollTrigger: {
                trigger: frise,
                start: "top top",
                end: () => "+=" + frise.offsetWidth,
                scrub: true,
                pin: true,
                anticipatePin: 1
            }

        });

        ScrollTrigger.refresh();





        gsap.from(".titre-bahrain",{
            scrollTrigger:{
                trigger:".info-bahrain",
                scrub: 1,
                ease: "power2",
            },
            opacity:0.8, duration:1
             
        
        })
        
        gsap.from(".info-bahrain",{
            scrollTrigger:{
                trigger:".info-bahrain",
                scrub: 1,
                ease: "power2",
            },
            scale :0.6, opacity:0.6, duration:1
             
        
        })

        gsap.from(".titre-jeddah",{
            scrollTrigger:{
                trigger:".info-jeddah",
                scrub: 1,
                ease: "power2",
            },
            opacity:0.4, duration:3
             
        
        })
        gsap.from(".info-jeddah",{
            scrollTrigger:{
                trigger:".info-jeddah",
                scrub: 1,
                ease: "power2",
            },
            scale :0.6, opacity:0.6, duration:1
             
        
        })


        gsap.from(".titre-albert",{
            scrollTrigger:{
                trigger:".info-albert",
                scrub: 1,
                ease: "power2",
            },
            opacity:0, duration:5
             
        
        })
        gsap.from(".info-albert",{
            scrollTrigger:{
                trigger:".info-albert",
                scrub: 1,
                ease: "power2",
            },
            scale :0.6, opacity:0.6, duration:1
             
        
        })

        gsap.from(".info-enzo",{
            scrollTrigger:{
                trigger:".info-enzo",
                scrub: 1,
                ease: "power2",
            },
            scale :0.6, opacity:0.6, duration:1
             
        
        })


    


//         var tl_circuit = gsap.timeline({});
//         tl_circuit.from(".titre-bahrain", { opacity:0, duration:1,ease: "power2" });
// tl_circuit.from(".titre-jeddah", { opacity:0, duration:3, ease: "power2"});
// tl_circuit.from(".titre-albert", { opacity:0, duration:3,ease: "power2"});
// tl_circuit.from(".titre-enzo", { opacity:0, duration:4,ease: "power2"});
// tl_circuit.from(".titre-miami", { opacity:0, duration:5,ease: "power2"});
// tl_circuit.from(".titre-barcelona", { opacity:0, duration:6,ease: "power2"});

// ScrollTrigger.create({
//     trigger: ".circuit-plus-info",
//     start: "center center",
//     pin: true,
//     scrub: true,
//     animation: tl_circuit
// });




// gsap.from("#sous-titre-information",{
//     scrollTrigger:{
//         trigger:"#information",
//         scrub: 1,
//     },
//     opacity:0.8, x:200, duration:3
     

// })


// gsap.from("#sous-titre-text-information",{
//     scrollTrigger:{
//         trigger:"#sous-titre-information",
//         scrub: 1,
//     },
//     opacity:0.5, duration:0.5
     

// })


var tl_information = gsap.timeline({});
tl_information.from("#sous-titre-information", {opacity:0, x:200, duration:1});
tl_information.from("#sous-titre-text-information", { opacity:0.5, duration:0.5});

ScrollTrigger.create({
    trigger: ".information-info",
    start: "center center",
    pin: true,
    scrub: true,
    animation: tl_information
});



gsap.from(".line-up",{
        scrollTrigger:{
            trigger:".planning",
            scrub: 1,
        },
        scale:0.8,opacity:0.5, duration:2,
        ease: "power2",
    
    })

    gsap.from(".planning",{
        scrollTrigger:{
            trigger:".planning",
            scrub: 1,
            ease: "power2",
        },
        scale:0.8,opacity:0.5, duration:2
         
    
    })

    gsap.from(".suivre",{
        scrollTrigger:{
            trigger:".planning",
            scrub: 1,
            ease: "power2",
        },
        scale:0.8,opacity:0.5, duration:1
         
    
    })