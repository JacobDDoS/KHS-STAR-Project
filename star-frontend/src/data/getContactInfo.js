import { handleRequest } from "../helpers/handleRequest";

export const getContactInfo = () => {
    return handleRequest("GET", "/ContactInfo")
    .then((data) => {
        return data;
    })
}