import {getCategoryIcon, getCategoryText} from "../Types/ECategory";
import {Link} from "react-router-dom";
import * as React from "react";
import {Stack, Typography} from "@mui/material";
import {fadeInUp, subHeader, text} from "./MenuPage";

export const iconSize = {
    width: '100%',
    maxWidth: '120%',
    maxHeight: '20vh',
    minHeight: '15vh',
    minWidth: '90%',
    // height: '120%'
} as React.CSSProperties;

const MenuButton = ({category, style}: { category: string, style?: any }) => {
    return (
        <div style={{
            ...iconSize,
            ...style,
            ...fadeInUp(1)
        }}>
            <Link to={`/${category}`}>

                <img alt={'safe'} style={{...iconSize}} src={getCategoryIcon(category)}/>
            </Link>
            <p style={{
                fontFamily: "Suez One", marginTop: '0vh', width: '100%', color: '#929292',
                fontSize: '2vh',
                lineHeight: '1.25',
            }}>{getCategoryText(category)}</p>

        </div>

    );
};

export default MenuButton;