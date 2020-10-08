// select elements
const itemsList = document.getElementById("items-list");
const itemDetails = document.getElementById("food-container");
const yearBtn18 = document.getElementById("btn-2018");
const yearBtn19 = document.getElementById("btn-2019");
const year = document.getElementById("year");

let visibleYear = "2018";
let visibleItem = {};

const setVisibleItem = function (item) {
  visibleItem = item ? item : {};
  itemDetails.innerHTML = item
    ? `<p class="number">${visibleItem.id}</p>
        <p class="name">${visibleItem.name}</p>`
    : `<p class="placeholder">hover over a #!</p>`;
};

const populateItemsList = function () {
  itemsList.innerHTML = "";
  if (visibleYear == "2018") {
    yearBtn18.classList.add("active");
    yearBtn19.classList.remove("active");
  } else {
    yearBtn19.classList.add("active");
    yearBtn18.classList.remove("active");
  }

  topTenList[visibleYear].forEach(function (item) {
    const itemElem = document.createElement("li");
    itemElem.innerHTML = `<p class=item>${item.id}</p>`;
    itemsList.appendChild(itemElem);
    itemElem.addEventListener("mouseover", function () {
      setVisibleItem(item);
    });
    itemElem.addEventListener("mouseout", function () {
      setVisibleItem(null);
    });
  });
  year.innerHTML = visibleYear;
};

const toggleYear = (year) => {
  visibleYear = year;
  populateItemsList();
};

populateItemsList();
setVisibleItem();
