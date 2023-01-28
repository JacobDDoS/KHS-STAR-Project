import { handleRequest } from "../helpers/handleRequest";

export const getChapterActivities = () => {
    return handleRequest("GET", "/ChapterActivity")
    .then((data) => {
        return data;
    })
}