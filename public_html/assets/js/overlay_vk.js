(function(a){
	//Default Einstellungen
	a.overlay = {
		defaults:{
			resizer_id:"changeable_boox"
		}
	}
	
	a.fn.overlaysResizer = function(options){
		var settings = a.extend({},a.overlay.defaults, options);
		var overlay_container = a(this);
		var resizer = overlay_container.find("#"+settings.resizer_id);
		var container_data = getData(overlay_container);
		var resizer_data = getData(resizer);	
		
		function getData(elem){			
			var obj = {
					width: parseInt(elem.width()),
					height: parseInt(elem.height()),					
					top: parseInt(elem.position().top),
					left: parseInt(elem.position().left)
				}
			return obj; 
		}
		
		/**
		 * Erzeugt 4 Overlays
		 */
		function createOverlays(oc,c,r){						
			var overlays = '<div class="overlay_top" id="overlay_top" style="top:'+c.top+'px; left:'+c.left+'px; width:'+c.width+'px; height:'+r.top+'px;"></div>'						 			
						  +'<div class="overlay_left" id="overlay_left" style="top:'+r.top+'px; left:'+c.left+'px; width:'+(c.left+r.left)+'px; height:'+r.height+'px;"></div>'			
						  +'<div class="overlay_right" id="overlay_right" style="top:'+r.top+'px; left:'+(r.left+r.width)+'px; width:'+(c.width-(r.left+r.width))+'px; height:'+r.height+'px;"></div>'
						  +'<div class="overlay_bottom" id="overlay_bottom" style="top:'+(r.top+r.height)+'px; left:'+c.left+'px; width:'+c.width+'px; height:'+(c.height-(r.top+r.height))+'px;"></div>';
			
			overlay_container.append(overlays);
		}
		
		/**
		 * Event reagiert aug Gröseänderung  
		 */
		function setResizeEvent(res,cont,ol,or,ob){
			
			res.resize(function(){				
				//Resizer Height
				var rzh = parseInt(res.height());				
				//Bottom Top
				var bt = parseInt(res.position().top)+rzh;
				//Bottom Height
				var bh = parseInt(cont.height())-bt;
				//Right Left
				var rl = parseInt(res.position().left)+parseInt(res.width());
				//Right Width
				var rw = parseInt(cont.width())-rl;
							
				ol.css('height',rzh+"px");
				or.css('height',rzh+"px").css('left',rl+'px').css('width',rw+'px');
				ob.css('top',bt+"px").css('height',bh+"px");				
			});
		}
		
		
		function setDragEvent(res,cont,ot,ol,or,ob){
			res.bind('drag',function(){
				//Resizer Top
				var rzt = parseInt(res.position().top);
				//Resizer Left
				var rzl = parseInt(res.position().left);
				//Right Left
				var rl = rzl+parseInt(res.width());
				//Right Width
				var rw = parseInt(cont.width())-rl;
				//Bottom Top
				var bt = parseInt(res.position().top)+parseInt(res.height());
				//Bottom Height
				var bh = parseInt(cont.height())-bt;
				
				ot.css('height',rzt+"px");
				ol.css('width',rzl+"px").css('top',rzt+"px");
				or.css('left',rl+'px').css('width',rw+'px').css('top',rzt+"px");
				ob.css('top',bt+"px").css('height',bh+"px");
				
			});
		}
		
						
		createOverlays(overlay_container,container_data,resizer_data);	
		
		var ot = $('#overlay_top');
		var ol = $('#overlay_left');
		var or = $('#overlay_right');
		var ob = $('#overlay_bottom');
		
		setResizeEvent(resizer,overlay_container,ol,or,ob);
		setDragEvent(resizer,overlay_container,ot,ol,or,ob);
		
		
		
		
	}	
	
})(jQuery);


