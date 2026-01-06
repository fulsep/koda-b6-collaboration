export function kelvinReamur(masukanKelvin){
    if(typeof masukanKelvin !== "number"){
        throw new Error("Input harus berupa Number!");
    }
    try{
        const res = (masukanKelvin - 273) * (8/10);
        return res; 
    }
    catch(err){
        console.log(`Terjadi kesalahan: ${err.message}`);
    }
}