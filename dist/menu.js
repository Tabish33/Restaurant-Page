const menuContent = () => {

    let description = document.querySelector('.description');
    description.innerHTML = `
                            <ul class="menu">
                                <li>Pasta</li>
                                <li>Pizza</li>
                                <li>Burger</li>
                            </ul>`;
}

export {menuContent};
