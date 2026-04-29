
let a : number = 585
console.log(a)

function greetUser(name: string): string {
  const hour = new Date().getHours();

  if (hour < 12) {
    return `Hello, ${name}!`;
  } else if (hour < 18) {
    return `Good afternoon, ${name}!`;
  } else {
    return `Good evening, ${name}!`;
  }
}


console.log(greetUser("Arshaan"));



































