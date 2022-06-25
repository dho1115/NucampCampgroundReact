export const validateContactForm = values => {
    const errors = { };

    if (!values.firstName) {
        errors.firstName = 'Please enter a first name!!!'
    } else if (values.firstName.length < 2) {
        errors.firstName = "First name must be at least 2 characters."
    } else if (values.firstName.length > 19) {
        errors.firstName = "First name length cannot be greater than 19."
    }

    if (!values.lastName) {
        errors.lastName = 'Please enter a last name!!!';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Last name cannot be less than 2 characters!!!';
    } else if (values.lastName.length > 19) {
        errors.lastName = 'Last name cannot be greater than 19 characters!!!';
    }

    const reg = /^\d+$/;

    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'Phone number MUST be numbers only!!!';
    }

    if (!values.email.includes('@')) {
        errors.email = 'Please include an @ in your email!!!';
    }

    return errors
}