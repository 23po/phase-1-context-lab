/* Your Code Here */
function createEmployeeRecord ([firstName, familyName, title, payPerHour]) {
        const timeInEvents = [];
        const timeOutEvents = [];
         return {firstName, familyName, title, payPerHour, timeInEvents, timeOutEvents}
     
     }

     function createEmployeeRecords(array) {
        const newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray.push(createEmployeeRecord(array[i]));
        }
        return newArray;
    }
    
    function createTimeInEvent(dateTime) {
        const dateTimeArray = dateTime.split(' ');
        
    
        const newEvent = {type: 'TimeIn',
        hour: parseInt(dateTimeArray[1], 10),
        date: dateTimeArray[0] };
       this.timeInEvents.push(newEvent);
    
       return this;
    
    
    }
    function createTimeOutEvent(dateTime) {
        const dateTimeArray = dateTime.split(' ');
    
        const newEvent = {type: 'TimeOut',
        hour: parseInt(dateTimeArray[1], 10),
        date: dateTimeArray[0]    
    };
    
        this.timeOutEvents.push(newEvent);
        return this;
    
    }
    function hoursWorkedOnDate (date) {
        
        let filteredtimeInEvent = this.timeInEvents.find(function(timeInEvent) { return timeInEvent.date === date })
        let filteredtimeOutEvent = this.timeOutEvents.find(function(timeOutEvent) { return timeOutEvent.date === date})
    
       return (filteredtimeOutEvent.hour - filteredtimeInEvent.hour)/100
        
        //let timeIn = parseInt(filteredtimeInEvent.hour, 10);
       //let timeOut = parseInt(filteredtimeOutEvent.hour, 10);
       
       return timeOut - timeIn; 
    }
    function wagesEarnedOnDate(date) {
        const payRate = this.payPerHour;
    
        return hoursWorkedOnDate.call(this, date) * payRate
    }

    function calculatePayroll(employeeRecords) {
        return  employeeRecords.reduce( function (previousValue, currentValue) { return previousValue + allWagesFor.call(currentValue)}, 0)
    
    }
    function findEmployeeByFirstName(srcArray, firstName) {
       return srcArray.find( function (e) {return e.firstName === firstName })
    }


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}



