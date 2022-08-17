let calendar_html;
let calendar_view = "";
let calendar_view_tablet = "";
let calendar_view_phone = "";

//jQuery(".fc-widget-content").css('border', '0px solid');
// function GetCalendarDateRange() {
//   var calendar = $('#calendar').fullCalendar('getCalendar');
//   var view = calendar.view;
//   var start = view.start._d;
//   var end = view.end._d;
//   var dates = { start: start, end: end };
//   return dates;
// }
// jQuery(".fc-button-prev").on("click", function () {
//   alert("Hello! I am an alert box!!");
// });
jQuery(document).ready(function ($) {
  let image_url=myAjax.image_url_path;
  jQuery('.fc-view-container').append("<div class='fc-list-empty-wrap2'><div class='fc-list-empty-wrap1'><div class='fc-list-empty'><div class='spinner_calendar'><div class='bounce_calendar1'></div><div class='bounce_calendar2'></div><div class='bounce_calendar3'></div></div>Events are loading, please wait...</div></div></div>");
  // jQuery('.fc-button-next span').click(function () {
  //   alert('nextis clicked, do something');
  // });
   jQuery('.fc-dayGridMonth-view, .fc-timeGridDay-view, .fc-timeGridWeek-view').addClass("ecs_is_loading_check");
  console.log(calendar.view);
  jQuery(window).on('resize', function () {

    // var screenWidth = jQuery(this).width();
    if (jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3") == true ||
      jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_4") == true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_5") == true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_6") == true || screen.width < 767) {

      jQuery(".fc-toolbar").css("display", "block");
      jQuery(".fc-day-number").css("font-size", "17px");
      jQuery(".fc-day-header").css("font-size", "12px");


    }
    else {
      jQuery(".fc-toolbar").css("display", "flex");
      jQuery(".fc-day-number").css("font-size", "24px");
      jQuery(".fc-day-header").css("font-size", "15px");
    }
  });
  jQuery('body').on('click', ('button.fc-next-button,button.fc-prev-button'), function () {
    // alert('nextis clicked, do something');
    if (jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3") == true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_4") == true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_5") == true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_6") == true || screen.width < 767) {

      jQuery(".fc-toolbar").css("display", "block");
      jQuery(".fc-day-number").css("font-size", "17px");
      jQuery(".fc-day-header").css("font-size", "12px");
    }
    else {
      jQuery(".fc-toolbar").css("display", "flex");
      jQuery(".fc-day-number").css("font-size", "24px");
      jQuery(".fc-day-header").css("font-size", "15px");
    }
  });
});
//'dayGridMonth,timeGridWeek,timeGridDay'


