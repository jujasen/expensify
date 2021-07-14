const person = {
    name: 'Julz',
    age: 26,
    location: {
        city: 'Bergen',
        temp: 30
    }
}

const { name = 'anonymous', age } = person;

const { city, temp: temperature } =person.location;

console.log(name, age, city, temperature);




const address = ['Sundts veg 50B', 'Bergen', 'Vestland', '5221'];

const [street, cityy, fylke] = address;

console.log(cityy, fylke)
