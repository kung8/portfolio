const validateEmail = (email) =>
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)

export const validator = ({ type, text }) => {
    if (type === 'email') return validateEmail(text);
}