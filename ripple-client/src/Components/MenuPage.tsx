import * as React from 'react';
import {Stack, Typography} from "@mui/material";
import MenuIcons from "./MenuIcons";
import {fadeIn, pageHeader, subHeader} from "../Types/Styles";

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
        </Stack>
    );
}

export default MenuPage