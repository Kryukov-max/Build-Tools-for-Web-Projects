import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.js';


export const diffDates = (date1, date2) => {
    const iso1 = DateTime.fromISO(date1);/*форматируем данные в строковый объект*/
    const iso2 = DateTime.fromISO(date2);
/*форматируем данные под слайд и переводим в объект, иначе не заработет*/
    return iso2.diff(iso1, ['years', 'months', 'days']).toObject();
}

