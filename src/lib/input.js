import readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

export const rl = readline.createInterface({input, output})

export async function inputTemperature() {
    const temp = Number(await rl.question("\nInput Temperature: "))

    if (isNaN(temp)) {
        const error = new Error("The temperature input is not a number.")
        throw error
    }

    return temp
}

export async function inputStartTemp() {
    console.log("\nChoose start temperature:")
    console.log("1. Celcius")
    console.log("2. Fahrenheit")
    console.log("3. Reamur")
    console.log("4. Kelvin")

    const startTemp = Number(await rl.question("\nStart temperature (input a number):"))

    if (isNaN(startTemp)) {
        const error = new Error("The input start temperature is not a number.")
        throw error
    }
    if (![1, 2, 3, 4].includes(startTemp)) {
        const error = new Error("The start temperature is not valid.")
    }

    return startTemp
}

export async function inputGoalTemp(startTemp) {
    console.log("\nChoose goal temperature:")
    console.log("1. Celcius")
    console.log("2. Fahrenheit")
    console.log("3. Reamur")
    console.log("4. Kelvin")

    const goalTemp = Number(await rl.question("\nGoal temperature (input a number):"))

    if (isNaN(goalTemp)) {
        const error = new Error("The input goal temperature is not a number.")
        throw error
    }

    if (![1, 2, 3, 4].includes(goalTemp)) {
        const error = new Error("The goal temperature is not valid.")
    }

    if (goalTemp === startTemp) {
        const error = new Error("The goal temperature can not the same with start temperature.")
        throw error
    }

    return goalTemp
}