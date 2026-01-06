export default function celciusToKelvin(celcius) {
    try {
        if (typeof celcius === 'number') {
            return celcius + 273.15
        } else {
            throw new Error(`${typeof celcius} ${celcius} is not a number!`)
        }
    } catch (error) {
        return error
    }
}