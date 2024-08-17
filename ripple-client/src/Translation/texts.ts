import {translationType} from "../Types/Translations";
import {busNumber} from "../Types/Consts";
import {translation} from "./Language";
import bubblesImgHe from '../icons/logosMap_he.png';
import bubblesImgEn from '../icons/logosMap_en.png';
import bubblesShareEn from '../icons/share_en.png';
import bubblesShareHe from '../icons/share_he.png';


export const english : translationType = {
    style: { dir: 'ltr', startSide: 'left', days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] },
    buttons: {no: "No", share: "Share", yes: "Yes"},
    categories: {
        air: {
            title: 'Air Quality',
            shortTitle: '',
            min: 'Stuffy',
            max: 'Fresh',
        },
        clean: {
            title: 'Cleanliness & Maintenance',
            shortTitle: 'Cleanliness',
            min: 'Dirty',
            max: 'Spotless ',
        },
        ride: {
            title: 'Ride Comfort',
            shortTitle: '',
            min: 'Wild',
            max: 'Laid-back',
        },
        crowd: {
            title: 'Passenger Crowding',
            shortTitle: 'Crowding',
            min: 'Packed',
            max: 'Spacious',
        },
        driver: {
            title: 'Driver Behavior',
            shortTitle: 'Driver',
            min: 'Rude',
            max: 'Kind',
        },
        safety: {
            title: 'Sense of Safety',
            shortTitle: 'Safety',
            min: 'Oppressive',
            max: 'Pleasant',
        }
    },
    mainPage: {
        title: 'How is Your Ride Experience?',
        subtitle: 'Choose a category and share your ride experience. Your feedback will help us improve the service.'
    },
    resultsAvg: {
        title: 'Ride Reports Overview, Bus Route ' + busNumber,
        subtitle: ''
    },
    resultsBubbles: {
        title: ' Ride Experience on Bus Route ' + busNumber,
        subtitle: '',
        stations: {
            start: 'Duke of York Square\n(Stop G)',
            end: 'Parkgate Road\n(Stop BE)'
        },
        feedback:
            {
                positive: 'Positive feedback',
                negative: 'Negative feedback'
            },
        img: bubblesImgEn,
        share: bubblesShareEn
    },
    sharing: {
        title: 'Thanks for sharing! We\'ll take it from here',
        subtitle: 'Would you like to share anything else?'
    }

}

export const hebrew : translationType = {
    style: { dir: 'rtl', startSide: 'right', days: ['יום א', 'יום ב', 'יום ג', 'יום ד', 'יום ה', 'יום ו', 'יום ש'] },
    buttons: {no: "לא, סיימתי :)", share: "שתף", yes: "כן"},
    categories: {
        air: {
            title: 'איכות האויר',
            shortTitle: '',
            min: 'מחניק',
            max: 'מאוורר',
        },
        clean: {
            title: 'ניקיון ותחזוקה',
            shortTitle: '',
            min: 'מלוכלך',
            max: 'מצוחצח',
        },
        ride: {
            title: 'חווית הנסיעה',
            shortTitle: '',
            min: 'פרועה',
            max: 'נינוחה',
        },
        crowd: {
            title: 'צפיפות ועומס',
            shortTitle: '',
            min: 'דחוק',
            max: 'מרווח',
        },
        driver: {
            title: 'יחס הנהג',
            shortTitle: '',
            min: 'גס רוח',
            max: 'אדיב',
        },
        safety: {
            title: 'תחושת ביטחון',
            shortTitle: '',
            min: 'מעיק',
            max: 'נעים',
        }
    },
    mainPage: {
        title: 'איך מרגישה חווית הנסיעה?',
        subtitle: 'בחרו את הקטגוריה ושתפו את חווית הנסיעה שלכם. בעזרת הדיווח שלכם נוכל לשפר את השירות'
    },
    resultsAvg: {
        title: 'סיכום שיתופי חווית הנסיעה, קו ' + busNumber,
        subtitle: ''
    },
    resultsBubbles: {
        title: 'חווית הנסיעה, קו ' + busNumber,
        subtitle: '',
        stations: {
            start: 'מסוף הלוחמים',
            end: 'רכבת ת״א סבידור'
        },
        feedback:
            {
                positive: 'משוב חיובי',
                negative: 'משוב שלילי'
            },
        img: bubblesImgHe,
        share: bubblesShareHe
    },
    sharing: {
        title: 'תודה על שיתוף החוויה!' + '\n' +
            'אנחנו ניקח את זה מכאן',
        subtitle: 'תרצה לשתף במשהו נוסף?'
    }

}


const englishDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const hebrewDays = ['יום א', 'יום ב', 'יום ג', 'יום ד', 'יום ה', 'יום ו', 'יום ש']

export const getAverageDate = () =>
{
    const currentDate = new Date();

    const dayOfWeek = translation.style.days[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    const minsDiff = 42;
    const prevMin = minutes >= minsDiff ? minutes - minsDiff : 60 + (minutes - minsDiff);
    const prevHour = minutes >= minsDiff ? hour : hour - 1;

    return `${dayOfWeek} · ${date}.${month} · ${hour}:${minutes < 10 ? '0' : ''}${minutes} - ${prevHour}:${prevMin < 10 ? '0' : ''}${prevMin}`;
}

export const getBubblesDate = () =>
{
    const currentDate = new Date();

    const dayOfWeek = translation.style.days[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();

    return `${dayOfWeek} · ${date}.${month} · ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}