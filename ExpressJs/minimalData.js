let products = [
    {
        id: 1,
        name: "Sofa",
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/610YOZFdTwL._SX679_.jpg",
        price: 500,
        desc: "A comfortable sofa for your living room.",
        color: "gray",
        material: "fabric"
    },
    {
        id: 2,
        name: "Dining Table",
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91MK3boW5-L._SX569_.jpg",
        price: 300,
        desc: "A sturdy dining table for your family meals.",
        color: "brown",
        material: "wood"
    },
    {
        id: 3,
        name: "Bed",
        image: "https://cdn.shopify.com/s/files/1/0532/1251/2424/products/BDDG9MQ9THMSK6GS_1-min.jpg?v=1676980425",
        price: 800,
        desc: "A cozy bed for a good night's sleep.",
        color: "white",
        material: "leather"
    },
    {
        id: 4,
        name: "Bookshelf",
        image: "https://cdn.shopify.com/s/files/1/0096/4594/9013/products/BookshelfRusticWood6-TierBookcasewithCabinet-5.jpg?v=1631434026",
        price: 200,
        desc: "A stylish bookshelf to organize your books.",
        color: "black",
        material: "wood"
    },
    {
        id: 5,
        name: "Coffee Table",
        image: "https://cdn.shopify.com/s/files/1/0191/2234/products/51410-FineBuy-Couchtisch-60x60x35-cm-Sheesham--Fi_4.jpg?v=1562429181",
        price: 150,
        desc: "A modern coffee table for your living room.",
        color: "brown",
        material: "wood"
    },
    {
        id: 6,
        name: "Armchair",
        image: "https://www.ikea.com/us/en/images/products/ekeroe-armchair-skiftebo-light-turquoise__0737147_PE740882_S5.JPG?f=s",
        price: 250,
        desc: "A comfortable armchair for your reading nook.",
        color: "turquoise",
        material: "fabric"
    },
    {
        id: 7,
        name: "TV Stand",
        image: "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-selsviken-high-gloss-white__0737142_PE740877_S5.JPG?f=s",
        price: 180,
        desc: "A sleek TV stand for your entertainment center.",
        color: "white",
        material: "wood"
    },
    {
        id: 8,
        name: "Rug",
        image: "https://www.ikea.com/us/en/images/products/vallstedt-rug-low-pile-beige__0737139_PE740874_S5.JPG?f=s",
        price: 80,
        desc: "A soft rug to add warmth to your room.",
        color: "beige",
        material: "wool"
    },
    {
        id: 9,
        name: "Desk",
        image: "https://www.ikea.com/us/en/images/products/micke-desk-white__0737140_PE740875_S5.JPG?f=s",
        price: 120,
        desc: "A simple desk for your home office.",
        color: "white",
        material: "wood"
    },
    {
        id: 10,
        name: "Floor Lamp",
        image: "https://www.ikea.com/us/en/images/products/hektar-floor-lamp-with-led-bulb-dark-gray__0737138_PE740873_S5.JPG?f=s",
        price: 50,
        desc: "A stylish floor lamp to brighten up your space.",
        color: "dark gray",
        material: "metal"
    },
    {
        id: 11,
        name: "Side Table",
        image: "https://www.ikea.com/us/en/images/products/hemnes-side-table-black-brown__0737141_PE740876_S5.JPG?f=s",
        price: 60,
        desc: "A small side table for your living room.",
        color: "black-brown",
        material: "wood"
    },
    {
        id: 12,
        name: "Accent Chair",
        image: "https://www.ikea.com/us/en/images/products/strandmon-wing-chair-nordvalla-dark-gray__0737146_PE740881_S5.JPG?f=s",
        price: 300,
        desc: "A statement chair to add character to your room.",
        color: "dark gray",
        material: "fabric"
    },
    {
        id: 13,
        name: "Chest of Drawers",
        image: "https://www.ikea.com/us/en/images/products/hemnes-6-drawer-chest-white-stain__0737143_PE740878_S5.JPG?f=s",
        price: 220,
        desc: "A spacious chest of drawers for your clothes.",
        color: "white stain",
        material: "wood"
    },
    {
        id: 14,
        name: "Wall Shelf",
        image: "https://www.ikea.com/us/en/images/products/lack-wall-shelf-unit-white__0737137_PE740872_S5.JPG?f=s",
        price: 30,
        desc: "A simple wall shelf to display your decor.",
        color: "white",
        material: "wood"
    },
    {
        id: 15,
        name: "Bar Stool",
        image: "https://www.ikea.com/us/en/images/products/ingolf-bar-stool-with-backrest-brown-black__0737144_PE740879_S5.JPG?f=s",
        price: 70,
        desc: "A comfortable bar stool for your kitchen island.",
        color: "brown-black",
        material: "wood"
    },
    {
        id: 16,
        name: "Bean Bag Chair",
        image: "https://www.ikea.com/us/en/images/products/ektorp-beanbag-nordvalla-dark-gray__0737145_PE740880_S5.JPG?f=s",
        price: 100,
        desc: "A cozy bean bag chair for your relaxation corner.",
        color: "dark gray",
        material: "fabric"
    },
]

