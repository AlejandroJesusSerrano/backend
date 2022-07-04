const fs = require('fs');

const file = './files/products.json';

class Container {
    constructor () {
        this.products = []
    }

    save(product) {
        fs.readFile('./files/products.json', (error) => {
            if (error){
                product.id = 1;
                this.products.push (product); 
                async function saveProduct (){
                    try {
                        await fs.promises.writeFile('./files/products.json', JSON.stringify (`${this.products}`));
                    } catch (err) {
                        console.log(err);
                    }
                }
                saveProduct()
            }else{
                product.id = this.products[this.products.lenght-1].product.id+1; 
                this.products.push (product);
                async function saveProduct (){
                    try {
                        await fs.promises.writeFile('./files/products.json', JSON.stringify(`${this.products}`));
                    }catch (err){
                        console.log(err);
                    };
                };
                saveProduct()
            };
        });          

    };
};


let af = new Container;

af.save({
    title:'Batman', 
    price:127000,
    thumbnail: 'https://i.pinimg.com/564x/60/c6/ae/60c6aed75f5b94fb26feff6bc764970c.jpg'
});





// af.save('Spider Man', 127000, 'http://www.hottoys.com.hk/photos/aUQy/PNdR9g8bjptL3JuZWC90UznY14yErCB23z05.jpg?1656947449233');

// af.save('Iron Man', 129000, 'https://i.pinimg.com/564x/49/ba/6e/49ba6e71cfe66941d1936a8abb4beaad.jpg');




