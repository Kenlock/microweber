
 
 
window.mw_editables_created = false;
window.mw_element_id = false;
function mw_delete_element($el_id){
	if($el_id == undefined || $el_id == 'undefined' ){
		$el_id = window.mw_element_id;
	}
//	alert($el_id);
	$($el_id).fadeOut().remove();
	$('#'+$el_id).fadeOut().remove();

}
function mw_make_cols($numcols){
	
	
	
	
	
	
	
	$el_id = window.mw_row_id ;
	if($el_id != undefined && $el_id != false && $el_id != 'undefined'  ){
	window.mw_sortables_created = false;
	// $('#'+$el_id).columnize({ columns: $numcols, target:'#'+$el_id, buildOnce:true  });
	
	 $exisintg_num = $('#'+$el_id).children(".column").size();

	
	if($numcols == 0){
	$numcols = 1;
	}
	$exisintg_num = parseInt($exisintg_num);
	$numcols = parseInt($numcols);

	
	if($exisintg_num == 0){
	$exisintg_num = 1;
	}
	
	
		if($numcols != $exisintg_num){
	
	
	
			if ( window.console && window.console.log )
				{
					window.console.log( '  $exisintg_num ' + $exisintg_num + '       $numcols ' + $numcols  );
				}
		 
			if($numcols > $exisintg_num){
			
						for (i=$exisintg_num;i<$numcols;i++){
					 $('<div class="column"><div class="empty">column</div></div>').appendTo('#'+$el_id);
						}
				
			} else {
			
			
			$cols_to_remove = $exisintg_num - $numcols;
			if ( window.console && window.console.log )
				{
					window.console.log( '$cols_to_remove' + $cols_to_remove );
				}
				
				
				if($cols_to_remove > 0){
					
					for (i=$cols_to_remove;i> 0;i--){
						//for (i=0;i<=$cols_to_remove;i++){
						 $ch_n = parseInt($exisintg_num) - parseInt(i) ;
						 if($cols_to_remove >= 1){
						 if ( window.console && window.console.log ){
							window.console.log( '$removinc child col' + '#'+$el_id +">div.column:nth-child("+$ch_n+")" );
							}
							 
					$('#'+$el_id ).children(".column:eq("+$ch_n+")").fadeOut('slow').remove(); 
		 
						 }
							
							
						}
					
					
				}
			}
		
		
		
		
		
		
			$exisintg_num = $('#'+$el_id).children(".column").size();
		
		$eq_w = 100/$exisintg_num;
		 $('#'+$el_id).children(".column").width($eq_w+'%');
		 $('#'+$el_id).children(".column").css('float', 'left');
			$('#'+$el_id).equalHeights();
			 
 		init_sortables()
		
		
		
		
	
			
			}
	
	
	
	
	
	
	
	
	
		}
	
	
	
	
}

function mw_make_row_editor($el_id){
	
	if($el_id == undefined || $el_id == 'undefined' ){
		$el_id = window.mw_row_id;
	} else {
	window.mw_row_id = 	$el_id;
	}
	$(".mw-layout-edit-curent-row-element").html($el_id);
	
	$exisintg_num = $('#'+$el_id).children(".column").size();
	$(".mw-make-cols").removeClass('active');
	$(".mw-make-cols-"+$exisintg_num).addClass('active');
	
	// alert($exisintg_num);
}


function mw_make_css_editor($el_id){
	if($el_id == undefined || $el_id == 'undefined' ){
		$el_id = window.mw_element_id;
	} else {
	window.mw_element_id = 	$el_id;
	}
	$(".mw-layout-edit-curent-element").html($el_id);
}
function mw_make_editables(){
				 
				
	
 
	
				 if(window.mw_drag_started == false && window.mw_handle_hover != true ){
				window.mw_sortables_created = false;
			 if(window.mw_editables_created == false){
				$(".edit [draggable='true']").unbind();
				$(".edit [draggable='true']").removeAttr('draggable');
	$(".edit").freshereditor("edit", true);
			  window.mw_editables_created = true
			  $("#mw-layout-edit-site-top-bar-r").html("Text edit");
			  
			 }

	 }
				 
				 
}




 window.mw_sortables_created = false;
 window.mw_drag_started = false;
 window.mw_row_id = false;
function mw_remove_editables(){
 
	 window.mw_editing_started  = false;
	window.mw_editables_created = false;
	 $(".edit").freshereditor("edit", false);
 
}
  function saveOrder() {
				//var data = $("#gallery li").map(function() { return $(this).data("itemid"); }).get();
		      //  $.post("example.php", { "ids[]": data });
		    };

