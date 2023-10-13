import { createHeaderPage } from "../common/header.js";	
import { createFooterPage } from "../common/footer.js";

function createIndexPage(div) {
    let ihtml = [];
    let idx = 0;

    ihtml[idx++] = "<div id='header'></div>";
    ihtml[idx++] = "<div>This is Index Page</div>";
    ihtml[idx++] = "<div id='footer'></div>";


    div.innerHTML = ihtml.join("");

    createHeaderPage(document.getElementById("header"));	
    createFooterPage(document.getElementById("footer"));
}

createIndexPage(document.getElementById("root"));   