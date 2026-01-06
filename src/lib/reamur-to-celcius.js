export function reamurToCelcius(reamur) {
    try {
        if (typeof reamur !== "number" || isNaN(reamur)) {
            throw new Error(`${typeof reamur} ${reamur} is not a number!`)
        } else {
            const celcius = (reamur * 5) / 4
            return celcius
        }
    } catch (error) {
        return error
    }
}



