const OCLOCK = " o' clock";
const MIN_PAST = " minute past ";
const MINS_PAST = " minutes past ";
const QUARTER_PAST = "quarter past ";
const HALF_PAST = "half past ";
const QUARTER_TO = "quarter to ";
const MIN_TO = " minute to ";
const MINS_TO = " minutes to ";

const HOURS_ARR = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve" ];
const MINUTES_ONES = [ "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten" ];
const MINUTES_TEENS = [ "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ];
const MINUTES_TENS = [ "ten", "twenty", "thirty", "fourty", "fifty", "sixty" ];

function convert(hr, min){
    if ((hr > 0 && hr <= 12) && (min >= 0 || min <= 59)){
        if (min == 0){
            return getHours(hr) + OCLOCK;
        }
        else if (min > 0 && min < 30){
            if (min == 15){
                return QUARTER_PAST + getHours(hr);
            }
            else if (min == 1){
                return getMinutes(min) + MIN_PAST + getHours(hr);
            }
            else {
                return getMinutes(min) + MINS_PAST + getHours(hr);
            }
        }
        else if (min == 30){
            return HALF_PAST + getHours(hr);
        }
        else if (min > 30 && min < 60){
            if (min == 45){
                return QUARTER_TO + getHours(hr + 1);
            }
            else if (min == 59){
                return getMinutes(60 - min) + MIN_TO + getHours(hr + 1);
            }
            else {
                return getMinutes(60 - min) + MINS_TO + getHours(hr + 1);
            }
        }
    }
}

function getHours(hr){
    return HOURS_ARR[hr - 1];
}

function getMinutes(min){
    if (min <= 10){
        return MINUTES_ONES[min - 1];
    }
    else if (min > 10 && min < 20){
        return MINUTES_TEENS[(min % 10) - 1];
    }
    else if (min > 10 && min % 10 == 0){
        return MINUTES_TENS[(min / 10) - 1];
    }
    else {
        return MINUTES_TENS[Math.floor(min / 10) - 1] + " " + MINUTES_ONES[(min % 10) - 1];
    }
}

console.log(convert(5, 47));
console.log(convert(3, 00));
console.log(convert(7, 15));

console.log(convert(5, 00));
console.log(convert(5, 01));
console.log(convert(5, 10));
console.log(convert(5, 15));
console.log(convert(5, 30));
console.log(convert(5, 40));
console.log(convert(5, 45));
console.log(convert(5, 47));
console.log(convert(5, 28));
