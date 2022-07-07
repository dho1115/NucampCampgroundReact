import { baseURL } from "../app/shared/baseURL";

export const mapImageURL = arr => {
    return arr.map(item => {
        return {
            ...item,
            image: baseURL + item.image
        }
    })
}