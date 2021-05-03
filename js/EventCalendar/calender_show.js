let html;
let calendar_view="";
//console.log(myAjax.start);
//jQuery(".fc-widget-content").css('border', '0px solid');
jQuery(window).on('resize',function(){
 // var screenWidth = jQuery(this).width();
  if(jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3")==true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_4")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_5")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_6")==true || screen.width < 767){

    jQuery(".fc-toolbar").css("display","block");
jQuery(".fc-day-number").css("font-size","17px");
jQuery(".fc-day-header").css("font-size","12px");


  }
  else{ 
  jQuery(".fc-toolbar").css("display","flex");
  jQuery(".fc-day-number").css("font-size","24px");
  jQuery(".fc-day-header").css("font-size","15px");
}
});
  jQuery('body').on('click', ('button.fc-next-button,button.fc-prev-button'), function() {
       if(jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3")==true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_4")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_5")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_6")==true||screen.width<767){

  jQuery(".fc-toolbar").css("display","block");
  jQuery(".fc-day-number").css("font-size","17px");
  jQuery(".fc-day-header").css("font-size","12px");
       }
       else{
        jQuery(".fc-toolbar").css("display","flex");
    jQuery(".fc-day-number").css("font-size","24px");
    jQuery(".fc-day-header").css("font-size","15px");
       }
  });  
  //'dayGridMonth,timeGridWeek,timeGridDay'


