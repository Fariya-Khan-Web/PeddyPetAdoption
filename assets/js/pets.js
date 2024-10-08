fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => allPets(data.pets))
    .catch(error => console.log(error))

function allPets(elements) {

    // empty container before going to another category

    const petContainer = document.getElementById("pet-container");
    petContainer.innerText = "";
    
    // if no pets are avaiable

    if (elements.length == 0) {

        petContainer.classList.remove("grid")
        petContainer.classList.add("text-center")
        petContainer.innerHTML = `
        <img class="mx-auto mt-20" src="./assets/img/error.webp" alt="" />
        <h1 class="text-3xl font-bold">No Information Available</h1>
        <p class="w-[70%] mx-auto mb-20">It looks like this category is currently empty. Please check back later as we're always adding new items!</p>`;
    } else {
        petContainer.classList.add("grid")
        petContainer.classList.remove("text-center")
    }

    // sorting button

    const sortButton = document.getElementById("sort-button");
    
    sortButton.addEventListener("click", () => {
        
        elements.sort((a, b) => b.price - a.price);
        allPets(elements);
    })

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
                    <img class="w-4 mr-1" src="./assets/img/breed.png" alt="" />
                    <p>Breed: ${pet.breed?pet.breed:'not available'}</p>                
                </div>
                <div class="flex">
                    <img class="w-4 mr-1" src="./assets/img/date.png" alt="" />
                    <p>Birth: ${pet.date_of_birth?pet.date_of_birth:'not available'}</p> 
                </div>
                <div class="flex">
                    <img class="w-4 mr-1" src="./assets/img/gendar.png" alt="" />
                    <p>Gender: ${pet.gender?pet.gender:'not available'}</p> 
                </div>
                <div class="flex">
                    <img class="w-4 mr-1" src="./assets/img/dollar.png" alt="" />
                    <p>Price: ${pet.price?pet.price:'not available'}</p> 
                </div>
                <hr/>
                <div class="card-actions flex justify-between">
                    <button id="like-${pet.petId}" class="btn liked-animals"><img class="w-6" src="./assets/img/like.png" /></button>
                    <button id="adopt-${pet.petId}" class="btn text-[#19a0aa]">Adopt</button>
                    <button id="details-${pet.petId}" class="btn text-[#19a0aa]">Dtails</button>
                </div>
            </div>
        </div>`;

        petContainer.appendChild(card);

        // like button

        const likeButton = document.getElementById(`like-${pet.petId}`);
        likeButton.addEventListener('click', () => {
            liked(pet.petId);
        })

        // adopt button

        const adoptButton = document.getElementById(`adopt-${pet.petId}`)
        adoptButton.addEventListener('click', () => {
            adopted();
        })

        // details button

        const detailsButton = document.getElementById(`details-${pet.petId}`)
        detailsButton.addEventListener('click', () => {
            details(pet.petId);
        })
    }
}