function inputsValidation(type, input) {

    input = input.trim();

    if (!input) {   //tikriname ar tuscias inputas, kad switch be reikalo neveiktu.
        return input;
    }

    switch (type) {

        case 'name':

            input = input[0].toUpperCase() + input.slice(1).toLowerCase();
            break;

        case 'email':
            //  add validation..

            break;

        case 'pass':
            //  add validation..
            break;

        default:
    }

    return input;
}

export default inputsValidation;