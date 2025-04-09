
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use('/images', express.static('images'));
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



const phoneListings = [
  {
   id: 1,
   brand: "Google",
   model: "Pixel",
   imageurl: [
    "assets/images/id1/immagine1.jpg",
    "assets/images/id1/immagine2.jpg",
    "assets/images/id1/immagine3.jpg"
],
   number: "123-456-7890",
   category: "electronics",
   price: 649,
   releaseYear: 2016,
   operatingSystem: "Android 7.1",
   storageCapacity: ["32GB", "128GB"],
   ram: "4GB",
   screenSize: 5.0,
   batteryCapacity: 2770,
   processor: "Snapdragon 821",
   colorOptions: ["Quite Black", "Very Silver", "Really Blue"],
   rating: 4.5,
   connectivity: ["4G", "Wi-Fi 5", "Bluetooth 4.2", "NFC"],
   weight: 143
  },
  {
   id: 2,
   brand: "Apple",
   model: "iPhone 12",
   imageurl:  [
    "assets/images/id2/immagine1.jpg",
    "assets/images/id2/immagine2.jpg",
    "assets/images/id2/immagine3.jpg",
    "assets/images/id2/immagine4.jpg",
    "assets/images/id2/immagine5.jpg",
    "assets/images/id2/immagine6.jpg"
   ],
   number: "987-654-3210",
   category: "electronics",
   price: 799,
   releaseYear: 2020,
   operatingSystem: "iOS 14",
   storageCapacity: ["64GB", "128GB", "256GB"],
   ram: "4GB",
   screenSize: 6.1,
   batteryCapacity: 2815,
   processor: "A14 Bionic",
   colorOptions: ["Black", "White", "Red", "Green", "Blue", "Purple"],
   rating: 4.6,
   connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "NFC"],
   weight: 164
  },
  {
   id: 3,
   brand: "Samsung",
   model: "Galaxy S21",
   imageurl:  [
    "assets/images/id3/immagine1.jpg",
    "assets/images/id3/immagine2.jpg",
    "assets/images/id3/immagine3.jpg",
    "assets/images/id3/immagine4.jpg",
    "assets/images/id3/immagine5.jpg"
   ],
   number: "098-765-4321",
   category: "electronics",
   price: 799,
   releaseYear: 2021,
   operatingSystem: "Android 11",
   storageCapacity: ["128GB", "256GB"],
   ram: "8GB",
   screenSize: 6.2,
   batteryCapacity: 4000,
   processor: "Exynos 2100 / Snapdragon 888",
   colorOptions: ["Phantom Gray", "Phantom White", "Phantom Violet", "Phantom Pink"],
   rating: 4.7,
   connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "NFC"],
   weight: 169
  },
  {
   id: 4,
   brand: "Huawei",
   model: "P40 Pro",
   imageurl:[
    "assets/images/id4/immagine1.jpg",
    "assets/images/id4/immagine2.jpg",
    "assets/images/id4/immagine3.jpg",
    "assets/images/id4/immagine4.jpg",
    "assets/images/id4/immagine5.jpg"
   ],
   number: "555-666-7778",
   category: "electronics",
   price: 999,
   releaseYear: 2020,
   operatingSystem: "Android 10 (no Google services)",
   storageCapacity: ["128GB", "256GB", "512GB"],
   ram: "8GB",
   screenSize: 6.58,
   batteryCapacity: 4200,
   processor: "Kirin 990 5G",
   colorOptions: ["Silver Frost", "Blush Gold", "Deep Sea Blue", "Ice White", "Black"],
   rating: 4.4,
   connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.1", "NFC"],
   weight: 209
  },
  {
   id: 5,
   brand: "Xiaomi",
   model: "Mi 11",
   imageurl:[
    "assets/images/id5/immagine1.jpg",
    "assets/images/id5/immagine2.jpg",
    "assets/images/id5/immagine3.jpg"
   ],
   number: "222-333-4444",
   category: "electronics",
   price: 749,
   releaseYear: 2021,
   operatingSystem: "Android 11",
   storageCapacity: ["128GB", "256GB"],
   ram: "8GB/12GB",
   screenSize: 6.81,
   batteryCapacity: 4600,
   processor: "Snapdragon 888",
   colorOptions: ["Horizon Blue", "Cloud White", "Midnight Gray"],
   rating: 4.6,
   connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "NFC"],
   weight: 196
   },
   {
   id: 6,
   brand: "OnePlus",
   model: "8T Pro",
   imageurl:[
    "assets/images/id6/immagine1.jpg",
    "assets/images/id6/immagine2.jpg",
  ],
   number: "333-444-5555",
   category: "electronics",
   price: 749,
   releaseYear: 2020,
   operatingSystem: "Android 11",
   storageCapacity: ["128GB", "256GB"],
   ram: "8GB",
   screenSize: 6.55,
   batteryCapacity: 4500,
   processor: "Snapdragon 865",
   colorOptions: ["Aquamarine Green", "Lunar Silver"],
   rating: 4.5,
   connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.1", "NFC"],
   weight: 188
 },
 {
   id: 7,
   brand: "Oppo",
   model: "A53",
   imageurl:[
    "assets/images/id7/immagine1.jpg",
    "assets/images/id7/immagine2.jpg"
   ],
   number: "444-555-6666",
   category: "electronics",
   price: 199,
   releaseYear: 2020,
   operatingSystem: "Android 10",
   storageCapacity: ["64GB", "128GB"],
   ram: "4GB/6GB",
   screenSize: 6.5,
   batteryCapacity: 5000,
   processor: "Snapdragon 460",
   colorOptions: ["Electric Black", "Fancy Blue"],
   rating: 4.2,
   connectivity: ["4G", "Wi-Fi 5", "Bluetooth 5.0"],
   weight: 186
  },
  {
   id: 8,
   brand: "Asus",
   model: "Zenfone 6",
   imageurl:[
    "assets/images/id8/immagine1.jpg",
    "assets/images/id8/immagine2.jpg"
    ], 
   number: "555-666-7777",
   category: "electronics",
   price: 499,
   releaseYear: 2019,
   operatingSystem: "Android 9 (upgradable to Android 11)",
   storageCapacity: ["64GB", "128GB", "256GB"],
   ram: "6GB/8GB",
   screenSize: 6.4,
   batteryCapacity: 5000,
   processor: "Snapdragon 855",
   colorOptions: ["Midnight Black", "Twilight Silver"],
   rating: 4.4,
   connectivity: ["4G", "Wi-Fi 5", "Bluetooth 5.0", "NFC"],
   weight: 190
  },
  {
   id: 9,
   brand: "Google",
   model: "Pixel 4",
   imageurl:[
    "assets/images/id9/immagine1.jpg",
    "assets/images/id9/immagine2.jpg",
    "assets/images/id9/immagine3.jpg"
   ],
   number: "666-777-8888",
   category: "electronics",
   price: 799,
   releaseYear: 2019,
    operatingSystem: "Android 10",
   storageCapacity: ["64GB", "128GB"],
   ram: "6GB",
   screenSize: 5.7,
   batteryCapacity: 2800,
   processor: "Snapdragon 855",
   colorOptions: ["Just Black", "Clearly White", "Oh So Orange"],
   rating: 4.3,
   connectivity: ["4G", "Wi-Fi 5", "Bluetooth 5.0", "NFC"],
   weight: 162
  },
  {
   id: 10,
   brand: "Samsung",
   model: "S20",
   imageurl:[
    "assets/images/id10/immagine1.jpg",
    "assets/images/id10/immagine2.jpg",
    "assets/images/id10/immagine3.jpg"
   ],
   number: "777-888-9999",
   category: "electronics",
   price: 999,
   releaseYear: 2020,
   operatingSystem: "Android 10",
   storageCapacity: ["128GB"],
   ram: "8GB",
   screenSize: 6.2,
   batteryCapacity: 4000,
   processor: "Exynos 990 / Snapdragon 865",
   colorOptions: ["Cosmic Gray", "Cloud Blue", "Cloud Pink"],
   rating: 4.6,
   connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "NFC"],
   weight: 163
  },
  {
   id: 11,
   brand: "Huawei",
   model: "P40",
   imageurl:[
    "assets/images/id11/immagine1.jpg",
    "assets/images/id11/immagine2.jpg",
    "assets/images/id11/immagine3.jpg"
   ],
   number: "888-999-0000",
   category: "electronics",
   price: 699,
   releaseYear: 2020,
   operatingSystem: "Android 10 (no Google services)",
   storageCapacity: ["128GB", "256GB"],
   ram: "8GB",
   screenSize: 6.1,
   batteryCapacity: 3800,
   processor: "Kirin 990 5G",
   colorOptions: ["Silver Frost", "Blush Gold", "Deep Sea Blue"],
   rating: 4.3,
   connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.1", "NFC"],
   weight: 175
 },
  {
   id: 12,
   brand: "Xiaomi",
   model: "Mi 10",
   imageurl:[
    "assets/images/id12/immagine1.jpg",
    "assets/images/id12/immagine2.jpg"
    ], 
   number: "999-000-1111",
   category: "electronics",
   price: 799,
   releaseYear: 2020,
   operatingSystem: "Android 10",
   storageCapacity: ["128GB", "256GB"],
   ram: "8GB",
   screenSize: 6.67,
   batteryCapacity: 4780,
   processor: "Snapdragon 865",
   colorOptions: ["Coral Green", "Twilight Grey"],
   rating: 4.5,
   connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.1", "NFC"],
   weight: 208
  },
  {
   id: 13,
   brand: "OnePlus",
   model: "8",
   imageurl:[
    "assets/images/id13/immagine1.jpg",
    "assets/images/id13/immagine2.jpg",
    "assets/images/id13/immagine3.jpg"
    ],
   number: "000-111-2222",
   category: "electronics",
   price: 699,
   releaseYear: 2020,
   operatingSystem: "Android 10",
   storageCapacity: ["128GB", "256GB"],
   ram: "8GB/12GB",
   screenSize: 6.55,
   batteryCapacity: 4300,
   processor: "Snapdragon 865",
   colorOptions: ["Glacial Green", "Interstellar Glow", "Onyx Black"],
   rating: 4.4,
   connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.1", "NFC"],
   weight: 180
 },
 {
   id: 14,
   brand: "Oppo",
   model: "A5",
   imageurl:[   
    "assets/images/id14/immagine1.jpg",
    "assets/images/id14/immagine2.jpg"
   ],
   number: "111-222-3333",
   category: "electronics",
   price: 199,
   releaseYear: 2019,
   operatingSystem: "Android 9",
   storageCapacity: ["64GB", "128GB"],
   ram: "3GB/4GB",
   screenSize: 6.5,
   batteryCapacity: 5000,
   processor: "Snapdragon 665",
   colorOptions: ["Mirror Black", "Dazzling White"],
   rating: 4.2,
   connectivity: ["4G", "Wi-Fi 5", "Bluetooth 5.0"],
   weight: 195
 },
 {
   id: 15,
   brand: "Asus",
   model: "Zenfone 5",
   imageurl:[
    "assets/images/id15/immagine1.jpg",
    "assets/images/id15/immagine2.jpg"
    ],
   number: "222-333-4444",
   category: "electronics",
   price: 399,
   releaseYear: 2018,
   operatingSystem: "Android 8.0",
   storageCapacity: ["64GB", "128GB"],
   ram: "4GB/6GB",
   screenSize: 6.2,
   batteryCapacity: 3300,
   processor: "Snapdragon 636",
   colorOptions: ["Meteor Silver", "Midnight Blue"],
   rating: 4.3,
   connectivity: ["4G", "Wi-Fi 5", "Bluetooth 5.0", "NFC"],
   weight: 155
  },
  {
   id: 16,
   brand: "Nokia",
   model: "Lumia",
   imageurl:[
    "assets/images/id16/immagine1.jpg",
    "assets/images/id16/immagine2.jpg",
    "assets/images/id16/immagine3.jpg",
    "assets/images/id16/immagine4.jpg"
   ],
   number: "555-666-8888",
   category: "electronics",
   price: 299,
   releaseYear: 2015,
   operatingSystem: "Windows Phone 8.1",
   storageCapacity: ["8GB", "16GB"],
   ram: "1GB",
   screenSize: 5.0,
   batteryCapacity: 2200,
   processor: "Snapdragon 400",
   colorOptions: ["Black", "White", "Red", "Yellow"],
   rating: 3.8,
   connectivity: ["4G", "Wi-Fi 4", "Bluetooth 4.0"],
   weight: 150
  },
  {
   id: 17,
   brand: "Samsung",
   model: "Galaxy S22 Ultra",
   imageurl:[ 
    "assets/images/id17/immagine1.jpg",
    "assets/images/id17/immagine2.jpg",
    "assets/images/id17/immagine3.jpg",
    "assets/images/id17/immagine4.jpg"
   ],
   number: "555-666-8888",
   category: "electronics",
   price: 1199,
   releaseYear: 2022,
   operatingSystem: "Android 12",
   storageCapacity: ["128GB", "256GB", "512GB", "1TB"],
   ram: "8GB/12GB",
   screenSize: 6.8,
   batteryCapacity: 5000,
   processor: "Snapdragon 8 Gen 1",
   colorOptions: ["Phantom Black", "Phantom White", "Green", "Burgundy"],
   rating: 4.8,
   connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.2", "NFC", "Ultra Wideband"],
   weight: 228
  },
  {
   id: 18,
   brand: "OnePlus",
   model: "8 Pro",
   imageurl:[
    "assets/images/id18/immagine1.jpg",
    "assets/images/id18/immagine2.jpg",
    "assets/images/id18/immagine3.jpg"
   ],
   number: "666-888-9999",
   category: "electronics",
   price: 899,
   releaseYear: 2020,
   operatingSystem: "Android 10",
   storageCapacity: ["128GB", "256GB"],
   ram: "8GB/12GB",
   screenSize: 6.78,
   batteryCapacity: 4510,
   processor: "Snapdragon 865",
   colorOptions: ["Glacial Green", "Ultramarine Blue", "Onyx Black"],
   rating: 4.6,
   connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.1", "NFC"],
   weight: 199
  },
  {
   id: 19,
   brand: "Google",
   model: "Pixel 5",
   imageurl:[
    "assets/images/id19/immagine1.jpg",
    "assets/images/id19/immagine2.jpg",
   ],
   number: "777-888-9999",
   category: "electronics",
   price: 699,
   releaseYear: 2020,
   operatingSystem: "Android 11",
   storageCapacity: ["128GB"],
   ram: "8GB",
   screenSize: 6.0,
   batteryCapacity: 4080,
   processor: "Snapdragon 765G",
   colorOptions: ["Just Black", "Sorta Sage"],
   rating: 4.5,
   connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "NFC"],
   weight: 151
  },
  {
   id: 20,
   brand: "Samsung",
   model: "Galaxy S22",
   imageurl:[
    "assets/images/id20/immagine1.jpg",
    "assets/images/id20/immagine2.jpg",
    "assets/images/id20/immagine3.jpg",
    "assets/images/id20/immagine4.jpg"
   ],
   number: "777-888-9999",
   category: "electronics",
   price: 799,
   releaseYear: 2022,
   operatingSystem: "Android 12",
   storageCapacity: ["128GB", "256GB"],
   ram: "8GB",
   screenSize: 6.1,
   batteryCapacity: 3700,
   processor: "Snapdragon 8 Gen 1",
   colorOptions: ["Phantom Black", "Phantom White", "Green", "Pink Gold"],
   rating: 4.6,
   connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.2", "NFC"],
   weight: 167
  },

  {
    id: 22,
    brand: "Apple",
    model: "iPhone 15 Pro",
    imageurl: [
     "assets/images/id22/immagine1.jpg",
     "assets/images/id22/immagine2.jpg",
     "assets/images/id22/immagine3.jpg",
     "assets/images/id22/immagine4.jpg"
    ],
    number: "111-222-3333",
    category: "electronics",
    price: 999,
    releaseYear: 2023,
    operatingSystem: "iOS 17",
    storageCapacity: ["128GB", "256GB", "512GB", "1TB"],
    ram: "8GB",
    screenSize: 6.1,
    batteryCapacity: 3274,
    processor: "A17 Pro",
    colorOptions: ["Black Titanium", "White Titanium", "Blue Titanium", "Natural Titanium"],
    rating: 4.8,
    connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC", "Ultra Wideband"],
    weight: 187
  },
  {
    id: 23,
    brand: "Google",
    model: "Pixel 8 Pro",
    imageurl: [
     "assets/images/id23/immagine1.jpg",
     "assets/images/id23/immagine2.jpg",
     "assets/images/id23/immagine3.jpg",
    ],
    number: "222-333-4444",
    category: "electronics",
    price: 999,
    releaseYear: 2023,
    operatingSystem: "Android 14",
    storageCapacity: ["128GB", "256GB", "512GB"],
    ram: "12GB",
    screenSize: 6.7,
    batteryCapacity: 5050,
    processor: "Google Tensor G3",
    colorOptions: ["Obsidian", "Porcelain", "Bay"],
    rating: 4.6,
    connectivity: ["5G", "Wi-Fi 7", "Bluetooth 5.3", "NFC", "Ultra Wideband"],
    weight: 213
  },
  {
    id: 24,
    brand: "Xiaomi",
    model: "13 Ultra",
    imageurl: [
     "assets/images/id24/immagine1.jpg",
     "assets/images/id24/immagine2.jpg",
     "assets/images/id24/immagine3.jpg",
    ],
    number: "333-444-5555",
    category: "electronics",
    price: 1299,
    releaseYear: 2023,
    operatingSystem: "Android 13",
    storageCapacity: ["256GB", "512GB", "1TB"],
    ram: "12GB/16GB",
    screenSize: 6.73,
    batteryCapacity: 5000,
    processor: "Snapdragon 8 Gen 2",
    colorOptions: ["Black", "Green", "White"],
    rating: 4.7,
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "NFC", "Infrared"],
    weight: 227
  },
  {
    id: 25,
    brand: "Samsung",
    model: "Galaxy S23 Ultra",
    imageurl: [
     "assets/images/id25/immagine1.jpg",
     "assets/images/id25/immagine2.jpg",
     "assets/images/id25/immagine3.jpg",
     "assets/images/id25/immagine4.jpg",
    ],
    number: "444-555-6666",
    category: "electronics",
    price: 1199,
    releaseYear: 2023,
    operatingSystem: "Android 13",
    storageCapacity: ["256GB", "512GB", "1TB"],
    ram: "12GB",
    screenSize: 6.8,
    batteryCapacity: 5000,
    processor: "Snapdragon 8 Gen 2",
    colorOptions: ["Phantom Black", "Green", "Lavender", "Cream"],
    rating: 4.8,
    connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC", "Ultra Wideband"],
    weight: 234
  },
  {
    id: 26,
    brand: "Apple",
    model: "iPhone 14",
    imageurl: [
     "assets/images/id26/immagine1.jpg",
     "assets/images/id26/immagine2.jpg",
     "assets/images/id26/immagine3.jpg",
     "assets/images/id26/immagine4.jpg",
     "assets/images/id26/immagine5.jpg",
    ],
    number: "555-666-7777",
    category: "electronics",
    price: 799,
    releaseYear: 2022,
    operatingSystem: "iOS 16",
    storageCapacity: ["128GB", "256GB", "512GB"],
    ram: "6GB",
    screenSize: 6.1,
    batteryCapacity: 3279,
    processor: "A15 Bionic",
    colorOptions: ["Midnight", "Purple", "Starlight", "Blue", "Red"],
    rating: 4.6,
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "NFC"],
    weight: 172
  },
  {
    id: 27,
    brand: "Google",
    model: "Pixel 7a",
    imageurl: [
     "assets/images/id27/immagine1.jpg",
     "assets/images/id27/immagine2.jpg",
     "assets/images/id27/immagine3.jpg",
     "assets/images/id27/immagine4.jpg",
    ],
    number: "666-777-8888",
    category: "electronics",
    price: 499,
    releaseYear: 2023,
    operatingSystem: "Android 13",
    storageCapacity: ["128GB"],
    ram: "8GB",
    screenSize: 6.1,
    batteryCapacity: 4385,
    processor: "Google Tensor G2",
    colorOptions: ["Charcoal", "Snow", "Sea", "Coral"],
    rating: 4.4,
    connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC"],
    weight: 193
  },
  {
    id: 28,
    brand: "Xiaomi",
    model: "12T Pro",
    imageurl:[
     "assets/images/id28/immagine1.jpg",
     "assets/images/id28/immagine2.jpg",
     "assets/images/id28/immagine3.jpg"
    ],
    number: "777-888-9999",
    category: "electronics",
    price: 749,
    releaseYear: 2022,
    operatingSystem: "Android 12",
    storageCapacity: ["128GB", "256GB"],
    ram: "8GB/12GB",
    screenSize: 6.67,
    batteryCapacity: 5000,
    processor: "Snapdragon 8+ Gen 1",
    colorOptions: ["Black", "Blue", "Silver"],
    rating: 4.5,
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "NFC", "Infrared"],
    weight: 205
  },
  {
    id: 29,
    brand: "Samsung",
    model: "Galaxy Z Flip5",
    imageurl: [
     "assets/images/id29/immagine1.jpg",
     "assets/images/id29/immagine2.jpg",
     "assets/images/id29/immagine3.jpg",
     "assets/images/id29/immagine4.jpg",
     "assets/images/id29/immagine5.jpg",
    ],
    number: "888-999-0000",
    category: "electronics",
    price: 999,
    releaseYear: 2023,
    operatingSystem: "Android 13",
    storageCapacity: ["256GB", "512GB"],
    ram: "8GB",
    screenSize: 6.7,
    batteryCapacity: 3700,
    processor: "Snapdragon 8 Gen 2",
    colorOptions: ["Mint", "Graphite", "Cream", "Lavender", "Gray"],
    rating: 4.3,
    connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC"],
    weight: 187
  },
  {
    id: 30,
    brand: "Apple",
    model: "iPhone SE (2022)",
    imageurl: [
     "assets/images/id30/immagine1.jpg",
     "assets/images/id30/immagine2.jpg",
     "assets/images/id30/immagine3.jpg"],
    number: "999-000-1111",
    category: "electronics",
    price: 429,
    releaseYear: 2022,
    operatingSystem: "iOS 15",
    storageCapacity: ["64GB", "128GB", "256GB"],
    ram: "4GB",
    screenSize: 4.7,
    batteryCapacity: 2018,
    processor: "A15 Bionic",
    colorOptions: ["Midnight", "Starlight", "Red"],
    rating: 4.2,
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "NFC"],
    weight: 144
  },
  {
    id: 31,
    brand: "Google",
    model: "Pixel Fold",
    imageurl: [
     "assets/images/id31/immagine1.jpg",
     "assets/images/id31/immagine2.jpg",
    ],
    number: "000-111-2222",
    category: "electronics",
    price: 1799,
    releaseYear: 2023,
    operatingSystem: "Android 13",
    storageCapacity: ["256GB", "512GB"],
    ram: "12GB",
    screenSize: 7.6,
    batteryCapacity: 4821,
    processor: "Google Tensor G2",
    colorOptions: ["Obsidian", "Porcelain"],
    rating: 4.3,
    connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.2", "NFC"],
    weight: 283
  },
  {
    id: 32,
    brand: "Xiaomi",
    model: "Redmi Note 12 Pro",
    imageurl: [
     "assets/images/id32/immagine1.jpg",
     "assets/images/id32/immagine2.jpg",
     "assets/images/id32/immagine3.jpg",
    ],
    number: "123-456-7890",
    category: "electronics",
    price: 299,
    releaseYear: 2022,
    operatingSystem: "Android 12",
    storageCapacity: ["128GB", "256GB"],
    ram: "6GB/8GB",
    screenSize: 6.67,
    batteryCapacity: 5000,
    processor: "MediaTek Dimensity 1080",
    colorOptions: ["Onyx Gray", "Ice Blue", "Forest Green"],
    rating: 4.4,
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "NFC"],
    weight: 187
  },
  {
    id: 33,
    brand: "Samsung",
    model: "Galaxy A54",
    imageurl: [
     "assets/images/id33/immagine1.jpg",
     "assets/images/id33/immagine2.jpg",
     "assets/images/id33/immagine3.jpg",
     "assets/images/id33/immagine4.jpg",
    ],
    number: "234-567-8901",
    category: "electronics",
    price: 449,
    releaseYear: 2023,
    operatingSystem: "Android 13",
    storageCapacity: ["128GB", "256GB"],
    ram: "6GB/8GB",
    screenSize: 6.4,
    batteryCapacity: 5000,
    processor: "Exynos 1380",
    colorOptions: ["Awesome Black", "Awesome White", "Awesome Violet", "Awesome Lime"],
    rating: 4.5,
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "NFC"],
    weight: 202
  },
  {
    id: 34,
    brand: "Apple",
    model: "iPhone 13 mini",
    imageurl: [
     "assets/images/id34/immagine1.jpg",
     "assets/images/id34/immagine2.jpg",
     "assets/images/id34/immagine3.jpg",
     "assets/images/id34/immagine4.jpg",
     "assets/images/id34/immagine5.jpg",
     "assets/images/id34/immagine6.jpg"
    ],
    number: "345-678-9012",
    category: "electronics",
    price: 599,
    releaseYear: 2021,
    operatingSystem: "iOS 15",
    storageCapacity: ["128GB", "256GB", "512GB"],
    ram: "4GB",
    screenSize: 5.4,
    batteryCapacity: 2406,
    processor: "A15 Bionic",
    colorOptions: ["Pink", "Blue", "Midnight", "Starlight", "Green", "Red"],
    rating: 4.7,
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "NFC"],
    weight: 140
  },
  {
    id: 35,
    brand: "Google",
    model: "Pixel 6a",
    imageurl: [
     "assets/images/id35/immagine1.jpg",
     "assets/images/id35/immagine2.jpg",
     "assets/images/id35/immagine3.jpg"
    ],
    number: "456-789-0123",
    category: "electronics",
    price: 349,
    releaseYear: 2022,
    operatingSystem: "Android 12",
    storageCapacity: ["128GB"],
    ram: "6GB",
    screenSize: 6.1,
    batteryCapacity: 4410,
    processor: "Google Tensor",
    colorOptions: ["Chalk", "Charcoal", "Sage"],
    rating: 4.5,
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "NFC"],
    weight: 178
  },
  {
    id :36,
    brand: "Xiaomi",
    model: "POCO F5",
    imageurl: [
     "assets/images/id36/immagine1.jpg",
     "assets/images/id36/immagine2.jpg",
     "assets/images/id36/immagine3.jpg"
    ],
    number: "567-890-1234",
    category: "electronics",
    price: 379,
    releaseYear: 2023,
    operatingSystem: "Android 13",
    storageCapacity: ["128GB", "256GB"],
    ram: "8GB/12GB",
    screenSize: 6.67,
    batteryCapacity: 5000,
    processor: "Snapdragon 7+ Gen 2",
    colorOptions: ["Black", "Blue", "White"],
    rating: 4.6,
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.3", "NFC"],
    weight: 181
  },
  {
    id: 37,
    brand: "Samsung",
    model: "Galaxy Z Fold5",
    imageurl: [
     "assets/images/id37/immagine1.jpg",
     "assets/images/id37/immagine2.jpg",
     "assets/images/id37/immagine3.jpg",
     "assets/images/id37/immagine4.jpg",
     "assets/images/id37/immagine5.jpg",
    ],
    number: "678-901-2345",
    category: "electronics",
    price: 1799,
    releaseYear: 2023,
    operatingSystem: "Android 13",
    storageCapacity: ["256GB", "512GB", "1TB"],
    ram: "12GB",
    screenSize: 7.6,
    batteryCapacity: 4400,
    processor: "Snapdragon 8 Gen 2",
    colorOptions: ["Icy Blue", "Phantom Black", "Cream", "Gray", "Blue"],
    rating: 4.4,
    connectivity: ["5G", "Wi-Fi 6E", "Bluetooth 5.3", "NFC", "Ultra Wideband"],
    weight: 253
  },
  {
    id: 38,
    brand: "Apple",
    model: "iPhone 12",
    imageurl: [
     "assets/images/id38/immagine1.jpg",
     "assets/images/id38/immagine2.jpg",
     "assets/images/id38/immagine3.jpg",
     "assets/images/id38/immagine4.jpg",
     "assets/images/id38/immagine5.jpg",
     "assets/images/id38/immagine6.jpg"
    ],
    number: "789-012-3456",
    category: "electronics",
    price: 699,
    releaseYear: 2020,
    operatingSystem: "iOS 14",
    storageCapacity: ["64GB", "128GB", "256GB"],
    ram: "4GB",
    screenSize: 6.1,
    batteryCapacity: 2815,
    processor: "A14 Bionic",
    colorOptions: ["Black", "White", "Red", "Green", "Blue", "Purple"],
    rating: 4.6,
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.0", "NFC"],
    weight: 164
  },
  {
    id: 39,
    brand: "Google",
    model: "Pixel 5a",
    imageurl: [
     "assets/images/id39/immagine1.jpg",
    ],
    number: "890-123-4567",
    category: "electronics",
    price: 449,
    releaseYear: 2021,
    operatingSystem: "Android 11",
    storageCapacity: ["128GB"],
    ram: "6GB",
    screenSize: 6.34,
    batteryCapacity: 4680,
    processor: "Snapdragon 765G",
    colorOptions: ["Mostly Black"],
    rating: 4.3,
    connectivity: ["5G", "Wi-Fi 5", "Bluetooth 5.0", "NFC"],
    weight: 183
  },
  {
    id: 40,
    brand: "Xiaomi",
    model: "Black Shark 5 Pro",
    imageurl: [
     "assets/images/id40/immagine1.jpg",
     "assets/images/id40/immagine2.jpg",
    ],
    number: "901-234-5678",
    category: "electronics",
    price: 799,
    releaseYear: 2022,
    operatingSystem: "Android 12",
    storageCapacity: ["256GB", "512GB"],
    ram: "8GB/12GB/16GB",
    screenSize: 6.67,
    batteryCapacity: 4650,
    processor: "Snapdragon 8 Gen 1",
    colorOptions: ["Black", "White"],
  rating: 4.7,
    connectivity: ["5G", "Wi-Fi 6", "Bluetooth 5.2", "NFC"],
    weight: 220
  }



];

