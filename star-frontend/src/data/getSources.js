import { handleRequest } from "../helpers/handleRequest";

export const getSources = () => {
    return handleRequest("GET", "/Source")
        .then((data) => {
            return data;
        })
}