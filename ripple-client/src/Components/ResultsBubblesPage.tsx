import * as React from 'react';
import {url} from "../Types/Consts";
import {useEffect, useState} from "react";
import {ECategory, getCategoryCenter, getCategoryIcon, getCategorySliderColor} from "../Types/ECategory";
import {Stack, Typography} from "@mui/material";
import {center, resultsHeader, subHeader} from "../Types/Styles";
import OldBubbles from "./OldBubbles";

export interface IBubble {
    x: number;
    y: number;
    radius: number;
    color: string;
    name: string;
    image: string;
}

const generateKey = () => {
    return (Date.now() + Math.random() * 10).toString();
}

const gradientStyle = {
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))', // Replace with your desired gradient colors
    height: '30%',
};

const ResultsBubblesPage = () => {
    const [bubblesList, setBubblesList] = useState<Array<IBubble>>();
    let votesList: Array<IBubble> = [];

    useEffect(()=> {
        const eventSource = new EventSource(url + 'sse');

        eventSource.onmessage = (event) => {
            const data = JSON.parse(event.data);
            const newBubble = getNewBubble(data);
            if(!newBubble) return;
            let bubbleToUpdate = votesList.find((b)=>b.name = data.category + data.id);
            console.log(bubbleToUpdate);
            if(bubbleToUpdate) bubbleToUpdate.radius = (data.vote - 50) / 50;
            else votesList = [...votesList, newBubble];
            setBubblesList(votesList);

        };
    },[]);


    useEffect(() => {
        // votes = [];
        ECategory.map((category) => {
            updateData(category).then(()=> {
                setBubblesList(votesList);
            });
        })
    }, []);

    useEffect(() => {

        const yourFunction = () => {

            const key = generateKey();
            const emptyBubble = {
                name: key,
                radius: 0,
                color: '#343434',
                force: 0.1,

                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                image: ''
            }

            votesList = [...votesList, emptyBubble];
            setBubblesList(votesList);



        };

        const intervalId = setInterval(yourFunction, 5000); // 10000 milliseconds = 10 seconds

        return () => {clearInterval(intervalId);}
    }, []); //

    const getNewBubble = (bubble:{category: string, vote: number, id:string}) => {
        if(!(bubble.category && bubble.vote >= 0)) return;
        const [x,y] = getCategoryCenter(bubble.category);
        return {
            name: bubble.category + bubble.id, //generateKey(),
            radius: (bubble.vote - 50) / 50,
            color: getCategorySliderColor(bubble.category),
            force: 1,
            x: x * window.innerWidth + Math.random() * 50,
            y: y * window.innerHeight + Math.random() * 50,
            image: getCategoryIcon(bubble.category, bubble.vote >= 50)
        }
    }
    const updateData = async (category: string) => {
        const response = await fetch(url + `all?category=${category}`);
        const jsonData = await response.json();
        const newBubbles = jsonData.map((bubble: { vote: number, category: string, id: string })=>{
            return getNewBubble(bubble);
        })

        votesList = [...votesList, ...newBubbles];
    };

    return (
        <div>
        <OldBubbles data={bubblesList}/>

        <Stack style={{ position:'absolute', right:'0', left: '0', top:'0', width: '100%', ...gradientStyle}}>

        <Typography style={{...resultsHeader,...center, width:'100%', right:'0'}}>
            חווית הנסיעה, קו 5
        </Typography>
            <Typography style={{...subHeader,...center, marginTop:'0',width:'100%', right:'0'}}>
                ○ שלילי  &nbsp; &nbsp;   ● חיובי
            </Typography>
    </Stack>
        </div>
    );
}

export default ResultsBubblesPage;