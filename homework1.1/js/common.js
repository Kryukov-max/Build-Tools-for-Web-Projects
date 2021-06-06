const message = document.querySelector('.message');
/*функция будет получать текст ошибки и отрисовывать её*/
export default function renderError(text) {
    message.textContent = text;
}
/*функция которая будет сбрасывать значения поля мессадж*/
export function resetError() {
    message.textContent = '';
}
/*функция которая будет выводить рез-тат*/
export function renderDiff(diff) {
    message.innerHTML = `<span>
Года: ${diff.years}
Месяца: ${diff.months}
Дни: ${diff.days}
</span>`;

}