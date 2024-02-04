import * as React from 'react';
import {url} from "../Types/Consts";
import {useEffect, useState} from "react";
import {voteProps} from "./VotePage";
import {ECategory} from "../Types/ECategory";
import VoteAvg from "./VoteAvg";
import {Stack, Typography} from "@mui/material";
import {center, fadeIn, pageHeader, resultsHeader, subHeader} from "../Types/Styles";

const ResultsAvgPage = () => {
    const [table, setTable] = useState<voteProps[]>([]);
    const [data, setData] = useState({});
    let votes = {};

    useEffect(() => {
        ECategory.map((category) => {
            updateTable(category).then();
        })
        // updateTable('ride,driver,air').then();
    }, []);

    const updateTable = async (category: string) => {
        // const response = await fetch(url + `all?category=${category}`);
        const response = await fetch(url + `avg?category=${category}`);
        const jsonData = await response.json();

        votes = {...votes, [category]:Math.round(jsonData)};
        setData(votes);
        setTable(jsonData);
    };

    return (<Stack style={{ position:'absolute', right:'0', left: '0', top:'0', width: '100%', height:'100%', ...fadeIn(0.5), background:'black'}}>
        {/*{table.map((t) => {*/}
        {/*    return <p key={t.id+t.vote}>{t.id + ':' + t.vote}</p>*/}
        {/*})}*/}
        <Typography style={subHeader}>
            חווית הנסיעה, קו 5
        </Typography>
        <Typography style={resultsHeader}>
            יום א', 3.2, 10:23
        </Typography>
        <div style={{position:'relative', top:'5vh'}}>
        {Object.entries(data).map(([key, value]) => {
            return <VoteAvg value={value as number} category={key}/>
        })}
        </div>
    </Stack>);
}

export default ResultsAvgPage;