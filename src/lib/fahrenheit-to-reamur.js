export function fahrenheitToReamurs(fahrenheit) {
    if (typeof fahrenheit !== 'number') {
        throw new Error('fahrenheit harus berupa angka');
        
    }
    const reamur = (fahrenheit - 32) * 4/9;
    console.log('nilai reamur dari fahrenheit adalah: ', reamur);
    return reamur;

}

    
fahrenheitToReamurs(100);



