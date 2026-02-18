function generateIDCard() {
  const name = document.getElementById("name").value;
  const father = document.getElementById("father").value;
  const idnum = document.getElementById("idnum").value;
  const course = document.getElementById("course").value;
  const image = document.getElementById("image").value;

  const container = document.getElementById("card_main_container");

  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "id-card";

  const img = document.createElement("img");
  img.src = image || "https://via.placeholder.com/100";

  const h3 = document.createElement("h3");
  h3.innerText = name;

  const pFather = document.createElement("p");
  pFather.innerText = "Father: " + father;

  const pId = document.createElement("p");
  pId.innerText = "ID: " + idnum;

  const pCourse = document.createElement("p");
  pCourse.innerText = "Course: " + course;

  card.appendChild(img);
  card.appendChild(h3);
  card.appendChild(pFather);
  card.appendChild(pId);
  card.appendChild(pCourse);

  container.appendChild(card);
}

function printCard() {
  window.print();
}
