import * as React from 'react';
import {Button, IconButton, Slider, Stack, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {useEffect, useRef, useState} from "react";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import {getCategoryAnimation, getCategoryRange, getCategoryText} from "../Types/ECategory";
import {ArrowForward} from "@mui/icons-material";
import {center, fadeIn, fadeInUp, pageHeader, text} from "../Types/Styles";
import {url} from "../Types/Consts";

export interface voteProps {
    id: string;
    vote?: number;
    last_updated?: string;
}

// const url = 'http://192.168.0.111:3001/';
// const url = getLocalIp();
const VotePage = ({category}: { category: string}) => {
    const [value, setValue] = React.useState(50);
    const [frames, setFrames] = useState<[number, number]>([0, 1]);


    const lottieRef = useRef<LottieRefCurrentProps>(null);

    const navigate = useNavigate();
    useEffect(() => {
        lottieRef.current?.setSpeed(5);
        lottieRef.current?.playSegments([[0,100],[99,50]])
    }, []);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
        setFrames([value, value + 1]);
    };
    const handleReturn = () => {
        navigate('/');
    }
    const handleSubmit = () => {
        const fetchData = async () => {
            try {
                await createTable();
                await vote();
                navigate('/finish');
            } catch (error) {
                console.log('Could not vote: ' + error);
            }
        };
        fetchData();
        navigate('/finish');
    };

    const createTable = async () => {
        await fetch(url + 'new', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                "category": category
            })
        });
    };

    const vote = async () => {
        await fetch(url + 'vote', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                category: category,
                vote: value
            })
        });
    };

    return (
        <div>
            <Stack style={{width: '100%', position:'absolute', top:'0', right:'0', left:'0', ...fadeIn(0.5)}}>
                <IconButton aria-label="delete" size="large" onClick={handleReturn} sx={{color: "#C9C9C9"}}
                            style={{position: 'absolute', right: '0'}}>
                    <ArrowForward fontSize="inherit"/>
                </IconButton>

                <Typography style={{
                    ...pageHeader,
                    position: 'relative',
                    marginTop: '5vh'
                }}>{getCategoryText(category)}</Typography>

                <Stack direction={"row"}
                       style={{...text, ...center, width: '80vh%', margin: '2vh', marginTop: '10vh', color: '#C9C9C9', whiteSpace: 'nowrap'}}>
                    {getCategoryRange(category)[1]}
                    <Slider value={value} onChange={handleChange} track={false} style={{marginRight: '3vh', marginLeft: '3vh', zIndex:'999999'}}
                            sx={{
                                '& .MuiSlider-thumb': {color: "#C9C9C9"},
                                '& .MuiSlider-rail': {color: '#C9C9C9'},
                                '& .MuiSlider-active': {color: "#C9C9C9"}
                            }}/>
                    {getCategoryRange(category)[0]}
                </Stack>

            </Stack>
            <div style={{position: 'absolute', bottom: '0', right:'0', left: '0', ...fadeInUp(1)}}>
              <Lottie lottieRef={lottieRef} animationData={getCategoryAnimation(category) }
                                                         initialSegment={frames} autoplay={false} loop={false}
              style={{position:'absolute',bottom: '0', width:'100%', height:'70vh'}}/>
                <Button onClick={handleSubmit} variant="contained"
                        sx={{borderRadius: 28, width: '70%', ...text, bottom:'10vh'}}>שתף</Button>
            </div>
        </div>
    );

}

export default VotePage