const $navIcon = document.querySelector(`#nav-icon`);
const $nav = document.querySelector(`nav`);
const $header = document.querySelector(`header`);
const $searchBtn = document.querySelector(`#searchSubmit`)

function openNavigation() {
    switch ($navIcon.getAttribute(`src`)) {
        case `/images/icon-hamburger.svg`:
            $navIcon.setAttribute(`src`, `/images/icon-close.svg`)
            console.log(`this is when the navigation will open`)
            $header.classList.add(`open`);
            $header.classList.remove(`closed`);
            $nav.classList.add(`open`);
            $nav.classList.remove(`closed`);
            break;
        case `/images/icon-close.svg`:
            $navIcon.setAttribute(`src`, `/images/icon-hamburger.svg`)
            console.log(`this is when the navigation will close`)
            $header.classList.add(`closed`);
            $header.classList.remove(`open`);
            $nav.classList.add(`closed`);
            $nav.classList.remove(`open`);
        default:
            break;
    }
}

$navIcon.addEventListener(`click`, openNavigation);
window.addEventListener(`resize`, function () {
    if (window.innerWidth <= 575) {
        $searchBtn.innerHTML = `🔍Search`
    } else {
        $searchBtn.innerHTML = `🔍`
    }
})
