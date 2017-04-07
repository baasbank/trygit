const StringClass = {
    concat: (values) => {
        let cat = "";
        values.forEach((value) => {
            cat += " " + value;

        });
        return cat;
    }
}

module.exports = StringClass;