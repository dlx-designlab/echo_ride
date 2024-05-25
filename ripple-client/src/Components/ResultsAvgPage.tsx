import * as React from 'react';
import {url} from "../Types/Consts";
import {useEffect, useState} from "react";
import {ECategory} from "../Types/ECategory";
import VoteAvg from "./VoteAvg";
import {Stack, Typography} from "@mui/material";
import {center, fadeIn, resultsHeader, subHeader} from "../Types/Styles";

const ResultsAvgPage = () => {
    const [data, setData] = useState({});
    const [date, setDate] = useState('');
    const [busNumber, setBusNumber] = useState(5);
    let votes = {};

    useEffect(() => {
        ECategory.map((category) => {
            updateTable(category).then();
        })

        const currentDate = new Date();

        const daysOfWeek = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'];

        const dayOfWeek = daysOfWeek[currentDate.getDay()];
        const date = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const hour = currentDate.getHours();
        const minutes = currentDate.getMinutes();

        const minsDiff = 42;
        const prevMin = minutes >= minsDiff ? minutes - minsDiff : 60 + (minutes - minsDiff);
        const prevHour = minutes >= minsDiff ? hour : hour - 1;

        const formattedDate = ` יום ${dayOfWeek}', ${date}.${month}, ${hour}:${minutes < 10 ? '0' : ''}${minutes} - ${prevHour}:${prevMin < 10 ? '0' : ''}${prevMin}`;

        setDate(formattedDate);
    }, []);

    const updateTable = async (category: string) => {
        const response = await fetch(url + `avg?category=${category}`);
        const jsonData = await response.json();

        votes = {...votes, [category]:Math.round(jsonData)};
        setData(votes);
    };

    return (
        <Stack style={{ position:'absolute', right:'0', left: '0', top:'0', width: '100%', height:'100%', ...fadeIn(0.5), background:'black'}}>
        <Typography style={{...subHeader,...center, marginTop:'0', width:'', right:''}}>
            סיכום שיתופי חווית הנסיעה, קו {busNumber}
        </Typography>
        <Typography style={{...resultsHeader,...center, marginTop: '1vh'}}>
            {date}
        </Typography>
        <div style={{position:'relative', top:'10vh'}}>
        {Object.entries(data).map(([key, value]) => {
            return <VoteAvg value={value as number} category={key} key={key}/>
        })}
        </div>
    </Stack>);
}

export default ResultsAvgPage;