const faker = require('faker');
const fs = require('fs');

const generateItems = () => {
  let productsArray = [];

  let age = ['0 to 3 years', '3 to 6 years', 'safe for ages 6 and above', '12 years and above', 'good for all ages', 'fun for all ages'];
  let playerCount = ['1 player', '2 players', '2 to 4 players', '4 players', '4 to 6 players', 'up to 10 players', '4 to 8 players', '3 to 9 players', '2 teams of 3'];

  for (let i = 0; i < 10; i++) {
    let product = [];
    let ageIndex = Math.floor(Math.random() * 6);
    let playerIndex = Math.floor(Math.random() * 9);

    let description = faker.commerce.productDescription();
    let title = faker.commerce.productName();
    let brand = faker.name.lastName() + ' ' + faker.lorem.words() + ' ' + faker.company.companySuffix();
    let category = faker.commerce.productAdjective() + ' ' + faker.commerce.department();
    let part = faker.finance.bic();
    let GTIN = faker.finance.routingNumber();

    product.push(`"${description}"`, title, brand, category, age[ageIndex], playerCount[playerIndex], part, GTIN);
    productsArray.push(product);
  }
  return productsArray;
};

let items = generateItems();
let csv = 'description,title,brand,catgory_name,age_category,player_count,part_Number,GTIN\n';

items.forEach((item) => {
  csv += item.join(',');
  csv += "\n";
})

fs.writeFile('db/products.csv', csv, 'utf8', (err) => {
  if (err) throw err;
  console.log('CSV file successfully written!');
})
