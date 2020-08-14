export let people = [
  {
    id: 1,
    name: "Olasupo",
    age: 37,
    gender: "male",
  },
  {
    id: 2,
    name: "Oladipo",
    age: 39,
    gender: "male",
  },
  {
    id: 3,
    name: "Onaolapo",
    age: 35,
    gender: "male",
  },
  {
    id: 4,
    name: "Ikeoluwapo",
    age: 33,
    gender: "female",
  },
  {
    id: 5,
    name: "Teni",
    age: 11,
    gender: "male",
  },
  {
    id: 6,
    name: "Tammy",
    age: 6,
    gender: "female",
  },
];

export const getByID = (id) => {
  return people.filter((person) => person.id === id)[0];
};

export const getPeople = () => people;

export const deletePerson = (id) => {
  const cleanedPeople = people.filter((person) => person.id !== id);
  if (people.length > cleanedPeople.length) {
    people = cleanedPeople;
    return true;
  } else {
    return false;
  }
};

export const addPerson = (name, age, gender) => {
  const newPerson = {
    id: `${people.length + 1}`,
    name,
    age,
    gender,
  };

  people.push(newPerson);
  return newPerson;
};
