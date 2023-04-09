

const express = require('express')
const app = express()

const { products } = require('./minimalData')


app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/products" > prodcuts </a> ')
})

app.get('/api/products', (req, res) => {
    // res.json(products) -> Getting all Things from the unside Array 

    // Showing things that we wanted to show from the product array
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image };
    })
    res.json(newProducts);
})

/* //Showing all detals of single Product
app.get('/api/products/1', (req, res) => {
    const singleProduct = products.find((product) => product.id === 1);
    res.json(singleProduct);
})
*/

//Route Param to get any products using id 
app.get('/api/products/:productId', (req, res) => {
    // console.log(req);
    // console.log(req.params)
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));

    if (!singleProduct) {
        return res.status(404)
            .send(`<h1> Product doesn't Exist </h1>`)
    }
    res.json(singleProduct); 
})


app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    res.send("Hello")
})

app.listen(8000, () => {
    console.log('Server is listening on Port 8000')
})
