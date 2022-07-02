export const validateUserLoginForm = values => {
    const errors = { };

    if (!values.username) {
        errors.username = 'Username is required.';
    } else if (values.username.length < 6) {
        errors.username = 'Username must be at least 6 characters.';
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less.';
    }

    if (!values.password) {
        errors.password = 'required';
    } else if (values.password.length < 8) {
        errors.password = "Must be 8 characters or more."
    }

    return errors;
}