import React from "react"

import TeamMember from "."
import photo from "../../images/about-team/Addie-Socias_ColorL.jpg";

export default {
    title: "Components/TeamMember",
    component: TeamMember,
}
// const TeamMemberData = {photoBW, photoColor, name}
// const MemberDetails = {photoColorL, firstName, department, education, previousWork}
export const TeamImg = () => <TeamMember photo={photo} />