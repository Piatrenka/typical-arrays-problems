exports.min = function min(array) {
    if (Array.isArray(array) && array.length) {
        return array.reduce((accumulator, currValue) => {
            return accumulator < currValue ? accumulator : currValue;
        });
    }
    return 0;
};

exports.max = function max(array) {
    if (Array.isArray(array) && array.length) {
        return array.reduce((accumulator, currValue) => {
            return accumulator > currValue ? accumulator : currValue;
        });
    }
    return 0;
};

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length) {
        return (
            array.reduce((acc, val) => {
                return acc + val;
            }) / array.length
        );
    }
    return 0;
};
