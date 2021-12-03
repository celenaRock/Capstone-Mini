const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});



const rainbowForm = document.getElementById("rainbow")
const santaForm = document.getElementById('santa')

submitHandler = (event) => {
  event.preventDefault()
  let pony = event.target.id; 
  let name = document.getElementById(`${pony}-name`).value 
  let text = document.getElementById(`${pony}-comment`).value 
  let object = {
    name: name,
    text: text,
    pony: pony
  }
  axios.post('http://localhost:4000/comments', object)
  .then(res => renderComment(res.data))

  event.target.reset()
}


rainbowForm.addEventListener("submit", submitHandler);
santaForm.addEventListener("submit", submitHandler); 

getComments = () => {
  axios.get("http://localhost:4000/comments")
  .then(res => {
    res.data.forEach(comment => renderComment(comment))
  })
}

renderComment = (data) => {
  let { name, text, pony} = data;
  let html =
  `
  <li class="comment">${name} says: "${text}"</li>
  `
  document.getElementById(`${pony}-sect`).innerHTML += html;
} 

getComments()











