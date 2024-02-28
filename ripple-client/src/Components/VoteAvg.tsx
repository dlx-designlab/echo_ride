import * as React from 'react';
import {Slider, Stack, Typography} from "@mui/material";
import {center, subHeader, text} from "../Types/Styles";
import {getCategoryAnimation, getCategoryRange, getCategorySliderColor, getCategoryText} from "../Types/ECategory";
import Lottie from "lottie-react";

const VoteAvg = ({category, value}: {category: string, value: number }) => {
    return (
        <Stack>
            <Stack direction={"row"}
                   style={{...text, right: '0', left: '0', width: '100%', color: '#C9C9C9', whiteSpace: 'nowrap', height:'12vh'}}>
                <p style={{ marginRight: '3vh', marginLeft: '3vh',}}>{getCategoryRange(category)[1]}</p>
                <div style={{width: '100%'}}>
                    <Lottie  animationData={getCategoryAnimation(category) }
                             initialSegment={[value, value+1]} autoplay={false} loop={false}
                             style={{ position: 'relative', height:'7vh', width:'7vh', left:`${value}%`, right:`${100-value}%`, marginRight:'-3.5vh', zIndex:'1000' }}/>
                <Slider value={value} track={false} style={{width: '100%', top: '-3vh', zIndex:'900'}}
                        size={"small"}
                        sx={{
                            '& .MuiSlider-thumb': {color: getCategorySliderColor(category), display:'none'},
                            '& .MuiSlider-rail': {color: '#C9C9C9'},
                            '& .MuiSlider-active': {color: "#C9C9C9"},
                        }}
                />
                    <Typography sx={{color:'white',...subHeader,...center, marginTop:'-10vh', width:'100%', right:'0'}}>{getCategoryText(category)}</Typography>
                </div>
                <p style={{ marginRight: '3vh', marginLeft: '3vh', left: '0'}}>{getCategoryRange(category)[0]}</p>
            </Stack>
        </Stack>
    );
}

export default VoteAvg;