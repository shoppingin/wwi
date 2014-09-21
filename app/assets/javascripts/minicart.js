function add_product_to_basket(basket, product){
  basket.find('ul').append(basket_item_template(product));
};

function store_product_id_to_cookie(id){
  var ids = $.cookie('product_ids');

  $.cookie('product_ids', ids == undefined ? id : [ids, id].join(','));
}

function basket_item_template(product){
  return "<li data-id='" + product.id + "' data-price='"+product.price+"'><img src='" + product.image_url + "' height='50'/>"+
  "<a href='/products/" + product.url +"'>" + product.name +"</a>"+
  "<span class='price'><span class='currency'>&euro;</span>"+
  product.price +"<a href='#' class='delete'><img src='/assets/frontend/minicart_popup_delete.png' alt='Verwijderen'/></a></span>"+
  "</li>"
};

function set_total(){
  var total_price = $('.minicart_popup_total .price');
  var total_price_cap = $('.minicart .price');
  var total_items_cap = $('.minicart .items');
  var total_price_value = parseFloat($.cookie('basket_item_total_price') || 0, 10);
  var total_items = parseInt($.cookie('basket_items') || 0, 10)

  total_price.html( total_price_value );
  total_price_cap.html( total_price_value );
  total_items_cap.html( total_items )
}

function update_total(price, inc_value){
  var inc_value = inc_value || 1;
  var total_price = $('.minicart_popup_total .price');
  var total_price_cap = $('.minicart .price');
  var total_items_cap = $('.minicart .items');
  var total_price_value = parseFloat($.cookie('basket_item_total_price') || 0, 10);
  var total_items = parseInt($.cookie('basket_items') || 0, 10)

  // UI
  total_price.html( total_price_value + price );
  total_price_cap.html( total_price_value + price );
  total_items_cap.html( total_items + inc_value );

  // Cookies
  $.cookie('basket_item_total_price', total_price_value + price);
  $.cookie('basket_items', total_items + inc_value);
};

function add_product_to_cookie(product){
  var key = 'basket_item_'+product.id,
      value = 'id='+ product.id +
              ';name='+product.name+
              ';image_url='+product.image_url+
              ';price='+product.price+
              ';url='+product.url+
              ';quantity='+product.quantity;
  $.cookie( key, value );
};

function read_order_from_cookies(){
  var order = {line_items: [], total_amount: parseFloat($.cookie('basket_item_total_price') || 0, 10)}

  var product_ids = $.cookie('product_ids') ? $.cookie('product_ids').split(',') : [],
      i=null, product = null, t = null;
  if( product_ids.length > 0 ){
    for(i = 0; i < product_ids.length; i++){
      product = $.cookie('basket_item_'+product_ids[i]);
      if( product !== undefined ){
        t = build_product_from_string( product )
        order.line_items.push({variant_id: t.variant_id, quantity: t.quantity})
      }
    }
  }

  return order
}

window.fill_basket_from_cookies = function fill_basket_from_cookies(){
  var $basket_container = $('#minicart_popup');

  var product_ids = $.cookie('product_ids') ? $.cookie('product_ids').split(',') : [],
      i=null, product = null;
  if( product_ids.length > 0 ){
    for(i = 0; i < product_ids.length; i++){
      product = $.cookie('basket_item_'+product_ids[i]);
      if( product !== undefined ){
        add_product_to_basket($basket_container, build_product_from_string( product ));
      }
    }
    set_total();
  }
};

function build_product_from_string(input){
  var product = {};

  var key_values = input.split(';'), key = null, value=null, tmp=null, i = null;

  for(i = 0; i < key_values.length; i++){
    tmp = key_values[i].split('=');
    key = tmp[0];
    value = tmp[1];
    product[key] = value;
  }

  return product;
}

