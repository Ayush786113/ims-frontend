export const compareArray = []

export function addToCompare(id){
    compareArray.push(id)
}

export function getArray(){
    return compareArray
}

export function resetArray(){
    compareArray.length = 0
}