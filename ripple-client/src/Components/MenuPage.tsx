import * as React from 'react';
import {Button, Slider, Stack, Typography} from "@mui/material";
import {ECategory} from "../Types/ECategory";
import {useState} from "react";
import {Link} from "react-router-dom";
import MenuIcons from "./MenuIcons";

export const text = {
    fontFamily: "Suez One",
    textAlign: 'right',
} as React.CSSProperties;

const rightPosition = {
    direction: 'rtl',
    position: 'relative',
    width: '70%',
    top: '5vh',
    right: '5vh',
    // objectFit: 'cover'
    ...text
} as React.CSSProperties;
export const pageHeader = {
    color: '#393938',
    fontSize: '6vh',
    lineHeight: '1',
    zIndex: 10,
    ...rightPosition
} as React.CSSProperties;
export const subHeader = {
    color: '#929292',
    fontSize: '2.2vh',
    lineHeight: '1.25',
    marginTop: '3vh',
    zIndex: 9,
    ...rightPosition
} as React.CSSProperties;

export const fadeIn = (duration: any) => {
    return {
        animation: `fadeIn ${duration}s ease-in-out`
    } as React.CSSProperties;
};
export const fadeInUp = (duration: any) => {
    return {
        animation: `fadeInUp ${duration}s ease-in-out`
    } as React.CSSProperties;
};


export const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
} as React.CSSProperties;

const MenuPage = () => {

    return (
        <Stack><div style={fadeIn(0.5)}>
            <Typography style={pageHeader}>איך מרגישה חווית
                הנסיעה?
            </Typography>
            <Typography style={subHeader}>
                בחרו את הקטגוריה ושתפו את חווית הנסיעה שלכם. בעזרת הדיווח שלכם נוכל לשפר את השירות
            </Typography></div>

            <MenuIcons />
            <>
                {/*{ECategory.map((category) => {*/}
                {/*    return <Link to={`/${category}`} key={category}>{category}</Link>*/}
                {/*})}*/}
                {/*<Link to="/clean">Clean</Link>*/}
                {/*<Link to="/driver">Driver</Link>*/}
            </>
        </Stack>
    );
}

export default MenuPage