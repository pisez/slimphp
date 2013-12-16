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

			var overlays = '<div class="overlay_top" id="overlay_top" style="top:0px; left:0px; width:'+c.width+'px; height:'+r.top+'px;"></div>'
						  +'<div class="overlay_left" id="overlay_left" style="top:'+r.top+'px; left:0px; width:'+r.left+'px; height:'+r.height+'px;"></div>'
						  +'<div class="overlay_right" id="overlay_right" style="top:'+r.top+'px; left:'+(r.left+r.width)+'px; width:'+(c.width-(r.left+r.width))+'px; height:'+r.height+'px;"></div>'
						  +'<div class="overlay_bottom" id="overlay_bottom" style="top:'+(r.top+r.height)+'px; left:0px; width:'+c.width+'px; height:'+(c.height-(r.top+r.height))+'px;"></div>';
			
			overlay_container.append(overlays);
		}
		
		/**
		 * Event reagiert aug Gröseänderung  
		 */
		function setResizeEvent(res,cont,ol,or,ob){
						
			res.resize(function(){	
				
				//Resizer Height
				var rh = parseInt(res.height());	
				//Right Left
				var rl = parseInt(res.position().left) + parseInt(res.width());
				//Container Width
				var cw = parseInt(cont.width());
				//Container Hight
				var ch = parseInt(cont.height());
				//Bootom Top
				var bt = parseInt(res.position().top)+rh;
								
				ol.css('height',rh+"px");				
				or.css('height',rh+"px").css('left',rl+'px').css('width',(cw-rl)+'px');
				ob.css('top',bt+"px").css('height',(ch-bt)+"px");				
			});
		}		
		
		function setDragEvent(res,cont,ot,ol,or,ob){
			res.bind('drag',function(){
				
				//Resizer Top
				var rt = parseInt(res.position().top);
				//Resizer Left
				var rl = parseInt(res.position().left);	
				//Container Hight
				var ch = parseInt(cont.height());
				//Container Width
				var cw = parseInt(cont.width());
				//Right Left
				var ril = rl + parseInt(res.width());
				//Bottom Top
				var bt = rt + parseInt(res.height());		
				
				ot.css('height',rt+"px");
				ol.css('top',rt+"px").css('width',rl+"px");
				or.css('top',rt+"px").css('width',(cw-ril)+'px').css('left',ril+'px');
				ob.css('top',bt+"px").css('height',(ch-bt)+"px");				
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

/*
 //Container Top
				var ct = parseInt(cont.position().top);	
				//Container Left
				var cl = parseInt(cont.position().left);
				//Container Hight
				var ch = parseInt(cont.height());
				//Container Width
				var cw = parseInt(cont.width());				
				
				//Resizer Top
				var rt = parseInt(res.position().top);
				//Resizer Left
				var rl = parseInt(res.position().left);
				//Resizer Height
				var rh = parseInt(res.height());		
				//Resizer Width
				var rw = parseInt(res.width());
*/
