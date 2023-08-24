/* You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// if first > start = replace
// if second > start = replace

// if second > end = replace
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
 

Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
newInterval.length == 2
0 <= start <= end <= 105 */

import java.util.List;
import java.util.Arrays;
import java.util.LinkedList;


public class InsertIntervals {

    public static void main(String[] args) {
        int[] newInterval = {4,8};
        int[][] intervals =  {{1,2},{3,5},{6,7},{8,10},{12,16}};

        InsertIntervals insertIntervals = new InsertIntervals();
        int[][] newIntervals = insertIntervals.intervalsMerge(intervals, newInterval);

        // for(int i = 0; i < newInterval.length; i++){
        //     System.out.println(Arrays.toString(newIntervals[i]));
        // }
        
    }

    public int[][] intervalsMerge(int[][] intervals, int[] newInterval){
        int newIntervalStart = newInterval[0];
        int newIntervalEnd = newInterval[1];

        List<int[]> left = new LinkedList<>();
        List<int[]> right = new LinkedList<>();


        for(int[] actualInterval : intervals){
            int actualFirst = actualInterval[0];
            int actualLast = actualInterval[1];

            if(actualLast < newIntervalStart){
                left.add(actualInterval);
            } else if ( newIntervalEnd < actualFirst){
                right.add(actualInterval);
            } else {
                newIntervalStart = Math.min(newIntervalStart, actualFirst);
                newIntervalEnd = Math.max(newIntervalEnd, actualLast);
            }

        }
        
        List<int[]> newIntervalsList = new LinkedList<>();
        newIntervalsList.addAll(left);
        newIntervalsList.add(new int[]{newIntervalStart, newIntervalEnd});
        newIntervalsList.addAll(right);

        //newIntervalsList.forEach(a -> System.out.println(Arrays.toString(a)));

        int[][] newIntervalsArray = new int[newIntervalsList.size()][2];
        
        
        for(int i = 0; i < newIntervalsArray.length; i++){
                        
            newIntervalsArray[i] = newIntervalsList.get(i);
                       
        }
        for(int i = 0; i < newIntervalsArray.length; i++){
            System.out.println(Arrays.toString(newIntervalsArray[i]));
        }

        return newIntervalsArray;


    }
    
}