document.addEventListener("DOMContentLoaded", function () {
 // if (jQuery("#calendar").length <= 0) return false;
  var language = document.getElementsByTagName("html")[0].getAttribute("lang");

  var calendarEl = document.getElementById("calendar");
  
  if (myAjax.show_month_view_button == 'on') {
    calendar_view += "dayGridMonth,";
  }
  if (myAjax.show_week_view_button == 'on') {
    calendar_view += "timeGridWeek,";
  }


  if (myAjax.show_day_view_button == 'on') {
    calendar_view += "timeGridDay,";
  }
  if (myAjax.show_list_view_button == 'on') {
    calendar_view += "listWeek,";
  }
  var date1 = new Date();
  var date2 = new Date();
  // var get_end_month = myAjax.event_end_date;
  var get_end_month = parseInt(myAjax.event_end_date) + 1;
  var get_start_month = parseInt(myAjax.event_start_date);
  // // console.log(myAjax.event_end_date);
  get_end_month = new Date(date1.setMonth(date1.getMonth() + parseInt(get_end_month), 0));
  get_start_month = new Date(date2.setMonth(date2.getMonth() - parseInt(get_start_month), 1));
  // console.log(calendar.state.dateProfile.currentRange);
  // console.log(get_start_month.getTime());
  // var get_end_month_date = get_end_month.getTime();
  // var get_start_month_date = get_start_month.getTime();

  // if (calendar_current_date.getTime() > get_end_month.getTime()) {
  //   jQuery(".fc-next-button").css("pointer-events", "none");

  // }
  // if (calendar_current_date.getTime() < get_end_month.getTime()) {
  //   jQuery(".fc-next-button").css("display", "block");
  // }
  jQuery('body').on('click', 'button.fc-prev-button', function () {
    jQuery(".fc-prev-button").addClass("ecs_next_class");
    // alert('prev is clicked, do something');
    // console.log(calendar.state.dateProfile.currentRange.);
    var calendar_current_date = new Date(calendar.view.title);
    // console.log(calendar_current_date);
    // console.log(get_start_month);
    // //var calendar_current_date_time = calendar_current_date.getTime();
    //  console.log(calendar.view.props.dateProfile.currentRange.start.getTime() > get_end_month.getTime() ? "jj" : "kk");
    if (calendar_current_date.getTime() < get_start_month.getTime()) {
      if (myAjax.hide_month_range == "disable") {
        jQuery(".fc-prev-button").css("pointer-events", "none");
      }
    }
    if (calendar_current_date.getTime() < get_end_month.getTime()) {
      if (myAjax.hide_month_range == "disable") {
        jQuery(".fc-next-button").css("pointer-events", "visible");
      }
    }
    // if (calendar_current_date.getTime() > get_start_month.getTime()) {
    //   jQuery(".fc-prev-button").css("pointer-events", "visible");
    // }
    if (calendar.view.props.dateProfile.currentRange.start.getTime() < get_start_month.getTime()) {
      if (myAjax.hide_month_range == "disable") {
        jQuery(".fc-prev-button").css("pointer-events", "none");
      }
      if (myAjax.hide_month_range == "hide") {
        jQuery('.fc-view-container').append("<div class='fc-list-empty-wrap2'><div class='fc-list-empty-wrap1'><div class='fc-list-empty'>Sorry, there are no more events at this time</div></div></div>");
        jQuery('.fc-dayGridMonth-view, .fc-timeGridDay-view, .fc-timeGridWeek-view').addClass("ecs_is_loading_check");
      }
    }
    if (calendar.view.props.dateProfile.currentRange.start.getTime() > get_start_month.getTime()) {
      jQuery(".fc-next-button").css("pointer-events", "visible");
      if (myAjax.hide_month_range == "hide") {
        jQuery('.fc-list-empty-wrap2').remove();
        jQuery('.fc-dayGridMonth-view, .fc-timeGridDay-view, .fc-timeGridWeek-view').removeClass("ecs_is_loading_check");
      }
    }

  });
  jQuery('body').on('click', 'button.fc-next-button', function () {
    // alert('prev is clicked, do something');
    // console.log(calendar.state.dateProfile.currentRange.);
    var calendar_current_date = new Date(calendar.view.title);
    // console.log(calendar.view.props.dateProfile.currentRange.end);
    // console.log(get_end_month);
    // //var calendar_current_date_time = calendar_current_date.getTime();
    // console.log(calendar_current_date);
    // console.log(calendar.view.props.dateProfile.currentRange.end.getTime() > get_end_month.getTime() ? "jj" : "kk");
    // if (calendar_current_date.getTime() < get_start_month.getTime()) {
       jQuery(".fc-next-button").addClass("ecs_next_class");

    // }
    if (calendar_current_date.getTime() > get_start_month.getTime()) {
      if (myAjax.hide_month_range == "disable") {
        jQuery(".fc-prev-button").css("pointer-events", "visible");
      }
    }
    if (calendar_current_date.getTime() > get_end_month.getTime()) {
      if (myAjax.hide_month_range == "disable") {
        jQuery(".fc-next-button").css("pointer-events", "none");
      }
      //  calendar.el.childNodes[1].querySelector('.fc-view-container').innerHTML = "<div class='fc-list-empty-wrap2'><div class='fc-list-empty-wrap1'><div class='fc-list-empty'>No events to display</div></div></div>";
      //  jQuery('.fc-view-container').append("<div class='fc-list-empty-wrap2'><div class='fc-list-empty-wrap1'><div class='fc-list-empty'>Sorry, there are no more events at this time</div></div></div>");
      jQuery('.fc-dayGridMonth-view, .fc-timeGridDay-view, .fc-timeGridWeek-view').addClass("ecs_is_loading_check");
    }
    if (calendar.view.props.dateProfile.currentRange.end.getTime() > get_start_month.getTime()) {
      if (myAjax.hide_month_range == "disable") {
        jQuery(".fc-prev-button").css("pointer-events", "visible");
      }
      if (myAjax.hide_month_range == "hide") {
        jQuery('.fc-list-empty-wrap2').remove();
        jQuery('.fc-dayGridMonth-view, .fc-timeGridDay-view, .fc-timeGridWeek-view').removeClass("ecs_is_loading_check");
      }
    }
    if (calendar.view.props.dateProfile.currentRange.end.getTime() > get_end_month.getTime()) {
      if (myAjax.hide_month_range == "disable") {
        jQuery(".fc-next-button").css("pointer-events", "none");
      }
      if (myAjax.hide_month_range == "hide") {
        jQuery('.fc-view-container').append("<div class='fc-list-empty-wrap2'><div class='fc-list-empty-wrap1'><div class='fc-list-empty'>Sorry, there are no more events at this time</div></div></div>");
        jQuery('.fc-dayGridMonth-view, .fc-timeGridDay-view, .fc-timeGridWeek-view').addClass("ecs_is_loading_check");
      }
    }
  });




  if (myAjax.show_month_view_button_tablet == 'on' || (myAjax.show_month_view_button_tablet == "" && myAjax.show_month_view_button=="on")) {
    calendar_view_tablet += "dayGridMonth,";
  }
  if (myAjax.show_week_view_button_tablet == 'on' || (myAjax.show_week_view_button_tablet == ""&& myAjax.show_week_view_button=="on")) {
    calendar_view_tablet += "timeGridWeek,";
  }


  if (myAjax.show_day_view_button_tablet == 'on' || (myAjax.show_day_view_button_tablet == "" && myAjax.show_day_view_button=="on")) {
    calendar_view_tablet += "timeGridDay,";
  }
  if (myAjax.show_list_view_button_tablet == 'on' || (myAjax.show_list_view_button_tablet == "" && myAjax.show_list_view_button=="on")) {
    calendar_view_tablet += "listWeek,";
  }


  if (myAjax.show_month_view_button_phone == 'on' || (myAjax.show_month_view_button_phone == "" && myAjax.show_month_view_button=="on")) {
    calendar_view_phone += "dayGridMonth,";
  }
  if (myAjax.show_week_view_button_phone == 'on' || (myAjax.show_week_view_button_phone == "" && myAjax.show_week_view_button=="on")) {
    calendar_view_phone += "timeGridWeek,";
  }


  if (myAjax.show_day_view_button_phone == 'on' || (myAjax.show_day_view_button_phone == "" && myAjax.show_day_view_button=="on")) {
    calendar_view_phone += "timeGridDay,";
  }
  if (myAjax.show_list_view_button_phone == 'on' || (myAjax.show_list_view_button_phone == "" && myAjax.show_list_view_button=="on")) {
    calendar_view_phone += "listWeek,";
  }
  var week_start_on = "";
  if (myAjax.week_start_on == "Sunday") { week_start_on = 0 } if (myAjax.week_start_on == "Monday") { week_start_on = 1 } if (myAjax.week_start_on == "Tuesday") { week_start_on = 2 }
  if (myAjax.week_start_on == "Wednesday") { week_start_on = 3 } if (myAjax.week_start_on == "Thursday") { week_start_on = 4 } if (myAjax.week_start_on == "Friday") { week_start_on = 5 } if (myAjax.week_start_on == "Saturday") { week_start_on = 6 }
  calendar_view = calendar_view.slice(0, -1);
  calendar_view_tablet = calendar_view_tablet.slice(0, -1);
  calendar_view_phone = calendar_view_phone.slice(0, -1);
  //console.log(calendar_view.substr(0,-1));
  // console.log(myAjax.button_classes);
  // console.log(calendar_view, "=>dektop");
  // console.log(calendar_view_tablet, "=>tablet");
  // console.log(calendar_view_phone, "=>phone");
  // console.log( myAjax.show_day_view_button_phone==""?"k":"j");
  var hide_past_event = myAjax.hide_past_event == "on" ? new Date() : "";

  var calendar = new FullCalendar.Calendar(calendarEl, {
   
    eventOrder: myAjax.calendar_eventorder,
    displayEventTime: false,
    // eventLimit: 2,
    plugins: ['dayGrid', 'timeGrid', 'list'],
    // selectable: true,
    defaultView: screen.width <= 981 && screen.width >= 767 && myAjax.calendar_default_view_tablet != "" ? myAjax.calendar_default_view_tablet : screen.width <= 766 && myAjax.calendar_default_view_phone != "" ? myAjax.calendar_default_view_phone : myAjax.calendar_default_view,
    //defaultView: myAjax.calendar_default_view,
    fixedWeekCount: false,
    //lazyFatching: true,
    // selectable: true,
    // navLinks: true,
    header: {
      left: 'prev,next today',
      center: 'title',
      right: screen.width <= 981 && screen.width >= 767 ? calendar_view_tablet : screen.width <= 766 ? calendar_view_phone : calendar_view,

    },
    hiddenDays: myAjax.hidden_day,

    firstDay: week_start_on,
    locales: language,
    // validRange: {
    //   start: hide_past_event,
    //   end: "",
    // },
    
    views: {
      dayGridMonth: { // name of view
        columnHeaderFormat: {

          weekday: jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3") == true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_4") == true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_5") == true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_6") == true || screen.width < 767 ? "narrow" : screen.width <= 981 && screen.width >= 767 && myAjax.day_of_the_week_name_tablet != "" ? myAjax.day_of_the_week_name_tablet : myAjax.day_of_the_week_name,
        }
        // other view-specific options here
      }
    },
    // navLinkDayClick: function(date, jsEvent,info) {
    //   alert('Clicked ' + jsEvent);
    //  // console.log(window.info);
    //   // console.log(jsEvent.path[6].innerText);
    //   // return jsEvent;
    //   //console.log(jQuery(".tooltip_main"));
      
    // },
//     dayClick: function(date, jsEvent, view) {
//       alert('Clicked on: ');
//     },

    loading: function(bool) {
     // console.log(e.target);
      if (bool==true) {
     // jQuery('.fc-view-container').append("<div class='fc-list-empty-wrap2'><div class='fc-list-empty-wrap1'><div class='fc-list-empty'>Sorry, there are no more events at this time</div></div></div>");
      }
      // jQuery('body').on('click', 'button.fc-next-button', function (e) {
      //   if (e.target) {
      //       console.log(e.target);
            if(bool==false){ 
        // if(jQuery('.button.fc-prev-button').hasClass("ecs_prev_class")){
        //   alert("joshi");
                                    
        //       // });
        // }
        if(jQuery('button').hasClass("ecs_next_class")){
        //  alert("joshi");
                                  
              // });
        }
        else{
          jQuery('.fc-list-empty-wrap2').remove();
          jQuery('.fc-dayGridMonth-view, .fc-timeGridDay-view, .fc-timeGridWeek-view').removeClass("ecs_is_loading_check");
        }
         }
    // });
     


    },
    // viewRender: function (view, element) {
    //   var b = jQuery('#calendar').fullCalendar('getDate');
    //   alert(b.format('L'));
    // },

    windowResize: function (view) {

    },
  //   eventClick: function(info) {
  //   //s  alert('Event: ' + info.event.title);
  //     //alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
  //    // alert('View: ' + info.view.type);
  // console.log(info);
  //     // change the border color just for fun
  //     info.el.style.borderColor = 'red';
  //   },
//   eventClick: function(info) {
//     // alert('Event: ' + info.event.title);
//     // alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
//     // alert('View: ' + info.view.type);
//     console.log(jQuery('.fc-view-container').append(info.event.extendedProps.html));
//     jQuery('.fc-view-container').append(info.event.extendedProps.html);
//     // change the border color just for fun
//     info.el.style.borderColor = 'red';
//   },
    eventRender: function (info) {
   //   console.log(info);
      //console.log(calendar.el.childNodes[1]);
      //  console.log(myAjax.hidden_day);
      // console.log(info.el.querySelector('tr.fc-list-item'));
      // var newCell = info.el.insertCell(0);
      // var newText = document.createTextNode('Hello');
      // newCell.appendChild(newText);
      // jani=info.event.extendedProps.joshi.slice(2,3);
      //var nextMonth = new FullCalendar.Calendar();
      // console.log(GetCalendarDateRange());
      var date1 = new Date();
      var date2 = new Date();
      // var get_end_month = myAjax.event_end_date;
      var get_end_month = parseInt(myAjax.event_end_date) + 1;
      var get_start_month = parseInt(myAjax.event_start_date);
      // // console.log(myAjax.event_end_date);
      get_end_month = new Date(date1.setMonth(date1.getMonth() + parseInt(get_end_month), 0));
      get_start_month = new Date(date2.setMonth(date2.getMonth() - parseInt(get_start_month), 1));
      //  console.log(calendar.state.dateProfile.currentRange);
      // console.log(get_start_month.getTime());
      // var get_end_month_date = get_end_month.getTime();
      // var get_start_month_date = get_start_month.getTime();
      // var calendar_current_date = new Date(calendar.view.title);
      // console.log(calendar_current_date);
      // var calendar_current_date_time = calendar_current_date.getTime();
      // console.log(calendar_current_date.getTime() > get_end_month.getTime() ? "jj" : "kk");
      // if (calendar_current_date.getTime() < get_start_month.getTime()) {
      //   jQuery(".fc-prev-button").css("pointer-events", "none");

      // }
      // if (calendar_current_date.getTime() > get_start_month.getTime()) {
      //   jQuery(".fc-prev-button").css("pointer-events", "visible");
      // }
      // if (calendar_current_date.getTime() > get_end_month.getTime()) {
      //   jQuery(".fc-next-button").css("pointer-events", "none");

      // }
      // if (calendar_current_date.getTime() < get_end_month.getTime()) {
      //   jQuery(".fc-next-button").css("display", "block");
      // }

      // if (jQuery('.fc-dayGridMonth-view').has('.fc-event').length === 0) {
      //   jQuery(".fc-prev-button").css("background", "red");
      // } else {
      //   //  hideEmptyCalendarMessage();
      // }
      //console.log(jQuery('.fc-dayGridMonth-view').has('.fc-event'));
      if (jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3") == true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_4") == true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_5") == true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_6") == true || screen.width < 767 && calendar.view.type != 'timeGridDay') {
        jQuery(info.el).children(".fc-content").css("visibility", "hidden").css("width", "10px").css("height", "10px");
      }
      if (calendar.view.type == 'timeGridDay' && screen.width < 767) {
        jQuery(info.el).children(".fc-content").attr('style', "visibility: visible !important").css("width", "auto").css("height", "auto");

      }
      else { jQuery(info.el).children(".fc-content").css("visibility", "visible").css("width", "auto").css("height", "auto"); }
      if (calendar.view.type == 'dayGridMonth' || calendar.view.type == 'timeGridWeek' || calendar.view.type == 'timeGridDay') {
        if (info.event.extendedProps.event_start_time == null) {
          if (myAjax.show_calendar_event_date_tablet == "on" || myAjax.show_calendar_event_date_tablet == "") {
            info.el.querySelector('.fc-title').innerHTML = myAjax.show_calendar_event_date_tablet == "on" ? '<span class="fc-calendar-time">' + info.event.extendedProps.allDayEvent + '</span></br><span class="fc-calendar-title">' + info.event.title + "</span>" : '<span class="fc-calendar-title">' + info.event.title + "</span>";
          }
          if (myAjax.show_calendar_event_date_phone == "on" || myAjax.show_calendar_event_date_phone == "") {
            info.el.querySelector('.fc-title').innerHTML = myAjax.show_calendar_event_date_phone == "on" ? '<span class="fc-calendar-time">' + info.event.extendedProps.allDayEvent + '</span></br><span class="fc-calendar-title">' + info.event.title + "</span>" : '<span class="fc-calendar-title">' + info.event.title + "</span>";
          }
          if (myAjax.show_calendar_event_date == "on" ) {
            info.el.querySelector('.fc-title').innerHTML = myAjax.show_calendar_event_date == "on" ? '<span class="fc-calendar-time">' + info.event.extendedProps.allDayEvent + '</span></br><span class="fc-calendar-title">' + info.event.title + "</span>" : '<span class="fc-calendar-title">' + info.event.title + "</span>";
          }
        }

        else {
          info.el.querySelector('.fc-title').innerHTML = myAjax.show_calendar_event_date == "on" ? '<span class="fc-calendar-time">' + info.event.extendedProps.event_start_time + info.event.extendedProps.event_end_time + '</span></br><span class="fc-calendar-title">' + info.event.title + "</span>" : '<span class="fc-calendar-title">' + info.event.title + "</span>";
        }
      }

      // if(calendar.view.type=='timeGridWeek'||calendar.view.type=='timeGridDay'){
      //   jQuery("td").first(".fc-widget-content").css('border', 'none');
      // }
      if (calendar.view.type == 'listWeek') {
        //info.el.querySelector('.fc-list-item').innerHTML=info.event.title;
        if (info.event.extendedProps.event_start_time == null) {
          if (myAjax.show_calendar_event_date_tablet == "on" || (myAjax.show_calendar_event_date_tablet == "" && myAjax.show_calendar_event_date == "on") && screen.width <= 981 && screen.width >= 767) {
            jQuery(info.el).prepend('<td class="fc-list-item-time fc-widget-content">' + info.event.extendedProps.calallday + '</td>');
          }
          if (myAjax.show_calendar_event_date == "on" && screen.width >= 981) {
            jQuery(info.el).prepend('<td class="fc-list-item-time fc-widget-content">' + info.event.extendedProps.calallday + '</td>');
          }
          if (myAjax.show_calendar_event_date_phone == "on" || (myAjax.show_calendar_event_date_phone == "" && myAjax.show_calendar_event_date == "on") && screen.width < 767) {
            jQuery(info.el).prepend('<td class="fc-list-item-time fc-widget-content">' + info.event.extendedProps.calallday + '</td>');
          }
          else {
            jQuery(info.el).prepend('<td class="fc-list-item-time fc-widget-content"> </td>');
          }
        }
        else {
          if (myAjax.show_calendar_event_date_tablet == "on" || (myAjax.show_calendar_event_date_tablet == "" && myAjax.show_calendar_event_date == "on") && screen.width <= 981 && screen.width >= 767) {
            jQuery(info.el).prepend('<td class="fc-list-item-time fc-widget-content">' + info.event.extendedProps.event_start_time + info.event.extendedProps.event_end_time + '</td>');
          }
          if (myAjax.show_calendar_event_date_phone == "on" || (myAjax.show_calendar_event_date_phone == "" && myAjax.show_calendar_event_date == "on") && screen.width < 767) {
            jQuery(info.el).prepend('<td class="fc-list-item-time fc-widget-content">' + info.event.extendedProps.event_start_time + info.event.extendedProps.event_end_time + '</td>');
          }
          if (myAjax.show_calendar_event_date == "on" && screen.width >= 981) {
            jQuery(info.el).prepend('<td class="fc-list-item-time fc-widget-content">' + info.event.extendedProps.event_start_time + info.event.extendedProps.event_end_time + '</td>');
          }
          else {
            jQuery(info.el).prepend('<td class="fc-list-item-time fc-widget-content"> </td>');
          }
        }
        info.el.querySelector('.fc-list-item-title').innerHTML = info.event.title;
      }
      if (calendar.view.type == 'timeGridDay') {
        info.event.start = info.event.extendedProps.event_start_date + "T" + info.event.extendedProps.event_start_time;
      }


      if (info.event.extendedProps.category_data !== false) {
        for (let i = 0; i < info.event.extendedProps.category_data.length; i++) {
          jQuery(info.el).addClass(info.event.extendedProps.category_data[i].slug + '_dec_category');
        }
      }
      //  jQuery(info.el).addClass("fc-event-dot");
      if (info.event.extendedProps.featured_class !== "") {
        jQuery(info.el).addClass(info.event.extendedProps.featured_class);
        // console.log( jQuery(info.el).addClass(info.event.extendedProps.featured_class));
        // for(let i = 0; i < info.event.extendedProps.featured_class.length; i++){ 
        //   jQuery(info.el).addClass(info.event.extendedProps.featured_class[i].slug);
        //   console.log( jQuery(info.el).addClass(info.event.extendedProps.featured_class[i].slug));
        // }
      }
    //  console.log(nsfields.html);
      // var view = calendar.view;
      // console.log(view.type);
      // alert("The view's title is " + view.title);
      // jQuery(info.el).children(".fc-content").addClass(info.event.extendedProps.cat[0]);
      var info = info;
      var nsfields = info.event.extendedProps;

      if (myAjax.show_tooltip == "on") {
        var tooltip = new Tooltip(info.el, {
          title: nsfields.html,
          html: true,
          placement: "auto",
          trigger: "hover",
          container: "body"


        });

      }


    },
    events: {
      // nextDayThreshold: '11:59:00',
      // allDay:false,

      url: myAjax.ajaxurl + "?action=fetch_Events&dateformat=" + myAjax.date_format + "&timeformat=" + myAjax.time_format + "&timezone=" + myAjax.show_time_zone + "&venue=" + myAjax.show_venue + "&location=" + myAjax.show_location + "&street=" + myAjax.show_address + "&locality=" + myAjax.show_locality + "&postal=" + myAjax.show_postal +
        "&country=" + myAjax.show_country + "&organizer=" + myAjax.show_organizer + "&categories=" +
        myAjax.included_categories + "&show_tooltip="
        + myAjax.show_tooltip + "&show_image=" + myAjax.show_image + "&thumbnail_width=" + myAjax.thumbnail_width
        + "&thumbnail_height=" + myAjax.thumbnail_height + "&show_icon_label=" + myAjax.show_icon_label + "&stack_label_icon=" + myAjax.stack_label_icon + "&show_colon=" + myAjax.show_colon + "&show_excerpt=" + myAjax.show_excerpt + "&show_price="
        + myAjax.show_price + "&show_title=" + myAjax.show_title + "&show_date=" + myAjax.show_date + "&show_time="
        + myAjax.show_time + "&calendar_eventorder=" + myAjax.calendar_eventorder + "&id=" + myAjax.id +
        "&show_month_view_button=" + myAjax.show_month_view_button + "&show_list_view_button=" + myAjax.show_list_view_button + "&show_week_view_button=" + myAjax.show_week_view_button + "&show_day_view_button="
        + myAjax.show_day_view_button + "&show_month_view_button_tablet=" + myAjax.show_month_view_button_tablet +
        "&show_list_view_button_tablet=" + myAjax.show_list_view_button_tablet + "&show_week_view_button_tablet=" +
        myAjax.show_week_view_button_tablet + "&show_day_view_button_tablet=" + myAjax.show_day_view_button_tablet +
        "&show_month_view_button_phone=" + myAjax.show_month_view_button_phone + "&show_list_view_button_phone=" +
        myAjax.show_list_view_button_phone + "&show_week_view_button_phone=" + myAjax.show_week_view_button_phone +
        "&show_day_view_button_phone=" + myAjax.show_day_view_button_phone + "&categslug=" + myAjax.categslug +
        "&categId=" + myAjax.categId + "&show_tooltip_category="
        + myAjax.show_tooltip_category + "&enable_category_link=" + myAjax.enable_category_link + "&custom_category_link_target=" + myAjax.custom_category_link_target
        + "&show_tooltip_weburl=" + myAjax.show_tooltip_weburl + "&hidden_day=" + myAjax.hidden_day + "&week_start_on=" + myAjax.week_start_on + "start="
        + myAjax.start + "&show_calendar_event_date=" + myAjax.show_calendar_event_date + "&calendar_default_view=" +
        myAjax.calendar_default_view + "&calendar_default_view_tablet=" + myAjax.calendar_default_view_tablet +
        "&calendar_default_view_phone=" + myAjax.calendar_default_view_phone + "&show_recurring_event=" +
        myAjax.show_recurring_event + '&hide_past_event=' + myAjax.hide_past_event + "&event_start_date=" + myAjax.event_start_date + "&event_end_date="
        + myAjax.event_end_date + "&day_of_the_week_name=" + myAjax.day_of_the_week_name +
        "&single_event_page_link=" + myAjax.single_event_page_link + "&disable_event_title_link="
        + myAjax.disable_event_title_link + "&disable_event_image_link=" + myAjax.disable_event_image_link
        + "&disable_event_calendar_title_link=" + myAjax.disable_event_calendar_title_link +
        "&custom_event_link_url=" + myAjax.custom_event_link_url + "&custom_event_link_target="
        + myAjax.custom_event_link_target + "&website_link=" + myAjax.website_link + "&custom_website_link_text="
        + myAjax.custom_website_link_text + "&custom_website_link_target=" + myAjax.custom_website_link_target +
        "&show_end_time=" + myAjax.show_end_time + "&included_organizer=" + myAjax.included_organizer + "&included_organizer_check="
        + myAjax.included_organizer_check + "&included_venue=" + myAjax.included_venue + "&included_venue_check="
        + myAjax.included_venue_check + "&enable_organizer_link=" + myAjax.enable_organizer_link + "&custom_organizer_link_target=" +
        myAjax.custom_organizer_link_target + "&enable_venue_link=" + myAjax.enable_venue_link + "&custom_venue_link_target=" +
        myAjax.custom_venue_link_target + "&state=" + myAjax.show_state + "&venue_id=" + myAjax.venue_id +
        "&organizer_id=" + myAjax.organizer_id + "&event_selection=" + myAjax.event_selection + "&show_postponed_canceled_event=" +
        myAjax.show_postponed_canceled_event + "&show_virtual_event=" + myAjax.show_virtual_event+ "&show_virtual_event=" + myAjax.show_virtual_event + "&show_hybrid_event=" + myAjax.show_hybrid_event + "&limit_event=" + myAjax.limit_event + "&hide_month_range=" + myAjax.hide_month_range + "&day_of_the_week_name_tablet=" + myAjax.day_of_the_week_name_tablet + "&button_classes=" + myAjax.button_classes + "&disable_event_button_link=" + myAjax.disable_event_button_link
        + "&custom_icon=" + myAjax.custom_icon + "&custom_icon_tablet=" + myAjax.custom_icon_tablet + "&custom_icon_phone=" + myAjax.custom_icon_phone + "&view_more_text=" + myAjax.view_more_text+"&image_url_path="+myAjax.image_url_path+"&button_classes="+myAjax.button_classes+"&custom_icon="+myAjax.custom_icon+"&custom_icon_tablet="+myAjax.custom_icon_tablet+"&custom_icon_phone="+myAjax.custom_icon_phone
        +"&view_more_text="+myAjax.view_more_text+"&module_class="+myAjax.module_class,

      type: 'POST',
      // extraParams: function() {
      //   return {
      //     cachebuster: new Date().valueOf()
      //   };
      // },
      // selectable: true,
      // selectHelper:true,
      // editable: true,
      success: function () {
        // alert("joshi");
      },
      error: function () {
        alert("There was an error while fetching events.");
      },

    },
    // dateClick: function(info) {
    //   alert('clicked ' + info.dateStr);
    // },
    // select: function(info) {
    //   alert('selected ' + info.startStr + ' to ' + info.endStr);
    // },

  });

  // if(jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3") == true){
  //   jQuery(".fc-content").css("visibility","hidden"). css("width","10px").css("height","10px");
  //   console.log("hhh");
  // }
  
  calendar.render();
  calendar.setOption('locale', language);

});
