"use strict";
function getElementStyleDeclaration(selector) {
    var element = document.querySelector(selector);
    var cssText = "";
    if (element) {
        cssText = element.style.cssText;
    }
    return cssText ? selector+"{"+cssText+"}" : "";
}
function getElementStyleDeclarations(selectors) {
    var cssText = "";
    for (var i = 0; i < selectors.length; i++) {
        cssText += getElementStyleDeclaration(selectors[i]);
    }
    return cssText;
}