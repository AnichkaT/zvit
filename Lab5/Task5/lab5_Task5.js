const menuData = [
    {
        name: "Головна",
        link: "index.html",
        subMenu: []
    },
    {
        name: "Про нас",
        link: "about.html",
        subMenu: []
    },
    {
        name: "Послуги",
        link: "#",
        subMenu: [
            { name: "Обслуговування", link: "service.html" }
        ]
    },
    {
        name: "Контакти",
        link: "contact.html",
        subMenu: []
    }
];

function createMenu(menuArray, containerId) {
    const container = document.getElementById(containerId);

    menuArray.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = item.link;
        a.innerText = item.name;
        li.appendChild(a);

        if (item.subMenu && item.subMenu.length > 0) {
            const subMenuContainer = document.createElement('ul');
            item.subMenu.forEach(subItem => {
                const subLi = document.createElement('li');
                const subA = document.createElement('a');
                subA.href = subItem.link;
                subA.innerText = subItem.name;
                subLi.appendChild(subA);
                subMenuContainer.appendChild(subLi);
            });
            li.appendChild(subMenuContainer);
        }

        container.appendChild(li);
    });
}

createMenu(menuData, "horizontal-menu");
createMenu(menuData, "vertical-menu");