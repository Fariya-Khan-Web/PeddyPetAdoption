// like button function

function liked(id) {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then(res => res.json())
        .then(data => addLikedImage(data.petData))
        .catch(error => console.log(error))
}

const addLikedImage = (data) => {

    const likedAnimals = document.getElementById('liked')

    let imageBox = document.createElement('div')
    imageBox.classList = "rounded-lg"
    imageBox.innerHTML = `<img class="rounded-lg object-cover" src="${data.image}" alt="" />`;

    likedAnimals.appendChild(imageBox)
}


// Adopt button function

function adopted() {

    const adoptModal = document.getElementById('congrates')
    adoptModal.classList.remove('hidden')
    adoptModal.classList.add('flex')

    const countDownElement = document.getElementById('countdown')

    let countdown = 3;
    countDownElement.innerText = countdown;

    const counting = setInterval(() => {


        countdown = countdown - 1;
        countDownElement.innerText = countdown;

        if (countdown === 0) {
            clearInterval(counting);
            adoptModal.classList.add('hidden')
            adoptModal.classList.remove('flex')
        }
    }, 1000)
}



// details button function

function details(id) {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
        .then(res => res.json())
        .then(data => showDetails(data.petData))
        .catch(error => console.log(error))
}

function showDetails(data) {

    const card = document.getElementById('details')

    card.classList.remove('hidden');

    card.innerHTML = `
    <div><img class="rounded-lg" src="${data.image}"/></div>
    <h1 class="text-2xl font-bold my-3">${data.pet_name}</h1>
    <div class="flex">
            <img class="w-4 mr-1" src="./images/breed.png" alt="" />
            <p>Breed: ${data.breed}</p>                
    </div>
    <div class="flex">
            <img class="w-4 mr-1" src="./images/date.png" alt="" />
            <p>Birth: ${data.date_of_birth}</p> 
    </div>
    <div class="flex">
            <img class="w-4 mr-1" src="./images/gendar.png" alt="" />
            <p>Gender: ${data.gender}</p> 
    </div>
    <div class="flex">
            <img class="w-4 mr-1" src="./images/dollar.png" alt="" />
            <p>Price: ${data.price}</p> 
    </div>
    <hr/>
    <div class="my-3">${data.pet_details}</div>
    <button class="close w-full p-3 bg-green-200 text-[#0E7A81] font-semibold border rounded-md">Cancle</button>`;

    const closeButton = document.querySelector('.close')
    closeButton.addEventListener("click", () => {
        card.classList.add('hidden');
        // card.classList.remove('')
    })
}
