/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const velocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const timeSeconds = 3600; // seconds (1 hour)
const distance = 0; // distance (km)
const remaingFuel = 5000; // remaining fuel (kg)
const fuelBurningRate = 0.5; // fuel burn rate (kg/s)


const newDistance = distance + (velocity * timeSeconds); //calcultes new distance
const newRemainingFuel = remaingFuel - (fuelBurningRate* timeSeconds); //calculates remaining fuel
const newVelocity = calcNewVelocity(acceleration, velocity, timeSeconds); //calculates new velocity based on acceleration

// Pick up an error with how the function below is called and make it robust to such errors
function calcNewVelocity(velocity, acceleration, timeSeconds) {
  if (typeof velocity !== 'number' || typeof acceleration !== 'number' || typeof timeSeconds !== 'number') {
    throw new Error('Invalid parameter type');
  }
  return velocity + (acceleration * timeSeconds);
}

console.log(`Corrected New Velocity: ${newVelocity} km/h`);
console.log(`Corrected New Distance: ${newDistance} km`);
console.log(`Corrected Remaining Fuel: ${newRemainingFuel} kg`);






