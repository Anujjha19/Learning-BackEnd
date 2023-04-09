

const express = require('express')
const app = express()

const { products } = require('./minimalData')


app.get('/', (req, res) => {
    res.send('<h1> Home Page </h1> <a href="/api/products" > prodcuts </a> ')
})

//Route Param to get any products using id 
app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;
    const singleProduct = products.find((product) => product.id === Number(productId));

    if (!singleProduct) {
        return res.status(404)
            .send(`<h1> Product doesn't Exist </h1>`)
    }
    res.json(singleProduct);
})


//Query String
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send( "<h3>No Products Matched for Yor Search </h3>")
        return res.status(200).json({ success: true, data: [] })
    }

    // return res.status(200).json(sortedProducts);
    res.status(200).json(sortedProducts);

})




app.listen(8000, () => {
    console.log('Server is listening on Port 8000')
})
