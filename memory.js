/* =================================
   MEMORY DATA
================================= */

const memories = {

    1: {
        number: "01",
        title: "The Beginning",
        date: "Our First Bike Ride",
        image: "images/memory-1.jpg",
        text: "Every story has a beginning. This was the moment ours quietly started."
    },

    2: {
        number: "02",
        title: "First Official Date",
        date: "First time we went out together",
        image: "images/memory-2.jpg",
        text: "The first time we went out together, we didn't know it would be the start of something special."
    },

    3: {
        number: "03",
        title: "That One Day",
        date: "A day worth remembering",
        image: "images/memory-3.jpg",
        text: "Some days seem ordinary while you're living them, but later you realize they were anything but."
    },

    4: {
        number: "04",
        title: "A Little Chaos",
        date: "The moments we didn't plan",
        image: "images/memory-4.jpg",
        text: "Not everything went according to plan, but somehow those became some of the best moments."
    },

    5: {
        number: "05",
        title: "My Favorite",
        date: "One I'll always keep",
        image: "images/memory-5.jpg",
        text: "Some moments don't just happen. They stay with you forever."
    },

    6: {
        number: "06",
        title: "Pune will be always special",
        date: "A place, a day, a memory",
        image: "images/memory-6.jpg",
        text: "Every place becomes special when it becomes part of our story."
    },

    7: {
        number: "07",
        title: "First Snow",
        date: "Our first snow together",
        image: "images/memory-7.jpeg",
        text: "The first snow we experienced together, a simple moment that felt magical."
    },

    8: {
        number: "08",
        title: "Us",
        date: "And the story continues",
        image: "images/memory-8.jpg",
        text: "Countless moments, and still so much of our story left to write."
    }

};



/* =================================
   ELEMENTS
================================= */

const memoryStars =
    document.querySelectorAll(".memory-star");

const memoryOverlay =
    document.getElementById("memoryOverlay");

const memoryClose =
    document.getElementById("memoryClose");

const popupNumber =
    document.getElementById("popupNumber");

const popupTitle =
    document.getElementById("popupTitle");

const popupDate =
    document.getElementById("popupDate");

const popupImage =
    document.getElementById("popupImage");

const popupText =
    document.getElementById("popupText");



/* =================================
   OPEN MEMORY
================================= */

function openMemory(memoryNumber) {

    const memory =
        memories[memoryNumber];

    if (!memory) {
        return;
    }


    popupNumber.textContent =
        memory.number;

    popupTitle.textContent =
        memory.title;

    popupDate.textContent =
        memory.date;

    popupImage.src =
        memory.image;

    popupImage.alt =
        memory.title;

    popupText.textContent =
        memory.text;


    memoryOverlay.classList.add("active");

    memoryOverlay.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}



/* =================================
   CLOSE MEMORY
================================= */

function closeMemory() {

    memoryOverlay.classList.remove("active");

    memoryOverlay.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}



/* =================================
   STAR CLICK
================================= */

memoryStars.forEach(star => {

    star.addEventListener(
        "click",
        () => {

            const memoryNumber =
                star.dataset.memory;

            openMemory(memoryNumber);

        }
    );

});



/* =================================
   CLOSE BUTTON
================================= */

memoryClose.addEventListener(
    "click",
    closeMemory
);



/* =================================
   CLICK OUTSIDE POPUP
================================= */

memoryOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            memoryOverlay
        ) {

            closeMemory();

        }

    }
);



/* =================================
   ESCAPE KEY
================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            memoryOverlay.classList.contains("active")
        ) {

            closeMemory();

        }

    }
);

/* =========================================
   VAULT BACKGROUND MUSIC
========================================= */

const memoryMusic =
    document.getElementById("memoryMusic");


if (memoryMusic) {

    /*
     * Keep the music subtle.
     */

    memoryMusic.volume = 0.25;


    /*
     * Try to start music immediately
     * when the vault page loads.
     */

    memoryMusic.play()
        .then(() => {

            console.log(
                "Memory music started."
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

                memoryMusic.play()
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