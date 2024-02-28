import * as React from 'react';
import {Button, Stack, Typography} from "@mui/material";
import {center, fadeIn, pageHeader, subHeader, text} from "../Types/Styles";
import { getCategoryIcon} from "../Types/ECategory";
import { useNavigate} from "react-router-dom";

const FinishPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Stack style={fadeIn(0.5)}>
            <Typography style={{...pageHeader, textAlign:'center', right:'15%'}}>תודה על שיתוף החוויה!</Typography>
            <Typography style={{...pageHeader, textAlign:'center', right:'15%'}}>אנחנו ניקח את זה מכאן </Typography>
            <Typography style={{...subHeader, textAlign:'center', right:'15%'}}>תרצה לשתף במשהו נוסף?</Typography>
            <Stack direction={"row"} style={{...center, marginTop:'10vh'}}>
                <Button onClick={()=>{navigate('/');}} variant="contained"
                        sx={{borderRadius: 28, width: '30%', ...text, margin:'1vh'}}>כן</Button>
                <Button onClick={()=>{navigate('/results');}} variant="contained"
                        sx={{borderRadius: 28, width: '30%', ...text, margin:'1vh'}}>לא, סיימתי</Button>
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