export function farenheitKelvin(masukanCelcius){
    if(typeof masukanCelcius !== "number"){
        throw new Error("Input harus berupa Number!");
    }
    try{
        const res = (masukanCelcius - 32) * (5/9) + 273.15 ;
        return res; 
    }
    catch(err){
        console.log(`Terjadi kesalahan: ${err.message}`);
    }
}