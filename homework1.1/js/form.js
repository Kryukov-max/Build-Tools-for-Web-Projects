import addMessage, { resetError as resetMessage, renderDiff } from './common.js';/*дефолтный импорт*/ 
import { diffDates } from './calc.js';
/*точка входа*/
const form = document.getElementById('dateForm');

form.addEventListener( 'submit', (evt) => {
    evt.preventDefault();
    resetMessage();
/*способ достать данные из формы*/
    const formdata = new FormData(evt.target);
    let date1 = formdata.get('date1');
    let date2 = formdata.get('date2');
/*вывод ощибки при неправильно введенных данных*/
    if (!date1 || !date2) {
        addMessage('ошибка');
    } else {
        if (date1 > date2) {/*убиваем отрицательные результаты расчета при неправильно введенных данных*/
            [date2, date1] = [date1, date2];
        }
        const result = diffDates(date1, date2);
        renderDiff(result);
    }
})



