import * as React from 'react';
import {Button, Icon, IconButton, Slider, Stack, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {useEffect, useRef, useState} from "react";
import Lottie, {LottieRefCurrentProps} from "lottie-react";
import {getCategoryAnimation, getCategoryRange, getCategoryText} from "../Types/ECategory";
import {center, fadeIn, fadeInUp, pageHeader, subHeader, text} from "./MenuPage";
import {ArrowForward} from "@mui/icons-material";

interface voteProps {
    id: string;
    vote?: number;
    last_updated?: string;
}

// const url = 'http://192.168.0.111:3001/';
// const url = getLocalIp();
const VotePage = ({category, ip}: { category: string, ip: string}) => {
    const [value, setValue] = React.useState(50);
    const [table, setTable] = useState<voteProps[]>([]);
    const [message, setMessage] = useState('');
    const [frames, setFrames] = useState<[number, number]>([0, 1]);


    const lottieRef = useRef<LottieRefCurrentProps>(null);

    const url = 'http://' + ip + ':3001/';
    const navigate = useNavigate();
    useEffect(() => {
        updateTable().then();
        lottieRef.current?.setSpeed(3);
        lottieRef.current?.playSegments([[0,100],[99,50]])
    }, []);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
        const framesNum = lottieRef.current?.getDuration(true);
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
                await updateTable();
                setMessage('Voted succeeded: ' + value);
                handleReturn();
            } catch (error) {
                setMessage('Could not vote: ' + error);
            }
        };
        fetchData();
    };

    const updateTable = async () => {
        const response = await fetch(url + `all?category=${category}`);
        const jsonData = await response.json();
        setTable(jsonData);
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
                id: "2",
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
                       style={{...text, ...center, width: '80vh%', margin: '2vh', marginTop: '10vh', color: '#C9C9C9'}}>
                    {getCategoryRange(category)[1]}
                    <Slider value={value} onChange={handleChange} track={false} style={{marginRight: '3vh', marginLeft: '3vh'}}
                            sx={{
                                '& .MuiSlider-thumb': {color: "#C9C9C9"},
                                // '& .MuiSlider-track': {color: "#C9C9C9"},
                                '& .MuiSlider-rail': {color: '#C9C9C9'},
                                '& .MuiSlider-active': {color: "#C9C9C9"}
                            }}/>
                    {getCategoryRange(category)[0]}
                </Stack>

            </Stack>
            <div style={{position: 'absolute', bottom: '10vh', right:'0', left: '0', maxWidth: '100%', maxHeight: '50vh', ...fadeInUp(1)}}>
              <Lottie lottieRef={lottieRef} animationData={getCategoryAnimation(category) }
                                                         initialSegment={frames} autoplay={false} loop={false}
              style={{position:'absolute',bottom: '0', maxHeight:'50vh'}}/>
                <Button onClick={handleSubmit} variant="contained"
                        sx={{borderRadius: 28, width: '70%', ...text}}>שתף</Button>
            </div>
            {/*<p>{message}</p>*/}
            {/*{table.map((t) => {*/}
            {/*    return <p key={t.id}>{t.id + ':' + t.vote}</p>*/}
            {/*})}*/}
        </div>
    );

}

export default VotePage