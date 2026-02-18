function generateCard() {

  const groom = document.getElementById("groom").value;
  const bride = document.getElementById("bride").value;
  const date = document.getElementById("date").value;
  const venue = document.getElementById("venue").value;
  const message = document.getElementById("message").value;

  let card_main_container = document.getElementById("card_main_container");

  
  let card = document.createElement("div");
  let title = document.createElement("h2");
  let names = document.createElement("h1");
  let dateEl = document.createElement("p");
  let venueEl = document.createElement("p");
  let messageEl = document.createElement("p");

  
  card.className = "card";

  title.innerText = "Wedding Invitation";
  names.innerText = groom + " WEDS " + bride;
  dateEl.innerText = "Date: " + date;
  venueEl.innerText = "Venue: " + venue;
  messageEl.innerText = message;

  
  card_main_container.appendChild(card);

  card.appendChild(title);
  card.appendChild(names);
  card.appendChild(dateEl);
  card.appendChild(venueEl);
  card.appendChild(messageEl);

}
function printCard() {
  window.print();
}
