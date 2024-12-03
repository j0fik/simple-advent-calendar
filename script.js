document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.querySelector(".calendar");

    // Získanie aktuálneho dátumu
    const now = new Date();
    const currentDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    // Vlastné texty pre každý deň
    const dayTexts = {
         1: `
            <p><b>Responzóriový žalm Ž 25, 4-5b. 8-9. 10+14</b></p>
            <p><b>Ukáž mi, Pane, svoje cesty</b></p>
            <p>a pouč ma o svojich chodníkoch.</p>
            <p>Veď ma vo svojej pravde a uč ma,</p>
            <p>lebo ty si Boh, moja spása. <b>R.</b></p>
            <p><b>Pán je dobrý a spravodlivý:</b></p>
            <p>ukazuje cestu hriešnikom.</p>
            <p>Pokorných vedie k správnemu konaniu</p>
            <p>a tichých poúča o svojich cestách. <b>R.</b></p>
            <p>Všetky cesty Pánove sú milosrdenstvo a vernosť</p>
            <p>pre tých, čo zachovávajú jeho zmluvu a jeho príkazy.</p>
            <p>Pán bude dôverným priateľom tým, čo sa ho boja,</p>
            <p>a zjaví im svoju zmluvu.</p>
            <br>
            <p><b>Dnešná Misia:</b></p>
            <p>Utíšim sa kompletne na 15 min., pôjdem sa prejsť alebo si ľahnem. Aby som počas celého adventu išiel po Pánovych cestách.</p>
        `,
        2: `
        <p><b>Responzóriový žalm Ž 122, 1-2. 3-4a. (4b-5. 6-7.) 8-9</b></p>
        <p>Zaradoval som sa, keď mi povedali: *</p>
        <p>„Pôjdeme do domu Pánovho.“</p>
        <p>Naše nohy už stoja *<br>
        v tvojich bránach, Jeruzalem. <b>R.</b></p>
        <p>Jeruzalem je vystavaný ako mesto *<br>
        spojené v jeden celok.</p>
        <p>Tam prichádzajú kmene, *<br>
        kmene Pánove. <b>R.</b></p>
        <p>(aby podľa obyčaje Izraela *<br>
        velebili meno Pánovo.<br>
        Lebo sú tam súdne stolice, *<br>
        stolice domu Dávidovho. <b>R.</b></p>
        <p>Pre Jeruzalem proste o pokoj: *<br>
        „Nech sú bezpeční, čo ťa milujú.<br>
        Nech pokoj vládne vnútri tvojich hradieb *<br>
        a istota v tvojich palácoch.“ <b>R.</b>)</p>
        <p>Kvôli svojim bratom a priateľom *<br>
        budem hovoriť: „Pokoj s tebou!“</p>
        <p>Kvôli domu Pána, nášho Boha, *<br>
        budem prosiť o šťastie pre teba. <b>R.</b></p>
        <br>
        <p><b>Dnešná Misia:</b></p>
        <p>Uzmierim/porozprávam sa s človekom, s ktorým som sa dávno nerozprával. Pôjdem dnes do kostola aspoň na chvíľu, poďakovať Bohu a prosiť o milosti na ďalšie dni.</p>
    `,
        3: `
        <p><b>Responzóriový žalm Ž 72, 1-2. 7-8. 12-13. 17</b></p>
        <p>Bože, zver svoju právomoc kráľovi, *<br>
        kráľovmu synovi svoju spravodlivosť,<br>
        aby spravodlivo vládol nad tvojím ľudom *<br>
        a podľa práva nad tvojimi chudobnými. <b>R.</b></p>
        
        <p>V jeho dňoch bude prekvitať spravodlivosť<br>
        a plnosť pokoja, *<br>
        kým mesiac nezhasne.<br>
        A bude panovať od mora až k moru *<br>
        a od Rieky až na kraj zeme. <b>R.</b></p>
        
        <p>On vyslobodí bedára, čo volá k nemu, *<br>
        i chudobného, ktorému nik nepomáha.<br>
        Zmiluje sa nad chudobným a bedárom, *<br>
        zachráni život úbožiakom. <b>R.</b></p>
        
        <p>Jeho meno nech je velebené naveky; *<br>
        kým bude svietiť slnko, jeho meno potrvá.<br>
        V ňom budú požehnané všetky kmene zeme, *<br>
        zvelebovať ho budú všetky národy. <b>R.</b></p>
        <br>
        
        <p><b>Dnešná Misia:</b></p>
        <p>V dnešnej dobe je veľa ľudí chudobných – finančne alebo duchovne.<br>
        Dnes sa pokúsim porozprávať alebo vypočuť niekoho duchovne chudobného,<br>
        a odložím/kúpim vec, ktorú využijú bezdomovci (ponožky, konzervy, deky).<br>
        O svojej skúsenosti napíšem do skupiny. 😊</p>
    `,
        4: "Relaxuj, čítaj a oddychuj."
    };

    // Vytvorenie 24 políčok
    for (let i = 1; i <= 24; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = i;

        const unlockDate = new Date(currentDay.getFullYear(), 11, i);

        if (currentDay >= unlockDate) {
            dayElement.classList.add("opened");
            dayElement.addEventListener("click", () => openModal(i));
        } else {
            dayElement.classList.add("locked");
        }

        calendar.appendChild(dayElement);
    }

    function openModal(day) {
        const modal = document.getElementById("modal");
        const imgElement = document.getElementById("modal-img");
        const textElement = document.getElementById("modal-text");

        imgElement.src = `images/day${day}.jpg`;
        imgElement.alt = `Obrázok pre deň ${day}`;
        textElement.innerHTML = dayTexts[day] || `Toto je obsah dňa ${day}: Prekvapenie!`;

        modal.style.display = "flex";
    }

    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");

    modal.addEventListener("click", (event) => {
        if (event.target === modal || event.target === closeModal) {
            modal.style.display = "none";
        }
    });
});
