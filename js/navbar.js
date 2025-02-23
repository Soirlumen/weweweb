
// Get full path of current script
const actScriptPath = new URL(document.currentScript.src).pathname;
// Get only directory path from full path of current script
const basePath = actScriptPath.substring(0, actScriptPath.lastIndexOf('/'));

console.log(actScriptPath)
console.log(basePath)

const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `

 <div class="menu" style="box-shadow: 0px 2px 4px var(--idk)">
    <a href="https://fjfi.cvut.cz/cz/" class="logo"></a>
    <div class="navtext">Stránky Ing. P. Eichlera, PhD</div>
    <input type="checkbox" id="menu-bar">
    <label for="menu-bar">Menu</label>
    <div class="navbar">
        <ul>
            <li><a href="index.html">Domů</a></li>
            <li>
                <a href="#">O mně</a>
                <ul>
                    <span class="small_separator"></span>
                    <li><a href="medajlonka.html">Info</a></li>
                    <span class="small_separator"></span>
                    <li><a href="kratkeCV.html">CV</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Výuka</a>
                <ul>
                    <span class="small_separator"></span>
                    <li><a href="predmety.html">Vyučované předměty</a></li>
                    <span class="small_separator"></span>
                    <li><a href="rozvrh.html">Rozvrh</a></li>
                    <span class="small_separator"></span>
                    <li><a href="temata.html">Nabídka témat</a></li>
                    <span class="small_separator"></span>
                    <li><a href="vedeni_studenti.html">Vedení studenti</a></li>
                    
                    
                </ul>
            </li>
            <li>
                <a href="#">Výzkum</a>
                <ul>
                    <span class="small_separator"></span>
                    <li><a href="publikace.html">Publikace</a></li>
                    <span class="small_separator"></span>
                    <li><a href="konference.html">Konference</a></li>
                    <span class="small_separator"></span>
                    <li><a href="vyzkumneprojekty.html">Výzkumné projekty</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
`;


class NavigationBar extends HTMLElement {
	constructor(){
		super();

        const shadow = this.attachShadow({mode: 'open'});
		shadow.appendChild(navbarTemplate.content.cloneNode(true));

        const styleMainLink = document.createElement('link');
		styleMainLink.rel = 'stylesheet';
		styleMainLink.href = './css/styles.css';
		shadow.appendChild(styleMainLink)

        const styleOtherLink = document.createElement('link');
		styleOtherLink.rel = 'stylesheet';
		styleOtherLink.href = './css/ostatni.css';
		shadow.appendChild(styleOtherLink)
	}

	connectedCallback() {

		

	}
}

customElements.define('navigation-bar', NavigationBar);

// function adjustNavbar() {

//  console.log("Neco")

//  const hamburger = document.createElement("button");
//  hamburger.classList.add("hamburger");
//  hamburger.textContent = "☰";
//  document.querySelector("header").prepend(hamburger);

//  hamburger.addEventListener("click", function() {
//    const menu = document.getElementById("menu");
//    menu.classList.toggle("show");
//  });
// }

// document.addEventListener("DOMContentLoaded", adjustNavbar);

// function loadNavbar() {
//
//	const navbarData = 'navbar.html'
//	const navbarPlaceholder = 'navbar-placeholder'

//	fetch(navbarData)
//	.then(response => response.text())
//	.then(data => {
//		document.getElementById(navbarPlaceholder).innerHTML = data;
//	});
// }
// document.addEventListener('DOMContentLoaded', loadNavbar);