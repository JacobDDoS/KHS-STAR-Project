import { handleRequest } from "../helpers/handleRequest";

export const getClubInfo = async () => {
//     const data = [
//     {
//         "id": 1,
//         "image" : "https://media.istockphoto.com/id/531754695/photo/red-rose-on-white-background.jpg?s=612x612&w=is&k=20&c=aaRHiKjNVWeINqqeuUQGh7XCZe2_uKzMK1rUovhN1vE=",
//         "heading" : "Official FCCLA Flower Is...",        
//         "text" : "The Red Rose! In the year 1924, when Abraham Lincoln was the president of FCCLA, the official flower was changed from the Pussytoes to the Red Rose."
//     },
//     {
//         "id": 2,
//         "image" : "https://media.istockphoto.com/id/1357138714/photo/uncertain-african-american-female-with-dark-skin-shruggs-shoulders-and-asks-something-has.jpg?s=612x612&w=is&k=20&c=oyApiK7M3nEzDwlljJe3JARDpfDthHxWr5ue5RK867c=",
//         "heading" : "Who Let The Dogs Out?",
//         "text" : "Adan Ciprian, Alex Ciprian, and Jacob Dimmit ended up serving a 100 year sentence after letting the dogs out."
//     }
// ];

//     return data;

return handleRequest("GET", "/FCCLAInfo")
        .then((data) => {
            return data;
        })
}