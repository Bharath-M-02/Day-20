const thead = document.querySelector(".table-head");
thead.classList.add("text-center", "text-dark", "fs-5");
const tbody = document.querySelector(".table-body");
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

let headingRow = tr("tr");
let id = th("th", "ID");
let users = th("th", "User");
let facts = th("th", "Facts");

headingRow.append(id, users, facts);
thead.append(headingRow);

async function loadTable() {
  try {
    const result = await fetch("http://cors-anywhere.herokuapp.com/http://dog-api.kinduff.com");
    const result1 = await result.json();
    result1.map((data) => {
      console.log(data);
      let dataRow = tr("tr");

      let ids = td("td", `${data._id}`);
      let user = td("td", `${data.user}`);
      let fact = td("td", `${data.text}`);

      dataRow.append(ids, user, fact);
      tbody.append(dataRow);
    });
  } catch (error) {
    console.log(error);
  }
}

loadTable();
