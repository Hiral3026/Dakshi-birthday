/* =================================
   OUR UNIVERSE
   CONSTELLATION STAR ANIMATION
================================= */


/* =================================
   ELEMENTS
================================= */

const cancerStars =
    document.querySelectorAll(".cancer-star");

const cancerLines =
    document.querySelectorAll(".cancer-lines line");


const piscesStars =
    document.querySelectorAll(".pisces-star");

const piscesLines =
    document.querySelectorAll(".pisces-lines line");



/* =================================
   SETTINGS
================================= */

const starDelay = 300;

const lineDelay = 250;

const starDuration = 700;

const lineDuration = 600;



/* =================================
   REDUCED MOTION
================================= */

const reducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;



/* =================================
   SHOW EVERYTHING
================================= */

function showAll() {

    cancerStars.forEach((star) => {

        star.classList.add(
            "star-visible"
        );

    });


    cancerLines.forEach((line) => {

        line.classList.add(
            "line-visible"
        );

    });


    piscesStars.forEach((star) => {

        star.classList.add(
            "star-visible"
        );

    });


    piscesLines.forEach((line) => {

        line.classList.add(
            "line-visible"
        );

    });

}



/* =================================
   REDUCED MOTION
================================= */

if (reducedMotion) {

    showAll();

}



/* =================================
   NORMAL ANIMATION
================================= */

else {

    /* ---------------------------------
       CANCER STARS
    --------------------------------- */

    cancerStars.forEach(
        (star, index) => {

            setTimeout(() => {

                star.classList.add(
                    "star-visible"
                );

            }, index * starDelay);

        }
    );


    /* ---------------------------------
       CANCER FINISHED
    --------------------------------- */

    const cancerStarsFinished =
        ((cancerStars.length - 1)
        * starDelay)
        + starDuration;


    /* ---------------------------------
       CANCER LINES
    --------------------------------- */

    const cancerLinesStart =
        cancerStarsFinished + 300;


    cancerLines.forEach(
        (line, index) => {

            setTimeout(() => {

                line.classList.add(
                    "line-visible"
                );

            },
            cancerLinesStart
            + (index * lineDelay));

        }
    );


    /* ---------------------------------
       CANCER COMPLETE
    --------------------------------- */

    const cancerComplete =
        cancerLinesStart
        + ((cancerLines.length - 1)
        * lineDelay)
        + lineDuration;


    /* ---------------------------------
       PISCES START
    --------------------------------- */

    const piscesStart =
        cancerComplete + 500;


    /* ---------------------------------
       PISCES STARS
    --------------------------------- */

    piscesStars.forEach(
        (star, index) => {

            setTimeout(() => {

                star.classList.add(
                    "star-visible"
                );

            },
            piscesStart
            + (index * starDelay));

        }
    );


    /* ---------------------------------
       PISCES FINISHED
    --------------------------------- */

    const piscesStarsFinished =
        piscesStart
        + ((piscesStars.length - 1)
        * starDelay)
        + starDuration;


    /* ---------------------------------
       PISCES LINES
    --------------------------------- */

    const piscesLinesStart =
        piscesStarsFinished + 300;


    piscesLines.forEach(
        (line, index) => {

            setTimeout(() => {

                line.classList.add(
                    "line-visible"
                );

            },
            piscesLinesStart
            + (index * lineDelay));

        }
    );

}



/* =================================
   BEGIN OUR JOURNEY
================================= */

/*
   The constellation stars are now
   only visual/animated.

   Clicking "Begin our journey"
   takes the visitor to the
   separate Memories page.
*/

const journeyButton =
    document.querySelector(".memory-guide");


if (journeyButton) {

    journeyButton.style.pointerEvents = "auto";

    journeyButton.style.cursor = "pointer";


    journeyButton.addEventListener(
        "click",
        () => {

            window.location.href =
                "memories.html";

        }
    );

}

/* =========================================
   VAULT BACKGROUND MUSIC
========================================= */

const vaultMusic =
    document.getElementById("vaultMusic");


if (vaultMusic) {

    /*
     * Keep the music subtle.
     */

    vaultMusic.volume = 0.25;


    /*
     * Try to start music immediately
     * when the vault page loads.
     */

    vaultMusic.play()
        .then(() => {

            console.log(
                "Vault music started."
            );

        })
        .catch(() => {

            /*
             * Browser autoplay policy
             * prevented automatic playback.
             *
             * Try again after the user's
             * first interaction with the page.
             */

            const startMusic = () => {

                vaultMusic.play()
                    .catch(() => {});

                document.removeEventListener(
                    "click",
                    startMusic
                );

                document.removeEventListener(
                    "keydown",
                    startMusic
                );

                document.removeEventListener(
                    "touchstart",
                    startMusic
                );

            };


            document.addEventListener(
                "click",
                startMusic
            );

            document.addEventListener(
                "keydown",
                startMusic
            );

            document.addEventListener(
                "touchstart",
                startMusic
            );

        });

}