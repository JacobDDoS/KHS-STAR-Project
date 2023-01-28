import { handleRequest } from "../helpers/handleRequest"

export const getAwards = async () => {
//   const data = [
//     {
//         "id": 1,
//         "membersOfAward": "Adan,Jacob,Alex",
//         "date": "2022-11-20T20:59:34.000+00:00",
//         "awardName": "Amazing STAR Project!",
//         "pictureOfAwardURL": "https://static.wixstatic.com/media/27e2eb_3f11e0880cae4c6898b6866f086080a5~mv2_d_4032_3024_s_4_2.jpg/v1/crop/x_0,y_162,w_4032,h_2861/fill/w_620,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27e2eb_3f11e0880cae4c6898b6866f086080a5~mv2_d_4032_3024_s_4_2.jpg",
//         "description": "Adan, Jacob, & Alex came together to build an amazing STAR Project!"
//     },
//     {
//         "id": 2,
//         "membersOfAward": "Adan,Jacob,Alex",
//         "date": "2022-11-20T21:00:16.000+00:00",
//         "awardName": "Amazing STAR Project!",
//         "pictureOfAwardURL": "https://static.wixstatic.com/media/27e2eb_c52f5f6666a3481794622b0ce91431c8~mv2_d_3024_4032_s_4_2.jpg/v1/crop/x_0,y_352,w_3023,h_2133/fill/w_620,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27e2eb_c52f5f6666a3481794622b0ce91431c8~mv2_d_3024_4032_s_4_2.jpg",
//         "description": "Adan, Jacob, & Alex came together to build an amazing STAR Project!"
//     },
//     {
//         "id": 3,
//         "membersOfAward": "Adan,Jacob,Alex",
//         "date": "2022-11-20T21:00:23.000+00:00",
//         "awardName": "Amazing STAR Project!",
//         "pictureOfAwardURL": "https://static.wixstatic.com/media/27e2eb_506bbc5eca4b43e3a12103bad48b1844~mv2_d_3264_2448_s_4_2.jpg/v1/crop/x_0,y_131,w_3264,h_2316/fill/w_620,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/27e2eb_506bbc5eca4b43e3a12103bad48b1844~mv2_d_3264_2448_s_4_2.jpg",
//         "description": "Adan, Jacob, & Alex came together to build an amazing STAR Project!"
//     }
// ];

//     return data;


// handleRequest("GET", `/${component}`)
// .then((data)=> {
//     if (!Array.isArray(data)) {
//         setData([data])
//     } else {
//         setData(data);
//     }
// })

    return handleRequest("GET", "/Award")
        .then((data) => {
            return data;
        })

}
