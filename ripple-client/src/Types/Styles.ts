import * as React from "react";
import {translation} from "../Translation/Language";

export const text = {
    fontFamily: "Suez One",
    textAlign: translation.style.startSide,
    direction: translation.style.dir,
    whiteSpace: 'pre-line'
} as React.CSSProperties;

const sidePosition = {
    direction: translation.style.dir,
    position: 'relative',
    // width: '70%',
    top: '5vh',
    right: translation.style.startSide === 'right' ? '5vh' :'30%',
    left: translation.style.startSide === 'left' ? '5vh' :'',
    // objectFit: 'cover'
    ...text
} as React.CSSProperties;
export const pageHeader = {
    color: '#393938',
    fontSize: '6vh',
    lineHeight: '1',
    zIndex: 10,
    ...sidePosition
} as React.CSSProperties;
export const votePageHeader = {
    color: '#393938',
    fontSize: '6vh',
    lineHeight: '1',
    zIndex: 10,
    right: translation.style.startSide === 'right' ? '3vh' :'',
    left: translation.style.startSide === 'left' ? '3vh' :'',
    ...text,
    top: '5vh'
    // ...sidePosition
} as React.CSSProperties;
export const resultsHeader = {
    color: '#ffffff',
    fontSize: '2.8vh',
    lineHeight: '1',
    zIndex: 10,
    ...sidePosition,
    width: '',
    right: ''
} as React.CSSProperties;
export const subHeader = {
    color: '#929292',
    fontSize: '2.2vh',
    lineHeight: '1.25',
    marginTop: '3vh',
    zIndex: 9,
    ...sidePosition,
} as React.CSSProperties;

export const fadeIn = (duration: any) => {
    return {
        animation: `fadeIn ${duration}s ease-in-out`
    } as React.CSSProperties;
};
export const fadeInUp = (duration: any) => {
    return {
        animation: `fadeInUp ${duration}s ease-in-out`
    } as React.CSSProperties;
};


export const center = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
} as React.CSSProperties;

export const down = {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'end',
} as React.CSSProperties;

export const iconSize = {
    width: '100%',
    maxWidth: '100%',
    maxHeight: '18vh',
    minHeight: '15vh',
    minWidth: '90%',
    // height: '120%'
} as React.CSSProperties;