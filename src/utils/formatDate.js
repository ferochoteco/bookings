const getFormattedDate = (value) => {
    let date = new Date(value);
    date = String(date).split(" ");
    const day = date[0];
    const month = date[1];
    const number = date[2];
    const year = date[3];
    const time = date[4].split(":");
    return {
        day,
        number,
        month,
        year,
        time: time[0] + ":" + time[1]
    }
}

export { getFormattedDate }