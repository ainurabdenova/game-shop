export const calcTotalPrice = (items) => items.reduce((acc, game) => acc += game.price, 0)

export const enumerate = (num, dec) => {
    if (num > 100) num = num % 100;
    if (num <= 20 && num >= 10) return dec[2];
    if (num > 20) num = num % 10;
    return num === 1 ? dec[0] : num > 1 && num < 5 ? dec[1] : dec[2];
}

export function getInputState(formState, fieldName) {

    return {
        error: formState.errors[fieldName],
        helperText: formState.errors[fieldName]?.message
    };
}

export function required(message) {
    return message || "Обязательное поле";
}

export function validatePassword(value) {
    if (value.length < 8) return "Минимально 8 символов";
}

export function validateCPassword(password) {
    return function (value) {
        if (value !== password) {
            return "Пароль не совпадает";
        }
    };
}