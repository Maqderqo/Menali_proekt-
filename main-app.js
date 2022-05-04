//#region Hamburger
function addEvents() {
    const hamburger = document.getElementById("hamburger");
    hamburger.addEventListener("click", () => {
        hamburger.children[0].classList.toggle("rotate-right");
        hamburger.children[1].classList.toggle("rotate");
        hamburger.children[2].classList.toggle("rotate-left");
        const bgs = document.getElementsByClassName('menubg');
        console.log(bgs);

        console.log(!bgs[0].classList.contains("openmenu"));
        if (!bgs[0].classList.contains("openmenu")) {
            bgs[0].classList.add("openmenu");
            bgs[0].classList.remove("closemenu");
            setTimeout(() => {
                bgs[1].classList.add("openmenu");
                bgs[1].classList.remove("closemenu");
            }, 150)
        } else {
            bgs[1].classList.remove("openmenu");
            bgs[1].classList.add("closemenu");
            setTimeout(() => {
                bgs[0].classList.remove("openmenu");
                bgs[0].classList.add("closemenu");
            }, 250);
        }
    });
}



addEvents();