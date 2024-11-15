const skills = [
    {
        icon: "./Image/html-flat.png",
        title: "HTML-5",
    },
    {
        icon: "./Image/css_icon.png",
        title: "CSS 3",
    },
    {
        icon: "./Image/js-icon.png",
        title: "Java Script",
    },
    {
        icon: "./Image/node-js_icon.png",
        title: "Node Js",
    },
    {
        icon: "./Image/icons8-react-js-144.png",
        title: "React Js",
    },
    {
        icon: "./Image/icons8-redux-144.png",
        title: "Redux",
    },
    {
        icon: "./Image/icons8-tailwind-css-144.png",
        title: "Tailwind-css",
    },
    {
        icon: "./Image/icons8-chakra-ui-144.png",
        title: "Chakra Ui",
    }
]

const skillCont = document.querySelector(".skillcontaint>div")

skills.map((skill,ind)=>{
    const skillDiv = document.createElement("div")
    const skillBox = `
                    <div>
                        <img src=${skill?.icon} alt=${skill.title}>
                    </div>
                    <h2>${skill.title}</h2>
    `
    skillDiv.innerHTML = skillBox

    skillCont.append(skillDiv)
})

