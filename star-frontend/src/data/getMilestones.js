import { handleRequest } from "../helpers/handleRequest";

export const getMilestones = async () => {
//     const data = [
//     {
//         "id": 1
//         ,"year" : "2023-12-01T23:59:00.000+00:00"
//         ,"memberCount" : 41
//         ,"eventCount" : "8 teams, 14 competitors"
//     },
//     {
//         "id": 2
//         ,"year" : "2020-12-01T23:59:00.000+00:00"
//         ,"memberCount" : 23
//         ,"eventCount" : "3 teams, 5 competitors"
//     }
// ];

//     return data;

return handleRequest("GET", "/Milestone")
        .then((data) => {
            console.log(data);
            return data;
        })

}