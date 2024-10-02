const value1 = {name:'koke',club:'atlatico madrid'}
const jsonX = JSON.stringify(value1) // it makes every-thing in double-kot string
console.log(jsonX);

const opposite = JSON.parse(jsonX); // it makes the stringy value into the original object
console.log(opposite); 