document.addEventListener("DOMContentLoaded", function() {
  if (jQuery("#calendar").length <= 0) return false;
  var language = document.getElementsByTagName("html")[0].getAttribute("lang");
  var calendarEl = document.getElementById("calendar");
  if(myAjax.show_month_view_button=='on'){
    calendar_view+="dayGridMonth,";
  }
  if(myAjax.show_week_view_button=='on'){
    calendar_view+="timeGridWeek,";
  }

 
  if(myAjax.show_day_view_button=='on'){
    calendar_view+="timeGridDay,";
  }
  if(myAjax.show_list_view_button=='on'){
    calendar_view+="listWeek,";
  }
 
  //console.log(calendar_view);
  calendar_view=calendar_view.slice(0,-1);
  //console.log(calendar_view.substr(0,-1));
  //console.log(Month_view);
  var calendar = new FullCalendar.Calendar(calendarEl, {
    eventOrder: myAjax.calendar_eventorder,
  displayEventTime: false,
  plugins: [ 'dayGrid','timeGrid','list'],
    defaultView:myAjax.calendar_default_view,
    fixedWeekCount:false,
    header: {
      left: 'prev,next today',
      center: 'title',
      right:calendar_view,
     
      },
      firstDay:parseInt(myAjax.week_start_on),
      locales: language,
      views: {
        dayGridMonth: { // name of view
          columnHeaderFormat:{
            weekday:jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3")==true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_4")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_5")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_6")==true || screen.width<767?"narrow":"short",
          }
          // other view-specific options here
        }
      },
   
  
     windowResize: function(view) {

     },
    eventRender: function(info) {
      //console.log(myAjax.show_week_view_button);
      // console.log(info.el.querySelector('tr.fc-list-item'));
      // var newCell = info.el.insertCell(0);
      // var newText = document.createTextNode('Hello');
      // newCell.appendChild(newText);
     // jani=info.event.extendedProps.joshi.slice(2,3);
    if(jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3")==true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_4")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_5")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_6")==true || screen.width < 767){
     jQuery(info.el).children(".fc-content").css("visibility","hidden").css("width","10px").css("height","10px");
     }
     else{ jQuery(info.el).children(".fc-content").css("visibility","visible").css("width","auto").css("height","auto");}
if(calendar.view.type=='dayGridMonth'|| calendar.view.type=='timeGridWeek'||calendar.view.type=='timeGridDay'){
      if(info.event.extendedProps.event_start_time==null){
        info.el.querySelector('.fc-title').innerHTML =myAjax.show_calendar_event_date=="on"?'<span class="fc-calendar-time">'+info.event.extendedProps.allDayEvent+'</span></br><span class="fc-calendar-title">'+info.event.title + "</span>":'<span class="fc-calendar-title">'+info.event.title + "</span>";
      }

      else{
        info.el.querySelector('.fc-title').innerHTML =myAjax.show_calendar_event_date=="on"?'<span class="fc-calendar-time">'+ info.event.extendedProps.event_start_time+info.event.extendedProps.event_end_time+'</span></br><span class="fc-calendar-title">'+info.event.title + "</span>":'<span class="fc-calendar-title">'+info.event.title + "</span>";
        }
    }

    // if(calendar.view.type=='timeGridWeek'||calendar.view.type=='timeGridDay'){
    //   jQuery("td").first(".fc-widget-content").css('border', 'none');
    // }
      if(calendar.view.type=='listWeek'){
        //info.el.querySelector('.fc-list-item').innerHTML=info.event.title;
        if(info.event.extendedProps.event_start_time==null){
        jQuery(info.el).prepend('<td class="fc-list-item-time fc-widget-content">all-day</td>');
        }
        else{
          jQuery(info.el).prepend('<td class="fc-list-item-time fc-widget-content">'+ info.event.extendedProps.event_start_time+info.event.extendedProps.event_end_time+'</td>');
        }
        info.el.querySelector('.fc-list-item-title').innerHTML =info.event.title;
      }
    if(calendar.view.type=='timeGridDay'){
      info.event.start=info.event.extendedProps.event_start_date+"T"+info.event.extendedProps.event_start_time;
    }
//console.log(myAjax.calendar_eventorder);
      if(info.event.extendedProps.category_data !==false){
      for(let i = 0; i < info.event.extendedProps.category_data.length; i++){ 
        jQuery(info.el).addClass(info.event.extendedProps.category_data[i].slug+'_dec_category');
      }
    }
  //  jQuery(info.el).addClass("fc-event-dot");
    if(info.event.extendedProps.featured_class !==""){
      jQuery(info.el).addClass(info.event.extendedProps.featured_class);
     // console.log( jQuery(info.el).addClass(info.event.extendedProps.featured_class));
      // for(let i = 0; i < info.event.extendedProps.featured_class.length; i++){ 
      //   jQuery(info.el).addClass(info.event.extendedProps.featured_class[i].slug);
      //   console.log( jQuery(info.el).addClass(info.event.extendedProps.featured_class[i].slug));
      // }
    }
    // var view = calendar.view;
    // console.log(view.type);
   // alert("The view's title is " + view.title);
      // jQuery(info.el).children(".fc-content").addClass(info.event.extendedProps.cat[0]);
      var nsfields = info.event.extendedProps;
      
      if(myAjax.show_tooltip=="on"){
      var tooltip = new Tooltip(info.el, {
        title: nsfields.html,
        html: true,
        placement: "auto",
        trigger: "hover",
        container: "body"
        
        
      });
     
    }
   
      
    },

    events:  {
      // nextDayThreshold: '11:59:00',
      // allDay:false,
      
      url: myAjax.ajaxurl+"?action=fetch_Events&dateformat="+myAjax.date_format+"&timeformat="+myAjax.time_format+"&timezone="+myAjax.show_time_zone+"&categories="+myAjax.included_categories+"&show_feature_event="+myAjax.show_feature_event+"&show_tooltip="+myAjax.show_tooltip+"&show_image="+myAjax.show_image+"&show_excerpt="+myAjax.show_excerpt+"&show_price="+myAjax.show_price+"&show_title="+myAjax.show_title+"&show_date="+myAjax.show_date+"&show_time="+myAjax.show_time+"&calendar_eventorder="+myAjax.calendar_eventorder+"&id="+myAjax.id+"&show_month_view_button="+myAjax.show_month_view_button+"&show_list_view_button="+myAjax.show_list_view_button+"&show_week_view_button="+myAjax.show_week_view_button+"&show_day_view_button="+myAjax.show_day_view_button+"&categslug="+myAjax.categslug+"&categId="+myAjax.categId+"&show_dynamic_content="+myAjax.show_dynamic_content+"&show_tooltip_category="+myAjax.show_tooltip_category+"&show_tooltip_weburl="+myAjax.show_tooltip_weburl+"&week_start_on="+myAjax.week_start_on+"start="+myAjax.start+"&show_calendar_event_date="+myAjax.show_calendar_event_date+"&calendar_default_view="+myAjax.calendar_default_view+"&show_recurring_event="+myAjax.show_recurring_event,

      type: 'POST',
      data: {
        
        timeFormat : myAjax.date_format,
      },
        
      success: function(){
       // alert("joshi");
      },
      error: function() {
        alert("There was an error while fetching events.");
      }
    },
  

  });
  
  // if(jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3") == true){
  //   jQuery(".fc-content").css("visibility","hidden"). css("width","10px").css("height","10px");
  //   console.log("hhh");
  // }
  calendar.render();
  calendar.setOption('locale', language);
  
});
