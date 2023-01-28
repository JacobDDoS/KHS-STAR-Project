import { handleRequest } from "../helpers/handleRequest";

export const getCommittee = async () => {
//     const data = [
//     {
//         "id": 1,
//         "committeeName" : "FACTS",
//         "members" : "Cazbi Velazquez, Shayne Donovan, Addyson Jones, Arabella Young, Isobel Zayas, Joseph Vyvlecka, Kassidy Clark, Kimberly Gomez-Galicia, Cheyenne Seybold, Adan Ciprian",        
//         "startTime" : "2022-01-01T23:59:00.000+00:00",
//         "endTime" : "2023-12-01T23:59:00.000+00:00",
//         "description" : "The FACTS (foreign atrocities come to surface) club is a good one.",
//         "image" : "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?b=1&s=170667a&w=0&k=20&c=nOa1R7PGaqOaQscx10FpA5ZNenMeDfs-k6VgmmuY4cc=",
//         "accomplishments" : "Harper Avery medical award"
//     },
//     {
//         "id": 2,
//         "committeeName" : "Dressember Committee",
//         "members" : "",
//         "startTime" : "2022-01-01T23:59:00.000+00:00",
//         "endTime" : "",
//         "description" : "Advocates against human trafficing through dressing up in December",
//         "image" : "https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?b=1&s=170667a&w=0&k=20&c=nOa1R7PGaqOaQscx10FpA5ZNenMeDfs-k6VgmmuY4cc=",
//         "accomplishments" : "3 gold stars from Mr.Everitt"
//     }
// ];

//     return data;

return handleRequest("GET", "/Committee")
        .then((data) => {
            console.log(data);
            return data;
        })

}