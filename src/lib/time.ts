const bday = new Date("14 April 2004 00:07:00 GMT");
const ageInMilliseconds = Date.now() - bday.getTime();

export const MILLISECOND = 1;
export const SECOND = MILLISECOND * 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

export const age = ageInMilliseconds / YEAR;
