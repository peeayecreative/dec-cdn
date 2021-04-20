jQuery(function ($) {




  $(" .event_ajax_load, .ecs-page_alignment_left, .ecs-page_alignment_right").on("click", function () {
    var classList = jQuery(this).parents('.decm_event_display').attr('class').split(/\s+/);
    //console.log(jQuery(this));
    var mainClass = "";
    $.each(classList, function (index, item) {
      if (item.match(/decm_event_display_/g)) {
        mainClass = "." + item;
        //do something
      }
    });
    var eventFeed = $(window)[0][`eventFeed${mainClass.substr(1, mainClass.length)}`];

    //console.log(jQuery(this).parent('.decm_event_display').attr('class').split(/\s+/));
    $(mainClass + ' .event_ajax_load a').hide();
    // $('.append_events').addClass('ajax_load_img');
    let eventfeed_current_page = jQuery(mainClass + " input[name='eventfeed_current_page']").val();
    let eventfeed_class_pagination = jQuery(mainClass + " input[name='eventfeed_class_pagination']").val();
    let eventfeed_page = jQuery(mainClass + " input[name='eventfeed_page']").val();
    let eventfeed_prev_page = jQuery(mainClass + " input[name='eventfeed_prev_page']").val();
    let eventfeed_max_page = jQuery(mainClass + " input[name='eventfeed_max_page']").val();
    let eventfeed_load_img = jQuery(mainClass + " input[name='eventfeed_load_img']").val();
    let event_image = '<img src="' + eventfeed_load_img + '" class="eventFeed_load_img">';
    // jQuery(".append_events").html('<img src="'+eventfeed_load_img+'">')
    //console.log(eventfeed_load_img);
    if (eventfeed_page == "paged" && jQuery(this)[0].className == "ecs-page_alignment_left") {
      eventfeed_current_page = eventfeed_prev_page - 1;
    }
    jQuery(mainClass + " .event_ajax_load").append(event_image);
    // debugger;

    var data = {
      action: "load_event_posts",
      atts: JSON.stringify(eventFeed.atts),
      type: "POST",
      dateType: "html",
      eventfeed_current_page: eventfeed_current_page,
      eventfeed_page: eventfeed_page,
      eventfeed_prev_page: eventfeed_prev_page,
      categId: eventFeed.categId,
      categslug: eventFeed.categslug,
      pagination_type: eventFeed.pagination_type,
      class_pagination: eventFeed.class_pagination,
      // security: eventFeed.security,


    };
    // console.log(eventFeed.class_pagination);
    //console.log(pagination_type);
    // console.log(categslug);

    $.post(eventFeed.ajaxurl, data, function (atts, event_image, pagination_type, class_pagination, eventfeed_class_pagination) {
      // $('.event_ajax_load').add();
      // if (response.type == "success") {
      // jQuery('.event_ajax_load').remove();
      // if ((search_str && trigger_from) || trigger_from) {
      //     jQuery('#contract_row > div').remove();
      // }
      // console.log(eventfeed_class_pagination);
      if (event_image == "success") {
        $(mainClass + ' .event_ajax_load img').remove();
        $(mainClass + ' .event_ajax_load a').show();
      }

      if (eventfeed_page == "load_more") {
        // jQuery( ".append_events" ).remove(html);
        jQuery(mainClass + ' .append_events').append(atts);
        // jQuery('.append_events').html(atts);
        jQuery(window).trigger('resize');
        eventfeed_current_page = parseInt(eventfeed_current_page) + 1;
        if (parseInt(eventfeed_current_page) + 1) {
          $(mainClass + ' .append_events').remove(event_image);
        }
        jQuery(mainClass + ' #eventfeed_current_page').val(eventfeed_current_page);
        if (eventfeed_max_page <= eventfeed_current_page) {
          jQuery(mainClass + ' .event_ajax_load').remove();
        }
      }
      if (eventfeed_page == "paged") {
        // jQuery( ".append_events" ).remove(html);
        jQuery(mainClass + ' .append_events').html(atts);
        // jQuery('.append_events').html(atts);
        jQuery(window).trigger('resize');
        eventfeed_current_page = parseInt(eventfeed_current_page) + 1;
        eventfeed_prev_page = parseInt(eventfeed_current_page) - 1;
        if (parseInt(eventfeed_current_page) + 1 && eventfeed_current_page > eventfeed_prev_page) {
          $(mainClass + ' .ecs-page_alignment_left').show();
          $(mainClass + ' .ecs-page_alignment_right').show();


          $(mainClass + ' .append_events').remove(event_image);
        }
        if (eventfeed_prev_page == 0) {
          $(mainClass + ' .ecs-page_alignment_left').hide();
          $(mainClass + ' .ecs-page_alignment_right').show();

        }

        jQuery(mainClass + ' #eventfeed_current_page').val(eventfeed_current_page);
        jQuery(mainClass + ' #eventfeed_prev_page').val(eventfeed_prev_page);
        if (eventfeed_max_page <= eventfeed_current_page) {
          jQuery('.event_ajax_load').remove();
          $(mainClass + ' .ecs-page_alignment_right').hide();
        }
      }

    });

    // btn.prop('disabled', true);
  });
});
