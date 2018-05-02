const menuContent = () => {

    let description = document.querySelector('.description');
    description.innerHTML = `This is the menu:<br>
                            <ul class="menu">
                                <li>Pasta</li>
                                <li>Pizza</li>
                                <li>Burger</li>
                            </ul>`;
}

export {menuContent};
