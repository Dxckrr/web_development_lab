export const stringToNumber = (character: string) => {
    return (character.charCodeAt(0)-65);
}
export const numberToString = (number_: number) => {
    return String.fromCharCode(65 + number_)
}