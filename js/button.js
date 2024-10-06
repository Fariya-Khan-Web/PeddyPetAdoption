fetch("https://openapi.programming-hero.com/api/peddy/categories")
   .then(res => res.json())
   .then(data => categoryButton(data.categories))
   .catch(error => console.log(error))

function categoryButton(items){
    const  buttonContainer = document.getElementById('button-container');

    for(let item of items){
        let button = document.createElement('button')
        button.classList = "flex p-4 md:px-16 border rounded-lg"
        button.innerHTML = `
        <img class="w-8 md:w-auto" src="${item.category_icon}" alt="" />
        <h4 class="my-auto mx-5 font-bold text-xl">${item.category}</h4>`

        buttonContainer.appendChild(button);
    }




    
    console.log(items)
}

// categoryButton()