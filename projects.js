
function makeNavigation(){
    let navPages = [
        {
            "name": "CV",
            "link": "https://docs.google.com/document/d/1NoXfaeBSOV3kW5FlUu1r8ojgWpsxWBXiXeodJUnKQh4/edit?usp=sharing"
        },
        {
            "name": "Research",
            "link": "research.html"
        },
        {
            "name": "CS Projects",
            "link": "projects.html"
        },
        {
            "name": "Creative",
            "link": "creative.html"
        }
    ]


    let st = `
            <a href="index.html">by Meg</a>
            <div class="navPages">`;

    for (let page of navPages){
        st += `<a href="${page.link}">${page.name}</a>`;
    }

    st+= `</div>`;

    document.getElementById("navigation").innerHTML = st;
}

function makeSections(){
    let sections = [
        {
            "name": "EZ Coder",
            "link": "https://megankwok168.github.io/MK-MyEmollient/ezCoder/ezCoder.html",
            "repository": "https://github.com/meganKwok168/MK-MyEmollient/tree/main/ezCoder",
            "descript": "Actively updated developer tool that was originally built for non-developers to easily edit the coded parts of the My Emollient website",
            "languages": ["JavaScript"],
            "authors": [
                {
                    "name": "Megan Kwok",
                    "link": "https://github.com/meganKwok168"
                }
            ], 
            "date": "14 August 2025"
        },
        {
            "name": "Website Elements (My Emollient)",
            "link": "https://megankwok168.github.io/MK-MyEmollient/elements.html",
            "repository": "https://github.com/meganKwok168/MK-MyEmollient",
            "descript": "Designed and developed elements of a website to improve user experience and encourage website interaction", 
            "languages": ["JavaScript"],
            "authors": [
                {
                    "name": "Megan Kwok",
                    "link": "https://github.com/meganKwok168"
                }
            ],
            "date": "14 August 2025"
        },
        {
            "name": "Angry Birds Clone",
            "link": "",
            "repository": "https://github.com/meganKwok168/AngryBirds-by-CHEW",
            "descript": "Library used: Fisica <br> Junior Year final CS project -- implemented self taught library w/o teacher or peer assistance.  Developed functioning clone of Angry Birds game.",
            "languages": ["Processing"],
            "authors": [
                {
                    "name": "Megan Kwok", 
                    "link": "https://github.com/meganKwok168"
                },
                {
                    "name": "Leo Schneiderman",
                    "link": "https://github.com/LeoSchneiderman"
                },
                {
                    "name": "William Li",
                    "link": "https://github.com/WillFunance"
                }
            ],
            "date": "14 August 2025"
        }
    ]

    let st = ``;

    for (let section of sections){
        st += `
        <a href="${section.link}"> <div class="sectionPart"><div class="sectionName">${section.name}</div>
        <a href=${section.repository} class="repository" style="text-align: center;">Github Repository</a>
            <div class="sectionDescript">${section.descript}</div> <div class="sectionDescript" style="padding-top: 1px;">Languages used: `;
        for (let l = 0; l < section.languages.length; l++){
            st += `${section.languages[l]}`;
            if (l != section.languages.length - 1){
                st += `, `;
            }
        }
        st+= `</div> <div class="sectionDescript" style="padding-top: 1px;">Authors: `
        for (let a = 0; a < section.authors.length; a++){
            st += `<a href=${section.authors[a].link} class="repository" style="padding-top: 1px;">${section.authors[a].name}</a>`;
            if (a != section.authors.length - 1){
                st += `, `;
            }
        } 
        st+=`</div><p style="color: gray; text-align: center;">Last edited ${section.date}.</p>
        </div></a>`;
    }

    document.getElementById("sections").innerHTML = st;
}

function makeFooter(){
    let date = `14 August 2025`;
    document.getElementById("footer").innerText = `Megan Kwok last updated ${date}.`
}

function makeAll(){
    makeNavigation();
    makeSections();
    makeFooter();
}

makeAll();