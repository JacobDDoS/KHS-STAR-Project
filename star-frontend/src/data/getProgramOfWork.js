import { handleRequest } from "../helpers/handleRequest";

export const getProgramOfWork = async () => {
//     const data = [
//     {
//         "id": 1,
//         "date" : "2023-1-20T1:00:00.000+000:00",
//         "event" : "Jan",        
//     },
//     {
//         "id": 2,
//         "date" : "2023-3-20T15:30:00.000+000:00",
//         "event" : "March",        
//     },
//     {
//         "id" : 3,
//         "date" : "2023-2-21T15:30:00.000+000:00",
//         "event" : "Feb",
//     },
//     {
//         "id" : 4,
//         "date" : "2023-4-21T15:30:00.000+000:00",
//         "event" : "April",
//     },
//     {
//         "id" : 5,
//         "date" : "2023-5-21T15:30:00.000+000:00",
//         "event" : "May",
//     },
//     {
//         "id" : 6,
//         "date" : "2023-6-21T15:30:00.000+000:00",
//         "event" : "June",
//     },
//     {
//         "id" : 7,
//         "date" : "2023-7-21T15:30:00.000+000:00",
//         "event" : "July",
//     },
//     {
//         "id" : 8,
//         "date" : "2023-8-21T15:30:00.000+000:00",
//         "event" : "August",
//     },
//     {
//         "id" : 9,
//         "date" : "2023-9-21T15:30:00.000+000:00",
//         "event" : "Sept",
//     },
//     {
//         "id" : 10,
//         "date" : "2023-10-21T15:30:00.000+000:00",
//         "event" : "Oct",
//     },
//     {
//         "id" : 11,
//         "date" : "2023-11-21T15:30:00.000+000:00",
//         "event" : "Nov",
//     },
//     {
//         "id" : 12,
//         "date" : "2023-12-21T15:30:00.000+000:00",
//         "event" : "Dec",
//     },
// ];

//     return data;

return handleRequest("GET", "/ProgramOfWork")
    .then((data) => {
        return data;
    })

}