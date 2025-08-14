
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
            "name": "Research",
            "link": "research.html",
            "descript": "(programming language usage, CS education, CS industry)",
        },
        {
            "name": "CS Projects",
            "link": "projects.html",
            "descript": "(web development, developer tools, complex game design)"
        },
        {
            "name": "Creative",
            "link": "creative.html",
            "descript": "(photography, poetry, singing, competitive piano)"
        }
    ]

    let st = ``;

    for (let section of sections){
        st += `
        <a href="${section.link}"> <div class="sectionPart"><div class="sectionName">${section.name}</div>
            <div class="sectionDescript">${section.descript}</div>
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