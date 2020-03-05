import {LocalCache} from 'browser-cache-storage';

const MILLI_SECOND = 1;
const SECOND = MILLI_SECOND * 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;

const AUTO_COMPLETE_KEY = 'is-auto-complete';

export const setAutoComplete = (userPk, data) => {
  if (!userPk) {
    return null;
  }

  LocalCache.set(userPk, AUTO_COMPLETE_KEY, data);
};

export const getAutoComplete = (userPk) =>
  LocalCache.get(userPk, AUTO_COMPLETE_KEY, 30 * DAY);

export const clearAutoComplete = () => LocalCache.del(AUTO_COMPLETE_KEY);