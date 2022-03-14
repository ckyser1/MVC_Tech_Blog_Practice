const $navIcon = document.querySelector(`#nav-icon`);
const $nav = document.querySelector(`nav`);
const $header = document.querySelector(`header`);

function openNavigation() {
    switch ($navIcon.getAttribute(`src`)) {
        case `./images/icon-hamburger.svg`:
            $navIcon.setAttribute(`src`, `./images/icon-close.svg`)
            console.log(`this is when the navigation will open`)
            $header.style.height = `100vh`;
            break;
        case `./images/icon-close.svg`:
            $navIcon.setAttribute(`src`, `./images/icon-hamburger.svg`)
            console.log(`this is when the navigation will close`)
            $header.style.height = `auto`;
        default:
            break;
    }
}

$navIcon.addEventListener(`click`, openNavigation);
