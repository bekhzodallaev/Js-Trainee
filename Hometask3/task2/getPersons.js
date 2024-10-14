function getPersons(name, age) {
  return [
    { name, age },

    Object.assign({}, { name, age }),

    JSON.parse(JSON.stringify({ name, age })),

    Object.create(
      {},
      {
        name: { value: name, enumerable: true },
        age: { value: age, enumerable: true },
      }
    ),

    (function () {
      return {
        name,
        age,
      };
    })(),

    (function createPerson() {
      return {
        name,
        age,
      };
    })(),

    new (class {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
    })(name, age),
  ];
}

// console.log(getPersons('Alice', 30));
