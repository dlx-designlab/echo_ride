import * as React from 'react';
import {Grid, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import {ECategory, getCategoryAnimation, getCategoryIcon, getCategoryText} from "../Types/ECategory";
import {Link} from "react-router-dom";
import {center} from "./MenuPage";
import MenuButton, {iconSize} from "./MenuButton";

const imageStyle = {
    width: '50%',
    position: 'absolute',
    // height: '30vh'
} as React.CSSProperties;

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
                <MenuButton category={'safe'} style={{marginTop: '10vh', marginRight: '-4vh'}}/>
            </Grid>
            <Grid item xs={4}>
                <MenuButton category={'ride'} style={{marginRight: '-5vh', marginLeft: '5vh', marginTop: '-5vh'}}/>
            </Grid>
        </Grid>
        // <ImageList variant="masonry" cols={3} gap={8}>
        //     {ECategory.map((item) => (
        //         <ImageListItem key={getCategoryIcon(item)}>
        //             <img style={iconSize}
        //                 srcSet={`${getCategoryIcon(item)}?w=248&fit=resize&auto=format&dpr=2 2x`}
        //                 src={`${getCategoryIcon(item)}?w=248&fit=resize&auto=format`}
        //                 alt={getCategoryIcon(item)}
        //                 loading="lazy"
        //             />
        //             <ImageListItemBar position="below" title={getCategoryText(item)} />
        //         </ImageListItem>
        //     ))}
        // </ImageList>
    );
};
export default MenuIcons;