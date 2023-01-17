const mainContent = document.querySelector(".main-content");
mainContent.classList.add("container", "text-center");

function div(tagName) {
  let ele = document.createElement(tagName);
  return ele;
}

function p(tagName, content) {
  let ele = document.createElement(tagName);
  ele.innerText = content;
  return ele;
}

async function loadTable() {
  try {
    let result = await fetch("https://animechan.vercel.app/api/random");
    let result1 = await result.json();
    console.log(result1);

    let animeDiv = div("div");
    let animeHeading = p("p", "ANIME");
    animeHeading.classList.add("fw-bold", "fs-5");
    let animeP = p("p", `${result1.anime}`);
    animeP.classList.add("fw-normal", "fs-4");
    animeDiv.classList.add("my-5");
    animeDiv.append(animeHeading, animeP);
    mainContent.append(animeDiv);

    let charDiv = div("div");
    let charHeading = p("p", "CHARACTER");
    charHeading.classList.add("fw-bold", "fs-5");
    let charP = p("p", `${result1.character}`);
    charP.classList.add("fw-normal", "fs-4");
    charDiv.append(charHeading, charP);
    mainContent.append(charDiv);

    let quoteDiv = div("div");
    let quoteHeading = p("p", "QUOTE");
    quoteHeading.classList.add("fw-bold", "fs-5");
    let quoteP = p("p", `${result1.quote}`);
    quoteP.classList.add("fw-normal", "fs-4", "text-justify");
    quoteDiv.classList.add("my-5");
    quoteDiv.append(quoteHeading, quoteP);
    mainContent.append(quoteDiv);
  } catch (error) {
    console.log(error);
  }
}

loadTable();
