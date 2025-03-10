﻿

const footerElemTemplate = document.createElement('template');

footerElemTemplate.innerHTML = `
<div class="footer navtext" style="box-shadow: 0px 2px 4px var(--idk)"><span>2025 © AIPV crew |
	<span class="quoteDisplayBox">Loading...</span></span>
</div>
`;

class FooterElem extends HTMLElement {

	static quotes = [
		"„Jenom život, který žijeme pro ostatní, stojí za to.“ — Albert Einstein",
		"„Všichni víme, že světlo putuje rychleji než zvuk. Proto někteří lidé vypadají chytře, dokud je neslyšíte mluvit.“ — Albert Einstein",
		"„Svět je nebezpečné místo k životu, ne kvůli lidem, kteří jsou zlí, ale kvůli lidem, kteří s tím nic neudělají.“ — Albert Einstein",
		"„První láska je jako los, který obvykle nevyhrává, ale jeho číslo si pamatujeme celý život.“ — Émile Zola",
		"„Pokud se lidé dokážou mít alespoň trochu rádi, mohou být šťastní.“ — Émile Zola",
		"„Přemýšlíme příliš a cítíme málo.“ — Charlie Chaplin",
		"„Tvé nahé tělo by mělo patřit jedině těm, kteří se zamilují do tvé nahé duše.“ — Charlie Chaplin",
		"„Člověk raději poznává vesmír než sebe sama.“ — Ernest Hemingway",
		"„Jsem si jistý, že vesmír je plný inteligentního života. Je však příliš inteligentní na to, aby sem přišel.“ — Arthur C. Clarke",
		"„Když se člověk ptá: „Miluji vůbec?“, odpověď je vždy ne.“ — Arthur C. Clarke",
		"„Život nás požírá, my život utrácíme - kdo z nás bude s tím druhým dříve hotov?“ — Josef Čapek",
		"„Musíte v něco věřit: instinkt, osud, život, karmu, cokoliv.“ — Steve Jobs",
		"„Nemůžete se jednoduše zeptat zákazníků, co chtějí, a pak se to pokusit sestavit. V době, kdy to budete mít hotové, už budou chtít něco jiného.“ — Steve Jobs",
		"„Nejhorší zbraní škodolibosti je posměch, nejvzácnějším darem lásky je porozumění.“ — Otto František Babler",
		"„Chceme-li si splnit sen, musíme o něm snít.“ — Walt Disney",
		"„Když o tom dokážeš snít, dokážeš to udělat.“ — Walt Disney",
		"„Vždycky jsem hrdý na to, jak dokážu milovat svět - nenávidět ho je totiž mnohem snazší.“ — Jack Kerouac",
		"„Život musí být bohatý a plný lásky - jinak není dobrý, není dobrý vůbec, pro nikoho.“ — Jack Kerouac",
	];

	constructor() {
		super();

		const shadow = this.attachShadow({mode: 'open'});
		shadow.appendChild(footerElemTemplate.content.cloneNode(true));

		const styleMainLink = document.createElement('link');
		styleMainLink.rel = 'stylesheet';
		styleMainLink.href = './css/styles.css';
		shadow.appendChild(styleMainLink);

		const styleOtherLink = document.createElement('link');
		styleOtherLink.rel = 'stylesheet';
		styleOtherLink.href = './css/ostatni.css';
		shadow.appendChild(styleOtherLink);
	}

	quoteOnChange() {


		const randomIndex = Math.floor(Math.random() * FooterElem.quotes.length);
		this.shadowRoot.querySelector('.quoteDisplayBox').innerText = FooterElem.quotes[randomIndex];
	}

	connectedCallback() {

		this.boundQuoteOnChange = this.quoteOnChange.bind(this);
		this.boundQuoteOnChange();

		// 120000 = 2 min
		setInterval(this.boundQuoteOnChange, 120000);
	}

}

customElements.define('footer-elem', FooterElem);