// const interface nameType{
//     type:string
// }

const nameType = 'rudra pramanik';

if (nameType.includes('rudra') || nameType.includes('pramanik')) {
  console.log('Found rudra!');
} else {
  console.log('No rudra here!');
}

const tagline = 'MDN - Resources for developers, by developers';
console.log(tagline.indexOf('developers'));

const radData = 'My NaMe Is MuD';
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());

const nameType1 = 'rudra';
const updated = nameType1.replace('rudra', 'vishalllll');

console.log(updated); // "vanilla"
console.log(nameType1);

console.log(updated.length);
