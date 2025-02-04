import cake from "./cake.ico";

export default () => {
  console.log("Hello Menu!");
  document.querySelector("body").style.backgroundImage = "none";
  document.body.style.backgroundColor = "pink";

  // Select and create elements
  const divContent = document.querySelector("div#content");
  const pinkCakeHeadline = document.createElement("h1");
  const cakeImage = document.createElement("img");
  const cakePrice = document.createElement("p");

  //Modify text content
  pinkCakeHeadline.textContent = "Pink Strawberry Superb Cake";
  cakePrice.textContent = "$19.99";

  cakeImage.src = cake;

  //Append child to content body
  divContent.appendChild(pinkCakeHeadline);
  divContent.appendChild(cakeImage);
  divContent.appendChild(cakePrice);
};
