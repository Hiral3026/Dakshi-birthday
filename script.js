/* =========================
   OPEN BIRTHDAY PAGE
========================= */

const openBirthday = document.getElementById("openBirthday");

if (openBirthday) {

    openBirthday.addEventListener("click", () => {

        window.location.href = "birthday.html";

    });

}


/* =========================
   BIRTHDAY PAGE MUSIC
========================= */

const birthdaySong = document.getElementById("birthday-song");

if (birthdaySong) {

    birthdaySong.volume = 0.5;

    birthdaySong.play()
        .then(() => {

            console.log("Birthday song started!");

        })
        .catch((error) => {

            console.log(
                "Autoplay blocked by browser:",
                error
            );

        });

}

/* =========================================
   MESSAGE PAGE MUSIC
========================================= */

const backgroundMusic = document.getElementById("backgroundMusic");

if (backgroundMusic) {

    backgroundMusic.volume = 0.35;

    backgroundMusic.play()
        .then(() => {

            console.log("Message music started!");

        })
        .catch((error) => {

            console.log(
                "Message music autoplay blocked:",
                error
            );

        });

}


/* =========================================
   PERSONAL LETTER
========================================= */

const openLetter = document.getElementById("openLetter");
const letterScene = document.querySelector(".letter-scene");

if (openLetter && letterScene) {

    openLetter.addEventListener("click", () => {

        letterScene.classList.add("open");

    });

}

const heartButton = document.querySelector(".heart-button");

if (heartButton) {

    heartButton.addEventListener("click", () => {

        window.location.href = "message.html";

    });

}