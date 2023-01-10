function inputsValidation(input, type) {
    input = input.trim();

    let payload = {
        value: input,
        error: false,
        notification: ''
    };

    switch (type) {
        case 'name':
            if (!input) {
                payload = { ...payload, error: true, notification: 'Name input is empty' };
                break;
            }

            const newName = input[0].toUpperCase() + input.slice(1).toLowerCase();
            payload = { ...payload, value: newName };

            break;

        case 'email':
            if (!input) {
                payload = { ...payload, error: true, notification: 'Email input is empty.' };
                break;
            }

            const newEmail = input.toLowerCase();
            payload = { ...payload, value: newEmail };

            break;

        case 'pass':
            if (!input) {
                payload = { ...payload, error: true, notification: 'Password input is empty.' };
                break;
            }

            const minPassLength = 4;

            if (input.length < minPassLength) {
                payload = { ...payload, error: true, notification: `Password length must be ${minPassLength} characters.` };
                break;
            }

            break;

        default:
            break;
    }

    return payload;
}

export default inputsValidation;