function remove_item_from_basket(e){
  e.preventDefault();

  var self = $(this),
      product_elem = self.parents('li'),
      product_id = product_elem.data('id'),
      product_ids = $.cookie('product_ids'),
      product_price = product_elem.data('price');

  // remove from cookies
  $.removeCookie('basket_item_'+product_id);
  product_ids = product_ids.replace(product_id,'');
  $.cookie('product_ids', product_ids);

  update_total(-product_price, -1)

  // remove from DOM
  product_elem.remove();
}

/* functions for basket */

function add_item_to_basket(e){
  //e.preventDefault();
  var self = $(this);
  var p = $('.product-info');

  var is_product_new_for_basket = $.cookie('product_ids') ? $.cookie('product_ids').split(',').indexOf(p.data('id').toString()) == -1 : true;
  if( is_product_new_for_basket ){

    var product = {
      id: p.data('id'),
      url: p.data('url'),
      name: p.data('name'),
      image_url: p.data('image-url'),
      price: parseFloat(p.data('price'), 10),
      variant_id: p.data('variant-id'),
      quantity: parseInt($('input[name="quantity"]').val(), 10)
    };

    add_product_to_cookie(product);
    update_total(product.price);
    store_product_id_to_cookie(product.id);

    add_product_to_basket($basket_container, product);
  }

  return true;
};

function show_basket(){
  $('#minicart_popup').fadeIn('fast');
}

function add_item_to_basket_callback(product){
  var $basket_container = $('#minicart_popup');

  add_product_to_cookie(product);
  update_total(product.price);
  store_product_id_to_cookie(product.id);

  add_product_to_basket($basket_container, product);
  $basket_container.fadeIn('fast');
}

function create_new_order_or_add_new_line_item(product){
  var basket_an_empty = $.cookie('order_id') === null || $.cookie('order_id') === undefined;
  if(basket_an_empty){
    create_new_order(product);
  }
  else {
    add_new_line_item(product);
  }
}

function create_new_order(product){
  $.ajax({
    url: '/api/orders',
    type: 'POST',
    beforeSend: function (request)
    {
        //request.setRequestHeader("X-Spree-Token", Spree.api_key);
    },
    data: {
      'order': {
        'line_items': {
          "0": {
            'quantity': product.quantity,
            'variant_id': product.variant_id
          }
        }
      }
    },
    dataType: 'json',
    success: function(data, status, xhr){
      save_order(data);
      add_item_to_basket_callback(product);
    },
    error: function(xhr, status, errorThrown){
      window.flash_notice.html('Error');
    },
  })
};

function add_new_line_item(product){
  // POST /api/orders/R1234567/line_items?line_item[variant_id]=1&line_item[quantity]=1
  var order_id = $.cookie('order_id'),
      order_token = $.cookie('order_token');

  $.ajax({
    url: '/api/orders/'+order_id+'/line_items.json',
    type: 'POST',
    beforeSend: function (request)
    {
        //request.setRequestHeader("X-Spree-Token", Spree.api_key);
        request.setRequestHeader("X-Spree-Order-Token", order_token);
    },
    data: {
      'line_item': {
        'quantity': product.quantity,
        'variant_id': product.variant_id
      }
    },
    dataType: 'json',
    success: function(data, status, xhr){
      add_item_to_basket_callback(product);
    },
    error: function(xhr, status, errorThrown){
      window.flash_notice.html('Error');
    },
  })
}

function save_order(order){
  $.cookie('order_id', order.number);
  $.cookie('order_token', order.token);
  //$.cookie('guest_token', order.token);
}

$(function(){
  if(location.search && location.search.match(/_q=0/) !== null){
    show_basket();
  }
  $(document.body).on('click', '#add-to-cart-button', add_item_to_basket);
  $(document.body).on('click', '#minicart-outer ul li a.delete, .order-products ul > li a.delete', remove_item_from_basket);
  fill_basket_from_cookies();
  $('#minicart-outer').mouseover(function() {
    var $popup = $('#minicart_popup');
    $popup.fadeIn('fast');
    $(this).mouseleave(function() {
      $popup.fadeOut('fast');
    });
  });
})
