window.onload = function () {
    lax.init()

    lax.addDriver('scrollY', function () {
        return window.scrollY
    });

    lax.addElements('.about-imgL',{
        scrollY:{
            translateX:[
                ["elInY","elCenterY","elOutY"],
                [0,500,600],
            ],
        }
    })

};