function init_sortables(){
	       // $('#mercury_iframe').contents().find('.edit').html('Hey, i`ve changed content of  body>! Yay!!!');
		   
			
		
			mw_remove_editables()
			
			  if(window.mw_sortables_created == false){
 
		 
		// $(".row").dragsort({ dragSelector: "", dragEnd: saveOrder, placeHolderTemplate: "<div class='col'><div>DROP HERE</div></div>" });
 //$(".column").dragsort("destroy");
		  		//$(".column").dragsort({ dragSelector: ".col", dragBetween: true, dragEnd: saveOrder, placeHolderTemplate: "<div class='col'><div>DROP HERE</div></div>" });
     var place2 = $('<div class="empty ui-state-highlight">Please drag items here</div>');
  $(".column", '.row').each(function (c) {
                if ($("div", this).size() == 0) {
                    $(this).html(place2);
                }
            })
  
		 	$('.edit').sortable('destroy');
			$('.col').sortable('destroy');
			$('.column').sortable('destroy');
			$('.row').sortable('destroy');
			$('.edit').sortable({
    items: '.row:not(.disabled,.col)',
	 forcePlaceholderSize: true,
	 tolerance: 'pointer',
	  revert: true,
	placeholder: "ui-state-highlight-row",
	 connectWith: '.edit'
});
			
					$('.column:not(.disabled)').sortable({
    items: '.col',
	dropOnEmpty:true,

 //  revert: true,
	 // tolerance: 'pointer',
	//   forceHelperSize: true,
	  placeholder: "ui-state-highlight",
   //forcePlaceholderSize: true,
	 connectWith: '.column' ,
	   // helper: 'clone',
	   change: function(event, ui) { 
	  
	   },
	   over: function(event, ui){
		   
		  //  if (window.console != undefined) {
			//	console.log('over ' + ui.placeholder );	
			//}
		   
		  // if($.trim(ui.placeholder.html()) == '') ui.placeholder.html(place2);;
		   
		   
    
	   }
,
	    start: function( event, ui ) {
			 $( '.mw-sorthandle', '.column' ).remove();
			//$('.column', ui.placeholder).each(function(){
   // if($.trim($(this).html()) == '') $(this).html(place2);;
//}); 
			
			$(".column", '.row').each(function (c) {
                if ($("div", this).size() == 0) {
                    $(this).html(place2);
                }
            })
			
			
			 //$( '.column:empty', '.row' ).html(place2);
	 
			
    $( this ).sortable( 'refreshPositions' )
  },

      sort: function(e,ui){
		 
    $(".ui-state-highlight").css({"width":"100%", "height" : ui.item.height()});
 

                /* The trick is that jQuery hides the inline element while user drags an absolute positioned clone so we want to deal only with the visible elements. Index order + 1 = UI order.*/
              //  $(ui.placeholder).html(Number($(".col:visible").index(ui.placeholder)+1));
              },
			  
			  remove: function(event, ui) {
           
        },
		 change: function(event, ui) {

    },
	
	
        receive: function(event, ui) {
            $('.empty').remove();
			  
        },
		
		stop: function(event, ui) {
            $('.empty').remove();
			
			  $('.row > .column').each(function(index) {
      // $(this).equalHeights() ;
});
  
				 //$( ui.placeholder.parents('.row:first')).

			
        }

	 
});
					
					
		 
		  
			$( ".columnwerwerwerw", ".roadw" ).resizable({
								   handles: 'e',
								  autoHide: true,
								//  animate: true,
								   resize: function(event, ui) {
										//	$(this).css('height', 'auto');
										
										 var $this = $(this);
										 
										 $has = $(this).children(":first");
if($has != false){
	
	
	 var parentwidth = $this.innerWidth();
    var parentheight = $this.innerHeight();
	
	var childwidth = $(this).children(":first").width();
    var childheight = $(this).children(":first").height();
	
		
		 if (window.console != undefined) {
				console.log('resize: ' + 'parentwidth ' + parentwidth + 'parentheight ' + parentheight + 'childwidth ' + childwidth + 'childheight ' + childheight );	
			}
   //$("#child").css({'width':parentwidth, 'height':parentheight});
	
	
	
}
										 
										 
   




										}
								  });
			
			
			 $(".row,.col", '.edit').disableSelection();
			
			
			
			$(".row,.col").die('mousedown');
			$(".col").live(
        'mousedown',
        function (e) {

$el_id = $(this).attr('id');
if($el_id == undefined || $el_id == 'undefined' ){
$el_id = 'mw-element-'+new Date().getTime();
  $(this).attr('id', $el_id);
}
window.mw_element_id = $el_id;
mw_make_css_editor($el_id)
e.stopPropagation();
        });
			
			
				$(".row").live(
        'click',
        function (e) {

$el_id = $(this).attr('id');
if($el_id == undefined || $el_id == 'undefined' ){
$el_id = 'mw-row-'+new Date().getTime();
  $(this).attr('id', $el_id);
}
window.mw_row_id = $el_id;
mw_make_row_editor($el_id)
//e.stopPropagation();
        });	
			
			
		 
			 
			 $(".row", '.edit').mouseenter(function(){
   $has = $(this).children(":first").hasClass("mw-sorthandle");
   if($has == false){
	$(this).prepend("<div class='mw-sorthandle mw-sorthandle-row'><span>&nbsp;</span>");
}

 $(this).children(".mw-sorthandle-row:first").show();

}).mouseleave(function(){
 

 $(this).children(".mw-sorthandle-row:first").hide();

})  
			 
			 
			 
			 
			 
			 		 $(".col", '.edit').mouseenter(function(){
   $has = $(this).children(":first").hasClass("mw-sorthandle");
   if($has == false){
	$(this).prepend("<div class='mw-sorthandle mw-sorthandle-col'><span>&nbsp;</span>");
}

})
			 
			
			
			//<div class='sorthandle'><span>&nbsp;</span></div>

			
			
			   $("#mw-layout-edit-site-top-bar-r").html("Drag and drop edit");
			  window.mw_sortables_created = true
			 
			/* $('.edit').sortable('destroy');
			 $('.edit').sortable({ 
			//  appendTo: '.row' ,											   
			 items: '.module' ,
			   
			 handle: '.col, a, .box, .col > *, .module, .module > *' ,
			 //  containment: '.row',
			//   containment: 'parent',
			 //cancel: '.module > *' ,
			  forceHelperSize: true,
			  iframeFix: true,
			  connectWith: ".edit, .edit div, .edit p, .edit br, .edit ul, .edit h1, .edit h2, .edit h3",
			 forcePlaceholderSize: true
			
			 }).disableSelection();*/
			  window.mw_sortables_created = true
			 
			  }
			 
		 


}
	
	
	
		       $('.module', '.edit').live('blur', function () {

 });
	
	 $('.module' , '.edit').live('mousenter',function(e) {
					$(this).children('[draggable]').removeAttr('draggable')							  
		});										  
												  
	
 $('.module' , '.edit').live('click',function(e) {
	 
		 
		
		 
		  init_sortables()
		 
		 
		
		  window.mw_making_sortables = false;
		  
		$clicked_on_module = 	$(this).attr('module_id');
		  if($clicked_on_module == undefined || $clicked_on_module == ''){
			  $clicked_on_module = 	$(this).attr('module_id', 'default');
			  
		  }
		
		 if (window.console != undefined) {
				console.log('click on module 1 ' + $clicked_on_module );	
			}
		
		
		  if($clicked_on_module == undefined || $clicked_on_module == ''){
				$clicked_on_module = 	$(this).parents('.module').attr('module_id');
		  }
		  
		  if($clicked_on_module == undefined || $clicked_on_module == ''){
			  $clicked_on_module = 	$(this).parents('.module').attr('module_id', 'default');
			  
		  }
		  
		  $('.mw_non_sortable').removeClass('mw_non_sortable');
		 
		 
		  
		// alert($clicked_on_module);
		 
		 
		 
    e.preventDefault();
			//event.preventDefault(); // this prevents the original href of the link from being opened
			e.stopPropagation(); // this prevents the click from triggering click events up the DOM from this element
			return false;
	 
});

































