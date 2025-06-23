// Parametr olaraq təyin edilmiş adı istifadə edərək "Hello, name!" yazısı çıxaran anonim (IIFE) funksiya yazın

(function call(name) {
  console.log(`Hello, ${name}!`);
})("Ziya");

// Hello, Ziya!

// Aşağıdakı ifadəni ternary operator ilə yazın

const age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

const text = age >= 18 ? "Youre an adult" : "Youre a minor";
console.log(text);

// Aşağıdakı ifadəni ternary operator ilə yazın

if (age < 18) {
  console.log("You are a minor.");
} else if (age >= 65) {
  console.log("You are a senior.");
} else {
  console.log("You are an adult.");
}

const textS =
  age < 18 ? "Youre a minor" : age >= 65 ? "Youre a senior" : "Youre an adult";
console.log(textS);
