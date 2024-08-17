import * as React from 'react';
import {Button, Stack, Typography} from "@mui/material";
import {center, fadeIn, pageHeader, subHeader, text, votePageHeader} from "../Types/Styles";
import { getCategoryIcon} from "../Types/ECategory";
import { useNavigate} from "react-router-dom";
import {translation} from "../Translation/Language";

const FinishPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Stack style={{...fadeIn(0.5), marginTop: '7vh'}}>
            <Typography style={{...votePageHeader, textAlign:'center', width: '80%', right: '10%', left: '10%', position: 'relative'}}>{translation.sharing.title}</Typography>
            <Typography style={{...subHeader, textAlign:'center', width: '80%', right: '10%', left: '10%', position: 'relative'}}>{translation.sharing.subtitle}</Typography>
            <Stack direction={translation.style.startSide === 'left' ? 'row-reverse' : 'row'} style={{...center, marginTop:'9vh'}}>
                <Button onClick={()=>{navigate('/');}} variant="contained"
                        sx={{borderRadius: 28, width: '30%', ...text, margin:'1vh', textTransform: 'none'}}>{translation.buttons.yes}</Button>
                <Button onClick={()=>{navigate('/results');}} variant="contained"
                        sx={{borderRadius: 28, width: '30%', ...text, margin:'1vh', textTransform: 'none'}}>{translation.buttons.no}</Button>
            </Stack>

        </Stack>
            <img alt={'safe'} style={{ height: '20vh', position: 'absolute', bottom:'0%', left:'25%', zIndex:'90' }} src={getCategoryIcon('safe')}/>
            <img alt={'driver'} style={{ height: '20vh', position: 'absolute', bottom:'-2%', left:'55%' , zIndex:'90'}} src={getCategoryIcon('driver')}/>
            <img alt={'ride'} style={{ height: '20vh', position: 'absolute', bottom:'-2%', left:'0' , zIndex:'85'}} src={getCategoryIcon('ride')}/>
            <img alt={'air'} style={{ height: '20vh', position: 'absolute', bottom:'12%', left:'0' , zIndex:'80'}} src={getCategoryIcon('air')}/>
            <img alt={'crowded'} style={{ height: '20vh', position: 'absolute', bottom:'10%', left:'75%' , zIndex:'80'}} src={getCategoryIcon('crowded')}/>
            <img alt={'clean'} style={{ height: '20vh', position: 'absolute', bottom:'15%', left:'30%', zIndex:'80' }} src={getCategoryIcon('clean')}/>

        </div>
    );
}

export default FinishPage