/*	
 *	jQuery dotdotdot 1.4.0
 *	
 *	Copyright (c) 2012 Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

(function( $ )
{
	if ( $.fn.dotdotdot )
	{
		return;
	}

	$.fn.dotdotdot = function( o )
	{
		if ( this.length == 0 )
		{
			debug( true, 'No element found for "' + this.selector + '".' );
			return this;
		}
		if ( this.length > 1 )
		{
			return this.each(
				function()
				{
					$(this).dotdotdot( o );
				}
			);
		}


		var $dot = this,
			$tt0 = this[ 0 ];

		if ( $dot.data( 'dotdotdot' ) )
		{
			$dot.trigger( 'destroy.dot' );
		}

		$dot.bind_events = function()
		{
			$dot.bind(
				'update.dot',
				function( e, c )
				{
					e.preventDefault();
					e.stopPropagation();

					opts.maxHeight = ( typeof opts.height == 'number' ) 
						? opts.height 
						: getTrueInnerHeight( $dot );

					opts.maxHeight += opts.tolerance;

					if ( typeof c != 'undefined' )
					{
						if ( typeof c == 'string' || c instanceof HTMLElement )
						{
					 		c = $('<div />').append(c).contents();
						}
						if ( c instanceof $ )
						{
							orgContent = c;
						}
					}

					$inr.empty();
					$inr.append( orgContent.clone( true ) );

					var after = false,
						trunc = false;

					if ( conf.afterElement )
					{
						after = conf.afterElement.clone( true );
						conf.afterElement.remove();
					}
					if ( test( $inr, opts ) )
					{
						if ( opts.wrap == 'children' )
						{
							trunc = children( $inr, opts, after );
						}
						else
						{
							trunc = ellipsis( $inr, $inr, opts, after );
						}
					}
					conf.isTruncated = trunc;
					return trunc;
				}
			);
			$dot.bind(
				'isTruncated.dot',
				function( e, fn )
				{
					e.preventDefault();
					e.stopPropagation();

					if ( typeof fn == 'function' )
					{
						fn.call( $tt0, conf.isTruncated );
					}
					return conf.isTruncated;
				}
			);
			$dot.bind(
				'originalContent.dot',
				function( e, fn )
				{
					e.preventDefault();
					e.stopPropagation();

					if ( typeof fn == 'function' )
					{
						fn.call( $tt0, orgContent );
					}
					return orgContent;
				}
			);
			$dot.bind(
				'destroy.dot',
				function( e )
				{
					e.preventDefault();
					e.stopPropagation();

					$dot.unwatch();
					$dot.unbind_events();
					$dot.empty();
					$dot.append( orgContent );
					$dot.data( 'dotdotdot', false );
				}
			);
		};	//	/bind_events

		$dot.unbind_events = function()
		{
			$dot.unbind('.dot');
		};	//	/unbind_events

		$dot.watch = function()
		{
			$dot.unwatch();
			if ( opts.watch == 'window' )
			{
				$(window).bind(
					'resize.dot',
					function()
					{
						if ( watchInt )
						{
							clearInterval( watchInt );
						}
						watchInt = setTimeout(
							function()
							{
								$dot.trigger( 'update.dot' );
							}, 10
						);
					}
				);
			}
			else
			{
				watchOrg = getSizes( $dot );
				watchInt = setInterval(
					function()
					{
						var watchNew = getSizes( $dot );
						if ( watchOrg.width  != watchNew.width ||
							 watchOrg.height != watchNew.height )
						{
							$dot.trigger( 'update.dot' );
							watchOrg = getSizes( $dot );
						}
					}, 100
				);
			}
		};
		$dot.unwatch = function()
		{
			if ( watchInt )
			{
				clearInterval( watchInt );
			}
		};

		var	orgContent	= $dot.contents(),
			opts 		= $.extend( true, {}, $.fn.dotdotdot.defaults, o ),
			conf		= {},
			watchOrg	= {},
			watchInt	= null,
			$inr		= $dot.wrapInner( '<' + opts.wrapper + ' class="dotdotdot" />' ).children();

		conf.afterElement	= getElement( opts.after, $inr );
		conf.isTruncated	= false;

		$inr.css({
			'height'	: 'auto',
			'width'		: 'auto'
		});

		$dot.data( 'dotdotdot', true );
		$dot.bind_events();
		$dot.trigger( 'update.dot' );
		if ( opts.watch )
		{
			$dot.watch();
		}

		return $dot;
	};



	//	public
	$.fn.dotdotdot.defaults = {
		'wrapper'	: 'div',
		'ellipsis'	: '... ',
		'wrap'		: 'word',
		'tolerance'	: 0,
		'after'		: null,
		'height'	: null,
		'watch'		: false,
		'debug'		: false
	};
	

	//	private
	function children($elem, o, after)
	{
		var $elements = $elem.children(),
			isTruncated = false;

		$elem.empty();

		for ( var a = 0, l = $elements.length; a < l; a++ )
		{
			var $e = $elements.eq( a );
			$elem.append( $e );
			if ( after )
			{
				$elem.append( after );
			}
			if ( test( $elem, o ) )
			{
				$e.remove();
				isTruncated = true;
				break;
			}
			else
			{
				if ( after )
				{
					after.remove();
				}
			}
		}
		return isTruncated;
	}
	function ellipsis( $elem, $i, o, after )
	{
		var $elements = $elem.contents(),
			isTruncated = false;

		$elem.empty();

		var notx = 'table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, select, optgroup, option, textarea, script, style';

		for ( var a = 0, l = $elements.length; a < l; a++ )
		{

			if ( isTruncated )
			{
				break;
			}

			var e	= $elements[ a ],
				$e	= $(e);

			if ( typeof e == 'undefined' )
			{
				continue;
			}

			$elem.append( $e );
			if ( after )
			{
				var func = ( $elem.is( notx ) )
					? 'after'
					: 'append';
				$elem[ func ]( after );
			}
			if ( e.nodeType == 3 )
			{
				if ( test( $i, o ) )
				{
					isTruncated = ellipsisElement( $e, $i, o, after );
				}
			}
			else
			{
				isTruncated = ellipsis( $e, $i, o, after );
			}

			if ( !isTruncated )
			{
				if ( after )
				{
					after.remove();
				}
			}
		}
		return isTruncated;
	}
	function ellipsisElement( $e, $i, o, after )
	{
		var isTruncated	= false,
			e			= $e[ 0 ];

		if ( typeof e == 'undefined' )
		{
			return false;
		}

		var seporator	= ( o.wrap == 'letter' ) ? '' : ' ',
			textArr		= getTextContent( e ).split( seporator );

		setTextContent( e, textArr.join( seporator ) + o.ellipsis );

		for ( var a = textArr.length - 1; a >= 0; a-- )
		{
			if ( test( $i, o ) )
			{
				var end = getTextContent( e ).length - ( textArr[ a ].length + seporator.length + o.ellipsis.length ),
					txt = ( end > 0 ) 
						? getTextContent( e ).substring( 0, end )
						: '';

				setTextContent( e, txt + o.ellipsis );

			}
			else
			{
				isTruncated = true;
				break;
			}
		}

		if ( !isTruncated )
		{
			var $w = $e.parent();
			$e.remove();
			$n = $w.contents().eq( -1 );

			isTruncated = ellipsisElement( $n, $i, o, after );
		}

		return isTruncated;
	}
	function test( $i, o )
	{
		return $i.innerHeight() > o.maxHeight;
	}
	function getSizes( $d )
	{
		return {
			'width'	: $d.innerWidth(),
			'height': $d.innerHeight()
		};
	}
	function setTextContent( e, content )
	{
		if ( e.innerText )
		{
			e.innerText = content;
		}
		else if ( e.nodeValue )
		{
			e.nodeValue = content;
		}
		else if (e.textContent)
		{
			e.textContent = content;
		}
	}
	function getTextContent( e )
	{
		if ( e.innerText )
		{
			return e.innerText;
		}
		else if ( e.nodeValue )
		{
			return e.nodeValue;
		}
		else if ( e.textContent )
		{
			return e.textContent;
		}
		else
		{
			return "";
		}
	}
	function getElement( e, $i )
	{
		if ( typeof e == 'undefined' )
		{
			return false;
		}
		if ( !e )
		{
			return false;
		}
		if ( typeof e == 'string' )
		{
			e = $(e, $i);
			return ( e.length )
				? e 
				: false;
		}
		if ( typeof e == 'object' )
		{
			return ( typeof e.jquery == 'undefined' )
				? false
				: e;
		}
		return false;
	}
	function getTrueInnerHeight( $el )
	{
		var h = $el.innerHeight(),
			a = [ 'paddingTop', 'paddingBottom' ];

		for ( z = 0, l = a.length; z < l; z++ ) {
			var m = parseInt( $el.css( a[ z ] ) );
			if ( isNaN( m ) )
			{
				m = 0;
			}
			h -= m;
		}
		return h;
	}
	function debug( d, m )
	{
		if ( !d )
		{
			return false;
		}
		if ( typeof m == 'string' )
		{
			m = 'dotdotdot: ' + m;
		}
		else
		{
			m = [ 'dotdotdot:', m ];
		}

		if ( window.console && window.console.log )
		{
			window.console.log( m );
		}
		return false;
	}
	
	//	override jQuery.html
	var _orgHtml = $.fn.html;
    $.fn.html = function( str ) {
		if ( typeof str == 'string' && this.data( 'dotdotdot' ) )
		{
			this.trigger( 'update', str );
			return this;
		}
        return _orgHtml.call( this, str );
    };

	//	override jQuery.text
	var _orgText = $.fn.text;
    $.fn.text = function( str ) {
		if ( typeof str == 'string' && this.data( 'dotdotdot' ) )
		{
			var temp = $( '<div />' );
			temp.text( str );
			str = temp.html();
			temp.remove();
			this.trigger( 'update', str );
			return this;
		}
        return _orgText.call( this, str );
    };

})( jQuery );


 
 //jQuery(‘#mycontainer’).equalHeights(300);


 
 
 