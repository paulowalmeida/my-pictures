
const URL_API = "http://localhost:3000";

export const Paths = {
    
}

export const pathWithParameters = {
    galery:(userName: string) => `${URL_API}/${userName}/photos`
}