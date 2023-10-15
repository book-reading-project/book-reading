function toprate() {
    fetch("http://localhost:3000/mydata")
    .then(response => response.json())
    .then(data => {
        const products = data
    
console.log(products);
        const cards = document.getElementById('main');
        products.map(product => {
            
                const card = document.createElement('div');
                card.classList.add('col-md-4'); 

                if (product.rate==5) {
                    card.innerHTML = `
            
            <img src="${product.image}" alt="${product.title}"  style="max-width:60px;">
                <p>${product.title}</p>
                
               
            `;
            cards.appendChild(card);
                }
            
        });
    })
    
}

toprate();
function puboler() {
    fetch("http://localhost:3000/mydata")
    .then(response => response.json())
    .then(data => {
        const products = data
    
console.log(products);
        const cards = document.getElementById('main');
        products.map(product => {
            
                const card = document.createElement('div');
                card.classList.add('col-md-4'); 

                if (product.rate==4) {
                    card.innerHTML = `
            
            <img src="${product.image}" alt="${product.title}"  style="max-width:60px;">
                <p>${product.title}</p>
                
               
            `;
            cards.appendChild(card);
                }
            
        });
    })
    
}
puboler()