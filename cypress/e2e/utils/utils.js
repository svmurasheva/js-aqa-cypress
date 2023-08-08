const allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_+=-№?:";

export function generateRandomInputValueAllowedChars(length) {
    let text = "";
    for (var i = 0; i < length; i++) {
        text += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
    }
    return text;
}