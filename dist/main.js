!function(e){var n={};function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:t})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i(i.s=0)}([function(e,n,i){"use strict";i.r(n);(()=>{let e=document.getElementById("content"),n=document.createElement("header");n.classList.add("image"),e.appendChild(n);let i=document.createElement("nav");i.innerHTML='<ul>\n                          <li class="homeTab">Home</li>\n                          <li class="menuTab">Menu</li>\n                          <li class="contactTab">Contact</li>\n                        </ul>',e.appendChild(i);let t=document.createElement("div");t.classList.add("description"),t.innerHTML="<p>Lorem ipsum dolor sit amet, consectetur\n          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa\n          qui officia deserunt mollit anim id est laborum.</p>",e.appendChild(t)})(),document.querySelector(".menuTab").onclick=function(){document.querySelector(".description").innerHTML='This is the menu:<br>\n                            <ul class="menu">\n                                <li>Pasta</li>\n                                <li>Pizza</li>\n                                <li>Burger</li>\n                            </ul>'},document.querySelector(".homeTab").onclick=function(){document.querySelector(".description").innerHTML="<p>Lorem ipsum dolor sit amet, consectetur\n          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore\n          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor\n          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa\n          qui officia deserunt mollit anim id est laborum.</p>"},document.querySelector(".contactTab").onclick=function(){document.querySelector(".description").innerHTML="+41-1214-4313-12"}}]);