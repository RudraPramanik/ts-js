const shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

const done = shopping[0];

console.log(done);

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities.indexOf('Liverpool');
if (index !== +1) {
  cities.splice(index, 1);
}
console.log(cities);

// making array
const data = 'Manchester,Lond,Liverpool,Birmingham,Leeds,Carlisle';
const cities1 = data.split(',');
console.log(cities1);
