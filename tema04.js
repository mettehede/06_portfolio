window.addEventListener("load", sidenVises);

function sidenVises() {
    document.querySelector("#pink_sprite").classList.add("drej");

    document.querySelector("#pink_sprite").classList.add("drej"); /*når pink har kørt en gang*/
    document.querySelector("#pink_sprite").addEventListener("animationiteration", drej1Gang);
}

function pinkDrej() {
    console.log("pinkDrej");
    document.querySelector("#pink_sprite").classList.add("drej");
    document.querySelector("#pink_sprite").addEventListener("animationend", drejDone);
}

function drejDone() {
    console.log("drejDone");
    document.querySelector("#pink_sprite").classList.remove("drej");
}

function drej1Gang() {
    console.log("drej1Gang");
    document.querySelector("#klods1_container").classList.add("hop");
    document.querySelector("#klods1_container").addEventListener("animationend", hopDone);
    document.querySelector("#klods2_container").classList.add("hop");
    document.querySelector("#klods2_container").addEventListener("animationend", hopDone);
    document.querySelector("#klods3_container").classList.add("hop");
    document.querySelector("#klods3_container").addEventListener("animationend", hopDone);
    document.querySelector("#klods4_container").classList.add("hop");
    document.querySelector("#klods4_container").addEventListener("animationend", hopDone);
    document.querySelector("#klods5_container").classList.add("hop");
    document.querySelector("#klods5_container").addEventListener("animationend", hopDone);
    document.querySelector("#klods6_container").classList.add("hop");
    document.querySelector("#klods6_container").addEventListener("animationend", hopDone);
    document.querySelector("#klods7_container").classList.add("hop");
    document.querySelector("#klods7_container").addEventListener("animationend", hopDone);
    document.querySelector("#klods8_container").classList.add("hop");
    document.querySelector("#klods8_container").addEventListener("animationend", hopDone);

}

function hopDone() {
    console.log("hopDone");
    document.querySelector("#klods1_container").classList.remove("hop");
    document.querySelector("#klods2_container").classList.remove("hop");
    document.querySelector("#klods3_container").classList.remove("hop");
    document.querySelector("#klods4_container").classList.remove("hop");
    document.querySelector("#klods5_container").classList.remove("hop");
    document.querySelector("#klods6_container").classList.remove("hop");
    document.querySelector("#klods7_container").classList.remove("hop");
    document.querySelector("#klods8_container").classList.remove("hop");
}


const knap = document.querySelector('#knap');
const box = document.querySelector('nav');

knap.addEventListener('click', toggle);

function toggle() {
    box.classList.toggle('toggle');
}
