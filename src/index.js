import "./style.css";
import initialSetUp from "./inital-page";
import createTab2Content from "./tab2Content";
import createSchedulesView from "./tab3Content";
import createParagraphText from "./tab1Content";

/**
 * @type {HTMLImageElement}
 */

//Declarations
let tabAlreadyClicked = "tab1";

//made this so that when the elements are drawn by inital-page.js then it runs
let callAfterInitialSetup = () => {
  //get element
  let tabButton1 = document.querySelector("#content .tab button.tab1");
  let tabButton2 = document.querySelector("#content .tab button.tab2");
  let tabButton3 = document.querySelector("#content .tab button.tab3");
  let tabContent = document.querySelector("#content div.tabcontent");

  //listeners
  tabButton1.addEventListener("click", () => {
    tabClicked(tabButton1);
  });

  tabButton2.addEventListener("click", () => {
    tabClicked(tabButton2);
  });

  tabButton3.addEventListener("click", () => {
    tabClicked(tabButton3);
  });

  //Functions
  /**
   *
   * @param {HTMLButtonElement} button
   */
  let tabClicked = (button) => {
    let buttonName = button.textContent;
    console.log(buttonName);
    switch (buttonName) {
      case "tab1":
        if (buttonName == tabAlreadyClicked) return;
        clearAlreadyClickedTabButtons();
        console.log(buttonName, tabAlreadyClicked);
        tabButton1.classList.add("buttontab");
        tabAlreadyClicked = "tab1";
        //creates a paragraph if clicked
        //p.s to save code duplication function is taken from inital-page.js
        let paragraph = createParagraphText();

        tabContent.append(paragraph);
        break;
      case "tab2":
        if (buttonName == tabAlreadyClicked) return;
        clearAlreadyClickedTabButtons();
        tabButton2.classList.add("buttontab");
        tabAlreadyClicked = "tab2";
        //creating card elements
        let listOfCreatedCards = createTab2Content();
        // console.log(tabAlreadyClicked);
        listOfCreatedCards.forEach((value) => {
          tabContent.append(value);
        });
        break;
      case "tab3":
        if (buttonName == tabAlreadyClicked) return;
        clearAlreadyClickedTabButtons();
        console.log(buttonName, tabAlreadyClicked);
        tabButton3.classList.add("buttontab");
        tabAlreadyClicked = "tab3";

        //creating schedules
        let schedulesView = createSchedulesView();

        tabContent.append(schedulesView);
        break;
      default:
        console.log("Some thing wrong was in tab buttons", buttonName);
    }
  };

  let clearAlreadyClickedTabButtons = () => {
    if (tabButton1.classList.contains("buttontab")) {
      tabButton1.classList.remove("buttontab");
    } else if (tabButton2.classList.contains("buttontab")) {
      tabButton2.classList.remove("buttontab");
    } else if (tabButton3.classList.contains("buttontab")) {
      tabButton3.classList.remove("buttontab");
    }

    while (tabContent.hasChildNodes()) {
      tabContent.removeChild(tabContent.firstChild);
    }
  };
};

//initial Html setup
initialSetUp(callAfterInitialSetup);
