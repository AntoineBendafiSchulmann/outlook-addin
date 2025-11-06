/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************!*\
  !*** ./src/taskpanel.ts ***!
  \**************************/

Office.onReady(() => {
    const btn = document.getElementById("show-foyers");
    if (!btn)
        return;
    btn.addEventListener("click", () => {
        const container = document.getElementById("foyer-list");
        if (container) {
            container.innerHTML = `
        <ul>
          <li>Foyer 1</li>
          <li>Foyer 2</li>
          <li>Foyer 3</li>
        </ul>
      `;
        }
    });
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3BhbmVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL291dGxvb2stYWRkaW4vLi9zcmMvdGFza3BhbmVsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2ZmaWNlLm9uUmVhZHkoKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvdy1mb3llcnNcIik7XG4gICAgaWYgKCFidG4pXG4gICAgICAgIHJldHVybjtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3llci1saXN0XCIpO1xuICAgICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5Gb3llciAxPC9saT5cclxuICAgICAgICAgIDxsaT5Gb3llciAyPC9saT5cclxuICAgICAgICAgIDxsaT5Gb3llciAzPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICBgO1xuICAgICAgICB9XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==