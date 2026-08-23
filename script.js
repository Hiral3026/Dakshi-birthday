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