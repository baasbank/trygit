const StringClass = {
    concat: (values) => {
        let result = "";
        values.forEach((value) => {
            result += " " + value;

        });
        return result;
    }
}

module.exports = StringClass;