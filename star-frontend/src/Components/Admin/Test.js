import React from 'react'

import serverURL from '../../data/serverURL';

const Test = () => {
    const requestsPossible = [
        //GET
        ["GET", "/homepage/pictureShowcase", "", "Get Picture Showcase"],
        ["GET", "/committee", "", "Get Committees"],
        ["GET", "/membershipInfo", "", "Get membership Info"],
        ["GET", "/milestone", "", "Get Milestones"],
        ["GET", "/recruitmentActivities", "", "Get Recruitment Activities"],
        ["GET", "/team", "", "Get Teams"],
        ["GET", "/awards", "", "Get Awards"],
        ["GET", "/chapterActivities", "", "Get Chapter Activities"],
        ["GET", "/contactInfo", "", "Get Contact Info"],
        ["GET", "/officers", "", "Get Officers"],
        ["GET", "/sources", "", "Get Sources"],
        ["GET", "/programOfWork", "", "Get Program Of Work"],
        ["GET", "/supporter", "", "Get Supporters"],
        ["GET", "/date", "", "Get Today's Date"],
        ["GET", "/fcclaInfo", "", "Get Info about FCCLA"],
    
        //POST
        ["POST", "/api/add/Homepage/PictureShowcase", {
            "urltoPictures": "a;sldfhapiweunfp;iawuenbrp;ioawouhrfpi;auwhr;kaiuewhk"
        }, "Add Picture Showcase"],
        ["POST", "/api/add/Committee", {
            "name": "name",
            "runTime": "runTime",
            "members": "members",
            "photoURL": "photo",
            "description": "desc",
            "accomplishments": "stuff"
        }, "Add Committee"],
        ["POST", "/api/add/MembershipInfo", {
            "cost": "a lot",
            "benefits": "a lot",
            "deadline": "2022-12-11T18:40:04.170+00:00"
        }, "Add Membership Info"],
        ["POST", "/api/add/Milestone", {
            "year": "2022",
            "numberOfMembers": "32",
            "numberOfCompetitiveEvents": "0",
            "yearlyAccomplishments": "A lot"
        }, "Add Milestone"],
        ["POST", "/api/add/RecruitmentActivity", {
            "title": "meow",
            "date": "2022-12-11T18:40:04.170+00:00",
            "description": "yes",
            "photoURL": "meowagain"
        }, "Add Recruitment Activity"],
        ["POST", "/api/add/Team", {
            "teamCaptains": "Me",
            "members": "Everybody",
            "score": "infinity"
        }, "Add Team"],
        ["POST", "/api/add/Award", {
            "membersOfAward": "Adan;Alex;Jacsdfob",
            "date": "2022-11-26T18:52:18.366+00:00",
            "awardName": "Best STAR Project",
            "pictureOfAwardURL": "https://cdn.mos.cms.futurecdn.net/LZUsfgcXH7WMeVvuHYsoSA-1200-80.png",
            "description": "These dudes were so awesome with their STAR project omg!"
        }, "Add Award"],
        ["POST", "/api/add/ChapterActivity", {
            "photoURL": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg",
            "startDate": "2022-11-26T19:14:01.090+00:00",
            "endDate": "2022-11-29T19:14:01.090+00:00",
            "nameOfActivity": "STAR Meetings",
            "description": "Everybody is a STAR!!! And we met up and did stuff"
        }, "Add Chapter Activity"],
        ["POST", "/api/add/ContactInfo", {
            "emailToContact": "adanalexjacob@gmail.com"
        }, "Add Contact Info"],
        ["POST", "/api/add/ChapterOfficers", {
            "officerName": "Adan",
            "officerPosition": "STAR Manager",
            "startTime": "2022-11-26T19:14:01.090+00:00",
            "endTime": "",
            "chapterResponsibilities": "Existing;Breathing;Having Fun",
            "chapterServiceOrCareerGoals": "Help Others;Teach others FCCLA",
            "email": "adan@gmail.com",
            "photoURL": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2018%2F05%2F12170411%2Fcat-kitten-138468381.jpg&q=60"
        }, "Add Officer"],
        ["POST", "/api/add/ProgramOfWork",{
            "linkToPDFOfChapterProgramOfWork": "https://www.catcare4life.org/app/uploads/2021/07/Kitten-booklet.pdf"
        } , "Add Program of Work"],
        ["POST", "/api/add/Source", {
            "source": "https://en.wikipedia.org/wiki/Family,_Career_and_Community_Leaders_of_America"
        }, "Add Source"],
        ["POST", "/api/add/Supporter", {
            "companyName": "Kitten Co.",
            "logoURL": "https://c8.alamy.com/comp/2BXKAMG/cute-cartoon-cat-logo-sleeping-curled-in-circle-adorable-kitty-symbol-isolated-vector-clip-art-illustration-2BXKAMG.jpg",
            "link": "https://www.petsmart.com/adoption/people-saving-pets/ca-adoption-landing.html",
            "description": "Get a kitten here!!!!"
        }, "Add Supporter"],
        ["POST", "/api/add/FCCLAInfo", {
            "dosAndDonts": "do stuff",
            "nationalPrograms": "prgramming",
            "careerPathways": "car",
            "creed": "cree",
            "motto": "mot",
            "tagLine": "tag",
            "nationalTheme": "nbat",
            "stateTheme": "sta",
            "chapterTheme": "cah",
            "flower": "bird",
            "colorsAndDefinitions": "red: red",
            "websiteLinks": "https://whatever.com/"
        }, "Add FCCLA Info"],
    
        //PUT
        ["PUT", "/api/update/Homepage/PictureShowcase/7", {
            "urltoPictures": "Meow"
        }, "Update Picture Showcase"],
        ["PUT", "/api/update/Committee/1", {
            "name": "newrerwame",
            "runTime": "runwerwerTime",
            "members": "membwerwerers",
            "photoURL": "phowerweerto",
            "description": "dewerwerwesc",
            "accomplishments": "stwerruff"
        } , "Update Committee"],
        ["PUT", "/api/update/MembershipInfo/1", {
            "cost": "a loasdft",
            "benefits": "a asdflot",
            "deadline": "2022-12-11T18:40:04.170+00:00"
        }, "Update Membership Info"],
        ["PUT", "/api/update/Milestone/1", {
            "year": "2023422",
            "numberOfMembers": "32342",
            "numberOfCompetitiveEvents": "2340",
            "yearlyAccomplishments": "A 234lot"
        }, "Update Milestone"],
        ["PUT", "/api/update/RecruitmentActivity/1", {
            "title": "masdfasdeow",
            "date": "2022-12-11T18:40:04.170+00:00",
            "description": "yeasdfass",
            "photoURL": "meowaasdfasgain"
        }, "Update Recruitment Activity"],
        ["PUT", "/api/update/Team/1", {
            "teamCaptains": "asdfasdfMe",
            "members": "Everasdfasfdybody",
            "score": "infiasdfnity"
        }, "Update Team"],
        ["PUT", "/api/update/Award/1", {
            "membersOfAward": "Adan;Jacob",
            "date": "2022-11-26T18:52:18.366+00:00",
            "awardName": "Absolutely nothing",
            "pictureOfAwardURL": "https://cdn.mos.cms.futurecdn.net/LZUsfgcXH7WMeVvuHYsoSA-1200-80.png",
            "description": "These dudes were so awesome with their STAR project omg!"
        }, "Update Award"],
        ["PUT", "/api/update/Source/2", {
            "source": "Updated Source!"
        }, "Update Source"],
        ["PUT", "/api/update/ChapterActivity/1", {
            "photoURL": "updated URL",
            "nameOfActivity": "Updated STAR Meetings",
            "description": "Updated: Everybody is a STAR!!! And we met up and did stuff"
        }, "Update Chapter Activity"],
        ["PUT", "/api/update/Officer/1",{
            "officerName": "Jacob",
            "officerPosition": "STAR Developer",
            "startTime": "2022-11-23T19:14:01.090+00:00",
            "endTime": "",
            "chapterResponsibilities": "Coding",
            "chapterServiceOrCareerGoals": "Help Others;Teach others FCCLA",
            "email": "jacob@gmail.com",
            "photoURL": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2018%2F05%2F12170411%2Fcat-kitten-138468381.jpg&q=60"
        } , "Update Officer"],
        ["PUT", "/api/update/ContactInfo/1",{
            "emailToContact": "jacob@gmail.com"
        } , "Update Contact Info"],
        ["PUT", "/api/update/FCCLAInfo/1", {
            "dosAndDonts": "do stasdfuff",
            "nationalPrograms": "pasdfrgramming",
            "careerPathways": "casdfar",
            "creed": "crasdfee",
            "motto": "masdfot",
            "tagLine": "tasdfg",
            "nationalTheme": "nbasdfat",
            "stateTheme": "sasdta",
            "chapterTheme": "asdfah",
            "flower": "biasdfrd",
            "colorsAndDefinitions": "reasdfasdfd: red",
            "websiteLinks": "https://asdfasdfdaswhatever.com/"
        }, "Update FCCLA Info"],
        ["PUT", "/api/update/ProgramOfWork/8", {
            "linkToPDFOfChapterProgramOfWork": "https://wasdff"
        }, "Update Program of Work"],
        ["PUT", "/api/update/Supporter/8", {
            "companyName": "Kitten Company.",
            "logoURL": "https://c8.alamy.com/comp/2BXKAMG/cute-cartoon-cat-logo-sleeping-curled-in-circle-adorable-kitty-symbol-isolated-vector-clip-art-illustration-2BXKAMG.jpg",
            "link": "https://www.petsmart.com/adoption/people-saving-pets/ca-adoption-landing.html",
            "description": "Get a kitten here!!!!"
        }, "Update Supporter"],
        
        //DELETE
        ["DELETE", "/api/delete/PictureShowcase/6", "", "Delete Picture Showcase"],
        ["DELETE", "/api/delete/Committee/3", "", "Delete Committee"],
        ["DELETE", "/api/delete/MembershipInfo/2", "", "Delete Membership Info"],
        ["DELETE", "/api/delete/Milestone/2", "", "Delete Milestone"],
        ["DELETE", "/api/delete/RecruitmentActivity/2", "", "Delete Recruitment Activity"],
        ["DELETE", "/api/delete/Team/2", "", "Delete Team"],
        ["DELETE", "/api/delete/Source/10", "", "Delete Source"],
        ["DELETE", "/api/delete/ChapterActivity/7", "", "Delete Chapter Activity"],
        ["DELETE", "/api/delete/Officer/8", "", "Delete Officer"],
        ["DELETE", "/api/delete/ContactInfo/7", "", "Delete Contact Info"],
        ["DELETE", "/api/delete/FCCLAInfo/3", "", "Delete FCCLA Info"],
        ["DELETE", "/api/delete/ProgramOfWork/9", "", "Delete Program of Work"],
        ["DELETE", "/api/delete/Supporter/10", "", "Delete Supporter"],
        ["DELETE", "/api/delete/Award/60", "", "Delete Award"],
    
    
      ];




      const handleRequest = async (method, path, payload = "") => {
        const opts = {  method: method, 
                        'credentials': 'include',
                        headers: new Headers({
                            'Accept': 'application/json',
                            'Access-Control-Allow-Origin':'http://localhost:3000/',
                            'Content-Type': 'application/json',
                        }),
                     }
    
        if (payload !== "") {
            opts.body = JSON.stringify(payload);
        }
    
        fetch(`${serverURL}${path}`, opts)
        .then(res => res.json())
        .then(data => console.log(data));
      }

  return (
    <div>
            {
                requestsPossible.map((request)=>{
                    return <div>
                        <button onClick={()=>handleRequest(request[0], request[1], request[2])}>
                            {request[3]}
                        </button>
                    </div>
                })
            }
        </div>
  )
}

export default Test