'use strict';
let deposit_amount = prompt('Введите сумму вклада');
let last_num = deposit_amount[deposit_amount.length - 1];
let two_last_nums = deposit_amount.slice(-2);
switch (true) {
    case last_num == 1 && two_last_nums != 11:
        alert(`Ваша сумма в ${deposit_amount} рубль успешно зачислена`);
        break;
    case last_num >= 2 && last_num < 5 && two_last_nums != 12 && two_last_nums != 13 && two_last_nums != 14:
        alert(`Ваша сумма в ${deposit_amount} рубля успешно зачислена`);
        break;
    case last_num == 0:
    case last_num >= 5 && last_num <= 9:
    case two_last_nums >= 11 && two_last_nums <= 14:
        alert(`Ваша сумма в ${deposit_amount} рублей успешно зачислена`);
        break;
}
