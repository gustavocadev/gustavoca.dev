import fs from 'fs/promises'

const readJSON = async (language: string) => {
    const json = await fs.readFile(`../languages/${language}`, 'utf-8')

    return JSON.parse(json)
}


export {
    readJSON
}