export function celciusToKelvin(params) {
    try {
        if (typeof params !== "number") {
            throw new Error(`${typeof params} ${params} is not a number!`)
        }else{
            return params + 273.15
        }
    }
    catch (err) {
        return err
    }
}