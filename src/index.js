import {homepageLoader , homeContent} from '../dist/homepage.js';
import {menuContent} from '../dist/menu.js';
import {contactContent} from '../dist/contact.js';

homepageLoader();

(function switchTab(){
    let menuTab = document.querySelector(".menuTab");
    menuTab.onclick = function(){
        menuContent();
    }

    let homeTab = document.querySelector(".homeTab");
    homeTab.onclick = function(){
        homeContent();
    }

    let contactTab = document.querySelector(".contactTab");
    contactTab.onclick = function(){
        contactContent();
    }

})();
