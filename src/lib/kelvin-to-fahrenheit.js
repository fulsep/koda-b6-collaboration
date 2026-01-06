export default function kelvinToFahrenheit(params) {
    if (typeof params !== "number") {
        const err = new Error("Input must be a number");
        console.log(err);
    }
    try{
        return (params - 273.15) * 9/5 + 32;
    }catch(err){
        console.log(err);
    }
}