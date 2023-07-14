import img1 from "../src/asset/img1.jpg";
import img2 from "../src/asset/img2.jpg";
import img3 from "../src/asset/img3.jpg";

/**
 *
 * @returns {Array<HTMLDivElement>}
 */
let createTab2Content = () => {
  let prices = ["20.0$", "40.0$", "60.0$"];
  let imgSources = [img1, img2, img3];
  let nameOfCoffees = ["Brewed Coffee", "Cappuccino", "Cold Brew"];
  let listOfCardCreated = [];
  for (let i = 0; i < 3; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let imgOfCoffeeCard = document.createElement("img");
    imgOfCoffeeCard.src = `${imgSources[i]}`;

    let textFlexContainer = document.createElement("div");
    textFlexContainer.classList.add("container");

    let nameOfCoffee = document.createElement("h1");
    nameOfCoffee.textContent = nameOfCoffees[i];

    let priceOfCoffee = document.createElement("p");
    priceOfCoffee.textContent = prices[i];

    textFlexContainer.append(nameOfCoffee, priceOfCoffee);

    card.append(imgOfCoffeeCard, textFlexContainer);
    listOfCardCreated.push(card);
  }
  return listOfCardCreated;
};

export default createTab2Content;
