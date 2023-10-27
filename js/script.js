// Step 6 of 6
// Practice Exercises: Scope

// Exercise #2
// functions, forEach, let, createElement, classList, innerHTML,
// append, template literals

const halloweenMix = [
    "Thriller",
    "Superstition",
    "Heads Will Roll",
    "Pet Sematary",
    "Witchy Woman",
    "Disturbia",
    "Huanted",
    "Dracula's Wedding",
    "She Wolf",
    "(Don't Fear) The Reaper",
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");

const total = document.querySelector(".total");
total.innerText = `${halloweenMix.length} great Halloween songs.`;

const mixInfo = function (mix) {
    mix.forEach(function (song, index) {
        let li = document.createElement("li");
        li.classList.add("song");
        li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
        mixList.append(li);
    });
};

button.addEventListener("click", function () {
    mixList.classList.remove("hide");
    button.classList.add("hide");
    mixInfo(halloweenMix);
});
