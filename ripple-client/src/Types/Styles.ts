import * as React from "react";

export const text = {
    fontFamily: "Suez One",
    textAlign: 'right',
} as React.CSSProperties;

const rightPosition = {
    direction: 'rtl',
    position: 'relative',
    width: '70%',
    top: '5vh',
    right: '5vh',
    // objectFit: 'cover'
    ...text
} as React.CSSProperties;
export const pageHeader = {
    color: '#393938',
    fontSize: '6vh',
    lineHeight: '1',
    zIndex: 10,
    ...rightPosition
} as React.CSSProperties;
export const resultsHeader = {
    color: '#ffffff',
    fontSize: '4vh',
    lineHeight: '1',
    zIndex: 10,
    ...rightPosition
} as React.CSSProperties;
export const subHeader = {
    color: '#929292',
    fontSize: '2.2vh',
    lineHeight: '1.25',
    marginTop: '3vh',
    zIndex: 9,
    ...rightPosition
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
    maxWidth: '120%',
    maxHeight: '20vh',
    minHeight: '15vh',
    minWidth: '90%',
    // height: '120%'
} as React.CSSProperties;