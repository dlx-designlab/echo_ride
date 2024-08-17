import * as React from 'react';
import {Grid} from "@mui/material";
import MenuButton from "./MenuButton";

const MenuIcons = () => {
    return (
        <Grid container spacing={1} style={{width: '100%', height:'90%', position:'relative', right: '0', left:'0', top: '7vh', bottom: '10vh' }}>
            <Grid item xs={4}>
                <MenuButton category={'crowded'}/>
            </Grid>
            <Grid item xs={4}>
                <MenuButton style={{marginTop: '10vh'}} category={'clean'} />
            </Grid>
            <Grid item xs={4}>
                <MenuButton category={'air'}/>
            </Grid>
            <Grid item xs={4}>
                <MenuButton category={'driver'} style={{marginTop: '-5vh', marginRight: '1vh'}}/>
            </Grid>
            <Grid item xs={4}>
                <MenuButton category={'safe'} style={{marginTop: '10vh', marginRight: '-3vh'}}/>
            </Grid>
            <Grid item xs={4}>
                <MenuButton category={'ride'} style={{marginRight: '-3vh', marginLeft: '4vh', marginTop: '-5vh'}}/>
            </Grid>
        </Grid>
    );
};
export default MenuIcons;