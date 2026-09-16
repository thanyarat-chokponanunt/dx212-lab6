function greet(name, faculty) {
  return "สวัสดี " + name + " จากคณะ " + faculty + "!";
}

// แบบใหม่ (ES6)
const greet_modern = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;

console.log(greet("Pong", "CITU"));
console.log(greet_modern("Pong", "CITU"));