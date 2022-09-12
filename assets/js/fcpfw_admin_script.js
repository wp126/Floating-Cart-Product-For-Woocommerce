jQuery(document).ready(function(){
    jQuery('#fcpfw_select_product').select2({
  	    ajax: {
    			url: ajaxurl,
    			dataType: 'json',
    			allowClear: true,
    			data: function (params) {
    				return {
        				q: params.term,
        				action: 'FCPFW_product_ajax'
      				};
      			},
    			processResults: function( data ) {
  					var options = [];
  					if ( data ) {
  	 					jQuery.each( data, function( index, text ) { 
  							options.push( { id: text[0], text: text[1], 'price': text[2]} );
  						});
  	 				}
  					return {
  						results: options
  					};
  				},
  				cache: true
  		},
  		minimumInputLength: 3 
  	});

    if(jQuery(".fcpfw_all_pages").is(":checked")){ 
        jQuery(".fcpfw_single_pages").hide();
    }else{
        jQuery(".fcpfw_single_pages").show();
    }
    jQuery(".fcpfw_all_pages").click(function() {
        if(jQuery(this).is(":checked")) {
            jQuery(".fcpfw_single_pages").hide();
        } else {
            jQuery(".fcpfw_single_pages").show();
        }
    });

})

/* defult js */
//jquery tab
jQuery(document).ready(function(){

    jQuery('ul.nav-tab-wrapper li').click(function(){
        var tab_id = jQuery(this).attr('data-tab');
        jQuery('ul.nav-tab-wrapper li').removeClass('nav-tab-active');
        jQuery('.tab-content').removeClass('current');
        jQuery(this).addClass('nav-tab-active');
        jQuery("#"+tab_id).addClass('current');
    });
});