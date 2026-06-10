//object is a combination of more than one property.it is a key value pair where we can create n-no object and we can add array.
//JSON --> javascript Object Notation,it is a object that contains more key value pairs.
let mobile = {
    productId: 1,
    name: "iphone",
    model: "17pro",
    coast: "1,23,000",
    rating: 4,
    ratingType: "⭐",
    priceType: "INR",

    varient: [
        {
            varientColor: "red",
            varientPriceDiffernce: "2500",
        },
        {
            varientColor: "green",
            varientPriceDiffernce: "1000",
        },
        {
            varientColor: "black",
            varientPriceDiffernce: "2000",
        }
    ],

    configuration: [
        {
            configurationModel: "17pro",
            storage: "128GB",
            rom: "8GB"
        },
        {
            configurationModel: "17pro",
            storage: "64GB",
            rom: "8GB"
        },
        {
            configurationModel: "17pro",
            storage: "128GB",
            rom: "4GB"
        }
    ],

    review: [
        {
            reviewerId: 1,
            reviewerEmail: "sia213@gmail.com",
            reviewerMobile: 8465763934,
            acutalReview: `Good product but not that much good`
        },
        {
            reviewerId: 2,
            reviewerEmail: "trichi23@gmail.com",
            reviewerMobile: null,
            acutalReview: `Good product but not that much good`
        },
        {
            reviewerId: 3,
            reviewerEmail: null,
            reviewerMobile: 8465763934,
            acutalReview: `Good product but not that much good`
        }
    ],

    specifications: [
        {
            display: "6.9 inch OLED",
            processor: "A19 Bionic",
            battery: "5000mAh"
        },
        {
            camera: "48MP + 12MP + 12MP",
            frontCamera: "24MP",
            operatingSystem: "iOS 20"
        }
    ],

    sellerDetails: [
        {
            sellerId: 101,
            sellerName: "Apple Store",
            location: "Bangalore"
        },
        {
            sellerId: 102,
            sellerName: "Mobile World",
            location: "Hyderabad"
        }
    ],

    offers: [
        {
            offerId: 1,
            offerName: "Bank Discount",
            discount: "10%"
        },
        {
            offerId: 2,
            offerName: "Exchange Offer",
            discount: "15000 INR"
        }
    ],

    accessories: [
        {
            accessoryId: 1,
            accessoryName: "Wireless Charger",
            price: "3999"
        },
        {
            accessoryId: 2,
            accessoryName: "AirPods Pro",
            price: "24999"
        }
    ]
};
//hasOwnProperty --> it is used for to check whether the object has certain property or not to check it is useful,for this if-statements are very useful.
// if (mobile.hasOwnProperty("accessories")) {
//     console.log("yes we had");
//     console.table(mobile.accessories)
    
// }
//what is Shallow_copy ?
let copiedProperty = mobile;
copiedProperty.coast = 430000;
console.log(mobile);
console.log(copiedProperty);
