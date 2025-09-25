import java.util.Calendar;
import java.util.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;

class BetweenDays {
    public static void main(String[] args) {
// Write a program to count the number of days between two dates.

// The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

// Example 1:

// Input: date1 = "2019-06-29", date2 = "2019-06-30"
// Output: 1
// Example 2:

// Input: date1 = "2020-01-15", date2 = "2019-12-31"
// Output: 15
    BetweenDays betweenDays = new BetweenDays();
    System.out.println("Days count " + betweenDays.getDaysCount("2020-01-15","2019-12-31"));

    }

    public int getDaysCount(String startDate, String endDate) {
            return Math.abs(daysToDate(startDate) - daysToDate(endDate));   
    }

    public boolean isLeapYear(int year) {
        return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
    };

    public int daysPerMonth(int month, int year) {
        switch (month) {
            case 1:
                return 31;
            case 2:
                if(isLeapYear(year)) return 29;
                return 28;
            case 3:
                return 31;
            case 4:
                return 30;
            case 5:
                return 31;
            case 6:
                return 30;
            case 7:
                return 31;
            case 8:
                return 31;
            case 9:
                return 30;
            case 10:
                return 31;                             
            case 11:
                return 30;
            case 12: 
                return 31;    
        
            default:
                return 0;
        }
    }

    public int daysToDate(String date) {
        String[] dateSplit = date.split("-");
        
        int year = Integer.parseInt(dateSplit[0]);
        String month = dateSplit[1];
        int day = Integer.parseInt(dateSplit[2]);
        int daySum = 0;
        for(int i = 1990; i < year; i ++) {
            daySum += isLeapYear(i) ? 366 : 365;            
        }
        for(int i = 1; i < Integer.parseInt(month); i++) {
            daySum += daysPerMonth(i, year);
        }
        daySum += day;
        return daySum;
    }
}

    