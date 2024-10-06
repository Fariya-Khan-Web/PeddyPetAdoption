fetch("https://openapi.programming-hero.com/api/peddy/categories")
   .then(res => res.json())
   .then(data => categoryButton(data.categories))
   .catch(error => console.log(error))

function categoryButton(items){
    const  buttonContainer = document.getElementById('button-container');

    for(let item of items){
        let button = document.createElement('button');
        button.classList = "btn btn-lg flex h-24 md:px-6 border rounded-lg";
        button.innerHTML = `
        <img class="w-8 md:w-auto" src="${item.category_icon}" alt="" />
        <h4 class="my-auto mx-5 font-bold text-lg md:text-xl">${item.category}</h4>`;

        buttonContainer.appendChild(button);
    }
}
