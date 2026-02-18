function generateCV() {
  const name = document.getElementById("cvName").value;
  const title = document.getElementById("cvTitle").value;
  const email = document.getElementById("cvEmail").value;
  const phone = document.getElementById("cvPhone").value;
  const bio = document.getElementById("cvBio").value;
  const skills = document.getElementById("cvSkills").value;
  const experience = document.getElementById("cvExperience").value;

  const container = document.getElementById("cv_main_container");
  container.innerHTML = "";

  const card = document.createElement("div");
  card.className = "cv-card";

  const h2 = document.createElement("h2");
  h2.innerText = name;

  const h4 = document.createElement("h4");
  h4.innerText = title;

  const pEmail = document.createElement("p");
  pEmail.innerHTML = `<strong>Email:</strong> ${email}`;

  const pPhone = document.createElement("p");
  pPhone.innerHTML = `<strong>Phone:</strong> ${phone}`;

  const pBio = document.createElement("p");
  pBio.innerHTML = `<strong>Bio:</strong> ${bio}`;

  const pSkills = document.createElement("p");
  pSkills.innerHTML = `<strong>Skills:</strong> ${skills}`;

  const pExp = document.createElement("p");
  pExp.innerHTML = `<strong>Experience:</strong> ${experience}`;

  card.appendChild(h2);
  card.appendChild(h4);
  card.appendChild(pEmail);
  card.appendChild(pPhone);
  card.appendChild(pBio);
  card.appendChild(pSkills);
  card.appendChild(pExp);

  container.appendChild(card);

  document.getElementById("printCVBtn").style.display = "block";
}
