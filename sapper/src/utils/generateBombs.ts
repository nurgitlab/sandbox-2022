type  IGenerateBombs = (rows: number, columns: number, countOfBombs: number) => Array<[row: number, column: number]>

export const generateBombs:IGenerateBombs = (rows, columns, countOfBombs) => {
    let generated: Set<number> = new Set()
    let allNums: number[] = []

    for (let i = 0; i < rows * columns; i++) allNums.push(i)

    while (countOfBombs > 0) {
        const needId = Math.floor(Math.random() * allNums.length)
        generated.add(allNums[needId])
        allNums = [...allNums.slice(0, needId), ...allNums.slice(needId + 1)]
        countOfBombs--
    }
    return [...generated].map(num => [Math.floor(num / columns), num % columns])
}