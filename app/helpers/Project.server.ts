import { Project } from "~/types/Project"
import crypto from 'crypto'

export const getPots = () => {
    const projects: Project[] = [
        {
            title: "Gif App",
            img: "https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1",
            description: "Es una aplicación en donde puedes buscar los gifs que quieras. 🐉",
            tags: ["react", "remix", "typescript"],
            id: crypto.randomUUID(),
            url: "https://gif-app.vercel.app/?title=christopher+robin"
        }
    ]

    return projects
}

export default getPots