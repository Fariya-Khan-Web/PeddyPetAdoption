fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => allPets(data.pets))
    .catch(error => console.log(error))

function allPets(elements) {

    const petContainer = document.getElementById("pet-container");
    petContainer.innerText = "";

    if (elements.length == 0) {

        petContainer.classList.remove("grid")
        petContainer.classList.add("text-center")
        petContainer.innerHTML = `
        <img class="mx-auto mt-20" src="./images/error.webp" alt="" />
        <h1 class="text-3xl font-bold">No Information Available</h1>
        <p class="w-[70%] mx-auto mb-20">It looks like this category is currently empty. Please check back later as we're always adding new items!</p>`;
    } else {
        petContainer.classList.add("grid")
        petContainer.classList.remove("text-center")
    }

    // makeing cards with loop method

    for (let pet of elements) {
        let card = document.createElement('div');
        card.innerHTML = `
        <div class="card card-compact bg-base-100 w-30 shadow-xl">
            <figure class="w-full">
                <img class="w-full" src="${pet.image}"
                 alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title font-bold">${pet.pet_name}</h2>
                <div class="flex">
                    <img class="w-4 mr-1" src="./images/breed.png" alt="" />
                    <p>Breed: ${pet.breed}</p>                
                </div>
                <div class="flex">
                    <img class="w-4 mr-1" src="./images/date.png" alt="" />
                    <p>Birth: ${pet.date_of_birth}</p> 
                </div>
                <div class="flex">
                    <img class="w-4 mr-1" src="./images/gendar.png" alt="" />
                    <p>Gender: ${pet.gender}</p> 
                </div>
                <div class="flex">
                    <img class="w-4 mr-1" src="./images/dollar.png" alt="" />
                    <p>Price: ${pet.price}</p> 
                </div>
                <hr/>
                <div class="card-actions flex justify-between">
                    <button id="like-${pet.petId}" class="btn liked-animals"><img class="w-6" src="./images/like.png" /></button>
                    <button id="adopt-${pet.petId}" class="btn text-[#19a0aa]">Adopt</button>
                    <button id="details-${pet.petId}" class="btn text-[#19a0aa]">Dtails</button>
                </div>
            </div>
        </div>`;

        petContainer.appendChild(card);

        // like button

        const likeButton = document.getElementById(`like-${pet.petId}`);
        likeButton.addEventListener('click', () => {
            liked(pet.petId)
            console.log(`You liked the pet with ID: ${pet.petId}`);
            console.log(likeButton)
        })

        // adopt button

        const adoptButton = document.getElementById(`adopt-${pet.petId}`)
        adoptButton.addEventListener('click', () => {
            console.log(`You adopted the pet with ID: ${pet.petId}`);
            console.log(adoptButton)
        })

        // details button

        const detailsButton = document.getElementById(`details-${pet.petId}`)
        detailsButton.addEventListener('click', () => {
            console.log(`You want to know details of pet with ID: ${pet.petId}`);
            console.log(detailsButton)
        })

    }
}


// sort in decsending order

// function getPets(){
//     fetch("https://openapi.programming-hero.com/api/peddy/pets")
//        .then(res => res.json())
//        .then(data => sorting(data.pets))
//        .catch(error => console.log(error))
// }

// const sortButton = document.getElementById("sort-button");
// sortButton.addEventListener("click",() => getPets());

// function sorting(pets){
//     console.log({pets})

//     pets.sort((a, b) => b.price - a.price);

// }