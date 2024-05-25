import air from '../icons/air.svg';
import clean from '../icons/clean.svg';
import crowded from '../icons/crowded.svg';
import driver from '../icons/driver.svg';
import ride from '../icons/ride.svg';
import safe from '../icons/safe.svg';
import empty_air from '../icons/air_empty.svg';
import empty_clean from '../icons/clean_empty.svg';
import empty_crowded from '../icons/crowded_empty.svg';
import empty_driver from '../icons/driver_empty.svg';
import empty_ride from '../icons/ride_empty.svg';
import empty_safe from '../icons/safe_empty.svg';
import airAnim from '../icons/air.json';
import cleanAnim from '../icons/clean.json';
import crowdedAnim from '../icons/crowded.json';
import driverAnim from '../icons/driver.json';
import rideAnim from '../icons/ride.json';
import safeAnim from '../icons/safe.json';

const Categories: Record<string, { title: string, range: [string, string], icon: string, emptyIcon: string, animation:any, color: string, center:[number, number] }> = {
    'driver': {
        title: 'יחס הנהג',
        range: ['גס רוח', 'אדיב'],
        icon: driver,
        emptyIcon: empty_driver,
        animation: driverAnim,
        color: '#AD95F2',
        center: [1, 0]
    },
    'ride': {
        title: 'חווית הנסיעה',
        range: ['פרועה', 'נינוחה'],
        icon: ride,
        emptyIcon: empty_ride,
        animation: rideAnim,
        color: '#FFC47A',
        center: [0.5, 0.8]
    },
    'clean': {
        title: 'ניקיון ותחזוקה',
        range: ['מלוכלך', 'מצוחצח'],
        icon: clean,
        emptyIcon: empty_clean,
        animation: cleanAnim,
        color: '#379481',
        center: [-1, 0]
    },
    'safe': {
        title: 'תחושת ביטחון',
        range: ['מעיק', 'נעים'],
        icon: safe,
        emptyIcon: empty_safe,
        animation: safeAnim,
        color: '#386EDF',
        center: [-0.5, -0.8]
    },
    'crowded': {
        title: 'צפיפות ועומס',
        range: ['דחוק', 'מרווח'],
        icon: crowded,
        emptyIcon: empty_crowded,
        animation: crowdedAnim,
        color: '#F3B0D3',
        center: [0.5, -0.8]

    },
    'air': {
        title: 'איכות האויר',
        range: ['מחניק', 'מאוורר'],
        icon: air,
        emptyIcon: empty_air,
        animation: airAnim,
        color: '#AFAFAF',
        center: [-0.5, 0.8]
    }
}

export const getCategoryRange = (category:string) => {
    return Categories[category].range;
}

export const getCategoryIcon = (category:string, isEmpty: boolean = false) => {
    return isEmpty ? Categories[category].emptyIcon : Categories[category].icon;
}

export const getCategoryCenter = (category:string) => {
    return Categories[category].center;
}
export const getCategoryAnimation = (category:string) => {
    return Categories[category].animation;
}

export const getCategorySliderColor = (category:string) => {
    return Categories[category].color;
}

export const ECategory = Object.keys(Categories);

export const getCategoryText = (category: string) => {
    return Categories[category].title;
}

// export const sliderCategories: Record<string, [string, string]> = {
//     'driver': ['גס רוח', 'אדיב'],
//     'ride': ['פרועה', 'נינוחה'],
//     'clean': ['מלוכלך', 'מצוחצח'],
//     'safe': ['מעיק', 'נעים'],
//     'crowded': ['דחוק', 'מרווח'],
//     'air': ['מחניק', 'מאוורר'],
// };

// export const sliderIcons: Record<string, [string, string]> = {
//     'driver': ['גס רוח', 'אדיב'],
//     'ride': ['פרועה', 'נינוחה'],
//     'clean': ['מלוכלך', 'מצוחצח'],
//     'safe': ['מעיק', 'נעים'],
//     'crowded': ['דחוק', 'מרווח'],
//     'air': ['מחניק', 'מאוורר'],
// };
