import * as React from 'react';
import {Slider, Typography, Grid} from "@mui/material";
import {center, subHeader, text} from "../Types/Styles";
import {
    getCategoryAnimation,
    getCategoryRange,
    getCategoryShortText,
    getCategorySliderColor,
} from "../Types/ECategory";
import Lottie from "lottie-react";

const VoteAvg = ({category, value}: {category: string, value: number }) => {
    return (
        <>
            <Grid item xs={3} style={{...text, right: '0', left: '0', width: '100%', color: '#ffffff', whiteSpace: 'nowrap', height:'14vh'}}>
            {/*<Stack direction={"row"}*/}
            {/*       style={{...text, right: '0', left: '0', width: '100%', color: '#ffffff', whiteSpace: 'nowrap', height:'14vh'}}>*/}
                <p style={{ textAlign: 'right'}}>{getCategoryRange(category)[1]}</p>
            </Grid>
    <Grid item xs={6} style={{ paddingLeft: '1vh', paddingRight:'1vh'}}>
        <div style={{width: '100%'}}>

    <Lottie  animationData={getCategoryAnimation(category) }
                             initialSegment={[value, value+1]} autoplay={false} loop={false}
                             style={{ position: 'relative', top:'-3vh', height:'6vh', width:'6vh', left:`${value}%`, right:`${100-value}%`, marginRight:'-3vh', zIndex:'1000' }}/>
                <Slider value={value} track={false} style={{width: '100%', top: '-5vh', zIndex:'900'}}
                        size={"small"}
                        sx={{
                            '& .MuiSlider-thumb': {color: '#ffffff', boxShadow: '0 0 0 4px #000'},
                            '& .MuiSlider-rail': {color: getCategorySliderColor(category), height: 6, opacity: 1},
                            // '& .MuiSlider-active': {color: "#C9C9C9"},
                        }}
                />
                    <Typography sx={{color:'white',...subHeader,...center, marginTop:'-12vh', width:'100%', right:'0', fontSize: '2vh',}}>{getCategoryShortText(category)}</Typography>
                </div>
   </Grid>
    <Grid item xs={3} style={{...text, right: '0', left: '0', width: '100%', color: '#ffffff', whiteSpace: 'nowrap', height:'14vh'}}>
                <p style={{textAlign:'left' }}>{getCategoryRange(category)[0]}</p>
    </Grid>
        </>
    );
}

export default VoteAvg;