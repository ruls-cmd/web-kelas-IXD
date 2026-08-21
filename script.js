/* =========================================================
   STUDENTS
========================================================= */

const students = [

    ["01", "Zhafran"],
    ["02", "Alfian"],
    ["03", "Nanda"],
    ["04", "Azel"],
    ["05", "Arnal"],
    ["06", "Dewa"],
    ["07", "Dzaky"],
    ["08", "Faiz"],
    ["09", "Farhan"],
    ["10", "Fadhil"],
    ["11", "Favian"],
    ["12", "Habibi"],
    ["13", "Ibran"],
    ["14", "Kenzo"],
    ["15", "Lafi"],
    ["16", "Muadz"],
    ["17", "Aufa"],
    ["18", "Fahrul"],
    ["19", "Wildan"],
    ["20", "Muzakki"],
    ["21", "Ziven"],
    ["22", "Regan"],
    ["23", "Ridwan"],
    ["24", "Irul"],
    ["25", "Kiki"]

];


/* =========================================================
   ELEMENTS
========================================================= */

const loader =
    document.getElementById("loader");

const navbar =
    document.getElementById("navbar");

const studentsGrid =
    document.getElementById("studentsGrid");

const modal =
    document.getElementById("profileModal");

const closeModal =
    document.getElementById("closeModal");

const modalImage =
    document.getElementById("modalImage");

const modalPlaceholder =
    document.getElementById("modalPlaceholder");

const modalNumber =
    document.getElementById("modalNumber");

const modalName =
    document.getElementById("modalName");

const modalMessage =
    document.getElementById("modalMessage");


/* =========================================================
   LOADER
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                loader.classList.add("hide");

            },
            700
        );

    }
);


/* =========================================================
   GENERATE STUDENTS
========================================================= */

students.forEach(
    ([number, name]) => {

        const card =
            document.createElement("article");

        card.className =
            "student-card reveal";


        card.innerHTML = `

            <div class="student-photo">

                <img
                    src="foto/siswa${number}.jpg"
                    alt="${name}"
                >

                <div class="photo-placeholder">

                    <span>
                        PHOTO
                    </span>

                </div>

            </div>


            <div class="student-info">

                <div class="student-number">
                    ABSEN ${number}
                </div>

                <div class="student-name">
                    ${name}
                </div>

                <div class="student-role">
                    CLASS IXD
                </div>

            </div>

        `;


        const image =
            card.querySelector("img");

        const placeholder =
            card.querySelector(
                ".photo-placeholder"
            );


        image.addEventListener(
            "load",
            () => {

                placeholder.style.display =
                    "none";

            }
        );


        image.addEventListener(
            "error",
            () => {

                image.style.display =
                    "none";

                placeholder.style.display =
                    "flex";

            }
        );


        card.addEventListener(
            "click",
            () => {

                openProfile(
                    number,
                    name,
                    image.src,
                    image.complete &&
                    image.naturalWidth > 0
                );

            }
        );


        studentsGrid.appendChild(card);

    }
);


/* =========================================================
   PROFILE MODAL
========================================================= */

function openProfile(
    number,
    name,
    image,
    hasImage
){

    modal.classList.add("active");

    document.body.style.overflow =
        "hidden";


    modalNumber.textContent =
        `ABSEN ${number}`;

    modalName.textContent =
        name;


    modalMessage.textContent =
        `Tambahkan kesan, pesan,
        quotes, atau cerita singkat
        tentang ${name} di sini.`;


    if(hasImage){

        modalImage.src =
            image;

        modalImage.style.display =
            "block";

        modalPlaceholder.style.display =
            "none";

    }else{

        modalImage.style.display =
            "none";

        modalPlaceholder.style.display =
            "flex";

    }

}


function closeProfile(){

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


closeModal.addEventListener(
    "click",
    closeProfile
);


modal.addEventListener(
    "click",
    event => {

        if(
            event.target === modal
        ){

            closeProfile();

        }

    }
);


document.addEventListener(
    "keydown",
    event => {

        if(
            event.key === "Escape"
        ){

            closeProfile();

        }

    }
);


/* =========================================================
   NAVBAR
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        if(
            window.scrollY > 40
        ){

            navbar.classList.add(
                "scrolled"
            );

        }else{

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if(
                        entry.isIntersecting
                    ){

                        entry.target.classList.add(
                            "show"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold:.12
        }
    );


function observeElements(){

    document
        .querySelectorAll(".reveal")
        .forEach(
            element => {

                observer.observe(
                    element
                );

            }
        );

}


observeElements();


/* =========================================================
   TEACHER IMAGE FALLBACK
========================================================= */

document
    .querySelectorAll(".teacher-photo img")
    .forEach(
        image => {

            const placeholder =
                image.parentElement
                    .querySelector(
                        ".photo-placeholder"
                    );


            image.addEventListener(
                "load",
                () => {

                    placeholder.style.display =
                        "none";

                }
            );


            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";

                    placeholder.style.display =
                        "flex";

                }
            );

        }
    );


/* =========================================================
   HERO IMAGE FALLBACK
========================================================= */

const heroImage =
    document.querySelector(
        ".hero-frame img"
    );

const heroPlaceholder =
    document.querySelector(
        ".hero-frame .photo-placeholder"
    );


heroImage.addEventListener(
    "load",
    () => {

        heroPlaceholder.style.display =
            "none";

    }
);


heroImage.addEventListener(
    "error",
    () => {

        heroImage.style.display =
            "none";

        heroPlaceholder.style.display =
            "flex";

    }
);


/* =========================================================
   GALLERY FALLBACK
========================================================= */

document
    .querySelectorAll(".gallery-item")
    .forEach(
        item => {

            const image =
                item.querySelector("img");

            const placeholder =
                item.querySelector(
                    ".photo-placeholder"
                );


            image.addEventListener(
                "load",
                () => {

                    placeholder.style.display =
                        "none";

                }
            );


            image.addEventListener(
                "error",
                () => {

                    image.style.display =
                        "none";

                    placeholder.style.display =
                        "flex";

                }
            );

        }
    );