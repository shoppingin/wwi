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
//= require jquery.customSelect.min
//= require jquery.nouislider
//= require jquery.cookie

//= require minicart
//= require jquery.jcarousel-core.min
//= require jquery.jcarousel-control.min
//= require jqzoom.min
//= require spree/frontend/all

/* CUSTOM */
$(function(){
  if(location.search && location.search.match(/_q=0/) !== null){
    show_basket();
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

  fill_basket_from_cookies();
  $('#minicart-outer').mouseover(function() {
    var $popup = $('#minicart_popup');
    $popup.fadeIn('fast');
    $(this).mouseleave(function() {
      $popup.fadeOut('fast');
    });
  });

  $(document.body).on('click', '#add-to-cart-button', add_item_to_basket);
  $(document.body).on('click', '#minicart-outer ul li a.delete, .order-products ul > li a.delete', remove_item_from_basket);

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