app.get('/phoneListings', (req, res) => {
  res.json(phoneListings);
});

// Search endpoint
app.get('/search', (req, res) => {
const query = req.query.q ? req.query.q.toString().toLowerCase() : '';
console.log('Searching for: ', query);

if(!query) {
res.json(phoneListings);
}

const results = phoneListings.filter(phone => 
phone.brand.toLowerCase().includes(query) || 
phone.model.toLowerCase().includes(query)
);
console.log('Found results: ', results.length);
res.json(results);
});

// Get all phones
app.get('/phoneListings', (req, res) => {
res.json(phoneListings);
});

// Get phone by ID
app.get('/phoneListings/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phoneListings.find(p => p.id === id);
  if (!phone) {
    res.status(404).json({ error: 'Phone not found' });
  } else {
    res.json(phone);
  }
});

// Create new phone
app.post('/phoneListings', (req, res) => {
const { brand, model, imageurl, number, category, price, releaseYear, operatingSystem, storageCapacity, ram, screenSize, batteryCapacity, processor, colorOptions, rating, connectivity, weight } = req.body;
if (!brand || !model || !imageurl || !number || !category || !screenSize || !batteryCapacity || !processor || !colorOptions || !rating || !connectivity || !weight) {
 res.status(400).json({ error: 'Invalid phone data. Missing required fields.' });
}

const newPhone = {
id: phoneListings.length + 1,
brand,
model,
imageurl,
number,
category,
price,
releaseYear,
operatingSystem,
storageCapacity,
ram,
screenSize,
batteryCapacity,
processor,
colorOptions,
rating,
connectivity,
weight
};

phoneListings.push(newPhone);
res.status(201).json(newPhone);
});

app.listen(port, () => {
console.log(`API running at http://localhost:${port}`);
});