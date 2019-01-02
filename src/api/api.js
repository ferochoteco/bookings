// baseUrl = http://bookings.globant.com/
// Cuando elijo el site -> http://bookings.globant.com/locationAction.do?method=readAll&_=1545403807784
// Cuando elijo el beneficio, carga el calendar -> http://bookings.globant.com/json/calendarFeed?calid=globant.com_lc1s5clf2eble26eeige1g9vms@group.calendar.google.com&start=2018-12-21&end=2018-12-28&_=1545403458689
// Click para ver el turno -> http://bookings.globant.com/displayEvent.do?calid=globant.com_lc1s5clf2eble26eeige1g9vms@group.calendar.google.com&eventid=39nffckt1ocfu3c1j0j781js71_20181226T161500Z&start=2018-12-21T0:0:00.0-0300&end=2018-12-28T0:0:00.0-0300&_=1545403483648
// Click en book -> http://bookings.globant.com/json/bookEvent?calid=globant.com_lc1s5clf2eble26eeige1g9vms@group.calendar.google.com&eventid=14r3cupt3fpgsprmigjc70pp2v_20181226T184500Z&_=1545403559857
// Click en cancel book -> http://bookings.globant.com/json/cancelEvent?calid=globant.com_lc1s5clf2eble26eeige1g9vms@group.calendar.google.com&eventid=14r3cupt3fpgsprmigjc70pp2v_20181226T184500Z&_=1545403747805

const baseUrl = 'http://bookings.globant.com';

// const start = '2019-1-2';
// const end = '2018-1-9';
// const _ = Date.now(); //timestamp

// Handle HTTP errors since fetch won't.
const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
        return response;
}

const fetchData = (url) => {
    return fetch(baseUrl + url)
        .then(handleErrors)
        .then(response => response.json())
        .catch(error => console.error(error)) 
}

export const getLocations = () => {
    const url = '/locationAction.do?method=readAll';
    return fetchData(url); 
}