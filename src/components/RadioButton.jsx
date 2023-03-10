import React from 'react';

function RadioButton() {
    return (
        <>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="role" id="flexRadioDefault1" />
                <label class="form-check-label" for="flexRadioDefault1">
                    <h1>Курьер</h1>
                </label>
            </div>
                <input class="form-check-input" type="radio" name="role" id="flexRadioDefault2" checked />
                <label class="form-check-label" for="flexRadioDefault2">
                    <h1>Клиент</h1>
                </label>
            <div class="form-check">
            </div>
        </>
    )
}

export default RadioButton;