import { 
    product1, 
    product2, 
    product3, 
    product4, 
    product5, 
    product6,
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
} from './assets';

const productList = [
    {
        id: 1,
        name: "Commercial Oven",
        des: "High-quality commercial oven for your kitchen needs.",
        price: 500,
        time: " / day",
        image: product1
    },
    {
        id: 2,
        name: "Refrigeration Unit",
        des: "Energy-efficient refrigeration unit to keep your food fresh.",
        price: 700,
        time: " / day",
        image: product2
    },
    {
        id: 3,
        name: "Dishwasher",
        des: "High-capacity dishwasher for busy kitchens.",
        price: 699,
        time: " / day",
        image: product3
    },
    {
        id: 4,
        name: "Deep Fryer",
        des: "Commercial deep fryer for perfect frying every time.",
        price: 150,
        time: " / hour",
        image: product4
    },
    {
        id: 5,
        name: "Convection Oven",
        des: "Even cooking with circulating air.",
        price: 1000,
        time: " / day",
        image: product5
    },
    {
        id: 6,
        name: "Griddle",
        des: "Ideal for pancakes and sandwiches.",
        price: 599,
        time: " / day",
        image: product6
    },
];

const galleryList = [
    {
        id: "g1",
        name: "Commercial Oven",
        image: gallery1,
    },
    {
        id: "g2",
        name: "Refrigeration Unit",
        image: gallery2,
    },
    {
        id: "g3",
        name: "Dishwasher",
        image: gallery3,
    },
    {
        id: "g4",
        name: "Deep Fryer",
        image: gallery4,
    },
    {
        id: "g5",
        name: "Convection Oven",
        image: gallery5,
    },
    {
        id: "g6",
        name: "Griddle",
        image: gallery6,
    },
];

const testimonialsLsit = [
    {
        id: 't1',
        cName: "John Doe",
        cMessage: "Great service and equipment! The delivery was prompt and everything was in perfect condition.",
    },
    {
        id: 't2',
        cName: "Jane Smith",
        cMessage: "We've been using Paperfire Food for years and love it! The quality of products and service are top-notch.",
    },
    {
        id: "t3",
        cName: "David Johnson",
        cMessage: "We've used Paperfire Food for a few years now and they always deliver on time and with great quality.",
    },
    {
        id: "t4",
        cName: "Emily Davis",
        cMessage: "We've been using Paperfire Food for a few years now and they always deliver on time and with great quality.",
    },
    {
        id: "t5",
        cName: "Michael Wilson",
        cMessage: "Paperfire Food has been our go-to for years and we've been very satisfied with their service and products.",
    },
    {
        id: "t6",
        cName: "Sarah Thompson",
        cMessage: "Paperfire Food has been our go-to for years and we've been very satisfied with their service and products.",
    },
    {
        id: "t7",
        cName: "Christopher Lee",
        cMessage: "Paperfire Food has been our go-to for years and we've been very satisfied with their service and products.",
    },
    {
        id: "t8",
        cName: "Jennifer Brown",
        cMessage: "Paperfire Food has been our go-to for years and we've been very satisfied with their service and products.",
    }
]

export {
    productList,
    galleryList,
    testimonialsLsit
}