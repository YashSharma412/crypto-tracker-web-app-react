function PrettifyDateData(number, format="monthly") {
    // return rawDate.getDate() + "/" + rawDate.getMonth() + "/" + rawDate.getFullYear()
    const rawDate = new Date(number);
    const day = rawDate.getDate();
    const month = rawDate.getMonth() + 1; // Adding 1 to adjust month indexing
    const year = rawDate.getFullYear();

    // Padding single-digit day or month with leading zero
    const paddedDay = day < 10 ? '0' + day : day;
    const paddedMonth = month < 10 ? '0' + month : month;
    if (format === "monthly") {
        return paddedDay + "/" + paddedMonth;
    }
}

export default PrettifyDateData;