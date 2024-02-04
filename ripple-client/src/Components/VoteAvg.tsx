import * as React from 'react';
import {Slider, Stack} from "@mui/material";
import {center, down, fadeIn, text} from "../Types/Styles";
import {getCategoryAnimation, getCategoryRange} from "../Types/ECategory";
import Lottie from "lottie-react";

const VoteAvg = ({category, value}: {category: string, value: number }) => {

    console.log(value);

    return (
            <Stack direction={"row"}
                   style={{...text, right: '0', left: '0', width: '100%', color: '#C9C9C9', whiteSpace: 'nowrap'}}>
                <p style={{ marginRight: '3vh', marginLeft: '3vh', ...down}}>{getCategoryRange(category)[1]}</p>
                <Stack style={{width: '100%'}}>
                    <Lottie  animationData={getCategoryAnimation(category) }
                             initialSegment={[value, value+1]} autoplay={false} loop={false}
                             style={{ position: 'relative', height:'7vh', width:'7vh', left:`${value}%`, right:`${100-value}%`, marginRight:'-3.5vh' }}/>
                <Slider value={value} track={false} style={{width: '100%', bottom: '0'}}
                        sx={{
                            '& .MuiSlider-thumb': {color: "#C9C9C9"},
                            // '& .MuiSlider-track': {color: "#C9C9C9"},
                            '& .MuiSlider-rail': {color: '#C9C9C9'},
                            '& .MuiSlider-active': {color: "#C9C9C9"}
                        }}/>
                </Stack>
                <p style={{ marginRight: '3vh', marginLeft: '3vh', left: '0', ...down}}>{getCategoryRange(category)[0]}</p>
            </Stack>
    );
}

export default VoteAvg;