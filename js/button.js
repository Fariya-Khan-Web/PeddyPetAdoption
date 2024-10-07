fetch("https://openapi.programming-hero.com/api/peddy/categories")
   .then(res => res.json())
   .then(data => categoryButton(data.categories))
   .catch(error => console.log(error))

function categoryButton(items){
    const  buttonContainer = document.getElementById('button-container');

    for(let item of items){
        let button = document.createElement('button');
        button.classList = "btn btn-lg flex h-24 md:px-6 border rounded-lg ";
        button.setAttribute("id",`${item.category}`)
        button.innerHTML = `
        <img class="w-8 md:w-auto" src="${item.category_icon}" alt="" />
        <h4 class="my-auto mx-5 font-bold text-lg md:text-xl">${item.category}</h4>`;
        
        button.addEventListener("click", () => onlyThisCategory(item.category))
        
        buttonContainer.appendChild(button);


    }
}

function onlyThisCategory(category){

    const petsContainer = document.getElementById('pet-container')
    const likedPets = document.getElementById('liked')
    const loading = document.getElementById('loading')
   
    petsContainer.classList.add("hidden")
    likedPets.classList.add("hidden")

    loading.classList.add('flex')
    loading.classList.remove('hidden')

    setTimeout(() => {
        fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
       .then(res => res.json())
       .then(info => {

        // remove active status
        removeActive()
        
        // active status
        const activeBtn = document.getElementById(`${category}`)
        console.log(activeBtn)
        activeBtn.classList.add("rounded-full")
        activeBtn.classList.add("bg-green-200")
        

        allPets(info.data)})
       .catch(error => console.log(error))

       petsContainer.classList.remove("hidden")
       likedPets.classList.remove("hidden")

       loading.classList.remove('flex')
       loading.classList.add('hidden')

    }, 1500);
    
    // fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    //    .then(res => res.json())
    //    .then(info => {

    //     // remove active status
    //     removeActive()
        
    //     // active status
    //     const activeBtn = document.getElementById(`${category}`)
    //     console.log(activeBtn)
    //     activeBtn.classList.add("rounded-full")
    //     activeBtn.classList.add("bg-green-200")
        

    //     allPets(info.data)})
    //    .catch(error => console.log(error))

}

// active button

let removeActive = () => {
    const Buttons = document.getElementsByClassName("btn-lg")
    for(let btn of Buttons){
        console.log(btn)
        btn.classList.remove("rounded-full")
        btn.classList.remove("bg-green-200")
    }
}
