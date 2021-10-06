const heading = document.createElement("h2");
heading.textContent = "Wedding Event";
heading.style.textAlign = "center";
heading.style.fontSize = "30px";

const btnToAnimate = document.createElement("button");
btnToAnimate.textContent = "Click Me";
btnToAnimate.style.marginLeft = "600px";

const divElement = document.createElement("div");
divElement.style.padding = "0.8%";
divElement.style.width = "500px";
divElement.style.margin = "auto";
divElement.style.backgroundColor = "pink";
const pageContent = document.createElement("p");
pageContent.textContent =
  "A wedding is a ceremony where two people or a couple are united in marriage. Wedding traditions and customs vary greatly between cultures, ethnic groups, religions, countries, and social classes. Most wedding ceremonies involve an exchange of marriage vows by the couple, presentation of a gift (offering, ring(s), symbolic item, flowers, money), and a public proclamation of marriage by an authority figure or celebrant. Special wedding garments are often worn, and the ceremony is sometimes followed by a wedding reception. Music, poetry, prayers or readings from religious texts or literature are also commonly incorporated into the ceremony.";

divElement.append(pageContent);

const divImage = document.createElement("div");
divImage.id = "image1";
const flowerImage1 = document.createElement("img");
flowerImage1.src = "./images/flower.jpg";
flowerImage1.height = "100";
flowerImage1.width = "100";

const flowerImage2 = document.createElement("img");
flowerImage2.src = "./images/floweImage1.jpg";
flowerImage1.height = "100";
flowerImage1.width = "100";

document.body.append(heading);
document.body.append(document.createElement("br"));
document.body.append(btnToAnimate);
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(document.createElement("br"));
document.body.append(divElement);

btnToAnimate.addEventListener("click", function () {
  divImage.append(flowerImage1);
  document.body.append(divImage);

  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    if (timePassed >= 4000) {
      clearInterval(timer);
      return;
    }

    divImage.append(flowerImage2);
    document.body.append(divImage);
  });
});
