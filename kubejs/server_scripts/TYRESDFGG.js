function cercle(x){
    var val = Math.pow(x, 2);
    if (x < -100 || x > 101) {
        return null
    } if (x < 1 && x > -1) {
        return [x, val - 1]
    } if (x==101){
        return [0.0, 1.0]
    } else {
        val = x / 100
        return [val, -Math.pow(val, 2) + 1]
    }
}

const y = 0
function nombre(y){
    y = y + 7
    var f = [range(1, 100, 0.1)]+","+[range(1, -1, 0.01)]+","+[range(-100, -1, 0.1)]+","+range(101, 101, 101)
    return cercle(f[y])
}

//Function range()
var range = function(start, end, step) {
    var range = [];
    var typeofStart = typeof start;
    var typeofEnd = typeof end;

    if (step === 0) {
        throw TypeError("Step cannot be zero.");
    }

    if (typeofStart == "undefined" || typeofEnd == "undefined") {
        throw TypeError("Must pass start and end arguments.");
    } else if (typeofStart != typeofEnd) {
        throw TypeError("Start and end arguments must be of same type.");
    }

    typeof step == "undefined" && (step = 1);

    if (end < start) {
        step = -step;
    }

    if (typeofStart == "number") {

        while (step > 0 ? end >= start : end <= start) {
            range.push(start);
            start += step;
        }

    } else if (typeofStart == "string") {

        if (start.length != 1 || end.length != 1) {
            throw TypeError("Only strings with one character are supported.");
        }

        start = start.charCodeAt(0);
        end = end.charCodeAt(0);

        while (step > 0 ? end >= start : end <= start) {
            range.push(String.fromCharCode(start));
            start += step;
        }

    } else {
        throw TypeError("Only string and number types are supported");
    }

    return range;

}