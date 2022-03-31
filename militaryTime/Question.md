Given a time in -hour AM/PM format, convert it to military (24-hour) time.

__Note__: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

## Example

* __s = '12:01:00PM'__
Return '12:01:00'.
* __s = '12:01:00AM'__
Return '00:01:00'.

## Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in __12__ hour format
## Returns

string: the time in __24__ hour format

## Input Format

A single string  that represents a time in 12-hour clock format (i.e.: __hh:mm:ssAM__ or __hh:mm:ssPM__).

## Constraints

* All input times are valid

## Sample Input
``` javascript
07:05:45PM
```
## Sample Output
``` javascript
19:05:45
```