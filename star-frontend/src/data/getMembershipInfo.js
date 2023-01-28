import { handleRequest } from "../helpers/handleRequest";

export const getMembershipInfo = async () => {
return handleRequest("GET", "/MembershipInfo")
        .then((data) => {
            console.log(data);
            return data;
        })

}