export function reamurToKelvin(reamur) {
    try {
        if (typeof reamur !== "number") {
            throw new Error(`${typeof reamur} ${reamur} is not a number!`)
        }else{
            return (reamur * (5 / 4)) + 273
        }
    } catch (err) {
        return err
    }
}