export function fahrenheitToReamurs(fahrenheit) {
    try {
        if (typeof fahrenheit !== 'number') {
            throw new Error(`${typeof fahrenheit} ${fahrenheit} is not a number!`)
        } else {
            const reamur = (fahrenheit - 32) * 4 / 9
            return reamur
        }
    } catch (error) {
        return error
    }
}



