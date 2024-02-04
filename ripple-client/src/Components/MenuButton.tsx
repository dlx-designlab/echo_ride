import {getCategoryIcon, getCategoryText} from "../Types/ECategory";
import {Link} from "react-router-dom";
import * as React from "react";
import {fadeInUp, iconSize} from "../Types/Styles";



const MenuButton = ({category, style}: { category: string, style?: any }) => {
    return (
        <div style={{
            ...iconSize,
            ...style,
            ...fadeInUp(1)
        }}>
            <Link to={`/${category}`}>

                <img alt={'safe'} style={{...iconSize}} src={getCategoryIcon(category)}/>
            </Link>
            <p style={{
                fontFamily: "Suez One", marginTop: '0vh', width: '100%', color: '#929292',
                fontSize: '2vh',
                lineHeight: '1.25',
            }}>{getCategoryText(category)}</p>

        </div>

    );
};

export default MenuButton;