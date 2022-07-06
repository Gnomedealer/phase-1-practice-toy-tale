let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const getToys = () => {
    return fetch('http://localhost:3000/toys/')
    .then(dolls => dolls.json())
    .then(toys => makeDiv(toys))
    
  }
  function makeDiv(toys){
    const mainDiv = document.getElementById('toy-collection')
    toys.forEach(toy => {
      const div = document.createElement('div')
      div.className = 'card'
      mainDiv.append(div)
    })

    



     
  }
  getToys()
    
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

