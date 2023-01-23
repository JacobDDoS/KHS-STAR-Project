export function componentNameToIndex(componentName) {
    const possibleComponents = [
        "PictureShowcase",
        "Committee",
        "MembershipInfo",
        "Milestone",
        "RecruitmentActivity",
        "Team",
        "Award",
        "ChapterActivity",
        "ContactInfo",
        "Officer",
        "ProgramOfWork",
        "Source",
        "Supporter",
        "FCCLAInfo"
    ]

    return possibleComponents.indexOf(componentName);
}