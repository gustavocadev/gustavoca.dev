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
        },
        {
            title: "Posts App",
            img: "https://smashballoon.com/wp-content/uploads/2020/08/Types-of-Facebook-Posts-Proven-to-Easily-Boost-Page-Engagement.jpg",
            description: "Es una aplicación en donde puedes crearte una cuenta, iniciar sesión y crear posts 📓",
            tags: ["express", "handlebars", "nodejs", 'mongodb'],
            id: crypto.randomUUID(),
            url: "https://posts-app-node.herokuapp.com"
        },
         {
            title: "App de usuarios",
            img: "https://ayltoninacio.com.br/img/p/74w750.jpg",
            description: "Es una aplicación en donde crear usuarios y listarlos. 🧑‍🦱",
            tags: ["vue", "nodejs", "express"],
            id: crypto.randomUUID(),
            url: "https://base-de-datos-webapp.herokuapp.com"
        },
           {
            title: "App de Cryptomoneda",
            img: "https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/FJpBxbM2AVets8_N0pnHhRwKerw=/1660x934/smart/filters:no_upscale()/cloudfront-us-east-1.images.arcpublishing.com/dmn/DGEV2OLJSRHK5KVI4PT3QHGFEA.jpg",
            description: "Es una aplicación en donde puedes cotizar cryptomonedas. 🪙",
            tags: ["react", "vite", "typescript"],
            id: crypto.randomUUID(),
            url: "https://react-cryptocosas.netlify.app/"
        }
    ]

    return projects
}

export default getPots