/**
 *
 * @returns {HTMLParagraphElement}
 */
let createParagraphText = () => {
  let paragraph = document.createElement("p");
  paragraph.textContent = ` Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Nihil ratione doloremque tempore minus quis beatae?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
       ducimus earum ea, qui itaque eaque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quis quod eius, reiciendis ipsa, explicabo tenetur est sint accusantium cupiditate tempore qui consequatur similique velit! Molestias vel iusto praesentium temporibus!`;
  return paragraph;
};

export default createParagraphText;
