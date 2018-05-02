const homepageLoader = () => {

      let parent = document.getElementById("content");

      let header = document.createElement("header");
      header.classList.add('image');
      parent.appendChild(header);

      let nav = document.createElement("nav");
      nav.innerHTML = `<ul>
                          <li>Home</li>
                          <li>Menu</li>
                          <li>Contact</li>
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


export {homepageLoader};