let people = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Emily' },
    { id: 3, name: 'Michael' },
    { id: 4, name: 'Sarah' },
    { id: 5, name: 'David' },
    { id: 6, name: 'Jessica' },
    { id: 7, name: 'Daniel' },
    { id: 8, name: 'Olivia' },
    { id: 9, name: 'William' },
    { id: 10, name: 'Sophia' },
    { id: 11, name: 'Jacob' },
    { id: 12, name: 'Isabella' },
    { id: 13, name: 'Ethan' },
    { id: 14, name: 'Ava' },
    { id: 15, name: 'Mia' },
    { id: 16, name: 'Noah' }
];


module.exports = { products, people }



/* let products = [
    {
        id: 1,
        name: "Sofa",
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/610YOZFdTwL._SX679_.jpg",
        price: 500,
        desc: "A comfortable sofa for your living room.",
        color: "gray",
        material: "fabric"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 2,
        name: "Dining Table",
        image: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91MK3boW5-L._SX569_.jpg",
        price: 300,
        desc: "A sturdy dining table for your family meals.",
        color: "brown",
        material: "wood"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 3,
        name: "Bed",
        image: "https://cdn.shopify.com/s/files/1/0532/1251/2424/products/BDDG9MQ9THMSK6GS_1-min.jpg?v=1676980425",
        price: 800,
        desc: "A cozy bed for a good night's sleep.",
        color: "white",
        material: "leather",
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 4,
        name: "Bookshelf",
        image: "https://cdn.shopify.com/s/files/1/0096/4594/9013/products/BookshelfRusticWood6-TierBookcasewithCabinet-5.jpg?v=1631434026",
        price: 200,
        desc: "A stylish bookshelf to organize your books.",
        color: "black",
        material: "wood"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 5,
        name: "Coffee Table",
        image: "https://cdn.shopify.com/s/files/1/0191/2234/products/51410-FineBuy-Couchtisch-60x60x35-cm-Sheesham--Fi_4.jpg?v=1562429181",
        price: 150,
        desc: "A modern coffee table for your living room.",
        color: "brown",
        material: "wood"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 6,
        name: "Armchair",
        image: "https://www.ikea.com/us/en/images/products/ekeroe-armchair-skiftebo-light-turquoise__0737147_PE740882_S5.JPG?f=s",
        price: 250,
        desc: "A comfortable armchair for your reading nook.",
        color: "turquoise",
        material: "fabric"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 7,
        name: "TV Stand",
        image: "https://www.ikea.com/us/en/images/products/besta-tv-unit-with-doors-white-selsviken-high-gloss-white__0737142_PE740877_S5.JPG?f=s",
        price: 180,
        desc: "A sleek TV stand for your entertainment center.",
        color: "white",
        material: "wood"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 8,
        name: "Rug",
        image: "https://www.ikea.com/us/en/images/products/vallstedt-rug-low-pile-beige__0737139_PE740874_S5.JPG?f=s",
        price: 80,
        desc: "A soft rug to add warmth to your room.",
        color: "beige",
        material: "wool"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 9,
        name: "Desk",
        image: "https://www.ikea.com/us/en/images/products/micke-desk-white__0737140_PE740875_S5.JPG?f=s",
        price: 120,
        desc: "A simple desk for your home office.",
        color: "white",
        material: "wood"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 10,
        name: "Floor Lamp",
        image: "https://www.ikea.com/us/en/images/products/hektar-floor-lamp-with-led-bulb-dark-gray__0737138_PE740873_S5.JPG?f=s",
        price: 50,
        desc: "A stylish floor lamp to brighten up your space.",
        color: "dark gray",
        material: "metal"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 11,
        name: "Side Table",
        image: "https://www.ikea.com/us/en/images/products/hemnes-side-table-black-brown__0737141_PE740876_S5.JPG?f=s",
        price: 60,
        desc: "A small side table for your living room.",
        color: "black-brown",
        material: "wood"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 12,
        name: "Accent Chair",
        image: "https://www.ikea.com/us/en/images/products/strandmon-wing-chair-nordvalla-dark-gray__0737146_PE740881_S5.JPG?f=s",
        price: 300,
        desc: "A statement chair to add character to your room.",
        color: "dark gray",
        material: "fabric"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 13,
        name: "Chest of Drawers",
        image: "https://www.ikea.com/us/en/images/products/hemnes-6-drawer-chest-white-stain__0737143_PE740878_S5.JPG?f=s",
        price: 220,
        desc: "A spacious chest of drawers for your clothes.",
        color: "white stain",
        material: "wood"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 14,
        name: "Wall Shelf",
        image: "https://www.ikea.com/us/en/images/products/lack-wall-shelf-unit-white__0737137_PE740872_S5.JPG?f=s",
        price: 30,
        desc: "A simple wall shelf to display your decor.",
        color: "white",
        material: "wood"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 15,
        name: "Bar Stool",
        image: "https://www.ikea.com/us/en/images/products/ingolf-bar-stool-with-backrest-brown-black__0737144_PE740879_S5.JPG?f=s",
        price: 70,
        desc: "A comfortable bar stool for your kitchen island.",
        color: "brown-black",
        material: "wood"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
    {
        id: 16,
        name: "Bean Bag Chair",
        image: "https://www.ikea.com/us/en/images/products/ektorp-beanbag-nordvalla-dark-gray__0737145_PE740880_S5.JPG?f=s",
        price: 100,
        desc: "A cozy bean bag chair for your relaxation corner.",
        color: "dark gray",
        material: "fabric"
        ,
        reviews: [
            { reviewId: 1, user: "John", comment: "This sofa is so comfortable!", rating: 5 },
            { reviewId: 2, user: "Emily", comment: "I love the color of this sofa.", rating: 4 },
            { reviewId: 3, user: "Michael", comment: "The fabric feels great.", rating: 4 }
        ]
    },
]

let people = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Emily' },
    { id: 3, name: 'Michael' },
    { id: 4, name: 'Sarah' },
    { id: 5, name: 'David' },
    { id: 6, name: 'Jessica' },
    { id: 7, name: 'Daniel' },
    { id: 8, name: 'Olivia' },
    { id: 9, name: 'William' },
    { id: 10, name: 'Sophia' },
    { id: 11, name: 'Jacob' },
    { id: 12, name: 'Isabella' },
    { id: 13, name: 'Ethan' },
    { id: 14, name: 'Ava' },
    { id: 15, name: 'Mia' },
    { id: 16, name: 'Noah' }
];


module.exports = { products, people } */