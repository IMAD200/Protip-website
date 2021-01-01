import React from "react"; 
import Top from "../../assests/icons/top.png";
import Discord from "../../assests/icons/discord.jpg";
import Github from "../../assests/icons/github.png";
import { SideLinksDivContainer, SideLink, SideLinksImg } from "./style";

const SideLinks = () => {
    const [data, setData] =  React.useState([
        { name: "Top.gg", image: `${Top}`, link: "" },
        { name: "Discord", image: `${Discord}`, link: "https://discord.gg/8CrxvdeqDS" },
        { name: "Github", image: `${Github}`, link: "https://github.com/IMAD200" }
    ]);

    return (
        <SideLinksDivContainer>
             {data.map((data, index) => (
                 <SideLink 
                    href={data.link} 
                    target="_blank" 
                    key={index}>
                    <SideLinksImg src={`${data.image}`} />
                 </SideLink>
               ))}
        </SideLinksDivContainer>
    )
};

export default SideLinks;