//  Title: Number of People in the Bus
//  https://www.codewars.com/kata/5648b12ce68d9daa6b000099

// JS version: https://github.com/Krysthecoder/CodeWars/blob/main/busCounter.js

var number = (busStops) => {
   let [passangerIn, passangerOut] = [0, 0]
   busStops.map(elem => {passangerIn += elem[0], passangerOut -= elem[1]});
   return passangerIn + passangerOut;
}