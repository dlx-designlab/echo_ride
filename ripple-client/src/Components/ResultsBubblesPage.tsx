import * as React from 'react';
import {url} from "../Types/Consts";
import {useEffect, useState} from "react";
import {ECategory, getCategoryCenter, getCategoryIcon, getCategorySliderColor} from "../Types/ECategory";
import {Slider, Stack, Typography} from "@mui/material";
import {center, resultsHeader, subHeader, text} from "../Types/Styles";
import OldBubbles from "./OldBubbles";
import logosMap from '../icons/logosMap.png';
import share from '../icons/share.png';

export interface IBubble {
    x: number;
    y: number;
    radius: number;
    color: string;
    name: string;
    image: string;
}

const bubblesSubFontSize = {
    fontSize: '1.7vh'
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
    const [date, setDate] = useState('');
    const [sharePosition, setSharePosition] = useState([0,0]);
    const [isNewShare, setIsNewShare] = useState(false);

    useEffect(() => {
        const currentDate = new Date();

        const daysOfWeek = ['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ש'];

        const dayOfWeek = daysOfWeek[currentDate.getDay()];
        const date = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const hour = currentDate.getHours();
        const minutes = currentDate.getMinutes();

        const formattedDate = ` יום ${dayOfWeek}' ${date}.${month} ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;

        setDate(formattedDate);
    }, []);

    useEffect(()=> {
        const eventSource = new EventSource(url + 'sse');

        eventSource.onmessage = (event) => {
            setIsNewShare(false);
            const data = JSON.parse(event.data);
            const newBubble = getNewBubble(data);
            if(!newBubble) return;
            let bubbleToUpdate = votesList.find((b)=>b.name == data.category + data.id);
            if(bubbleToUpdate) {
                bubbleToUpdate.radius = (data.vote - 50) / 50;
                setBubblesList([...votesList, bubbleToUpdate]);
            }
            else {
                votesList = [...votesList, newBubble];
                setBubblesList(votesList);
                setSharePosition([newBubble.x, newBubble.y])
                setTimeout(() => {
                    setIsNewShare(true);
                }, 1000);
            }
        };
    },[]);


    useEffect(() => {

        const addEmptyBubble = () => {

            const key = generateKey();
            const emptyBubble = {
                name: key,
                radius: 0,
                color: '#343434',
                force: 0.1,
                // x: 100,
                // y:100,
                // x: Math.random() * window.innerWidth,
                // y: Math.random() * window.innerHeight,
                // x: Math.random() * window.innerWidth,
                x: window.innerWidth / 2  +  (Math.random() * 2 - 1) * window.innerWidth / 4, //+  (Math.random() * 2 - 1) * 10,
                y: window.innerHeight / 2  +  (Math.random() * 2 - 1) * window.innerWidth / 4,// + Math.random() * 10,

                // x: Math.random()*window.innerWidth,
                // y: Math.random()*window.innerHeight,
                image: ''
            }

            votesList = [...votesList, emptyBubble];
            setBubblesList(votesList);
        };

        for(let i = 0; i < 15; i++){
            addEmptyBubble();
        }
        const intervalId = setInterval(addEmptyBubble, 10000);

        setTimeout(()=> {
            console.log("This function is executed after 5 seconds.");

        ECategory.map((category) => {
            updateData(category).then(()=> {
                setBubblesList(votesList);
            });
        })
        }, 500);
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
            x: window.innerWidth / 2 + x * window.innerWidth / 4 + Math.random() * 5,
            y: window.innerHeight / 2 + y * window.innerWidth / 4 + Math.random() * 5,
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
            <img src={share} className={isNewShare ? 'animated-image' : ''} style={{position: 'absolute', top:`${sharePosition[1]}px`, left: `${sharePosition[0]}px`, width: '15vh', opacity: '0', marginLeft:'-7.5vh', marginTop:'-5vh'}}/>

        <Stack style={{ position:'absolute', right:'0', left: '0', top:'0', width: '100%', ...gradientStyle}}>

            <Typography style={{...resultsHeader,...center, marginTop:'0'}}>
                חווית הנסיעה, קו 5
            </Typography>
            <Typography style={{...subHeader,...center, marginTop: '1vh', fontSize:'4vh', width:'', right:''}}>
                {date}
            </Typography>
            <Stack direction="row" style={center}>
                <Typography style={{...text, color:'white', marginTop:'8vh', textAlign:'left',  lineHeight: '1', marginLeft:'1vh', marginRight:'2vh', ...bubblesSubFontSize}}>רכבת ת"א סבידור</Typography>
            <Slider value={75} track={false} style={{...resultsHeader, marginTop:'-1vh', width:'60%', left: '0', right: '0'}} size={"small"}
                    sx={{
                        '& .MuiSlider-thumb': {color: 'white', boxShadow: '0 0 0 4px #000'},
                        '& .MuiSlider-rail': {color: 'white', height: 2, opacity: 1},
                        // '& .MuiSlider-active': {color: "#C9C9C9"},
                    }}/>
                <Typography style={{...text, color:'white', marginTop:'8vh',  lineHeight: '1', marginLeft:'2vh', marginRight:'1vh', ...bubblesSubFontSize}}>מסוף הלוחמים</Typography>

            </Stack>

    </Stack>
            <Stack style={{ position:'absolute', right:'0', left: '0', bottom:'0'}}>
                <Stack style={{marginBottom: '2vh'}}>
                <Typography style={{...text, color: '#929292', ...bubblesSubFontSize, lineHeight: '1.25',...center,width:'100%',marginBottom:'3vh'}}>
                    ○ משוב שלילי  &nbsp; &nbsp;   ● משוב חיובי
                </Typography>
                <img src={logosMap} />
                </Stack>
            </Stack>
        </div>
    );
}

export default ResultsBubblesPage;