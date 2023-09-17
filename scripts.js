const education = [
    {
        baslik: "ATATÜRK HIGH SCHOOL",
        tarih: "2023 - 2025",
    },
    {
        baslik: "ISTIKLAL MAKZUME ANATOLIAN SCHOOL",
        tarih: "2021 - 2023",
    },
    {
        baslik: "YETKİN GENÇLER",
        tarih: "9/2022 - 12/2022",
        aciklama: "YetGen is a 12-week 21st Century Competencies Training Program where pieces of training such as Effective Presentation Techniques, Teamwork, Career Planning, Excel, Information / Media / Finance Literacy, Social Innovation, and GirişGen process have been organized. I have successfully completed the assignments given during the Yetkin Gençler Education and Awareness Program, and learnt to establish my enterprise with the focus of the UN Sustainable Development Goals within the GirişGen process.",
    },
];

const proje = [
    {
        baslik: "FIRST ROBOTIC COMPETITION",
        takim: "Laissez Faire",
        tarih: "2024",
        aciklama: "In this team, I served as a PR team member, contributing to event planning, PR strategy development, design work for social media, and sponsorship applications. I honed my skills in Excel, Solidworks, Adobe Illustrator, and Adobe Photoshop.",
    },
    {
        baslik: "TEKNOFEST PROJECT",
        takim: "Team CartaGeo",
        tarih: "2023",
        aciklama: "We've designed 'Barrier-Free Map,' a mobile app to help visually and mobility-impaired people navigate with fewer obstacles. We have earned the right to participate in the Teknofest 2023 finals.",
    },
    {
        baslik: "TEKNOFEST PROJECT",
        takim: "Team BIOHACKERS",
        tarih: "2022",
        aciklama: "We participated in Teknofest with the project we created to facilitate the implementation of COVID-19 tests in our country.",
    },
    {
        baslik: "E-TWINNING PROJECT",
        tarih: "2022",
        aciklama: "Collaborated with a team of ten students and filmed a short drama about Ebubekir Er Razi’s life story.",
    },
    {
        baslik: "FIRST LEGO LEAGUE CHALLENGE",
        takim: "Team Robokod Kozmos",
        tarih: "2019",
        aciklama: "The FIRST LEGO League Challenge is an international competition organized by FIRST for elementary and middle school students. This is the project where I first gained the awareness of teamwork.",
    },
];

const yetenekler = {
    Canva: true,
    "MS Office (Powerpoint, Excel, Word)": true,
    Solidworks: true,
    "Adobe Illustrator": true,
    "Adobe Photoshop": true,
    Python: true,
};

const hobiler = {
    "Playing Kalimba": true,
    "Soap Carving": true,
    "Nail Art": true,
    "Discovering new types of music": true,
    "Reading about politics, history, mythologies, and religions": true,
};

const diller = {
    "B2 in English": true,
    "Beginner in German": true,
    "Beginner in Russian": true,
};

const mainElement = document.querySelector("main");

// Education başlığı ekleniyor
const educationTitle = document.createElement("h2");
educationTitle.textContent = "Education";
mainElement.appendChild(educationTitle);

education.forEach(egitim => {
    const egitimDiv = document.createElement("div");
    egitimDiv.classList.add("egitim");

    const baslik = document.createElement("h3");
    baslik.textContent = egitim.baslik;

    const tarih = document.createElement("h4");
    tarih.textContent = egitim.tarih;

    const aciklama = document.createElement("p");
    aciklama.textContent = egitim.aciklama;

    egitimDiv.appendChild(baslik);
    egitimDiv.appendChild(tarih);
    egitimDiv.appendChild(aciklama);
    mainElement.appendChild(egitimDiv);
});

// Projects başlığı ekleniyor
const projectsTitle = document.createElement("h2");
projectsTitle.textContent = "Projects";
mainElement.appendChild(projectsTitle);

proje.forEach(projeler => {
    const projeDiv = document.createElement("div");
    projeDiv.classList.add("projeler");

    const baslik = document.createElement("h3");
    baslik.textContent = projeler.baslik;

    const takim = document.createElement("h4");
    takim.textContent = projeler.takim;

    const tarih = document.createElement("h5");
    tarih.textContent = projeler.tarih;

    const aciklama = document.createElement("p");
    aciklama.textContent = projeler.aciklama;

    projeDiv.appendChild(baslik);
    projeDiv.appendChild(takim);
    projeDiv.appendChild(tarih);
    projeDiv.appendChild(aciklama);
    mainElement.appendChild(projeDiv);
});

// Skills başlığı ekleniyor
const skillsTitle = document.createElement("h2");
skillsTitle.textContent = "Skills";
mainElement.appendChild(skillsTitle);

const yeteneklerDiv = document.createElement("div");
yeteneklerDiv.classList.add("yetenekler");

for (const key in yetenekler) {
    if (yetenekler[key]) {
        const yetenek = document.createElement("p");
        yetenek.textContent = `• ${key}`;
        yeteneklerDiv.appendChild(yetenek);
    }
}

mainElement.appendChild(yeteneklerDiv);

// Hobbies başlığı ekleniyor
const hobbiesTitle = document.createElement("h2");
hobbiesTitle.textContent = "Hobbies";
mainElement.appendChild(hobbiesTitle);

const hobilerDiv = document.createElement("div");
hobilerDiv.classList.add("hobiler");

for (const key in hobiler) {
    if (hobiler[key]) {
        const hobi = document.createElement("p");
        hobi.textContent = `• ${key}`;
        hobilerDiv.appendChild(hobi);
    }
}

mainElement.appendChild(hobilerDiv);

// Language başlığı ekleniyor
const languageTitle = document.createElement("h2");
languageTitle.textContent = "Language";
mainElement.appendChild(languageTitle);

const dillerDiv = document.createElement("div");
dillerDiv.classList.add("diller");

for (const key in diller) {
    if (diller[key]) {
        const dil = document.createElement("p");
        dil.textContent = `• ${key}`;
        dillerDiv.appendChild(dil);
    }
}

mainElement.appendChild(dillerDiv);
