const homepageLoader = () => {

      let parent = document.getElementById("content");

      let header = document.createElement("header");
      header.classList.add('image');
      header.innerHTML = `<p>Cafe Robusta</p>`
      parent.appendChild(header);

      let nav = document.createElement("nav");
      nav.innerHTML = `<ul>
                          <li class="homeTab">Home</li>
                          <li class="menuTab">Menu</li>
                          <li class="contactTab">Contact</li>
                        </ul>`
      parent.appendChild(nav);

      let description = document.createElement("div");
      description.classList.add('description');
      description.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.</p>`
      parent.appendChild(description);

}

function homeContent(){

      let description = document.querySelector(".description");

      description.innerHTML = `<p>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.</p>`
}


export {homepageLoader, homeContent};
