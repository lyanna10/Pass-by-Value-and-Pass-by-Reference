//People move location frequently. Create a new function moveLocation()
/**moveLocation() should take one of our person objects as its first parameter and a location object as the second parameter.
The location object will have the properties city, state, and zip.
The function should change the city, state, and zip properties of the person to match those of the new location.
Test your function by using the following code. Does personTwo now live in Rochester? (They should.) */
function moveLocation(person, location) {
  person.location.city = location.city;
  person.location.state = location.state;
  person.location.zip = location.zip;
}

const personOne = {
  name: {
    first: 'Timmy',
    last: 'Timtim'
  },
  age: 30,
  location: {
    city: 'New York',
    state: 'New York',
    zip: 10001
  }
};

const personTwo = {
  name: {
    first: 'Julie',
    last: 'July'
  },
  age: 28,
  location: {
    city: 'Albany',
    state: 'New York',
    zip: 12201
  }
};

//Test your function by using the following code. Does personTwo now live in Rochester? (They should.)
moveLocation(personOne, personTwo.location);
console.log(personOne.location.city); 

const nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
}

moveLocation(personTwo, nLoc);

nLoc.city = 'Buffalo';
nLoc.zip = 14201;

console.log(personTwo.location.city);

//julie and Timmy have gotten married! Since they'll be living together, we should give them the same location. However, since they'll be living together forever, let's save ourselves the hassle of updating both of their locations every time they move
const timmysLocation = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    },
}
const juliesLocation = {
    name: {
        first: 'Julie',
        last: 'july'
    },
    age: 28,
    location: timmysLocation.location
}
console.log(timmysLocation.location);
console.log(juliesLocation.location)

//Test this new link by using the following code, which utilizes our already-completed moveLocation() function with no changes necessary. Do both people now live in California? (They both should.)
const nLocc = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}
moveLocation(timmysLocation, nLocc);
console.log(timmysLocation.location);
console.log(juliesLocation.location);

/**The happy couple are having a baby! Create a new object personThree.

Set personThree.name.first to whatever you'd like, and personThree.name.last to a hyphenated combination of personOne and personTwo's last names.
Give personThree an age of 0.
Set personThree's location to that of their parents, by reference so that the baby stays with its family.
Test your code's behavior by using your moveLocation() function. */
const personThree = {
    name: {
        first: 'Tom',
        last: 'Timtim' + 'July'
    },
    age: 0,
    location: timmysLocation.location
}
moveLocation(personThree, timmysLocation.location);
console.log(timmysLocation.location)

/**Years go by, and personThree is ready for a life of independance.

Increment everyone's age values by 20.
Create a copy of personThree's location that breaks the reference to the current location object, and set their location to that copy.
Test your code by having personThree moveLocation() somewhere of your choosing. Does this change the locations of personOne or personTwo? (It shouldn't.) */
timmysLocation.age += 20;
juliesLocation.age += 20;
personThree.age += 20;

const ageOfIndependance = { ...personThree.location };
personThree.location = ageOfIndependance;
moveLocation(personThree, { city: 'Los Angeles', state: 'California', zip: 90001 });
console.log(timmysLocation.location);
console.log(juliesLocation.location);
console.log(personThree.location);

/**Welcome to the future! We've invented both immortality and cloning.

Increment everyone's age values by 300.
Create a new function clonePerson() that accepts one of our person objects and returns a deep copy of them with age set to 0.
These are all independant clones, so each should be able to move to its own location. Test your code by creating several clones of our persons and using moveLocation() to send them elsewhere. Are these locations unaffected by each other? (They should be.)
Check the age values of your original persons to make sure you did not accidentally set them to 0!
 */
timmysLocation.age += 300;
juliesLocation.age += 300;
personThree.age += 300;

function clonePerson(persons) {
    const clonePerson = JSON.parse(JSON.stringify(persons));
    clonePerson.age = 0;
    return clonePerson;
}
const cloneTimmy = clonePerson(timmysLocation);
const cloneJulie = clonePerson(juliesLocation);
const clonepersonThree = clonePerson(personThree);
moveLocation(cloneTimmy, { city: 'Nairobi', state: 'Kenya', zip: 000100 });
moveLocation(cloneJulie, { city: 'Hays', state: 'Kansas', zip: 67601 });
moveLocation(clonepersonThree, { city: 'Addis Ababa', state: 'Ethiopia', zip: 1150 });

console.log(cloneTimmy.location);
console.log(cloneJulie.location);
console.log(clonepersonThree.location);

/**The hive mind has taken over... Create a new object called thoughts and give it some properties.

Set personOne.thoughts to your thoughts object by reference.
Do this for all of your persons and clones, such that changing the original thoughts object modifies the .thoughts property of every person.
Test your code by modifying everyone's thoughts with a single line of code. Pass by reference is powerful. */
const thoughts = {
    sadness: false,
    happiness: true,
    fulfillment: 10
};
timmysLocation.thoughts = thoughts;
juliesLocation.thoughts = thoughts;
personThree.thoughts = thoughts;

cloneTimmy.thoughts = thoughts;
cloneJulie.thoughts = thoughts;
clonepersonThree.thoughts = thoughts;

thoughts.fulfillment = 6;
console.log(thoughts);



