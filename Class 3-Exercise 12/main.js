//Create a LIST of OBJECTS, each object having a name and price property
//LOOP over that LIST, dynamically create a new list item <li></li> with the food name inside, and append that item to an existing HTML <ul></ul> element

const productList = [
    { name: 'Candy', price: 3.99 },
    { name: 'Brownies', price: 4.99 },
    { name: 'Cake', price: 5.99 },
    { name: 'Pie', price: 6.99 },
    ];

    const ul = document.getElementById("itemsList");

    for(const i of productList){
        const li = document.createElement("li");
        li.textContent = i.name;
        ul.appendChild(li);
        
    }