
export type headerType = headerValue[]

export type headerValue = {
    name: string,
    path: string
}


export const HeaderList = () => {


    const list: headerType = [
        { name: "Home", path: "/" },
        { name: "Skills", path: "/skills" },
        { name: "Experiences", path: "/experiences" },
        { name: "Projects", path: "/projects" },
    ]

    return list
}
