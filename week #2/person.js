module.export = class Person {
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
};
