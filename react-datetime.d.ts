// Type definitions for react-datetime
// Project: https://github.com/firstskytouch/react-datetime
// Definitions by: Ivan Verevkin <vereva@x-root.org>
//     Updates by: Stanley Chong <stanleyc.sky@gmail.com>

// These are the typings for Typescript 1.8
// for Typescript 2.0+ see DateTime.d.ts

//// <reference path="../moment/moment-node.d.ts" />

declare module ReactDatetime {
  import React = __React;
  // import * as moment from 'moment';

  export interface DatetimepickerProps {
    /*
     Represents the selected date by the component, in order to use it as a controlled component.
     This prop is parsed by moment.js, so it is possible to use a date string or a moment.js date.
     */
    value?: Date;
    /*
     Represents the selected date for the component to use it as a uncontrolled component.
     This prop is parsed by moment.js, so it is possible to use a date string or a moment.js date.
     */
    initialValue?: Date;
    /*
     Define the month/year/decade/time which is viewed on opening the calendar.
     This prop is parsed by Moment.js, so it is possible to use a date `string` or a `moment` object.
     */
    initialViewDate?: Date;
    /*
     The default view to display when the picker is shown for the first time. ('years', 'months', 'days', 'time')
     */
    initialViewMode?: string;
    /*
      In the calendar we can navigate through years and months without actualling updating the selected view. Only 
      when we get to one view called the "updating view", we make a selection there and the value gets updated, 
      triggering an `onChange` event. 
      By default the updating view will get guessed by using the `dateFormat` so if our dates only show months 
      and never days, the update is done in the `months` view. If we set `updateOnView="time"` selecting a day 
      will navigate to the time view. The time view always updates the selected date, never navigates. 
      If `closeOnSelect={ true }`, making a selection in the view defined by `updateOnView` will close the calendar.
    */
    updateOnView?: string;
    /*
     Defines the format for the date. It accepts any moment.js date format.
     If true the date will be displayed using the defaults for the current locale.
     If false the datepicker is disabled and the component can be used as timepicker.
     */
    dateFormat?: boolean|string;
    /*
     Defines the format for the time. It accepts any moment.js time format.
     If true the time will be displayed using the defaults for the current locale.
     If false the timepicker is disabled and the component can be used as datepicker.
     */
    timeFormat?: boolean|string;
    /*
     Whether to show an input field to edit the date manually.
     */
    input?: boolean;
    /*
     Whether to open or close the picker. If not set react-datetime will open the
     datepicker on input focus and close it on click outside.
     */
    open?: boolean;
    /*
     Manually set the locale for the react-datetime instance.
     Moment.js locale needs to be loaded to be used, see i18n docs.
     */
    locale?: string;
    /*
     Whether to interpret input times as UTC or the user's local timezone.
     */
    utc?: boolean;
    /*
     When specified, input time values will be displayed in the given time zone. Otherwise they will default
     to the user's local timezone (unless `utc` specified).
     */
    displayTimeZone?: string;
    /*
     Callback trigger when the date changes. The callback receives the selected `moment` object as
     only parameter, if the date in the input is valid. If the date in the input is not valid, the
     callback receives the value of the input (a string).
     */
    onChange?: (momentOrInputString: string|any) => void;
    /*
     Callback trigger for when the user opens the datepicker.
     */
    onOpen?: () => void;
    /*
     Callback trigger for when the datepicker is closed.
     The callback receives the selected `moment` object as only parameter, if the date in the input
     is valid. If the date in the input is not valid, the callback receives the value of the
     input (a string).
     */
    onClose?: (momentOrInputString : string|any) => void;
    /*
     Callback trigger when the view mode changes. The callback receives the selected view mode
     string ('years', 'months', 'days', 'time') as only parameter.
    */
    onNavigate?: (viewMode: string) => void;
    /*
    Allows to intercept a change of the calendar view. The accepted function receives the view 
    that it's supposed to navigate to, the view that is showing currently and the date currently 
    shown in the view. Return a viewMode ( default ones are `years`, `months`, `days` or `time`) to 
    navigate to it. If the function returns a "falsy" value, the navigation is stopped and we will 
    remain in the current view.
    */
    onBeforeNavigate?: (nextView: string, currentView: string, viewDate: Moment) => string;
    /*
      Callback trigger when the user navigates to the previous month, year or decade.
      The callback receives the amount and type ('month', 'year') as parameters.
     */
    onNavigateBack?: (amount: number, type: string) => void;
    /*
      Callback trigger when the user navigates to the next month, year or decade.
      The callback receives the amount and type ('month', 'year') as parameters.
     */
    onNavigateForward?: (amount: number, type: string) => void;
    /*
     Extra class names for the component markup.
     */
    className?: string;
    /*
     Defines additional attributes for the input element of the component.
     */
    inputProps?: Object;
    /*
      Customize the way the calendar is rendered. The accepted function receives view mode that
      is going to be rendered ('years', 'months', 'days', 'time') and a function to render the default
      view of react-datetime, this way it's possible to wrap the original view adding our own markup or
      override it completely with our own code.
    */
    renderView?: (viewMode: string, renderCalendar: Function) => React.Component<any, any>;
    /*
     Replace the rendering of the input element. The accepted function has openCalendar
     (a function which opens the calendar) and the default calculated props for the input.
     Must return a React component or null.
     */
    renderInput?: (props: Object, openCalendar: Function, closeCalendar: Function) => React.Component<any, any>;
    /*
     Define the dates that can be selected. The function receives (currentDate, selectedDate)
     and should return a true or false whether the currentDate is valid or not. See selectable dates.
     */
    isValidDate?: (currentDate: any, selectedDate: any) => boolean;
    /*
     Customize the way that the days are shown in the day picker. The accepted function has
     the selectedDate, the current date and the default calculated props for the cell,
     and must return a React component. See appearance customization
     */
    renderDay?: (props: any, currentDate: any, selectedDate: any) => React.Component<any, any>;
    /*
     Customize the way that the months are shown in the month picker.
     The accepted function has the selectedDate, the current date and the default calculated
     props for the cell, the month and the year to be shown, and must return a
     React component. See appearance customization
     */
    renderMonth?: (props: any, month: number, year: number, selectedDate: any) => React.Component<any, any>;
    /*
     Customize the way that the years are shown in the year picker.
     The accepted function has the selectedDate, the current date and the default calculated
     props for the cell, the year to be shown, and must return a React component.
     See appearance customization
     */
    renderYear?: (props: any, year: number, selectedDate: any) => React.Component<any, any>;
    /*
     Whether to use moment's strict parsing when parsing input.
     */
    strictParsing?: boolean;
    /*
    When true and the input is focused, pressing the tab key will close the datepicker.
    */
    closeOnTab?: boolean;
    /*
     When true, once the day has been selected, the react-datetime will be automatically closed.
     */
    closeOnSelect?: boolean;
    /*
     Allow to add some constraints to the time selector. It accepts an object with the format
     {hours:{ min: 9, max: 15, step:2}} so the hours can't be lower than 9 or higher than 15, and
     it will change adding or subtracting 2 hours everytime the buttons are clicked. The constraints
     can be added to the hours, minutes, seconds and milliseconds.
    */
    timeConstraints?: Object;
    /*
     When true the picker get closed when clicking outside of the calendar or the input box. When false, it stays open.
     */
    closeOnClickOutside?: boolean;
  }

  interface DatetimeComponent extends React.ComponentClass<DatetimepickerProps> {
  }
}

declare module 'react-datetime' {
  var DateTime: ReactDatetime.DatetimeComponent;
  export = DateTime;
}
