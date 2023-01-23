const Person = require("./person");
const FelisCatus = require("./felis");

const kevser = new Person("Kevser", "kevser@outlook.com", +905000000);
const kubra = new Person("Kubra", "kubra@outlook.com", +48700000);
const ozer = new Person("Ozer", "ozer@gmail.com", +905000000);
const sosis = new FelisCatus("female", "three", "Tabby cat");
const somon = new FelisCatus("male", "one", "Siamese cat");
const yulaf = new FelisCatus("female", "seven", "Orange Tabby cat");

kevser.adopt(sosis);
kubra.post(somon);
ozer.removePost(yulaf);
