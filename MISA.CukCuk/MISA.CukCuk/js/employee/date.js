formatDate(date) {
    try {
        if (date) {
            date = new Date(date)
        } else {
            return "";
        }
    } catch (error) {
        console.log(error);
        return "";
    }
}

