let html;
//console.log(myAjax);
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


document.addEventListener("DOMContentLoaded", function() {
  if (jQuery("#calendar").length <= 0) return false;
  var language = document.getElementsByTagName("html")[0].getAttribute("lang");
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {

  displayEventTime: false,
    plugins: ["dayGrid"],
    defaultView: "dayGridMonth",
    fixedWeekCount:false,
    header: {
      right: 'today prev,next ',
      left: 'title',
     
      },
      locales: language,
      
      columnHeaderFormat:{
        weekday:jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3")==true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_4")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_5")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_6")==true || screen.width<767?"narrow":"short",
      },
  
     windowResize: function(view) {

     },
    eventRender: function(info) {
     // jani=info.event.extendedProps.joshi.slice(2,3);
    if(jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_3")==true || jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_4")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_5")==true||jQuery(".decm_divi_event_calendar").parent().hasClass("et_pb_column_1_6")==true || screen.width < 767){
     jQuery(info.el).children(".fc-content").css("visibility","hidden").css("width","10px").css("height","10px");
     }
     else{ jQuery(info.el).children(".fc-content").css("visibility","visible").css("width","auto").css("height","auto");}

      if(info.event.extendedProps.event_start_time==null){
        info.el.querySelector('.fc-title').innerHTML ='<span class="fc-calendar-time">'+ info.event.extendedProps.event_start_date+info.event.extendedProps.event_end_date+'</span></br><span class="fc-calendar-title">'+info.event.title + "</span>";
      }
      else{
      info.el.querySelector('.fc-title').innerHTML ='<span class="fc-calendar-time">'+ info.event.extendedProps.event_start_time+info.event.extendedProps.event_end_time+'</span></br><span class="fc-calendar-title">'+info.event.title + "</span>";
      }

      if(info.event.extendedProps.category_data !==false){
      for(let i = 0; i < info.event.extendedProps.category_data.length; i++){ 
        jQuery(info.el).addClass(info.event.extendedProps.category_data[i].slug+'_dec_category');
      }
    }
    
      // jQuery(info.el).children(".fc-content").addClass(info.event.extendedProps.cat[0]);
      var nsfields = info.event.extendedProps;
      
      if(myAjax.show_tooltip=="on"){
      var tooltip = new Tooltip(info.el, {
        title: nsfields.html,
        html: true,
        placement: "top",
        trigger: "hover",
        container: "body"
        
        
      });
     
    }
   
      
    },

    events:  {
      // nextDayThreshold: '11:59:00',
      // allDay:false,
      
      url: myAjax.ajaxurl+"?action=fetch_Events&dateformat="+myAjax.date_format+"&timeformat="+myAjax.time_format+"&timezone="+myAjax.show_time_zone+"&categories="+myAjax.included_categories+"&show_tooltip="+myAjax.show_tooltip+"&show_image="+myAjax.show_image+"&show_excerpt="+myAjax.show_excerpt+"&show_price="+myAjax.show_price+"&show_title="+myAjax.show_title+"&show_date="+myAjax.show_date+"&show_time="+myAjax.show_time+"&id="+myAjax.id,

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
