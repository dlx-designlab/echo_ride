import * as React from 'react';
import {Stack, Typography} from "@mui/material";
import MenuIcons from "./MenuIcons";
import {fadeIn, pageHeader, subHeader} from "../Types/Styles";
import {translation} from "../Translation/Language";

const MenuPage = () => {

    return (
        <Stack><div style={{...fadeIn(0.5), width: '70%'}}>
            <Typography style={pageHeader}>  {translation.mainPage.title}
            </Typography>
            <Typography style={subHeader}>
                {translation.mainPage.subtitle}
            </Typography></div>

            <MenuIcons />
        </Stack>
    );
}

export default MenuPage