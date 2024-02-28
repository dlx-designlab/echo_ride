import * as React from 'react';
import {useEffect} from "react";

export interface IBubble {
    x: number;
    y: number;
    radius: number;
    color: string;
    name: string;
    image: string;
}

// const emptyBubble: IBubble = {
//     x: 50,
//     y: 110,
//     radius: 30,
//     color: 'white',
// };

export const rollUp = (duration: any) => {
    return {
        animation: `rollUp ${duration}s ease-in-out`
    } as React.CSSProperties;
};


const Bubble = ({x,y,radius,color, name}:IBubble) => {

    useEffect(()=>{
        // console.log(`coords change : ${x},${y}`);
    }, [x,y]);


    return (
        <div style={{...rollUp(3), width: `${radius}px`, height: `${radius}px`, borderRadius: '50%', position:'absolute', left: `${x}%`, top: `${y}%`,backgroundColor: color, transition: 'top 1s, left 1s', overflow:"hidden" }}>
            {/*<circle r={100} style={{...rollUp(3), position:'absolute', left:`${data.x}%`, top:`${data.y}%`, color: data.color}}/>*/}
         </div>
    );
}

export default Bubble;