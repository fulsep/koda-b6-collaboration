export function fahrenheiToReamurs(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

const fahrenheit = 100;
const reamurs = fahrenheiToReamurs(fahrenheit);
console.log('nilai reamur dari fahrenheit adalah', reamurs);


