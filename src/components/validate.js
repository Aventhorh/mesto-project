export { enableValidation };

const selectValid = {
    formErrorClass: 'form__item_error',
    formInputErrorClass: 'form__span-error_active',
    input: '.form__item',
    form: '.form',
    formSave: '.form__save',
    formContainer: '.form__container',
    disabledButton: 'form__save_disabled'
  }

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(selectValid.formErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(selectValid.formInputErrorClass);
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(selectValid.formErrorClass);
    errorElement.classList.remove(selectValid.formInputErrorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(selectValid.input));
    const buttonElement = formElement.querySelector(selectValid.formSave);
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
    
};

function enableValidation() {
    const formList = Array.from(document.querySelectorAll(selectValid.form));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        const fieldsetList = Array.from(formElement.querySelectorAll(selectValid.formContainer));
        fieldsetList.forEach((fieldSet) => {
            setEventListeners(fieldSet);
        });
    });
}

function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

function toggleButtonState(inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(selectValid.disabledButton);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(selectValid.disabledButton);
        buttonElement.disabled = false;
    }
}