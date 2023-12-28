/**
 * Функция вырисовывает графики к строчкам таблицы с помощью с стороннего сервиса https://www.highcharts.com/demo
 * @param {string} box id родительского div, куда помещаем график
 * @param {string} titleText Заголовок графика
 * @param {string} unitChart Название единиц измерения шкалы y
 * @param {number} arr Массив значений: за 2 дня
 * @param {number} arrAll Массив значений: всего
 */
function allCharts(box, titleText, unitChart, arr, arrAll) {

    Highcharts.chart(box, {

        title: {
            text: titleText
        },

        xAxis: {
            tickInterval: 1,
            type: 'logarithmic',
            title: {
                text: 'Дни'
            }
        },

        yAxis: {
            type: 'logarithmic',
            minorTickInterval: 0.1,
            title: {
                text: unitChart
            },
            name: unitChart
        },

        tooltip: {
            headerFormat: '<b>{series.name}</b><br />',
            pointFormat: 'день = {point.x}, ' + unitChart + ' = {point.y}'
        },

        series: [{
                data: arr,
                pointStart: 1,
                name: 'за 2 дня',
            },
            {
                data: arrAll,
                pointStart: 1,
                name: 'всего',
            }
        ]
    });

}

/**
 * Массивы значений: за 2 дня
 */
let revenue = [480521, 500521];
let cash = [300000, 300000];
let cashlessPayment = [100000, 100000];
let creditCards = [100521, 100521];
let averageCheck = [900, 1300];
let averageGuest = [800, 1200];
let deletingReceiptAfterPayment = [1100, 1000];
let deletingReceiptBeforePayment = [1300, 1300];
let quantityChecks = [34, 36];
let quantityQuests = [34, 36];

/**
 * Массивы значений: всего
 */
let revenueAll = [4805121, 4805121];
let cashAll = [300000, 300000];
let cashlessPaymentAll = [100000, 100000];
let creditCardsAll = [100521, 100521];
let averageCheckAll = [900, 900];
let averageGuestAll = [800, 800];
let deletingReceiptAfterPaymentAll = [900, 900];
let deletingReceiptBeforePaymentAll = [900, 900];
let quantityChecksAll = [34, 34];
let quantityQuestsAll = [32, 32];

/**
 * Вызовы графиков
 */
!document.querySelector('#containerRevenue') || allCharts('containerRevenue', 'Выручка, руб', 'руб', revenue, revenueAll);
!document.querySelector('#containerCash') || allCharts('containerCash', 'Наличные', 'руб', cash, cashAll);
!document.querySelector('#containerCashlessPayment') || allCharts('containerCashlessPayment', 'Безналичный расчет', 'руб', cashlessPayment, cashlessPaymentAll);
!document.querySelector('#containerCreditCards') || allCharts('containerCreditCards', 'Кредитные карты', 'руб', creditCards, creditCardsAll);
!document.querySelector('#containerAverageCheck') || allCharts('containerAverageCheck', 'Средний чек, руб', 'руб', averageCheck, averageCheckAll);
!document.querySelector('#containerAverageGuest') || allCharts('containerAverageGuest', 'Средний гость, руб', 'руб', averageGuest, averageGuestAll);
!document.querySelector('#containerDeletingReceiptAfterPayment') || allCharts('containerDeletingReceiptAfterPayment', 'Удаления из чека (после оплаты), руб', 'руб', deletingReceiptAfterPayment, deletingReceiptAfterPaymentAll);
!document.querySelector('#containerDeletingReceiptBeforePayment') || allCharts('containerDeletingReceiptBeforePayment', 'Удаления из чека (до оплаты), руб', 'руб', deletingReceiptBeforePayment, deletingReceiptBeforePaymentAll);
!document.querySelector('#containerQuantityChecks') || allCharts('containerQuantityChecks', 'Количество чеков', 'количество', quantityChecks, quantityChecksAll);
!document.querySelector('#containerQuantityQuests') || allCharts('containerQuantityQuests', 'Количество гостей', 'количество', quantityQuests, quantityQuestsAll);

/**
 * Аккордеон
 */
document.querySelectorAll('.accordion-item_trigger-js2').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordion-item--active-js2')) {
            parent.classList.remove('accordion-item--active-js2');
        } else {
           document
       .querySelectorAll('.accordion-item-js2')
       .forEach((child) => child.classList.remove('accordion-item--active-js2'));

                parent.classList.add('accordion-item--active-js2');
        }
        
    })
)