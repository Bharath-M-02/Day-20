const form = document.getElementById("form").addEventListener("click", function (e) {
  e.preventDefault();
});

const thead = document.getElementById("table-head");
thead.classList.add("text-center", "text-dark", "fs-5");
const tbody = document.getElementById("table-body");
tbody.classList.add("text-center");

function tr(tagName) {
  let ele = document.createElement(tagName);
  return ele;
}

function th(tagName, content) {
  let ele = document.createElement(tagName);
  ele.textContent = content;
  return ele;
}

function td(tagName, content, attribute, value) {
  let ele = document.createElement(tagName);
  ele.textContent = content;
  ele.setAttribute(attribute, value);
  return ele;
}

function capitalize(country) {
  let country1 = country.split(" ");

  for (let i = 0; i < country1.length; i++) {
    country1[i] = country1[i][0].toUpperCase() + country1[i].substr(1);
  }

  console.log(country1.join(" "));
  return country1.join(" ");
}

const headingRow = tr("tr");
const stateName = th("th", "State");
const confirmHeading = th("th", "Confirmed");
const deathHeading = th("th", "Death");

headingRow.append(stateName, confirmHeading, deathHeading);
thead.append(headingRow);

async function loadTable() {
  try {
    const countryName = document.getElementById("search-country").value;
    const country = capitalize(countryName);

    const result = await fetch(`https://covid-api.mmediagroup.fr/v1/cases?country=${country}`, { mode: "no-cors" });
    const result1 = await result.json();
    Object.entries(result1).map((data) => {
      console.log(data);

      let dataRow = tr("tr");

      let state = td("td", `${data[0]}`);
      let confirm = td("td", `${data[1].confirmed}`);
      let death = td("td", `${data[1].deaths}`);

      dataRow.append(state, confirm, death);
      tbody.append(dataRow);
      // location.reload();
    });
  } catch (error) {
    console.log(error);
  }
}
