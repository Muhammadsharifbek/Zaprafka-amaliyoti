const select = document.getElementById("tur");
const inputSign = document.getElementById("sign");
const tableTbody = document.getElementById("result");
console.log(tableTbody);
let list = [];

let ai80 = 1000;
let ai92 = 1000;
let ai98 = 1000;
let dizel = 1000;

const calc = () => {
  if (ai80 - inputSign.value) {
    console.log(ai80);
  }
};

const render = () => {
  list.forEach((value, index) => {
    tableTbody.innerHTML += `
    <tr>
    <td> ${value.ai80}</td>
    <td> ${value.ai92}</td>
    <td> ${value.ai98}</td>
    <td> ${value.dizel}</td>
    </tr>;
    `;
  });

  console.log(value, index);
};

const add = () => {
  if (select.value && inputSign.value)
    list.unshift({
      select: select.value,
      sign: +inputSign.value,
    });

  render();
  calc();
};
