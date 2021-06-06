import { dateTime } from 'https://moment.github.io/luxon/es6/luxon.js';


export const diffDates = (date1, date2) => {
    const iso1 = DateTime.fromISO(date1);
    const iso2 = DateTime.fromISO(date2);

    return iso2.diff(iso1, ['years', 'months', 'days']).toObject();
}
/*console.log('form.js');

const form = document.getElementById('dateForm');
const message = document.querySelector('.message');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('submit!');
})*/
