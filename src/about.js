export default () => {
  const contentBody = document.querySelector("div#content");
  const headline = document.createElement("h1");

  headline.textContent =
    "Hi, not much here, a bit lazy to get this done, but this is the about page. If you see this message, then my code here is working.";

  contentBody.appendChild(headline);
};
