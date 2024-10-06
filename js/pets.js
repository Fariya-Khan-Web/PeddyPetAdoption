fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => allPets(data.pets))
    .catch(error => console.log(error))

function allPets(pets) {

    const petContainer = document.getElementById("pet-container");

    for (let pet of pets) {
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
                    <button id="like" class="btn"><img class="w-6" src="./images/like.png" /></button>
                    <button class="btn text-[#19a0aa]">Adopt</button>
                    <button class="btn text-[#19a0aa]">Dtails</button>
                </div>
            </div>
        </div>`;

        petContainer.appendChild(card);
    }
}

allPets()

const likeButton = document.getElementById('like')
console.log(likeButton)
