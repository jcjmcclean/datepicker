# Datepicker
Datepicker directive wrapper for AngularJS moment picker.

Created to ensure only 1 date goes in and only 1 date comes out and both dates are in the same format. When using moment-picker on it's own you end up with 2 date objects.

Supports the following optional attributes:
 - `ng-model` - Bound date
 - `placeholder` - HTML placeholder attribute
 - `min-date` - moment-picker min-date attribute
 - `required` - HTML required attribute (only supports true/false)
 - `moment-format` - Date format for input to display
 - `max-view` - Maximum date view (hour/day/month/etc)

Feel free to add more optional attributes.

```html
<date-picker
        ng-model="manageDeputy.details.end_date"
        required="true"
        moment-format="HH:mm on Do MMM YYYY"
        max-view="minute"
></date-picker>
```
