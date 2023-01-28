import { handleRequest } from "../helpers/handleRequest";

export const getRecruitment = async () => {
//     const data = [
//     {
//         "id": 1,
//         "image" : "https://media.istockphoto.com/id/1344439513/photo/summer-landscape-in-park.jpg?b=1&s=170667a&w=0&k=20&c=aTp09vxIXhRw7AGhaBx72WtkCDZYQEcOMYILOsNFw-I=",      
//         "event" : "Summer Stampede",
//         "date" : "2022-06-01T23:59:00.000+00:00",
//         "description" : "Four members set up a stand to attract memebers during summer stampede. We gained 100 members and we are also now the biggest student-body group in all of history."
//     },
//     {
//         "id": 1,
//         "image" : "https://media.istockphoto.com/id/1344439513/photo/summer-landscape-in-park.jpg?b=1&s=170667a&w=0&k=20&c=aTp09vxIXhRw7AGhaBx72WtkCDZYQEcOMYILOsNFw-I=",      
//         "event" : "Back to School Bash",
//         "date" : "2022-12-01T23:59:00.000+00:00",
//         "description" : "Bash the School publically."
//     }
// ];

//     return data;
return handleRequest("GET", "/RecruitmentActivity")
        .then((data) => {
            return data;
        })

}