/* =========================================
   MEMORY VAULT
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const passcodeInputs =
    document.querySelectorAll(".code-input");

const unlockButton =
    document.getElementById("unlockButton");

const hintButton =
    document.getElementById("hintButton");

const hintText =
    document.getElementById("hintText");

const vaultMessage =
    document.getElementById("vaultMessage");

const passcodeContainer =
    document.querySelector(".passcode-container");

const unlockOverlay =
    document.getElementById("unlockOverlay");


/* =========================================
   PASSCODE
========================================= */

/*
 * Change this to your actual
 * 6-digit memory passcode.
 */

const CORRECT_PASSCODE =
    "302930";


/* =========================================
   AUTOMATICALLY MOVE TO NEXT BOX
========================================= */

passcodeInputs.forEach((input, index) => {

    input.addEventListener("input", () => {

        /*
         * Only allow numbers.
         */

        input.value =
            input.value.replace(/\D/g, "");


        /*
         * Move to next box.
         */

        if (
            input.value &&
            index < passcodeInputs.length - 1
        ) {

            passcodeInputs[index + 1].focus();

        }

    });


    /* =====================================
       BACKSPACE
    ===================================== */

    input.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Backspace" &&
                !input.value &&
                index > 0
            ) {

                passcodeInputs[index - 1].focus();

            }

        }
    );

});


/* =========================================
   ENTER KEY
========================================= */

passcodeInputs.forEach((input) => {

    input.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Enter"
            ) {

                checkPasscode();

            }

        }
    );

});


/* =========================================
   UNLOCK BUTTON
========================================= */

unlockButton.addEventListener(
    "click",
    checkPasscode
);


/* =========================================
   CHECK PASSCODE
========================================= */

function checkPasscode() {

    let enteredCode = "";


    passcodeInputs.forEach((input) => {

        enteredCode +=
            input.value;

    });


    /* =====================================
       EMPTY CODE
    ===================================== */

    if (
        enteredCode.length !==
        passcodeInputs.length
    ) {

        vaultMessage.textContent =
            "Enter all six numbers...";

        return;

    }


    /* =====================================
       CORRECT
    ===================================== */

    if (
        enteredCode ===
        CORRECT_PASSCODE
    ) {

        vaultMessage.textContent =
            "The memories are waiting... ✦";


        unlockOverlay.classList.add(
            "active"
        );


        /*
         * Give the unlock animation
         * time to play before moving.
         *
         * Change memory.html later
         * if your memory page has
         * a different filename.
         */

        setTimeout(() => {

            window.location.href =
                "memory.html";

        }, 1800);

        return;

    }


    /* =====================================
       WRONG
    ===================================== */

    vaultMessage.textContent =
        "Not quite... try again ♡";


    passcodeContainer.classList.add(
        "wrong"
    );


    setTimeout(() => {

        passcodeContainer.classList.remove(
            "wrong"
        );

    }, 500);


    /*
     * Clear entered numbers.
     */

    passcodeInputs.forEach((input) => {

        input.value = "";

    });


    passcodeInputs[0].focus();

}


/* =========================================
   HINT
========================================= */

hintButton.addEventListener(
    "click",
    () => {

        /*
         * Replace this with your
         * actual hint later.
         */

        hintText.textContent =
                    "Two birthdays. Two stars. One little secret. " +
                    "Find the day that belongs to me, " +
                    "then the day that belongs to you, " +
                    "and let the beginning guide you home. ✦";

        hintText.classList.add(
            "show"
        );

    }
);

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