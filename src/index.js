let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const getToys = () => {
    fetch('http://localhost:3000/toys/')
    .then(dolls => dolls.json())
    .then(toys => console.log(toys))
  }
  //  const postToys = (name,imageUrl) => {}






  //   fetch('http://localhost:3000/toys',
  //   {
  //     headers:{
  //       'Content-type': 'application/json',
  //        Accept: "application/json"
  //     },
  //     method: "POST",
  //     body: JSON.stringify(
  //       {
  //       }
  //     )



  //   })
  //   .then()
  //   .then()
  // }

 const toyButton = document.getElementById('new-toy-btn')
 toyButton.addEventListener('click', event => {
  

  });

  function makeDiv(toys){
    const mainDiv = document.getElementById('toy-collection')

    toys.forEach(toy => {
      const div = document.createElement('div');
      const h2 = document.createElement('h2');
      const img = document.createElement('img');
      const p = document.createElement('p');
      const btn = document.createElement('button');

      btn.className = 'like-btn';
      div.className = 'card'
      btn.setAttribute('id', toy.id);

      h2.textContent = toy.name;
      img.src = toy.image;

      img.style.height = '250';
      img.style.width = '250px';

      p.textContent = `${toy.likes} likes`;
      btn.textContent = 'like';
      div.append(h2,img,p,btn);
      mainDiv.append(div)
    })
  }

    











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


  getToys();
});