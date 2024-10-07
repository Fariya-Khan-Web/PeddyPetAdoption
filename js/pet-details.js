// like button function

function liked(id){
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then(res => res.json())
        .then(data => addLikedImage(data.petData))
        .catch(error => console.log(error))
}

const addLikedImage = (data) => {
    console.log(data.image)

    const likedAnimals = document.getElementById('liked')

    let imageBox = document.createElement('div')
    imageBox.classList = "rounded-lg"
    imageBox.innerHTML = `<img class="rounded-lg object-cover" src="${data.image}" alt="" />`;

    likedAnimals.appendChild(imageBox)
}


// Adopt button function




// details button function