const elSelect = document.getElementById("tur");
const inputSign = document.getElementById("sign");
const tableTbody = document.querySelector("#result tbody");

let list = [];

let fuels = [
  { base: 1000, price: 6500, type: "ai80", name: "80" },
  { base: 1000, price: 7500, type: "ai92", name: "92" },
  { base: 1000, price: 8500, type: "ai98", name: "98" },
  { base: 1000, price: 5500, type: "dizel", name: "Dizel" },
];

// funksiyani jadvalga chiqaradi
const render = () => {
  tableTbody.innerHTML = "";
  fuels.forEach((value) => {
    tableTbody.innerHTML += `
    <tr>
    <td> ${value.type}</td>
    <td> ${value.base}</td>
    <td> ${value.price.toLocaleString()}</td>
    </tr>
    `;
  });
};

// inputda kiritilgan malumotlarni basadan ayirib jadvalga ko'rsatadi
const calc = () => {
  const selectedType = fuels.find((fuel) => fuel.type === elSelect.value);
  let val = inputSign.value;
  if (val > selectedType.base) {
    selectedType.base = 0;
  } else {
    selectedType.base -= +inputSign.value;
  }
};

const add = () => {
  if (!elSelect.value && !inputSign.value.trim()) return;

  calc();
  render();
};

const renderSelectedOption = (data) => {
  data.forEach((item) => {
    elSelect.innerHTML += `

    <option value="${item.type}"> ${item.name} </option>
    `;
  });
};

renderSelectedOption(fuels);
render();
