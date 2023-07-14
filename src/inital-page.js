import createParagraphText from "./tab1Content";

/**
 *
 * @param {Function} callBackFuntion
 */
let setUp = (callBackFuntion) => {
  let contentElement = document.querySelector("#content");
  let tabContentElement = document.createElement("div");

  contentElement.append(
    createSvgElement(),
    createHeaderTitle(),
    tabContentElement,
    createPurchaseButton(),
    createTabButton()
  );
  tabContentElement.setAttribute("class", "tabcontent");
  tabContentElement.append(createParagraphText());
  callBackFuntion();
};

/**
 *
 * @returns {HTMLHeadingElement}
 */
let createHeaderTitle = () => {
  let headerTitle = document.createElement("h1");
  headerTitle.classList.add("header");
  headerTitle.textContent = "Losama";
  return headerTitle;
};

/**
 * @returns {HTMLDivElement}
 */
let createTabButton = () => {
  // <div class="tab">
  //       <button class="tab1">tab1</button>
  //       <button class="tab2">tab2</button>
  //       <button class="tab3">tab3</button>
  //     </div>
  let tab = document.createElement("div");
  tab.classList.add("tab");
  let tabButton1 = document.createElement("button");
  tabButton1.classList.add("tab1");
  tabButton1.textContent = "tab1";
  tabButton1.classList.add("class", "buttontab");
  let tabButton2 = document.createElement("button");
  tabButton2.classList.add("tab2");
  tabButton2.textContent = "tab2";
  let tabButton3 = document.createElement("button");
  tabButton3.classList.add("tab3");
  tabButton3.textContent = "tab3";
  tab.append(tabButton1, tabButton2, tabButton3);
  return tab;
};

/**
 *
 * @returns {HTMLParagraphElement}
 */
let createPurchaseButton = () => {
  let logoButton = document.createElement("button");
  logoButton.classList.add("purchase");
  logoButton.textContent = "Purchase";
  return logoButton;
};

/**
 *
 * @returns {SVGElement}
 */
let createSvgElement = () => {
  let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "24");
  svg.setAttribute("height", "24");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "white");
  svg.setAttribute("stroke-width", "2");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");
  svg.setAttribute("class", "feather feather-coffee");
  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M18 8h1a4 4 0 0 1 0 8h-1");
  let path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path2.setAttribute("d", "M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z");
  let line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line1.setAttribute("x1", "6");
  line1.setAttribute("y1", "1");
  line1.setAttribute("x2", "6");
  line1.setAttribute("y2", "4");
  let line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line2.setAttribute("x1", "10");
  line2.setAttribute("y1", "1");
  line2.setAttribute("x2", "10");
  line2.setAttribute("y2", "4");
  let line3 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line3.setAttribute("x1", "14");
  line3.setAttribute("y1", "1");
  line3.setAttribute("x2", "14");
  line3.setAttribute("y2", "4");
  svg.append(path, path2, line1, line2, line3);
  return svg;
};

export default setUp;
