// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require spree
//= require spree/frontend/all
//= require jquery.customSelect.min
//= require jquery.nouislider
//= require jquery.cookie
//= require notify.min

/* CUSTOM */
$(function(){
  var flash_msg = $('.flash_notice div');

  $.notify.addStyle('wwi', {
      html: "<div><span data-notify-text/></div>",
      classes: {
        base: {
          "white-space": "nowrap",
          "background-color": "white",
          "padding": "25px 50px",
          "-webkit-box-shadow": "0 24px 47px 0 rgba(0, 0, 0, 0.1)",
          "box-shadow": "0 24px 47px 0 rgba(0, 0, 0, 0.1)",
          "-webkit-box-sizing": "border-box",
          "-moz-box-sizing": "border-box",
          "box-sizing": "border-box"
        }
      }
  })
  if(flash_msg.length > 0){
    var _class = flash_msg.prop('class').split(' ')[1];
    $('.top-nav').notify(flash_msg.html(), {
      className: _class,
      style: 'wwi',
      arrowShow: false,
      gap: 0,
      elementPosition: 'bottom center',
    })
  }
  $(document.body).on('click', '[name="checkout_type"]', function(e){
    $('[name="checkout_type"]').prop('checked', false);
    $(this).prop('checked', true);
  });

  $(document.body).on('click', '#choose_checkout_type', function(e){
    e.preventDefault();

    var el = $('[name="checkout_type"]:checked'),
        checkout_type = el.val();
    if(checkout_type === 'new'){
      location.href = el.data('url');
    }
    if(checkout_type === 'guest'){
      $('#register_as_guest_button').click();
    }

    return false;
  });

  $(document.body).on('click', '.fake_submit', function(e){
    $(this).parents('form').submit()
  })

  $(document.body).on('change', '#cityfilter > select', function(e){
    $(this).parents('form').submit()
  })
  $(document.body).on('change', 'select.showperpage', function(e){
    location.href = $(this).data('url') + '?per_page=' + $(this).val()
  })
  // $('.jcarousel').jcarousel({
  //     vertical: true
  // });
  //$('.product-large-image').jqzoom();

// Setup controls for the navigation carousel
  // $('.prev-navigation')
  //     .on('jcarouselcontrol:inactive', function() {
  //         $(this).addClass('inactive');
  //     })
  //     .on('jcarouselcontrol:active', function() {
  //         $(this).removeClass('inactive');
  //     })
  //     .jcarouselControl({
  //         target: '-=1'
  //     });
  //
  // $('.next-navigation')
  //     .on('jcarouselcontrol:inactive', function() {
  //         $(this).addClass('inactive');
  //     })
  //     .on('jcarouselcontrol:active', function() {
  //         $(this).removeClass('inactive');
  //     })
  //     .jcarouselControl({
  //         target: '+=1'
  //     });

  $('.mainmenu ul li').mouseover(function() {
    var $this = $(this);
    var foldout = $this.children('div.foldoutmenu');
    foldout.fadeIn('fast');
    $this.mouseleave(function() {
      foldout.fadeOut('fast');
    });
  });

  $('select.styled').customSelect();
  $('.slide-up-tabs li span a').bind('click', function(e){
    e.preventDefault();

    $(this).parents('li').find('> ul').slideToggle();
    $(this).parents('li').toggleClass('open');

  });
  $(document.body).on('click', '#cover', function(e){
    $(this).hide();
    $('#helper').hide();
  })
  $(document.body).on('click', '#helper .continue', function(e){
    e.preventDefault()
    $("#cover").hide();
    $('#helper').hide();
    return false;
  })
  $("#new_order").on('submit', function(e){
    e.preventDefault()

    var d={};
    $(this).find('input:not(.minus,.plus)').each(function(i, e){
      d[$(e).attr('name')]=$(e).val();
    })
    $.ajax({
      url: $(this).attr('action'),
      type: 'POST',
      dataType: 'json',
      data: d,
      success: function(){
        var data = arguments[0];
        $.get('/cart?layout=off', function(html, status, obj){
          $('#helper').html(html).show();
          $('#cover').show();
          $('#helper .breadcrumb').hide();
        })

      },
      error: function(){

      }
    })
    return false;
  });
});
