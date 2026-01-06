export default function kelvinToFahrenheit(params) {
    if (typeof params !== "number") {
        throw new Error("Input must be a number");
    }
    try{
        return (params - 273.15) * 9/5 + 32;
    }catch(err){
        console.log(err);
    }
}