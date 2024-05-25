import * as React from 'react';
import {Slider, Stack, Typography} from "@mui/material";
import {center, subHeader, text} from "../Types/Styles";
import {getCategoryAnimation, getCategoryRange, getCategorySliderColor, getCategoryText} from "../Types/ECategory";
import Lottie from "lottie-react";

const VoteAvg = ({category, value}: {category: string, value: number }) => {
    return (
        <Stack>
            <Stack direction={"row"}
                   style={{...text, right: '0', left: '0', width: '100%', color: '#ffffff', whiteSpace: 'nowrap', height:'12vh'}}>
                <p style={{ width:'15vh', marginRight: '3vh', marginLeft: '3vh'}}>{getCategoryRange(category)[1]}</p>
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
                    <Typography sx={{color:'white',...subHeader,...center, marginTop:'-12vh', width:'100%', right:'0', fontSize: '2vh',}}>{getCategoryText(category)}</Typography>
                </div>
                <p style={{textAlign:'left', width:'15vh', marginRight: '3vh', marginLeft: '3vh', left: '0' }}>{getCategoryRange(category)[0]}</p>
            </Stack>
        </Stack>
    );
}

export default VoteAvg;