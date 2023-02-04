module.exports = class FelisCatus {
  constructor(sex, age, breed) {
    this.sex = sex;
    this.age = age;
    this.breed = breed;
  }
  static create({ sex, age, breed }) {
    return new FelisCatus(sex, age, breed);
  }
};
