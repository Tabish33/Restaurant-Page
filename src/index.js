import {homepageLoader , homeContent} from '../dist/homepage.js';
import {menuContent} from '../dist/menu.js';
import {contactContent} from '../dist/contact.js';

homepageLoader();

(function switchTab(){
    let prev_tab = document.querySelector(".homeTab");
    let menuTab = document.querySelector(".menuTab");
    menuTab.onclick = function(){
        menuContent();
        highlightTab(prev_tab, menuTab);
        prev_tab = menuTab;
    }

    let homeTab = document.querySelector(".homeTab");
    homeTab.onclick = function(){
        homeContent();
        highlightTab(prev_tab, homeTab);
        prev_tab = homeTab;
    }

    let contactTab = document.querySelector(".contactTab");
    contactTab.onclick = function(){
        contactContent();
        highlightTab(prev_tab, contactTab);
        prev_tab = contactTab;
    }

})();

function highlightTab(prev_tab, curr_tab){
    prev_tab.setAttribute('style','color:black;');
    curr_tab.setAttribute('style','color:white;');
}
