let setUp = () => {
  // creating this format in html
  // <!-- logo -->
  // <button class="purchase">Purchase</button>
  // <h1 class="header">Losama</h1>
  // <p>
  //   Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
  //   adipisicing elit. Nihil ratione doloremque tempore minus quis beatae?
  //   Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
  //   ducimus earum ea, qui itaque eaque.
  // </p>
  let contentElement = document.querySelector("#content");

  let logoButton = document.createElement("button");
  logoButton.classList.add("purchase");
  logoButton.textContent = "Purchase";

  let headerTitle = document.createElement("h1");
  headerTitle.classList.add("header");
  headerTitle.textContent = "Losama";

  let paragraph = document.createElement("p");
  paragraph.textContent = ` Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Nihil ratione doloremque tempore minus quis beatae?
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
     ducimus earum ea, qui itaque eaque.`;

  contentElement.append(setUpSvg(), logoButton, headerTitle, paragraph);
};

/**
 *
 * @returns {SVGElement}
 */
let setUpSvg = () => {
  // creating this format in html
  // <svg
  //   width="24"
  //   height="24"
  //   viewBox="0 0 24 24"
  //   fill="none"
  //   stroke="white"
  //   stroke-width="2"
  //   stroke-linecap="round"
  //   stroke-linejoin="round"
  //   class="feather feather-coffee"
  // >
  //   <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
  //   <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
  //   <line x1="6" y1="1" x2="6" y2="4"></line>
  //   <line x1="10" y1="1" x2="10" y2="4"></line>
  //   <line x1="14" y1="1" x2="14" y2="4"></line>
  // </svg>
  let svg = document.createElement("svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "white");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("class", "feather feather-coffee");
  let path = document.createElement("path");
  path.setAttribute("d", "M18 8h1a4 4 0 0 1 0 8h-1");
  path.setAttribute("d", "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z");
  let line1 = document.createElement("line");
  line1.setAttribute("x1", "6");
  line1.setAttribute("y1", "1");
  line1.setAttribute("x2", "10");
  line1.setAttribute("y2", "4");
  let line2 = document.createElement("line");
  line2.setAttribute("x1", "10");
  line2.setAttribute("y1", "1");
  line2.setAttribute("x2", "10");
  line2.setAttribute("y2", "4");
  let line3 = document.createElement("line");
  line3.setAttribute("x1", "14");
  line3.setAttribute("y1", "1");
  line3.setAttribute("x2", "14");
  line3.setAttribute("y2", "4");
  svg.append(path, line1, line2, line3);
  return svg;
};

export default setUp;
