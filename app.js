window.addEventListener("DOMContentLoaded", () => {
  const btnX = document.querySelector(".btnX"),
    title = document.querySelector("#title"),
    sum = document.querySelector("#author"),
    number = document.querySelector('#nomer'),
    name = document.querySelector('#driver')
    value_container = document.querySelector(".value-container"),
    book = document.querySelector("#book-list");

  let data = JSON.parse(localStorage.getItem("myCar")) || [];

  let count = 1;
  let full = 0;
  let total = "total : ";

  if (data.length) {
    console.log(data);
    data.forEach((i) => {
      const newRow = document.createElement("tr");
      const newNum = document.createElement("th");
      const newTitle = document.createElement("th");
      const newCar = document.createElement("th");
      const newNomer = document.createElement("th");
      const newName = document.createElement("th");
      const new_count = document.createElement("div");
      newNum.innerHTML = i.num;
      newRow.appendChild(newNum);

      newTitle.innerHTML = i.title;
      newRow.appendChild(newTitle);

      newCar.innerHTML = i.sum;
      newRow.appendChild(newCar);

      newNomer.innerHTML = i.sum;
      newRow.appendChild(newNomer);

      newName.innerHTML = i.sum;
      newRow.appendChild(newName);

      value_container.innerHTML = total + i.full;
      value_container.appendChild(new_count);

      book.appendChild(newRow);

      count = i.num;
      full = i.full;
    });
    count++;
  }

  btnX.addEventListener("click", (e) => {
    if (title.value == "" || sum.value == "") {
      return alert("enter your changes");
    }
    e.preventDefault();
    let obj = {
      num: 0,
      title: "",
      sum: "",
      name: "",
      number: "",
      full: 0,
    };
    const newRow = document.createElement("tr");
    const newNum = document.createElement("th");
    const newTitle = document.createElement("th");
    const newCar = document.createElement("th");
    const newNomer = document.createElement("th");
    const newName = document.createElement("th");
    const new_count = document.createElement("div");

    obj.num = count;
    newNum.innerHTML = count++;
    newRow.appendChild(newNum);

    obj.title = title.value.toUpperCase();
    obj.name = name.value.toUpperCase();

    newTitle.innerHTML = title.value.toUpperCase();
    newName.innerHTML = name.value.toUpperCase();
    newRow.appendChild(newTitle);

    obj.sum = sum.value;

    newCar.innerHTML = sum.value;
    newRow.appendChild(newCar);

    newNomer.innerHTML = number.value;
    newRow.appendChild(newNomer);
    
    newName.innerHTML = name.value;
    newRow.appendChild(newName);

    full += Number(sum.value);
    obj.full = full;
    value_container.innerHTML = total + full +  'sum';

    value_container.appendChild(new_count);
    book.appendChild(newRow);
    data.push(obj);
    localStorage.setItem("myCar", JSON.stringify(data));
    title.value = "";
    sum.value = "";
    name.value = ""
    number.value = ""
  });
});
