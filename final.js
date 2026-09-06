/* =========================================
   ELEMENTS
========================================= */

const wishContent =
    document.getElementById("wishContent");

const candleButtons =
    document.querySelectorAll(".candle-wrapper");

const finalMessage =
    document.getElementById("finalMessage");

const shootingStar =
    document.querySelector(".shooting-star");


/* =========================================
   STATE
========================================= */

let wishMade = false;


/* =========================================
   CANDLE CLICK
========================================= */

candleButtons.forEach((candle) => {

    candle.addEventListener("click", () => {

        /* Prevent multiple clicks */

        if (wishMade) {
            return;
        }

        wishMade = true;


        /* =================================
           STEP 1
           Blow out candle flames
        ================================= */

        document
            .getElementById("candles")
            .classList.add("blown");


        /* =================================
           STEP 2
           Fade EVERYTHING away
           
           This includes:
           - Make a Wish
           - Universe subtitle
           - Candles
           - Wish instruction
           - Decorative star
        ================================= */

        setTimeout(() => {

            wishContent.classList.add("fade-out");

        }, 250);


        /* =================================
           STEP 3
           Wait until the entire first
           scene has disappeared
        ================================= */

        setTimeout(() => {

            /* Reset shooting star */

            shootingStar.classList.remove("fly");

            void shootingStar.offsetWidth;


            /* Start shooting star */

            shootingStar.classList.add("fly");


            /* Show final message */

            finalMessage.classList.add("show");

        }, 1450);

    });

});