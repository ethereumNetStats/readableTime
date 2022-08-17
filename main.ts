// Define making human-readable datetime(unix time) formatter for current time.
const currentTimeReadable = (): string => {
    let dateObj = new Date();
    return `${dateObj.getUTCFullYear()}-${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}-${('0' + dateObj.getUTCDate()).slice(-2)} ${('0' + dateObj.getUTCHours()).slice(-2)}:${('0' + dateObj.getUTCMinutes()).slice(-2)}:${('0' + dateObj.getUTCSeconds()).slice(-2)}`;
}

//Define making human readable datetime(unix time) formatter
const unixTimeReadable = (unixSecTime: number): string => {
    let dateObj = new Date(unixSecTime * 1000);
    return `${dateObj.getUTCFullYear()}-${('0' + (dateObj.getUTCMonth() + 1)).slice(-2)}-${('0' + dateObj.getUTCDate()).slice(-2)} ${('0' + dateObj.getUTCHours()).slice(-2)}:${('0' + dateObj.getUTCMinutes()).slice(-2)}:${('0' + dateObj.getUTCSeconds()).slice(-2)}`;
}

export {currentTimeReadable, unixTimeReadable}
