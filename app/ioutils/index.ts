import fs from 'fs/promises'

const readJSON = async (language: string) => {
    const json = await fs.readFile(`../languages/${language}`, 'utf-8')
    const content = JSON.parse(json)

    return {content}
}


export {
    readJSON
}