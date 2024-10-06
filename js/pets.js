fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then(res => res.json())
    .then(data => allPets(data.pets))
    .catch(error => console.log(error))

function allPets(elements) {

    const petContainer = document.getElementById("pet-container");

    petContainer.innerText = "";

    if(elements.length == 0){
       
        petContainer.classList.remove("grid")
        petContainer.classList.add("text-center")
        petContainer.innerHTML = `
        <img class="mx-auto mt-20" src="./images/error.webp" alt="" />
        <h1 class="text-3xl font-bold">No Information Available</h1>
        <p class="w-[70%] mx-auto mb-20">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
        its layout. The point of using Lorem Ipsum is that it has a.</p>`;
    }else{
        petContainer.classList.add("grid")
        petContainer.classList.remove("text-center")
    }

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
                    <button ${id="like"} class="btn liked-animals"><img class="w-6" src="./images/like.png" /></button>
                    <button class="btn text-[#19a0aa]">Adopt</button>
                    <button class="btn text-[#19a0aa]">Dtails</button>
                </div>
            </div>
        </div>`;
        // const addButtonId = document.querySelector(".liked-animal")
        // console.log(addButtonId)
        petContainer.appendChild(card);
    }
}


// const likeButton = document.getElementById('like')
// console.log(likeButton)


// likeButton.addEventListener("click", function likedPets(){

//     const likedPets = document.getElementById('liked')
//     console.log(likedPets)

// })
