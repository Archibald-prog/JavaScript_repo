'use strict';
const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const prod_with_photo = products.filter(function (product) {
    return product.hasOwnProperty('photos') == true && product['photos'].length > 0;
});
console.log(prod_with_photo);

let products_sorted = products.sort(function (a, b) {
    return a.price - b.price;
});
console.log(products_sorted);
