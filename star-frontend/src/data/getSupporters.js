import { handleRequest } from "../helpers/handleRequest";

export const getSupporters = () => {
    return handleRequest("GET", "/Supporter")
        .then((data) => {
            return data;
        })
}