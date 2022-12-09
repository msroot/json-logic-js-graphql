import _ from 'lodash';
import jsonLogic from 'json-logic-js';
import { differenceInDays, differenceInHours, differenceInMilliseconds, differenceInMinutes, differenceInMonths, differenceInSeconds, differenceInYears, isFuture, isPast, parseISO, } from 'date-fns';
import { lodashOperators } from './operators';
var DURATION_UNITS;
(function (DURATION_UNITS) {
    DURATION_UNITS["MILLISECONDS"] = "milliseconds";
    DURATION_UNITS["SECONDS"] = "seconds";
    DURATION_UNITS["MINUTES"] = "minutes";
    DURATION_UNITS["HOURS"] = "hours";
    DURATION_UNITS["DAYS"] = "days";
    DURATION_UNITS["MONTHS"] = "months";
    DURATION_UNITS["YEARS"] = "years";
})(DURATION_UNITS || (DURATION_UNITS = {}));
const differenceInDuration = (dateStrings, unit) => {
    const date1 = parseISO(dateStrings[0]);
    const date2 = parseISO(dateStrings[1]);
    const isSomeDateInvalid = [date1, date2].find((d) => isNaN(d.getTime()));
    if (isSomeDateInvalid) {
        throw Error(`Invalid date in one of these strings: ${dateStrings}`);
    }
    switch (unit) {
        case DURATION_UNITS.MILLISECONDS:
            return -differenceInMilliseconds(date1, date2);
        case DURATION_UNITS.SECONDS:
            return -differenceInSeconds(date1, date2);
        case DURATION_UNITS.MINUTES:
            return -differenceInMinutes(date1, date2);
        case DURATION_UNITS.HOURS:
            return -differenceInHours(date1, date2);
        case DURATION_UNITS.DAYS:
            return -differenceInDays(date1, date2);
        case DURATION_UNITS.MONTHS:
            return -differenceInMonths(date1, date2);
        case DURATION_UNITS.YEARS:
            return -differenceInYears(date1, date2);
    }
    return 0;
};
lodashOperators.forEach((name) => jsonLogic.add_operation(`_${name}`, _[name]));
jsonLogic.add_operation('_isPastDate', (date) => isPast(new Date(date)));
jsonLogic.add_operation('_isFutureDate', (date) => isFuture(new Date(date)));
jsonLogic.add_operation('_getDate', (date) => new Date(date).toISOString());
jsonLogic.add_operation('_gteDate', (dateStrings, durationUnits) => differenceInDuration(dateStrings, durationUnits[1]) >= durationUnits[0]);
jsonLogic.add_operation('_gtDate', (dateStrings, durationUnits) => differenceInDuration(dateStrings, durationUnits[1]) > durationUnits[0]);
jsonLogic.add_operation('_lteDate', (dateStrings, durationUnits) => differenceInDuration(dateStrings, durationUnits[1]) <= durationUnits[0]);
jsonLogic.add_operation('_ltDate', (dateStrings, durationUnits) => differenceInDuration(dateStrings, durationUnits[1]) < durationUnits[0]);
jsonLogic.add_operation('_eqDate', (dateStrings, durationUnits) => differenceInDuration(dateStrings, durationUnits[1]) === durationUnits[0]);
jsonLogic.add_operation('_nonZeroMin', (a) => Math.min(...a.filter((n) => n !== 0)));
jsonLogic.add_operation('_nonZeroMax', (a) => Math.max(...a.filter((n) => n !== 0)));
jsonLogic.add_operation('_neq', (a, b) => a != b);
export { jsonLogic };
