class Person {
  constructor(name, email, phoneNum) {
    this.name = name;
    this.email = email;
    this.phoneNum = phoneNum;
  }
  adopt(kitty) {
    console.log(`I'm interested in adopting this ${kitty.sex} ${kitty.breed}.`);
  }
  post(kitty) {
    console.log(
      `A ${kitty.age} year-old ${kitty.sex} ${kitty.breed} is looking for a compassionate owner!`
    );
  }
  removePost(kitty) {
    console.log(
      `Yay! This ${kitty.sex} ${kitty.breed} has just found a new family.`
    );
  }
}

class FelisCatus {
  constructor(sex, age, breed) {
    this.sex = sex;
    this.age = age;
    this.breed = breed;
  }
}

const kevser = new Person("Kevser", "kevser@outlook.com", +905000000);
const kubra = new Person("Kubra", "kubra@outlook.com", +48700000);
const ozer = new Person("Ozer", "ozer@gmail.com", +905000000);
const sosis = new FelisCatus("female", "three", "Tabby cat");
const somon = new FelisCatus("male", "one", "Siamese cat");
const yulaf = new FelisCatus("female", "seven", "Orange Tabby cat");

kevser.adopt(sosis);
kubra.post(somon);
ozer.removePost(yulaf);
