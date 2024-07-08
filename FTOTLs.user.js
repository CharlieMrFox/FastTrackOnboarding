// ==UserScript==
// @name         FTOTLs
// @namespace    Charlie's
// @version      v072024.0
// @description  Adding Fast-track banner to TL's interface.
// @icon         https://test.io/content/dam/test-io/test_io_logo1.svg
// @match        https://teamleader.test.io/test_cycles/*/bugs/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    // Function to inject the script into the page
    function injectScript(scriptText) {
        const scriptElement = document.createElement('script');
        scriptElement.textContent = scriptText;
        document.head.appendChild(scriptElement);
    }

    // Retrieve the script from GitHub raw file
    fetch('https://raw.githubusercontent.com/CharlieMrFox/FastTrackOnboarding/main/v072024.0')
        .then(response => response.text())
        .then(script => {
            injectScript(script);
        });

})();
