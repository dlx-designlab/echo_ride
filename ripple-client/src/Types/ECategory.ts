import air from '../icons/air.svg';
import clean from '../icons/clean.svg';
import crowded from '../icons/crowded.svg';
import driver from '../icons/driver.svg';
import ride from '../icons/ride.svg';
import safe from '../icons/safe.svg';
import airAnim from '../icons/air.json';
import cleanAnim from '../icons/clean.json';
import crowdedAnim from '../icons/crowded.json';
import driverAnim from '../icons/driver.json';
import rideAnim from '../icons/ride.json';
import safeAnim from '../icons/safe.json';

const Categories: Record<string, { title: string, range: [string, string], icon: string, animation:any }> = {
    'driver': {
        title: 'יחס הנהג',
        range: ['גס רוח', 'אדיב'],
        icon: driver,
        animation: driverAnim
    },
    'ride': {
        title: 'חווית הנסיעה',
        range: ['פרועה', 'נינוחה'],
        icon: ride,
        animation: rideAnim
    },
    'clean': {
        title: 'ניקיון ותחזוקה',
        range: ['מלוכלך', 'מצוחצח'],
        icon: clean,
        animation: cleanAnim
    },
    'safe': {
        title: 'תחושת ביטחון',
        range: ['מעיק', 'נעים'],
        icon: safe,
        animation: safeAnim
    },
    'crowded': {
        title: 'צפיפות ועומס',
        range: ['דחוק', 'מרווח'],
        icon: crowded,
        animation: crowdedAnim
    },
    'air': {
        title: 'איכות האויר',
        range: ['מחניק', 'מאוורר'],
        icon: air,
        animation: airAnim
    }
}

export const getCategoryRange = (category:string) => {
    return Categories[category].range;
}

export const getCategoryIcon = (category:string) => {
    return Categories[category].icon;
}
export const getCategoryAnimation = (category:string) => {
    return Categories[category].animation;
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
