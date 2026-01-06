export function reamurToFahrenheit(reamur) {
    if (typeof reamur !== 'number') {
        throw new Error('reamur harus berupa angka');
    }
    try{
    const fahrenheit = reamur * 1.8 + 32;
    console.log('nilai fahrenheit dari reamur adalah: ', fahrenheit);
    return fahrenheit;
    }catch(err){
        console.log(err.message);
    }
    
}
