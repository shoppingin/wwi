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
  if(flash_msg.length > 0){
    $('.top-nav').notify(flash_msg.html(), flash_msg.prop('class').split(' ')[1]);
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

  $(document.body).on('click', 'a.fake_submit', function(e){
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

  // $('.quantity .minus').bind('click', function(e){
  //   e.preventDefault();
  //
  //   var qty = $('input[name="quantity"]');
  //   var old = parseInt(qty.val());
  //
  //   if(old > 1){
  //     qty.val(old - 1);
  //   }
  //
  //   return false;
  // });
  // $('.quantity .plus').bind('click', function(e){
  //   e.preventDefault();
  //
  //   var qty = $('input[name="quantity"]');
  //   var old = parseInt(qty.val());
  //
  //   qty.val(old + 1);
  //
  //   return false;
  // });

});
