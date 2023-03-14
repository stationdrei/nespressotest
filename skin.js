// Garden Gnome Software - Skin
// Pano2VR 6.1.11/18043
// Filename: silhouette_cardboard.ggsk
// Generated 2021-04-11T12:26:12

function pano2vrSkin(player,base) {
	player.addVariable('ht_ani', 2, false);
	player.addVariable('open_tag', 0, "");
	player.addVariable('close_nodes', 2, false);
	player.addVariable('category_visible', 2, false);
	player.addVariable('category_follow', 2, false);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('opt_url', 2, false);
	player.addVariable('isplaying', 2, true);
	player.addVariable('ht_ani2', 2, false);
	player.addVariable('coffee_num', 0, "");
	player.addVariable('coffee_url', 0, "");
	player.addVariable('vis_image_popup_1', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('vis_info_popup_n', 2, false);
	player.addVariable('vis_info_popup_v', 2, false);
	player.addVariable('vis_info_b2b', 2, false);
	player.addVariable('vis_momento_3d', 2, false);
	player.addVariable('vis_vertuo_3d', 2, false);
	player.addVariable('vis_thumbnail_menu', 2, true);
	player.addVariable('vis_video_file', 2, false);
	player.addVariable('vis_loader', 2, true);
	player.addVariable('vis_video_youtube', 2, false);
	player.addVariable('vis_website', 2, false);
	player.addVariable('vis_image_popup', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._menu_background=document.createElement('div');
		el.ggId="menu_background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.501961);';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_background.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_background.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._menu_background.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._menu_background.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._menu_background.style[domTransition]='opacity 500ms ease 0ms';
				if (me._menu_background.ggCurrentLogicStateAlpha == 0) {
					me._menu_background.style.visibility=me._menu_background.ggVisible?'inherit':'hidden';
					me._menu_background.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._menu_background.style.opacity == 0.0) { me._menu_background.style.visibility="hidden"; } }, 505);
					me._menu_background.style.opacity=0;
				}
			}
		}
		me._menu_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_scroller=document.createElement('div');
		els=me._node_scroller__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		hs ='';
		hs+='height : 99px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 149.5px;';
		hs+="";
		els.setAttribute('style',hs);
		me._node_scroller.ggScrollByX = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosX = (me._node_scroller__horScrollFg.offsetLeft + diffX);
			me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
			me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
		}
		me._node_scroller.ggScrollByXSmooth = function(diffX) {
			if(!me._node_scroller.ggHorScrollVisible || diffX == 0 || me._node_scroller.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._node_scroller.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._node_scroller.ggScrollPosX >= me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth)) {
					me._node_scroller.ggScrollPosX = Math.min(me._node_scroller.ggScrollPosX, me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._node_scroller.ggScrollPosX <= 0)) {
					me._node_scroller.ggScrollPosX = Math.max(me._node_scroller.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._node_scroller__horScrollFg.style.left = me._node_scroller.ggScrollPosX + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosX / (me._node_scroller__horScrollBg.offsetWidth - me._node_scroller__horScrollFg.offsetWidth);
			me._node_scroller__content.style.left = -(Math.round((me._node_scroller.ggContentWidth * (1.0 - me._node_scroller.ggHPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentLeftOffset + 'px';
			me._node_scroller.ggScrollPosXPercent = (me._node_scroller__horScrollFg.offsetLeft / me._node_scroller__horScrollBg.offsetWidth);
			}, 10);
		}
		me._node_scroller.ggScrollByY = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			me._node_scroller.ggScrollPosY = (me._node_scroller__vertScrollFg.offsetTop + diffY);
			me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
			me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
		}
		me._node_scroller.ggScrollByYSmooth = function(diffY) {
			if(!me._node_scroller.ggVertScrollVisible || diffY == 0 || me._node_scroller.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._node_scroller.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._node_scroller.ggScrollPosY >= me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight)) {
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._node_scroller.ggScrollPosY <= 0)) {
					me._node_scroller.ggScrollPosY = Math.max(me._node_scroller.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
			let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
			me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
			me._node_scroller.ggScrollPosYPercent = (me._node_scroller__vertScrollFg.offsetTop / me._node_scroller__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._node_scroller.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._node_scroller.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._node_scroller.clientWidth - (me._node_scroller.ggVertScrollVisible ? 15 : 0))) * me._node_scroller.ggHPercentVisible);
					me._node_scroller.ggScrollByXSmooth(diffX);
				}
			}
			if (me._node_scroller.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._node_scroller.clientHeight - (me._node_scroller.ggHorScrollVisible ? 15 : 0))) * me._node_scroller.ggVPercentVisible);
					me._node_scroller.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			me._node_scroller__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaX *= 0.65;
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByX(me._node_scroller.ggDragInertiaX);
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaX) < 1.0 && Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._node_scroller__content.ontouchend = null;
				me._node_scroller__content.ontouchmove = null;
				me._node_scroller__content.onpointerup = null;
				me._node_scroller__content.onpointermove = null;
			}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			me._node_scroller__content.onpointerup = me._node_scroller__content.ontouchend;
		}
			me._node_scroller__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = ((t ? t[0].clientX : e.clientX) - me._node_scroller.ggDragLastX) * me._node_scroller.ggHPercentVisible;
				var diffY = ((t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY) * me._node_scroller.ggVPercentVisible;
				me._node_scroller.ggDragInertiaX = -diffX;
				me._node_scroller.ggDragInertiaY = -diffY;
				me._node_scroller.ggDragLastX = t ? t[0].clientX : e.clientX;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByX(-diffX);
				me._node_scroller.ggScrollByY(-diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._node_scroller__content.onpointermove = me._node_scroller__content.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = els.ontouchstart;
		}
		elVertScrollBg = me._node_scroller__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 15px; height: 350px; background-color: rgba(0,0,0,0.12549); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._node_scroller__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 15px; height: 350px; background-color: rgba(255,255,255,0.25098); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._node_scroller.ggScrollPosY = 0;
		me._node_scroller.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._node_scroller.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._node_scroller.ggDragInertiaY *= 0.65;
					me._node_scroller.ggScrollByY(me._node_scroller.ggDragInertiaY);
					if (Math.abs(me._node_scroller.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._node_scroller.ggDragLastY;
				me._node_scroller.ggDragInertiaY = diffY;
				me._node_scroller.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._node_scroller.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._node_scroller.ggScrollHeight;
			if (e.offsetY < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._node_scroller__vertScrollBg.getBoundingClientRect();
			var diffY = me._node_scroller.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._node_scroller.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._node_scroller.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._node_scroller.ggScrollByYSmooth(30 * me._node_scroller.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._node_scroller__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="node_scroller";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : calc(100%  -  50px);';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_scroller.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_scroller.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				this.ggContentWidth = 0;
				this.ggContentHeight = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContentWidth = contentWidth;
				this.ggContentHeight = contentHeight;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._node_scroller.ggScrollPosY / me._node_scroller.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight - 15) || (!me._node_scroller.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._node_scroller__vertScrollBg.style.visibility = 'inherit';
					me._node_scroller__vertScrollFg.style.visibility = 'inherit';
					me._node_scroller.ggVertScrollVisible = true;
				} else {
					me._node_scroller__vertScrollBg.style.visibility = 'hidden';
					me._node_scroller__vertScrollFg.style.visibility = 'hidden';
					me._node_scroller.ggVertScrollVisible = false;
				}
				if(me._node_scroller.ggVertScrollVisible) {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth - 15;
					if (me._node_scroller.ggHorScrollVisible) {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight - 15;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height - me._node_scroller__vertScrollBg.getBoundingClientRect().width;
						me._node_scroller__cornerBg.style.visibility = 'inherit';
					} else {
						me._node_scroller.ggAvailableHeight = me._node_scroller.clientHeight;
						me._node_scroller.ggAvailableHeightWithScale = me._node_scroller.getBoundingClientRect().height;
						me._node_scroller__cornerBg.style.visibility = 'hidden';
					}
					me._node_scroller__vertScrollBg.style.height = me._node_scroller.ggAvailableHeight + 'px';
					me._node_scroller.ggVPercentVisible = contentHeight != 0 ? me._node_scroller.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._node_scroller.ggVPercentVisible > 1.0) me._node_scroller.ggVPercentVisible = 1.0;
					me._node_scroller.ggScrollHeight =  Math.round(me._node_scroller__vertScrollBg.offsetHeight * me._node_scroller.ggVPercentVisible);
					me._node_scroller__vertScrollFg.style.height = me._node_scroller.ggScrollHeight + 'px';
					me._node_scroller.ggScrollPosY = me._node_scroller.ggScrollPosYPercent * me._node_scroller.ggAvailableHeight;
					me._node_scroller.ggScrollPosY = Math.min(me._node_scroller.ggScrollPosY, me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
					me._node_scroller__vertScrollFg.style.top = me._node_scroller.ggScrollPosY + 'px';
					if (me._node_scroller.ggVPercentVisible < 1.0) {
						let percentScrolled = me._node_scroller.ggScrollPosY / (me._node_scroller__vertScrollBg.offsetHeight - me._node_scroller__vertScrollFg.offsetHeight);
						me._node_scroller__content.style.top = -(Math.round((me._node_scroller.ggContentHeight * (1.0 - me._node_scroller.ggVPercentVisible)) * percentScrolled)) + me._node_scroller.ggContentTopOffset + 'px';
					}
				} else {
					me._node_scroller.ggAvailableWidth = me._node_scroller.clientWidth;
					me._node_scroller.ggScrollPosY = 0;
					me._node_scroller.ggScrollPosYPercent = 0.0;
					me._node_scroller__content.style.top = this.ggContentTopOffset + 'px';
					me._node_scroller__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._node_scroller.ggHorScrollVisible || vertScrollWasVisible != me._node_scroller.ggVertScrollVisible) {
					me.updateSize(me._node_scroller);
					me._node_scroller.ggUpdatePosition();
				}
			}
		}
		el=me._node_cloner=document.createElement('div');
		el.ggPermeable=false;
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 140;
		el.ggHeight = 100;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._node_cloner.callChildLogicBlocks_changenode = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_active = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_visited && me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor) {
						me._node_cloner.ggInstances[i]._node_visited.logicBlock_bordercolor();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		me._node_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip = function(){
			if(me._node_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._node_cloner.ggInstances.length; i++) {
					if (me._node_cloner.ggInstances[i]._node_title && me._node_cloner.ggInstances[i]._node_title.logicBlock_visible) {
						me._node_cloner.ggInstances[i]._node_title.logicBlock_visible();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._node_cloner.ggUpdating == true) return;
			me._node_cloner.ggUpdating = true;
			var el=me._node_cloner;
			var curNumCols = 0;
			curNumCols = me._node_cloner.ggNumRepeat;
			if (curNumCols < 1) curNumCols = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			filter=filter.sort();
			if ((el.ggNumCols == curNumCols) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._node_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumRows = 1;
				el.ggNumCols = curNumCols;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._node_cloner.ggHeight) + 'px';
				parameter.left=(column * me._node_cloner.ggWidth) + 'px';
				parameter.width=me._node_cloner.ggWidth + 'px';
				parameter.height=me._node_cloner.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_node_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				column++;
				if (column >= el.ggNumCols) {
					column = 0;
					row++;
					el.ggNumRows++;
				}
				}
			}
			me._node_cloner.callChildLogicBlocks_changenode();
			me._node_cloner.callChildLogicBlocks_mouseover();
			me._node_cloner.callChildLogicBlocks_active();
			me._node_cloner.callChildLogicBlocks_changevisitednodes();
			me._node_cloner.callChildLogicBlocks_activehotspotchanged();
			me._node_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip();
			me._node_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._node_cloner.parentNode.classList.contains('ggskin_subelement') && me._node_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._node_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="node_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 100px;';
		hs+='left : 10px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._node_cloner.childNodes.length; i++) {
				var child=me._node_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._node_cloner.ggUpdatePosition=function (useTransition) {
				me._node_cloner.ggUpdate();
		}
		me._node_cloner.ggNodeChange=function () {
			me._node_cloner.ggUpdateConditionNodeChange();
		}
		me._node_scroller__content.appendChild(me._node_cloner);
		me._menu_background.appendChild(me._node_scroller);
		me.divSkin.appendChild(me._menu_background);
		el=me._menu_open=document.createElement('div');
		els=me._menu_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBmaWxsPSIjZmZmZmZmIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMyIDMyOyIgZmlsbC1vcGFjaXR5PSIxIiBoZWlnaHQ9IjMycHgiIHdpZHRoPSIzMnB4IiBpZD0iTGF5ZXJfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSI+CiA8cGF0aCBkPSJNNCwxMGgyNGMxLjEwNCwwLDItMC44OTYsMi0ycy0wLjg5Ni0yLTItMkg0QzIuODk2LDYsMiw2Ljg5NiwyLDhTMi44OTYsMTAsNCwxMHogTTI4LDE0SDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDIgIHMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUzI5LjEwNCwxNCwyOCwxNHogTTI4LDIySDRjLTEuMTA0LDAtMiwwLjg5Ni0yLDJzMC44OTYsMiwyLDJoMjRjMS4xMDQsMCwyLTAuODk2LDItMiAgUzI5LjEwNCwyMiwyOCwyMnoiLz4KPC9zdmc+Cg==';
		me._menu_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="menu_open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_open.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._menu_open.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('vis_thumbnail_menu') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._menu_open.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._menu_open.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._menu_open.style[domTransition]='left 500ms ease 0ms, top 500ms ease 0ms';
				if (me._menu_open.ggCurrentLogicStatePosition == 0) {
					me._menu_open.style.left='130px';
					me._menu_open.style.top='5px';
				}
				else {
					me._menu_open.style.left='5px';
					me._menu_open.style.top='5px';
				}
			}
		}
		me._menu_open.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu', !player.getVariableValue('vis_thumbnail_menu'));
		}
		me._menu_open.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._menu_open);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.onclick=function (e) {
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.666667);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 178px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var hs="Loading... "+(player.getPercentLoaded()*100.0).toFixed(0)+"%";
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._video_screentint_file=document.createElement('div');
		el.ggId="video_screentint_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_screentint_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_screentint_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_screentint_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_screentint_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_screentint_file.style[domTransition]='';
				if (me._video_screentint_file.ggCurrentLogicStateVisible == 0) {
					me._video_screentint_file.style.visibility=(Number(me._video_screentint_file.style.opacity)>0||!me._video_screentint_file.style.opacity)?'inherit':'hidden';
					me._video_screentint_file.ggVisible=true;
				}
				else {
					me._video_screentint_file.style.visibility="hidden";
					me._video_screentint_file.ggVisible=false;
				}
			}
		}
		me._video_screentint_file.onclick=function (e) {
			player.setVariableValue('vis_video_file', false);
		}
		me._video_screentint_file.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_screentint_file);
		el=me._screentint_info=document.createElement('div');
		el.ggId="screentint_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_info.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_info.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_info.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_info.style[domTransition]='';
				if (me._screentint_info.ggCurrentLogicStateVisible == 0) {
					me._screentint_info.style.visibility=(Number(me._screentint_info.style.opacity)>0||!me._screentint_info.style.opacity)?'inherit':'hidden';
					me._screentint_info.ggVisible=true;
				}
				else {
					me._screentint_info.style.visibility="hidden";
					me._screentint_info.ggVisible=false;
				}
			}
		}
		me._screentint_info.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
			me._info_title.ggText="";
			me._info_title.ggTextDiv.innerHTML=me._info_title.ggText;
			if (me._info_title.ggUpdateText) {
				me._info_title.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_title.ggUpdatePosition) {
				me._info_title.ggUpdatePosition();
			}
			me._info_title.ggTextDiv.scrollTop = 0;
			me._info_text_body.ggText="";
			me._info_text_body.ggTextDiv.innerHTML=me._info_text_body.ggText;
			if (me._info_text_body.ggUpdateText) {
				me._info_text_body.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._info_text_body.ggUpdatePosition) {
				me._info_text_body.ggUpdatePosition();
			}
			me._info_text_body.ggTextDiv.scrollTop = 0;
		}
		me._screentint_info.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_info);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 11px;';
		hs+='position : absolute;';
		hs+='top : 14px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('ht_ani2', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('ht_ani2', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._screentint_image=document.createElement('div');
		el.ggId="screentint_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.784314);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screentint_image.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screentint_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screentint_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screentint_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screentint_image.style[domTransition]='';
				if (me._screentint_image.ggCurrentLogicStateVisible == 0) {
					me._screentint_image.style.visibility=(Number(me._screentint_image.style.opacity)>0||!me._screentint_image.style.opacity)?'inherit':'hidden';
					me._screentint_image.ggVisible=true;
				}
				else {
					me._screentint_image.style.visibility="hidden";
					me._screentint_image.ggVisible=false;
				}
			}
		}
		me._screentint_image.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._screentint_image.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screentint_image);
		el=me._video_screentint_youtube=document.createElement('div');
		el.ggId="video_screentint_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_screentint_youtube.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_screentint_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_screentint_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_screentint_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_screentint_youtube.style[domTransition]='';
				if (me._video_screentint_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_screentint_youtube.style.visibility=(Number(me._video_screentint_youtube.style.opacity)>0||!me._video_screentint_youtube.style.opacity)?'inherit':'hidden';
					me._video_screentint_youtube.ggVisible=true;
				}
				else {
					me._video_screentint_youtube.style.visibility="hidden";
					me._video_screentint_youtube.ggVisible=false;
				}
			}
		}
		me._video_screentint_youtube.onclick=function (e) {
			player.setVariableValue('vis_video_youtube', false);
		}
		me._video_screentint_youtube.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_screentint_youtube);
		el=me._screen_tint_url=document.createElement('div');
		el.ggId="screen_tint_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._screen_tint_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._screen_tint_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._screen_tint_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._screen_tint_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._screen_tint_url.style[domTransition]='';
				if (me._screen_tint_url.ggCurrentLogicStateVisible == 0) {
					me._screen_tint_url.style.visibility=(Number(me._screen_tint_url.style.opacity)>0||!me._screen_tint_url.style.opacity)?'inherit':'hidden';
					me._screen_tint_url.ggVisible=true;
				}
				else {
					me._screen_tint_url.style.visibility="hidden";
					me._screen_tint_url.ggVisible=false;
				}
			}
		}
		me._screen_tint_url.onclick=function (e) {
			player.setVariableValue('vis_website', false);
		}
		me._screen_tint_url.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._screen_tint_url);
		el=me._button_mute=document.createElement('div');
		el.ggId="button_mute";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_mute.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_mute.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_mute') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_mute.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_mute.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_mute.style[domTransition]='';
				if (me._button_mute.ggCurrentLogicStateVisible == 0) {
					me._button_mute.style.visibility=(Number(me._button_mute.style.opacity)>0||!me._button_mute.style.opacity)?'inherit':'hidden';
					me._button_mute.ggVisible=true;
				}
				else {
					me._button_mute.style.visibility=(Number(me._button_mute.style.opacity)>0||!me._button_mute.style.opacity)?'inherit':'hidden';
					me._button_mute.ggVisible=true;
				}
			}
		}
		me._button_mute.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._unmute=document.createElement('div');
		els=me._unmute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3Mi4zLDQyMi45YzAsMS41LTEsMi4xLTIuMywxLjJsLTI1LjMtMTcuNmgtMTQuNGMtMC44LDAtMS41LTAuNy0xLjUtMS41di0xNS44YzAtMC44LDAuNy0xLjUsMS41LTEuNWgxNC40bDI1LjMtMTcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMy0wLjksMi4zLTAuMywyLjMsMS4yQy0xNzIuMywzNzEuMS0x'+
			'NzIuMyw0MjIuOS0xNzIuMyw0MjIuOXogTS0xNTUsMzk3YzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjQsMC0yLjJjMi4yLTIuNywzLjItNiwzLjItOS4yaDBjMC0zLjMtMS4xLTYuNS0zLjItOS4yYy0wLjYtMC43LTAuNi0xLjYsMC0yLjJsMS43LTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjYsMS42LTAuNiwyLjIsMEMtMTU2LjYsMzg3LjctMTU1LDM5Mi4zLTE1NSwzOTdMLTE1NSwzOTd6IE0tMTQwLjksMzk3YzAsOC4zLTMsMTYuNS04LjksMjNjLTAuNiwwLjYtMS42LD'+
			'AuNi0yLjEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJjNC45LTUuNCw3LjMtMTIuMyw3LjMtMTkuMmgwYzAtNi45LTIuNC0xMy44LTcuMy0xOS4yYy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsMS43LTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjYsMS41LTAuNiwyLjEsMEMtMTQzLjksMzgwLjUtMTQwLjksMzg4LjctMTQwLjksMzk3TC0xNDAuOSwzOTd6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNiwzNjkuOWwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwx'+
			'LjV2MTUuOGMwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTQuNGwyNS4zLDE3LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjMsMC45LDIuMywwLjMsMi4zLTEuMnYtNTEuOEMtMTcyLjMsMzY5LjYtMTczLjMsMzY5LTE3NC42LDM2OS45eiIvPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE0OS45LDM3NGMtMC42LTAuNi0xLjYtMC42LTIuMSwwbC0xLjcsMS43Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjJjNC45LDUuNCw3LjMsMTIuMyw3LjMsMTkuMmgwJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLDYuOS0yLjQsMTMuOC03LjMsMTkuMmMtMC42LDAuNi0wLjYsMS42LDAsMi4ybDEuNy'+
			'wxLjdjMC42LDAuNiwxLjUsMC42LDIuMSwwYzUuOS02LjUsOC45LTE0LjgsOC45LTIzaDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNDAuOSwzODguNy0xNDMuOSwzODAuNS0xNDkuOSwzNzR6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTYyLDM4NGwtMS43LDEuN2MtMC42LDAuNi0wLjYsMS40LDAsMi4yYzIuMiwyLjcsMy4yLDYsMy4yLDkuMmgwYzAsMy4zLTEuMSw2LjUtMy4yLDkuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNiwwLjctMC42LDEuNiwwLDIuMmwxLjcsMS43YzAuNiwwLjYsMS42LDAuNiwyLjIsMGMzLjItMy43LDQuOC04LjQsNC44LTEzLjFoMGMw'+
			'LTQuNy0xLjYtOS4zLTQuOC0xMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTYwLjQsMzgzLjQtMTYxLjQsMzgzLjQtMTYyLDM4NHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._unmute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._unmute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3Miw0MjUuOGMwLDEuNy0xLjEsMi4zLTIuNiwxLjNsLTI4LjEtMTkuNmgtMTZjLTAuOSwwLTEuNy0wLjgtMS43LTEuN3YtMTcuNmMwLTAuOSwwLjgtMS43LDEuNy0xLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2gxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zQy0xNzIsMzY4LjItMTcy'+
			'LDQyNS44LTE3Miw0MjUuOHogTS0xNTIuNywzOTdjMCw1LjItMS44LDEwLjQtNS4zLDE0LjVjLTAuNywwLjYtMS44LDAuNi0yLjQsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjYsMC0yLjRjMi40LTMsMy42LTYuNiwzLjYtMTAuM2gwYzAtMy42LTEuMi03LjMtMy42LTEwLjNjLTAuNy0wLjgtMC43LTEuNywwLTIuNGwxLjgtMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNiwxLjgtMC42LDIuNCwwQy0xNTQuNSwzODYuNi0xNTIuNywzOTEuOC0xNTIuNywzOTdMLTE1Mi43LDM5N3ogTS0xMzcuMSwzOTdjMCw5LjItMy4zLDE4LjQtOS45LDI1LjYmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtMC43LDAuNi0xLjcsMC42LTIuNCwwbC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRjNS40LTYsOC4yLTEzLjcsOC4yLTIxLjNoMGMwLTcuNi0yLjctMTUuMy04LjItMjEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsMS44LTEuOGMwLjctMC43LDEuNy0wLjcsMi40LDBDLTE0MC41LDM3OC42LTEzNy4xLDM4Ny44LTEzNy4xLDM5N0wtMTM3LjEsMzk3eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc0LjUsMzY2LjlsLTI4LjEsMTkuNmgtMTZjLTAuOSwwLTEuNywwLjgt'+
			'MS43LDEuN3YxNy42YzAsMC45LDAuOCwxLjcsMS43LDEuN2gxNmwyOC4xLDE5LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQsMSwyLjYsMC40LDIuNi0xLjN2LTU3LjVDLTE3MiwzNjYuNS0xNzMuMSwzNjUuOS0xNzQuNSwzNjYuOXoiLz4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDcuMSwzNzEuNGMtMC43LTAuNi0xLjctMC42LTIuNCwwbC0xLjgsMS44Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRjNS40LDYsOC4yLDEzLjcsOC4yLDIxLjNoMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCw3LjYtMi43LDE1LjMtOC4yLDIxLjNjLTAuNywwLjctMC43LDEuNywwLDIuNGwxLj'+
			'gsMS44YzAuNywwLjcsMS43LDAuNywyLjQsMGM2LjYtNy4yLDkuOS0xNi40LDkuOS0yNS42aDAmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMzcuMSwzODcuOC0xNDAuNSwzNzguNi0xNDcuMSwzNzEuNHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuNSwzODIuNWwtMS44LDEuOGMtMC43LDAuNy0wLjcsMS42LDAsMi40YzIuNCwzLDMuNiw2LjYsMy42LDEwLjNoMGMwLDMuNi0xLjIsNy4zLTMuNiwxMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LDAuOC0wLjcsMS43LDAsMi40bDEuOCwxLjhjMC42LDAuNiwxLjgsMC42LDIuNCwwYzMuNi00LjIsNS4zLTkuMyw1'+
			'LjMtMTQuNWgwYzAtNS4yLTEuOC0xMC40LTUuMy0xNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTU4LjcsMzgxLjktMTU5LjksMzgxLjktMTYwLjUsMzgyLjV6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._unmute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="unmute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._unmute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._unmute.onclick=function (e) {
				player.pauseSound("_background");
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility='hidden';
			me._unmute.ggVisible=false;
			me._mute.style[domTransition]='none';
			me._mute.style.visibility=(Number(me._mute.style.opacity)>0||!me._mute.style.opacity)?'inherit':'hidden';
			me._mute.ggVisible=true;
			player.setVariableValue('isplaying', false);
		}
		me._unmute.onmouseover=function (e) {
			me._unmute__img.style.visibility='hidden';
			me._unmute__imgo.style.visibility='inherit';
		}
		me._unmute.onmouseout=function (e) {
			me._unmute__img.style.visibility='inherit';
			me._unmute__imgo.style.visibility='hidden';
		}
		me._unmute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._unmute);
		el=me._mute=document.createElement('div');
		els=me._mute__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTIxNS44LDQwNC45di0xNS44YzAtMC44LDAuNy0xLjUsMS41LTEuNWgxNC40bDI1LjMtMTcuNmMxLjMtMC45LDIuMy0wLjMsMi4zLDEuMlYzODhsLTIyLjIsMjIuMmwtNS40LTMuN2gtMTQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0yMTUuMSw0MDYuNC0yMTUuOCw0MDUuOC0yMTUuOCw0MDQuOXogTS0xNzIu'+
			'Myw0MjIuOWMwLDEuNS0xLDIuMS0yLjMsMS4ybC0xMi40LTguN2wxNC43LTE0LjdWNDIyLjl6IE0tMTU1LDM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsNC43LTEuNiw5LjMtNC44LDEzLjFjLTAuNiwwLjYtMS42LDAuNi0yLjIsMGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS40LDAtMi4yYzIuMi0yLjcsMy4yLTYsMy4yLTkuMmgwYzAtMi4zLTAuNS00LjUtMS42LTYuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7bDQtNEMtMTU2LDM4OS42LTE1NSwzOTMuMy0xNTUsMzk3TC0xNTUsMzk3eiBNLTE0MC45LDM5N2MwLDguMy0zLDE2LjUtOC45LDIzYy0wLjYsMC42LTEuNiwwLjYtMi4xLDBsLTEuNy0xLjcmI3'+
			'hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuNi0wLjYtMS42LDAtMi4yYzQuOS01LjQsNy4zLTEyLjMsNy4zLTE5LjJoMGMwLTUuOS0xLjgtMTEuOC01LjQtMTYuOGwzLjgtMy44Qy0xNDMuMiwzODIuNC0xNDAuOSwzODkuNy0xNDAuOSwzOTcmI3hkOyYjeGE7JiN4OTsmI3g5O0wtMTQwLjksMzk3eiBNLTE0MC4xLDM2NmwtNjYsNjZjLTAuMywwLjMtMC43LDAuNC0xLjEsMC40Yy0wLjQsMC0wLjgtMC4xLTEuMS0wLjRsLTEuNy0xLjdjLTAuNi0wLjYtMC42LTEuNiwwLTIuMmw2Ni02NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40czAuOCwwLjEsMS4xLDAuNGwxLjcs'+
			'MS43Qy0xMzkuNSwzNjQuNC0xMzkuNSwzNjUuNC0xNDAuMSwzNjZ6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQwLjEsMzYzLjhsLTEuNy0xLjdjLTAuMy0wLjMtMC43LTAuNC0xLjEtMC40Yy0wLjQsMC0wLjgsMC4xLTEuMSwwLjRsLTY2LDY2Yy0wLjYsMC42LTAuNiwxLjYsMCwyLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bDEuNywxLjdjMC4zLDAuMywwLjcsMC40LDEuMSwwLjRjMC40LDAsMC44LTAuMSwxLjEtMC40bDY2LTY2Qy0xMzkuNSwzNjUuNC0xMzkuNSwzNjQuNC0xNDAuMSwzNjMuOHoiLz4KICAgPHBhdGggZm'+
			'lsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNiw0MjQuMWMxLjMsMC45LDIuMywwLjMsMi4zLTEuMnYtMjIuMmwtMTQuNywxNC43TC0xNzQuNiw0MjQuMXoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTQuNSw0MTAuMmwyMi4yLTIyLjJ2LTE2LjljMC0xLjUtMS0yLjEtMi4zLTEuMmwtMjUuMywxNy42aC0xNC40Yy0wLjgsMC0xLjUsMC43LTEuNSwxLjV2MTUuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwwLjgsMC43LDEuNSwxLjUsMS41aDE0LjRMLTE5NC41LDQxMC4yeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS45LDM5MC40YzEsMi4xLDEuNiw0LjMsMS42'+
			'LDYuNmgwYzAsMy4zLTEuMSw2LjUtMy4yLDkuMmMtMC42LDAuNy0wLjYsMS42LDAsMi4ybDEuNywxLjcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNiwwLjYsMS42LDAuNiwyLjIsMGMzLjItMy43LDQuOC04LjQsNC44LTEzLjFoMGMwLTMuNy0xLTcuNC0zLTEwLjZMLTE2MS45LDM5MC40eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1MS43LDM4MC4yYzMuNiw1LDUuNCwxMC45LDUuNCwxNi44aDBjMCw2LjktMi40LDEzLjgtNy4zLDE5LjJjLTAuNiwwLjYtMC42LDEuNiwwLDIuMmwxLjcsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjYsMC42LDEuNSwwLjYsMi4xLD'+
			'BjNS45LTYuNSw4LjktMTQuOCw4LjktMjNoMGMwLTcuMy0yLjMtMTQuNi03LTIwLjdMLTE1MS43LDM4MC4yeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._mute__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTIyMC4zLDQwNS44di0xNy42YzAtMC45LDAuOC0xLjcsMS43LTEuN2gxNmwyOC4xLTE5LjZjMS40LTEsMi42LTAuNCwyLjYsMS4zVjM4N2wtMjQuNywyNC43bC02LTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0xNkMtMjE5LjUsNDA3LjUtMjIwLjMsNDA2LjctMjIwLjMsNDA1Ljh6IE0tMTcyLDQy'+
			'NS44YzAsMS43LTEuMiwyLjMtMi42LDEuM2wtMTMuOC05LjZsMTYuMy0xNi4zVjQyNS44eiBNLTE1Mi43LDM5NyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsNS4yLTEuOCwxMC40LTUuMywxNC41Yy0wLjcsMC42LTEuOCwwLjYtMi40LDBsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNiwwLTIuNGMyLjQtMywzLjYtNi42LDMuNi0xMC4zaDBjMC0yLjUtMC42LTUtMS43LTcuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDQuNC00LjRDLTE1My45LDM4OC44LTE1Mi43LDM5Mi45LTE1Mi43LDM5N0wtMTUyLjcsMzk3eiBNLTEzNy4xLDM5N2MwLDkuMi0zLjMsMTguNC05LjksMjUuNmMtMC43LDAuNi0xLjcsMC42LT'+
			'IuNCwwbC0xLjgtMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNy0wLjctMC43LTEuNywwLTIuNGM1LjQtNiw4LjItMTMuNyw4LjItMjEuM2gwYzAtNi42LTItMTMuMS02LTE4LjdsNC4zLTQuM0MtMTM5LjcsMzgwLjgtMTM3LjEsMzg4LjktMTM3LjEsMzk3TC0xMzcuMSwzOTd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xMzYuMiwzNjIuNmwtNzMuMyw3My4zYy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC40LDAtMC45LTAuMi0xLjItMC41bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVj'+
			'MC40LDAsMC45LDAuMiwxLjIsMC41bDEuOCwxLjhDLTEzNS42LDM2MC44LTEzNS42LDM2MS45LTEzNi4yLDM2Mi42eiIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTEzNi4yLDM2MC4ybC0xLjgtMS44Yy0wLjMtMC4zLTAuOC0wLjUtMS4yLTAuNXMtMC45LDAuMi0xLjIsMC41bC03My4zLDczLjNjLTAuNywwLjctMC43LDEuNywwLDIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtsMS44LDEuOGMwLjMsMC4zLDAuOCwwLjUsMS4yLDAuNWMwLjQsMCwwLjktMC4yLDEuMi0wLjVsNzMuMy03My4zQy0xMzUuNiwzNjEuOS0xMzUuNiwzNj'+
			'AuOC0xMzYuMiwzNjAuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzQuNSw0MjcuMWMxLjQsMSwyLjYsMC40LDIuNi0xLjN2LTI0LjZsLTE2LjMsMTYuM0wtMTc0LjUsNDI3LjF6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTk2LjYsNDExLjdMLTE3MiwzODd2LTE4LjhjMC0xLjctMS4yLTIuMy0yLjYtMS4zbC0yOC4xLDE5LjZoLTE2Yy0wLjksMC0xLjcsMC44LTEuNywxLjd2MTcuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMCwwLjksMC44LDEuNywxLjcsMS43aDE2TC0xOTYuNiw0MTEuN3oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAu'+
			'NSwzODkuNmMxLjIsMi4zLDEuNyw0LjgsMS43LDcuNGgwYzAsMy42LTEuMiw3LjMtMy42LDEwLjNjLTAuNywwLjgtMC43LDEuNywwLDIuNGwxLjgsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MwLjYsMC42LDEuOCwwLjYsMi40LDBjMy42LTQuMiw1LjMtOS4zLDUuMy0xNC41aDBjMC00LjEtMS4xLTguMi0zLjMtMTEuOEwtMTYwLjUsMzg5LjZ6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTQ5LjEsMzc4LjNjNCw1LjYsNiwxMi4xLDYsMTguN2gwYzAsNy42LTIuNywxNS4zLTguMiwyMS4zYy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMS44LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7JiN4OTtjMC43LDAuNywxLjcsMC43LDIuNCwwYzYuNi03LjIsOS45LTE2LjQsOS45LTI1LjZoMGMwLTguMS0yLjYtMTYuMi03LjctMjNMLTE0OS4xLDM3OC4zeiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._mute__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="mute";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mute.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mute.onclick=function (e) {
				player.playSound("_background","0");
			me._mute.style[domTransition]='none';
			me._mute.style.visibility='hidden';
			me._mute.ggVisible=false;
			me._unmute.style[domTransition]='none';
			me._unmute.style.visibility=(Number(me._unmute.style.opacity)>0||!me._unmute.style.opacity)?'inherit':'hidden';
			me._unmute.ggVisible=true;
			player.setVariableValue('isplaying', true);
		}
		me._mute.onmouseover=function (e) {
			me._mute__img.style.visibility='hidden';
			me._mute__imgo.style.visibility='inherit';
		}
		me._mute.onmouseout=function (e) {
			me._mute__img.style.visibility='inherit';
			me._mute__imgo.style.visibility='hidden';
		}
		me._mute.ggUpdatePosition=function (useTransition) {
		}
		me._button_mute.appendChild(me._mute);
		me.divSkin.appendChild(me._button_mute);
		el=me._video_popup_file=document.createElement('div');
		el.ggId="video_popup_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_file.style[domTransition]='';
				if (me._video_popup_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_file.style.visibility=(Number(me._video_popup_file.style.opacity)>0||!me._video_popup_file.style.opacity)?'inherit':'hidden';
					me._video_popup_file.ggVisible=true;
				}
				else {
					me._video_popup_file.style.visibility="hidden";
					me._video_popup_file.ggVisible=false;
				}
			}
		}
		me._video_popup_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_file=document.createElement('div');
		els=me._loading_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjQiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMCIgdmFsdWVzPSIwOzM7MDswIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW'+
			'5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGJlZ2luPSIwLjEyNXMiIHZhbHVlcz0iMDszOzA7MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4y'+
			'IDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC4yNXMiIHZhbHVlcz0iMDszOzA7MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIj4KICA8YW5pbWF0ZSBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgYmVnaW49IjAuMzc1cyIgdmFsdWVzPSIwOzM7MDswIi'+
			'ByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC41cyIgdmFsdWVzPSIwOzM7MDswIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNiki'+
			'IHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC42MjVzIiB2YWx1ZXM9IjA7MzswOzAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU'+
			'5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIgdmFsdWVzPSIwOzM7MDswIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC44NzVzIiB2YWx1ZXM9IjA7MzswOzAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRl'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_file.appendChild(me._loading_video_file);
		el=me._popup_video_file=document.createElement('div');
		me._popup_video_file.seekbars = [];
		me._popup_video_file.seekbars.push('seekbar_file');
		me._popup_video_file.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_file.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_file.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_file.hasChildNodes()) {
				me._popup_video_file.removeChild(me._popup_video_file.lastChild);
			}
			if (me._popup_video_file__vid) {
				me._popup_video_file__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._popup_video_file.ggVideoNotLoaded ==false && me._popup_video_file.ggDeactivate) { me._popup_video_file.ggDeactivate(); }
				me._popup_video_file.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('popup_video_file');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._popup_video_file.ggVideoNotLoaded = false;
			me._popup_video_file__vid=document.createElement('video');
			me._popup_video_file__vid.className='ggskin ggskin_video';
			me._popup_video_file__vid.setAttribute('width', '100%');
			me._popup_video_file__vid.setAttribute('height', '100%');
			me._popup_video_file__vid.setAttribute('controlsList', 'nodownload');
			me._popup_video_file__vid.setAttribute('oncontextmenu', 'return false;');
			me._popup_video_file__source=document.createElement('source');
			me._popup_video_file__source.setAttribute('src', media);
			me._popup_video_file__vid.setAttribute('playsinline', 'playsinline');
			me._popup_video_file__vid.setAttribute('style', ';');
			me._popup_video_file__vid.style.outline = 'none';
			me._popup_video_file__vid.appendChild(me._popup_video_file__source);
			me._popup_video_file.appendChild(me._popup_video_file__vid);
			var videoEl = player.registerVideoElement('popup_video_file', me._popup_video_file__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			me._popup_video_file.ggVideoSource = media;
		}
		el.ggId="popup_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_file.ggIsActive=function() {
			if (me._popup_video_file__vid != null) {
				return (me._popup_video_file__vid.paused == false && me._popup_video_file__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_file.style[domTransition]='';
				if (me._popup_video_file.ggCurrentLogicStateVisible == 0) {
					me._popup_video_file.style.visibility=(Number(me._popup_video_file.style.opacity)>0||!me._popup_video_file.style.opacity)?'inherit':'hidden';
					if (me._popup_video_file.ggVideoNotLoaded) {
						me._popup_video_file.ggInitMedia(me._popup_video_file.ggVideoSource);
					}
					me._popup_video_file.ggVisible=true;
				}
				else {
					me._popup_video_file.style.visibility="hidden";
					me._popup_video_file.ggInitMedia('');
					me._popup_video_file.ggVisible=false;
				}
			}
		}
		me._popup_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_file.appendChild(me._popup_video_file);
		me.divSkin.appendChild(me._video_popup_file);
		el=me._video_popup_controls_file=document.createElement('div');
		el.ggId="video_popup_controls_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 6px;';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 284px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_controls_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_controls_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_controls_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_controls_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_controls_file.style[domTransition]='';
				if (me._video_popup_controls_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_controls_file.style.visibility=(Number(me._video_popup_controls_file.style.opacity)>0||!me._video_popup_controls_file.style.opacity)?'inherit':'hidden';
					me._video_popup_controls_file.ggVisible=true;
				}
				else {
					me._video_popup_controls_file.style.visibility="hidden";
					me._video_popup_controls_file.ggVisible=false;
				}
			}
		}
		me._video_popup_controls_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._seekbar_file=document.createElement('div');
		me._seekbar_file__playhead=document.createElement('div');
		me._seekbar_file.mediaEl = null;
		me._seekbar_file.fromBufferSource = false;
		el.ggId="seekbar_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 14px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 249px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._seekbar_file.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_file__playhead.style.visibility = 'hidden';
				me._seekbar_file.style.background = '#000000';
				me._seekbar_file.ggConnected = false;
			}
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.removeEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.removeEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.removeEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.removeEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.removeEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
			}
			me._seekbar_file.mediaEl = player.getMediaObject('popup_video_file');
			if (me._seekbar_file.mediaEl) {
				me._seekbar_file.fromBufferSource = false;
			} else {
				me._seekbar_file.mediaEl = player.getMediaBufferSourceObject('popup_video_file');
				me._seekbar_file.fromBufferSource = true;
			}
			if (me._seekbar_file.mediaEl != null) {
				me._seekbar_file__playhead.style.visibility = 'inherit';
				me._seekbar_file__playhead.style.left = '1px';
				if (me._seekbar_file.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.bufferSoundActivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggActivate(); };
						player.addListener('bufferSoundPlay', me._seekbar_file.bufferSoundActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.bufferSoundDeactivate = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._seekbar_file.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.bufferSoundMediaEnded = function(args) { if (args['id'] == me._seekbar_file.mediaEl.id) me._seekbar_file.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._seekbar_file.bufferSoundMediaEnded);
					}
				} else {
					me._seekbar_file.mediaEl.addEventListener('progress', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('canplay', me._seekbar_file.updatePlayback);
					me._seekbar_file.mediaEl.addEventListener('timeupdate', me._seekbar_file.updatePlayback);
					if (me._seekbar_file.ggActivate) {
						me._seekbar_file.mediaEl.addEventListener('play', me._seekbar_file.ggActivate);
					}
					if (me._seekbar_file.ggDeactivate) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggDeactivate);
						me._seekbar_file.mediaEl.addEventListener('pause', me._seekbar_file.ggDeactivate);
					}
					if (me._seekbar_file.ggMediaEnded) {
						me._seekbar_file.mediaEl.addEventListener('ended', me._seekbar_file.ggMediaEnded);
					}
				}
				me._seekbar_file.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('popup_video_file');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_file.updatePlayback = function(args) {
			if (!me._seekbar_file.ggConnected) return;
			if (me._seekbar_file.mediaEl != null) {
				if (me._seekbar_file.mediaEl.readyState || (me._seekbar_file.fromBufferSource && args && args['id'] == me._seekbar_file.mediaEl.id)) {
					if (me._seekbar_file.fromBufferSource) {
						var percent = me._seekbar_file.mediaEl.bufferSoundCurrentTime() / me._seekbar_file.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._seekbar_file.mediaEl.currentTime / me._seekbar_file.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._seekbar_file.clientWidth - 2 * 8 + 1) * percent);
					playheadpos += 1;
					me._seekbar_file__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (8 / me._seekbar_file.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					if (me._seekbar_file.fromBufferSource) {
						gradientString += ', #c0c0c0 ' + currPos +'%, #c0c0c0 100%';
					} else {
						for (var i = 0; i < me._seekbar_file.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._seekbar_file.mediaEl.buffered.start(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._seekbar_file.mediaEl.buffered.end(i) / me._seekbar_file.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', #c0c0c0 ' + currPos + '%';
								} else {
									gradientString += ', #000000 ' + currPos + '%, #000000 ' + rangeStart + '%';
									gradientString += ', #c0c0c0 ' + rangeStart + '%';
								}
									gradientString += ', #c0c0c0 ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', #000000 ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._seekbar_file.style.background = gradientString;
				}
			}
		}
		me._seekbar_file.appendChild(me._seekbar_file__playhead);
		hs+='background: #000000;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 8px;';
		hs+=cssPrefix + 'border-radius: 8px;';
		var hs_playhead = 'height: 14px;';
		hs_playhead += 'width: 14px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: 1px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 7;';
		hs_playhead += cssPrefix + 'border-radius: 7px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		hs_playhead += 'pointer-events: none;';
		me._seekbar_file.setAttribute('style', hs);
		me._seekbar_file__playhead.setAttribute('style', hs_playhead);
		me._seekbar_file.ggIsActive=function() {
			if (me._seekbar_file.mediaEl != null) {
				return (me._seekbar_file.mediaEl.paused == false && me._seekbar_file.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_file.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.onmouseup=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend' || e.type == 'mouseup') {
				if (me._seekbar_file.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					if (me._seekbar_file.fromBufferSource) {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.bufferSoundDuration();
						if (e.type == 'mousemove' || e.type == 'mousedown') {
							me._seekbar_file.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							me._seekbar_file.mediaEl.bufferSoundSetTime(seekpos);
						}
					} else {
						var seekpos = (eventXPos / me._seekbar_file.clientWidth) * me._seekbar_file.mediaEl.duration;
						me._seekbar_file.mediaEl.currentTime = seekpos;
					}
				}
			}
		}
		me._seekbar_file.ggActivate=function () {
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
		}
		me._seekbar_file.ggDeactivate=function () {
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
		}
		me._seekbar_file.ggUpdatePosition=function (useTransition) {
			me._seekbar_file.updatePlayback();
		}
		me._seekbar_file.ggNodeChange=function () {
			me._seekbar_file.connectToMediaEl();
		}
		me._video_popup_controls_file.appendChild(me._seekbar_file);
		el=me._ht_video_play_file=document.createElement('div');
		els=me._ht_video_play_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNTAuNSwzOTguNmwtMzguMSwyNi42Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMlYzNzBjMC0xLjUsMS0yLjEsMi4zLTEuMmwzOC4yLDI2LjYmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTQ5LjMsMzk2LjMtMTQ5LjMsMzk3LjctMTUwLjUsMzk4LjZ6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJf'+
			'MiI+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xOTEsMzcwYzAtMS41LDEtMi4xLDIuMy0xLjJsMzguMiwyNi42YzEuMywwLjksMS4zLDIuMywwLDMuMmwtMzguMiwyNi42Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMlYzNzB6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_play_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_play_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE0Ny44LDM5OC44bC00Mi40LDI5LjZjLTEuNCwxLTIuNiwwLjQtMi42LTEuM1YzNjdjMC0xLjcsMS4yLTIuMywyLjYtMS4zbDQyLjQsMjkuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDYuNCwzOTYuMi0xNDYuNCwzOTcuOC0xNDcuOCwzOTguOHoiLz4KIDwvZz4KIDxnIGlk'+
			'PSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE5Mi44LDM2N2MwLTEuNywxLjItMi4zLDIuNi0xLjNsNDIuNCwyOS42YzEuNCwxLDEuNCwyLjYsMCwzLjZsLTQyLjQsMjkuNmMtMS40LDEtMi42LDAuNC0yLjYtMS4zVjM2N3oiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_video_play_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_play_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_play_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_play_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.playVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility='hidden';
			me._ht_video_play_file.ggVisible=false;
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility=(Number(me._ht_video_pause_file.style.opacity)>0||!me._ht_video_pause_file.style.opacity)?'inherit':'hidden';
			me._ht_video_pause_file.ggVisible=true;
		}
		me._ht_video_play_file.onmouseover=function (e) {
			me._ht_video_play_file__img.style.visibility='hidden';
			me._ht_video_play_file__imgo.style.visibility='inherit';
		}
		me._ht_video_play_file.onmouseout=function (e) {
			me._ht_video_play_file__img.style.visibility='inherit';
			me._ht_video_play_file__imgo.style.visibility='hidden';
		}
		me._ht_video_play_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_play_file);
		el=me._ht_video_pause_file=document.createElement('div');
		els=me._ht_video_pause_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNzcuNyw0MTYuM2MwLDEuMy0xLDIuMy0yLjMsMi4zaC0xNC4zYy0xLjMsMC0yLjMtMS0yLjMtMi4zdi0zOC42YzAtMS4zLDEtMi4zLDIuMy0yLjNoMTQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMywwLDIuMywxLDIuMywyLjNDLTE3Ny43LDM3Ny43LTE3Ny43LDQxNi4zLTE3Ny43LDQx'+
			'Ni4zeiBNLTE1My40LDQxNi4zYzAsMS4zLTEsMi4zLTIuMywyLjNILTE3MGMtMS4zLDAtMi4zLTEtMi4zLTIuM3YtMzguNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS4zLDEtMi4zLDIuMy0yLjNoMTQuM2MxLjMsMCwyLjMsMSwyLjMsMi4zQy0xNTMuNCwzNzcuNy0xNTMuNCw0MTYuMy0xNTMuNCw0MTYuM3oiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xODAsMzc1LjRoLTE0LjNjLTEuMywwLTIuMywxLTIuMywyLjN2MzguNmMwLDEuMywxLDIuMywyLjMsMi4zaDE0LjNjMS4zLDAsMi4zLTEsMi4zLTIuM3YtMzguNiYjeGQ7JiN4YT'+
			'smI3g5OyYjeDk7JiN4OTtDLTE3Ny43LDM3Ni40LTE3OC43LDM3NS40LTE4MCwzNzUuNHoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTUuNywzNzUuNEgtMTcwYy0xLjMsMC0yLjMsMS0yLjMsMi4zdjM4LjZjMCwxLjMsMSwyLjMsMi4zLDIuM2gxNC4zYzEuMywwLDIuMy0xLDIuMy0yLjN2LTM4LjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNTMuNCwzNzYuNC0xNTQuNCwzNzUuNC0xNTUuNywzNzUuNHoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_video_pause_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_pause_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OCw0MTguNGMwLDEuNC0xLjEsMi42LTIuNiwyLjZoLTE1LjljLTEuNCwwLTIuNi0xLjEtMi42LTIuNnYtNDIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS40LDEuMS0yLjYsMi42LTIuNmgxNS45YzEuNCwwLDIuNiwxLjEsMi42LDIuNkMtMTc4LDM3NS41LTE3OCw0MTgu'+
			'NC0xNzgsNDE4LjR6IE0tMTUxLDQxOC40YzAsMS40LTEuMSwyLjYtMi42LDIuNmgtMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTQyLjljMC0xLjQsMS4xLTIuNiwyLjYtMi42aDE1LjljMS40LDAsMi42LDEuMSwyLjYsMi42Qy0xNTEsMzc1LjUtMTUxLDQxOC40LTE1MSw0MTguNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xODAuNSwzNzNoLTE1LjljLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY0Mi45YzAsMS40LDEuMSwyLjYsMi42LDIuNmgxNS45YzEuNCwwLDIuNi0xLjEsMi42LTIuNn'+
			'YtNDIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE3OCwzNzQuMS0xNzkuMSwzNzMtMTgwLjUsMzczeiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE1My41LDM3M2gtMTUuOWMtMS40LDAtMi42LDEuMS0yLjYsMi42djQyLjljMCwxLjQsMS4xLDIuNiwyLjYsMi42aDE1LjljMS40LDAsMi42LTEuMSwyLjYtMi42di00Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTUxLDM3NC4xLTE1Mi4xLDM3My0xNTMuNSwzNzN6Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_pause_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_pause_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 25px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 25px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_pause_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_video_pause_file.onclick=function (e) {
			if (me._popup_video_file.ggApiPlayer) {
				if (me._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._popup_video_file.ggApiPlayer.pauseVideo();
					};
					if (me._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._popup_video_file.ggApiPlayerType == 'vimeo') {
					me._popup_video_file.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("popup_video_file");
			}
			me._ht_video_pause_file.style[domTransition]='none';
			me._ht_video_pause_file.style.visibility='hidden';
			me._ht_video_pause_file.ggVisible=false;
			me._ht_video_play_file.style[domTransition]='none';
			me._ht_video_play_file.style.visibility=(Number(me._ht_video_play_file.style.opacity)>0||!me._ht_video_play_file.style.opacity)?'inherit':'hidden';
			me._ht_video_play_file.ggVisible=true;
		}
		me._ht_video_pause_file.onmouseover=function (e) {
			me._ht_video_pause_file__img.style.visibility='hidden';
			me._ht_video_pause_file__imgo.style.visibility='inherit';
		}
		me._ht_video_pause_file.onmouseout=function (e) {
			me._ht_video_pause_file__img.style.visibility='inherit';
			me._ht_video_pause_file__imgo.style.visibility='hidden';
		}
		me._ht_video_pause_file.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_controls_file.appendChild(me._ht_video_pause_file);
		me.divSkin.appendChild(me._video_popup_controls_file);
		el=me._information=document.createElement('div');
		el.ggId="information";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 480px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information.style[domTransition]='';
				if (me._information.ggCurrentLogicStateVisible == 0) {
					me._information.style.visibility=(Number(me._information.style.opacity)>0||!me._information.style.opacity)?'inherit':'hidden';
					me._information.ggVisible=true;
				}
				else {
					me._information.style.visibility="hidden";
					me._information.ggVisible=false;
				}
			}
		}
		me._information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg=document.createElement('div');
		el.ggId="informationbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 250px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 480px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._informationbg);
		el=me._info_text_body=document.createElement('div');
		els=me._info_text_body__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 193px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 458px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 458px;';
		hs+='height: 193px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_text_body);
		el=me._info_title=document.createElement('div');
		els=me._info_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 400px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._info_title);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl'+
			'8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIy'+
			'NC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLT'+
			'E3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiMzQzNDM0MiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MW'+
			'MtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQu'+
			'ODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOT'+
			'U5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl'+
			'8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkzLDE2bDMuNDM5LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40Njct'+
			'MS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDFjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDBDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5ei'+
			'BNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3'+
			'Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40Mz'+
			'lMMTcuNjkzLDE2bDMuNDM5LTMuNDQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxbDMu'+
			'NDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			player.setVariableValue('vis_info_popup', false);
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._information);
		el=me._information_ns=document.createElement('div');
		el.ggId="information_ns";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 500px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_ns.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_ns.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup_n') == true)) && 
				((player.getViewerSize().width < 480))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_ns.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_ns.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_ns.style[domTransition]='';
				if (me._information_ns.ggCurrentLogicStateVisible == 0) {
					me._information_ns.style.visibility=(Number(me._information_ns.style.opacity)>0||!me._information_ns.style.opacity)?'inherit':'hidden';
					me._information_ns.ggVisible=true;
				}
				else {
					me._information_ns.style.visibility="hidden";
					me._information_ns.ggVisible=false;
				}
			}
		}
		me._information_ns.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg_ns=document.createElement('div');
		el.ggId="informationbg_ns";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 500px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg_ns.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg_ns.ggUpdatePosition=function (useTransition) {
		}
		me._information_ns.appendChild(me._informationbg_ns);
		el=me._info_title_ns=document.createElement('div');
		els=me._info_title_ns__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title_ns";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 254px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 254px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title_ns.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title_ns.ggUpdatePosition=function (useTransition) {
		}
		me._information_ns.appendChild(me._info_title_ns);
		el=me._ht_info_close_ns=document.createElement('div');
		els=me._ht_info_close_ns__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl'+
			'8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIy'+
			'NC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLT'+
			'E3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiMzQzNDM0MiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MW'+
			'MtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQu'+
			'ODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOT'+
			'U5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close_ns__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close_ns__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl'+
			'8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkzLDE2bDMuNDM5LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40Njct'+
			'MS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDFjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDBDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5ei'+
			'BNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3'+
			'Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40Mz'+
			'lMMTcuNjkzLDE2bDMuNDM5LTMuNDQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxbDMu'+
			'NDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close_ns__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close_ns";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close_ns.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close_ns.onclick=function (e) {
			player.setVariableValue('vis_info_popup_n', false);
		}
		me._ht_info_close_ns.onmouseover=function (e) {
			me._ht_info_close_ns__img.style.visibility='hidden';
			me._ht_info_close_ns__imgo.style.visibility='inherit';
		}
		me._ht_info_close_ns.onmouseout=function (e) {
			me._ht_info_close_ns__img.style.visibility='inherit';
			me._ht_info_close_ns__imgo.style.visibility='hidden';
		}
		me._ht_info_close_ns.ggUpdatePosition=function (useTransition) {
		}
		me._information_ns.appendChild(me._ht_info_close_ns);
		el=me._info_text_body_ns=document.createElement('div');
		els=me._info_text_body_ns__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body_ns";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 450px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 285px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 285px;';
		hs+='height: 450px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body_ns.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body_ns.ggUpdatePosition=function (useTransition) {
		}
		me._information_ns.appendChild(me._info_text_body_ns);
		el=me._horizontals=document.createElement('div');
		el.ggId="Horizontals";
		el.ggDx=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 26px;';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 292px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._horizontals.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._horizontals.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._ht_url_image_n_1s=document.createElement('div');
		els=me._ht_url_image_n_1s__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNj'+
			'LTAuOCwwLTEuNS0wLjctMS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS'+
			'41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_n_1s__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image_n_1s__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0'+
			'MzQuMWgtMTcuN2MtMC45LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_n_1s__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image_n_1s";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 39px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_n_1s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_url_image_n_1s.onclick=function (e) {
			player.openUrl("https:\/\/www.zeit.de\/angebote\/nachhaltiger-kaffee\/zukunft-des-kaffeeanbaus\/index","_blank");
		}
		me._ht_url_image_n_1s.onmouseover=function (e) {
			me._ht_url_image_n_1s__img.style.visibility='hidden';
			me._ht_url_image_n_1s__imgo.style.visibility='inherit';
		}
		me._ht_url_image_n_1s.onmouseout=function (e) {
			me._ht_url_image_n_1s__img.style.visibility='inherit';
			me._ht_url_image_n_1s__imgo.style.visibility='hidden';
		}
		me._ht_url_image_n_1s.ggUpdatePosition=function (useTransition) {
		}
		me._horizontals.appendChild(me._ht_url_image_n_1s);
		el=me._textzs=document.createElement('div');
		els=me._textzs__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TextZs";
		el.ggDy=-23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 222px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 222px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Die Zukunft des Kaffeeanbaus";
		el.appendChild(els);
		me._textzs.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._textzs.onclick=function (e) {
			player.openUrl("https:\/\/www.zeit.de\/angebote\/nachhaltiger-kaffee\/zukunft-des-kaffeeanbaus\/index","_blank");
		}
		me._textzs.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._horizontals.appendChild(me._textzs);
		el=me._ht_url_image_n_2s=document.createElement('div');
		els=me._ht_url_image_n_2s__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNj'+
			'LTAuOCwwLTEuNS0wLjctMS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS'+
			'41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_n_2s__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image_n_2s__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0'+
			'MzQuMWgtMTcuN2MtMC45LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_n_2s__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image_n_2s";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_n_2s.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_url_image_n_2s.onclick=function (e) {
			player.openUrl("https:\/\/cmk.zeit.de\/cms\/microsite\/11247","_blank");
		}
		me._ht_url_image_n_2s.onmouseover=function (e) {
			me._ht_url_image_n_2s__img.style.visibility='hidden';
			me._ht_url_image_n_2s__imgo.style.visibility='inherit';
		}
		me._ht_url_image_n_2s.onmouseout=function (e) {
			me._ht_url_image_n_2s__img.style.visibility='inherit';
			me._ht_url_image_n_2s__imgo.style.visibility='hidden';
		}
		me._ht_url_image_n_2s.ggUpdatePosition=function (useTransition) {
		}
		me._horizontals.appendChild(me._ht_url_image_n_2s);
		el=me._textis=document.createElement('div');
		els=me._textis__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Textis";
		el.ggDy=16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 38px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Infografik";
		el.appendChild(els);
		me._textis.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._textis.onclick=function (e) {
			player.openUrl("https:\/\/cmk.zeit.de\/cms\/microsite\/11247","_blank");
		}
		me._textis.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._horizontals.appendChild(me._textis);
		me._information_ns.appendChild(me._horizontals);
		me.divSkin.appendChild(me._information_ns);
		el=me._information_n=document.createElement('div');
		el.ggId="information_n";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 300px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 480px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_n.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_n.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup_n') == true)) && 
				((player.getViewerSize().width >= 480))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_n.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_n.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_n.style[domTransition]='';
				if (me._information_n.ggCurrentLogicStateVisible == 0) {
					me._information_n.style.visibility=(Number(me._information_n.style.opacity)>0||!me._information_n.style.opacity)?'inherit':'hidden';
					me._information_n.ggVisible=true;
				}
				else {
					me._information_n.style.visibility="hidden";
					me._information_n.ggVisible=false;
				}
			}
		}
		me._information_n.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg_n=document.createElement('div');
		el.ggId="informationbg_n";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 295px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg_n.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg_n.ggUpdatePosition=function (useTransition) {
		}
		me._information_n.appendChild(me._informationbg_n);
		el=me._info_title_n=document.createElement('div');
		els=me._info_title_n__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title_n";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 400px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title_n.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title_n.ggUpdatePosition=function (useTransition) {
		}
		me._information_n.appendChild(me._info_title_n);
		el=me._ht_info_close_n=document.createElement('div');
		els=me._ht_info_close_n__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl'+
			'8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIy'+
			'NC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLT'+
			'E3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiMzQzNDM0MiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MW'+
			'MtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQu'+
			'ODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOT'+
			'U5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close_n__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close_n__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl'+
			'8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkzLDE2bDMuNDM5LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40Njct'+
			'MS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDFjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDBDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5ei'+
			'BNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3'+
			'Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40Mz'+
			'lMMTcuNjkzLDE2bDMuNDM5LTMuNDQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxbDMu'+
			'NDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close_n__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close_n";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close_n.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close_n.onclick=function (e) {
			player.setVariableValue('vis_info_popup_n', false);
		}
		me._ht_info_close_n.onmouseover=function (e) {
			me._ht_info_close_n__img.style.visibility='hidden';
			me._ht_info_close_n__imgo.style.visibility='inherit';
		}
		me._ht_info_close_n.onmouseout=function (e) {
			me._ht_info_close_n__img.style.visibility='inherit';
			me._ht_info_close_n__imgo.style.visibility='hidden';
		}
		me._ht_info_close_n.ggUpdatePosition=function (useTransition) {
		}
		me._information_n.appendChild(me._ht_info_close_n);
		el=me._horizontal=document.createElement('div');
		el.ggId="Horizontal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 249px;';
		hs+='visibility : inherit;';
		hs+='width : 425px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._horizontal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._horizontal.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image_n_1=document.createElement('div');
		els=me._ht_url_image_n_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNj'+
			'LTAuOCwwLTEuNS0wLjctMS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS'+
			'41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_n_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image_n_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0'+
			'MzQuMWgtMTcuN2MtMC45LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_n_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image_n_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_n_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_url_image_n_1.onclick=function (e) {
			player.openUrl("https:\/\/www.zeit.de\/angebote\/nachhaltiger-kaffee\/zukunft-des-kaffeeanbaus\/index","_blank");
		}
		me._ht_url_image_n_1.onmouseover=function (e) {
			me._ht_url_image_n_1__img.style.visibility='hidden';
			me._ht_url_image_n_1__imgo.style.visibility='inherit';
		}
		me._ht_url_image_n_1.onmouseout=function (e) {
			me._ht_url_image_n_1__img.style.visibility='inherit';
			me._ht_url_image_n_1__imgo.style.visibility='hidden';
		}
		me._ht_url_image_n_1.ggUpdatePosition=function (useTransition) {
		}
		me._horizontal.appendChild(me._ht_url_image_n_1);
		el=me._textz=document.createElement('div');
		els=me._textz__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TextZ";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 36px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 222px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 222px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Die Zukunft des Kaffeeanbaus";
		el.appendChild(els);
		me._textz.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._textz.onclick=function (e) {
			player.openUrl("https:\/\/www.zeit.de\/angebote\/nachhaltiger-kaffee\/zukunft-des-kaffeeanbaus\/index","_blank");
		}
		me._textz.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._horizontal.appendChild(me._textz);
		el=me._texti=document.createElement('div');
		els=me._texti__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Texti";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 305px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 120px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Infografik";
		el.appendChild(els);
		me._texti.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._texti.onclick=function (e) {
			player.openUrl("https:\/\/cmk.zeit.de\/cms\/microsite\/11247","_blank");
		}
		me._texti.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._horizontal.appendChild(me._texti);
		el=me._ht_url_image_n_2=document.createElement('div');
		els=me._ht_url_image_n_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNj'+
			'LTAuOCwwLTEuNS0wLjctMS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS'+
			'41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_n_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image_n_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0'+
			'MzQuMWgtMTcuN2MtMC45LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_n_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image_n_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 267px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_n_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_url_image_n_2.onclick=function (e) {
			player.openUrl("https:\/\/cmk.zeit.de\/cms\/microsite\/11247","_blank");
		}
		me._ht_url_image_n_2.onmouseover=function (e) {
			me._ht_url_image_n_2__img.style.visibility='hidden';
			me._ht_url_image_n_2__imgo.style.visibility='inherit';
		}
		me._ht_url_image_n_2.onmouseout=function (e) {
			me._ht_url_image_n_2__img.style.visibility='inherit';
			me._ht_url_image_n_2__imgo.style.visibility='hidden';
		}
		me._ht_url_image_n_2.ggUpdatePosition=function (useTransition) {
		}
		me._horizontal.appendChild(me._ht_url_image_n_2);
		me._information_n.appendChild(me._horizontal);
		el=me._info_text_body_n=document.createElement('div');
		els=me._info_text_body_n__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body_n";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 194px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 194px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body_n.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body_n.ggUpdatePosition=function (useTransition) {
		}
		me._information_n.appendChild(me._info_text_body_n);
		me.divSkin.appendChild(me._information_n);
		el=me._information_v=document.createElement('div');
		el.ggId="information_v";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 300px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 480px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_v.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_v.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width < 500))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._information_v.ggCurrentLogicStateSize != newLogicStateSize) {
				me._information_v.ggCurrentLogicStateSize = newLogicStateSize;
				me._information_v.style[domTransition]='width 0s, height 0s';
				if (me._information_v.ggCurrentLogicStateSize == 0) {
					me._information_v.style.width='314px';
					me._information_v.style.height='300px';
					skin.updateSize(me._information_v);
				}
				else {
					me._information_v.style.width='480px';
					me._information_v.style.height='300px';
					skin.updateSize(me._information_v);
				}
			}
		}
		me._information_v.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup_v') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_v.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_v.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_v.style[domTransition]='width 0s, height 0s';
				if (me._information_v.ggCurrentLogicStateVisible == 0) {
					me._information_v.style.visibility=(Number(me._information_v.style.opacity)>0||!me._information_v.style.opacity)?'inherit':'hidden';
					me._information_v.ggVisible=true;
				}
				else {
					me._information_v.style.visibility="hidden";
					me._information_v.ggVisible=false;
				}
			}
		}
		me._information_v.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg_v=document.createElement('div');
		el.ggId="informationbg_v";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 295px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg_v.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg_v.ggUpdatePosition=function (useTransition) {
		}
		me._information_v.appendChild(me._informationbg_v);
		el=me._info_text_body_v=document.createElement('div');
		els=me._info_text_body_v__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body_v";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 194px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 95%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 194px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_text_body_v.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body_v.ggUpdatePosition=function (useTransition) {
		}
		me._information_v.appendChild(me._info_text_body_v);
		el=me._info_title_v=document.createElement('div');
		els=me._info_title_v__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title_v";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 400px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title_v.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title_v.ggUpdatePosition=function (useTransition) {
		}
		me._information_v.appendChild(me._info_title_v);
		el=me._ht_info_close_v=document.createElement('div');
		els=me._ht_info_close_v__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl'+
			'8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIy'+
			'NC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLT'+
			'E3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiMzQzNDM0MiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MW'+
			'MtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQu'+
			'ODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOT'+
			'U5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close_v__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close_v__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl'+
			'8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkzLDE2bDMuNDM5LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40Njct'+
			'MS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDFjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDBDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5ei'+
			'BNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3'+
			'Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40Mz'+
			'lMMTcuNjkzLDE2bDMuNDM5LTMuNDQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxbDMu'+
			'NDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close_v__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close_v";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close_v.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close_v.onclick=function (e) {
			player.setVariableValue('vis_info_popup_v', false);
		}
		me._ht_info_close_v.onmouseover=function (e) {
			me._ht_info_close_v__img.style.visibility='hidden';
			me._ht_info_close_v__imgo.style.visibility='inherit';
		}
		me._ht_info_close_v.onmouseout=function (e) {
			me._ht_info_close_v__img.style.visibility='inherit';
			me._ht_info_close_v__imgo.style.visibility='hidden';
		}
		me._ht_info_close_v.ggUpdatePosition=function (useTransition) {
		}
		me._information_v.appendChild(me._ht_info_close_v);
		el=me._textv=document.createElement('div');
		els=me._textv__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="TextV";
		el.ggDy=114;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="<b>Mehr Kaffees entdecken<\/b>";
		el.appendChild(els);
		me._textv.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._textv.onclick=function (e) {
			player.openUrl("https:\/\/www.nespresso.com\/de\/de\/order\/capsules\/vertuo","_blank");
		}
		me._textv.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information_v.appendChild(me._textv);
		me.divSkin.appendChild(me._information_v);
		el=me._momento=document.createElement('div');
		el.ggId="momento";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100.43%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._momento.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._momento.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_momento_3d') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._momento.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._momento.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._momento.style[domTransition]='';
				if (me._momento.ggCurrentLogicStateVisible == 0) {
					me._momento.style.visibility=(Number(me._momento.style.opacity)>0||!me._momento.style.opacity)?'inherit':'hidden';
					me._momento.ggVisible=true;
				}
				else {
					me._momento.style.visibility="hidden";
					me._momento.ggVisible=false;
				}
			}
		}
		me._momento.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg_1=document.createElement('div');
		el.ggId="informationbg_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg_1.ggUpdatePosition=function (useTransition) {
		}
		me._momento.appendChild(me._informationbg_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 50px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.490196);';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Loading";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._momento.appendChild(me._text_1);
		el=me.__3d_viewer=document.createElement('div');
		els=me.__3d_viewer__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="3d_Viewer";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<iframe src=\"gltf.html\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"allowfullscreen=\"true\" webkitallowfullscreen=\"true\" mozallowfullscreen=\"true\" width=\"100%\" height=\"100%\" style=\"  outline-style: none;<br\/>  box-shadow: none;<br\/>  border-color: transparent;<br\/>  background-color: black;<br\/>  color: white;\" ><\/iframe>";
		el.appendChild(els);
		me.__3d_viewer.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3d_viewer.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._momento.appendChild(me.__3d_viewer);
		el=me._close_url_1=document.createElement('div');
		els=me._close_url_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._close_url_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_url_1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close_url_1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="close_url_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5%;';
		hs+='top : 5%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close_url_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_url_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_momento_3d') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close_url_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close_url_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close_url_1.style[domTransition]='';
				if (me._close_url_1.ggCurrentLogicStateVisible == 0) {
					me._close_url_1.style.visibility=(Number(me._close_url_1.style.opacity)>0||!me._close_url_1.style.opacity)?'inherit':'hidden';
					me._close_url_1.ggVisible=true;
				}
				else {
					me._close_url_1.style.visibility="hidden";
					me._close_url_1.ggVisible=false;
				}
			}
		}
		me._close_url_1.onclick=function (e) {
			player.setVariableValue('vis_momento_3d', false);
		}
		me._close_url_1.onmouseover=function (e) {
			me._close_url_1__img.style.visibility='hidden';
			me._close_url_1__imgo.style.visibility='inherit';
		}
		me._close_url_1.onmouseout=function (e) {
			me._close_url_1__img.style.visibility='inherit';
			me._close_url_1__imgo.style.visibility='hidden';
		}
		me._close_url_1.ggUpdatePosition=function (useTransition) {
		}
		me._momento.appendChild(me._close_url_1);
		me.divSkin.appendChild(me._momento);
		el=me._vertuo=document.createElement('div');
		el.ggId="vertuo";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 100.43%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._vertuo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._vertuo.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_vertuo_3d') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._vertuo.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._vertuo.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._vertuo.style[domTransition]='';
				if (me._vertuo.ggCurrentLogicStateVisible == 0) {
					me._vertuo.style.visibility=(Number(me._vertuo.style.opacity)>0||!me._vertuo.style.opacity)?'inherit':'hidden';
					me._vertuo.ggVisible=true;
				}
				else {
					me._vertuo.style.visibility="hidden";
					me._vertuo.ggVisible=false;
				}
			}
		}
		me._vertuo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg_2=document.createElement('div');
		el.ggId="informationbg_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg_2.ggUpdatePosition=function (useTransition) {
		}
		me._vertuo.appendChild(me._informationbg_2);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 50px;';
		hs+='height: 20px;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.490196);';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Loading";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._vertuo.appendChild(me._text_2);
		el=me.__3d_viewer_2=document.createElement('div');
		els=me.__3d_viewer_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="3d_Viewer_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="<iframe src=\"gltf2.html\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\" frameborder=\"0\"allowfullscreen=\"true\" webkitallowfullscreen=\"true\" mozallowfullscreen=\"true\" width=\"100%\" height=\"100%\" style=\"  outline-style: none;<br\/>  box-shadow: none;<br\/>  border-color: transparent;<br\/>  background-color: black;<br\/>  color: white;\" ><\/iframe>";
		el.appendChild(els);
		me.__3d_viewer_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3d_viewer_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._vertuo.appendChild(me.__3d_viewer_2);
		el=me._close_url_2=document.createElement('div');
		els=me._close_url_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._close_url_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_url_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close_url_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="close_url_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5%;';
		hs+='top : 5%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close_url_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._close_url_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_vertuo_3d') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close_url_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close_url_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close_url_2.style[domTransition]='';
				if (me._close_url_2.ggCurrentLogicStateVisible == 0) {
					me._close_url_2.style.visibility=(Number(me._close_url_2.style.opacity)>0||!me._close_url_2.style.opacity)?'inherit':'hidden';
					me._close_url_2.ggVisible=true;
				}
				else {
					me._close_url_2.style.visibility="hidden";
					me._close_url_2.ggVisible=false;
				}
			}
		}
		me._close_url_2.onclick=function (e) {
			player.setVariableValue('vis_vertuo_3d', false);
		}
		me._close_url_2.onmouseover=function (e) {
			me._close_url_2__img.style.visibility='hidden';
			me._close_url_2__imgo.style.visibility='inherit';
		}
		me._close_url_2.onmouseout=function (e) {
			me._close_url_2__img.style.visibility='inherit';
			me._close_url_2__imgo.style.visibility='hidden';
		}
		me._close_url_2.ggUpdatePosition=function (useTransition) {
		}
		me._vertuo.appendChild(me._close_url_2);
		me.divSkin.appendChild(me._vertuo);
		el=me._video_popup_youtube=document.createElement('div');
		el.ggId="video_popup_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 80%;';
		hs+='left : 10%;';
		hs+='position : absolute;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_youtube.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_youtube.style[domTransition]='';
				if (me._video_popup_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_youtube.style.visibility=(Number(me._video_popup_youtube.style.opacity)>0||!me._video_popup_youtube.style.opacity)?'inherit':'hidden';
					me._video_popup_youtube.ggVisible=true;
				}
				else {
					me._video_popup_youtube.style.visibility="hidden";
					me._video_popup_youtube.ggVisible=false;
				}
			}
		}
		me._video_popup_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._loading_video_youtube=document.createElement('div');
		els=me._loading_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjQiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMCIgdmFsdWVzPSIwOzM7MDswIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW'+
			'5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGJlZ2luPSIwLjEyNXMiIHZhbHVlcz0iMDszOzA7MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4y'+
			'IDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC4yNXMiIHZhbHVlcz0iMDszOzA7MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIj4KICA8YW5pbWF0ZSBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgYmVnaW49IjAuMzc1cyIgdmFsdWVzPSIwOzM7MDswIi'+
			'ByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC41cyIgdmFsdWVzPSIwOzM7MDswIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNiki'+
			'IHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC42MjVzIiB2YWx1ZXM9IjA7MzswOzAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU'+
			'5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIgdmFsdWVzPSIwOzM7MDswIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC44NzVzIiB2YWx1ZXM9IjA7MzswOzAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRl'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_video_youtube__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_video_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._video_popup_youtube.appendChild(me._loading_video_youtube);
		el=me._popup_video_youtube=document.createElement('div');
		me._popup_video_youtube.seekbars = [];
			me._popup_video_youtube.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._popup_video_youtube.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._popup_video_youtube.seekbars.length; i++) {
					var seekbar = me.findElements(me._popup_video_youtube.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._popup_video_youtube.hasChildNodes()) {
				me._popup_video_youtube.removeChild(me._popup_video_youtube.lastChild);
			}
			if(media == '') {
				notifySeekbars();
			if (me._popup_video_youtube.ggVideoNotLoaded ==false && me._popup_video_youtube.ggDeactivate) { me._popup_video_youtube.ggDeactivate(); }
				me._popup_video_youtube.ggVideoNotLoaded = true;
				return;
			}
			me._popup_video_youtube.ggVideoNotLoaded = false;
			me._popup_video_youtube__vid=document.createElement('iframe');
			me._popup_video_youtube__vid.className='ggskin ggskin_video';
			var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=0&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._popup_video_youtube__vid.setAttribute('src', ggVideoUrl);
			me._popup_video_youtube__vid.setAttribute('width', '100%');
			me._popup_video_youtube__vid.setAttribute('height', '100%');
			me._popup_video_youtube__vid.setAttribute('allow', 'autoplay');
			me._popup_video_youtube__vid.setAttribute('allowfullscreen', 'true');
			me._popup_video_youtube__vid.setAttribute('style', 'border:none; ; ;');
			me._popup_video_youtube.appendChild(me._popup_video_youtube__vid);
			me._popup_video_youtube.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._popup_video_youtube.ggYoutubeApiReady();}
		}
		el.ggId="popup_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 100%;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_video_youtube.style[domTransition]='';
				if (me._popup_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._popup_video_youtube.style.visibility=(Number(me._popup_video_youtube.style.opacity)>0||!me._popup_video_youtube.style.opacity)?'inherit':'hidden';
					if (me._popup_video_youtube.ggVideoNotLoaded) {
						me._popup_video_youtube.ggInitMedia(me._popup_video_youtube.ggVideoSource);
					}
					me._popup_video_youtube.ggVisible=true;
				}
				else {
					me._popup_video_youtube.style.visibility="hidden";
					me._popup_video_youtube.ggInitMedia('');
					me._popup_video_youtube.ggVisible=false;
				}
			}
		}
		me._popup_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		me._video_popup_youtube.appendChild(me._popup_video_youtube);
		me.divSkin.appendChild(me._video_popup_youtube);
		el=me._web_page=document.createElement('div');
		els=me._web_page__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="web_page";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 90%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 90%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 100%;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._web_page.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._web_page.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._web_page.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._web_page.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._web_page.style[domTransition]='';
				if (me._web_page.ggCurrentLogicStateVisible == 0) {
					me._web_page.style.visibility=(Number(me._web_page.style.opacity)>0||!me._web_page.style.opacity)?'inherit':'hidden';
					me._web_page.ggVisible=true;
				}
				else {
					me._web_page.style.visibility="hidden";
					me._web_page.ggVisible=false;
				}
			}
		}
		me._web_page.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._web_page);
		el=me._mousefollower=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="MouseFollower";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : -40px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._mousefollower.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._mousefollower.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == false)) || 
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mousefollower.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mousefollower.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mousefollower.style[domTransition]='';
				if (me._mousefollower.ggCurrentLogicStateVisible == 0) {
					me._mousefollower.style.visibility="hidden";
					me._mousefollower.ggVisible=false;
				}
				else {
					me._mousefollower.style.visibility=(Number(me._mousefollower.style.opacity)>0||!me._mousefollower.style.opacity)?'inherit':'hidden';
					me._mousefollower.ggVisible=true;
				}
			}
		}
		me._mousefollower.onmouseover=function (e) {
			me.elementMouseOver['mousefollower']=true;
		}
		me._mousefollower.onmouseout=function (e) {
			me._tooltip.style[domTransition]='none';
			me._tooltip.style.opacity='0';
			me._tooltip.style.visibility='hidden';
			me.elementMouseOver['mousefollower']=false;
		}
		me._mousefollower.ontouchend=function (e) {
			me.elementMouseOver['mousefollower']=false;
		}
		me._mousefollower.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip=document.createElement('div');
		els=me._tooltip__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tooltip.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tooltip.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._tooltip.ggUpdateText();
		});
		el.appendChild(els);
		me._tooltip.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == false)) || 
				((player.getViewerSize().width <= 320))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip.style[domTransition]='';
				if (me._tooltip.ggCurrentLogicStateVisible == 0) {
					me._tooltip.style.visibility="hidden";
					me._tooltip.ggVisible=false;
				}
				else {
					me._tooltip.style.visibility=(Number(me._tooltip.style.opacity)>0||!me._tooltip.style.opacity)?'inherit':'hidden';
					me._tooltip.ggVisible=true;
				}
			}
		}
		me._tooltip.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._mousefollower.appendChild(me._tooltip);
		me.divSkin.appendChild(me._mousefollower);
		el=me._coffee_info_vertuo_info_mouse_over=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="Coffee_Info_Vertuo_info_mouse_OVER";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._coffee_info_vertuo_info_mouse_over.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._coffee_info_vertuo_info_mouse_over.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 320)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._coffee_info_vertuo_info_mouse_over.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._coffee_info_vertuo_info_mouse_over.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._coffee_info_vertuo_info_mouse_over.style[domTransition]='';
				if (me._coffee_info_vertuo_info_mouse_over.ggCurrentLogicStateVisible == 0) {
					me._coffee_info_vertuo_info_mouse_over.style.visibility=(Number(me._coffee_info_vertuo_info_mouse_over.style.opacity)>0||!me._coffee_info_vertuo_info_mouse_over.style.opacity)?'inherit':'hidden';
					me._coffee_info_vertuo_info_mouse_over.ggVisible=true;
				}
				else {
					me._coffee_info_vertuo_info_mouse_over.style.visibility="hidden";
					me._coffee_info_vertuo_info_mouse_over.ggVisible=false;
				}
			}
		}
		me._coffee_info_vertuo_info_mouse_over.onclick=function (e) {
			player.setVariableValue('coffee_num', player.hotspot.title);
			player.setVariableValue('vis_image_popup', true);
			player.setVariableValue('coffee_url', player.hotspot.description);
		}
		me._coffee_info_vertuo_info_mouse_over.onmouseover=function (e) {
			me.elementMouseOver['coffee_info_vertuo_info_mouse_over']=true;
		}
		me._coffee_info_vertuo_info_mouse_over.onmouseout=function (e) {
			me._tooltip_1.style[domTransition]='none';
			me._tooltip_1.style.opacity='0';
			me._tooltip_1.style.visibility='hidden';
			me.elementMouseOver['coffee_info_vertuo_info_mouse_over']=false;
		}
		me._coffee_info_vertuo_info_mouse_over.ontouchend=function (e) {
			me.elementMouseOver['coffee_info_vertuo_info_mouse_over']=false;
		}
		me._coffee_info_vertuo_info_mouse_over.ggUpdatePosition=function (useTransition) {
		}
		el=me._tooltip_1=document.createElement('div');
		els=me._tooltip_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tooltip_1";
		el.ggDx=-48;
		el.ggDy=18;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._tooltip_1.ggUpdateText=function() {
			var hs=player.hotspot.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._tooltip_1.ggUpdateText();
		player.addListener('activehotspotchanged', function() {
			me._tooltip_1.ggUpdateText();
		});
		el.appendChild(els);
		me._tooltip_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._tooltip_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getViewerSize().width > 320)) && 
				((player.getIsMobile() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tooltip_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tooltip_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tooltip_1.style[domTransition]='';
				if (me._tooltip_1.ggCurrentLogicStateVisible == 0) {
					me._tooltip_1.style.visibility=(Number(me._tooltip_1.style.opacity)>0||!me._tooltip_1.style.opacity)?'inherit':'hidden';
					me._tooltip_1.ggVisible=true;
				}
				else {
					me._tooltip_1.style.visibility="hidden";
					me._tooltip_1.ggVisible=false;
				}
			}
		}
		me._tooltip_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._coffee_info_vertuo_info_mouse_over.appendChild(me._tooltip_1);
		me.divSkin.appendChild(me._coffee_info_vertuo_info_mouse_over);
		el=me._image_popup=document.createElement('div');
		el.ggId="image_popup";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 0%';
		me._image_popup.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup.style[domTransition]='';
				if (me._image_popup.ggCurrentLogicStateVisible == 0) {
					me._image_popup.style.visibility=(Number(me._image_popup.style.opacity)>0||!me._image_popup.style.opacity)?'inherit':'hidden';
					me._image_popup.ggVisible=true;
				}
				else {
					me._image_popup.style.visibility="hidden";
					me._image_popup.ggVisible=false;
				}
			}
		}
		me._image_popup.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._loading_image=document.createElement('div');
		els=me._loading_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiIGZpbGw9IndoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iNjQiIHdpZHRoPSI2NCI+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMCIgdmFsdWVzPSIwOzM7MDswIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW'+
			'5zZm9ybT0icm90YXRlKDQ1IDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGJlZ2luPSIwLjEyNXMiIHZhbHVlcz0iMDszOzA7MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4y'+
			'IDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC4yNXMiIHZhbHVlcz0iMDszOzA7MCIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz4KIDwvY2lyY2xlPgogPGNpcmNsZSBjeT0iMyIgY3g9IjE2IiB0cmFuc2Zvcm09InJvdGF0ZSgxMzUgMTYgMTYpIiByPSIwIj4KICA8YW5pbWF0ZSBrZXlTcGxpbmVzPSIwLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuOCIgYXR0cmlidXRlTmFtZT0iciIgY2FsY01vZGU9InNwbGluZSIgZHVyPSIxcyIgYmVnaW49IjAuMzc1cyIgdmFsdWVzPSIwOzM7MDswIi'+
			'ByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDE4MCAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC41cyIgdmFsdWVzPSIwOzM7MDswIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDIyNSAxNiAxNiki'+
			'IHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC42MjVzIiB2YWx1ZXM9IjA7MzswOzAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMjcwIDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU'+
			'5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIgdmFsdWVzPSIwOzM7MDswIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPgogPC9jaXJjbGU+CiA8Y2lyY2xlIGN5PSIzIiBjeD0iMTYiIHRyYW5zZm9ybT0icm90YXRlKDMxNSAxNiAxNikiIHI9IjAiPgogIDxhbmltYXRlIGtleVNwbGluZXM9IjAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjg7MC4yIDAuMiAwLjQgMC44IiBhdHRyaWJ1dGVOYW1lPSJyIiBjYWxjTW9kZT0ic3BsaW5lIiBkdXI9IjFzIiBiZWdpbj0iMC44NzVzIiB2YWx1ZXM9IjA7MzswOzAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRl'+
			'Ii8+CiA8L2NpcmNsZT4KIDxjaXJjbGUgY3k9IjMiIGN4PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDE2IDE2KSIgcj0iMCI+CiAgPGFuaW1hdGUga2V5U3BsaW5lcz0iMC4yIDAuMiAwLjQgMC44OzAuMiAwLjIgMC40IDAuODswLjIgMC4yIDAuNCAwLjgiIGF0dHJpYnV0ZU5hbWU9InIiIGNhbGNNb2RlPSJzcGxpbmUiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiB2YWx1ZXM9IjA7MzswOzAiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+CiA8L2NpcmNsZT4KPC9zdmc+Cg==';
		me._loading_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="loading_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._loading_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loading_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._image_popup.appendChild(me._loading_image);
		el=me._popup_image_h=document.createElement('div');
		els=me._popup_image_h__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._popup_image_h.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_image_H";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image_h.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true)) && 
				((player.getViewerSize().width > 400))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image_h.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image_h.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image_h.style[domTransition]='';
				if (me._popup_image_h.ggCurrentLogicStateVisible == 0) {
					me._popup_image_h.style.visibility=(Number(me._popup_image_h.style.opacity)>0||!me._popup_image_h.style.opacity)?'inherit':'hidden';
					me._popup_image_h.ggSubElement.src=me._popup_image_h.ggText;
					me._popup_image_h.ggVisible=true;
				}
				else {
					me._popup_image_h.style.visibility="hidden";
					me._popup_image_h__img.src = '';
					me._popup_image_h.ggVisible=false;
				}
			}
		}
		me._popup_image_h.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getVariableValue('coffee_num') == "Carafe"))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getVariableValue('coffee_num') == "Master Origin Mexico"))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((player.getVariableValue('coffee_num') == "Altissio"))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._popup_image_h.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._popup_image_h.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._popup_image_h.style[domTransition]='';
				if (me._popup_image_h.ggCurrentLogicStateExternalUrl == 0) {
					me._popup_image_h.ggText=basePath + "images/carafe.jpg";
					me._popup_image_h__img.style.width = '0px';
					me._popup_image_h__img.style.height = '0px';
					me._popup_image_h__img.src=me._popup_image_h.ggText;
				}
				else if (me._popup_image_h.ggCurrentLogicStateExternalUrl == 1) {
					me._popup_image_h.ggText=basePath + "images/mexico.jpg";
					me._popup_image_h__img.style.width = '0px';
					me._popup_image_h__img.style.height = '0px';
					me._popup_image_h__img.src=me._popup_image_h.ggText;
				}
				else if (me._popup_image_h.ggCurrentLogicStateExternalUrl == 2) {
					me._popup_image_h.ggText=basePath + "images/altissio.jpg";
					me._popup_image_h__img.style.width = '0px';
					me._popup_image_h__img.style.height = '0px';
					me._popup_image_h__img.src=me._popup_image_h.ggText;
				}
				else {
					me._popup_image_h.ggText=basePath + "";
					me._popup_image_h__img.style.width = '0px';
					me._popup_image_h__img.style.height = '0px';
					me._popup_image_h__img.src=me._popup_image_h.ggText;
				}
			}
		}
		me._popup_image_h.onclick=function (e) {
			if (
				(
					((player.getVariableValue('coffee_num') == "Altissio"))
				)
			) {
				player.openUrl("https:\/\/www.nespresso.com\/de\/de\/order\/capsules\/vertuo\/nespresso-kaffee-kapsel-vertuo-altissio","_blank");
			}
			if (
				(
					((player.getVariableValue('coffee_num') == "Master Origin Mexico"))
				)
			) {
				player.openUrl("https:\/\/www.nespresso.com\/de\/de\/order\/capsules\/vertuo\/nespresso-kaffee-kapsel-vertuo-master-origin-mexico","_blank");
			}
			if (
				(
					((player.getVariableValue('coffee_num') == "Carafe"))
				)
			) {
				player.openUrl("https:\/\/www.nespresso.com\/de\/de\/order\/capsules\/vertuo\/nespresso-kaffee-kapsel-vertuo-carafe","_blank");
			}
		}
		me._popup_image_h.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._popup_image_h.clientWidth;
			var parentHeight = me._popup_image_h.clientHeight;
			var img = me._popup_image_h__img;
			var aspectRatioDiv = me._popup_image_h.clientWidth / me._popup_image_h.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._image_popup.appendChild(me._popup_image_h);
		el=me._popup_image_v=document.createElement('div');
		els=me._popup_image_v__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._popup_image_v.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="popup_image_V";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._popup_image_v.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._popup_image_v.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true)) && 
				((player.getViewerSize().width <= 400))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._popup_image_v.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._popup_image_v.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._popup_image_v.style[domTransition]='';
				if (me._popup_image_v.ggCurrentLogicStateVisible == 0) {
					me._popup_image_v.style.visibility=(Number(me._popup_image_v.style.opacity)>0||!me._popup_image_v.style.opacity)?'inherit':'hidden';
					me._popup_image_v.ggSubElement.src=me._popup_image_v.ggText;
					me._popup_image_v.ggVisible=true;
				}
				else {
					me._popup_image_v.style.visibility="hidden";
					me._popup_image_v__img.src = '';
					me._popup_image_v.ggVisible=false;
				}
			}
		}
		me._popup_image_v.logicBlock_externalurl = function() {
			var newLogicStateExternalUrl;
			if (
				((player.getVariableValue('coffee_num') == "Carafe"))
			)
			{
				newLogicStateExternalUrl = 0;
			}
			else if (
				((player.getVariableValue('coffee_num') == "Master Origin Mexico"))
			)
			{
				newLogicStateExternalUrl = 1;
			}
			else if (
				((player.getVariableValue('coffee_num') == "Altissio"))
			)
			{
				newLogicStateExternalUrl = 2;
			}
			else {
				newLogicStateExternalUrl = -1;
			}
			if (me._popup_image_v.ggCurrentLogicStateExternalUrl != newLogicStateExternalUrl) {
				me._popup_image_v.ggCurrentLogicStateExternalUrl = newLogicStateExternalUrl;
				me._popup_image_v.style[domTransition]='';
				if (me._popup_image_v.ggCurrentLogicStateExternalUrl == 0) {
					me._popup_image_v.ggText=basePath + "images/carafev.jpg";
					me._popup_image_v__img.style.width = '0px';
					me._popup_image_v__img.style.height = '0px';
					me._popup_image_v__img.src=me._popup_image_v.ggText;
				}
				else if (me._popup_image_v.ggCurrentLogicStateExternalUrl == 1) {
					me._popup_image_v.ggText=basePath + "images/mexicov.jpg";
					me._popup_image_v__img.style.width = '0px';
					me._popup_image_v__img.style.height = '0px';
					me._popup_image_v__img.src=me._popup_image_v.ggText;
				}
				else if (me._popup_image_v.ggCurrentLogicStateExternalUrl == 2) {
					me._popup_image_v.ggText=basePath + "images/altissiov.jpg";
					me._popup_image_v__img.style.width = '0px';
					me._popup_image_v__img.style.height = '0px';
					me._popup_image_v__img.src=me._popup_image_v.ggText;
				}
				else {
					me._popup_image_v.ggText=basePath + "";
					me._popup_image_v__img.style.width = '0px';
					me._popup_image_v__img.style.height = '0px';
					me._popup_image_v__img.src=me._popup_image_v.ggText;
				}
			}
		}
		me._popup_image_v.onclick=function (e) {
			if (
				(
					((player.getVariableValue('coffee_num') == "Altissio"))
				)
			) {
				player.openUrl("https:\/\/www.nespresso.com\/de\/de\/order\/capsules\/vertuo\/nespresso-kaffee-kapsel-vertuo-altissio","_blank");
			}
			if (
				(
					((player.getVariableValue('coffee_num') == "Master Origin Mexico"))
				)
			) {
				player.openUrl("https:\/\/www.nespresso.com\/de\/de\/order\/capsules\/vertuo\/nespresso-kaffee-kapsel-vertuo-master-origin-mexico","_blank");
			}
			if (
				(
					((player.getVariableValue('coffee_num') == "Carafe"))
				)
			) {
				player.openUrl("https:\/\/www.nespresso.com\/de\/de\/order\/capsules\/vertuo\/nespresso-kaffee-kapsel-vertuo-carafe","_blank");
			}
		}
		me._popup_image_v.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._popup_image_v.clientWidth;
			var parentHeight = me._popup_image_v.clientHeight;
			var img = me._popup_image_v__img;
			var aspectRatioDiv = me._popup_image_v.clientWidth / me._popup_image_v.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			} else {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._image_popup.appendChild(me._popup_image_v);
		me.divSkin.appendChild(me._image_popup);
		el=me._information_b2b=document.createElement('div');
		el.ggId="information_b2b";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 340px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_b2b.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_b2b.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width < 350)) || 
				((player.getViewerSize().height < 350))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._information_b2b.ggCurrentLogicStateSize != newLogicStateSize) {
				me._information_b2b.ggCurrentLogicStateSize = newLogicStateSize;
				me._information_b2b.style[domTransition]='width 0s, height 0s';
				if (me._information_b2b.ggCurrentLogicStateSize == 0) {
					me._information_b2b.style.width='310px';
					me._information_b2b.style.height='310px';
					skin.updateSize(me._information_b2b);
				}
				else {
					me._information_b2b.style.width='350px';
					me._information_b2b.style.height='340px';
					skin.updateSize(me._information_b2b);
				}
			}
		}
		me._information_b2b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_b2b') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_b2b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_b2b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_b2b.style[domTransition]='width 0s, height 0s';
				if (me._information_b2b.ggCurrentLogicStateVisible == 0) {
					me._information_b2b.style.visibility=(Number(me._information_b2b.style.opacity)>0||!me._information_b2b.style.opacity)?'inherit':'hidden';
					me._information_b2b.ggVisible=true;
				}
				else {
					me._information_b2b.style.visibility="hidden";
					me._information_b2b.ggVisible=false;
				}
			}
		}
		me._information_b2b.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._informationbg_b2b=document.createElement('div');
		el.ggId="informationbg_b2b";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 100%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._informationbg_b2b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._informationbg_b2b.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._information_b2b.appendChild(me._informationbg_b2b);
		el=me._info_text_body_b2b2=document.createElement('div');
		els=me._info_text_body_b2b2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_text_body_b2b2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 241px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 94%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100%;';
		hs+='height: 241px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Mit Nespresso Momento bereichern Sie Ihren neuen Alltag mit einer individuellen Kaffeel\xf6sung. Kalte Milch ist dabei das Geheimnis genussvoller Kaffeemomen-te. Mit der Nespresso Momento Coffee & Milk und einer Auswahl an 14 Kaffeevariet\xe4ten, kreieren Sie besondere Kaffeemomente auf Knopfdruck. Mit nur einer Ber\xfchrung der intuitiven Benutzeroberfl\xe4che der Nespresso Momento Coffee & Milk haben Sie die Wahl zwischen 3 k\xf6stlichen Milchrezepten und 3 unter-schiedlichen Tassengr\xf6\xdfen. Genie\xdfen Sie Ihren per-s\xf6nlichen Kaffeemoment!<br\/><br\/>\u2022   Modernste Maschine u.a. durch Touchscreen<br\/>\u2022   Gro\xdfe Auswahl an Rezepten \u2013 weit mehr als Latte Macchiato und Cappuccino<br\/>\u2022  Touchless Funktion \u2013 steuerbar \xfcber das Smart-phone<br\/>\u2022 Einfache Handhabung und Pflege<br\/>";
		el.appendChild(els);
		me._info_text_body_b2b2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_text_body_b2b2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((player.getViewerSize().width < 330)) || 
				((player.getViewerSize().height < 330))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._info_text_body_b2b2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._info_text_body_b2b2.ggCurrentLogicStateSize = newLogicStateSize;
				me._info_text_body_b2b2.style[domTransition]='width 0s, height 0s';
				me._info_text_body_b2b2__text.style[domTransition]='width 0s, height 0s';
				if (me._info_text_body_b2b2.ggCurrentLogicStateSize == 0) {
					me._info_text_body_b2b2.style.width='94%';
					me._info_text_body_b2b2__text.style.height='210px';
					skin.updateSize(me._info_text_body_b2b2);
				}
				else {
					me._info_text_body_b2b2.style.width='94%';
					me._info_text_body_b2b2__text.style.height='241px';
					skin.updateSize(me._info_text_body_b2b2);
				}
			}
		}
		me._info_text_body_b2b2.ggUpdatePosition=function (useTransition) {
		}
		me._information_b2b.appendChild(me._info_text_body_b2b2);
		el=me._info_title_b2b=document.createElement('div');
		els=me._info_title_b2b__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="info_title_b2b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 12px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 300px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
		el.appendChild(els);
		me._info_title_b2b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._info_title_b2b.ggUpdatePosition=function (useTransition) {
		}
		me._information_b2b.appendChild(me._info_title_b2b);
		el=me._ht_info_close_b2b=document.createElement('div');
		els=me._ht_info_close_b2b__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl'+
			'8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIy'+
			'NC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLT'+
			'E3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiMzQzNDM0MiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC4yIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTIsMTZsMy40NC0zLjQ0YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI1LDAtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTEsMC4wMDFMMTYsMTQuMzA4bC0zLjQ0MS0zLjQ0MW'+
			'MtMC40NjctMC40NjctMS4yMjQtMC40NjctMS42OTEsMC4wMDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjQsMCwxLjY5TDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNiwwLDEuNjkyYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2wzLjQ0LTMuNDRsMy40MzksMy40MzljMC40NjgsMC40NjgsMS4yMjUsMC40NjgsMS42OTEsMC4wMDFDMjEuNTk5LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQu'+
			'ODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk1LDAsMTcuNjc4YzQuODgxLDQuODgsMTIuNzk2LDQuODgsMTcuNjc4LDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyOS43MiwxOS45NTYsMjkuNzIsMTIuMDQyLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41ODktMC4wMDEtNS4xNy0wLjk4NS03LjE0Ni0yLjk2MVM1Ljg5NSwxOC41OSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODQtNS4xNywyLjk2LTcuMTQ3QzEwLjgzLDYuODc4LDEzLjQwOSw1Ljg5NCwxNiw1Ljg5NGMyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOT'+
			'U5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS45NzYsMS45NzcsMi45NTcsNC41NTYsMi45Niw3LjE0N2MtMC4wMDEsMi41OTEtMC45ODUsNS4xNjktMi45Niw3LjE0OEMyMS4xNjksMjUuMTIyLDE4LjU5MSwyNi4xMDYsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close_b2b__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close_b2b__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB5PSIwcHgiIGhlaWdodD0iMzJweCIgd2lkdGg9IjMycHgiIGlkPSJMYXllcl'+
			'8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkzLDE2bDMuNDM5LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjctMC40Njct'+
			'MS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDFjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDAmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MWMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDBDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5ei'+
			'BNMjQuODM5LDcuMTYxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3'+
			'Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuMiIgZD0iTTIxLjEzMiwxOS40Mz'+
			'lMMTcuNjkzLDE2bDMuNDM5LTMuNDQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5M2MtMC40NjctMC40NjctMS4yMjUtMC40NjctMS42OTIsMC4wMDFsLTMuNDQsMy40NGwtMy40NDEtMy40NDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMGMtMC40NjcsMC40NjctMC40NjcsMS4yMjUsMCwxLjY5MkwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjYtMC40NjcsMS4yMjQsMCwxLjY5MSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxbDMu'+
			'NDQtMy40NGwzLjQ0LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI0LDAuNDY3LDEuNjkxLDAmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjFjLTQuODgyLTQuODgyLTEyLjc5Ni00Ljg4Mi0xNy42NzgsMGMtNC44ODEsNC44ODEtNC44ODEsMTIuNzk2LDAsMTcuNjc4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwQzI5LjcyLDE5Ljk1NywyOS43MjEsMTIuMDQzLDI0LjgzOSw3LjE2MXogTTE2LDI2LjEwNmMtMi41OSwwLTUuMTcxLTAuOTg0LTcuMTQ2LTIuOTU5JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTtDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2YzAtMi41OTEsMC45ODMtNS4xNywyLjk1OS03LjE0N2MxLjk3Ny0xLjk3Niw0LjU1Ni0yLjk1OSw3LjE0OC0yLjk2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OWMxLjk3NSwxLjk3NywyLjk1Nyw0LjU1NiwyLjk1OSw3LjE0N2MtMC4wMDEsMi41OTItMC45ODQsNS4xNy0yLjk2LDcuMTQ4JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjMDAwMDAwIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close_b2b__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close_b2b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 1px;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close_b2b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close_b2b.onclick=function (e) {
			player.setVariableValue('vis_info_b2b', false);
		}
		me._ht_info_close_b2b.onmouseover=function (e) {
			me._ht_info_close_b2b__img.style.visibility='hidden';
			me._ht_info_close_b2b__imgo.style.visibility='inherit';
		}
		me._ht_info_close_b2b.onmouseout=function (e) {
			me._ht_info_close_b2b__img.style.visibility='inherit';
			me._ht_info_close_b2b__imgo.style.visibility='hidden';
		}
		me._ht_info_close_b2b.ggUpdatePosition=function (useTransition) {
		}
		me._information_b2b.appendChild(me._ht_info_close_b2b);
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._svg_6=document.createElement('div');
		els=me._svg_6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNjAgNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2MCIgd2lkdGg9IjYwIj4KIDxkZWZzPgogIDxzdHlsZT4uYXtmaWxsOiNmZmY7fTwvc3R5bGU+CiA8L2RlZnM+CiA8cGF0aCBzdHlsZT0iIiBjbGFzcz0iYSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwLCAwLjk5OTk5OTk5OTk5OTk5OTksIC04Ljg4MTc4NDE5NzAwMTI1MmUtMTYsIDApIiBkPSJNIDM0LjM0OSAzOC41NjIgQyAzMy4xODUgMzUuNTgxIDI5LjIzIDM0Ljk3OC'+
			'AyNy4yMyAzNy40NzYgQyAyNi45NjggMzcuODA1IDI2Ljc1NiAzOC4xNyAyNi42MDQgMzguNTYyIEMgMjYuMzg4IDM5LjA4MSAyNi4yNzcgMzkuNjM4IDI2LjI3NiA0MC4xOTkgQyAyNi4wODggNDMuNDI3IDI5LjQ2NCA0NS42NDcgMzIuMzUzIDQ0LjE5NyBDIDMzLjg1MiA0My40NDUgMzQuNzU5IDQxLjg3MyAzNC42NjEgNDAuMTk5IEMgMzQuNjY2IDM5LjYzOCAzNC41NTkgMzkuMDgyIDM0LjM0OSAzOC41NjIgWiBNIDMyLjkyNSA0MC43MjYgQyAzMi44OTMgNDAuODkyIDMyLjg0NiA0MS4wNTQgMzIuNzgzIDQxLjIxMSBDIDMyLjY1NiA0MS41MTggMzIuNDcyIDQxLjc5NyAzMi4yNDEgNDIuMDM1'+
			'IEMgMzIuMDA5IDQyLjI3MSAzMS43MzMgNDIuNDYgMzEuNDMgNDIuNTkxIEMgMzEuMjc5IDQyLjY1OSAzMS4xMjIgNDIuNzExIDMwLjk2IDQyLjc0OCBDIDMwLjYyMiA0Mi44MTcgMzAuMjczIDQyLjgxNyAyOS45MzUgNDIuNzQ4IEMgMjkuNzczIDQyLjcxMSAyOS42MTYgNDIuNjU5IDI5LjQ2NSA0Mi41OTEgQyAyOS4xNjIgNDIuNDYgMjguODg2IDQyLjI3MSAyOC42NTQgNDIuMDM1IEMgMjguNDIzIDQxLjc5NyAyOC4yMzkgNDEuNTE3IDI4LjExMiA0MS4yMTEgQyAyOC4wNDkgNDEuMDU0IDI4LjAwMiA0MC44OTIgMjcuOTcgNDAuNzI2IEMgMjcuOTUzIDQwLjU1MSAyNy45NTMgNDAuMzc0IDI3Lj'+
			'k3IDQwLjE5OSBDIDI3Ljk2OSAzOS44NTIgMjguMDM3IDM5LjUxIDI4LjE3IDM5LjE4OSBDIDI4LjI3NiAzOC45NjEgMjguNDE2IDM4Ljc1IDI4LjU4MiAzOC41NjIgQyAyOC41ODIgMzguNTYyIDI4LjY1NCAzOC40MiAyOC43MSAzOC4zNjMgQyAyOC45NDMgMzguMTI3IDI5LjIxOSAzNy45MzkgMjkuNTIyIDM3LjgwNyBDIDI5LjY3NCAzNy43NCAyOS44MzEgMzcuNjg4IDI5Ljk5MiAzNy42NTEgQyAzMC4zMyAzNy41ODIgMzAuNjc4IDM3LjU4MiAzMS4wMTcgMzcuNjUxIEMgMzEuMTc4IDM3LjY4OCAzMS4zMzYgMzcuNzQgMzEuNDg3IDM3LjgwNyBDIDMxLjc5MSAzNy45MzkgMzIuMDY2IDM4LjEy'+
			'NyAzMi4yOTggMzguMzYzIEMgMzIuMjk4IDM4LjM2MyAzMi4zODQgMzguNTA1IDMyLjQyNiAzOC41NjIgQyAzMi41OTQgMzguNzUgMzIuNzMzIDM4Ljk2MSAzMi44MzkgMzkuMTg5IEMgMzIuOTAzIDM5LjM0NSAzMi45NSAzOS41MDcgMzIuOTgyIDM5LjY3MiBDIDMzLjA0NSA0MC4wMTcgMzMuMDQgNDAuMzcgMzIuOTY3IDQwLjcxMiBaIi8+CiA8cGF0aCBzdHlsZT0iIiBjbGFzcz0iYSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwLCAwLjk5OTk5OTk5OTk5OTk5OTksIC04Ljg4MTc4NDE5NzAwMTI1MmUtMTYsIDApIiBkPSJNIDI5LjY1MSAzNC4yMDYgQyAzMC4xOT'+
			'cgMzQuMTExIDMwLjc1NSAzNC4xMTEgMzEuMzAyIDM0LjIwNiBDIDMxLjczOCAzNC4zODMgMzIuMjAzIDM0LjAyMiAzMi4xMzkgMzMuNTU1IEMgMzIuMTM3IDMzLjUzNCAzMi4xMzIgMzMuNTE0IDMyLjEyNyAzMy40OTQgTCAzMi4xMjcgMzAuMTA2IEMgMzIuMTkgMjkuNzI0IDMxLjg4OCAyOS4zNzkgMzEuNTAxIDI5LjM5NCBDIDMwLjgyNCAyOS4zMjEgMzAuMTQyIDI5LjMyMSAyOS40NjUgMjkuMzk0IEMgMjkuMDc4IDI5LjM3OSAyOC43NzYgMjkuNzI0IDI4LjgzOSAzMC4xMDYgQyAyOC44MzkgMzAuNTk5IDI4LjgzOSAzMS4wNzQgMjguODM5IDMxLjUzIEwgMjguODM5IDMyLjE5OSBDIDI4Ljgz'+
			'OSAzMi42MTYgMjguODM5IDMzLjAzNCAyOC44MzkgMzMuNDUyIEMgMjguNjk1IDMzLjkgMjkuMDkyIDM0LjMzNiAyOS41NTIgMzQuMjM3IEMgMjkuNTg1IDM0LjIyOCAyOS42MTkgMzQuMjE4IDI5LjY1MSAzNC4yMDYgWiIvPgogPHBhdGggc3R5bGU9IiIgY2xhc3M9ImEiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OTk5LCAtOC44ODE3ODQxOTcwMDEyNTJlLTE2LCAwKSIgZD0iTSAyOS41OTMgMjcuOTI4IEwgMzAuNDc2IDI3LjkyOCBMIDMxLjM1OSAyNy45MjggQyAzMS44MDMgMjguMDQ2IDMyLjIxNSAyNy42NSAzMi4xMTQgMjcuMj'+
			'AyIEwgMzIuMTE0IDIzLjgyNyBDIDMyLjE5IDIzLjQyOCAzMS44NjQgMjMuMDY1IDMxLjQ1OCAyMy4xMDIgTCAzMC40NzYgMjMuMTAyIEwgMjkuNDk0IDIzLjEwMiBDIDI5LjA4MyAyMy4wNTUgMjguNzQ1IDIzLjQyMSAyOC44MjUgMjMuODI3IEwgMjguODI1IDI3LjIwMiBDIDI4LjcxOCAyNy42NTggMjkuMTQzIDI4LjA2IDI5LjU5MyAyNy45MjggWiIvPgogPHBhdGggc3R5bGU9IiIgY2xhc3M9ImEiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OTk5LCAtOC44ODE3ODQxOTcwMDEyNTJlLTE2LCAwKSIgZD0iTSAyOS41NjUgMjEuNjYz'+
			'IEwgMzAuNDc2IDIxLjY2MyBMIDMxLjM4NyAyMS42NjMgQyAzMS44MjYgMjEuNzY4IDMyLjIyNCAyMS4zNzkgMzIuMTI3IDIwLjkzOCBMIDMyLjEyNyAxNy45NjIgQyAzMi4yNDUgMTYuNjk2IDMwLjk0OSAxNS43NzcgMjkuNzk0IDE2LjMwOSBDIDI5LjE1NyAxNi42MDEgMjguNzczIDE3LjI2NCAyOC44MzkgMTcuOTYyIEwgMjguODM5IDIwLjkzOCBDIDI4Ljc0NyAyMS4zNzEgMjkuMTMyIDIxLjc1NiAyOS41NjUgMjEuNjYzIFoiLz4KPC9zdmc+Cg==';
		me._svg_6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 6";
		el.ggDx=95;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_3.appendChild(me._svg_6);
		el=me._svg_5=document.createElement('div');
		els=me._svg_5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNjAgNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2MCIgd2lkdGg9IjYwIj4KIDxkZWZzPgogIDxzdHlsZT4uYXtmaWxsOiNmZmY7fTwvc3R5bGU+CiA8L2RlZnM+CiA8cGF0aCBzdHlsZT0iIiBjbGFzcz0iYSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwLCAwLjk5OTk5OTk5OTk5OTk5OTksIC04Ljg4MTc4NDE5NzAwMTI1MmUtMTYsIDApIiBkPSJNIDMxLjI1OSAxOC44NzEgQyAzMS4zMjMgMTguOTc4IDMxLjM5MyAxOS4wOD'+
			'IgMzEuNDY5IDE5LjE4MSBMIDMxLjY5OSAxOS40NTEgTCAzMS44OTkgMTkuNjcxIEMgMzEuOTU5IDE5Ljc0OCAzMi4wMTYgMTkuODI4IDMyLjA2OSAxOS45MTEgQyAzMi4xNjcgMjAuMDY3IDMyLjI0NSAyMC4yMzUgMzIuMjk5IDIwLjQxMSBDIDMyLjI5OSAyMC41MDEgMzIuMjk5IDIwLjU4MSAzMi4zNDkgMjAuNjcxIEMgMzIuMzk5IDIwLjc2MSAzMi4zNDkgMjAuODQxIDMyLjM0OSAyMC45MzEgQyAzMi4zNDMgMjEuMDk2IDMyLjMyMyAyMS4yNiAzMi4yODkgMjEuNDIxIEMgMzIuMjMxIDIxLjY3MyAzMi4xNDggMjEuOTE3IDMyLjAzOSAyMi4xNTEgQyAzMS45NTkgMjIuMzIxIDMxLjg5OSAyMi40'+
			'MjEgMzEuODk5IDIyLjQyMSBDIDMyLjAwMSAyMi4zNyAzMi4wOTggMjIuMzEgMzIuMTg5IDIyLjI0MSBDIDMyLjM4NyAyMi4wNCAzMi41NDkgMjEuODA3IDMyLjY2OSAyMS41NTEgQyAzMi43NTMgMjEuMzc2IDMyLjgxMyAyMS4xOTIgMzIuODQ5IDIxLjAwMSBDIDMyLjg0OSAyMC45MDEgMzIuODQ5IDIwLjc5MSAzMi44NDkgMjAuNjcxIEMgMzIuODU1IDIwLjU1OCAzMi44NTUgMjAuNDQ0IDMyLjg0OSAyMC4zMzEgQyAzMi44MDcgMjAuMDkzIDMyLjcyNiAxOS44NjMgMzIuNjA5IDE5LjY1MSBDIDMyLjU0OCAxOS41NDQgMzIuNDgxIDE5LjQ0MSAzMi40MDkgMTkuMzQxIEwgMzIuMTY5IDE5LjA2MS'+
			'BMIDMxLjk1OSAxOC44MzEgQyAzMS44ODkgMTguNzUxIDMxLjg1OSAxOC42ODEgMzEuNzk5IDE4LjYwMSBDIDMxLjcwNCAxOC40NDUgMzEuNjMgMTguMjc3IDMxLjU3OSAxOC4xMDEgQyAzMS41NzkgMTguMDExIDMxLjU3OSAxNy45MzEgMzEuNTI5IDE3Ljg0MSBDIDMxLjQ3OSAxNy43NTEgMzEuNTI5IDE3LjY3MSAzMS41MjkgMTcuNTgxIEMgMzEuNTM0IDE3LjQxNiAzMS41NTQgMTcuMjUyIDMxLjU4OSAxNy4wOTEgQyAzMS42NDcgMTYuODQgMzEuNzMxIDE2LjU5NSAzMS44MzkgMTYuMzYxIEMgMzEuOTE5IDE2LjE5MSAzMS45NzkgMTYuMDkxIDMxLjk3OSAxNi4wOTEgQyAzMS44OTYgMTYuMTU0'+
			'IDMxLjgxOSAxNi4yMjQgMzEuNzQ5IDE2LjMwMSBDIDMxLjU1IDE2LjUwMiAzMS4zODggMTYuNzM1IDMxLjI2OSAxNi45OTEgQyAzMS4xODQgMTcuMTY1IDMxLjEyMyAxNy4zNSAzMS4wODkgMTcuNTQxIEMgMzEuMDg5IDE3LjY0MSAzMS4wODkgMTcuNzUxIDMxLjA4OSAxNy44NzEgQyAzMS4wODIgMTcuOTg0IDMxLjA4MiAxOC4wOTggMzEuMDg5IDE4LjIxMSBDIDMxLjExIDE4LjQzOSAzMS4xNjcgMTguNjYyIDMxLjI1OSAxOC44NzEgWiIvPgogPHBhdGggc3R5bGU9IiIgY2xhc3M9ImEiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OT'+
			'k5LCAtOC44ODE3ODQxOTcwMDEyNTJlLTE2LCAwKSIgZD0iTSAyNy43ODkgMTcuMDQxIEMgMjcuODUzIDE3LjE0OCAyNy45MjMgMTcuMjUyIDI3Ljk5OSAxNy4zNTEgTCAyOC4yNTkgMTcuNjExIEwgMjguNDY5IDE3Ljg0MSBDIDI4LjUzIDE3LjkxOCAyOC41ODcgMTcuOTk4IDI4LjYzOSAxOC4wODEgQyAyOC43MzcgMTguMjM3IDI4LjgxNSAxOC40MDUgMjguODY5IDE4LjU4MSBDIDI4Ljg2OSAxOC42NzEgMjguODY5IDE4Ljc1MSAyOC45MTkgMTguODQxIEMgMjguOTY5IDE4LjkzMSAyOC45MTkgMTkuMDExIDI4LjkxOSAxOS4xMDEgQyAyOC45MTIgMTkuMjY2IDI4Ljg5MiAxOS40MyAyOC44NTkg'+
			'MTkuNTkxIEMgMjguODAxIDE5Ljg0MiAyOC43MTcgMjAuMDg3IDI4LjYwOSAyMC4zMjEgQyAyOC41MjkgMjAuNDkxIDI4LjQ2OSAyMC41OTEgMjguNDY5IDIwLjU5MSBDIDI4LjU1MiAyMC41MjggMjguNjI5IDIwLjQ1OCAyOC42OTkgMjAuMzgxIEMgMjguODk4IDIwLjE4MSAyOS4wNiAxOS45NDcgMjkuMTc5IDE5LjY5MSBDIDI5LjI2MyAxOS41MTcgMjkuMzI0IDE5LjMzMiAyOS4zNTkgMTkuMTQxIEMgMjkuMzU5IDE5LjA0MSAyOS4zNTkgMTguOTMxIDI5LjM1OSAxOC44MTEgQyAyOS4zNjUgMTguNjk4IDI5LjM2NSAxOC41ODQgMjkuMzU5IDE4LjQ3MSBDIDI5LjMxNyAxOC4yMzMgMjkuMjM2ID'+
			'E4LjAwMyAyOS4xMTkgMTcuNzkxIEMgMjkuMDU4IDE3LjY4NCAyOC45OTEgMTcuNTgxIDI4LjkxOSAxNy40ODEgTCAyOC42NTkgMTcuMjQxIEwgMjguNDM5IDE2Ljk5MSBDIDI4LjM3NCAxNi45MTEgMjguMzE0IDE2LjgyOCAyOC4yNTkgMTYuNzQxIEMgMjguMTY0IDE2LjU4NSAyOC4wOSAxNi40MTcgMjguMDM5IDE2LjI0MSBDIDI4LjAzOSAxNi4xNTEgMjguMDM5IDE2LjA3MSAyNy45ODkgMTUuOTgxIEMgMjcuOTM5IDE1Ljg5MSAyNy45ODkgMTUuODExIDI3Ljk4OSAxNS43MjEgQyAyNy45OTEgMTUuNTYgMjguMDA4IDE1LjM5OSAyOC4wMzkgMTUuMjQxIEMgMjguMDg3IDE0Ljk5MSAyOC4xNjEg'+
			'MTQuNzQ2IDI4LjI1OSAxNC41MTEgQyAyOC4zMzkgMTQuMzQxIDI4LjM5OSAxNC4yNDEgMjguMzk5IDE0LjI0MSBDIDI4LjMxMyAxNC4zMDQgMjguMjMyIDE0LjM3NCAyOC4xNTkgMTQuNDUxIEMgMjcuOTYxIDE0LjY1MyAyNy43OTkgMTQuODg2IDI3LjY3OSAxNS4xNDEgQyAyNy41OTUgMTUuMzE2IDI3LjUzNCAxNS41MDEgMjcuNDk5IDE1LjY5MSBDIDI3LjQ5OSAxNS43OTEgMjcuNDk5IDE1LjkwMSAyNy40OTkgMTYuMDIxIEMgMjcuNDkyIDE2LjEzNCAyNy40OTIgMTYuMjQ4IDI3LjQ5OSAxNi4zNjEgQyAyNy41NTUgMTYuNjAzIDI3LjY1MyAxNi44MzMgMjcuNzg5IDE3LjA0MSBaIi8+CiA8cG'+
			'F0aCBzdHlsZT0iIiBjbGFzcz0iYSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwLCAwLjk5OTk5OTk5OTk5OTk5OTksIC04Ljg4MTc4NDE5NzAwMTI1MmUtMTYsIDApIiBkPSJNIDI0LjQ3OSAxOS44NjEgQyAyNC41NDIgMTkuOTY5IDI0LjYxMiAyMC4wNzIgMjQuNjg5IDIwLjE3MSBMIDI0LjkxOSAyMC40NDEgTCAyNS4xMTkgMjAuNjYxIEMgMjUuMTg5IDIwLjczMSAyNS4yMjkgMjAuODIxIDI1LjI4OSAyMC45MDEgQyAyNS4zODcgMjEuMDU3IDI1LjQ2NCAyMS4yMjUgMjUuNTE5IDIxLjQwMSBDIDI1LjUxOSAyMS40OTEgMjUuNTE5IDIxLjU3MSAyNS41NjkgMjEu'+
			'NjYxIEMgMjUuNjE5IDIxLjc1MSAyNS41NjkgMjEuODMxIDI1LjU2OSAyMS45MjEgQyAyNS41NjQgMjIuMDg2IDI1LjU0MyAyMi4yNSAyNS41MDkgMjIuNDExIEMgMjUuNDUxIDIyLjY2MiAyNS4zNjcgMjIuOTA3IDI1LjI1OSAyMy4xNDEgQyAyNS4xNzkgMjMuMzExIDI1LjExOSAyMy40MTEgMjUuMTE5IDIzLjQxMSBDIDI1LjIwMyAyMy4zNjEgMjUuMjg0IDIzLjMwNCAyNS4zNTkgMjMuMjQxIEMgMjUuNTU3IDIzLjA0IDI1LjcyIDIyLjgwNyAyNS44MzkgMjIuNTUxIEMgMjUuOTIzIDIyLjM3NiAyNS45ODMgMjIuMTkyIDI2LjAxOSAyMi4wMDEgQyAyNi4wMTkgMjEuOTAxIDI2LjAxOSAyMS43OT'+
			'EgMjYuMDE5IDIxLjY3MSBDIDI2LjAyNSAyMS41NTggMjYuMDI1IDIxLjQ0NCAyNi4wMTkgMjEuMzMxIEMgMjUuOTc4IDIxLjA5MyAyNS44OTYgMjAuODYzIDI1Ljc3OSAyMC42NTEgQyAyNS43MTggMjAuNTQ0IDI1LjY1MSAyMC40NCAyNS41NzkgMjAuMzQxIEwgMjUuMzM5IDIwLjA2MSBMIDI1LjEyOSAxOS44MzEgQyAyNS4wNzEgMTkuNzU3IDI1LjAxOCAxOS42ODEgMjQuOTY5IDE5LjYwMSBDIDI0Ljg3NCAxOS40NDUgMjQuOCAxOS4yNzcgMjQuNzQ5IDE5LjEwMSBDIDI0Ljc0OSAxOS4wMTEgMjQuNzQ5IDE4LjkzMSAyNC42OTkgMTguODQxIEMgMjQuNjQ5IDE4Ljc1MSAyNC42OTkgMTguNjcx'+
			'IDI0LjY5OSAxOC41ODEgQyAyNC43MDUgMTguNDE2IDI0LjcyNSAxOC4yNTIgMjQuNzU5IDE4LjA5MSBDIDI0LjgxNyAxNy44NCAyNC45MDEgMTcuNTk1IDI1LjAwOSAxNy4zNjEgQyAyNS4wNTEgMTcuMjY5IDI1LjA5OCAxNy4xNzkgMjUuMTQ5IDE3LjA5MSBDIDI1LjA2MiAxNy4xNTMgMjQuOTgyIDE3LjIyNCAyNC45MDkgMTcuMzAxIEMgMjQuNzEgMTcuNTAyIDI0LjU0OCAxNy43MzUgMjQuNDI5IDE3Ljk5MSBDIDI0LjM0NCAxOC4xNjUgMjQuMjg0IDE4LjM1IDI0LjI0OSAxOC41NDEgQyAyNC4yNDkgMTguNjQxIDI0LjI0OSAxOC43NTEgMjQuMjQ5IDE4Ljg3MSBDIDI0LjI0MyAxOC45ODQgMj'+
			'QuMjQzIDE5LjA5OCAyNC4yNDkgMTkuMjExIEMgMjQuMjkgMTkuNDM5IDI0LjM2OCAxOS42NTggMjQuNDc5IDE5Ljg2MSBaIi8+CiA8cGF0aCBzdHlsZT0iIiBjbGFzcz0iYSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwLCAwLjk5OTk5OTk5OTk5OTk5OTksIC04Ljg4MTc4NDE5NzAwMTI1MmUtMTYsIDApIiBkPSJNIDIzLjQ3OSAyOC44NDEgQyAyMy4zNTQgMjguNzEzIDIzLjIxMyAyOC42MDIgMjMuMDU5IDI4LjUxMSBMIDIzLjA1OSAyOC41MTEgQyAyMy4yMTMgMjguNjAyIDIzLjM1NCAyOC43MTMgMjMuNDc5IDI4Ljg0MSBaIi8+CiA8cGF0aCBzdHlsZT0iIiBj'+
			'bGFzcz0iYSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwLCAwLjk5OTk5OTk5OTk5OTk5OTksIC04Ljg4MTc4NDE5NzAwMTI1MmUtMTYsIDApIiBkPSJNIDM5Ljk1OSAyOC42NDEgQyAzOS43MDggMjguMzkyIDM5LjM3MiAyOC4yNDkgMzkuMDE5IDI4LjI0MSBMIDM3LjE3OSAyOC4yNDEgTCAzNy41ODkgMjYuMTMxIEMgMzcuNjgzIDI1Ljc0OCAzNy4zODIgMjUuMzgzIDM2Ljk4OSAyNS40MDEgTCAyMi4wNDkgMjUuNDAxIEwgMjAuMjU5IDI1LjUyMSBDIDIwLjAzMSAyNS42NTEgMTkuOTE3IDI1LjkxNiAxOS45NzkgMjYuMTcxIEwgMjIuNDk5IDM5LjUyMSBDIDIyLj'+
			'U5IDM5LjkzNyAyMi45NTMgNDAuMjM4IDIzLjM3OSA0MC4yNTEgTCAzNC4wNzkgNDAuMjUxIEMgMzQuNTAzIDQwLjIzNSAzNC44NjQgMzkuOTM1IDM0Ljk1OSAzOS41MjEgTCAzNS41MjkgMzYuNjExIEwgMzYuNDc5IDM2LjYxMSBDIDM3LjEzMiAzNi41NzggMzcuNzU5IDM2LjM0OCAzOC4yNzkgMzUuOTUxIEMgMzkuNDc5IDM0Ljk1MSA0MC40OTkgMzEuOTUxIDQwLjQ5OSAzMC4yMjEgQyA0MC41NDkgMjkuNjQyIDQwLjM1MyAyOS4wNjkgMzkuOTU5IDI4LjY0MSBaIE0gMzQuMDI5IDI4Ljg4MSBDIDMzLjMxMiAyOC4xNTIgMzIuMTM2IDI4LjE1MiAzMS40MTkgMjguODgxIEwgMzEuNDE5IDI4Ljg4'+
			'MSBDIDMwLjY4NiAyOS42MDkgMjkuNTAyIDI5LjYwOSAyOC43NjkgMjguODgxIEMgMjguMDU1IDI4LjE1MyAyNi44ODIgMjguMTUzIDI2LjE2OSAyOC44ODEgTCAyNi4xNjkgMjguODgxIEMgMjUuODI1IDI5LjE3NyAyNS40MDYgMjkuMzcxIDI0Ljk1OSAyOS40NDEgQyAyNC43NCAyOS40NjcgMjQuNTE5IDI5LjQ0NiAyNC4zMDkgMjkuMzgxIEMgMjQuMDA3IDI5LjI4NiAyMy43MzQgMjkuMTEzIDIzLjUxOSAyOC44ODEgTCAyMy41MTkgMjguODgxIEwgMjMuMDk5IDI4LjU2MSBDIDIyLjM4NiAyOC4yMjggMjEuNTQyIDI4LjM3MiAyMC45NzkgMjguOTIxIEwgMjAuNDQ5IDI2LjE0MSBDIDIwLjQyMS'+
			'AyNi4wODEgMjAuNDIxIDI2LjAxMSAyMC40NDkgMjUuOTUxIEMgMjAuNDk2IDI1LjkwMiAyMC41NjEgMjUuODc3IDIwLjYyOSAyNS44ODEgTCAzNi45ODkgMjUuODgxIEMgMzcuMTMyIDI1Ljg2NyAzNy4yNDMgMjYuMDA0IDM3LjE5OSAyNi4xNDEgTCAzNi42NDkgMjguOTUxIEMgMzUuOTA0IDI5LjY1NCAzNC43MjkgMjkuNjE5IDM0LjAyOSAyOC44NzEgWiBNIDM3Ljk3OSAzNS41NjEgQyAzNy41NDUgMzUuODkyIDM3LjAyMyAzNi4wODcgMzYuNDc5IDM2LjEyMSBMIDM1LjYzOSAzNi4xMjEgTCAzNy4wNzkgMjguNzYxIEwgMzkuMDc5IDI4Ljc2MSBDIDM5LjI5OSAyOC43NjQgMzkuNTA5IDI4Ljg0'+
			'OSAzOS42NjkgMjkuMDAxIEMgMzkuOTQ4IDI5LjM1IDQwLjA3MSAyOS43OTkgNDAuMDA5IDMwLjI0MSBDIDQwLjAxOSAzMS44MDEgMzkuMDQ5IDM0LjY0MSAzNy45NzkgMzUuNTUxIFoiLz4KPC9zdmc+Cg==';
		me._svg_5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 5";
		el.ggDx=54;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_3.appendChild(me._svg_5);
		el=me._svg_4=document.createElement('div');
		els=me._svg_4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNjAgNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2MCIgd2lkdGg9IjYwIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CiAgICA8L3N0eWxlPgogPC9kZWZzPgogPGcgc3R5bGU9IiIgdHJhbnNmb3JtPSJtYXRyaXgoMC44NTU1NTYwODM1NTMzNzQ4LCAwLCAwLCAwLjg1NTU1NjA4MzU1MzM3NDgsIDQuMTE5ODM4Mjk5MTUyODIzLCAyLjgxNDczNjg4NTA1MTk4KSIgaWQ9IkFFUk9DQ0lOTzQiPg'+
			'ogIDxnIGlkPSJBRVJPQ0NJTk8tQ29weS00Ij4KICAgPGcgaWQ9ImJ0bi13YXJtLWFpcnktZm9hbSI+CiAgICA8cGF0aCBzdHlsZT0iIiBjbGFzcz0iY2xzLTEiIGlkPSJGaWxsLTQiIGQ9Ik0zNC43Nzc4Niw0NC42ODY1MUgyNS4yMjJMMjMuNDM3NywzNC4yNDU4NEgzNi41NjIzWk0zOC4zNiwyMi40MzU5SDIwLjE2NjY3bC4yMzU3LDEuMzUyMzIsMy41ODIxNCwyMS4xMDY5My4xNzA1MS45ODk0N0gzNS44NDQ4bC4xNzA2OS0xLjAwODMsMy41ODIxNC0yMS4wODcyNC4yMzU3LTEuMzUzMThaIi8+CiAgICA8cGF0aCBzdHlsZT0iIiBjbGFzcz0iY2xzLTEiIGlkPSJGaWxsLTYiIGQ9Ik0zNS4zNTAw'+
			'OSwxNi42NDM1NmE0Ljc5MDQ3LDQuNzkwNDcsMCwwLDAtLjg0OTQ4LjA3NjQ0LDUuMTkwNyw1LjE5MDcsMCwwLDAtOS4wMDEyMywwLDQuNzkwNDksNC43OTA0OSwwLDAsMC0uODQ5NDgtLjA3NjQ0LDQuMzU1ODIsNC4zNTU4MiwwLDAsMC00LjQ4MzI0LDQuMjE0NGMwLC4wMjczOS4wMDE1Ny4wNjUxMi4wMDIyNy4wNjUxMkgzOS44MzEwNmMuMDAwNTIsMCwuMDAyMjctLjAzNzczLjAwMjI3LS4wNjUxMmE0LjM1NTgyLDQuMzU1ODIsMCwwLDAtNC40ODMyNC00LjIxNDQiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 4";
		el.ggDx=-135;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_3.appendChild(me._svg_4);
		el=me._svg_3=document.createElement('div');
		els=me._svg_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNjAgNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2MCIgd2lkdGg9IjYwIj4KIDxkZWZzPgogIDxzdHlsZT4uYXtmaWxsOiNmZmY7fTwvc3R5bGU+CiA8L2RlZnM+CiA8cG9seWdvbiBzdHlsZT0iIiBjbGFzcz0iYSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwLCAwLjk5OTk5OTk5OTk5OTk5OTksIC04Ljg4MTc4NDE5NzAwMTI1MmUtMTYsIDApIiBwb2ludHM9IjI2LjA4MSAyMC43NTcgMjYuMDk3IDI4LjcwMiAyNy40NTMgMj'+
			'guNzAyIDI3LjQ1MyAxOS4xOTMgMjYuMjQxIDE5LjE5MyAyMy44OTYgMjEuMTA4IDI0LjYyOSAyMi4wMTcgMjYuMDgxIDIwLjc1NyIvPgogPHBhdGggc3R5bGU9IiIgY2xhc3M9ImEiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OTk5LCAtOC44ODE3ODQxOTcwMDEyNTJlLTE2LCAwKSIgZD0iTSAzMy40ODQgMjUuMTc2IEMgMzQuMjcyIDI1LjE5MSAzNS4wMzIgMjQuODcxIDM1LjU3NCAyNC4yOTggTCAzNS41NzQgMjQuMjk4IEMgMzUuNTc0IDI2LjExNyAzNC42OCAyNy43NjEgMzIuOTA5IDI3Ljc2MSBDIDMyLjMyMiAyNy43NjcgMzEu'+
			'NzQxIDI3LjYzIDMxLjIxOSAyNy4zNjIgTCAzMS4wMjYgMjguNTc1IEMgMzEuNjY0IDI4Ljc2NiAzMi4zMjUgMjguODYyIDMyLjk4OSAyOC44NjEgQyAzNi4wMDQgMjguODYxIDM2Ljg1MSAyNi4xNjUgMzYuODUxIDIzLjU4MSBDIDM2Ljg1MSAyMS40MTEgMzYuMzA4IDE5LjAwMiAzMy42NTkgMTkuMDE4IEMgMzEuODkzIDE4Ljk1NCAzMC40NjggMjAuNDQ3IDMwLjYxMiAyMi4yMDggQyAzMC40ODYgMjMuODU4IDMxLjgzMSAyNS4yNDcgMzMuNDg0IDI1LjE3NiBaIE0gMzMuNzU1IDIwLjEzNCBDIDM0Ljc2OCAyMC4yMzYgMzUuNTEzIDIxLjEyOSAzNS40MyAyMi4xNDQgQyAzNS41NTcgMjMuNDQxID'+
			'M0LjIzMiAyNC4zODYgMzMuMDQ3IDIzLjg0OCBDIDMyLjM4OSAyMy41NDkgMzEuOTk0IDIyLjg2NSAzMi4wNjQgMjIuMTQ0IEMgMzEuOTMyIDIxLjEwOSAzMi43MTIgMjAuMTgxIDMzLjc1NSAyMC4xMzQgWiIvPgogPHBhdGggc3R5bGU9IiIgY2xhc3M9ImEiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OTk5LCAtOC44ODE3ODQxOTcwMDEyNTJlLTE2LCAwKSIgZD0iTSAyMS43MjYgNDAuMDYxIEwgMjEuNzI2IDM5LjA3MiBMIDIxLjcyNiAzOS4wNzIgQyAyMi4yNzUgMzkuODI5IDIzLjE2OCA0MC4yNjEgMjQuMTAzIDQwLjIyMSBDIDI2'+
			'LjIwOCA0MC4yMjEgMjcuMTAyIDM4LjM3MSAyNy4xMDIgMzYuNDU2IEMgMjcuMjg3IDM0LjY0NSAyNS45MiAzMy4wNDYgMjQuMTAzIDMyLjk0NSBDIDIzLjE4NSAzMi44NjEgMjIuMjk1IDMzLjI5IDIxLjc4OSAzNC4wNjMgTCAyMS43ODkgMzQuMDYzIEwgMjEuNzg5IDI5LjgzNSBMIDIwLjQ5NyAyOS44MzUgTCAyMC40OTcgNDAuMDYxIEwgMjEuNzI2IDQwLjA2MSBaIE0gMjMuODQ3IDMzLjk4MyBDIDI1LjExNiAzNC4xMSAyNi4wMDMgMzUuMjk5IDI1Ljc2MiAzNi41NTIgQyAyNS45NDMgMzcuODA4IDI1LjA4NSAzOC45NzkgMjMuODMyIDM5LjE4MyBDIDIyLjU0MiAzOS4wNDMgMjEuNjIxIDM3Lj'+
			'g3IDIxLjc4OSAzNi41ODMgQyAyMS42MTEgMzUuMjk1IDIyLjUzOCAzNC4xMTUgMjMuODMyIDMzLjk4MyBaIi8+CiA8cGF0aCBzdHlsZT0iIiBjbGFzcz0iYSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45OTk5OTk5OTk5OTk5OTk5LCAwLCAwLCAwLjk5OTk5OTk5OTk5OTk5OTksIC04Ljg4MTc4NDE5NzAwMTI1MmUtMTYsIDApIiBkPSJNIDMwLjkxNSA0MC4yMjEgQyAzMS43NTkgNDAuMjQ1IDMyLjU2MiAzOS44NTggMzMuMDY5IDM5LjE4MyBMIDMzLjA2OSAzOS4xODMgTCAzMy4wNjkgNDAuMDc3IEwgMzQuMjY1IDQwLjA3NyBDIDM0LjIzOSAzOS42MjYgMzQuMjM5IDM5LjE3MiAzNC4yNjUgMzguNzIx'+
			'IEwgMzQuMjY1IDM1LjgxOCBDIDM0LjU1NCAzNC4xNiAzMy4xMzkgMzIuNzAzIDMxLjQ3NCAzMi45NDUgQyAzMC42NjcgMzIuOTUxIDI5Ljg3OSAzMy4xNzggMjkuMTkyIDMzLjYgTCAyOS4xOTIgMzQuNjg0IEMgMjkuNzYzIDM0LjIyNyAzMC40NzEgMzMuOTc5IDMxLjIwMyAzMy45ODMgQyAzMi4yMyAzMy44OSAzMy4wNzQgMzQuNzgxIDMyLjkyNSAzNS44MDIgQyAzMi40MTUgMzUuODAyIDMyLjA2NCAzNS44MDIgMzEuNTY5IDM1LjgwMiBDIDMwLjI0NSAzNS44MDIgMjguMzc5IDM2LjM1OSAyOC4zNzkgMzguMDk5IEMgMjguMzc3IDM5LjQ0MiAyOS41OTMgNDAuNDU5IDMwLjkxNSA0MC4yMjEgWi'+
			'BNIDMyLjE0NCAzNi43MTEgTCAzMi45NTggMzYuNzExIEwgMzIuOTU4IDM3LjMxNyBDIDMzLjAzMyAzOC40MDMgMzIuMTEgMzkuMjk2IDMxLjAyNiAzOS4xODMgQyAzMC4zNiAzOS4yMjEgMjkuNzg2IDM4LjcxOCAyOS43MzUgMzguMDUxIEMgMjkuNzE5IDM2LjgyMyAzMS40NDEgMzYuNzExIDMyLjE0NCAzNi43MTEgWiIvPgogPHBhdGggc3R5bGU9IiIgY2xhc3M9ImEiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTk5OTk5OTk5OTk5OTk5OSwgMCwgMCwgMC45OTk5OTk5OTk5OTk5OTk5LCAtOC44ODE3ODQxOTcwMDEyNTJlLTE2LCAwKSIgZD0iTSAzNi40MDMgMzMuMDg5IEwgMzYuNDAzIDQwLjA0NiBM'+
			'IDM3LjY4IDQwLjA0NiBMIDM3LjY4IDM2Ljg1NCBDIDM3LjY4IDM1LjExNSAzOC40MyAzNC4wMTQgMzkuNTc4IDM0LjAxNCBDIDM5LjgyNCAzNC4wMSA0MC4wNjggMzQuMDUzIDQwLjI5NiAzNC4xNDMgTCA0MC4yOTYgMzMuMDI1IEMgNDAuMDE5IDMyLjk1NyAzOS43MzUgMzIuOTI2IDM5LjQ1MSAzMi45MyBDIDM4LjY2NiAzMi45NzggMzcuOTcyIDMzLjQ1NyAzNy42NDggMzQuMTc0IEwgMzcuNjQ4IDM0LjE3NCBMIDM3LjY0OCAzMy4wODkgTCAzNi40MDMgMzMuMDg5IFoiLz4KIDxwYXRoIHN0eWxlPSIiIGNsYXNzPSJhIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjk5OTk5OTk5OTk5OTk5OTksIDAsID'+
			'AsIDAuOTk5OTk5OTk5OTk5OTk5OSwgLTguODgxNzg0MTk3MDAxMjUyZS0xNiwgMCkiIGQ9Ik0gNDQuMTQxIDE1LjE3MiBMIDE2LjYzNiAxNS4xNzIgQyAxNi4yNTcgMTUuMTcyIDE1Ljk1IDE1LjQ3OSAxNS45NSAxNS44NTkgTCAxNS45NSA0My4zNjQgQyAxNS45NSA0My43NDMgMTYuMjU3IDQ0LjA1IDE2LjYzNiA0NC4wNSBMIDQ0LjE0MSA0NC4wNSBDIDQ0LjUyMSA0NC4wNSA0NC44MjggNDMuNzQzIDQ0LjgyOCA0My4zNjQgTCA0NC44MjggMTUuODU5IEMgNDQuODI4IDE1LjQ3OSA0NC41MjEgMTUuMTcyIDQ0LjE0MSAxNS4xNzIgWiBNIDQ0LjE0MSA0My4zNjQgTCAxNi42MzYgNDMuMzY0IEwg'+
			'MTYuNjM2IDE1Ljg1OSBMIDQ0LjE0MSAxNS44NTkgTCA0NC4xNDEgNDMuMzY0IFoiLz4KPC9zdmc+Cg==';
		me._svg_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 3";
		el.ggDx=-81;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_3.appendChild(me._svg_3);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNjAgNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgaGVpZ2h0PSI2MCIgd2lkdGg9IjYwIj4KIDxnIHN0eWxlPSIiIHRyYW5zZm9ybT0ibWF0cml4KDAuNTk3MzYzMDYzNjUzNzUyOSwgMCwgMCwgMC41OTczNjMwNjM2NTM3NTI5LCAwLjIxMTE4MjAxNjMwMDg4NzczLCAxLjg4MTM5ODk0NDI3OTUzNTQpIj4KICA8cGF0aCBzdHlsZT0iZmlsbDogcmdiKDI1NSwgMjU1LCAyNTUpOyIgZD0iTTY3LjA4NTMzLDU2LjIzNTZsLjAxMzM3LS4wMDgzLjAwOTc3LS4wMDgyNGExMi4wNz'+
			'IxMiwxMi4wNzIxMiwwLDAsMCwyLjg2NC00Ljc5NjI2LDE3LjgxNzg2LDE3LjgxNzg2LDAsMCwwLDEuMTgwNDgtNS42MjIzMSw0Ljg2OTQyLDQuODY5NDIsMCwwLDAtLjM0Nzc4LTEuOTM4OSwyLjY2OTIxLDIuNjY5MjEsMCwwLDAtMS4zMzU2OS0xLjQxMywyLjU0OTc4LDIuNTQ5NzgsMCwwLDAtMS4wMzUyOC0uMjM5MDdsLS4wMzMwOC4wMDE1M0g2NS4wNzg5MmwuNzIyMTEtMy42Nzk5M2ExLjEyMTgzLDEuMTIxODMsMCwwLDAtMS4xNDI2NC0xLjM5MTY2SDM5LjA3Mjc1QTEuMTI5OCwxLjEyOTgsMCwwLDAsMzcuOTIyLDM4LjUzMjY1bC44ODM2Nyw0LjYxaDguMTc0NjJhMS44MzE5MSwxLjgzMTkx'+
			'LDAsMCwxLDEuODMzNTYsMi4yMzI0OGwtLjQwODk0LDIuMDgwNjlINTAuMjY4YTMuMjIsMy4yMiwwLDAsMSwxLjM2MDI5LjMsMy4zMjYzNSwzLjMyNjM1LDAsMCwxLDEuNjczNDYsMS43NTI2Miw1LjI3ODIzLDUuMjc4MjMsMCwwLDEsLjM4NTgsMi4wOTg5NEExNi41MjU2NiwxNi41MjU2NiwwLDAsMSw1Mi41ODk0Miw1Ni44OTUsMTEuMzIwNzgsMTEuMzIwNzgsMCwwLDEsNDkuNzg1LDYxLjUyNjQ5YTYuMzA2LDYuMzA2LDAsMCwxLTMuNTIzNDQsMS4zMTA2N2gtLjg4Mzg1bC0uMjIwODMsMS4xMjYxSDU5LjM3NzM4YTEuODAxNSwxLjgwMTUsMCwwLDAsMS42OTMyNC0xLjM5MTU0bDEuMDEwOC01Lj'+
			'EzNTkzSDYzLjgwMUE1LjgzMTc5LDUuODMxNzksMCwwLDAsNjcuMDg1MzMsNTYuMjM1NlpNMzkuNDMzOSw0Mi4xMjM3OGwtLjcxNzE2LTMuNzQ0MzhhLjM3NzMxLjM3NzMxLDAsMCwxLC4wNTYtLjMxNjU5LjM4MTI5LjM4MTI5LDAsMCwxLC4zLS4xMTUzSDY0LjY1ODM4YS4zMjE3NS4zMjE3NSwwLDAsMSwuMzUxMTQuNDI2OTRsLS43Mzg2NSwzLjc0OTMzWm0yNS40NDU0MywxLjA5ODA4aDMuNTU0ODFhMS41NjkyOCwxLjU2OTI4LDAsMCwxLC45MDM0NC4zMjE0NywxLjc1NDcsMS43NTQ3LDAsMCwxLC41MzkyNS43MjA1OCwzLjg0MTEyLDMuODQxMTIsMCwwLDEsLjI2NTQ0LDEuNTM2NTYsMTYuODky'+
			'NDMsMTYuODkyNDMsMCwwLDEtMS4xMTk1Nyw1LjI3NDM1LDExLjIyNTYzLDExLjIyNTYzLDAsMCwxLTIuNTYwNTUsNC4zNjYsNS4wMjczMyw1LjAyNzMzLDAsMCwxLTEuODIzNTUuODYwNzIsNC43NjQxOCw0Ljc2NDE4LDAsMCwxLS42MTgyOS4xMDg3NmMtLjA3NDEuMDA4MjQtLjEzMTg0LjAxMTQ3LS4xNjk4Ni4wMTMxMmwtLjAzOTQ5LjAwMTcxSDYyLjI4MDgyWiIvPgogIDxwYXRoIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiBkPSJNNDcuOTY4LDU5LjI5NGE5LjMxNzU0LDkuMzE3NTQsMCwwLDAsMS45MTkxMy0zLjM4NjQ3LDEzLjk3OTIxLDEzLjk3OTIxLDAsMCwwLC45MjMzNC'+
			'00LjI5NjgxLDIuNDI2ODcsMi40MjY4NywwLDAsMC0uMTUxNzktLjk2MTE4LjU5NTYzLjU5NTYzLDAsMCwwLS4xNzYyMS0uMjQ5LjQyMzQuNDIzNCwwLDAsMC0uMTk0Ny0uMDY5MjFsLTIuNDUwMTMuMDAxNjVMNDUuOTQ1LDU5Ljk2aC4yODAyN2EzLjMyNjQsMy4zMjY0LDAsMCwwLC40OTk1Ny0uMDc5QTMuNDY4MzQsMy40NjgzNCwwLDAsMCw0Ny45NjgsNTkuMjk0WiIvPgogIDxwYXRoIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiBkPSJNMzEuODAwMTEsNjIuNDMxNThhNy45NTA4OCw3Ljk1MDg4LDAsMCwwLDEuNjM3MzMtMi45MDAyMSwxMi4wMjM1MSwxMi4wMjM1MSwwLDAsMCwu'+
			'Nzk5NjItMy43MDMsMi4wMTQsMi4wMTQsMCwwLDAtLjEyMzc4LS43ODk3OS4zNjY3My4zNjY3MywwLDAsMC0uMTE1My0uMTY5ODZsLTIuMTQ4NDQtLjAzMTI1LTEuNjA2LDguMTQ4MDdoLjExMDZhMi45NDM4LDIuOTQzOCwwLDAsMCwuNDA1NTgtLjA2NDMzQTIuODc2MywyLjg3NjMsMCwwLDAsMzEuODAwMTEsNjIuNDMxNThaIi8+CiAgPHBhdGggc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsiIGQ9Ik00OS4yMDc4OCw2MC45MDY1Niw0OS4yMTc2NSw2MC45bC4wMTQ4OS0uMDEzMThhMTAuNzAyNiwxMC43MDI2LDAsMCwwLDIuNTYyMTktNC4yODIsMTUuNzI3NjEsMTUuNzI3NjEsMCwwLD'+
			'AsMS4wNDg2NS00Ljk5NzMxLDQuNDA0MzksNC40MDQzOSwwLDAsMC0uMzE4MjQtMS43NjU4MSwyLjUsMi41LDAsMCwwLTEuMjQ4LTEuMzE5MDksMi40MjI3MiwyLjQyMjcyLDAsMCwwLS45NzYyLS4yMjQyNEw1MC4yNjgsNDguM0g0Ny4zNzkzOWwuNjA2NjMtMy4wODk4NGEuOTgzNDUuOTgzNDUsMCwwLDAtLjU0MDc3LTEuMTI3ODEsMS4xNCwxLjE0LDAsMCwwLS40NjY0OS0uMDk1NTJIMjQuNDcxMzdBLjk5MzY0Ljk5MzY0LDAsMCwwLDIzLjQ1OSw0NS4yMTM2MmwuNjAxNjgsMy4xMzkxaC45NDMxMmwtLjYzNjM1LTMuMzEzODQuMDA2NTktLjEwMjM2LjA5NzI5LS4wMjMxM0g0Ni45Nzg3NmwuMDk3'+
			'MjMuMDIxNDguMDAxNzEuMDk3MjMtMS40NjkxOCw3LjQ1OUgzNS4zMTY4OWEyLjg5ODksMi44OTg5LDAsMCwxLC45NDQ4Mi44NDQxOCwzLjIzNzI3LDMuMjM3MjcsMCwwLDEsLjM1Mjg0LjYyMzM1LDQuNjkzODksNC42OTM4OSwwLDAsMSwuMzQyOSwxLjg2OTY5LDE0LjU1OTIzLDE0LjU1OTIzLDAsMCwxLS45NjExOCw0LjYzNzgyLDkuOTUxMTMsOS45NTExMywwLDAsMS0yLjQ3MzIxLDQuMDc0MTYsNS41NjMyOCw1LjU2MzI4LDAsMCwxLTMuMTM5MTYsMS4xNjczaC0uNjc2bC0uMjA0NDcsMS4wMzIyOS0uMTY0OTIuODQ1NjRINDIuMzM0MTdhMS40MDA4NSwxLjQwMDg1LDAsMCwwLC41MDQ0Ni0uMD'+
			'k3MjMsMS42Mzg4LDEuNjM4OCwwLDAsMCwuNzkzLS42NTI4OSwxLjM0OTE2LDEuMzQ5MTYsMCwwLDAsLjE5MTI4LS40NzQ3M2wuNDczMjEtMi4zOTc0Ni4zODc1MS0xLjk3MDI4aDEuNTQzMDlBNS4zMDI0Myw1LjMwMjQzLDAsMCwwLDQ5LjIwNzg4LDYwLjkwNjU2Wm0tNC4yOTE3NS0uMTAyMzYsMi4yMjc0Mi0xMS4zMTUzN2gzLjE0NzU4bC4wMTMxMi0uMDAxNzFhMS4yNTQ4OSwxLjI1NDg5LDAsMCwxLC43MDIzOS4yNTIyNiwxLjM5OTc4LDEuMzk5NzgsMCwwLDEsLjQyNjk0LjU3NTU2LDMuMjI4NDUsMy4yMjg0NSwwLDAsMSwuMjIyNzIsMS4yOTI1NCwxNC44MDUsMTQuODA1LDAsMCwxLS45NzYy'+
			'LDQuNTg4NTYsOS43ODg4OSw5Ljc4ODg5LDAsMCwxLTIuMjA0MjgsMy43NzIyOCw0LjI2Nyw0LjI2NywwLDAsMS0xLjU0OTkzLjczMjA2LDMuODQ1NDIsMy44NDU0MiwwLDAsMS0uNTIyNzEuMDkyMzVsLS4xNDE2Ni4wMTE0N2gtMS4zNDU0WiIvPgogIDxwYXRoIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiBkPSJNMzIuOTQ5MzQsNjMuOTIwNDFsLjAwOTc3LS4wMDgxMi4wMTMzNy0uMDA5OTVhOS4zNTksOS4zNTksMCwwLDAsMi4yMzA2NS0zLjcyNjIsMTMuNzEzODksMTMuNzEzODksMCwwLDAsLjkxMDE2LTQuMzQ5NDksMy44NDI0NCwzLjg0MjQ0LDAsMCwwLS4yNzUzMy0xLjUzNj'+
			'c0LDIuMTMzMzIsMi4xMzMzMiwwLDAsMC0uODA5NTctLjk1NDU5LDIuMjg1NiwyLjI4NTYsMCwwLDAtLjI3ODU2LS4xOTI4MSwyLjA2MSwyLjA2MSwwLDAsMC0uODQ3Ni0uMTk0NjRoLTIuNTQyM2wuMDkwNy0uNDU2NzMuMTY0NzktLjg0NDEyLjI3MzgtMS4zODQ5NUEuODYxNS44NjE1LDAsMCwwLDMxLjAxMiw0OS4xOTY5SDExLjQyNjI3YS44NjQuODY0LDAsMCwwLS44ODAzMSwxLjA2NTE5bDMuNTMxNjgsMTguNDAxODZhMS4zNjcyNywxLjM2NzI3LDAsMCwwLDEuMjg5MTgsMS4wNjY4M0gyNi45NjkyNGExLjM3NjYsMS4zNzY2LDAsMCwwLDEuMjk2LTEuMDY1MTJsLjA3MDkyLS4zNjExNS4xNjE1'+
			'Ni0uODE2MTYuMTY5ODYtLjg2NTYuMzQ2MTMtMS43NTc1N2gxLjM0Mzc1QTQuNjI0MTYsNC42MjQxNiwwLDAsMCwzMi45NDkzNCw2My45MjA0MVptLTQuNTg2ODUuMDc3NDVIMTQuMDAxNjVMMTEuMzM1NTcsNTAuMTEwNDdsLjAwNTA3LS4wODc0Ni4wODU2My0uMDIxNDhIMzEuMDEybC4wODQxMS4wMTk3OC4wMDE2NS4wODQxMUwzMC43OTQzNyw1MS42NDdsLS4xNjY1Ljg0NDEyLS4xNjY0NC44NDQxOFptLjg1NDEzLS4xNjgxNSwxLjkzODg0LTkuODQ2MzdoMi43MzdsLjAxMzE4LS4wMDE3MWExLjA5ODU3LDEuMDk4NTcsMCwwLDEsLjYxLjIxOTM2LDEuMjI2NTIsMS4yMjY1MiwwLDAsMSwuMzcyNj'+
			'IuNTAxMjIsMi44MTgsMi44MTgsMCwwLDEsLjE5MTI4LDEuMTI0NDUsMTIuNzY1MjIsMTIuNzY1MjIsMCwwLDEtLjg0OTA2LDMuOTkzMjksOC40NzA4NCw4LjQ3MDg0LDAsMCwxLTEuOTIwODQsMy4yODQzLDMuNjk5ODgsMy42OTk4OCwwLDAsMS0xLjM0NTQ2LjYzNDgzLDMuNDU4ODMsMy40NTg4MywwLDAsMS0uNDU1LjA4MDg3bC0uMTIyMDcuMDA5NzdIMjkuMjE2NjFaIi8+CiAgPHBhdGggc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsiIGQ9Ik04OS4xMjU3MywzNi45OTEzM2EyLjY2OTIyLDIuNjY5MjIsMCwwLDAtMS4zMzU2OS0xLjQxMywyLjU0OTc4LDIuNTQ5NzgsMCwwLDAtMS4w'+
			'MzUyOC0uMjM5MDdsLS4wMzMwOC4wMDE1M0g4My4zOTk1M2wuNzIyMTEtMy42Nzk4N0ExLjEyMTg2LDEuMTIxODYsMCwwLDAsODIuOTc5LDMwLjI2OTIzSDU3LjM5MzM3YTEuMTI5ODMsMS4xMjk4MywwLDAsMC0xLjE1MDc2LDEuMzkzMTlsLjg4MzY3LDQuNjEsNy42NTczNS0uMDQxOTNhMS44MzE4MywxLjgzMTgzLDAsMCwxLDEuODMzNSwyLjIzMjQ4bC0uNTk3NDcsMy4wOTMsMi42NjQyNS4wNDE5M2EyLjgyMTM3LDIuODIxMzcsMCwwLDEsMS43MDU2My40NTMyNSwzLjM4ODUzLDMuMzg4NTMsMCwwLDEsMS4yMzI4NSwxLjczMjI0LDUuMjc4LDUuMjc4LDAsMCwxLC4zODU4LDIuMDk4OTQsMTcuOD'+
			'g5NzksMTcuODg5NzksMCwwLDEtMS4xMTc2OCw1LjUyYy0uODA2MjEsMi4xNjMyNy0xLjg2NzA3LDQuMjc2NTUtMi45MjIyNCw1LjE4ODQ4YTguMDcwNjEsOC4wNzA2MSwwLDAsMS00LjExNSwxLjY0NmwtMS4wNTU1NC4wMzQ0Mi0uMjY4NDMsMS4xNDYzNiwxNS4xNjg3LS4wMzQ0MmExLjgwMTUsMS44MDE1LDAsMCwwLDEuNjkzMjQtMS4zOTE1NGwxLjAxMDg2LTcuNDI2aDEuNzE5NTRhNS44MzE3OSw1LjgzMTc5LDAsMCwwLDMuMjg0My0xLjIwMDJsLjAxMzM3LS4wMDgzLjAwOTc3LS4wMDgyNGExMi4wNzE2OCwxMi4wNzE2OCwwLDAsMCwyLjg2NC00Ljc5NjI2LDE3LjgxNzg2LDE3LjgxNzg2LDAs'+
			'MCwwLDEuMTgwNDgtNS42MjIzMUE0Ljg2OTYzLDQuODY5NjMsMCwwLDAsODkuMTI1NzMsMzYuOTkxMzNaTTU3LjM3NjY1LDMzLjM2NzkybC0uMzM5MjktMS44NTg3NmEuMzc3MzEuMzc3MzEsMCwwLDEsLjA1Ni0uMzE2NTkuMzgxMjkuMzgxMjksMCwwLDEsLjMtLjExNTNIODIuOTc5YS4zMjE3Ni4zMjE3NiwwLDAsMSwuMzUxMTQuNDI3bC0uMzY5LDEuOTM1MThaTTg3LjM0MzMyLDQ0LjIwNDU5YTExLjIyNTYzLDExLjIyNTYzLDAsMCwxLTIuNTYwNTUsNC4zNjYsNS4wMjY4Nyw1LjAyNjg3LDAsMCwxLTEuODIzNTUuODYwNzIsNC43NjQxOCw0Ljc2NDE4LDAsMCwxLS42MTgyOS4xMDg3NmMtLjA3ND'+
			'EuMDA4MjQtLjEzMTg0LjAxMTQ3LS4xNjk4Ni4wMTMxOGwtLjAzOTQ5LjAwMTY1SDgwLjYwMTQ0TDgzLjIsMzYuMzUxNjJoMy41NTQ3NWExLjU2OTI4LDEuNTY5MjgsMCwwLDEsLjkwMzQ0LjMyMTQ3LDEuNzU0MTcsMS43NTQxNywwLDAsMSwuNTM5MjUuNzIwNTgsMy44NDExMiwzLjg0MTEyLDAsMCwxLC4yNjU0NCwxLjUzNjU2QTE2Ljg5MjA4LDE2Ljg5MjA4LDAsMCwxLDg3LjM0MzMyLDQ0LjIwNDU5WiIvPgogIDxwYXRoIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiBkPSJNNjUuODU3MDUsNTQuNzY1ODFhOS44OTY4LDkuODk2OCwwLDAsMCwyLjI4MDIxLTMuOTE0MDYsMTcuMDIw'+
			'MywxNy4wMjAzLDAsMCwwLDEuMjk4LTUuMTM4ODUsMy4wMzA1NywzLjAzMDU3LDAsMCwwLS4xODk0NS0xLjIuNzQyODIuNzQyODIsMCwwLDAtLjIyLS4zMTA4NS41Mjg2NC41Mjg2NCwwLDAsMC0uMjQzLS4wODY0M2wtMy4yODM1MS0uMDQ4NzctMi4xNjc2LDExLjUzMDRoLjM0OTg1YTQuMTQ1LDQuMTQ1LDAsMCwwLC42MjM2Ni0uMDk4NjNBNC4zMjk4MSw0LjMyOTgxLDAsMCwwLDY1Ljg1NzA1LDU0Ljc2NTgxWiIvPgogPC9nPgo8L3N2Zz4K';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 2";
		el.ggDx=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_3.appendChild(me._svg_2);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjAgNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8c3R5bGU+LmF7ZmlsbDojZmZmO308L3N0eWxlPgogPC9kZWZzPgogPHRpdGxlPk5lc3ByZXNzb19GSFRNTF9TVkdfSUNPTkVTPC90aXRsZT4KIDxwYXRoIGNsYXNzPSJhIiBkPSJNMTguNTUsMjYuODhsMS44MSwwLjU5LDAuMDctLjI1LDAuMTItLjM3LDAuMDgtLjI0TDE4LjgyLDI2bC0wLjE0LDBhMC40NSwwLjQ1LDAsMCwwLS40My4zMWwwLDAuMTRBMC40NSwwLjQ1LDAsMCwwLDE4LjU1LDI2Ljg4WiIvPgogPHBhdGggY2xhc3M9ImEiIGQ9Ik0yMC4xMywzMS4zNmMwLS'+
			'4xMywwLTAuMjYsMC0wLjM4bDAtLjI1LTEuOTQuMmEwLjQ2LDAuNDYsMCwwLDAtLjQuNSwwLjQ1LDAuNDUsMCwwLDAsLjQ1LjRsMi0uMjFaIi8+CiA8cGF0aCBjbGFzcz0iYSIgZD0iTTI0LDM4bC0wLjItLjE1LTEuMiwxLjY1YTAuNDUsMC40NSwwLDAsMCwuMS42MywwLjQ2LDAuNDYsMCwwLDAsLjI2LjA4QTAuNDUsMC40NSwwLDAsMCwyMy4zNyw0MGwxLjItMS42Ni0wLjIxLS4xNVoiLz4KIDxwYXRoIGNsYXNzPSJhIiBkPSJNMjEuMzMsMzQuOTFsLTAuMTItLjIyLTEuNzMsMWEwLjQ1LDAuNDUsMCwwLDAtLjIzLjM5LDAuNDUsMC40NSwwLDAsMCwuMDYuMjIsMC40NSwwLjQ1LDAsMCwwLC4zOS4y'+
			'MywwLjQ2LDAuNDYsMCwwLDAsLjIyLTAuMDZsMS43NC0xLTAuMTQtLjIyWiIvPgogPHBhdGggY2xhc3M9ImEiIGQ9Ik0yNy43NiwzOS43MWwtMC4yNS0uMDYtMC40MywydjAuMDlhMC40NSwwLjQ1LDAsMCwwLC4zNi40NGgwLjA5QTAuNDUsMC40NSwwLDAsMCwyOCw0MS44NmwwLjQzLTItMC4yNSwwWiIvPgogPHBhdGggY2xhc3M9ImEiIGQ9Ik0zMi4yMywzOS43MWwtMC4zOC4wOC0wLjI1LDAsMC40MywyYTAuNDUsMC40NSwwLDAsMCwuNDQuMzVoMC4wOWEwLjQ1LDAuNDUsMCwwLDAsLjM2LTAuNDRsLTAuNDQtMi4xMVoiLz4KIDxwYXRoIGNsYXNzPSJhIiBkPSJNNDAuNTIsMzUuNjlsLTEuNzMtMS'+
			'0wLjEyLjIyLTAuMi4zMy0wLjE0LjIyLDEuNzQsMWEwLjQ1LDAuNDUsMCwwLDAsLjYyLTAuMTcsMC40NiwwLjQ2LDAsMCwwLC4wNi0wLjIyQTAuNDUsMC40NSwwLDAsMCw0MC41MiwzNS42OVoiLz4KIDxwYXRoIGNsYXNzPSJhIiBkPSJNMzYuMTUsMzcuODRMMzYsMzhsLTAuMzEuMjMtMC4yMS4xNUwzNi42Myw0MGEwLjQ1LDAuNDUsMCwwLDAsLjgxLTAuMjYsMC40NywwLjQ3LDAsMCwwLS4wOC0wLjI2WiIvPgogPHBhdGggY2xhc3M9ImEiIGQ9Ik00MS44OCwzMC45M2wtMS45NC0uMiwwLDAuMjVxMCwwLjE5LDAsLjM4bDAsMC4yNiwyLDAuMjFoMGEwLjQ2LDAuNDYsMCwwLDAsLjQ1LTAuNDVBMC40'+
			'NSwwLjQ1LDAsMCwwLDQxLjg4LDMwLjkzWiIvPgogPHBhdGggY2xhc3M9ImEiIGQ9Ik0zOS41NywyNy4yMmwwLjA3LDAuMjUsMS44MS0uNTlhMC40NSwwLjQ1LDAsMCwwLC4zMS0wLjQzbDAtLjE0QTAuNDUsMC40NSwwLDAsMCw0MS4zMSwyNmwtMS45NC42MSwwLjA4LDAuMjRaIi8+CiA8cGF0aCBjbGFzcz0iYSIgZD0iTTIyLjI0LDIzLjc1bDAuMTctLjIsMC4yNi0uMjksMC4xNy0uMTktMS4zOC0xLjI0YTAuNDYsMC40NiwwLDAsMC0uNjMsMCwwLjQ1LDAuNDUsMCwwLDAsMCwuNjNaIi8+CiA8cGF0aCBjbGFzcz0iYSIgZD0iTTMwLjQ1LDIwVjE4LjIzYTAuNDUsMC40NSwwLDAsMC0uOSwwVjIwaD'+
			'AuOVoiLz4KIDxwYXRoIGNsYXNzPSJhIiBkPSJNMzcuNTksMjMuNTVsMC4xNywwLjIsMS4zOC0xLjI0YTAuNDUsMC40NSwwLDAsMCwuMTUtMC4zMywwLjQ1LDAuNDUsMCwwLDAtLjEyLTAuMywwLjQ2LDAuNDYsMCwwLDAtLjYzLDBsLTEuMzcsMS4yNCwwLjE3LDAuMTlaIi8+CiA8cGF0aCBjbGFzcz0iYSIgZD0iTTM0LjI3LDIxbDAuMjMsMC4xMSwwLjc0LTEuNjZhMC40NCwwLjQ0LDAsMCwwLDAtLjE4QTAuNDUsMC40NSwwLDAsMCwzNSwxOC44NWEwLjQ2LDAuNDYsMCwwLDAtLjU5LjIzbC0wLjc0LDEuNjYsMC4yMywwLjFaIi8+CiA8cGF0aCBjbGFzcz0iYSIgZD0iTTI1LjQ5LDIxLjExTDI1Ljcy'+
			'LDIxbDAuMzUtLjE2LDAuMjMtLjEtMC43NC0xLjY2QTAuNDcsMC40NywwLDAsMCwyNSwxOC44NWEwLjQ1LDAuNDUsMCwwLDAtLjI3LjQxLDAuNDQsMC40NCwwLDAsMCwwLC4xOFoiLz4KIDxwYXRoIGNsYXNzPSJhIiBkPSJNMzguNCwzMEE4LjQsOC40LDAsMSwwLDMwLDM4LjQsOC40MSw4LjQxLDAsMCwwLDM4LjQsMzBabS0zLjc4LDYuMTQtMC4wOS4wNy0wLjIyLjE3YTcuNjEsNy42MSwwLDAsMS0yLjU0LDEuMTFsLTAuMzguMDhhNy4zMiw3LjMyLDAsMCwxLTIuNzcsMGwtMC4zOC0uMDhhNy42MSw3LjYxLDAsMCwxLTIuNTQtMS4xMWwtMC4yMi0uMTctMC4wOS0uMDdhNy43Myw3LjczLDAsMCwxLT'+
			'EuODktMmwtMC4yLS4zM2E3LjYsNy42LDAsMCwxLS45LTIuNjVsMC0uMTFjMC0uMDksMC0wLjE4LDAtMC4yOCwwLS4yNiwwLTAuNTEsMC0wLjc0YTcuNyw3LjcsMCwwLDEsLjI5LTIuMDhjMC0uMTMuMDctMC4yNSwwLjEyLTAuMzdhNy42Miw3LjYyLDAsMCwxLDEuMzktMi40OGwwLjE5LS4yMSwwLjA3LS4wOGE3LjcyLDcuNzIsMCwwLDEsMi4zLTEuN2wwLjEsMEwyNywyMi45MWE3LjYzLDcuNjMsMCwwLDEsMi44MS0uNmgwLjM5YTcuNjMsNy42MywwLDAsMSwyLjgxLjZMMzMuMjUsMjNsMC4xLDBhNy43Myw3LjczLDAsMCwxLDIuMjksMS43bDAuMDcsMC4wNywwLjE5LDAuMjJhNy42NCw3LjY0LDAs'+
			'MCwxLDEuMzksMi40OGMwLDAuMTIuMDgsMC4yNSwwLjExLDAuMzdBNy42NSw3LjY1LDAsMCwxLDM3LjcsMzBhNy4zNSw3LjM1LDAsMCwxLDAsLjc0YzAsMC4xLDAsLjE5LDAsMC4yOXYwLjFhNy41OSw3LjU5LDAsMCwxLS45LDIuNjVsLTAuMi4zM0E3Ljc0LDcuNzQsMCwwLDEsMzQuNjIsMzYuMTVaIi8+CiA8cG9seWdvbiBjbGFzcz0iYSIgcG9pbnRzPSIzNS4zOSAyOC45OCAzNS4xMSAyOS4yNiAzNS45MSAzMC4wNyAzNC4wNCAzMC4wNyAzNC4wNCAzMC40NyAzNS45MSAzMC40NyAzNS4xMSAzMS4yOCAzNS4zOSAzMS41NiAzNi42OCAzMC4yNyAzNS4zOSAyOC45OCIvPgogPHBvbHlnb24gY2xhc3'+
			'M9ImEiIHBvaW50cz0iMjQuODkgMjkuMjYgMjQuNjEgMjguOTggMjMuMzIgMzAuMjcgMjQuNjEgMzEuNTYgMjQuODkgMzEuMjggMjQuMDggMzAuNDcgMjUuOTYgMzAuNDcgMjUuOTYgMzAuMDcgMjQuMDggMzAuMDcgMjQuODkgMjkuMjYiLz4KIDxwYXRoIGNsYXNzPSJhIiBkPSJNMzIuMTQsMjUuOEgyNi43NXY4LjRoNi40OFYyNS44aC0xLjFabTAuNywxLjV2Ni41SDI3LjE1VjI2LjJoNS42OXYxLjFaIi8+CiA8cGF0aCBjbGFzcz0iYSIgZD0iTTI4LjY5LDI3LjY4bC0wLjEsMGEwLjQsMC40LDAsMSwwLC4zNS41OCwwLjQsMC40LDAsMCwwLDAtLjE4QTAuMzksMC4zOSwwLDAsMCwyOC42OSwyNy42'+
			'OFoiLz4KIDxwYXRoIGNsYXNzPSJhIiBkPSJNMzAuMiwyNy43MmEwLjM2LDAuMzYsMCwwLDAtLjQsMCwwLjM4LDAuMzgsMCwwLDAsMCwuNjcsMC4zNSwwLjM1LDAsMCwwLC40LDBBMC4zOCwwLjM4LDAsMCwwLDMwLjIsMjcuNzJaIi8+CiA8cGF0aCBjbGFzcz0iYSIgZD0iTTMxLjQxLDI3LjY2bC0wLjEsMGEwLjM5LDAuMzksMCwwLDAtLjMuMzgsMC40LDAuNCwwLDAsMCwwLC4xOEEwLjQsMC40LDAsMSwwLDMxLjQxLDI3LjY2WiIvPgogPHBhdGggY2xhc3M9ImEiIGQ9Ik0yOC41OSwyOWEwLjQsMC40LDAsMCwwLS4xNCwwLDAuMzksMC4zOSwwLDAsMC0uMjUuMzQsMC4yNiwwLjI2LDAsMCwwLDAsMC'+
			'wwLjQsMC40LDAsMCwwLC40LjQsMC4zOSwwLjM5LDAsMCwwLC4zMy0wLjE5LDAuNTUsMC41NSwwLDAsMCwuMDctMC4yQTAuNCwwLjQsMCwwLDAsMjguNTksMjlaIi8+CiA8cGF0aCBjbGFzcz0iYSIgZD0iTTMwLjIsMjlhMC4zNiwwLjM2LDAsMCwwLS40LDBsLTAuMDYsMGEwLjM5LDAuMzksMCwwLDAtLjE0LjMsMC40LDAuNCwwLDAsMCwuOCwwLDAuMzksMC4zOSwwLDAsMC0uMTQtMC4zWiIvPgogPHBhdGggY2xhc3M9ImEiIGQ9Ik0zMS41NSwyOWEwLjM5LDAuMzksMCwwLDAtLjU0LjM3LDAuNDQsMC40NCwwLDAsMCwwLC4xLDAuNDIsMC40MiwwLDAsMCwwLC4xLDAuMzksMC4zOSwwLDAsMCwuMzMu'+
			'MTksMC40LDAuNCwwLDAsMCwuNC0wLjQsMC4yOSwwLjI5LDAsMCwwLDAsMEEwLjM5LDAuMzksMCwwLDAsMzEuNTUsMjlaIi8+CiA8cGF0aCBjbGFzcz0iYSIgZD0iTTI4LjksMzAuNDRhMC4zOSwwLjM5LDAsMCwwLS4zMS0wLjE2LDAuNCwwLjQsMCwwLDAtLjM2LjIzLDAuNDEsMC40MSwwLDAsMCwwLC4xNywwLjM5LDAuMzksMCwwLDAsLjA3LjIyLDAuMzksMC4zOSwwLDAsMCwuMzIuMTgsMC40LDAuNCwwLDAsMCwuNC0wLjQsMC4zOCwwLjM4LDAsMCwwLDAtLjE3WiIvPgogPGNpcmNsZSBjeT0iMzAuNjgiIGNsYXNzPSJhIiBjeD0iMzAiIHI9IjAuNCIvPgogPHBhdGggY2xhc3M9ImEiIGQ9Ik0zMS'+
			'40MSwzMC4yOGEwLjM5LDAuMzksMCwwLDAtLjMxLjE2bDAsMC4wNmEwLjM5LDAuMzksMCwwLDAsLjM1LjU3LDAuMzksMC4zOSwwLDAsMCwuMzYtMC41NkEwLjQsMC40LDAsMCwwLDMxLjQxLDMwLjI4WiIvPgogPHBhdGggY2xhc3M9ImEiIGQ9Ik0yOC42NywzMS42MWwtMC4wOSwwYTAuNCwwLjQsMCwwLDAtLjQuNCwwLjM4LDAuMzgsMCwwLDAsLjA2LjIsMC4zOSwwLjM5LDAsMCwwLC4zNC4yaDBBMC40LDAuNCwwLDAsMCwyOSwzMmEwLjM2LDAuMzYsMCwwLDAsMC0uMTFBMC4zOSwwLjM5LDAsMCwwLDI4LjY3LDMxLjYxWiIvPgogPHBhdGggY2xhc3M9ImEiIGQ9Ik0zMC4xMSwzMS42MkwzMCwzMS42'+
			'bC0wLjExLDBhMC4zOSwwLjM5LDAsMCwwLS4yOC4zOCwwLjQxLDAuNDEsMCwwLDAsLjQuNEEwLjM5LDAuMzksMCwwLDAsMzAuMTEsMzEuNjJaIi8+CiA8cGF0aCBjbGFzcz0iYSIgZD0iTTMxLjQxLDMxLjZsLTAuMDgsMEEwLjQzLDAuNDMsMCwwLDAsMzEsMzJhMC4zOSwwLjM5LDAsMCwwLC4zOC4zOWgwYTAuMzksMC4zOSwwLDAsMCwuMzQtMC4yQTAuMzgsMC4zOCwwLDAsMCwzMS44LDMyLDAuNCwwLjQsMCwwLDAsMzEuNDEsMzEuNloiLz4KPC9zdmc+Cg==';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=134;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 60px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_3.appendChild(me._svg_1);
		me._information_b2b.appendChild(me._container_3);
		me.divSkin.appendChild(me._information_b2b);
		el=me._video_popup_close_file=document.createElement('div');
		els=me._video_popup_close_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_popup_close_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_close_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_popup_close_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="video_popup_close_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_close_file.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_close_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_file') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_close_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_close_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_close_file.style[domTransition]='';
				if (me._video_popup_close_file.ggCurrentLogicStateVisible == 0) {
					me._video_popup_close_file.style.visibility=(Number(me._video_popup_close_file.style.opacity)>0||!me._video_popup_close_file.style.opacity)?'inherit':'hidden';
					me._video_popup_close_file.ggVisible=true;
				}
				else {
					me._video_popup_close_file.style.visibility="hidden";
					me._video_popup_close_file.ggVisible=false;
				}
			}
		}
		me._video_popup_close_file.onclick=function (e) {
			player.setVariableValue('vis_video_file', false);
			if (
				(
					((player.getVariableValue('isplaying') == true))
				)
			) {
					player.playSound("_background","0");
			}
		}
		me._video_popup_close_file.onmouseover=function (e) {
			me._video_popup_close_file__img.style.visibility='hidden';
			me._video_popup_close_file__imgo.style.visibility='inherit';
		}
		me._video_popup_close_file.onmouseout=function (e) {
			me._video_popup_close_file__img.style.visibility='inherit';
			me._video_popup_close_file__imgo.style.visibility='hidden';
		}
		me._video_popup_close_file.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_popup_close_file);
		el=me._video_popup_close_youtube=document.createElement('div');
		els=me._video_popup_close_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._video_popup_close_youtube__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_popup_close_youtube__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_popup_close_youtube__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="video_popup_close_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_popup_close_youtube.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_popup_close_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._video_popup_close_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._video_popup_close_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._video_popup_close_youtube.style[domTransition]='';
				if (me._video_popup_close_youtube.ggCurrentLogicStateVisible == 0) {
					me._video_popup_close_youtube.style.visibility=(Number(me._video_popup_close_youtube.style.opacity)>0||!me._video_popup_close_youtube.style.opacity)?'inherit':'hidden';
					me._video_popup_close_youtube.ggVisible=true;
				}
				else {
					me._video_popup_close_youtube.style.visibility="hidden";
					me._video_popup_close_youtube.ggVisible=false;
				}
			}
		}
		me._video_popup_close_youtube.onclick=function (e) {
			if (
				(
					((player.getVariableValue('isplaying') == true))
				)
			) {
					player.playSound("_background","0");
			}
			player.setVariableValue('vis_video_youtube', false);
		}
		me._video_popup_close_youtube.onmouseover=function (e) {
			me._video_popup_close_youtube__img.style.visibility='hidden';
			me._video_popup_close_youtube__imgo.style.visibility='inherit';
		}
		me._video_popup_close_youtube.onmouseout=function (e) {
			me._video_popup_close_youtube__img.style.visibility='inherit';
			me._video_popup_close_youtube__imgo.style.visibility='hidden';
		}
		me._video_popup_close_youtube.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_popup_close_youtube);
		el=me._image_popup_close=document.createElement('div');
		els=me._image_popup_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._image_popup_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._image_popup_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._image_popup_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="image_popup_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 10%;';
		hs+='top : 10%;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_popup_close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_popup_close.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._image_popup_close.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._image_popup_close.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._image_popup_close.style[domTransition]='';
				if (me._image_popup_close.ggCurrentLogicStateVisible == 0) {
					me._image_popup_close.style.visibility=(Number(me._image_popup_close.style.opacity)>0||!me._image_popup_close.style.opacity)?'inherit':'hidden';
					me._image_popup_close.ggVisible=true;
				}
				else {
					me._image_popup_close.style.visibility="hidden";
					me._image_popup_close.ggVisible=false;
				}
			}
		}
		me._image_popup_close.onclick=function (e) {
			player.setVariableValue('vis_image_popup', false);
		}
		me._image_popup_close.onmouseover=function (e) {
			me._image_popup_close__img.style.visibility='hidden';
			me._image_popup_close__imgo.style.visibility='inherit';
		}
		me._image_popup_close.onmouseout=function (e) {
			me._image_popup_close__img.style.visibility='inherit';
			me._image_popup_close__imgo.style.visibility='hidden';
		}
		me._image_popup_close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_popup_close);
		el=me._close_url=document.createElement('div');
		els=me._close_url__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzUuMywzNTcuM2MtMjEuOS0yMS45LTU3LjUtMjEuOS03OS40LDBjLTIxLjksMjEuOS0yMS45LDU3LjUsMCw3OS40YzIxLjksMjEuOSw1Ny41LDIxLjksNzkuNCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTExMy40LDM3OS4yLTEzNS4zLDM1Ny4zeiBNLTE0NS44LDQxMi43YzAuOCwwLjgsMC44LDEuNS0wLjEsMi40bC0xMC45LDEwLjljLTAuNCwwLjQtMC44LDAuNS0xLjMsMC41Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTUuOC0xNS44bC0xNS43LDE1LjdjLTAuNCwwLjQtMC44LDAuNS0x'+
			'LjMsMC41cy0wLjktMC4xLTEuMS0wLjRsLTExLjEtMTEuMWMtMC4zLTAuMy0wLjQtMC42LTAuNC0xLjFjMC0wLjUsMC4xLTAuOSwwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuNy0xNS43bC0xNS44LTE1LjhjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xYzAtMC41LDAuMS0wLjksMC41LTEuM2wxMC45LTEwLjljMC45LTAuOSwxLjctMC45LDIuNC0wLjFsMTUuOCwxNS44bDE1LjctMTUuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xbDExLjEsMTEuMWMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTUuNywxNS43TC0xNDUuOCw0MTIuN3oiLz4KIDwvZz4KID'+
			'xnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5Ni45bDE1LjgsMTUuOGMwLjgsMC44LDAuOCwxLjUtMC4xLDIuNGwtMTAuOSwxMC45Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMC0wLjktMC4xLTEuMS0wLjRsLTE1LjgtMTUuOGwtMTUuNywxNS43Yy0wLjQsMC40LTAuOCwwLjUtMS4zLDAuNXMtMC45LTAuMS0xLjEtMC40bC0xMS4xLTExLjFjLTAuMy0wLjMtMC40LTAuNi0wLjQtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjUsMC4xLTAuOSwwLjUtMS4zbDE1LjctMTUuN2wtMTUuOC0xNS44Yy0wLjMt'+
			'MC4zLTAuNC0wLjYtMC40LTEuMWMwLTAuNSwwLjEtMC45LDAuNS0xLjNsMTAuOS0xMC45YzAuOS0wLjksMS43LTAuOSwyLjQtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTUuOCwxNS44bDE1LjctMTUuN2MwLjktMC45LDEuNy0wLjksMi40LTAuMWwxMS4xLDExLjFjMC44LDAuOCwwLjgsMS41LTAuMSwyLjRMLTE2MS42LDM5Ni45eiIvPgogPC9nPgo8L3N2Zz4K';
		me._close_url__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._close_url__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xMzAuOSwzNTIuOWMtMjQuNC0yNC40LTYzLjgtMjQuNC04OC4yLDBjLTI0LjQsMjQuNC0yNC40LDYzLjgsMCw4OC4yYzI0LjQsMjQuNCw2My44LDI0LjQsODguMiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtTLTEwNi41LDM3Ny4zLTEzMC45LDM1Mi45eiBNLTE0Mi41LDQxNC41YzAuOCwwLjgsMC44LDEuNy0wLjEsMi43bC0xMi4yLDEyLjJjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTE3LjUtMTcuNWwtMTcuNCwxNy40Yy0wLjQsMC40LTAuOCwwLjYtMS40'+
			'LDAuNmMtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTIuMy0xMi4zYy0wLjMtMC4zLTAuNC0wLjctMC40LTEuM2MwLTAuNiwwLjEtMSwwLjYtMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40bC0xNy41LTE3LjVjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zYzAtMC42LDAuMS0xLDAuNi0xLjRsMTIuMi0xMi4yYzEtMSwxLjgtMSwyLjctMC4xbDE3LjUsMTcuNWwxNy40LTE3LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTEsMS44LTEsMi43LTAuMWwxMi4zLDEyLjNjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTE3LjQsMTcuNEwtMTQyLjUsNDE0LjV6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjAuMSwzOTYuOWwxNy41LDE3LjVjMC44LDAuOCwwLjgsMS43LTAuMSwyLjdsLTEyLjIsMTIuMmMtMC40LDAuNC0wLjgsMC42LTEuNCwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjEtMS4zLTAuNGwtMTcuNS0xNy41bC0xNy40LDE3LjRjLTAuNCwwLjQtMC44LDAuNi0xLjQsMC42Yy0wLjYsMC0xLTAuMS0xLjMtMC40bC0xMi4zLTEyLjNjLTAuMy0wLjMtMC40LTAuNy0wLjQtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEsMC42LTEuNGwxNy40LTE3LjRsLTE3LjUtMTcuNWMtMC4zLTAuMy0wLjQtMC43LTAu'+
			'NC0xLjNjMC0wLjYsMC4xLTEsMC42LTEuNGwxMi4yLTEyLjJjMS0xLDEuOC0xLDIuNy0wLjFsMTcuNSwxNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTcuNC0xNy40YzEtMSwxLjgtMSwyLjctMC4xbDEyLjMsMTIuM2MwLjgsMC44LDAuOCwxLjctMC4xLDIuN0wtMTYwLjEsMzk2Ljl6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._close_url__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="close_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 5px;';
		hs+='top : 5px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._close_url.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._close_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._close_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._close_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._close_url.style[domTransition]='';
				if (me._close_url.ggCurrentLogicStateVisible == 0) {
					me._close_url.style.visibility=(Number(me._close_url.style.opacity)>0||!me._close_url.style.opacity)?'inherit':'hidden';
					me._close_url.ggVisible=true;
				}
				else {
					me._close_url.style.visibility="hidden";
					me._close_url.ggVisible=false;
				}
			}
		}
		me._close_url.onclick=function (e) {
			player.setVariableValue('vis_website', false);
			me._web_page.ggText="";
			me._web_page.ggTextDiv.innerHTML=me._web_page.ggText;
			if (me._web_page.ggUpdateText) {
				me._web_page.ggUpdateText=function() {
					var hs="";
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (me._web_page.ggUpdatePosition) {
				me._web_page.ggUpdatePosition();
			}
			me._web_page.ggTextDiv.scrollTop = 0;
		}
		me._close_url.onmouseover=function (e) {
			me._close_url__img.style.visibility='hidden';
			me._close_url__imgo.style.visibility='inherit';
		}
		me._close_url.onmouseout=function (e) {
			me._close_url__img.style.visibility='inherit';
			me._close_url__imgo.style.visibility='hidden';
		}
		me._close_url.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._close_url);
		me._popup_video_file.ggVideoSource = 'media/';
		me._popup_video_file.ggVideoNotLoaded = true;
		me._popup_video_youtube.ggVideoSource = '';
		me._popup_video_youtube.ggVideoNotLoaded = true;
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._node_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._node_scroller.ggUpdatePosition();
			me._loading.style[domTransition]='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
			me._timer_1.ggTimestamp=me.ggCurrentTime;
			me._timer_1.ggTimeout=1000;
		});
		player.addListener('beforechangenode', function() {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading.style[domTransition]='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('tilesrequested', function() {
			player.setVariableValue('vis_loader', false);
		});
	};
	this.hotspotProxyClick=function(id, url) {
		if (id=='caffeep') {
			me._coffee_info_vertuo_info_mouse_over.onclick();
		}
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
		if (id=='pop01') {
			me._mousefollower.onmouseover();
		}
		if (id=='caffeep') {
			me._coffee_info_vertuo_info_mouse_over.onmouseover();
		}
	}
	me.hotspotProxyOut=function(id, url) {
		if (id=='pop01') {
			me._mousefollower.onmouseout();
		}
		if (id=='caffeep') {
			me._coffee_info_vertuo_info_mouse_over.onmouseout();
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_n_changenode = function(){
		if(hotspotTemplates['ht_info_n']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_n'].length; i++) {
				if (hotspotTemplates['ht_info_n'][i]._ht_info_image1 && hotspotTemplates['ht_info_n'][i]._ht_info_image1.logicBlock_visible) {
					hotspotTemplates['ht_info_n'][i]._ht_info_image1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_n'][i]._tt_information1 && hotspotTemplates['ht_info_n'][i]._tt_information1.logicBlock_visible) {
					hotspotTemplates['ht_info_n'][i]._tt_information1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_n'][i]._ht_info_customimage2 && hotspotTemplates['ht_info_n'][i]._ht_info_customimage2.logicBlock_visible) {
					hotspotTemplates['ht_info_n'][i]._ht_info_customimage2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_n_configloaded = function(){
		if(hotspotTemplates['ht_info_n']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_n'].length; i++) {
				if (hotspotTemplates['ht_info_n'][i]._tt_information1 && hotspotTemplates['ht_info_n'][i]._tt_information1.logicBlock_position) {
					hotspotTemplates['ht_info_n'][i]._tt_information1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_n_mouseover = function(){
		if(hotspotTemplates['ht_info_n']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_n'].length; i++) {
				if (hotspotTemplates['ht_info_n'][i]._tt_information1 && hotspotTemplates['ht_info_n'][i]._tt_information1.logicBlock_visible) {
					hotspotTemplates['ht_info_n'][i]._tt_information1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_n_hastouch = function(){
		if(hotspotTemplates['ht_info_n']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_n'].length; i++) {
				if (hotspotTemplates['ht_info_n'][i]._tt_information1 && hotspotTemplates['ht_info_n'][i]._tt_information1.logicBlock_position) {
					hotspotTemplates['ht_info_n'][i]._tt_information1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_n_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_n']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_n'].length; i++) {
				if (hotspotTemplates['ht_info_n'][i]._ht_info_image1 && hotspotTemplates['ht_info_n'][i]._ht_info_image1.logicBlock_visible) {
					hotspotTemplates['ht_info_n'][i]._ht_info_image1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_n'][i]._tt_information1 && hotspotTemplates['ht_info_n'][i]._tt_information1.logicBlock_visible) {
					hotspotTemplates['ht_info_n'][i]._tt_information1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_n'][i]._ht_info_customimage2 && hotspotTemplates['ht_info_n'][i]._ht_info_customimage2.logicBlock_visible) {
					hotspotTemplates['ht_info_n'][i]._ht_info_customimage2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_v_changenode = function(){
		if(hotspotTemplates['ht_info_v']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_v'].length; i++) {
				if (hotspotTemplates['ht_info_v'][i]._ht_info_image0 && hotspotTemplates['ht_info_v'][i]._ht_info_image0.logicBlock_visible) {
					hotspotTemplates['ht_info_v'][i]._ht_info_image0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_v'][i]._tt_information0 && hotspotTemplates['ht_info_v'][i]._tt_information0.logicBlock_visible) {
					hotspotTemplates['ht_info_v'][i]._tt_information0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_v'][i]._ht_info_customimage1 && hotspotTemplates['ht_info_v'][i]._ht_info_customimage1.logicBlock_visible) {
					hotspotTemplates['ht_info_v'][i]._ht_info_customimage1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_v_configloaded = function(){
		if(hotspotTemplates['ht_info_v']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_v'].length; i++) {
				if (hotspotTemplates['ht_info_v'][i]._tt_information0 && hotspotTemplates['ht_info_v'][i]._tt_information0.logicBlock_position) {
					hotspotTemplates['ht_info_v'][i]._tt_information0.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_v_mouseover = function(){
		if(hotspotTemplates['ht_info_v']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_v'].length; i++) {
				if (hotspotTemplates['ht_info_v'][i]._tt_information0 && hotspotTemplates['ht_info_v'][i]._tt_information0.logicBlock_visible) {
					hotspotTemplates['ht_info_v'][i]._tt_information0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_v_hastouch = function(){
		if(hotspotTemplates['ht_info_v']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_v'].length; i++) {
				if (hotspotTemplates['ht_info_v'][i]._tt_information0 && hotspotTemplates['ht_info_v'][i]._tt_information0.logicBlock_position) {
					hotspotTemplates['ht_info_v'][i]._tt_information0.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_v_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_v']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_v'].length; i++) {
				if (hotspotTemplates['ht_info_v'][i]._ht_info_image0 && hotspotTemplates['ht_info_v'][i]._ht_info_image0.logicBlock_visible) {
					hotspotTemplates['ht_info_v'][i]._ht_info_image0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_v'][i]._tt_information0 && hotspotTemplates['ht_info_v'][i]._tt_information0.logicBlock_visible) {
					hotspotTemplates['ht_info_v'][i]._tt_information0.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_v'][i]._ht_info_customimage1 && hotspotTemplates['ht_info_v'][i]._ht_info_customimage1.logicBlock_visible) {
					hotspotTemplates['ht_info_v'][i]._ht_info_customimage1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_enter_recycle_mouseover = function(){
		if(hotspotTemplates['ht_node_enter_recycle']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_enter_recycle'].length; i++) {
				if (hotspotTemplates['ht_node_enter_recycle'][i]._tt_ht_node_1_2 && hotspotTemplates['ht_node_enter_recycle'][i]._tt_ht_node_1_2.logicBlock_visible) {
					hotspotTemplates['ht_node_enter_recycle'][i]._tt_ht_node_1_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_changenode = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_video_file && hotspotTemplates['ht_video_file'][i]._ht_video_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage && hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_configloaded = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_mouseover = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_hastouch = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged = function(){
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				if (hotspotTemplates['ht_video_file'][i]._ht_video_video_file && hotspotTemplates['ht_video_file'][i]._ht_video_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._tt_ht_video_file && hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._tt_ht_video_file.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage && hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_file'][i]._ht_video_file_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_3d_changenode = function(){
		if(hotspotTemplates['ht_3d']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d'].length; i++) {
				if (hotspotTemplates['ht_3d'][i]._ht_info_image_3d && hotspotTemplates['ht_3d'][i]._ht_info_image_3d.logicBlock_visible) {
					hotspotTemplates['ht_3d'][i]._ht_info_image_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_3d_configloaded = function(){
		if(hotspotTemplates['ht_3d']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d'].length; i++) {
				if (hotspotTemplates['ht_3d'][i]._tt_3dt && hotspotTemplates['ht_3d'][i]._tt_3dt.logicBlock_position) {
					hotspotTemplates['ht_3d'][i]._tt_3dt.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_3d_mouseover = function(){
		if(hotspotTemplates['ht_3d']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d'].length; i++) {
				if (hotspotTemplates['ht_3d'][i]._tt_3dt && hotspotTemplates['ht_3d'][i]._tt_3dt.logicBlock_visible) {
					hotspotTemplates['ht_3d'][i]._tt_3dt.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_3d_hastouch = function(){
		if(hotspotTemplates['ht_3d']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d'].length; i++) {
				if (hotspotTemplates['ht_3d'][i]._tt_3dt && hotspotTemplates['ht_3d'][i]._tt_3dt.logicBlock_position) {
					hotspotTemplates['ht_3d'][i]._tt_3dt.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_3d_activehotspotchanged = function(){
		if(hotspotTemplates['ht_3d']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d'].length; i++) {
				if (hotspotTemplates['ht_3d'][i]._ht_info_image_3d && hotspotTemplates['ht_3d'][i]._ht_info_image_3d.logicBlock_visible) {
					hotspotTemplates['ht_3d'][i]._ht_info_image_3d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_3d2_changenode = function(){
		if(hotspotTemplates['ht_3d2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d2'].length; i++) {
				if (hotspotTemplates['ht_3d2'][i]._ht_info_image_3d2 && hotspotTemplates['ht_3d2'][i]._ht_info_image_3d2.logicBlock_visible) {
					hotspotTemplates['ht_3d2'][i]._ht_info_image_3d2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_3d2_configloaded = function(){
		if(hotspotTemplates['ht_3d2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d2'].length; i++) {
				if (hotspotTemplates['ht_3d2'][i]._tt_3dt_2 && hotspotTemplates['ht_3d2'][i]._tt_3dt_2.logicBlock_position) {
					hotspotTemplates['ht_3d2'][i]._tt_3dt_2.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_3d2_mouseover = function(){
		if(hotspotTemplates['ht_3d2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d2'].length; i++) {
				if (hotspotTemplates['ht_3d2'][i]._tt_3dt_2 && hotspotTemplates['ht_3d2'][i]._tt_3dt_2.logicBlock_visible) {
					hotspotTemplates['ht_3d2'][i]._tt_3dt_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_3d2_hastouch = function(){
		if(hotspotTemplates['ht_3d2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d2'].length; i++) {
				if (hotspotTemplates['ht_3d2'][i]._tt_3dt_2 && hotspotTemplates['ht_3d2'][i]._tt_3dt_2.logicBlock_position) {
					hotspotTemplates['ht_3d2'][i]._tt_3dt_2.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_3d2_activehotspotchanged = function(){
		if(hotspotTemplates['ht_3d2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d2'].length; i++) {
				if (hotspotTemplates['ht_3d2'][i]._ht_info_image_3d2 && hotspotTemplates['ht_3d2'][i]._ht_info_image_3d2.logicBlock_visible) {
					hotspotTemplates['ht_3d2'][i]._ht_info_image_3d2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_sizechanged = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_changenode = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_customimage && hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_configloaded = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_mouseover = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_hastouch = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url_image && hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._tt_ht_url && hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._tt_ht_url.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url'][i]._ht_url_customimage && hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				if (hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible) {
					hotspotTemplates['ht_url'][i]._ht_url.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_changenode = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube && hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage && hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_hastouch = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_video_youtube_activehotspotchanged = function(){
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube && hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube && hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._tt_ht_video_youtube.logicBlock_visible();
				}
				if (hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage && hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible) {
					hotspotTemplates['ht_video_youtube'][i]._ht_video_youtube_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_form_sizechanged = function(){
		if(hotspotTemplates['ht_form']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_form'].length; i++) {
				if (hotspotTemplates['ht_form'][i]._ht_form.logicBlock_visible) {
					hotspotTemplates['ht_form'][i]._ht_form.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_form_changenode = function(){
		if(hotspotTemplates['ht_form']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_form'].length; i++) {
				if (hotspotTemplates['ht_form'][i]._ht_form.logicBlock_visible) {
					hotspotTemplates['ht_form'][i]._ht_form.logicBlock_visible();
				}
				if (hotspotTemplates['ht_form'][i]._ht_url_image_1 && hotspotTemplates['ht_form'][i]._ht_url_image_1.logicBlock_visible) {
					hotspotTemplates['ht_form'][i]._ht_url_image_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_form'][i]._tt_ht_url_1 && hotspotTemplates['ht_form'][i]._tt_ht_url_1.logicBlock_visible) {
					hotspotTemplates['ht_form'][i]._tt_ht_url_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_form_configloaded = function(){
		if(hotspotTemplates['ht_form']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_form'].length; i++) {
				if (hotspotTemplates['ht_form'][i]._tt_ht_url_1 && hotspotTemplates['ht_form'][i]._tt_ht_url_1.logicBlock_position) {
					hotspotTemplates['ht_form'][i]._tt_ht_url_1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_form_mouseover = function(){
		if(hotspotTemplates['ht_form']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_form'].length; i++) {
				if (hotspotTemplates['ht_form'][i]._tt_ht_url_1 && hotspotTemplates['ht_form'][i]._tt_ht_url_1.logicBlock_visible) {
					hotspotTemplates['ht_form'][i]._tt_ht_url_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_form_hastouch = function(){
		if(hotspotTemplates['ht_form']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_form'].length; i++) {
				if (hotspotTemplates['ht_form'][i]._tt_ht_url_1 && hotspotTemplates['ht_form'][i]._tt_ht_url_1.logicBlock_position) {
					hotspotTemplates['ht_form'][i]._tt_ht_url_1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_form_activehotspotchanged = function(){
		if(hotspotTemplates['ht_form']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_form'].length; i++) {
				if (hotspotTemplates['ht_form'][i]._ht_url_image_1 && hotspotTemplates['ht_form'][i]._ht_url_image_1.logicBlock_visible) {
					hotspotTemplates['ht_form'][i]._ht_url_image_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_form'][i]._tt_ht_url_1 && hotspotTemplates['ht_form'][i]._tt_ht_url_1.logicBlock_visible) {
					hotspotTemplates['ht_form'][i]._tt_ht_url_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_form_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_form']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_form'].length; i++) {
				if (hotspotTemplates['ht_form'][i]._ht_form.logicBlock_visible) {
					hotspotTemplates['ht_form'][i]._ht_form.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_form_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_form']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_form'].length; i++) {
				if (hotspotTemplates['ht_form'][i]._ht_form.logicBlock_visible) {
					hotspotTemplates['ht_form'][i]._ht_form.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_form_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_form']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_form'].length; i++) {
				if (hotspotTemplates['ht_form'][i]._ht_form.logicBlock_visible) {
					hotspotTemplates['ht_form'][i]._ht_form.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_pdf_sizechanged = function(){
		if(hotspotTemplates['ht_pdf']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
				if (hotspotTemplates['ht_pdf'][i]._ht_pdf.logicBlock_visible) {
					hotspotTemplates['ht_pdf'][i]._ht_pdf.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_pdf_changenode = function(){
		if(hotspotTemplates['ht_pdf']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
				if (hotspotTemplates['ht_pdf'][i]._ht_pdf.logicBlock_visible) {
					hotspotTemplates['ht_pdf'][i]._ht_pdf.logicBlock_visible();
				}
				if (hotspotTemplates['ht_pdf'][i]._ht_url_image_1_1 && hotspotTemplates['ht_pdf'][i]._ht_url_image_1_1.logicBlock_visible) {
					hotspotTemplates['ht_pdf'][i]._ht_url_image_1_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10 && hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10.logicBlock_visible) {
					hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_pdf_configloaded = function(){
		if(hotspotTemplates['ht_pdf']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
				if (hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10 && hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10.logicBlock_position) {
					hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_pdf_mouseover = function(){
		if(hotspotTemplates['ht_pdf']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
				if (hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10 && hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10.logicBlock_visible) {
					hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_pdf_hastouch = function(){
		if(hotspotTemplates['ht_pdf']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
				if (hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10 && hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10.logicBlock_position) {
					hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_pdf_activehotspotchanged = function(){
		if(hotspotTemplates['ht_pdf']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
				if (hotspotTemplates['ht_pdf'][i]._ht_url_image_1_1 && hotspotTemplates['ht_pdf'][i]._ht_url_image_1_1.logicBlock_visible) {
					hotspotTemplates['ht_pdf'][i]._ht_url_image_1_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10 && hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10.logicBlock_visible) {
					hotspotTemplates['ht_pdf'][i]._tt_ht_url_1_10.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_pdf_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_pdf']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
				if (hotspotTemplates['ht_pdf'][i]._ht_pdf.logicBlock_visible) {
					hotspotTemplates['ht_pdf'][i]._ht_pdf.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_pdf_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_pdf']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
				if (hotspotTemplates['ht_pdf'][i]._ht_pdf.logicBlock_visible) {
					hotspotTemplates['ht_pdf'][i]._ht_pdf.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_pdf_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_pdf']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
				if (hotspotTemplates['ht_pdf'][i]._ht_pdf.logicBlock_visible) {
					hotspotTemplates['ht_pdf'][i]._ht_pdf.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_care_sizechanged = function(){
		if(hotspotTemplates['ht_care']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_care'].length; i++) {
				if (hotspotTemplates['ht_care'][i]._ht_care.logicBlock_visible) {
					hotspotTemplates['ht_care'][i]._ht_care.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_care_changenode = function(){
		if(hotspotTemplates['ht_care']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_care'].length; i++) {
				if (hotspotTemplates['ht_care'][i]._ht_care.logicBlock_visible) {
					hotspotTemplates['ht_care'][i]._ht_care.logicBlock_visible();
				}
				if (hotspotTemplates['ht_care'][i]._htcareico && hotspotTemplates['ht_care'][i]._htcareico.logicBlock_visible) {
					hotspotTemplates['ht_care'][i]._htcareico.logicBlock_visible();
				}
				if (hotspotTemplates['ht_care'][i]._careht && hotspotTemplates['ht_care'][i]._careht.logicBlock_visible) {
					hotspotTemplates['ht_care'][i]._careht.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_care_configloaded = function(){
		if(hotspotTemplates['ht_care']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_care'].length; i++) {
				if (hotspotTemplates['ht_care'][i]._careht && hotspotTemplates['ht_care'][i]._careht.logicBlock_position) {
					hotspotTemplates['ht_care'][i]._careht.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_care_mouseover = function(){
		if(hotspotTemplates['ht_care']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_care'].length; i++) {
				if (hotspotTemplates['ht_care'][i]._careht && hotspotTemplates['ht_care'][i]._careht.logicBlock_visible) {
					hotspotTemplates['ht_care'][i]._careht.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_care_hastouch = function(){
		if(hotspotTemplates['ht_care']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_care'].length; i++) {
				if (hotspotTemplates['ht_care'][i]._careht && hotspotTemplates['ht_care'][i]._careht.logicBlock_position) {
					hotspotTemplates['ht_care'][i]._careht.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_care_activehotspotchanged = function(){
		if(hotspotTemplates['ht_care']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_care'].length; i++) {
				if (hotspotTemplates['ht_care'][i]._htcareico && hotspotTemplates['ht_care'][i]._htcareico.logicBlock_visible) {
					hotspotTemplates['ht_care'][i]._htcareico.logicBlock_visible();
				}
				if (hotspotTemplates['ht_care'][i]._careht && hotspotTemplates['ht_care'][i]._careht.logicBlock_visible) {
					hotspotTemplates['ht_care'][i]._careht.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_care_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_care']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_care'].length; i++) {
				if (hotspotTemplates['ht_care'][i]._ht_care.logicBlock_visible) {
					hotspotTemplates['ht_care'][i]._ht_care.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_care_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_care']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_care'].length; i++) {
				if (hotspotTemplates['ht_care'][i]._ht_care.logicBlock_visible) {
					hotspotTemplates['ht_care'][i]._ht_care.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_care_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_care']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_care'].length; i++) {
				if (hotspotTemplates['ht_care'][i]._ht_care.logicBlock_visible) {
					hotspotTemplates['ht_care'][i]._ht_care.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_insta_sizechanged = function(){
		if(hotspotTemplates['ht_insta']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_insta'].length; i++) {
				if (hotspotTemplates['ht_insta'][i]._ht_insta.logicBlock_visible) {
					hotspotTemplates['ht_insta'][i]._ht_insta.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_insta_changenode = function(){
		if(hotspotTemplates['ht_insta']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_insta'].length; i++) {
				if (hotspotTemplates['ht_insta'][i]._ht_insta.logicBlock_visible) {
					hotspotTemplates['ht_insta'][i]._ht_insta.logicBlock_visible();
				}
				if (hotspotTemplates['ht_insta'][i]._ht_url_image_1_1_1 && hotspotTemplates['ht_insta'][i]._ht_url_image_1_1_1.logicBlock_visible) {
					hotspotTemplates['ht_insta'][i]._ht_url_image_1_1_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1 && hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1.logicBlock_visible) {
					hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_insta_configloaded = function(){
		if(hotspotTemplates['ht_insta']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_insta'].length; i++) {
				if (hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1 && hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1.logicBlock_position) {
					hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_insta_mouseover = function(){
		if(hotspotTemplates['ht_insta']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_insta'].length; i++) {
				if (hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1 && hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1.logicBlock_visible) {
					hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_insta_hastouch = function(){
		if(hotspotTemplates['ht_insta']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_insta'].length; i++) {
				if (hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1 && hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1.logicBlock_position) {
					hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_insta_activehotspotchanged = function(){
		if(hotspotTemplates['ht_insta']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_insta'].length; i++) {
				if (hotspotTemplates['ht_insta'][i]._ht_url_image_1_1_1 && hotspotTemplates['ht_insta'][i]._ht_url_image_1_1_1.logicBlock_visible) {
					hotspotTemplates['ht_insta'][i]._ht_url_image_1_1_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1 && hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1.logicBlock_visible) {
					hotspotTemplates['ht_insta'][i]._tt_ht_url_1_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_insta_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_insta']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_insta'].length; i++) {
				if (hotspotTemplates['ht_insta'][i]._ht_insta.logicBlock_visible) {
					hotspotTemplates['ht_insta'][i]._ht_insta.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_insta_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_insta']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_insta'].length; i++) {
				if (hotspotTemplates['ht_insta'][i]._ht_insta.logicBlock_visible) {
					hotspotTemplates['ht_insta'][i]._ht_insta.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_insta_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_insta']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_insta'].length; i++) {
				if (hotspotTemplates['ht_insta'][i]._ht_insta.logicBlock_visible) {
					hotspotTemplates['ht_insta'][i]._ht_insta.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_link_mouseover = function(){
		if(hotspotTemplates['ht_node_link']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_link'].length; i++) {
				if (hotspotTemplates['ht_node_link'][i]._ht_info_d && hotspotTemplates['ht_node_link'][i]._ht_info_d.logicBlock_visible) {
					hotspotTemplates['ht_node_link'][i]._ht_info_d.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_exit_mouseover = function(){
		if(hotspotTemplates['ht_node_exit']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_exit'].length; i++) {
				if (hotspotTemplates['ht_node_exit'][i]._tt_ht_node_1_1_1 && hotspotTemplates['ht_node_exit'][i]._tt_ht_node_1_1_1.logicBlock_visible) {
					hotspotTemplates['ht_node_exit'][i]._tt_ht_node_1_1_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_linkedin_sizechanged = function(){
		if(hotspotTemplates['ht_linkedin']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_linkedin'].length; i++) {
				if (hotspotTemplates['ht_linkedin'][i]._ht_linkedin.logicBlock_visible) {
					hotspotTemplates['ht_linkedin'][i]._ht_linkedin.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_linkedin_changenode = function(){
		if(hotspotTemplates['ht_linkedin']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_linkedin'].length; i++) {
				if (hotspotTemplates['ht_linkedin'][i]._ht_linkedin.logicBlock_visible) {
					hotspotTemplates['ht_linkedin'][i]._ht_linkedin.logicBlock_visible();
				}
				if (hotspotTemplates['ht_linkedin'][i]._ht_url_image_1_1_1_1 && hotspotTemplates['ht_linkedin'][i]._ht_url_image_1_1_1_1.logicBlock_visible) {
					hotspotTemplates['ht_linkedin'][i]._ht_url_image_1_1_1_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1 && hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1.logicBlock_visible) {
					hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_linkedin_configloaded = function(){
		if(hotspotTemplates['ht_linkedin']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_linkedin'].length; i++) {
				if (hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1 && hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1.logicBlock_position) {
					hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_linkedin_mouseover = function(){
		if(hotspotTemplates['ht_linkedin']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_linkedin'].length; i++) {
				if (hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1 && hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1.logicBlock_visible) {
					hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_linkedin_hastouch = function(){
		if(hotspotTemplates['ht_linkedin']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_linkedin'].length; i++) {
				if (hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1 && hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1.logicBlock_position) {
					hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_linkedin_activehotspotchanged = function(){
		if(hotspotTemplates['ht_linkedin']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_linkedin'].length; i++) {
				if (hotspotTemplates['ht_linkedin'][i]._ht_url_image_1_1_1_1 && hotspotTemplates['ht_linkedin'][i]._ht_url_image_1_1_1_1.logicBlock_visible) {
					hotspotTemplates['ht_linkedin'][i]._ht_url_image_1_1_1_1.logicBlock_visible();
				}
				if (hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1 && hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1.logicBlock_visible) {
					hotspotTemplates['ht_linkedin'][i]._tt_ht_url_1_1_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_linkedin_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_linkedin']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_linkedin'].length; i++) {
				if (hotspotTemplates['ht_linkedin'][i]._ht_linkedin.logicBlock_visible) {
					hotspotTemplates['ht_linkedin'][i]._ht_linkedin.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_linkedin_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_linkedin']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_linkedin'].length; i++) {
				if (hotspotTemplates['ht_linkedin'][i]._ht_linkedin.logicBlock_visible) {
					hotspotTemplates['ht_linkedin'][i]._ht_linkedin.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_linkedin_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_linkedin']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_linkedin'].length; i++) {
				if (hotspotTemplates['ht_linkedin'][i]._ht_linkedin.logicBlock_visible) {
					hotspotTemplates['ht_linkedin'][i]._ht_linkedin.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_zoom_mouseover = function(){
		if(hotspotTemplates['ht_node_zoom']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_zoom'].length; i++) {
				if (hotspotTemplates['ht_node_zoom'][i]._tt_ht_node && hotspotTemplates['ht_node_zoom'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node_zoom'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_business_mouseover = function(){
		if(hotspotTemplates['ht_node_business']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_business'].length; i++) {
				if (hotspotTemplates['ht_node_business'][i]._tt_ht_node_1 && hotspotTemplates['ht_node_business'][i]._tt_ht_node_1.logicBlock_visible) {
					hotspotTemplates['ht_node_business'][i]._tt_ht_node_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_enter_mouseover = function(){
		if(hotspotTemplates['ht_node_enter']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_enter'].length; i++) {
				if (hotspotTemplates['ht_node_enter'][i]._tt_ht_node_1_1 && hotspotTemplates['ht_node_enter'][i]._tt_ht_node_1_1.logicBlock_visible) {
					hotspotTemplates['ht_node_enter'][i]._tt_ht_node_1_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_nachh_mouseover = function(){
		if(hotspotTemplates['ht_node_nachh']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_nachh'].length; i++) {
				if (hotspotTemplates['ht_node_nachh'][i]._tt_ht_node_nach && hotspotTemplates['ht_node_nachh'][i]._tt_ht_node_nach.logicBlock_visible) {
					hotspotTemplates['ht_node_nachh'][i]._tt_ht_node_nach.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_polykaraf_changenode = function(){
		if(hotspotTemplates['PolyKaraf']) {
			var i;
			for(i = 0; i < hotspotTemplates['PolyKaraf'].length; i++) {
				if (hotspotTemplates['PolyKaraf'][i]._rectangle_6 && hotspotTemplates['PolyKaraf'][i]._rectangle_6.logicBlock_alpha) {
					hotspotTemplates['PolyKaraf'][i]._rectangle_6.logicBlock_alpha();
				}
				if (hotspotTemplates['PolyKaraf'][i]._rectangle_6 && hotspotTemplates['PolyKaraf'][i]._rectangle_6.logicBlock_scaling) {
					hotspotTemplates['PolyKaraf'][i]._rectangle_6.logicBlock_scaling();
				}
				if (hotspotTemplates['PolyKaraf'][i]._rectangle_5 && hotspotTemplates['PolyKaraf'][i]._rectangle_5.logicBlock_alpha) {
					hotspotTemplates['PolyKaraf'][i]._rectangle_5.logicBlock_alpha();
				}
				if (hotspotTemplates['PolyKaraf'][i]._rectangle_5 && hotspotTemplates['PolyKaraf'][i]._rectangle_5.logicBlock_scaling) {
					hotspotTemplates['PolyKaraf'][i]._rectangle_5.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_polykaraf_varchanged_ht_ani2 = function(){
		if(hotspotTemplates['PolyKaraf']) {
			var i;
			for(i = 0; i < hotspotTemplates['PolyKaraf'].length; i++) {
				if (hotspotTemplates['PolyKaraf'][i]._rectangle_6 && hotspotTemplates['PolyKaraf'][i]._rectangle_6.logicBlock_alpha) {
					hotspotTemplates['PolyKaraf'][i]._rectangle_6.logicBlock_alpha();
				}
				if (hotspotTemplates['PolyKaraf'][i]._rectangle_6 && hotspotTemplates['PolyKaraf'][i]._rectangle_6.logicBlock_scaling) {
					hotspotTemplates['PolyKaraf'][i]._rectangle_6.logicBlock_scaling();
				}
				if (hotspotTemplates['PolyKaraf'][i]._rectangle_5 && hotspotTemplates['PolyKaraf'][i]._rectangle_5.logicBlock_alpha) {
					hotspotTemplates['PolyKaraf'][i]._rectangle_5.logicBlock_alpha();
				}
				if (hotspotTemplates['PolyKaraf'][i]._rectangle_5 && hotspotTemplates['PolyKaraf'][i]._rectangle_5.logicBlock_scaling) {
					hotspotTemplates['PolyKaraf'][i]._rectangle_5.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_polytass_changenode = function(){
		if(hotspotTemplates['PolyTass']) {
			var i;
			for(i = 0; i < hotspotTemplates['PolyTass'].length; i++) {
				if (hotspotTemplates['PolyTass'][i]._rectangle_sub && hotspotTemplates['PolyTass'][i]._rectangle_sub.logicBlock_alpha) {
					hotspotTemplates['PolyTass'][i]._rectangle_sub.logicBlock_alpha();
				}
				if (hotspotTemplates['PolyTass'][i]._rectangle_sub && hotspotTemplates['PolyTass'][i]._rectangle_sub.logicBlock_scaling) {
					hotspotTemplates['PolyTass'][i]._rectangle_sub.logicBlock_scaling();
				}
				if (hotspotTemplates['PolyTass'][i]._rectangle_4 && hotspotTemplates['PolyTass'][i]._rectangle_4.logicBlock_alpha) {
					hotspotTemplates['PolyTass'][i]._rectangle_4.logicBlock_alpha();
				}
				if (hotspotTemplates['PolyTass'][i]._rectangle_4 && hotspotTemplates['PolyTass'][i]._rectangle_4.logicBlock_scaling) {
					hotspotTemplates['PolyTass'][i]._rectangle_4.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_polytass_varchanged_ht_ani2 = function(){
		if(hotspotTemplates['PolyTass']) {
			var i;
			for(i = 0; i < hotspotTemplates['PolyTass'].length; i++) {
				if (hotspotTemplates['PolyTass'][i]._rectangle_sub && hotspotTemplates['PolyTass'][i]._rectangle_sub.logicBlock_alpha) {
					hotspotTemplates['PolyTass'][i]._rectangle_sub.logicBlock_alpha();
				}
				if (hotspotTemplates['PolyTass'][i]._rectangle_sub && hotspotTemplates['PolyTass'][i]._rectangle_sub.logicBlock_scaling) {
					hotspotTemplates['PolyTass'][i]._rectangle_sub.logicBlock_scaling();
				}
				if (hotspotTemplates['PolyTass'][i]._rectangle_4 && hotspotTemplates['PolyTass'][i]._rectangle_4.logicBlock_alpha) {
					hotspotTemplates['PolyTass'][i]._rectangle_4.logicBlock_alpha();
				}
				if (hotspotTemplates['PolyTass'][i]._rectangle_4 && hotspotTemplates['PolyTass'][i]._rectangle_4.logicBlock_scaling) {
					hotspotTemplates['PolyTass'][i]._rectangle_4.logicBlock_scaling();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_wall_k_changenode = function(){
		if(hotspotTemplates['ht_wall_k']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_wall_k'].length; i++) {
				if (hotspotTemplates['ht_wall_k'][i]._tit_w && hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_visible) {
					hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_visible();
				}
				if (hotspotTemplates['ht_wall_k'][i]._svg_9 && hotspotTemplates['ht_wall_k'][i]._svg_9.logicBlock_visible) {
					hotspotTemplates['ht_wall_k'][i]._svg_9.logicBlock_visible();
				}
				if (hotspotTemplates['ht_wall_k'][i]._svg_8 && hotspotTemplates['ht_wall_k'][i]._svg_8.logicBlock_visible) {
					hotspotTemplates['ht_wall_k'][i]._svg_8.logicBlock_visible();
				}
				if (hotspotTemplates['ht_wall_k'][i]._svg_7 && hotspotTemplates['ht_wall_k'][i]._svg_7.logicBlock_visible) {
					hotspotTemplates['ht_wall_k'][i]._svg_7.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_wall_k_configloaded = function(){
		if(hotspotTemplates['ht_wall_k']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_wall_k'].length; i++) {
				if (hotspotTemplates['ht_wall_k'][i]._ht_wall_k.logicBlock_visible) {
					hotspotTemplates['ht_wall_k'][i]._ht_wall_k.logicBlock_visible();
				}
				if (hotspotTemplates['ht_wall_k'][i]._tit_w && hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_position) {
					hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_wall_k_hastouch = function(){
		if(hotspotTemplates['ht_wall_k']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_wall_k'].length; i++) {
				if (hotspotTemplates['ht_wall_k'][i]._tit_w && hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_position) {
					hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_wall_k_activehotspotchanged = function(){
		if(hotspotTemplates['ht_wall_k']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_wall_k'].length; i++) {
				if (hotspotTemplates['ht_wall_k'][i]._svg_9 && hotspotTemplates['ht_wall_k'][i]._svg_9.logicBlock_visible) {
					hotspotTemplates['ht_wall_k'][i]._svg_9.logicBlock_visible();
				}
				if (hotspotTemplates['ht_wall_k'][i]._svg_8 && hotspotTemplates['ht_wall_k'][i]._svg_8.logicBlock_visible) {
					hotspotTemplates['ht_wall_k'][i]._svg_8.logicBlock_visible();
				}
				if (hotspotTemplates['ht_wall_k'][i]._svg_7 && hotspotTemplates['ht_wall_k'][i]._svg_7.logicBlock_visible) {
					hotspotTemplates['ht_wall_k'][i]._svg_7.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_wall_k_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_wall_k']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_wall_k'].length; i++) {
				if (hotspotTemplates['ht_wall_k'][i]._tit_w && hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_visible) {
					hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_wall_k_varchanged_vis_video_youtube = function(){
		if(hotspotTemplates['ht_wall_k']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_wall_k'].length; i++) {
				if (hotspotTemplates['ht_wall_k'][i]._tit_w && hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_visible) {
					hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_wall_k_varchanged_vis_info_popup_v = function(){
		if(hotspotTemplates['ht_wall_k']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_wall_k'].length; i++) {
				if (hotspotTemplates['ht_wall_k'][i]._tit_w && hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_visible) {
					hotspotTemplates['ht_wall_k'][i]._tit_w.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_changenode = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage0 && hotspotTemplates['ht_info'][i]._ht_info_customimage0.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_configloaded = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_mouseover = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_hastouch = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				if (hotspotTemplates['ht_info'][i]._ht_info_image && hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._tt_information && hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._tt_information.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info'][i]._ht_info_customimage0 && hotspotTemplates['ht_info'][i]._ht_info_customimage0.logicBlock_visible) {
					hotspotTemplates['ht_info'][i]._ht_info_customimage0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_b2b_changenode = function(){
		if(hotspotTemplates['ht_info_b2b']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_b2b'].length; i++) {
				if (hotspotTemplates['ht_info_b2b'][i]._ht_info_image_b2b && hotspotTemplates['ht_info_b2b'][i]._ht_info_image_b2b.logicBlock_visible) {
					hotspotTemplates['ht_info_b2b'][i]._ht_info_image_b2b.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b && hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b.logicBlock_visible) {
					hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_b2b'][i]._ht_info_customimage && hotspotTemplates['ht_info_b2b'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info_b2b'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_b2b_configloaded = function(){
		if(hotspotTemplates['ht_info_b2b']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_b2b'].length; i++) {
				if (hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b && hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b.logicBlock_position) {
					hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_b2b_mouseover = function(){
		if(hotspotTemplates['ht_info_b2b']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_b2b'].length; i++) {
				if (hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b && hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b.logicBlock_visible) {
					hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_b2b_hastouch = function(){
		if(hotspotTemplates['ht_info_b2b']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_b2b'].length; i++) {
				if (hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b && hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b.logicBlock_position) {
					hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_b2b_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_b2b']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_b2b'].length; i++) {
				if (hotspotTemplates['ht_info_b2b'][i]._ht_info_image_b2b && hotspotTemplates['ht_info_b2b'][i]._ht_info_image_b2b.logicBlock_visible) {
					hotspotTemplates['ht_info_b2b'][i]._ht_info_image_b2b.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b && hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b.logicBlock_visible) {
					hotspotTemplates['ht_info_b2b'][i]._tt_information_b2b.logicBlock_visible();
				}
				if (hotspotTemplates['ht_info_b2b'][i]._ht_info_customimage && hotspotTemplates['ht_info_b2b'][i]._ht_info_customimage.logicBlock_visible) {
					hotspotTemplates['ht_info_b2b'][i]._ht_info_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_changenode = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_configloaded = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_mouseover = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_hastouch = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged = function(){
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				if (hotspotTemplates['ht_image'][i]._ht_image_image && hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._tt_ht_image && hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._tt_ht_image.logicBlock_visible();
				}
				if (hotspotTemplates['ht_image'][i]._ht_image_customimage && hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible) {
					hotspotTemplates['ht_image'][i]._ht_image_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_i_sizechanged = function(){
		if(hotspotTemplates['ht_url_i']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_i'].length; i++) {
				if (hotspotTemplates['ht_url_i'][i]._ht_url_i.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._ht_url_i.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_i_changenode = function(){
		if(hotspotTemplates['ht_url_i']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_i'].length; i++) {
				if (hotspotTemplates['ht_url_i'][i]._ht_url_i.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._ht_url_i.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url_i'][i]._ht_url_image_2 && hotspotTemplates['ht_url_i'][i]._ht_url_image_2.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._ht_url_image_2.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url_i'][i]._tt_ht_url_2 && hotspotTemplates['ht_url_i'][i]._tt_ht_url_2.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._tt_ht_url_2.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url_i'][i]._ht_url_customimage_1 && hotspotTemplates['ht_url_i'][i]._ht_url_customimage_1.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._ht_url_customimage_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_i_configloaded = function(){
		if(hotspotTemplates['ht_url_i']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_i'].length; i++) {
				if (hotspotTemplates['ht_url_i'][i]._tt_ht_url_2 && hotspotTemplates['ht_url_i'][i]._tt_ht_url_2.logicBlock_position) {
					hotspotTemplates['ht_url_i'][i]._tt_ht_url_2.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_i_mouseover = function(){
		if(hotspotTemplates['ht_url_i']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_i'].length; i++) {
				if (hotspotTemplates['ht_url_i'][i]._tt_ht_url_2 && hotspotTemplates['ht_url_i'][i]._tt_ht_url_2.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._tt_ht_url_2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_i_hastouch = function(){
		if(hotspotTemplates['ht_url_i']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_i'].length; i++) {
				if (hotspotTemplates['ht_url_i'][i]._tt_ht_url_2 && hotspotTemplates['ht_url_i'][i]._tt_ht_url_2.logicBlock_position) {
					hotspotTemplates['ht_url_i'][i]._tt_ht_url_2.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_i_activehotspotchanged = function(){
		if(hotspotTemplates['ht_url_i']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_i'].length; i++) {
				if (hotspotTemplates['ht_url_i'][i]._ht_url_image_2 && hotspotTemplates['ht_url_i'][i]._ht_url_image_2.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._ht_url_image_2.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url_i'][i]._tt_ht_url_2 && hotspotTemplates['ht_url_i'][i]._tt_ht_url_2.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._tt_ht_url_2.logicBlock_visible();
				}
				if (hotspotTemplates['ht_url_i'][i]._ht_url_customimage_1 && hotspotTemplates['ht_url_i'][i]._ht_url_customimage_1.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._ht_url_customimage_1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_i_varchanged_vis_info_popup = function(){
		if(hotspotTemplates['ht_url_i']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_i'].length; i++) {
				if (hotspotTemplates['ht_url_i'][i]._ht_url_i.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._ht_url_i.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_i_varchanged_vis_image_popup = function(){
		if(hotspotTemplates['ht_url_i']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_i'].length; i++) {
				if (hotspotTemplates['ht_url_i'][i]._ht_url_i.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._ht_url_i.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_url_i_varchanged_vis_website = function(){
		if(hotspotTemplates['ht_url_i']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_i'].length; i++) {
				if (hotspotTemplates['ht_url_i'][i]._ht_url_i.logicBlock_visible) {
					hotspotTemplates['ht_url_i'][i]._ht_url_i.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style[domTransform]=hs;
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('ht_ani2', true);
			} else {
				player.setVariableValue('ht_ani2', false);
			}
		}
		if (me.elementMouseOver['mousefollower']) {
			me._tooltip.style[domTransition]='none';
			me._tooltip.style.opacity='1';
			me._tooltip.style.visibility=me._tooltip.ggVisible?'inherit':'hidden';
		}
		var hs='';
		if (me._tooltip.ggParameter) {
			hs+=parameterToTransform(me._tooltip.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + 0) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 0) + 'px) ';
		me._tooltip.style[domTransform]=hs;
		if (me.elementMouseOver['coffee_info_vertuo_info_mouse_over']) {
			me._tooltip_1.style[domTransition]='none';
			me._tooltip_1.style.opacity='1';
			me._tooltip_1.style.visibility=me._tooltip_1.ggVisible?'inherit':'hidden';
		}
		var hs='';
		if (me._tooltip_1.ggParameter) {
			hs+=parameterToTransform(me._tooltip_1.ggParameter) + ' ';
		}
		hs+='translate(' + (1 * player.mouse.x + 0) + 'px,0px) ';
		hs+='translate(0px,' + (1 * player.mouse.y + 0) + 'px) ';
		me._tooltip_1.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_info_n(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_n=document.createElement('div');
		el.ggId="ht_info_n";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_n.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_n.onclick=function (e) {
			skin._info_title_n.ggText=me.hotspot.title;
			skin._info_title_n.ggTextDiv.innerHTML=skin._info_title_n.ggText;
			if (skin._info_title_n.ggUpdateText) {
				skin._info_title_n.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title_n.ggUpdatePosition) {
				skin._info_title_n.ggUpdatePosition();
			}
			skin._info_title_n.ggTextDiv.scrollTop = 0;
			skin._info_text_body_n.ggText=me.hotspot.description;
			skin._info_text_body_n.ggTextDiv.innerHTML=skin._info_text_body_n.ggText;
			if (skin._info_text_body_n.ggUpdateText) {
				skin._info_text_body_n.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body_n.ggUpdatePosition) {
				skin._info_text_body_n.ggUpdatePosition();
			}
			skin._info_text_body_n.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup_n', true);
			skin._info_text_body_ns.ggText=me.hotspot.description;
			skin._info_text_body_ns.ggTextDiv.innerHTML=skin._info_text_body_ns.ggText;
			if (skin._info_text_body_ns.ggUpdateText) {
				skin._info_text_body_ns.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body_ns.ggUpdatePosition) {
				skin._info_text_body_ns.ggUpdatePosition();
			}
			skin._info_text_body_ns.ggTextDiv.scrollTop = 0;
			skin._info_title_ns.ggText=me.hotspot.title;
			skin._info_title_ns.ggTextDiv.innerHTML=skin._info_title_ns.ggText;
			if (skin._info_title_ns.ggUpdateText) {
				skin._info_title_ns.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title_ns.ggUpdatePosition) {
				skin._info_title_ns.ggUpdatePosition();
			}
			skin._info_title_ns.ggTextDiv.scrollTop = 0;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_n.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_n.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info_n']=true;
			me._tt_information1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_n.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info_n']=false;
			me._tt_information1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_n.ontouchend=function (e) {
			me.elementMouseOver['ht_info_n']=false;
			me._tt_information1.logicBlock_visible();
		}
		me._ht_info_n.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image1=document.createElement('div');
		els=me._ht_info_image1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNj'+
			'LTAuOCwwLTEuNS0wLjctMS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS'+
			'41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0'+
			'MzQuMWgtMTcuN2MtMC45LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image1.style[domTransition]='';
				if (me._ht_info_image1.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image1.style.visibility="hidden";
					me._ht_info_image1.ggVisible=false;
				}
				else {
					me._ht_info_image1.style.visibility=(Number(me._ht_info_image1.style.opacity)>0||!me._ht_info_image1.style.opacity)?'inherit':'hidden';
					me._ht_info_image1.ggVisible=true;
				}
			}
		}
		me._ht_info_image1.onmouseover=function (e) {
			me._ht_info_image1__img.style.visibility='hidden';
			me._ht_info_image1__imgo.style.visibility='inherit';
		}
		me._ht_info_image1.onmouseout=function (e) {
			me._ht_info_image1__img.style.visibility='inherit';
			me._ht_info_image1__imgo.style.visibility='hidden';
		}
		me._ht_info_image1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info_n.appendChild(me._ht_info_image1);
		el=me._tt_information1=document.createElement('div');
		els=me._tt_information1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information1.style[domTransition]='left 0s, top 0s';
				if (me._tt_information1.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information1.style.top='-47px';
					me._tt_information1.ggUpdatePosition(true);
				}
				else {
					me._tt_information1.ggDx=0;
					me._tt_information1.style.top='24px';
					me._tt_information1.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_n'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information1.style[domTransition]='left 0s, top 0s';
				if (me._tt_information1.ggCurrentLogicStateVisible == 0) {
					me._tt_information1.style.visibility=(Number(me._tt_information1.style.opacity)>0||!me._tt_information1.style.opacity)?'inherit':'hidden';
					me._tt_information1.ggVisible=true;
				}
				else {
					me._tt_information1.style.visibility="hidden";
					me._tt_information1.ggVisible=false;
				}
			}
		}
		me._tt_information1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info_n.appendChild(me._tt_information1);
		el=me._ht_info_customimage2=document.createElement('div');
		els=me._ht_info_customimage2__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage2.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage2.style[domTransition]='';
				if (me._ht_info_customimage2.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage2.style.visibility="hidden";
					me._ht_info_customimage2__img.src = '';
					me._ht_info_customimage2.ggVisible=false;
				}
				else {
					me._ht_info_customimage2.style.visibility=(Number(me._ht_info_customimage2.style.opacity)>0||!me._ht_info_customimage2.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage2.ggSubElement.src=me._ht_info_customimage2.ggText;
					me._ht_info_customimage2.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage2.clientWidth;
			var parentHeight = me._ht_info_customimage2.clientHeight;
			var img = me._ht_info_customimage2__img;
			var aspectRatioDiv = me._ht_info_customimage2.clientWidth / me._ht_info_customimage2.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info_n.appendChild(me._ht_info_customimage2);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info_n;
	};
	function SkinHotspotClass_ht_info_v(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_v=document.createElement('div');
		el.ggId="ht_info_v";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_v.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_v.onclick=function (e) {
			skin._info_title_v.ggText=me.hotspot.title;
			skin._info_title_v.ggTextDiv.innerHTML=skin._info_title_v.ggText;
			if (skin._info_title_v.ggUpdateText) {
				skin._info_title_v.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title_v.ggUpdatePosition) {
				skin._info_title_v.ggUpdatePosition();
			}
			skin._info_title_v.ggTextDiv.scrollTop = 0;
			skin._info_text_body_v.ggText=me.hotspot.description;
			skin._info_text_body_v.ggTextDiv.innerHTML=skin._info_text_body_v.ggText;
			if (skin._info_text_body_v.ggUpdateText) {
				skin._info_text_body_v.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body_v.ggUpdatePosition) {
				skin._info_text_body_v.ggUpdatePosition();
			}
			skin._info_text_body_v.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup_v', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_v.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_v.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info_v']=true;
			me._tt_information0.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_v.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info_v']=false;
			me._tt_information0.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_v.ontouchend=function (e) {
			me.elementMouseOver['ht_info_v']=false;
			me._tt_information0.logicBlock_visible();
		}
		me._ht_info_v.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image0=document.createElement('div');
		els=me._ht_info_image0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNj'+
			'LTAuOCwwLTEuNS0wLjctMS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS'+
			'41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0'+
			'MzQuMWgtMTcuN2MtMC45LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image0.style[domTransition]='';
				if (me._ht_info_image0.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image0.style.visibility="hidden";
					me._ht_info_image0.ggVisible=false;
				}
				else {
					me._ht_info_image0.style.visibility=(Number(me._ht_info_image0.style.opacity)>0||!me._ht_info_image0.style.opacity)?'inherit':'hidden';
					me._ht_info_image0.ggVisible=true;
				}
			}
		}
		me._ht_info_image0.onmouseover=function (e) {
			me._ht_info_image0__img.style.visibility='hidden';
			me._ht_info_image0__imgo.style.visibility='inherit';
		}
		me._ht_info_image0.onmouseout=function (e) {
			me._ht_info_image0__img.style.visibility='inherit';
			me._ht_info_image0__imgo.style.visibility='hidden';
		}
		me._ht_info_image0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info_v.appendChild(me._ht_info_image0);
		el=me._tt_information0=document.createElement('div');
		els=me._tt_information0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information0.style[domTransition]='left 0s, top 0s';
				if (me._tt_information0.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information0.style.top='-47px';
					me._tt_information0.ggUpdatePosition(true);
				}
				else {
					me._tt_information0.ggDx=0;
					me._tt_information0.style.top='24px';
					me._tt_information0.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_v'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information0.style[domTransition]='left 0s, top 0s';
				if (me._tt_information0.ggCurrentLogicStateVisible == 0) {
					me._tt_information0.style.visibility=(Number(me._tt_information0.style.opacity)>0||!me._tt_information0.style.opacity)?'inherit':'hidden';
					me._tt_information0.ggVisible=true;
				}
				else {
					me._tt_information0.style.visibility="hidden";
					me._tt_information0.ggVisible=false;
				}
			}
		}
		me._tt_information0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info_v.appendChild(me._tt_information0);
		el=me._ht_info_customimage1=document.createElement('div');
		els=me._ht_info_customimage1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage1.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage1.style[domTransition]='';
				if (me._ht_info_customimage1.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage1.style.visibility="hidden";
					me._ht_info_customimage1__img.src = '';
					me._ht_info_customimage1.ggVisible=false;
				}
				else {
					me._ht_info_customimage1.style.visibility=(Number(me._ht_info_customimage1.style.opacity)>0||!me._ht_info_customimage1.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage1.ggSubElement.src=me._ht_info_customimage1.ggText;
					me._ht_info_customimage1.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage1.clientWidth;
			var parentHeight = me._ht_info_customimage1.clientHeight;
			var img = me._ht_info_customimage1__img;
			var aspectRatioDiv = me._ht_info_customimage1.clientWidth / me._ht_info_customimage1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info_v.appendChild(me._ht_info_customimage1);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info_v;
	};
	function SkinHotspotClass_ht_controll(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_controll=document.createElement('div');
		el.ggId="ht_controll";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_controll.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_controll.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_controll.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_controll.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_controll.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_controll.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_controllc=document.createElement('div');
		el.ggId="ht_controllc";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 64px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_controllc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_controllc.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ff8811;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0%;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.onclick=function (e) {
				player.playSound("Karafe","0");
			player.setMediaVisibility("Cup","0",0);
			player.setMediaVisibility("Karafe","1",0);
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._ht_controllc.appendChild(me._rectangle_1);
		el=me._rectangle_1_1=document.createElement('div');
		el.ggId="Rectangle 1_1";
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #0062ff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 0%;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1_1.onclick=function (e) {
			player.setMediaVisibility("Karafe","0",0);
			player.setMediaVisibility("Cup","1",0);
				player.playSound("Cup","1");
		}
		me._rectangle_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me._ht_controllc.appendChild(me._rectangle_1_1);
		me._ht_controll.appendChild(me._ht_controllc);
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._ht_controll;
	};
	function SkinHotspotClass_ht_node_enter_recycle(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_enter_recycle=document.createElement('div');
		el.ggId="ht_node_enter_recycle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_enter_recycle.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_enter_recycle.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_enter_recycle.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_enter_recycle.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin._tt_ht_node.style[domTransition]='none';
			skin._tt_ht_node.style.visibility=(Number(skin._tt_ht_node.style.opacity)>0||!skin._tt_ht_node.style.opacity)?'inherit':'hidden';
			skin._tt_ht_node.ggVisible=true;
			me.elementMouseOver['ht_node_enter_recycle']=true;
			me._tt_ht_node_1_2.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_enter_recycle.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin._tt_ht_node.style[domTransition]='none';
			skin._tt_ht_node.style.visibility='hidden';
			skin._tt_ht_node.ggVisible=false;
			me.elementMouseOver['ht_node_enter_recycle']=false;
			me._tt_ht_node_1_2.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_enter_recycle.ontouchend=function (e) {
			me.elementMouseOver['ht_node_enter_recycle']=false;
			me._tt_ht_node_1_2.logicBlock_visible();
		}
		me._ht_node_enter_recycle.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_ht_node_1_2=document.createElement('div');
		els=me._tt_ht_node_1_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node_1_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node_1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node_1_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_enter_recycle'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node_1_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node_1_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node_1_2.style[domTransition]='';
				if (me._tt_ht_node_1_2.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node_1_2.style.visibility=(Number(me._tt_ht_node_1_2.style.opacity)>0||!me._tt_ht_node_1_2.style.opacity)?'inherit':'hidden';
					me._tt_ht_node_1_2.ggVisible=true;
				}
				else {
					me._tt_ht_node_1_2.style.visibility="hidden";
					me._tt_ht_node_1_2.ggVisible=false;
				}
			}
		}
		me._tt_ht_node_1_2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node_enter_recycle.appendChild(me._tt_ht_node_1_2);
		el=me._ht_node_image_1_2=document.createElement('div');
		els=me._ht_node_image_1_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4MCA4MDsiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxjaXJjbGUgY3k9IjQ4IiBjbGFzcz0ic3QwIiBjeD0iMzMuNiIgcj0iMjkuNiIvPgogPGcgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGQ9Ik00NC43LDQyLjVsNC42LDguMmMyLjcsNS0xLjEsMTEuNS02LjcsMTEuN2MtMC4xLDAtNi44LDAtNi44LDB2Mi45bC00LjktNi41bDQuOS02LjlWNTVjMi4yLDAsNC4zLDAsNi42LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNy0wLjQsMC40LTAuOGMt'+
			'MS40LTIuNy0yLjktNS41LTQuNS04LjFsNC42LDAuM0w0NC43LDQyLjVMNDQuNyw0Mi41eiBNMjcuMSw1MS4yTDI0LjgsNTBjLTAuOCwxLjQtMS42LDIuOS0yLjMsNC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjMsMC4xLDAuOCwwLjQsMC44YzIuNSwwLDUuMSwwLjEsNy42LDAuMWwtMi42LDMuN2wyLjgsMy42aC03LjhjLTUuOS0wLjEtOS42LTYuNS02LjktMTEuNWMwLTAuMSwyLjUtNC4yLDIuNS00LjJMMTYsNDUuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7bDguNS0xLjRMMjcuMSw1MS4yTDI3LjEsNTEuMnogTTIwLjksNDIuMmw0LjktOC43YzAuNC0wLjgsMC43LTEsMS4xLTEuNGMxLjYtMS'+
			'43LDMuOC0yLjYsNi0yLjVjMS4xLDAuMSwxLjQsMC4yLDIsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS44LDAuNiwzLjMsMS43LDQuMiwzLjJjMC4xLDAuMiwyLjgsNC44LDIuOCw0LjhsMi43LTEuNmwtMS4zLDMuM2wtMiw0LjVsLTguNS0wLjdsMi45LTEuN2MtMC45LTEuNi0xLjgtMy0yLjctNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMS0wLjItMC4yLTAuMi0wLjYtMC4yYy0wLjIsMC0wLjMsMC4xLTAuNCwwLjJjLTEuNiwyLjgtMy4yLDUuNi00LjgsOC40bC0xLjYtNC4xQzI1LjksNDEuMywyMC45LDQyLjIsMjAuOSw0Mi4yeiBNMTUuOCw0NS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtMMTUu'+
			'OCw0NS4zTDE1LjgsNDUuM0wxNS44LDQ1LjN6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPHBhdGggZD0iTTc4LjIsMC4zaC0xOWMtMSwwLTEuOCwwLjgtMS44LDEuOHY0LjFMNDksMS4zYy0wLjUtMC4zLTEuMy0wLjMtMS44LDBjLTAuNiwwLjMtMC45LDAuOS0wLjksMS42djExLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNiwwLjMsMS4yLDAuOSwxLjZjMC41LDAuMywxLjMsMC4zLDEuOCwwbDguNC00Ljl2NC44YzAsMSwwLjgsMS44LDEuOCwxLjhoMTljMSwwLDEuOC0wLjgsMS44LTEuOFYyLjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M4MCwxLjEsNzkuMiwwLjMsNzguMiwwLjN6Ii'+
			'8+CiAgPHBhdGggZD0iTTMzLDE3LjFjLTguMywwLTE2LDMuMi0yMS45LDljLTIuNSwyLjUtNC41LDUuNC02LDguNWwtMi42LTNjLTAuMi0wLjMtMC42LTAuNC0xLTAuM2MtMC4zLDAuMi0wLjUsMC42LTAuNSwxbDAuNywxNi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjQsMC4yLDAuNywwLjYsMC44YzAuMywwLjEsMC43LDAuMSwxLTAuMkwxNCwzN2MwLjMtMC4zLDAuMy0wLjcsMC4xLTFzLTAuNS0wLjUtMC44LTAuNWMwLDAtMC4xLDAtMC4yLDBsLTMuNSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjItMi40LDIuOC00LjYsNC44LTYuNmM0LjktNC45LDExLjUtNy42LDE4LjUtNy42czEzLjYs'+
			'Mi43LDE4LjUsNy42UzU5LDQxLDU5LDQ4cy0yLjcsMTMuNi03LjYsMTguNWMtNC44LDUtMTEuNCw3LjctMTguNCw3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMTMuNi0yLjctMTguNS03LjZjLTIuMi0yLjItMy45LTQuNy01LjItNy41YzAsMC0xLTIuNS0xLjEtMi45bDAsMEM4LDU1LjYsNy41LDU1LjEsNyw1NC44Yy0wLjYtMC4zLTEuMi0wLjMtMS44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0xLjEsMC42LTEuNCwxLjJjLTAuMywwLjYtMC4zLDEuMi0wLjEsMS44QzMuOCw1OCwzLjksNTguMyw0LDU4LjVsMCwwYzEuNSw0LjIsNCw4LjEsNy4yLDExLjNjNS44LDUuOCwxMy42LDksMjEuOSw5bD'+
			'AsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzguMywwLDE2LTMuMiwyMS45LTljMTItMTEuOSwxMi0zMS42LTAuMS00My42QzQ5LjEsMjAuMyw0MS4zLDE3LjEsMzMsMTcuMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_image_1_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_1_2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image_1_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_1_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_enter_recycle.appendChild(me._ht_node_image_1_2);
		me.__div = me._ht_node_enter_recycle;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.onclick=function (e) {
				player.stopSound("_background");
			skin._popup_video_file.ggInitMedia(player.getBasePath()+""+me.hotspot.url);
			player.setVariableValue('vis_video_file', true);
			if (skin._popup_video_file.ggApiPlayer) {
				if (skin._popup_video_file.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						skin._popup_video_file.ggApiPlayer.playVideo();
					};
					if (skin._popup_video_file.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (skin._popup_video_file.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (skin._popup_video_file.ggApiPlayerType == 'vimeo') {
					skin._popup_video_file.ggApiPlayer.play();
				}
			} else {
				player.playSound("popup_video_file","1");
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_file']=true;
			me._tt_ht_video_file.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ontouchend=function (e) {
			me.elementMouseOver['ht_video_file']=false;
			me._tt_ht_video_file.logicBlock_visible();
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_video_file=document.createElement('div');
		els=me._ht_video_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIi'+
			'B4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiPgogPHN0eWxlIHR5cGU9InRleHQvY3Nz'+
			'Ij4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGN5PSIzMS43IiBjeD0iMzIiIHI9IjMxIi8+CiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC05NTIuMzYyMTgpIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUuMyw5NzEuM2MtMS42LDAtMywxLjMtMywzLjF2MTkuOGMwLjEsMi40LDIuNSwzLjksNC42LDIuOGwxNy4yLTEwYzAuOS0wLjUsMS42LTEuNSwxLjYtMi43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjItMC42LTIuMi0xLjYtMi43bC0xNy4yLTEwQzI2LjQsOTcxLjQsMjUuOCw5NzEuMywyNS4zLDk3MS4zTDI1LjMsOTcxLjN6Ii8+CiA8L2'+
			'c+Cjwvc3ZnPgo=';
		me._ht_video_video_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_video_file";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_video_file.style[domTransition]='';
				if (me._ht_video_video_file.ggCurrentLogicStateVisible == 0) {
					me._ht_video_video_file.style.visibility="hidden";
					me._ht_video_video_file.ggVisible=false;
				}
				else {
					me._ht_video_video_file.style.visibility=(Number(me._ht_video_video_file.style.opacity)>0||!me._ht_video_video_file.style.opacity)?'inherit':'hidden';
					me._ht_video_video_file.ggVisible=true;
				}
			}
		}
		me._ht_video_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_video_file.appendChild(me._ht_video_video_file);
		el=me._tt_ht_video_file=document.createElement('div');
		els=me._tt_ht_video_file__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_file";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_file.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_file.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_file.style.top='-47px';
					me._tt_ht_video_file.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_file.ggDx=0;
					me._tt_ht_video_file.style.top='24px';
					me._tt_ht_video_file.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_file.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_file'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_file.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_file.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_file.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_file.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_file.style.visibility=(Number(me._tt_ht_video_file.style.opacity)>0||!me._tt_ht_video_file.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_file.ggVisible=true;
				}
				else {
					me._tt_ht_video_file.style.visibility="hidden";
					me._tt_ht_video_file.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_file.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_file.appendChild(me._tt_ht_video_file);
		el=me._ht_video_file_customimage=document.createElement('div');
		els=me._ht_video_file_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_video_file_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_file_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_file_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_file_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_file_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_file_customimage.style[domTransition]='';
				if (me._ht_video_file_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_video_file_customimage.style.visibility="hidden";
					me._ht_video_file_customimage__img.src = '';
					me._ht_video_file_customimage.ggVisible=false;
				}
				else {
					me._ht_video_file_customimage.style.visibility=(Number(me._ht_video_file_customimage.style.opacity)>0||!me._ht_video_file_customimage.style.opacity)?'inherit':'hidden';
					me._ht_video_file_customimage.ggSubElement.src=me._ht_video_file_customimage.ggText;
					me._ht_video_file_customimage.ggVisible=true;
				}
			}
		}
		me._ht_video_file_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_video_file_customimage.clientWidth;
			var parentHeight = me._ht_video_file_customimage.clientHeight;
			var img = me._ht_video_file_customimage__img;
			var aspectRatioDiv = me._ht_video_file_customimage.clientWidth / me._ht_video_file_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_video_file.appendChild(me._ht_video_file_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_video_file;
	};
	function SkinHotspotClass_ht_3d(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_3d=document.createElement('div');
		el.ggId="ht_3d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 94px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_3d.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_3d.onclick=function (e) {
			player.setVariableValue('vis_momento_3d', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_3d.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_3d.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_3d']=true;
			me._tt_3dt.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_3d.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_3d']=false;
			me._tt_3dt.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_3d.ontouchend=function (e) {
			me.elementMouseOver['ht_3d']=false;
			me._tt_3dt.logicBlock_visible();
		}
		me._ht_3d.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image_3d=document.createElement('div');
		els=me._ht_info_image_3d__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NC43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0Ljc7IiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGN5PSIzMiIgY3g9IjMyIiByPSIzMSIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQxLjksMzFjMC0wLjIsMC0wLjMsMC0wLjV2LTAuM3YtMC4zdi0wLjFMMzkuOCwzMGwwLDBjMCwwLjEsMCwwLjMsMCwwLjN2MS4ybDAsMGwwLDB2MC4xbDAsMGwwLDB2MC4xbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7djAuMWwwLDB2MC4xbDAsMFYzMmwwLDB2MC4xbDAsMHYwLjFsMCwwVjMyYzAsMS42LTAuMSwzLjItMC4zLDQuOGMwLjgtMC4yLDEuNS0w'+
			'LjQsMi4yLTAuOGMwLjItMS4zLDAuMy0yLjcsMC4zLTQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC4yLDAtMC40LDAtMC42TDQxLjksMzFMNDEuOSwzMXogTTIwLjgsMzkuOWwtNS44LTEuN2wxLjEtMS4yYy0xLjQtMS4zLTIuNC0zLjEtMi40LTUuMWMwLTEuNiwwLjYtMi45LDEuNi00JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS40LTEuNywzLjQtMyw1LjctMy44Yy0wLjIsMC44LTAuMywxLjctMC41LDIuNGMtMSwwLjUtMS44LDEtMi42LDEuN2MtMSwwLjktMS43LDEuOS0xLjksMy4xYy0wLjEsMC45LDAuMSwxLjcsMC40LDIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLjYsMC44LDEuMiwxLj'+
			'MsMS43bDEuMS0xLjJMMjAuOCwzOS45TDIwLjgsMzkuOXogTTI4LDIyLjNjMS40LTAuMiwyLjgtMC4zLDQtMC4zYzMsMCw2LDAuMyw4LjksMS4yYzMuOSwxLjEsOS4zLDMuOSw5LjQsOC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwxLjYtMC42LDIuOS0xLjYsNGMtMy43LDQuNC0xMS4zLDUuOS0xNi43LDUuOWMtMS41LDAtMy4xLTAuMS00LjUtMC4zbDAuMy0yYzEuNCwwLjIsMi45LDAuMyw0LjMsMC4zYzQuNSwwLDEwLjYtMSwxNC4yLTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEtMSwyLTIuMiwyLTMuN2MwLTIuNC0yLjQtNC4zLTQuNC01LjNjLTMuNS0xLjgtNy45LTIuNS0xMS45LTIuNWMtMS41'+
			'LDAtMy4xLDAuMS00LjgsMC4zQzI3LjQsMjMuOCwyNy42LDIzLDI4LDIyLjNMMjgsMjIuM3omI3hkOyYjeGE7JiN4OTsmI3g5OyBNMzcuNCw0My41YzAuOC0wLjEsMS43LTAuMywyLjQtMC40Yy0xLjQsMy41LTQsNy4yLTcuOSw3LjJjLTEuNiwwLTIuOS0wLjYtNC0xLjZjLTQuNC0zLjYtNS44LTExLjMtNS44LTE2LjdjMC0zLDAuMy02LDEuMi04LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEtMy45LDMuOS05LjMsOC43LTkuNGMyLjQsMCw0LjQsMS42LDUuOCwzLjRsMS4zLTFsMSw1LjhsLTUuMy0yLjdsMS4zLTFjLTEtMS4zLTIuNC0yLjYtNC4yLTIuNmMtMi40LDAtNC4zLDIuNC01LjMsNC40Ji'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuOCwzLjUtMi41LDcuOS0yLjUsMTEuOWMwLDQuNSwxLDEwLjYsNC4yLDE0LjJjMSwxLDIuMiwyLDMuNywyYzIuNCwwLDQuMy0yLjQsNS4zLTQuNEwzNy40LDQzLjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image_3d__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_image_3d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image_3d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image_3d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image_3d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image_3d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image_3d.style[domTransition]='';
				if (me._ht_info_image_3d.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image_3d.style.visibility="hidden";
					me._ht_info_image_3d.ggVisible=false;
				}
				else {
					me._ht_info_image_3d.style.visibility=(Number(me._ht_info_image_3d.style.opacity)>0||!me._ht_info_image_3d.style.opacity)?'inherit':'hidden';
					me._ht_info_image_3d.ggVisible=true;
				}
			}
		}
		me._ht_info_image_3d.ggUpdatePosition=function (useTransition) {
		}
		me._ht_3d.appendChild(me._ht_info_image_3d);
		el=me._tt_3dt=document.createElement('div');
		els=me._tt_3dt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_3dt";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_3dt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_3dt.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_3dt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_3dt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_3dt.style[domTransition]='left 0s, top 0s';
				if (me._tt_3dt.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_3dt.style.top='-47px';
					me._tt_3dt.ggUpdatePosition(true);
				}
				else {
					me._tt_3dt.ggDx=0;
					me._tt_3dt.style.top='24px';
					me._tt_3dt.ggUpdatePosition(true);
				}
			}
		}
		me._tt_3dt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_3d'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_3dt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_3dt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_3dt.style[domTransition]='left 0s, top 0s';
				if (me._tt_3dt.ggCurrentLogicStateVisible == 0) {
					me._tt_3dt.style.visibility=(Number(me._tt_3dt.style.opacity)>0||!me._tt_3dt.style.opacity)?'inherit':'hidden';
					me._tt_3dt.ggVisible=true;
				}
				else {
					me._tt_3dt.style.visibility="hidden";
					me._tt_3dt.ggVisible=false;
				}
			}
		}
		me._tt_3dt.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_3d.appendChild(me._tt_3dt);
		me.__div = me._ht_3d;
	};
	function SkinHotspotClass_ht_3d2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_3d2=document.createElement('div');
		el.ggId="ht_3d2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 94px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_3d2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_3d2.onclick=function (e) {
			player.setVariableValue('vis_vertuo_3d', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_3d2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_3d2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_3d2']=true;
			me._tt_3dt_2.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_3d2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_3d2']=false;
			me._tt_3dt_2.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_3d2.ontouchend=function (e) {
			me.elementMouseOver['ht_3d2']=false;
			me._tt_3dt_2.logicBlock_visible();
		}
		me._ht_3d2.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image_3d2=document.createElement('div');
		els=me._ht_info_image_3d2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NC43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0Ljc7IiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGN5PSIzMiIgY3g9IjMyIiByPSIzMSIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQxLjksMzFjMC0wLjIsMC0wLjMsMC0wLjV2LTAuM3YtMC4zdi0wLjFMMzkuOCwzMGwwLDBjMCwwLjEsMCwwLjMsMCwwLjN2MS4ybDAsMGwwLDB2MC4xbDAsMGwwLDB2MC4xbDAsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7djAuMWwwLDB2MC4xbDAsMFYzMmwwLDB2MC4xbDAsMHYwLjFsMCwwVjMyYzAsMS42LTAuMSwzLjItMC4zLDQuOGMwLjgtMC4yLDEuNS0w'+
			'LjQsMi4yLTAuOGMwLjItMS4zLDAuMy0yLjcsMC4zLTQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC4yLDAtMC40LDAtMC42TDQxLjksMzFMNDEuOSwzMXogTTIwLjgsMzkuOWwtNS44LTEuN2wxLjEtMS4yYy0xLjQtMS4zLTIuNC0zLjEtMi40LTUuMWMwLTEuNiwwLjYtMi45LDEuNi00JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS40LTEuNywzLjQtMyw1LjctMy44Yy0wLjIsMC44LTAuMywxLjctMC41LDIuNGMtMSwwLjUtMS44LDEtMi42LDEuN2MtMSwwLjktMS43LDEuOS0xLjksMy4xYy0wLjEsMC45LDAuMSwxLjcsMC40LDIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLjYsMC44LDEuMiwxLj'+
			'MsMS43bDEuMS0xLjJMMjAuOCwzOS45TDIwLjgsMzkuOXogTTI4LDIyLjNjMS40LTAuMiwyLjgtMC4zLDQtMC4zYzMsMCw2LDAuMyw4LjksMS4yYzMuOSwxLjEsOS4zLDMuOSw5LjQsOC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwxLjYtMC42LDIuOS0xLjYsNGMtMy43LDQuNC0xMS4zLDUuOS0xNi43LDUuOWMtMS41LDAtMy4xLTAuMS00LjUtMC4zbDAuMy0yYzEuNCwwLjIsMi45LDAuMyw0LjMsMC4zYzQuNSwwLDEwLjYtMSwxNC4yLTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEtMSwyLTIuMiwyLTMuN2MwLTIuNC0yLjQtNC4zLTQuNC01LjNjLTMuNS0xLjgtNy45LTIuNS0xMS45LTIuNWMtMS41'+
			'LDAtMy4xLDAuMS00LjgsMC4zQzI3LjQsMjMuOCwyNy42LDIzLDI4LDIyLjNMMjgsMjIuM3omI3hkOyYjeGE7JiN4OTsmI3g5OyBNMzcuNCw0My41YzAuOC0wLjEsMS43LTAuMywyLjQtMC40Yy0xLjQsMy41LTQsNy4yLTcuOSw3LjJjLTEuNiwwLTIuOS0wLjYtNC0xLjZjLTQuNC0zLjYtNS44LTExLjMtNS44LTE2LjdjMC0zLDAuMy02LDEuMi04LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEtMy45LDMuOS05LjMsOC43LTkuNGMyLjQsMCw0LjQsMS42LDUuOCwzLjRsMS4zLTFsMSw1LjhsLTUuMy0yLjdsMS4zLTFjLTEtMS4zLTIuNC0yLjYtNC4yLTIuNmMtMi40LDAtNC4zLDIuNC01LjMsNC40Ji'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuOCwzLjUtMi41LDcuOS0yLjUsMTEuOWMwLDQuNSwxLDEwLjYsNC4yLDE0LjJjMSwxLDIuMiwyLDMuNywyYzIuNCwwLDQuMy0yLjQsNS4zLTQuNEwzNy40LDQzLjV6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image_3d2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_image_3d2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image_3d2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image_3d2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image_3d2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image_3d2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image_3d2.style[domTransition]='';
				if (me._ht_info_image_3d2.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image_3d2.style.visibility="hidden";
					me._ht_info_image_3d2.ggVisible=false;
				}
				else {
					me._ht_info_image_3d2.style.visibility=(Number(me._ht_info_image_3d2.style.opacity)>0||!me._ht_info_image_3d2.style.opacity)?'inherit':'hidden';
					me._ht_info_image_3d2.ggVisible=true;
				}
			}
		}
		me._ht_info_image_3d2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_3d2.appendChild(me._ht_info_image_3d2);
		el=me._tt_3dt_2=document.createElement('div');
		els=me._tt_3dt_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_3dt_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_3dt_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_3dt_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_3dt_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_3dt_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_3dt_2.style[domTransition]='left 0s, top 0s';
				if (me._tt_3dt_2.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_3dt_2.style.top='-47px';
					me._tt_3dt_2.ggUpdatePosition(true);
				}
				else {
					me._tt_3dt_2.ggDx=0;
					me._tt_3dt_2.style.top='24px';
					me._tt_3dt_2.ggUpdatePosition(true);
				}
			}
		}
		me._tt_3dt_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_3d2'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_3dt_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_3dt_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_3dt_2.style[domTransition]='left 0s, top 0s';
				if (me._tt_3dt_2.ggCurrentLogicStateVisible == 0) {
					me._tt_3dt_2.style.visibility=(Number(me._tt_3dt_2.style.opacity)>0||!me._tt_3dt_2.style.opacity)?'inherit':'hidden';
					me._tt_3dt_2.ggVisible=true;
				}
				else {
					me._tt_3dt_2.style.visibility="hidden";
					me._tt_3dt_2.ggVisible=false;
				}
			}
		}
		me._tt_3dt_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_3d2.appendChild(me._tt_3dt_2);
		me.__div = me._ht_3d2;
	};
	function SkinHotspotClass_ht_url(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url=document.createElement('div');
		el.ggId="ht_url";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url.style[domTransition]='';
				if (me._ht_url.ggCurrentLogicStateVisible == 0) {
					me._ht_url.style.visibility="hidden";
					me._ht_url.ggVisible=false;
				}
				else {
					me._ht_url.style.visibility=(Number(me._ht_url.style.opacity)>0||!me._ht_url.style.opacity)?'inherit':'hidden';
					me._ht_url.ggVisible=true;
				}
			}
		}
		me._ht_url.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
				skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
				if (skin._web_page.ggUpdateText) {
					skin._web_page.ggUpdateText=function() {
						var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (skin._web_page.ggUpdatePosition) {
					skin._web_page.ggUpdatePosition();
				}
				skin._web_page.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url']=true;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url.ontouchend=function (e) {
			me.elementMouseOver['ht_url']=false;
			me._tt_ht_url.logicBlock_visible();
		}
		me._ht_url.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image=document.createElement('div');
		els=me._ht_url_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTkwLjgsNDE0LjNoMTMuN3YtMTVoLTE2LjNDLTE5My4zLDQwNC43LTE5Mi4zLDQwOS44LTE5MC44LDQxNC4zeiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE5My41LDM5NC43aDE2LjN2LTE1aC0xMy43Qy0xOTIuMywzODQuMi0xOTMuMywzODkuMy0xOTMuNSwzOTQuN3oiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xODkuMSwzNzUuMmgxMS45di0xMS45Qy0xODEuOSwzNjQuNC0xODYuMSwzNjguOC0xODkuMSwzNzUuMnoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzcu'+
			'Miw0MzAuN3YtMTEuOWgtMTEuOUMtMTg2LjEsNDI1LjItMTgxLjksNDI5LjYtMTc3LjIsNDMwLjd6Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk1LjYsMzc5LjdoLTguNWMtMi42LDQuNS00LjMsOS42LTQuNiwxNWgxMC44Qy0xOTcuOCwzODkuMy0xOTcsMzg0LjMtMTk1LjYsMzc5Ljd6Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTQ4LjksMzc1LjJjLTMuMy00LTcuNi03LjItMTIuNC05LjNjMi4xLDIuNiwzLjksNS43LDUuNCw5LjNILTE0OC45eiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTIwMC45LDQxOC44YzMuMywzLjksNy40LDcuMSwxMi4xLD'+
			'kuMmMtMi4xLTIuNS0zLjgtNS42LTUuMy05LjJILTIwMC45eiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE4OC44LDM2NmMtNC43LDIuMS04LjksNS4zLTEyLjIsOS4yaDYuOUMtMTkyLjYsMzcxLjctMTkwLjksMzY4LjYtMTg4LjgsMzY2eiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE5OCwzOTkuMmgtMTAuOGMwLjQsNS41LDIsMTAuNiw0LjcsMTVoOC41Qy0xOTcsNDA5LjctMTk3LjgsNDA0LjctMTk4LDM5OS4yeiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3NSwzNDAuOWMtMzEsMC01Ni4xLDI1LjEtNTYuMSw1Ni4xczI1LjEsNTYuMSw1Ni4xLDU2'+
			'LjFzNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOXomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IE0tMTc0LjksNDM1LjRjMCwwLTAuMSwwLTAuMSwwYy0wLjEsMC0wLjIsMC0wLjQsMGMtMjEtMC4yLTM4LTE3LjQtMzgtMzguNGMwLTIxLjIsMTcuMi0zOC40LDM4LjQtMzguNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMjEuMiwwLDM4LjQsMTcuMiwzOC40LDM4LjRDLTEzNi41LDQxOC4yLTE1My43LDQzNS40LTE3NC45LDQzNS40eiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE2MS4zLDQyOC4xYzQuOC0yLjEsOS01LjMsMTIuNC05LjNoLTdDLTE1Ny40LD'+
			'QyMi40LTE1OS4yLDQyNS41LTE2MS4zLDQyOC4xeiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE1NC40LDQxNC4zaDguNmMyLjctNC41LDQuMy05LjYsNC43LTE1aC0xMUMtMTUyLjIsNDA0LjctMTUzLDQwOS43LTE1NC40LDQxNC4zeiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE3Mi43LDM2My4zdjExLjloMTEuN0MtMTYzLjksMzY4LjktMTY4LDM2NC41LTE3Mi43LDM2My4zeiIvPgogICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBkPSJNLTE1MiwzOTQuN2gxMWMtMC40LTUuNS0yLTEwLjYtNC43LTE1aC04LjZDLTE1MywzODQuMy0xNTIuMiwzODkuMy0xNTIsMzk0Ljd6'+
			'Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTcyLjcsNDE4Ljh2MTEuOWM0LjYtMS4xLDguOC01LjUsMTEuNy0xMS45Qy0xNjAuOSw0MTguOC0xNzIuNyw0MTguOC0xNzIuNyw0MTguOHoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNTkuMiwzNzkuN2gtMTMuNXYxNWgxNi4xQy0xNTYuNywzODkuMy0xNTcuNywzODQuMi0xNTkuMiwzNzkuN3oiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNTYuNSwzOTkuMmgtMTYuMXYxNWgxMy41Qy0xNTcuNyw0MDkuOC0xNTYuNyw0MDQuNy0xNTYuNSwzOTkuMnoiLz4KICA8L2c+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMi'+
			'I+CiAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xMzYuNSwzOTdjMC0yMS4yLTE3LjItMzguNC0zOC40LTM4LjRjLTIxLjIsMC0zOC40LDE3LjItMzguNCwzOC40YzAsMjEuMSwxNywzOC4yLDM4LDM4LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEsMCwwLjIsMCwwLjQsMGMwLDAsMC4xLDAsMC4xLDBDLTE1My43LDQzNS40LTEzNi41LDQxOC4yLTEzNi41LDM5N3ogTS0yMDguOCwzOTkuMmgxMC44YzAuMiw1LjQsMSwxMC41LDIuMywxNWgtOC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTIwNi44LDQwOS44LTIwOC40LDQwNC43LTIwOC44LDM5OS4yeiBNLTE0MS4xLDM5NC43aC0xMWMtMC4yLTUu'+
			'NC0xLTEwLjUtMi4zLTE1aDguNkMtMTQzLjEsMzg0LjItMTQxLjQsMzg5LjMtMTQxLjEsMzk0Ljd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTS0xNTYuNSwzOTQuN2gtMTYuMXYtMTVoMTMuNUMtMTU3LjcsMzg0LjItMTU2LjcsMzg5LjMtMTU2LjUsMzk0Ljd6IE0tMTcyLjcsMzc1LjJ2LTExLjljNC42LDEuMSw4LjgsNS41LDExLjcsMTEuOUwtMTcyLjcsMzc1LjImI3hkOyYjeGE7JiN4OTsmI3g5O0wtMTcyLjcsMzc1LjJ6IE0tMTc3LjIsMzYzLjN2MTEuOWgtMTEuOUMtMTg2LjEsMzY4LjgtMTgxLjksMzY0LjQtMTc3LjIsMzYzLjN6IE0tMTc3LjIsMzc5Ljd2MTVoLTE2LjNjMC4yLTUuNCwxLjEtMT'+
			'AuNSwyLjYtMTUmI3hkOyYjeGE7JiN4OTsmI3g5O0wtMTc3LjIsMzc5LjdMLTE3Ny4yLDM3OS43eiBNLTE5OCwzOTQuN2gtMTAuOGMwLjQtNS41LDItMTAuNiw0LjYtMTVoOC41Qy0xOTcsMzg0LjMtMTk3LjgsMzg5LjMtMTk4LDM5NC43eiBNLTE5My41LDM5OS4yaDE2LjMmI3hkOyYjeGE7JiN4OTsmI3g5O3YxNWgtMTMuN0MtMTkyLjMsNDA5LjgtMTkzLjMsNDA0LjctMTkzLjUsMzk5LjJ6IE0tMTc3LjIsNDE4Ljh2MTEuOWMtNC43LTEuMS04LjktNS41LTExLjktMTEuOUgtMTc3LjJ6IE0tMTcyLjcsNDMwLjZ2LTExLjloMTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNjMuOSw0MjUuMS0xNjgs'+
			'NDI5LjUtMTcyLjcsNDMwLjZ6IE0tMTcyLjcsNDE0LjN2LTE1aDE2LjFjLTAuMiw1LjQtMS4xLDEwLjYtMi42LDE1SC0xNzIuN3ogTS0xNTIsMzk5LjJoMTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDUuNS0yLDEwLjYtNC43LDE1aC04LjZDLTE1Myw0MDkuNy0xNTIuMiw0MDQuNy0xNTIsMzk5LjJ6IE0tMTQ4LjksMzc1LjJoLTdjLTEuNS0zLjYtMy4zLTYuOC01LjQtOS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtDLTE1Ni41LDM2OC0xNTIuMiwzNzEuMi0xNDguOSwzNzUuMnogTS0xODguOCwzNjZjLTIuMSwyLjUtMy44LDUuNy01LjMsOS4yaC02LjlDLTE5Ny43LDM3MS4zLTE5My41LDM2OC4xLT'+
			'E4OC44LDM2NnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNLTIwMC45LDQxOC44aDYuOWMxLjQsMy41LDMuMiw2LjYsNS4zLDkuMkMtMTkzLjUsNDI1LjgtMTk3LjYsNDIyLjctMjAwLjksNDE4Ljh6IE0tMTYxLjMsNDI4LjFjMi4xLTIuNiwzLjktNS43LDUuNC05LjNoNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNTIuMyw0MjIuNy0xNTYuNSw0MjUuOS0xNjEuMyw0MjguMXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image.style[domTransition]='';
				if (me._ht_url_image.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image.style.visibility="hidden";
					me._ht_url_image.ggVisible=false;
				}
				else {
					me._ht_url_image.style.visibility=(Number(me._ht_url_image.style.opacity)>0||!me._ht_url_image.style.opacity)?'inherit':'hidden';
					me._ht_url_image.ggVisible=true;
				}
			}
		}
		me._ht_url_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_url.appendChild(me._ht_url_image);
		el=me._tt_ht_url=document.createElement('div');
		els=me._tt_ht_url__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_url.style.top='-47px';
					me._tt_ht_url.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_url.ggDx=0;
					me._tt_ht_url.style.top='24px';
					me._tt_ht_url.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_url.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url.style.visibility=(Number(me._tt_ht_url.style.opacity)>0||!me._tt_ht_url.style.opacity)?'inherit':'hidden';
					me._tt_ht_url.ggVisible=true;
				}
				else {
					me._tt_ht_url.style.visibility="hidden";
					me._tt_ht_url.ggVisible=false;
				}
			}
		}
		me._tt_ht_url.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_url.appendChild(me._tt_ht_url);
		el=me._ht_url_customimage=document.createElement('div');
		els=me._ht_url_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_url_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_customimage.style[domTransition]='';
				if (me._ht_url_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_url_customimage.style.visibility="hidden";
					me._ht_url_customimage__img.src = '';
					me._ht_url_customimage.ggVisible=false;
				}
				else {
					me._ht_url_customimage.style.visibility=(Number(me._ht_url_customimage.style.opacity)>0||!me._ht_url_customimage.style.opacity)?'inherit':'hidden';
					me._ht_url_customimage.ggSubElement.src=me._ht_url_customimage.ggText;
					me._ht_url_customimage.ggVisible=true;
				}
			}
		}
		me._ht_url_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_url_customimage.clientWidth;
			var parentHeight = me._ht_url_customimage.clientHeight;
			var img = me._ht_url_customimage__img;
			var aspectRatioDiv = me._ht_url_customimage.clientWidth / me._ht_url_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_url.appendChild(me._ht_url_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_url;
	};
	function SkinHotspotClass_ht_video_youtube(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_youtube=document.createElement('div');
		el.ggId="ht_video_youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_youtube.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_youtube.onclick=function (e) {
				player.stopSound("_background");
			skin._popup_video_youtube.ggInitMedia(me.hotspot.url);
			player.setVariableValue('vis_video_youtube', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_video_youtube']=true;
			me._tt_ht_video_youtube.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_youtube.ontouchend=function (e) {
			me.elementMouseOver['ht_video_youtube']=false;
			me._tt_ht_video_youtube.logicBlock_visible();
		}
		me._ht_video_youtube.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_video_youtube=document.createElement('div');
		els=me._ht_video_video_youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM6aW5rc2NhcGU9Imh0dHA6Ly93d3cuaW5rc2NhcGUub3JnL25hbWVzcGFjZXMvaW5rc2NhcGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjQgNjQ7IiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIi'+
			'B4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiPgogPHN0eWxlIHR5cGU9InRleHQvY3Nz'+
			'Ij4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGN5PSIzMS43IiBjeD0iMzIiIHI9IjMxIi8+CiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC05NTIuMzYyMTgpIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjUuMyw5NzEuM2MtMS42LDAtMywxLjMtMywzLjF2MTkuOGMwLjEsMi40LDIuNSwzLjksNC42LDIuOGwxNy4yLTEwYzAuOS0wLjUsMS42LTEuNSwxLjYtMi43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjItMC42LTIuMi0xLjYtMi43bC0xNy4yLTEwQzI2LjQsOTcxLjQsMjUuOCw5NzEuMywyNS4zLDk3MS4zTDI1LjMsOTcxLjN6Ii8+CiA8L2'+
			'c+Cjwvc3ZnPgo=';
		me._ht_video_video_youtube__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_video_youtube";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_video_youtube.style[domTransition]='';
				if (me._ht_video_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._ht_video_video_youtube.style.visibility="hidden";
					me._ht_video_video_youtube.ggVisible=false;
				}
				else {
					me._ht_video_video_youtube.style.visibility=(Number(me._ht_video_video_youtube.style.opacity)>0||!me._ht_video_video_youtube.style.opacity)?'inherit':'hidden';
					me._ht_video_video_youtube.ggVisible=true;
				}
			}
		}
		me._ht_video_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_video_youtube.appendChild(me._ht_video_video_youtube);
		el=me._tt_ht_video_youtube=document.createElement('div');
		els=me._tt_ht_video_youtube__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_video_youtube";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 3px 2px 3px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_video_youtube.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_video_youtube.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_video_youtube.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_video_youtube.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_video_youtube.style.top='-47px';
					me._tt_ht_video_youtube.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_video_youtube.ggDx=0;
					me._tt_ht_video_youtube.style.top='24px';
					me._tt_ht_video_youtube.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_video_youtube.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_video_youtube'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_video_youtube.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_video_youtube.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_video_youtube.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_video_youtube.style.visibility=(Number(me._tt_ht_video_youtube.style.opacity)>0||!me._tt_ht_video_youtube.style.opacity)?'inherit':'hidden';
					me._tt_ht_video_youtube.ggVisible=true;
				}
				else {
					me._tt_ht_video_youtube.style.visibility="hidden";
					me._tt_ht_video_youtube.ggVisible=false;
				}
			}
		}
		me._tt_ht_video_youtube.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_video_youtube.appendChild(me._tt_ht_video_youtube);
		el=me._ht_video_youtube_customimage=document.createElement('div');
		els=me._ht_video_youtube_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_video_youtube_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_video_youtube_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_youtube_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_youtube_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_video_youtube_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_video_youtube_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_video_youtube_customimage.style[domTransition]='';
				if (me._ht_video_youtube_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_video_youtube_customimage.style.visibility="hidden";
					me._ht_video_youtube_customimage__img.src = '';
					me._ht_video_youtube_customimage.ggVisible=false;
				}
				else {
					me._ht_video_youtube_customimage.style.visibility=(Number(me._ht_video_youtube_customimage.style.opacity)>0||!me._ht_video_youtube_customimage.style.opacity)?'inherit':'hidden';
					me._ht_video_youtube_customimage.ggSubElement.src=me._ht_video_youtube_customimage.ggText;
					me._ht_video_youtube_customimage.ggVisible=true;
				}
			}
		}
		me._ht_video_youtube_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_video_youtube_customimage.clientWidth;
			var parentHeight = me._ht_video_youtube_customimage.clientHeight;
			var img = me._ht_video_youtube_customimage__img;
			var aspectRatioDiv = me._ht_video_youtube_customimage.clientWidth / me._ht_video_youtube_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_video_youtube.appendChild(me._ht_video_youtube_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_video_youtube;
	};
	function SkinHotspotClass_ht_form(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_form=document.createElement('div');
		el.ggId="ht_form";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_form.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_form.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_form.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_form.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_form.style[domTransition]='';
				if (me._ht_form.ggCurrentLogicStateVisible == 0) {
					me._ht_form.style.visibility="hidden";
					me._ht_form.ggVisible=false;
				}
				else {
					me._ht_form.style.visibility=(Number(me._ht_form.style.opacity)>0||!me._ht_form.style.opacity)?'inherit':'hidden';
					me._ht_form.ggVisible=true;
				}
			}
		}
		me._ht_form.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
				skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
				if (skin._web_page.ggUpdateText) {
					skin._web_page.ggUpdateText=function() {
						var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (skin._web_page.ggUpdatePosition) {
					skin._web_page.ggUpdatePosition();
				}
				skin._web_page.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_form.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_form.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_form']=true;
			me._tt_ht_url_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_form.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_form']=false;
			me._tt_ht_url_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_form.ontouchend=function (e) {
			me.elementMouseOver['ht_form']=false;
			me._tt_ht_url_1.logicBlock_visible();
		}
		me._ht_form.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image_1=document.createElement('div');
		els=me._ht_url_image_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NC43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0Ljc7IiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGN5PSIzMiIgY3g9IjMyIiByPSIzMSIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTQxLjQsNDIuNkwzOSw0My4zYy0wLjIsMC4xLTAuNCwwLjEtMC43LDAuMWMtMC43LDAtMS4yLTAuMy0xLjYtMC43Yy0wLjQtMC41LTAuNi0xLjItMC41LTEuOGwwLjItMS4yaC04LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LDAtMS0wLjQtMS0xYzAtMC41LDAuNC0xLDEtMWg5LjRjMC4xLTAuMSwwLjEtMC4yLDAuMi0wLjNsNy4xLTguMXYtOC44YzAt'+
			'MS0wLjctMS43LTEuNy0xLjdoLTIuNnYtMS4yYzAtMS0wLjctMS42LTEuNi0xLjYmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMS42LDAuNy0xLjYsMS42djEuMmgtMi42di0xLjJjMC0xLTAuNy0xLjYtMS42LTEuNmMtMC45LDAtMS42LDAuNy0xLjYsMS42djEuMmgtMi42di0xLjJjMC0xLTAuNy0xLjYtMS42LTEuNnMtMS42LDAuNy0xLjYsMS42JiN4ZDsmI3hhOyYjeDk7JiN4OTt2MS4yaC0yLjZjLTEsMC0xLjcsMC43LTEuNywxLjd2MjMuN2MwLDEsMC43LDEuNywxLjcsMS43aDE5LjljMSwwLDEuNy0wLjcsMS43LTEuN1Y0MGwtMS44LDJDNDIuMiw0Mi4yLDQxLjgsNDIuNSw0MS40LDQyLjZ6JiN4ZD'+
			'smI3hhOyYjeDk7JiN4OTsgTTI3LjUsMjQuNmgxMC4yYzAuNiwwLDEsMC40LDEsMWMwLDAuNS0wLjQsMS0xLDFIMjcuNWMtMC42LDAtMS0wLjQtMS0xQzI2LjUsMjUsMjYuOSwyNC42LDI3LjUsMjQuNnogTTI3LjUsMzEuMWgxMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LDAsMSwwLjQsMSwxYzAsMC41LTAuNCwxLTEsMUgyNy41Yy0wLjYsMC0xLTAuNC0xLTFDMjYuNSwzMS42LDI2LjksMzEuMSwyNy41LDMxLjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTM3LjgsNDEuMWMtMC4xLDAuNCwwLjMsMC43LDAuNywwLjdMNDEsNDFjMC4xLDAsMC4yLTAuMSwwLjItMC4xbDAuNy0wLjhMMzks'+
			'MzcuNWwtMC43LDAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEsMC4xLTAuMSwwLjItMC4xLDAuM0wzNy44LDQxLjF6Ii8+CiAgPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIzOS45LDM2LjUgNDIuOCwzOS4xIDQ4LjcsMzIuMyA0NS45LDI5LjggJiN4OTsiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNTAuOCwyOS4xbC0yLTEuOGMtMC4yLTAuMi0wLjYtMC4yLTAuOCwwbC0xLjIsMS40bDIuOSwyLjZsMS4yLTEuNEM1MSwyOS43LDUxLDI5LjQsNTAuOCwyOS4xeiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_url_image_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_image_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image_1.style[domTransition]='';
				if (me._ht_url_image_1.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image_1.style.visibility="hidden";
					me._ht_url_image_1.ggVisible=false;
				}
				else {
					me._ht_url_image_1.style.visibility=(Number(me._ht_url_image_1.style.opacity)>0||!me._ht_url_image_1.style.opacity)?'inherit':'hidden';
					me._ht_url_image_1.ggVisible=true;
				}
			}
		}
		me._ht_url_image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_form.appendChild(me._ht_url_image_1);
		el=me._tt_ht_url_1=document.createElement('div');
		els=me._tt_ht_url_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url_1.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url_1.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_url_1.style.top='-47px';
					me._tt_ht_url_1.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_url_1.ggDx=0;
					me._tt_ht_url_1.style.top='24px';
					me._tt_ht_url_1.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_url_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_form'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url_1.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url_1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url_1.style.visibility=(Number(me._tt_ht_url_1.style.opacity)>0||!me._tt_ht_url_1.style.opacity)?'inherit':'hidden';
					me._tt_ht_url_1.ggVisible=true;
				}
				else {
					me._tt_ht_url_1.style.visibility="hidden";
					me._tt_ht_url_1.ggVisible=false;
				}
			}
		}
		me._tt_ht_url_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_form.appendChild(me._tt_ht_url_1);
		me.__div = me._ht_form;
	};
	function SkinHotspotClass_ht_pdf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_pdf=document.createElement('div');
		el.ggId="ht_pdf";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_pdf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_pdf.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_pdf.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_pdf.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_pdf.style[domTransition]='';
				if (me._ht_pdf.ggCurrentLogicStateVisible == 0) {
					me._ht_pdf.style.visibility="hidden";
					me._ht_pdf.ggVisible=false;
				}
				else {
					me._ht_pdf.style.visibility=(Number(me._ht_pdf.style.opacity)>0||!me._ht_pdf.style.opacity)?'inherit':'hidden';
					me._ht_pdf.ggVisible=true;
				}
			}
		}
		me._ht_pdf.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
				skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
				if (skin._web_page.ggUpdateText) {
					skin._web_page.ggUpdateText=function() {
						var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (skin._web_page.ggUpdatePosition) {
					skin._web_page.ggUpdatePosition();
				}
				skin._web_page.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pdf.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pdf.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_pdf']=true;
			me._tt_ht_url_1_10.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pdf.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_pdf']=false;
			me._tt_ht_url_1_10.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_pdf.ontouchend=function (e) {
			me.elementMouseOver['ht_pdf']=false;
			me._tt_ht_url_1_10.logicBlock_visible();
		}
		me._ht_pdf.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image_1_1=document.createElement('div');
		els=me._ht_url_image_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NC43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0Ljc7IiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGN5PSIzMiIgY3g9IjMyIiByPSIzMSIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzLjksMjYuOWMxLjMsMCwyLjItMC4zLDIuOC0wLjhjMC42LTAuNSwwLjktMS40LDAuOS0yLjVjMC0xLjItMC4zLTItMC45LTIuNmMtMC42LTAuNS0xLjUtMC45LTIuOC0wLjloLTMmI3hkOyYjeGE7JiN4OTsmI3g5O3Y5LjRoMS45di0yLjZIMjMuOXogTTIyLjcsMjEuOWgxLjFjMC42LDAsMS4xLDAuMSwxLjQsMC40czAuNSwwLjYsMC41LDEuMmMwLDAu'+
			'NS0wLjEsMC45LTAuNCwxLjJzLTAuNywwLjQtMS4zLDAuNGgtMS4zVjIxLjl6Ii8+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTM1LDI4LjJjMC44LTAuOSwxLjItMiwxLjItMy41YzAtMS40LTAuNC0yLjYtMS4yLTMuNHMtMi0xLjItMy41LTEuMmgtM3Y5LjRoMi45QzMzLDI5LjUsMzQuMiwyOS4xLDM1LDI4LjJ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTMzLjYsMjYuOWMtMC41LDAuNS0xLjEsMC43LTIsMC43aC0xLjJ2LTUuN2gxLjFjMC45LDAsMS43LDAuMywyLjIsMC44YzAuNSwwLjUsMC43LDEuMiwwLjcsMi4xQzM0LjMsMjUuNywzNCwyNi40LDMzLjYsMjYuOXoiLz4KICA8cG9seWdvbiBjbG'+
			'Fzcz0ic3QwIiBwb2ludHM9IjQzLjEsMjIgNDMuMSwyMC4xIDM3LjIsMjAuMSAzNy4yLDI5LjUgMzkuMSwyOS41IDM5LjEsMjUuOCA0Mi45LDI1LjggNDIuOSwyNCAzOS4xLDI0IDM5LjEsMjIgJiN4OTsiLz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDUuNiwxMC4ySDE4LjNjLTEuNiwwLTIuOCwxLjMtMi44LDIuOHYzMy40YzAsMS42LDEuMywyLjgsMi44LDIuOGg2LjNsLTAuOS0wLjlsLTAuOS0wLjloLTQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYsMC0xLjEtMC41LTEuMS0xLjFWMTMuMWMwLTAuNiwwLjUtMS4xLDEuMS0xLjFoMjcuNGMwLjYsMCwxLjEsMC41LDEuMSwxLjF2MzMuNGMw'+
			'LDAuNi0wLjUsMS4xLTEuMSwxLjFoLTMuOUw0MSw0OC40bC0wLjksMC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtoNS42YzEuNiwwLDIuOC0xLjMsMi44LTIuOFYxMy4xQzQ4LjUsMTEuNSw0Ny4yLDEwLjIsNDUuNiwxMC4yeiIvPgogIDxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iNDEuOSw0My45IDM2LDQzLjkgMzYsMzQuMSAyNy45LDM0LjEgMjcuOSw0My44IDIyLDQzLjcgMzIuMSw1My44ICYjeDk7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_url_image_1_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_image_1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image_1_1.style[domTransition]='';
				if (me._ht_url_image_1_1.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image_1_1.style.visibility="hidden";
					me._ht_url_image_1_1.ggVisible=false;
				}
				else {
					me._ht_url_image_1_1.style.visibility=(Number(me._ht_url_image_1_1.style.opacity)>0||!me._ht_url_image_1_1.style.opacity)?'inherit':'hidden';
					me._ht_url_image_1_1.ggVisible=true;
				}
			}
		}
		me._ht_url_image_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_pdf.appendChild(me._ht_url_image_1_1);
		el=me._tt_ht_url_1_10=document.createElement('div');
		els=me._tt_ht_url_1_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url_1_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url_1_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url_1_10.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url_1_10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url_1_10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url_1_10.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url_1_10.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_url_1_10.style.top='-47px';
					me._tt_ht_url_1_10.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_url_1_10.ggDx=0;
					me._tt_ht_url_1_10.style.top='24px';
					me._tt_ht_url_1_10.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_url_1_10.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_pdf'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url_1_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url_1_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url_1_10.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url_1_10.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url_1_10.style.visibility=(Number(me._tt_ht_url_1_10.style.opacity)>0||!me._tt_ht_url_1_10.style.opacity)?'inherit':'hidden';
					me._tt_ht_url_1_10.ggVisible=true;
				}
				else {
					me._tt_ht_url_1_10.style.visibility="hidden";
					me._tt_ht_url_1_10.ggVisible=false;
				}
			}
		}
		me._tt_ht_url_1_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_pdf.appendChild(me._tt_ht_url_1_10);
		me.__div = me._ht_pdf;
	};
	function SkinHotspotClass_ht_care(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_care=document.createElement('div');
		el.ggId="ht_care";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_care.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_care.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_care.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_care.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_care.style[domTransition]='';
				if (me._ht_care.ggCurrentLogicStateVisible == 0) {
					me._ht_care.style.visibility="hidden";
					me._ht_care.ggVisible=false;
				}
				else {
					me._ht_care.style.visibility=(Number(me._ht_care.style.opacity)>0||!me._ht_care.style.opacity)?'inherit':'hidden';
					me._ht_care.ggVisible=true;
				}
			}
		}
		me._ht_care.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
				skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
				if (skin._web_page.ggUpdateText) {
					skin._web_page.ggUpdateText=function() {
						var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (skin._web_page.ggUpdatePosition) {
					skin._web_page.ggUpdatePosition();
				}
				skin._web_page.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_care.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_care.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_care']=true;
			me._careht.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_care.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_care']=false;
			me._careht.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_care.ontouchend=function (e) {
			me.elementMouseOver['ht_care']=false;
			me._careht.logicBlock_visible();
		}
		me._ht_care.ggUpdatePosition=function (useTransition) {
		}
		el=me._htcareico=document.createElement('div');
		els=me._htcareico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NC43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0Ljc7IiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGN5PSIzMiIgY3g9IjMyIiByPSIzMSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjUsMzUuM2MtMC4yLDAuMS0wLjMsMC4xLTAuNiwwLjFjLTAuMiwwLTAuMy0wLjEtMC42LTAuMmMtMi40LTIuNC0zLjgtNS43LTMuOC05LjFzMS4zLTYuNiwzLjgtOS4xJiN4ZDsmI3hhOyYjeDk7YzQuMy00LjMsMTEuMy01LDE2LjQtMS42YzAuMywwLjIsMC41LDAuNywwLjIsMWMtMC4yLDAuMy0wLjcsMC41LTEsMC4yYy00LjUtMy4xLTEwLjYtMi41LTE0LjQs'+
			'MS40Yy0yLjIsMi4yLTMuMyw1LTMuMyw4LjEmI3hkOyYjeGE7JiN4OTtzMS4zLDUuOSwzLjMsOC4xQzE1LjksMzQuNSwxNS45LDM1LDE1LjUsMzUuM3ogTTUwLjEsMzQuOWMwLjEsMC4zLDAuMiwwLjcsMC4yLDEuMWMwLDAuOC0wLjMsMS43LTAuOSwyLjJjLTAuNiwwLjctMS40LDAuOS0yLjIsMC45JiN4ZDsmI3hhOyYjeDk7Yy0wLjEsMC0wLjIsMC0wLjIsMGMwLjEsMC45LTAuMiwxLjgtMC45LDIuNWMtMC43LDAuNy0xLjUsMC45LTIuMiwwLjljLTAuMSwwLTAuMiwwLTAuMiwwYzAuMSwwLjktMC4yLDEuOC0wLjksMi41JiN4ZDsmI3hhOyYjeDk7Yy0wLjcsMC43LTEuNSwwLjktMi4yLDAuOWMtMC'+
			'4xLDAtMC4yLDAtMC4yLDBjMC4xLDAuOS0wLjIsMS44LTAuOSwyLjVjLTAuNywwLjctMS41LDAuOS0yLjIsMC45Yy0wLjgsMC0xLjctMC4yLTIuMi0wLjlMMzMuOSw0NyYjeGQ7JiN4YTsmI3g5O2MtMC4xLDAuNi0wLjMsMS4xLTAuOCwxLjVMMzIsNDkuNmMtMC43LDAuNy0xLjUsMC45LTIuMiwwLjljLTAuNywwLTEuNy0wLjItMi4yLTAuOWMtMC43LTAuNy0xLTEuNi0wLjktMi41Yy0wLjEsMC0wLjIsMC0wLjIsMCYjeGQ7JiN4YTsmI3g5O2MtMC44LDAtMS43LTAuMi0yLjItMC45Yy0wLjctMC43LTEtMS42LTAuOS0yLjVjLTAuMSwwLTAuMiwwLTAuMiwwYy0wLjgsMC0xLjctMC4yLTIuMi0wLjlj'+
			'LTAuNy0wLjctMS0xLjYtMC45LTIuNSYjeGQ7JiN4YTsmI3g5O2MtMC4xLDAtMC4yLDAtMC4yLDBjLTAuOCwwLTEuNy0wLjMtMi4yLTAuOWMtMS4zLTEuMy0xLjMtMy4yLDAtNC41bDEuMS0xLjFjMC42LTAuNywxLjQtMC45LDIuMi0wLjlsMCwwYzAuOCwwLDEuNywwLjMsMi4yLDAuOSYjeGQ7JiN4YTsmI3g5O2MwLjcsMC42LDAuOSwxLjQsMC45LDIuMmMwLDAuMSwwLDAuMiwwLDAuMmMwLjktMC4xLDEuOCwwLjIsMi41LDAuOGMwLjcsMC42LDAuOSwxLjQsMC45LDIuMmMwLDAuMSwwLDAuMiwwLDAuMiYjeGQ7JiN4YTsmI3g5O2MwLjktMC4xLDEuOCwwLjIsMi41LDAuOWMwLjcsMC43LDEsMS42LD'+
			'AuOSwyLjVjMC45LTAuMSwxLjgsMC4yLDIuNSwwLjlsMC4xLDAuMWMwLDAsMCwwLDAuMSwwbDMuMSwzLjFjMC43LDAuNywxLjcsMC43LDIuMywwJiN4ZDsmI3hhOyYjeDk7YzAuNy0wLjcsMC43LTEuNywwLTIuM2wtNy42LTcuMmMtMC4yLTAuMi0wLjItMC43LDAtMS4xYzAuMi0wLjIsMC43LTAuMiwxLjEsMGw3LjYsNy42YzAuNywwLjcsMS43LDAuNywyLjMsMCYjeGQ7JiN4YTsmI3g5O2MwLjYtMC43LDAuNy0xLjcsMC0yLjNMMzUsMzMuOWMtMC4yLTAuMi0wLjItMC43LDAtMS4xYzAuMi0wLjMsMC43LTAuMiwxLjEsMGw3LjYsNy42YzAuNywwLjcsMS43LDAuNywyLjMsMGMwLjctMC43LDAuNy0x'+
			'LjcsMC0yLjMmI3hkOyYjeGE7JiN4OTtsLTcuNi03LjZjLTAuMi0wLjItMC4yLTAuNywwLTEuMWMwLjItMC4yLDAuNy0wLjIsMS4xLDBsNy42LDcuNmMwLjcsMC43LDEuNywwLjcsMi4zLDBjMC4yLTAuMiwwLjUtMC43LDAuNS0xLjNzLTAuMi0wLjgtMC41LTEuMyYjeGQ7JiN4YTsmI3g5O0wzNi40LDIzbC02LjEsNi4xYy0yLjIsMi4yLTUuNSwyLjItNy42LDBjLTAuOC0wLjgtMC44LTIuMywwLTMuMmw4LjgtOC44YzIuNC0yLjQsNS43LTMuOCw5LjEtMy44YzMuNCwwLDYuNiwxLjMsOS4xLDMuOCYjeGQ7JiN4YTsmI3g5O0M1NC41LDIyLjEsNTQuNiwzMCw1MC4xLDM0Ljl6IE0yMCwzOC40bDEuMS'+
			'0xLjFjMC4yLTAuMiwwLjUtMC43LDAuNS0xLjNzLTAuMi0wLjgtMC41LTEuM2MtMC4yLTAuMi0wLjctMC41LTEuMy0wLjUmI3hkOyYjeGE7JiN4OTtjLTAuNSwwLTAuOCwwLjItMS4zLDAuNWwtMS4xLDEuMWMtMC43LDAuNy0wLjcsMS43LDAsMi4zQzE4LjIsMzkuMSwxOS40LDM5LjEsMjAsMzguNHogTTIzLjQsNDEuOWwxLjEtMS4xYzAuMi0wLjIsMC41LTAuNywwLjUtMS4zJiN4ZDsmI3hhOyYjeDk7cy0wLjItMC44LTAuNS0xLjNjLTAuMi0wLjMtMC43LTAuNS0xLjMtMC41Yy0wLjUsMC0wLjgsMC4yLTEuMywwLjVsLTEuMSwxLjFjLTAuNywwLjctMC43LDEuNywwLDIuM0MyMS43LDQyLjYsMjIu'+
			'OCw0Mi42LDIzLjQsNDEuOSYjeGQ7JiN4YTsmI3g5O3ogTTI2LjksNDUuM2wxLjEtMS4xYzAuMi0wLjIsMC41LTAuNywwLjUtMS4zcy0wLjItMC44LTAuNS0xLjNjLTAuMi0wLjItMC43LTAuNS0xLjMtMC41Yy0wLjUsMC0wLjgsMC4yLTEuMywwLjVsLTEuMSwxLjEmI3hkOyYjeGE7JiN4OTtjLTAuNywwLjctMC43LDEuNywwLDIuM0MyNS4xLDQ2LDI2LjIsNDYsMjYuOSw0NS4zeiBNMzEuMyw0NS4zYy0wLjItMC4yLTAuNy0wLjUtMS4zLTAuNWMtMC41LDAtMC44LDAuMi0xLjMsMC41bC0xLjEsMS4xJiN4ZDsmI3hhOyYjeDk7Yy0wLjcsMC43LTAuNywxLjcsMCwyLjNjMC43LDAuNywxLjcsMC43LD'+
			'IuMywwbDEuMS0xLjFDMzIsNDcsMzIsNDYsMzEuMyw0NS4zeiBNNDguNiwxOC4zYy0yLjItMi4yLTUtMy4zLTguMS0zLjNzLTUuOSwxLjMtOC4xLDMuMyYjeGQ7JiN4YTsmI3g5O0wyMy43LDI3Yy0wLjIsMC4yLTAuMiwwLjcsMCwxYzEuNSwxLjUsNCwxLjUsNS41LDBsNi42LTYuNmMwLjItMC4yLDAuMy0wLjIsMC42LTAuMnMwLjMsMC4xLDAuNiwwLjJsMTIuMywxMi4zJiN4ZDsmI3hhOyYjeDk7QzUyLjksMjkuMiw1Mi43LDIyLjUsNDguNiwxOC4zeiIvPgo8L3N2Zz4K';
		me._htcareico__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht-careico";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._htcareico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._htcareico.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._htcareico.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._htcareico.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._htcareico.style[domTransition]='';
				if (me._htcareico.ggCurrentLogicStateVisible == 0) {
					me._htcareico.style.visibility="hidden";
					me._htcareico.ggVisible=false;
				}
				else {
					me._htcareico.style.visibility=(Number(me._htcareico.style.opacity)>0||!me._htcareico.style.opacity)?'inherit':'hidden';
					me._htcareico.ggVisible=true;
				}
			}
		}
		me._htcareico.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_care.appendChild(me._htcareico);
		el=me._careht=document.createElement('div');
		els=me._careht__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="careht";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._careht.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._careht.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._careht.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._careht.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._careht.style[domTransition]='left 0s, top 0s';
				if (me._careht.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._careht.style.top='-47px';
					me._careht.ggUpdatePosition(true);
				}
				else {
					me._careht.ggDx=0;
					me._careht.style.top='24px';
					me._careht.ggUpdatePosition(true);
				}
			}
		}
		me._careht.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_care'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._careht.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._careht.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._careht.style[domTransition]='left 0s, top 0s';
				if (me._careht.ggCurrentLogicStateVisible == 0) {
					me._careht.style.visibility=(Number(me._careht.style.opacity)>0||!me._careht.style.opacity)?'inherit':'hidden';
					me._careht.ggVisible=true;
				}
				else {
					me._careht.style.visibility="hidden";
					me._careht.ggVisible=false;
				}
			}
		}
		me._careht.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_care.appendChild(me._careht);
		me.__div = me._ht_care;
	};
	function SkinHotspotClass_ht_insta(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_insta=document.createElement('div');
		el.ggId="ht_insta";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_insta.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_insta.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_insta.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_insta.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_insta.style[domTransition]='';
				if (me._ht_insta.ggCurrentLogicStateVisible == 0) {
					me._ht_insta.style.visibility="hidden";
					me._ht_insta.ggVisible=false;
				}
				else {
					me._ht_insta.style.visibility=(Number(me._ht_insta.style.opacity)>0||!me._ht_insta.style.opacity)?'inherit':'hidden';
					me._ht_insta.ggVisible=true;
				}
			}
		}
		me._ht_insta.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
				skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
				if (skin._web_page.ggUpdateText) {
					skin._web_page.ggUpdateText=function() {
						var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (skin._web_page.ggUpdatePosition) {
					skin._web_page.ggUpdatePosition();
				}
				skin._web_page.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_insta.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_insta.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_insta']=true;
			me._tt_ht_url_1_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_insta.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_insta']=false;
			me._tt_ht_url_1_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_insta.ontouchend=function (e) {
			me.elementMouseOver['ht_insta']=false;
			me._tt_ht_url_1_1.logicBlock_visible();
		}
		me._ht_insta.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image_1_1_1=document.createElement('div');
		els=me._ht_url_image_1_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NC43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0Ljc7IiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGN5PSIzMi4zIiBjeD0iMzIiIHI9IjMxIi8+CiA8Zz4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDIuOCwxNi4xSDIxLjJjLTMsMC01LjQsMi40LTUuNCw1LjR2MjEuNmMwLDMsMi40LDUuNCw1LjQsNS40aDIxLjZjMywwLDUuNC0yLjQsNS40LTUuNFYyMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDNDguMiwxOC41LDQ1LjgsMTYuMSw0Mi44LDE2LjF6IE00NS41LDQzLjFjMCwxLjUtMS4yLDIuNy0yLjcsMi43SDIxLjJjLTEuNSwwLTIuNy0xLjItMi43'+
			'LTIuN1YyMS41YzAtMS41LDEuMi0yLjcsMi43LTIuN2gyMS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS41LDAsMi43LDEuMiwyLjcsMi43QzQ1LjUsMjEuNSw0NS41LDQzLjEsNDUuNSw0My4xeiIvPgogIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMiwyNC4yYy00LjUsMC04LjEsMy42LTguMSw4LjFzMy42LDguMSw4LjEsOC4xczguMS0zLjYsOC4xLTguMVMzNi41LDI0LjIsMzIsMjQuMnogTTMyLDM3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMywwLTUuNC0yLjQtNS40LTUuNHMyLjQtNS40LDUuNC01LjRzNS40LDIuNCw1LjQsNS40UzM1LDM3LjcsMzIsMzcuN3oiLz4KICA8Y2lyY2xlIGN5PSIyMy'+
			'41IiBjbGFzcz0ic3QwIiBjeD0iNDAuOCIgcj0iMiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_url_image_1_1_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_image_1_1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_1_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image_1_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image_1_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image_1_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image_1_1_1.style[domTransition]='';
				if (me._ht_url_image_1_1_1.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image_1_1_1.style.visibility="hidden";
					me._ht_url_image_1_1_1.ggVisible=false;
				}
				else {
					me._ht_url_image_1_1_1.style.visibility=(Number(me._ht_url_image_1_1_1.style.opacity)>0||!me._ht_url_image_1_1_1.style.opacity)?'inherit':'hidden';
					me._ht_url_image_1_1_1.ggVisible=true;
				}
			}
		}
		me._ht_url_image_1_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_insta.appendChild(me._ht_url_image_1_1_1);
		el=me._tt_ht_url_1_1=document.createElement('div');
		els=me._tt_ht_url_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url_1_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url_1_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url_1_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url_1_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url_1_1.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url_1_1.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_url_1_1.style.top='-47px';
					me._tt_ht_url_1_1.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_url_1_1.ggDx=0;
					me._tt_ht_url_1_1.style.top='24px';
					me._tt_ht_url_1_1.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_url_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_insta'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url_1_1.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url_1_1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url_1_1.style.visibility=(Number(me._tt_ht_url_1_1.style.opacity)>0||!me._tt_ht_url_1_1.style.opacity)?'inherit':'hidden';
					me._tt_ht_url_1_1.ggVisible=true;
				}
				else {
					me._tt_ht_url_1_1.style.visibility="hidden";
					me._tt_ht_url_1_1.ggVisible=false;
				}
			}
		}
		me._tt_ht_url_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_insta.appendChild(me._tt_ht_url_1_1);
		me.__div = me._ht_insta;
	};
	function SkinHotspotClass_ht_node_link(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_link=document.createElement('div');
		el.ggId="ht_node_link";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_link.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_link.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_link.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_link.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._ht_info_d.style[domTransition]='none';
			me._ht_info_d.style.visibility=(Number(me._ht_info_d.style.opacity)>0||!me._ht_info_d.style.opacity)?'inherit':'hidden';
			me._ht_info_d.ggVisible=true;
			me.elementMouseOver['ht_node_link']=true;
			me._ht_info_d.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_link.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._ht_info_d.style[domTransition]='none';
			me._ht_info_d.style.visibility='hidden';
			me._ht_info_d.ggVisible=false;
			me.elementMouseOver['ht_node_link']=false;
			me._ht_info_d.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_link.ontouchend=function (e) {
			me.elementMouseOver['ht_node_link']=false;
			me._ht_info_d.logicBlock_visible();
		}
		me._ht_node_link.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_d=document.createElement('div');
		els=me._ht_info_d__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="ht_info_d";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._ht_info_d.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_d.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_link'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_d.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_d.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_d.style[domTransition]='';
				if (me._ht_info_d.ggCurrentLogicStateVisible == 0) {
					me._ht_info_d.style.visibility=(Number(me._ht_info_d.style.opacity)>0||!me._ht_info_d.style.opacity)?'inherit':'hidden';
					me._ht_info_d.ggVisible=true;
				}
				else {
					me._ht_info_d.style.visibility="hidden";
					me._ht_info_d.ggVisible=false;
				}
			}
		}
		me._ht_info_d.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node_link.appendChild(me._ht_info_d);
		el=me._ht_node_link_ico=document.createElement('div');
		els=me._ht_node_link_ico__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NC43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0Ljc7IiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGN5PSIzMiIgY3g9IjMyIiByPSIzMSIvPgogPGc+CiAgPHBhdGggY2xhc3M9InN0MCIgZD0iTTMyLDE0Yy0zLjksMC03LjIsMy4yLTcuMiw3LjJ2MS4yaC0xYy0yLjEsMC0zLjgsMS42LTMuOSwzLjdsLTEsMTkuNmMtMC4xLDIuMiwxLjYsNCwzLjcsNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLDAsMC4xLDAsMC4yLDBoMTguM2MyLjIsMCwzLjktMS44LDMuOS0zLjljMC0wLjEsMC0wLjEsMC0wLjJsLTEtMTkuNmMtMC4xLTIuMS0xLjktMy43LTMu'+
			'OS0zLjdoLTF2LTEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzM5LjIsMTcuMywzNS45LDE0LDMyLDE0eiBNMjcuMywyMS4yYzAtMi43LDIuMi00LjcsNC43LTQuN3M0LjcsMi4yLDQuNyw0Ljd2MS4yaC05LjVWMjEuMnogTTI1LjIsMjcuNGMwLTAuNiwwLjYtMS4yLDEuMi0xLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYsMCwxLjIsMC42LDEuMiwxLjJjMCwwLjYtMC42LDEuMi0xLjIsMS4yQzI1LjgsMjguNiwyNS4yLDI4LjEsMjUuMiwyNy40TDI1LjIsMjcuNHogTTM2LjMsMjcuNGMwLTAuNiwwLjYtMS4yLDEuMi0xLjImI3hkOyYjeGE7JiN4OTsmI3g5O3MxLjIsMC42LDEuMiwxLjJjMCwwLjYtMC'+
			'42LDEuMi0xLjIsMS4yUzM2LjMsMjguMSwzNi4zLDI3LjRMMzYuMywyNy40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_link_ico__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_link_ico";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_link_ico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_link_ico.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_link.appendChild(me._ht_node_link_ico);
		me.__div = me._ht_node_link;
	};
	function SkinHotspotClass_ht_node_exit(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_exit=document.createElement('div');
		el.ggId="ht_node_exit";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_exit.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_exit.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_exit.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_exit.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin._tt_ht_node.style[domTransition]='none';
			skin._tt_ht_node.style.visibility=(Number(skin._tt_ht_node.style.opacity)>0||!skin._tt_ht_node.style.opacity)?'inherit':'hidden';
			skin._tt_ht_node.ggVisible=true;
			me.elementMouseOver['ht_node_exit']=true;
			me._tt_ht_node_1_1_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_exit.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin._tt_ht_node.style[domTransition]='none';
			skin._tt_ht_node.style.visibility='hidden';
			skin._tt_ht_node.ggVisible=false;
			me.elementMouseOver['ht_node_exit']=false;
			me._tt_ht_node_1_1_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_exit.ontouchend=function (e) {
			me.elementMouseOver['ht_node_exit']=false;
			me._tt_ht_node_1_1_1.logicBlock_visible();
		}
		me._ht_node_exit.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_ht_node_1_1_1=document.createElement('div');
		els=me._tt_ht_node_1_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node_1_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node_1_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node_1_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_exit'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node_1_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node_1_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node_1_1_1.style[domTransition]='';
				if (me._tt_ht_node_1_1_1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node_1_1_1.style.visibility=(Number(me._tt_ht_node_1_1_1.style.opacity)>0||!me._tt_ht_node_1_1_1.style.opacity)?'inherit':'hidden';
					me._tt_ht_node_1_1_1.ggVisible=true;
				}
				else {
					me._tt_ht_node_1_1_1.style.visibility="hidden";
					me._tt_ht_node_1_1_1.ggVisible=false;
				}
			}
		}
		me._tt_ht_node_1_1_1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node_exit.appendChild(me._tt_ht_node_1_1_1);
		el=me._ht_node_image_1_1_1=document.createElement('div');
		els=me._ht_node_image_1_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4MCA4MDsiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZS'+
			'B0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30mI3hkOwoJLnN0MXtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8zIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzIuOSw1MS43Yy0wLjEsMS4zLTAuMiwyLjUtMC4zLDMuNWMtMC4xLDAuNi0wLjEsMS0wLjEsMS4yYy0wLjIsMi4xLTIsNC4zLTMuNSw0LjZsLTAuMywwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAtMC4zLDAuMS0wLjUsMC4xYy0wLjUsMC4xLTEuMSwwLjMtMS43'+
			'LDAuNGMtMS45LDAuNS00LjEsMC45LTYuNiwxLjNjLTYuNCwxLjEtMTMuMiwxLjgtMTkuOSwxLjljLTYuOC0wLjEtMTMuNy0wLjktMjAuMy0yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuMy0wLjQtNC40LTAuOC02LjItMS4zYy0xLjEtMC4zLTEuOC0wLjQtMi4xLTAuNUwxMSw2MWMtMS41LTAuMy0zLjMtMi41LTMuNS00LjRjMC0wLjMtMC4xLTAuOC0wLjItMS40Yy0wLjEtMS0wLjItMi4yLTAuMy0zLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0M2LjgsNDgsNi42LDQ0LDYuNiw0MHMwLjItOCwwLjUtMTEuN2MwLjEtMS4zLDAuMi0yLjUsMC4zLTMuNWMwLjEtMC42LDAuMS0xLDAuMS0xLjJjMC4yLTIuMS'+
			'wyLTQuMywzLjUtNC42bDAuMy0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC4xLDEuMS0wLjMsMi4xLTAuNWMxLjgtMC40LDMuOS0wLjksNi4yLTEuM2M2LjUtMS4yLDEzLjUtMS45LDIwLjUtMmM2LjYsMC4xLDEzLjQsMC44LDE5LjgsMS45YzIuNCwwLjQsNC42LDAuOSw2LjYsMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LDAuMiwxLjMsMC4zLDEuNywwLjRjMC4zLDAuMSwwLjUsMC4xLDAuNSwwLjFsMC4zLDAuMWMxLjUsMC4zLDMuMywyLjUsMy41LDQuNGwwLDAuMmMwLDAuMiwwLjEsMC42LDAuMSwxLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEsMSwwLjIsMi4yLDAuMywzLjVDNzMu'+
			'MiwzMiw3My40LDM2LDczLjQsNDBDNzMuNCw0NCw3My4yLDQ4LDcyLjksNTEuN0w3Mi45LDUxLjdMNzIuOSw1MS43eiBNNDAsNzIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy01LjQsMC0xMC41LTEuMy0xNS4yLTMuN2M0LjUsMC42LDkuNiwxLjEsMTUuMiwxLjJjNS41LTAuMSwxMC43LTAuNiwxNS4yLTEuMkM1MC42LDcxLjYsNDUuNCw3Mi45LDQwLDcyLjkgTTQwLDcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUuNCwwLDEwLjUsMS4zLDE1LjEsMy43Yy00LjQtMC42LTkuNi0xLjEtMTUuMS0xLjFjLTUuNSwwLjEtMTAuNywwLjYtMTUuMSwxLjJDMjkuNSw4LjQsMzQuNiw3LjEsNDAsNy4xTDQwLDcuMU'+
			'w0MCw3LjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTc3LjgsMjIuOGMtMC40LTQuMi0zLjktOC4zLTcuNy05LjJjMCwwLTEuNS0wLjQtNC0xYy0wLjEtMC4yLTAuMy0wLjQtMC41LTAuNkM1OC44LDUuNyw0OS43LDIsNDAsMiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzMwLDIsMjAuNiw1LjksMTMuNiwxMi44Yy0yLjQsMC41LTMuNywwLjktMy43LDAuOWMtMy44LDAuOS03LjIsNS03LjcsOS4yYzAsMC0xLDcuNi0xLDE3LjFjMCw5LjUsMSwxNy4xLDEsMTcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNCw0LjIsMy45LDguMyw3LjcsOS4yYzAsMCwxLjMsMC40LDMuNywwLjlDMjAuNiw3NCwzMCw3'+
			'OCw0MCw3OGM5LjksMCwxOS4yLTMuOCwyNi4yLTEwLjVjMC4xLTAuMSwwLjEtMC4yLDAuMi0wLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjQtMC41LDMuOC0wLjksMy44LTAuOWMzLjgtMC45LDcuMi01LDcuNy05LjJjMCwwLDEtNy42LDEtMTcuMUM3OC44LDMwLjQsNzcuOCwyMi44LDc3LjgsMjIuOEw3Ny44LDIyLjhMNzcuOCwyMi44eiBNNzIuOSw1MS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwxLjMtMC4yLDIuNS0wLjMsMy41Yy0wLjEsMC42LTAuMSwxLTAuMSwxLjJjLTAuMiwyLjEtMiw0LjMtMy41LDQuNmwtMC4zLDAuMWMtMC4xLDAtMC4zLDAuMS0wLjUsMC4xJiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTtjLTAuNSwwLjEtMS4xLDAuMy0xLjcsMC40Yy0xLjksMC41LTQuMSwwLjktNi42LDEuM2MtNi40LDEuMS0xMy4yLDEuOC0xOS45LDEuOWMtNi44LTAuMS0xMy43LTAuOS0yMC4zLTImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi4zLTAuNC00LjQtMC44LTYuMi0xLjNjLTEuMS0wLjMtMS44LTAuNC0yLjEtMC41TDExLDYxYy0xLjUtMC4zLTMuMy0yLjUtMy41LTQuNGMwLTAuMy0wLjEtMC44LTAuMi0xLjRjLTAuMS0xLTAuMi0yLjItMC4zLTMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzYuOCw0OCw2LjYsNDQsNi42LDQwczAuMi04LDAuNS0xMS43YzAuMS0xLjMsMC4yLTIuNSwwLjMtMy41YzAu'+
			'MS0wLjYsMC4xLTEsMC4xLTEuMmMwLjItMi4xLDItNC4zLDMuNS00LjZsMC4zLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjEsMS4xLTAuMywyLjEtMC41YzEuOC0wLjQsMy45LTAuOSw2LjItMS4zYzYuNS0xLjIsMTMuNS0xLjksMjAuNS0yYzYuNiwwLjEsMTMuNCwwLjgsMTkuOCwxLjljMi40LDAuNCw0LjYsMC45LDYuNiwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC4yLDEuMywwLjMsMS43LDAuNGMwLjMsMC4xLDAuNSwwLjEsMC41LDAuMWwwLjMsMC4xYzEuNSwwLjMsMy4zLDIuNSwzLjUsNC40bDAsMC4yYzAsMC4yLDAuMSwwLjYsMC4xLDEuMiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7YzAuMSwxLDAuMiwyLjIsMC4zLDMuNUM3My4yLDMyLDczLjQsMzYsNzMuNCw0MEM3My40LDQ0LDczLjIsNDgsNzIuOSw1MS43TDcyLjksNTEuN0w3Mi45LDUxLjd6IE00MCw3Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTUuNCwwLTEwLjUtMS4zLTE1LjItMy43YzQuNSwwLjYsOS42LDEuMSwxNS4yLDEuMmM1LjUtMC4xLDEwLjctMC42LDE1LjItMS4yQzUwLjYsNzEuNiw0NS40LDcyLjksNDAsNzIuOSBNNDAsNy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS40LDAsMTAuNSwxLjMsMTUuMSwzLjdjLTQuNC0wLjYtOS42LTEuMS0xNS4xLTEuMWMtNS41LDAuMS0xMC43LDAuNi0xNS4xLDEuMkMyOS41'+
			'LDguNCwzNC42LDcuMSw0MCw3LjFMNDAsNy4xTDQwLDcuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8xIj4KICA8cGF0aCBkPSJNMjEuNywzOS45bDEyLjcsMTIuM2MwLjUsMC41LDEuMiwwLjEsMS4yLTAuNXYtNC44YzAtMC40LDAuMi0wLjYsMC42LTAuNmg4LjFjMC40LDAsMC42LTAuMiwwLjYtMC42VjMzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjQtMC4yLTAuNi0wLjYtMC42aC04LjFjLTAuNCwwLTAuNi0wLjItMC42LTAuNlYyN2MwLTAuNi0wLjctMC45LTEuMi0wLjVMMjEuNywzOUMyMS41LDM5LjMsMjEuNSwzOS44LDIxLjcsMzkuOXoiLz4KICA8cGF0aCBkPSJNNTMuNCwyMC43SDQyLj'+
			'djLTEuMywwLTIuMywxLjEtMi4zLDIuM2MwLDEuMywxLjEsMi4zLDIuMywyLjNoMTAuNmMwLjYsMCwxLjIsMC42LDEuMiwxLjJ2MjUuOWMwLDAuNi0wLjYsMS4yLTEuMiwxLjImI3hkOyYjeGE7JiN4OTsmI3g5O0g0Mi43Yy0xLjMsMC0yLjMsMS4xLTIuMywyLjNjMCwxLjMsMS4xLDIuMywyLjMsMi4zaDEwLjZjMy4zLDAsNS45LTIuNyw1LjktNS45VjI2LjVDNTkuMiwyMy4zLDU2LjUsMjAuNyw1My40LDIwLjd6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_image_1_1_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_1_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image_1_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_1_1_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_exit.appendChild(me._ht_node_image_1_1_1);
		me.__div = me._ht_node_exit;
	};
	function SkinHotspotClass_hotspot_1_1_1_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_1_1_1_1=document.createElement('div');
		el.ggId="Hotspot 1_1_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 131px;';
		hs+='position : absolute;';
		hs+='top : 83px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1_1_1_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_1_1_1_1.onclick=function (e) {
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1_1_1_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1_1_1_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1_1_1_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1_1_1_1.ggUpdatePosition=function (useTransition) {
		}
		me.__div = me._hotspot_1_1_1_1;
	};
	function SkinHotspotClass_ht_linkedin(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_linkedin=document.createElement('div');
		el.ggId="ht_linkedin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_linkedin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_linkedin.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_linkedin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_linkedin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_linkedin.style[domTransition]='';
				if (me._ht_linkedin.ggCurrentLogicStateVisible == 0) {
					me._ht_linkedin.style.visibility="hidden";
					me._ht_linkedin.ggVisible=false;
				}
				else {
					me._ht_linkedin.style.visibility=(Number(me._ht_linkedin.style.opacity)>0||!me._ht_linkedin.style.opacity)?'inherit':'hidden';
					me._ht_linkedin.ggVisible=true;
				}
			}
		}
		me._ht_linkedin.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
				skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
				if (skin._web_page.ggUpdateText) {
					skin._web_page.ggUpdateText=function() {
						var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (skin._web_page.ggUpdatePosition) {
					skin._web_page.ggUpdatePosition();
				}
				skin._web_page.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_linkedin.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_linkedin.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_linkedin']=true;
			me._tt_ht_url_1_1_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_linkedin.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_linkedin']=false;
			me._tt_ht_url_1_1_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_linkedin.ontouchend=function (e) {
			me.elementMouseOver['ht_linkedin']=false;
			me._tt_ht_url_1_1_1.logicBlock_visible();
		}
		me._ht_linkedin.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image_1_1_1_1=document.createElement('div');
		els=me._ht_url_image_1_1_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NC43IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDY0IDY0Ljc7IiB5PSIwcHgiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OT'+
			'kveGxpbmsiPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8Y2lyY2xlIGN5PSIzMiIgY3g9IjMyIiByPSIzMSIvPgogPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ2LjYsNDMuOGMwLDEuNy0xLjMsMi45LTIuOSwyLjlIMjAuNGMtMS43LDAtMi45LTEuMy0yLjktMi45VjIwLjJjMC0xLjcsMS4zLTIuOSwyLjktMi45aDIzLjMmI3hkOyYjeGE7JiN4OTtjMS43LDAsMi45LDEuMywyLjksMi45QzQ2LjYsMjAuMiw0Ni42LDQzLjgsNDYuNiw0My44eiIvPgogPGc+CiAgPHBhdGggZD0iTTI2LjksMjQuNWMwLDEuMS0wLjgsMi0yLjEs'+
			'MmMtMS4zLDAtMi4xLTAuOS0yLjEtMnMwLjgtMiwyLjEtMlMyNi45LDIzLjQsMjYuOSwyNC41eiBNMjIuOCw0MC42VjI4aDR2MTIuN0gyMi44eiIvPgogIDxwYXRoIGQ9Ik0yOS4xLDMyYzAtMS42LTAuMS0yLjktMC4xLTRoMy40bDAuMiwxLjdoMC4xYzAuNi0wLjgsMS44LTIuMSwzLjktMi4xYzIuNiwwLDQuNSwxLjcsNC41LDUuNXY3LjRoLTR2LTcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEuNy0wLjYtMi44LTItMi44Yy0xLjEsMC0xLjcsMC43LTIsMS41Yy0wLjEsMC4yLTAuMiwwLjYtMC4yLDF2Ny4zaC00TDI5LjEsMzJMMjkuMSwzMnoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_1_1_1_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_image_1_1_1_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_1_1_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image_1_1_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image_1_1_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image_1_1_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image_1_1_1_1.style[domTransition]='';
				if (me._ht_url_image_1_1_1_1.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image_1_1_1_1.style.visibility="hidden";
					me._ht_url_image_1_1_1_1.ggVisible=false;
				}
				else {
					me._ht_url_image_1_1_1_1.style.visibility=(Number(me._ht_url_image_1_1_1_1.style.opacity)>0||!me._ht_url_image_1_1_1_1.style.opacity)?'inherit':'hidden';
					me._ht_url_image_1_1_1_1.ggVisible=true;
				}
			}
		}
		me._ht_url_image_1_1_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_linkedin.appendChild(me._ht_url_image_1_1_1_1);
		el=me._tt_ht_url_1_1_1=document.createElement('div');
		els=me._tt_ht_url_1_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url_1_1_1";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url_1_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url_1_1_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url_1_1_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url_1_1_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url_1_1_1.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url_1_1_1.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_url_1_1_1.style.top='-47px';
					me._tt_ht_url_1_1_1.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_url_1_1_1.ggDx=0;
					me._tt_ht_url_1_1_1.style.top='24px';
					me._tt_ht_url_1_1_1.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_url_1_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_linkedin'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url_1_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url_1_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url_1_1_1.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url_1_1_1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url_1_1_1.style.visibility=(Number(me._tt_ht_url_1_1_1.style.opacity)>0||!me._tt_ht_url_1_1_1.style.opacity)?'inherit':'hidden';
					me._tt_ht_url_1_1_1.ggVisible=true;
				}
				else {
					me._tt_ht_url_1_1_1.style.visibility="hidden";
					me._tt_ht_url_1_1_1.ggVisible=false;
				}
			}
		}
		me._tt_ht_url_1_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_linkedin.appendChild(me._tt_ht_url_1_1_1);
		me.__div = me._ht_linkedin;
	};
	function SkinHotspotClass_ht_node_zoom(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_zoom=document.createElement('div');
		el.ggId="ht_node_zoom";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_zoom.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_zoom.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_zoom.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_zoom.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._tt_ht_node.style[domTransition]='none';
			me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
			me._tt_ht_node.ggVisible=true;
			me.elementMouseOver['ht_node_zoom']=true;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_zoom.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._tt_ht_node.style[domTransition]='none';
			me._tt_ht_node.style.visibility='hidden';
			me._tt_ht_node.ggVisible=false;
			me.elementMouseOver['ht_node_zoom']=false;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_zoom.ontouchend=function (e) {
			me.elementMouseOver['ht_node_zoom']=false;
			me._tt_ht_node.logicBlock_visible();
		}
		me._ht_node_zoom.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_zoom'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node_zoom.appendChild(me._tt_ht_node);
		el=me._ht_node_image=document.createElement('div');
		els=me._ht_node_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4MCA4MDsiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZS'+
			'B0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30mI3hkOwoJLnN0MXtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzIuOSw1MS43Yy0wLjEsMS4zLTAuMiwyLjUtMC4zLDMuNWMtMC4xLDAuNi0wLjEsMS0wLjEsMS4yYy0wLjIsMi4xLTIsNC4zLTMuNSw0LjZsLTAuMywwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAtMC4zLDAuMS0wLjUsMC4xYy0wLjUsMC4xLTEuMSwwLjMtMS43'+
			'LDAuNGMtMS45LDAuNS00LjEsMC45LTYuNiwxLjNjLTYuNCwxLjEtMTMuMiwxLjgtMTkuOSwxLjljLTYuOC0wLjEtMTMuNy0wLjktMjAuMy0yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuMy0wLjQtNC40LTAuOC02LjItMS4zYy0xLjEtMC4zLTEuOC0wLjQtMi4xLTAuNUwxMSw2MWMtMS41LTAuMy0zLjMtMi41LTMuNS00LjRjMC0wLjMtMC4xLTAuOC0wLjItMS40Yy0wLjEtMS0wLjItMi4yLTAuMy0zLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0M2LjgsNDgsNi42LDQ0LDYuNiw0MHMwLjItOCwwLjUtMTEuN2MwLjEtMS4zLDAuMi0yLjUsMC4zLTMuNWMwLjEtMC42LDAuMS0xLDAuMS0xLjJjMC4yLTIuMS'+
			'wyLTQuMywzLjUtNC42bDAuMy0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC4xLDEuMS0wLjMsMi4xLTAuNWMxLjgtMC40LDMuOS0wLjksNi4yLTEuM2M2LjUtMS4yLDEzLjUtMS45LDIwLjUtMmM2LjYsMC4xLDEzLjQsMC44LDE5LjgsMS45YzIuNCwwLjQsNC42LDAuOSw2LjYsMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LDAuMiwxLjMsMC4zLDEuNywwLjRjMC4zLDAuMSwwLjUsMC4xLDAuNSwwLjFsMC4zLDAuMWMxLjUsMC4zLDMuMywyLjUsMy41LDQuNGwwLDAuMmMwLDAuMiwwLjEsMC42LDAuMSwxLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEsMSwwLjIsMi4yLDAuMywzLjVDNzMu'+
			'MiwzMiw3My40LDM2LDczLjQsNDBDNzMuNCw0NCw3My4yLDQ4LDcyLjksNTEuN0w3Mi45LDUxLjdMNzIuOSw1MS43eiBNNDAsNzIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy01LjQsMC0xMC41LTEuMy0xNS4yLTMuN2M0LjUsMC42LDkuNiwxLjEsMTUuMiwxLjJjNS41LTAuMSwxMC43LTAuNiwxNS4yLTEuMkM1MC42LDcxLjYsNDUuNCw3Mi45LDQwLDcyLjkgTTQwLDcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUuNCwwLDEwLjUsMS4zLDE1LjEsMy43Yy00LjQtMC42LTkuNi0xLjEtMTUuMS0xLjFjLTUuNSwwLjEtMTAuNywwLjYtMTUuMSwxLjJDMjkuNSw4LjQsMzQuNiw3LjEsNDAsNy4xTDQwLDcuMU'+
			'w0MCw3LjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTc3LjgsMjIuOGMtMC40LTQuMi0zLjktOC4zLTcuNy05LjJjMCwwLTEuNS0wLjQtNC0xYy0wLjEtMC4yLTAuMy0wLjQtMC41LTAuNkM1OC44LDUuNyw0OS43LDIsNDAsMiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzMwLDIsMjAuNiw1LjksMTMuNiwxMi44Yy0yLjQsMC41LTMuNywwLjktMy43LDAuOWMtMy44LDAuOS03LjIsNS03LjcsOS4yYzAsMC0xLDcuNi0xLDE3LjFjMCw5LjUsMSwxNy4xLDEsMTcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNCw0LjIsMy45LDguMyw3LjcsOS4yYzAsMCwxLjMsMC40LDMuNywwLjlDMjAuNiw3NCwzMCw3'+
			'OCw0MCw3OGM5LjksMCwxOS4yLTMuOCwyNi4yLTEwLjVjMC4xLTAuMSwwLjEtMC4yLDAuMi0wLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjQtMC41LDMuOC0wLjksMy44LTAuOWMzLjgtMC45LDcuMi01LDcuNy05LjJjMCwwLDEtNy42LDEtMTcuMUM3OC44LDMwLjQsNzcuOCwyMi44LDc3LjgsMjIuOEw3Ny44LDIyLjhMNzcuOCwyMi44eiBNNzIuOSw1MS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwxLjMtMC4yLDIuNS0wLjMsMy41Yy0wLjEsMC42LTAuMSwxLTAuMSwxLjJjLTAuMiwyLjEtMiw0LjMtMy41LDQuNmwtMC4zLDAuMWMtMC4xLDAtMC4zLDAuMS0wLjUsMC4xJiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTtjLTAuNSwwLjEtMS4xLDAuMy0xLjcsMC40Yy0xLjksMC41LTQuMSwwLjktNi42LDEuM2MtNi40LDEuMS0xMy4yLDEuOC0xOS45LDEuOWMtNi44LTAuMS0xMy43LTAuOS0yMC4zLTImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi4zLTAuNC00LjQtMC44LTYuMi0xLjNjLTEuMS0wLjMtMS44LTAuNC0yLjEtMC41TDExLDYxYy0xLjUtMC4zLTMuMy0yLjUtMy41LTQuNGMwLTAuMy0wLjEtMC44LTAuMi0xLjRjLTAuMS0xLTAuMi0yLjItMC4zLTMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzYuOCw0OCw2LjYsNDQsNi42LDQwczAuMi04LDAuNS0xMS43YzAuMS0xLjMsMC4yLTIuNSwwLjMtMy41YzAu'+
			'MS0wLjYsMC4xLTEsMC4xLTEuMmMwLjItMi4xLDItNC4zLDMuNS00LjZsMC4zLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjEsMS4xLTAuMywyLjEtMC41YzEuOC0wLjQsMy45LTAuOSw2LjItMS4zYzYuNS0xLjIsMTMuNS0xLjksMjAuNS0yYzYuNiwwLjEsMTMuNCwwLjgsMTkuOCwxLjljMi40LDAuNCw0LjYsMC45LDYuNiwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC4yLDEuMywwLjMsMS43LDAuNGMwLjMsMC4xLDAuNSwwLjEsMC41LDAuMWwwLjMsMC4xYzEuNSwwLjMsMy4zLDIuNSwzLjUsNC40bDAsMC4yYzAsMC4yLDAuMSwwLjYsMC4xLDEuMiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7YzAuMSwxLDAuMiwyLjIsMC4zLDMuNUM3My4yLDMyLDczLjQsMzYsNzMuNCw0MEM3My40LDQ0LDczLjIsNDgsNzIuOSw1MS43TDcyLjksNTEuN0w3Mi45LDUxLjd6IE00MCw3Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTUuNCwwLTEwLjUtMS4zLTE1LjItMy43YzQuNSwwLjYsOS42LDEuMSwxNS4yLDEuMmM1LjUtMC4xLDEwLjctMC42LDE1LjItMS4yQzUwLjYsNzEuNiw0NS40LDcyLjksNDAsNzIuOSBNNDAsNy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS40LDAsMTAuNSwxLjMsMTUuMSwzLjdjLTQuNC0wLjYtOS42LTEuMS0xNS4xLTEuMWMtNS41LDAuMS0xMC43LDAuNi0xNS4xLDEuMkMyOS41'+
			'LDguNCwzNC42LDcuMSw0MCw3LjFMNDAsNy4xTDQwLDcuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8xIj4KICA8cGF0aCBkPSJNNDMuMyw0OS44bDkuMiw5LjJjMS41LDEuNSwzLjgsMS41LDUuNCwwYzEuNS0xLjUsMS41LTMuOCwwLTUuNGwtOS4yLTkuMmMzLjgtNi4zLDMuMS0xNC40LTIuMy0xOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTYuMy02LjMtMTYuNC02LjMtMjIuNywwcy02LjQsMTYuNi0wLjEsMjIuN0MyOC45LDUyLjksMzcuMSw1My42LDQzLjMsNDkuOHogTTI2LjgsMjguMWM0LjQtNC40LDExLjctNC40LDE2LjEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzQuNCw0LjQsNC40LDExLj'+
			'csMCwxNi4xYy00LjQsNC40LTExLjcsNC40LTE2LjEsMEMyMi4zLDM5LjcsMjIuNCwzMi41LDI2LjgsMjguMXogTTI4LjIsMzUuOWMwLTEuMSwwLjktMiwyLTJoMi45di0zLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEuMSwwLjktMiwyLTJzMiwwLjksMiwyVjM0aDIuOGMxLjEsMCwyLDAuOSwyLDJjMCwxLjEtMC45LDItMiwyaC0zLjF2My4xYzAsMS4xLTAuOSwyLTIsMmMtMS4xLDAtMi0wLjktMi0ydi0zLjFoLTMuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LDM3LjgsMjguMiwzNi45LDI4LjIsMzUuOXoiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node_zoom.appendChild(me._ht_node_image);
		me.__div = me._ht_node_zoom;
	};
	function SkinHotspotClass_ht_node_business(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_business=document.createElement('div');
		el.ggId="ht_node_business";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_business.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_business.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_business.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_business.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._tt_ht_node_1.style[domTransition]='none';
			me._tt_ht_node_1.style.visibility=(Number(me._tt_ht_node_1.style.opacity)>0||!me._tt_ht_node_1.style.opacity)?'inherit':'hidden';
			me._tt_ht_node_1.ggVisible=true;
			me.elementMouseOver['ht_node_business']=true;
			me._tt_ht_node_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_business.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._tt_ht_node_1.style[domTransition]='none';
			me._tt_ht_node_1.style.visibility='hidden';
			me._tt_ht_node_1.ggVisible=false;
			me.elementMouseOver['ht_node_business']=false;
			me._tt_ht_node_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_business.ontouchend=function (e) {
			me.elementMouseOver['ht_node_business']=false;
			me._tt_ht_node_1.logicBlock_visible();
		}
		me._ht_node_business.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_ht_node_1=document.createElement('div');
		els=me._tt_ht_node_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_business'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node_1.style[domTransition]='';
				if (me._tt_ht_node_1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node_1.style.visibility=(Number(me._tt_ht_node_1.style.opacity)>0||!me._tt_ht_node_1.style.opacity)?'inherit':'hidden';
					me._tt_ht_node_1.ggVisible=true;
				}
				else {
					me._tt_ht_node_1.style.visibility="hidden";
					me._tt_ht_node_1.ggVisible=false;
				}
			}
		}
		me._tt_ht_node_1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node_business.appendChild(me._tt_ht_node_1);
		el=me._ht_node_image_1=document.createElement('div');
		els=me._ht_node_image_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4MCA4MDsiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZS'+
			'B0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30mI3hkOwoJLnN0MXtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzIuOSw1MS43Yy0wLjEsMS4zLTAuMiwyLjUtMC4zLDMuNWMtMC4xLDAuNi0wLjEsMS0wLjEsMS4yYy0wLjIsMi4xLTIsNC4zLTMuNSw0LjZsLTAuMywwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAtMC4zLDAuMS0wLjUsMC4xYy0wLjUsMC4xLTEuMSwwLjMtMS43'+
			'LDAuNGMtMS45LDAuNS00LjEsMC45LTYuNiwxLjNjLTYuNCwxLjEtMTMuMiwxLjgtMTkuOSwxLjljLTYuOC0wLjEtMTMuNy0wLjktMjAuMy0yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuMy0wLjQtNC40LTAuOC02LjItMS4zYy0xLjEtMC4zLTEuOC0wLjQtMi4xLTAuNUwxMSw2MWMtMS41LTAuMy0zLjMtMi41LTMuNS00LjRjMC0wLjMtMC4xLTAuOC0wLjItMS40Yy0wLjEtMS0wLjItMi4yLTAuMy0zLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0M2LjgsNDgsNi42LDQ0LDYuNiw0MHMwLjItOCwwLjUtMTEuN2MwLjEtMS4zLDAuMi0yLjUsMC4zLTMuNWMwLjEtMC42LDAuMS0xLDAuMS0xLjJjMC4yLTIuMS'+
			'wyLTQuMywzLjUtNC42bDAuMy0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC4xLDEuMS0wLjMsMi4xLTAuNWMxLjgtMC40LDMuOS0wLjksNi4yLTEuM2M2LjUtMS4yLDEzLjUtMS45LDIwLjUtMmM2LjYsMC4xLDEzLjQsMC44LDE5LjgsMS45YzIuNCwwLjQsNC42LDAuOSw2LjYsMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LDAuMiwxLjMsMC4zLDEuNywwLjRjMC4zLDAuMSwwLjUsMC4xLDAuNSwwLjFsMC4zLDAuMWMxLjUsMC4zLDMuMywyLjUsMy41LDQuNGwwLDAuMmMwLDAuMiwwLjEsMC42LDAuMSwxLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEsMSwwLjIsMi4yLDAuMywzLjVDNzMu'+
			'MiwzMiw3My40LDM2LDczLjQsNDBDNzMuNCw0NCw3My4yLDQ4LDcyLjksNTEuN0w3Mi45LDUxLjdMNzIuOSw1MS43eiBNNDAsNzIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy01LjQsMC0xMC41LTEuMy0xNS4yLTMuN2M0LjUsMC42LDkuNiwxLjEsMTUuMiwxLjJjNS41LTAuMSwxMC43LTAuNiwxNS4yLTEuMkM1MC42LDcxLjYsNDUuNCw3Mi45LDQwLDcyLjkgTTQwLDcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUuNCwwLDEwLjUsMS4zLDE1LjEsMy43Yy00LjQtMC42LTkuNi0xLjEtMTUuMS0xLjFjLTUuNSwwLjEtMTAuNywwLjYtMTUuMSwxLjJDMjkuNSw4LjQsMzQuNiw3LjEsNDAsNy4xTDQwLDcuMU'+
			'w0MCw3LjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTc3LjgsMjIuOGMtMC40LTQuMi0zLjktOC4zLTcuNy05LjJjMCwwLTEuNS0wLjQtNC0xYy0wLjEtMC4yLTAuMy0wLjQtMC41LTAuNkM1OC44LDUuNyw0OS43LDIsNDAsMiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzMwLDIsMjAuNiw1LjksMTMuNiwxMi44Yy0yLjQsMC41LTMuNywwLjktMy43LDAuOWMtMy44LDAuOS03LjIsNS03LjcsOS4yYzAsMC0xLDcuNi0xLDE3LjFjMCw5LjUsMSwxNy4xLDEsMTcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNCw0LjIsMy45LDguMyw3LjcsOS4yYzAsMCwxLjMsMC40LDMuNywwLjlDMjAuNiw3NCwzMCw3'+
			'OCw0MCw3OGM5LjksMCwxOS4yLTMuOCwyNi4yLTEwLjVjMC4xLTAuMSwwLjEtMC4yLDAuMi0wLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjQtMC41LDMuOC0wLjksMy44LTAuOWMzLjgtMC45LDcuMi01LDcuNy05LjJjMCwwLDEtNy42LDEtMTcuMUM3OC44LDMwLjQsNzcuOCwyMi44LDc3LjgsMjIuOEw3Ny44LDIyLjhMNzcuOCwyMi44eiBNNzIuOSw1MS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwxLjMtMC4yLDIuNS0wLjMsMy41Yy0wLjEsMC42LTAuMSwxLTAuMSwxLjJjLTAuMiwyLjEtMiw0LjMtMy41LDQuNmwtMC4zLDAuMWMtMC4xLDAtMC4zLDAuMS0wLjUsMC4xJiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTtjLTAuNSwwLjEtMS4xLDAuMy0xLjcsMC40Yy0xLjksMC41LTQuMSwwLjktNi42LDEuM2MtNi40LDEuMS0xMy4yLDEuOC0xOS45LDEuOWMtNi44LTAuMS0xMy43LTAuOS0yMC4zLTImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi4zLTAuNC00LjQtMC44LTYuMi0xLjNjLTEuMS0wLjMtMS44LTAuNC0yLjEtMC41TDExLDYxYy0xLjUtMC4zLTMuMy0yLjUtMy41LTQuNGMwLTAuMy0wLjEtMC44LTAuMi0xLjRjLTAuMS0xLTAuMi0yLjItMC4zLTMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzYuOCw0OCw2LjYsNDQsNi42LDQwczAuMi04LDAuNS0xMS43YzAuMS0xLjMsMC4yLTIuNSwwLjMtMy41YzAu'+
			'MS0wLjYsMC4xLTEsMC4xLTEuMmMwLjItMi4xLDItNC4zLDMuNS00LjZsMC4zLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjEsMS4xLTAuMywyLjEtMC41YzEuOC0wLjQsMy45LTAuOSw2LjItMS4zYzYuNS0xLjIsMTMuNS0xLjksMjAuNS0yYzYuNiwwLjEsMTMuNCwwLjgsMTkuOCwxLjljMi40LDAuNCw0LjYsMC45LDYuNiwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC4yLDEuMywwLjMsMS43LDAuNGMwLjMsMC4xLDAuNSwwLjEsMC41LDAuMWwwLjMsMC4xYzEuNSwwLjMsMy4zLDIuNSwzLjUsNC40bDAsMC4yYzAsMC4yLDAuMSwwLjYsMC4xLDEuMiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7YzAuMSwxLDAuMiwyLjIsMC4zLDMuNUM3My4yLDMyLDczLjQsMzYsNzMuNCw0MEM3My40LDQ0LDczLjIsNDgsNzIuOSw1MS43TDcyLjksNTEuN0w3Mi45LDUxLjd6IE00MCw3Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTUuNCwwLTEwLjUtMS4zLTE1LjItMy43YzQuNSwwLjYsOS42LDEuMSwxNS4yLDEuMmM1LjUtMC4xLDEwLjctMC42LDE1LjItMS4yQzUwLjYsNzEuNiw0NS40LDcyLjksNDAsNzIuOSBNNDAsNy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS40LDAsMTAuNSwxLjMsMTUuMSwzLjdjLTQuNC0wLjYtOS42LTEuMS0xNS4xLTEuMWMtNS41LDAuMS0xMC43LDAuNi0xNS4xLDEuMkMyOS41'+
			'LDguNCwzNC42LDcuMSw0MCw3LjFMNDAsNy4xTDQwLDcuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8xIj4KICA8cGF0aCBkPSJNNTIuOCwzNy44VjM5SDI4LjZ2LTEuMmMwLTAuOS0wLjYtMS4yLTEuMi0xLjJsMCwwYy0wLjksMC0xLjIsMC42LTEuMiwxLjJWMzloLTIuOHYtOGgzNXY4aC0yLjd2LTEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC45LTAuNi0xLjItMS4yLTEuMmwwLDBDNTMuMSwzNi40LDUyLjgsMzcsNTIuOCwzNy44eiBNMjguNiwyNC40YzAtMi4yLDEuOC0zLjksMy45LTMuOWgxNi4yYzIuMiwwLDMuOSwxLjgsMy45LDMuOXYyLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuOS'+
			'0wLjYsMS4yLTEuMiwxLjJsMCwwYy0wLjksMC0xLjItMC42LTEuMi0xLjJ2LTIuN2MwLTAuOS0wLjYtMS4yLTEuMi0xLjJIMzIuNmMtMC45LDAtMS4yLDAuNi0xLjIsMS4ydjIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC45LTAuNiwxLjItMS4yLDEuMmwwLDBjLTAuOSwwLTEuMi0wLjYtMS4yLTEuMnYtMi43SDI4LjZ6IE02My4zLDUwLjRjMCwyLjUtMi4xLDQuOC00LjgsNC44SDIyLjZjLTIuNSwwLTQuOC0yLjEtNC44LTQuOFYzMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjksMC42LTEuMiwxLjItMS4yaDEuM3Y5LjJjMCwwLjksMC42LDEuMiwxLjIsMS4yaDMuOXYxLjZjMCwwLjksMC42'+
			'LDEuMiwxLjIsMS4ybDAsMGMwLjksMCwxLjItMC42LDEuMi0xLjJ2LTEuMmgyNC4xdjEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC45LDAuNiwxLjIsMS4yLDEuMmwwLDBjMC45LDAsMS4yLTAuNiwxLjItMS4ydi0xLjJoMy45YzAuOSwwLDEuMi0wLjYsMS4yLTEuMnYtOS4yaDEuMmMwLjksMCwxLjIsMC42LDEuMiwxLjJ2MTcuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzYyLjEsNTAuNCw2My4zLDUwLjQsNjMuMyw1MC40eiIvPgogPC9nPgo8L3N2Zz4K';
		me._ht_node_image_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_1";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node_business.appendChild(me._ht_node_image_1);
		me.__div = me._ht_node_business;
	};
	function SkinHotspotClass_ht_node_enter(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_enter=document.createElement('div');
		el.ggId="ht_node_enter";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_enter.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_enter.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_enter.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_enter.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin._tt_ht_node.style[domTransition]='none';
			skin._tt_ht_node.style.visibility=(Number(skin._tt_ht_node.style.opacity)>0||!skin._tt_ht_node.style.opacity)?'inherit':'hidden';
			skin._tt_ht_node.ggVisible=true;
			me.elementMouseOver['ht_node_enter']=true;
			me._tt_ht_node_1_1.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_enter.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin._tt_ht_node.style[domTransition]='none';
			skin._tt_ht_node.style.visibility='hidden';
			skin._tt_ht_node.ggVisible=false;
			me.elementMouseOver['ht_node_enter']=false;
			me._tt_ht_node_1_1.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_enter.ontouchend=function (e) {
			me.elementMouseOver['ht_node_enter']=false;
			me._tt_ht_node_1_1.logicBlock_visible();
		}
		me._ht_node_enter.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_ht_node_1_1=document.createElement('div');
		els=me._tt_ht_node_1_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node_1_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node_1_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_enter'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node_1_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node_1_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node_1_1.style[domTransition]='';
				if (me._tt_ht_node_1_1.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node_1_1.style.visibility=(Number(me._tt_ht_node_1_1.style.opacity)>0||!me._tt_ht_node_1_1.style.opacity)?'inherit':'hidden';
					me._tt_ht_node_1_1.ggVisible=true;
				}
				else {
					me._tt_ht_node_1_1.style.visibility="hidden";
					me._tt_ht_node_1_1.ggVisible=false;
				}
			}
		}
		me._tt_ht_node_1_1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node_enter.appendChild(me._tt_ht_node_1_1);
		el=me._ht_node_image_1_1=document.createElement('div');
		els=me._ht_node_image_1_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4MCA4MDsiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZS'+
			'B0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30mI3hkOwoJLnN0MXtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzIuOSw1MS43Yy0wLjEsMS4zLTAuMiwyLjUtMC4zLDMuNWMtMC4xLDAuNi0wLjEsMS0wLjEsMS4yYy0wLjIsMi4xLTIsNC4zLTMuNSw0LjZsLTAuMywwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAtMC4zLDAuMS0wLjUsMC4xYy0wLjUsMC4xLTEuMSwwLjMtMS43'+
			'LDAuNGMtMS45LDAuNS00LjEsMC45LTYuNiwxLjNjLTYuNCwxLjEtMTMuMiwxLjgtMTkuOSwxLjljLTYuOC0wLjEtMTMuNy0wLjktMjAuMy0yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuMy0wLjQtNC40LTAuOC02LjItMS4zYy0xLjEtMC4zLTEuOC0wLjQtMi4xLTAuNUwxMSw2MWMtMS41LTAuMy0zLjMtMi41LTMuNS00LjRjMC0wLjMtMC4xLTAuOC0wLjItMS40Yy0wLjEtMS0wLjItMi4yLTAuMy0zLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0M2LjgsNDgsNi42LDQ0LDYuNiw0MHMwLjItOCwwLjUtMTEuN2MwLjEtMS4zLDAuMi0yLjUsMC4zLTMuNWMwLjEtMC42LDAuMS0xLDAuMS0xLjJjMC4yLTIuMS'+
			'wyLTQuMywzLjUtNC42bDAuMy0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC4xLDEuMS0wLjMsMi4xLTAuNWMxLjgtMC40LDMuOS0wLjksNi4yLTEuM2M2LjUtMS4yLDEzLjUtMS45LDIwLjUtMmM2LjYsMC4xLDEzLjQsMC44LDE5LjgsMS45YzIuNCwwLjQsNC42LDAuOSw2LjYsMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LDAuMiwxLjMsMC4zLDEuNywwLjRjMC4zLDAuMSwwLjUsMC4xLDAuNSwwLjFsMC4zLDAuMWMxLjUsMC4zLDMuMywyLjUsMy41LDQuNGwwLDAuMmMwLDAuMiwwLjEsMC42LDAuMSwxLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEsMSwwLjIsMi4yLDAuMywzLjVDNzMu'+
			'MiwzMiw3My40LDM2LDczLjQsNDBDNzMuNCw0NCw3My4yLDQ4LDcyLjksNTEuN0w3Mi45LDUxLjdMNzIuOSw1MS43eiBNNDAsNzIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy01LjQsMC0xMC41LTEuMy0xNS4yLTMuN2M0LjUsMC42LDkuNiwxLjEsMTUuMiwxLjJjNS41LTAuMSwxMC43LTAuNiwxNS4yLTEuMkM1MC42LDcxLjYsNDUuNCw3Mi45LDQwLDcyLjkgTTQwLDcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUuNCwwLDEwLjUsMS4zLDE1LjEsMy43Yy00LjQtMC42LTkuNi0xLjEtMTUuMS0xLjFjLTUuNSwwLjEtMTAuNywwLjYtMTUuMSwxLjJDMjkuNSw4LjQsMzQuNiw3LjEsNDAsNy4xTDQwLDcuMU'+
			'w0MCw3LjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTc3LjgsMjIuOGMtMC40LTQuMi0zLjktOC4zLTcuNy05LjJjMCwwLTEuNS0wLjQtNC0xYy0wLjEtMC4yLTAuMy0wLjQtMC41LTAuNkM1OC44LDUuNyw0OS43LDIsNDAsMiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzMwLDIsMjAuNiw1LjksMTMuNiwxMi44Yy0yLjQsMC41LTMuNywwLjktMy43LDAuOWMtMy44LDAuOS03LjIsNS03LjcsOS4yYzAsMC0xLDcuNi0xLDE3LjFjMCw5LjUsMSwxNy4xLDEsMTcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNCw0LjIsMy45LDguMyw3LjcsOS4yYzAsMCwxLjMsMC40LDMuNywwLjlDMjAuNiw3NCwzMCw3'+
			'OCw0MCw3OGM5LjksMCwxOS4yLTMuOCwyNi4yLTEwLjVjMC4xLTAuMSwwLjEtMC4yLDAuMi0wLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjQtMC41LDMuOC0wLjksMy44LTAuOWMzLjgtMC45LDcuMi01LDcuNy05LjJjMCwwLDEtNy42LDEtMTcuMUM3OC44LDMwLjQsNzcuOCwyMi44LDc3LjgsMjIuOEw3Ny44LDIyLjhMNzcuOCwyMi44eiBNNzIuOSw1MS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwxLjMtMC4yLDIuNS0wLjMsMy41Yy0wLjEsMC42LTAuMSwxLTAuMSwxLjJjLTAuMiwyLjEtMiw0LjMtMy41LDQuNmwtMC4zLDAuMWMtMC4xLDAtMC4zLDAuMS0wLjUsMC4xJiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTtjLTAuNSwwLjEtMS4xLDAuMy0xLjcsMC40Yy0xLjksMC41LTQuMSwwLjktNi42LDEuM2MtNi40LDEuMS0xMy4yLDEuOC0xOS45LDEuOWMtNi44LTAuMS0xMy43LTAuOS0yMC4zLTImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi4zLTAuNC00LjQtMC44LTYuMi0xLjNjLTEuMS0wLjMtMS44LTAuNC0yLjEtMC41TDExLDYxYy0xLjUtMC4zLTMuMy0yLjUtMy41LTQuNGMwLTAuMy0wLjEtMC44LTAuMi0xLjRjLTAuMS0xLTAuMi0yLjItMC4zLTMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzYuOCw0OCw2LjYsNDQsNi42LDQwczAuMi04LDAuNS0xMS43YzAuMS0xLjMsMC4yLTIuNSwwLjMtMy41YzAu'+
			'MS0wLjYsMC4xLTEsMC4xLTEuMmMwLjItMi4xLDItNC4zLDMuNS00LjZsMC4zLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjEsMS4xLTAuMywyLjEtMC41YzEuOC0wLjQsMy45LTAuOSw2LjItMS4zYzYuNS0xLjIsMTMuNS0xLjksMjAuNS0yYzYuNiwwLjEsMTMuNCwwLjgsMTkuOCwxLjljMi40LDAuNCw0LjYsMC45LDYuNiwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC4yLDEuMywwLjMsMS43LDAuNGMwLjMsMC4xLDAuNSwwLjEsMC41LDAuMWwwLjMsMC4xYzEuNSwwLjMsMy4zLDIuNSwzLjUsNC40bDAsMC4yYzAsMC4yLDAuMSwwLjYsMC4xLDEuMiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7YzAuMSwxLDAuMiwyLjIsMC4zLDMuNUM3My4yLDMyLDczLjQsMzYsNzMuNCw0MEM3My40LDQ0LDczLjIsNDgsNzIuOSw1MS43TDcyLjksNTEuN0w3Mi45LDUxLjd6IE00MCw3Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTUuNCwwLTEwLjUtMS4zLTE1LjItMy43YzQuNSwwLjYsOS42LDEuMSwxNS4yLDEuMmM1LjUtMC4xLDEwLjctMC42LDE1LjItMS4yQzUwLjYsNzEuNiw0NS40LDcyLjksNDAsNzIuOSBNNDAsNy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS40LDAsMTAuNSwxLjMsMTUuMSwzLjdjLTQuNC0wLjYtOS42LTEuMS0xNS4xLTEuMWMtNS41LDAuMS0xMC43LDAuNi0xNS4xLDEuMkMyOS41'+
			'LDguNCwzNC42LDcuMSw0MCw3LjFMNDAsNy4xTDQwLDcuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8xIj4KICA8ZyBpZD0iTGF5ZXJfMV8xXyI+CiAgIDxnPgogICAgPHBhdGggZD0iTTQ0LjQsMzkuNUwzMS42LDI2LjljLTAuNS0wLjUtMS4yLTAuMS0xLjIsMC41djQuOWMwLDAuNC0wLjIsMC42LTAuNiwwLjZoLTguMmMtMC40LDAtMC42LDAuMi0wLjYsMC42djEyLjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwwLjQsMC4yLDAuNiwwLjYsMC42aDguMmMwLjQsMCwwLjYsMC4yLDAuNiwwLjZ2NC45YzAsMC42LDAuNywwLjksMS4yLDAuNWwxMi44LTEyLjVDNDQuNiw0MC4zLDQ0Lj'+
			'YsMzkuOCw0NC40LDM5LjV6Ii8+CiAgICA8cGF0aCBkPSJNNTMuMiwyMUg0Mi40QzQxLjEsMjEsNDAsMjIsNDAsMjMuM2MwLDEuMywxLjEsMi40LDIuNCwyLjRINTNjMC42LDAsMS4yLDAuNiwxLjIsMS4ydjI2LjJjMCwwLjYtMC42LDEuMi0xLjIsMS4ySDQyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjLTEuMywwLTIuNCwxLjEtMi40LDIuNGMwLDEuMywxLjEsMi40LDIuNCwyLjRINTNjMy4zLDAsNS45LTIuNyw1LjktNS45VjI2LjlDNTkuMSwyMy42LDU2LjQsMjEsNTMuMiwyMXoiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_node_image_1_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_1_1";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image_1_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_1_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node_enter.appendChild(me._ht_node_image_1_1);
		me.__div = me._ht_node_enter;
	};
	function SkinHotspotClass_ht_node_nachh(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_nachh=document.createElement('div');
		el.ggId="ht_node_nachh";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_nachh.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_nachh.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_nachh.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_nachh.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me._tt_ht_node_nach.style[domTransition]='none';
			me._tt_ht_node_nach.style.visibility=(Number(me._tt_ht_node_nach.style.opacity)>0||!me._tt_ht_node_nach.style.opacity)?'inherit':'hidden';
			me._tt_ht_node_nach.ggVisible=true;
			me.elementMouseOver['ht_node_nachh']=true;
			me._tt_ht_node_nach.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_nachh.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me._tt_ht_node_nach.style[domTransition]='none';
			me._tt_ht_node_nach.style.visibility='hidden';
			me._tt_ht_node_nach.ggVisible=false;
			me.elementMouseOver['ht_node_nachh']=false;
			me._tt_ht_node_nach.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node_nachh.ontouchend=function (e) {
			me.elementMouseOver['ht_node_nachh']=false;
			me._tt_ht_node_nach.logicBlock_visible();
		}
		me._ht_node_nachh.ggUpdatePosition=function (useTransition) {
		}
		el=me._tt_ht_node_nach=document.createElement('div');
		els=me._tt_ht_node_nach__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node_nach";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : 21px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node_nach.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node_nach.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node_nachh'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node_nach.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node_nach.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node_nach.style[domTransition]='';
				if (me._tt_ht_node_nach.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node_nach.style.visibility=(Number(me._tt_ht_node_nach.style.opacity)>0||!me._tt_ht_node_nach.style.opacity)?'inherit':'hidden';
					me._tt_ht_node_nach.ggVisible=true;
				}
				else {
					me._tt_ht_node_nach.style.visibility="hidden";
					me._tt_ht_node_nach.ggVisible=false;
				}
			}
		}
		me._tt_ht_node_nach.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node_nachh.appendChild(me._tt_ht_node_nach);
		el=me._ht_node_image_1_3=document.createElement('div');
		els=me._ht_node_image_1_3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA4MCA4MDsiIHk9IjBweCIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KIDxzdHlsZS'+
			'B0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30mI3hkOwoJLnN0MXtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9JiN4ZDsKPC9zdHlsZT4KIDxnIGlkPSJMYXllcl8yIj4KICA8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNzIuOSw1MS43Yy0wLjEsMS4zLTAuMiwyLjUtMC4zLDMuNWMtMC4xLDAuNi0wLjEsMS0wLjEsMS4yYy0wLjIsMi4xLTIsNC4zLTMuNSw0LjZsLTAuMywwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAtMC4zLDAuMS0wLjUsMC4xYy0wLjUsMC4xLTEuMSwwLjMtMS43'+
			'LDAuNGMtMS45LDAuNS00LjEsMC45LTYuNiwxLjNjLTYuNCwxLjEtMTMuMiwxLjgtMTkuOSwxLjljLTYuOC0wLjEtMTMuNy0wLjktMjAuMy0yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuMy0wLjQtNC40LTAuOC02LjItMS4zYy0xLjEtMC4zLTEuOC0wLjQtMi4xLTAuNUwxMSw2MWMtMS41LTAuMy0zLjMtMi41LTMuNS00LjRjMC0wLjMtMC4xLTAuOC0wLjItMS40Yy0wLjEtMS0wLjItMi4yLTAuMy0zLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0M2LjgsNDgsNi42LDQ0LDYuNiw0MHMwLjItOCwwLjUtMTEuN2MwLjEtMS4zLDAuMi0yLjUsMC4zLTMuNWMwLjEtMC42LDAuMS0xLDAuMS0xLjJjMC4yLTIuMS'+
			'wyLTQuMywzLjUtNC42bDAuMy0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC4xLDEuMS0wLjMsMi4xLTAuNWMxLjgtMC40LDMuOS0wLjksNi4yLTEuM2M2LjUtMS4yLDEzLjUtMS45LDIwLjUtMmM2LjYsMC4xLDEzLjQsMC44LDE5LjgsMS45YzIuNCwwLjQsNC42LDAuOSw2LjYsMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LDAuMiwxLjMsMC4zLDEuNywwLjRjMC4zLDAuMSwwLjUsMC4xLDAuNSwwLjFsMC4zLDAuMWMxLjUsMC4zLDMuMywyLjUsMy41LDQuNGwwLDAuMmMwLDAuMiwwLjEsMC42LDAuMSwxLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEsMSwwLjIsMi4yLDAuMywzLjVDNzMu'+
			'MiwzMiw3My40LDM2LDczLjQsNDBDNzMuNCw0NCw3My4yLDQ4LDcyLjksNTEuN0w3Mi45LDUxLjdMNzIuOSw1MS43eiBNNDAsNzIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy01LjQsMC0xMC41LTEuMy0xNS4yLTMuN2M0LjUsMC42LDkuNiwxLjEsMTUuMiwxLjJjNS41LTAuMSwxMC43LTAuNiwxNS4yLTEuMkM1MC42LDcxLjYsNDUuNCw3Mi45LDQwLDcyLjkgTTQwLDcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUuNCwwLDEwLjUsMS4zLDE1LjEsMy43Yy00LjQtMC42LTkuNi0xLjEtMTUuMS0xLjFjLTUuNSwwLjEtMTAuNywwLjYtMTUuMSwxLjJDMjkuNSw4LjQsMzQuNiw3LjEsNDAsNy4xTDQwLDcuMU'+
			'w0MCw3LjF6Ii8+CiAgPHBhdGggY2xhc3M9InN0MSIgZD0iTTc3LjgsMjIuOGMtMC40LTQuMi0zLjktOC4zLTcuNy05LjJjMCwwLTEuNS0wLjQtNC0xYy0wLjEtMC4yLTAuMy0wLjQtMC41LTAuNkM1OC44LDUuNyw0OS43LDIsNDAsMiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzMwLDIsMjAuNiw1LjksMTMuNiwxMi44Yy0yLjQsMC41LTMuNywwLjktMy43LDAuOWMtMy44LDAuOS03LjIsNS03LjcsOS4yYzAsMC0xLDcuNi0xLDE3LjFjMCw5LjUsMSwxNy4xLDEsMTcuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNCw0LjIsMy45LDguMyw3LjcsOS4yYzAsMCwxLjMsMC40LDMuNywwLjlDMjAuNiw3NCwzMCw3'+
			'OCw0MCw3OGM5LjksMCwxOS4yLTMuOCwyNi4yLTEwLjVjMC4xLTAuMSwwLjEtMC4yLDAuMi0wLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjQtMC41LDMuOC0wLjksMy44LTAuOWMzLjgtMC45LDcuMi01LDcuNy05LjJjMCwwLDEtNy42LDEtMTcuMUM3OC44LDMwLjQsNzcuOCwyMi44LDc3LjgsMjIuOEw3Ny44LDIyLjhMNzcuOCwyMi44eiBNNzIuOSw1MS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwxLjMtMC4yLDIuNS0wLjMsMy41Yy0wLjEsMC42LTAuMSwxLTAuMSwxLjJjLTAuMiwyLjEtMiw0LjMtMy41LDQuNmwtMC4zLDAuMWMtMC4xLDAtMC4zLDAuMS0wLjUsMC4xJiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTtjLTAuNSwwLjEtMS4xLDAuMy0xLjcsMC40Yy0xLjksMC41LTQuMSwwLjktNi42LDEuM2MtNi40LDEuMS0xMy4yLDEuOC0xOS45LDEuOWMtNi44LTAuMS0xMy43LTAuOS0yMC4zLTImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi4zLTAuNC00LjQtMC44LTYuMi0xLjNjLTEuMS0wLjMtMS44LTAuNC0yLjEtMC41TDExLDYxYy0xLjUtMC4zLTMuMy0yLjUtMy41LTQuNGMwLTAuMy0wLjEtMC44LTAuMi0xLjRjLTAuMS0xLTAuMi0yLjItMC4zLTMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzYuOCw0OCw2LjYsNDQsNi42LDQwczAuMi04LDAuNS0xMS43YzAuMS0xLjMsMC4yLTIuNSwwLjMtMy41YzAu'+
			'MS0wLjYsMC4xLTEsMC4xLTEuMmMwLjItMi4xLDItNC4zLDMuNS00LjZsMC4zLTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjEsMS4xLTAuMywyLjEtMC41YzEuOC0wLjQsMy45LTAuOSw2LjItMS4zYzYuNS0xLjIsMTMuNS0xLjksMjAuNS0yYzYuNiwwLjEsMTMuNCwwLjgsMTkuOCwxLjljMi40LDAuNCw0LjYsMC45LDYuNiwxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjcsMC4yLDEuMywwLjMsMS43LDAuNGMwLjMsMC4xLDAuNSwwLjEsMC41LDAuMWwwLjMsMC4xYzEuNSwwLjMsMy4zLDIuNSwzLjUsNC40bDAsMC4yYzAsMC4yLDAuMSwwLjYsMC4xLDEuMiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7YzAuMSwxLDAuMiwyLjIsMC4zLDMuNUM3My4yLDMyLDczLjQsMzYsNzMuNCw0MEM3My40LDQ0LDczLjIsNDgsNzIuOSw1MS43TDcyLjksNTEuN0w3Mi45LDUxLjd6IE00MCw3Mi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTUuNCwwLTEwLjUtMS4zLTE1LjItMy43YzQuNSwwLjYsOS42LDEuMSwxNS4yLDEuMmM1LjUtMC4xLDEwLjctMC42LDE1LjItMS4yQzUwLjYsNzEuNiw0NS40LDcyLjksNDAsNzIuOSBNNDAsNy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS40LDAsMTAuNSwxLjMsMTUuMSwzLjdjLTQuNC0wLjYtOS42LTEuMS0xNS4xLTEuMWMtNS41LDAuMS0xMC43LDAuNi0xNS4xLDEuMkMyOS41'+
			'LDguNCwzNC42LDcuMSw0MCw3LjFMNDAsNy4xTDQwLDcuMXoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8xIj4KICA8ZyB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBpZD0iTGF5ZXJfMV8xXyI+CiAgIDxwYXRoIGQ9Ik01Mi4xLDM1LjFsNC42LDguMmMyLjcsNS0xLjEsMTEuNS02LjcsMTEuN2MtMC4xLDAtNi44LDAtNi44LDB2Mi45bC00LjktNi41bDQuOS02Ljl2My4xYzIuMiwwLDQuMywwLDYuNi0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuMywwLDAuNy0wLjQsMC40LTAuOGMtMS40LTIuNy0yLjktNS41LTQuNS04LjFsNC42LDAuM0w1Mi4xLDM1LjFMNTIuMSwzNS'+
			'4xeiBNMzQuNSw0My44bC0yLjMtMS4yYy0wLjgsMS40LTEuNiwyLjktMi4zLDQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMiwwLjMsMC4xLDAuOCwwLjQsMC44YzIuNSwwLDUuMSwwLjEsNy42LDAuMWwtMi42LDMuN2wyLjgsMy42aC03LjhjLTUuOS0wLjEtOS42LTYuNS02LjktMTEuNWMwLTAuMSwyLjUtNC4yLDIuNS00LjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7bC0yLjUtMS40bDguNS0xLjRMMzQuNSw0My44TDM0LjUsNDMuOHogTTI4LjMsMzQuOGw0LjktOC43YzAuNC0wLjgsMC43LTEsMS4xLTEuNGMxLjYtMS43LDMuOC0yLjYsNi0yLjVjMS4xLDAuMSwxLjQsMC4yLDIsMC4z'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjgsMC42LDMuMywxLjcsNC4yLDMuMmMwLjEsMC4yLDIuOCw0LjgsMi44LDQuOGwyLjctMS42bC0xLjMsMy4zbC0yLDQuNUw0MC4yLDM2bDIuOS0xLjdjLTAuOS0xLjYtMS44LTMtMi43LTQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuMS0wLjItMC4yLTAuMi0wLjYtMC4yYy0wLjIsMC0wLjMsMC4xLTAuNCwwLjJjLTEuNiwyLjgtMy4yLDUuNi00LjgsOC40TDMzLDM0QzMzLjMsMzMuOSwyOC4zLDM0LjgsMjguMywzNC44eiBNMjMuMiwzNy45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0wyMy4yLDM3LjlMMjMuMiwzNy45TDIzLjIsMzcuOX'+
			'oiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_node_image_1_3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_image_1_3";
		el.ggDx=2;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -20px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_image_1_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_image_1_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node_nachh.appendChild(me._ht_node_image_1_3);
		me.__div = me._ht_node_nachh;
	};
	function SkinHotspotClass_polykaraf(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._polykaraf=document.createElement('div');
		el.ggId="PolyKaraf";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._polykaraf.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._polykaraf.onclick=function (e) {
			player.setMediaVisibility("Karaf","1",0);
				player.playSound("Karaf","1");
			player.setMediaVisibility("Tass","0",0);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._polykaraf.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._polykaraf.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._polykaraf.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._polykaraf.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._polykaraf.appendChild(me._rectangle_2);
		el=me._aniamted_ico2=document.createElement('div');
		el.ggId="Aniamted Ico2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._aniamted_ico2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._aniamted_ico2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_6=document.createElement('div');
		el.ggId="Rectangle 6";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #e2e2e2;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_6.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani2') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_6.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_6.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_6.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._rectangle_6.ggCurrentLogicStateScaling == 0) {
					me._rectangle_6.ggParameter.sx = 0.5;
					me._rectangle_6.ggParameter.sy = 0.5;
					me._rectangle_6.style[domTransform]=parameterToTransform(me._rectangle_6.ggParameter);
				}
				else {
					me._rectangle_6.ggParameter.sx = 1;
					me._rectangle_6.ggParameter.sy = 1;
					me._rectangle_6.style[domTransform]=parameterToTransform(me._rectangle_6.ggParameter);
				}
			}
		}
		me._rectangle_6.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_6.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_6.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_6.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._rectangle_6.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_6.style.visibility=me._rectangle_6.ggVisible?'inherit':'hidden';
					me._rectangle_6.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectangle_6.style.opacity == 0.0) { me._rectangle_6.style.visibility="hidden"; } }, 1005);
					me._rectangle_6.style.opacity=0;
				}
			}
		}
		me._rectangle_6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._aniamted_ico2.appendChild(me._rectangle_6);
		el=me._rectangle_5=document.createElement('div');
		el.ggId="Rectangle 5";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #e2e2e2;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_5.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani2') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_5.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_5.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._rectangle_5.ggCurrentLogicStateScaling == 0) {
					me._rectangle_5.ggParameter.sx = 1;
					me._rectangle_5.ggParameter.sy = 1;
					me._rectangle_5.style[domTransform]=parameterToTransform(me._rectangle_5.ggParameter);
				}
				else {
					me._rectangle_5.ggParameter.sx = 0.5;
					me._rectangle_5.ggParameter.sy = 0.5;
					me._rectangle_5.style[domTransform]=parameterToTransform(me._rectangle_5.ggParameter);
				}
			}
		}
		me._rectangle_5.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_5.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_5.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_5.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._rectangle_5.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_5.style.opacity == 0.0) { me._rectangle_5.style.visibility="hidden"; } }, 1005);
					me._rectangle_5.style.opacity=0;
				}
				else {
					me._rectangle_5.style.visibility=me._rectangle_5.ggVisible?'inherit':'hidden';
					me._rectangle_5.style.opacity=1;
				}
			}
		}
		me._rectangle_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._aniamted_ico2.appendChild(me._rectangle_5);
		me._polykaraf.appendChild(me._aniamted_ico2);
		me.__div = me._polykaraf;
	};
	function SkinHotspotClass_polytass(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._polytass=document.createElement('div');
		el.ggId="PolyTass";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._polytass.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._polytass.onclick=function (e) {
			player.setMediaVisibility("Tass","1",0);
				player.playSound("Tass","1");
			player.setMediaVisibility("Karaf","0",0);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._polytass.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._polytass.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._polytass.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._polytass.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(255,226,61,0);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 120px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._polytass.appendChild(me._rectangle_3);
		el=me._aniamted_ico=document.createElement('div');
		el.ggId="Aniamted Ico";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._aniamted_ico.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._aniamted_ico.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_sub=document.createElement('div');
		el.ggId="Rectangle sub";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #e2e2e2;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_sub.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_sub.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani2') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_sub.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_sub.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_sub.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._rectangle_sub.ggCurrentLogicStateScaling == 0) {
					me._rectangle_sub.ggParameter.sx = 0.5;
					me._rectangle_sub.ggParameter.sy = 0.5;
					me._rectangle_sub.style[domTransform]=parameterToTransform(me._rectangle_sub.ggParameter);
				}
				else {
					me._rectangle_sub.ggParameter.sx = 1;
					me._rectangle_sub.ggParameter.sy = 1;
					me._rectangle_sub.style[domTransform]=parameterToTransform(me._rectangle_sub.ggParameter);
				}
			}
		}
		me._rectangle_sub.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_sub.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_sub.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_sub.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._rectangle_sub.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_sub.style.visibility=me._rectangle_sub.ggVisible?'inherit':'hidden';
					me._rectangle_sub.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectangle_sub.style.opacity == 0.0) { me._rectangle_sub.style.visibility="hidden"; } }, 1005);
					me._rectangle_sub.style.opacity=0;
				}
			}
		}
		me._rectangle_sub.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._aniamted_ico.appendChild(me._rectangle_sub);
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #e2e2e2;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_4.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani2') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_4.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_4.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_4.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._rectangle_4.ggCurrentLogicStateScaling == 0) {
					me._rectangle_4.ggParameter.sx = 1;
					me._rectangle_4.ggParameter.sy = 1;
					me._rectangle_4.style[domTransform]=parameterToTransform(me._rectangle_4.ggParameter);
				}
				else {
					me._rectangle_4.ggParameter.sx = 0.5;
					me._rectangle_4.ggParameter.sy = 0.5;
					me._rectangle_4.style[domTransform]=parameterToTransform(me._rectangle_4.ggParameter);
				}
			}
		}
		me._rectangle_4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani2') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_4.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._rectangle_4.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_4.style.opacity == 0.0) { me._rectangle_4.style.visibility="hidden"; } }, 1005);
					me._rectangle_4.style.opacity=0;
				}
				else {
					me._rectangle_4.style.visibility=me._rectangle_4.ggVisible?'inherit':'hidden';
					me._rectangle_4.style.opacity=1;
				}
			}
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._aniamted_ico.appendChild(me._rectangle_4);
		me._polytass.appendChild(me._aniamted_ico);
		me.__div = me._polytass;
	};
	function SkinHotspotClass_ht_wall_k(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_wall_k=document.createElement('div');
		el.ggId="ht_wall_k";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_wall_k.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_wall_k.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_wall_k.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_wall_k.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_wall_k.style[domTransition]='';
				if (me._ht_wall_k.ggCurrentLogicStateVisible == 0) {
					me._ht_wall_k.style.visibility=(Number(me._ht_wall_k.style.opacity)>0||!me._ht_wall_k.style.opacity)?'inherit':'hidden';
					me._ht_wall_k.ggVisible=true;
				}
				else {
					me._ht_wall_k.style.visibility="hidden";
					me._ht_wall_k.ggVisible=false;
				}
			}
		}
		me._ht_wall_k.onclick=function (e) {
			player.setVariableValue('coffee_num', me.hotspot.title);
			player.setVariableValue('vis_image_popup', true);
			player.setVariableValue('coffee_url', me.hotspot.description);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_wall_k.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_wall_k.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_wall_k.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_wall_k.ggUpdatePosition=function (useTransition) {
		}
		el=me._tit_w=document.createElement('div');
		els=me._tit_w__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tit_w";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tit_w.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tit_w.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tit_w.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tit_w.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tit_w.style[domTransition]='left 0s, top 0s';
				if (me._tit_w.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tit_w.style.top='-47px';
					me._tit_w.ggUpdatePosition(true);
				}
				else {
					me._tit_w.ggDx=0;
					me._tit_w.style.top='24px';
					me._tit_w.ggUpdatePosition(true);
				}
			}
		}
		me._tit_w.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_image_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('vis_info_popup_v') == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((player.getVariableValue('vis_info_popup_v') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else if (
				((player.getVariableValue('vis_video_youtube') == true))
			)
			{
				newLogicStateVisible = 3;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tit_w.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tit_w.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tit_w.style[domTransition]='left 0s, top 0s';
				if (me._tit_w.ggCurrentLogicStateVisible == 0) {
					me._tit_w.style.visibility="hidden";
					me._tit_w.ggVisible=false;
				}
				else if (me._tit_w.ggCurrentLogicStateVisible == 1) {
					me._tit_w.style.visibility="hidden";
					me._tit_w.ggVisible=false;
				}
				else if (me._tit_w.ggCurrentLogicStateVisible == 2) {
					me._tit_w.style.visibility="hidden";
					me._tit_w.ggVisible=false;
				}
				else if (me._tit_w.ggCurrentLogicStateVisible == 3) {
					me._tit_w.style.visibility="hidden";
					me._tit_w.ggVisible=false;
				}
				else {
					me._tit_w.style.visibility=(Number(me._tit_w.style.opacity)>0||!me._tit_w.style.opacity)?'inherit':'hidden';
					me._tit_w.ggVisible=true;
				}
			}
		}
		me._tit_w.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_wall_k.appendChild(me._tit_w);
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxjaXJjbGUgY3k9IjMyIiBjeD0iMzIiIHI9IjMxIi8+CiA8ZyBpZD0iVmVydHVvLS0tODBtbCI+CiAgPHBhdGggY2xhc3M9InN0MCIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBkPSJNNDAuNCwxOC41bDEuNCwxLjR2Mi45aDEuNWMzLjEsMCw1LjYsMi41LDUuNiw1LjZjMCwzLTIuNCw1LjUtNS40LDUuNmwtMC4yLDBoLTEuNXY2LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDIuOC0yLjIsNS01LDUuMmwtMC4yLDBI'+
			'MjQuMmMtMi44LDAtNS4xLTIuMi01LjItNC45bDAtMC4yVjE5LjlsMS40LTEuNEg0MC40eiBNNDMuNCwyNS42aC0xLjVWMzFoMS41YzEuNSwwLDIuNy0xLjIsMi43LTIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7UzQ0LjksMjUuNiw0My40LDI1LjZ6IE0yMS45LDI1LjZIMzl2LTQuM0gyMS45VjI1LjZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_9.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == "Altissio"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_9.style[domTransition]='';
				if (me._svg_9.ggCurrentLogicStateVisible == 0) {
					me._svg_9.style.visibility=(Number(me._svg_9.style.opacity)>0||!me._svg_9.style.opacity)?'inherit':'hidden';
					me._svg_9.ggVisible=true;
				}
				else {
					me._svg_9.style.visibility=(Number(me._svg_9.style.opacity)>0||!me._svg_9.style.opacity)?'inherit':'hidden';
					me._svg_9.ggVisible=true;
				}
			}
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_wall_k.appendChild(me._svg_9);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVub2RkO2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxjaXJjbGUgY3k9IjMyIiBjeD0iMzIiIHI9IjMxIi8+CiA8ZyBpZD0iVmVydHVvLS0tODBtbCI+CiAgPHBhdGggY2xhc3M9InN0MCIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBkPSJNNDAuNCwxOC41bDEuNCwxLjR2Mi45aDEuNWMzLjEsMCw1LjYsMi41LDUuNiw1LjZjMCwzLTIuNCw1LjUtNS40LDUuNmwtMC4yLDBoLTEuNXY2LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDIuOC0yLjIsNS01LDUuMmwtMC4yLDBI'+
			'MjQuMmMtMi44LDAtNS4xLTIuMi01LjItNC45bDAtMC4yVjE5LjlsMS40LTEuNEg0MC40eiBNNDMuNCwyNS42aC0xLjVWMzFoMS41YzEuNSwwLDIuNy0xLjIsMi43LTIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7UzQ0LjksMjUuNiw0My40LDI1LjZ6IE0yMS45LDI1LjZIMzl2LTQuM0gyMS45VjI1LjZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._svg_8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 8";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_8.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == "Master Origin Mexico"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_8.style[domTransition]='';
				if (me._svg_8.ggCurrentLogicStateVisible == 0) {
					me._svg_8.style.visibility=(Number(me._svg_8.style.opacity)>0||!me._svg_8.style.opacity)?'inherit':'hidden';
					me._svg_8.ggVisible=true;
				}
				else {
					me._svg_8.style.visibility="hidden";
					me._svg_8.ggVisible=false;
				}
			}
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_wall_k.appendChild(me._svg_8);
		el=me._svg_7=document.createElement('div');
		els=me._svg_7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI1LjIuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9IjAgMCA2NCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA2NDsiIHk9IjBweCIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bG'+
			'luayI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9JiN4ZDsKPC9zdHlsZT4KIDxjaXJjbGUgY3k9IjMyIiBjeD0iMzIiIHI9IjMxIi8+CiA8Zz4KICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1KSI+CiAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMy4xLDI2LjZIMzRsMC40LTAuOGMtMS4xLTEuNS0xLjMtMy41LTAuNS01LjNsLTAuNS0wLjdoLTEuMWw2LjUtNi41bC0wLjMtMC45SDE4LjFsLTAuNSwwLjZsMS44LDYuN2gtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2wtMC41LDAuNmMwLjIsMC43LDAuMywxLjQsMC4zLDJ2MC42YzAsMS4xLDAs'+
			'Mi0wLjQsMi44bDAuNSwwLjdoMC42bC01LjEsMjBDMTQsNDcuOCwxNC4zLDQ5LDE1LDUwczEuOSwxLjUsMy4xLDEuNWgxNi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MxLjIsMCwyLjMtMC42LDMuMS0xLjVzMS0yLjIsMC43LTMuM0wzMy4xLDI2LjZ6IE0zMi42LDIwLjljLTAuNSwxLjYtMC4zLDMuMywwLjQsNC43SDE5LjVjMC4yLTAuOCwwLjItMS43LDAuMi0yLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMC4yLDAtMC40LDAtMC41YzAtMC42LTAuMS0xLjEtMC4yLTEuN0wzMi42LDIwLjl6IE0xOC44LDEzLjVoMTguM2wtNi4zLDYuM0gyMC41TDE4LjgsMTMuNXogTTM2LjgsNDkuMy'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjLTAuNSwwLjctMS40LDEuMS0yLjMsMS4xSDE4LjFjLTAuOSwwLTEuNy0wLjQtMi4zLTEuMWMtMC41LTAuNy0wLjctMS42LTAuNS0yLjVsNS4yLTIwLjJoMTEuNmw1LjIsMjAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDMzcuNSw0Ny43LDM3LjMsNDguNiwzNi44LDQ5LjN6Ii8+CiAgIDxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMS41LDI4LjZMMzYsNDZjMC4yLDAuOSwwLDEuOC0wLjUsMi40Yy0wLjUsMC43LTEuNCwxLjEtMi4yLDEuMUgxOS40Yy0wLjksMC0xLjctMC40LTIuMi0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy0wLjUtMC43LTAu'+
			'Ny0xLjYtMC41LTIuNGw0LjQtMTcuM0gzMS41eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 7";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_7.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.title == "Carafe"))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._svg_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._svg_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._svg_7.style[domTransition]='';
				if (me._svg_7.ggCurrentLogicStateVisible == 0) {
					me._svg_7.style.visibility=(Number(me._svg_7.style.opacity)>0||!me._svg_7.style.opacity)?'inherit':'hidden';
					me._svg_7.ggVisible=true;
				}
				else {
					me._svg_7.style.visibility="hidden";
					me._svg_7.ggVisible=false;
				}
			}
		}
		me._svg_7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_wall_k.appendChild(me._svg_7);
		me.__div = me._ht_wall_k;
	};
	function SkinHotspotClass_ht_info(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info=document.createElement('div');
		el.ggId="ht_info";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info.onclick=function (e) {
			skin._info_title.ggText=me.hotspot.title;
			skin._info_title.ggTextDiv.innerHTML=skin._info_title.ggText;
			if (skin._info_title.ggUpdateText) {
				skin._info_title.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title.ggUpdatePosition) {
				skin._info_title.ggUpdatePosition();
			}
			skin._info_title.ggTextDiv.scrollTop = 0;
			skin._info_text_body.ggText=me.hotspot.description;
			skin._info_text_body.ggTextDiv.innerHTML=skin._info_text_body.ggText;
			if (skin._info_text_body.ggUpdateText) {
				skin._info_text_body.ggUpdateText=function() {
					var hs=me.hotspot.description;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_text_body.ggUpdatePosition) {
				skin._info_text_body.ggUpdatePosition();
			}
			skin._info_text_body.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info']=true;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info.ontouchend=function (e) {
			me.elementMouseOver['ht_info']=false;
			me._tt_information.logicBlock_visible();
		}
		me._ht_info.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNj'+
			'LTAuOCwwLTEuNS0wLjctMS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS'+
			'41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0'+
			'MzQuMWgtMTcuN2MtMC45LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style[domTransition]='';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info.appendChild(me._ht_info_image);
		el=me._tt_information=document.createElement('div');
		els=me._tt_information__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information.style.top='-47px';
					me._tt_information.ggUpdatePosition(true);
				}
				else {
					me._tt_information.ggDx=0;
					me._tt_information.style.top='24px';
					me._tt_information.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information.style[domTransition]='left 0s, top 0s';
				if (me._tt_information.ggCurrentLogicStateVisible == 0) {
					me._tt_information.style.visibility=(Number(me._tt_information.style.opacity)>0||!me._tt_information.style.opacity)?'inherit':'hidden';
					me._tt_information.ggVisible=true;
				}
				else {
					me._tt_information.style.visibility="hidden";
					me._tt_information.ggVisible=false;
				}
			}
		}
		me._tt_information.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info.appendChild(me._tt_information);
		el=me._ht_info_customimage0=document.createElement('div');
		els=me._ht_info_customimage0__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage0.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage0.style[domTransition]='';
				if (me._ht_info_customimage0.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage0.style.visibility="hidden";
					me._ht_info_customimage0__img.src = '';
					me._ht_info_customimage0.ggVisible=false;
				}
				else {
					me._ht_info_customimage0.style.visibility=(Number(me._ht_info_customimage0.style.opacity)>0||!me._ht_info_customimage0.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage0.ggSubElement.src=me._ht_info_customimage0.ggText;
					me._ht_info_customimage0.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage0.clientWidth;
			var parentHeight = me._ht_info_customimage0.clientHeight;
			var img = me._ht_info_customimage0__img;
			var aspectRatioDiv = me._ht_info_customimage0.clientWidth / me._ht_info_customimage0.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info.appendChild(me._ht_info_customimage0);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info;
	};
	function SkinHotspotClass_ht_info_b2b(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_b2b=document.createElement('div');
		el.ggId="ht_info_b2b";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 37px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_b2b.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_b2b.onclick=function (e) {
			skin._info_title_b2b.ggText=me.hotspot.title;
			skin._info_title_b2b.ggTextDiv.innerHTML=skin._info_title_b2b.ggText;
			if (skin._info_title_b2b.ggUpdateText) {
				skin._info_title_b2b.ggUpdateText=function() {
					var hs=me.hotspot.title;
					if (hs!=this.ggText) {
						this.ggText=hs;
						this.ggTextDiv.innerHTML=hs;
						if (this.ggUpdatePosition) this.ggUpdatePosition();
					}
				}
			}
			if (skin._info_title_b2b.ggUpdatePosition) {
				skin._info_title_b2b.ggUpdatePosition();
			}
			skin._info_title_b2b.ggTextDiv.scrollTop = 0;
			player.setVariableValue('vis_info_b2b', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_b2b.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_b2b.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_info_b2b']=true;
			me._tt_information_b2b.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_b2b.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_info_b2b']=false;
			me._tt_information_b2b.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_b2b.ontouchend=function (e) {
			me.elementMouseOver['ht_info_b2b']=false;
			me._tt_information_b2b.logicBlock_visible();
		}
		me._ht_info_b2b.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image_b2b=document.createElement('div');
		els=me._ht_info_image_b2b__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNj'+
			'LTAuOCwwLTEuNS0wLjctMS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS'+
			'41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image_b2b__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image_b2b__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0'+
			'MzQuMWgtMTcuN2MtMC45LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image_b2b__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image_b2b";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image_b2b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image_b2b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image_b2b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image_b2b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image_b2b.style[domTransition]='';
				if (me._ht_info_image_b2b.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image_b2b.style.visibility="hidden";
					me._ht_info_image_b2b.ggVisible=false;
				}
				else {
					me._ht_info_image_b2b.style.visibility=(Number(me._ht_info_image_b2b.style.opacity)>0||!me._ht_info_image_b2b.style.opacity)?'inherit':'hidden';
					me._ht_info_image_b2b.ggVisible=true;
				}
			}
		}
		me._ht_info_image_b2b.onmouseover=function (e) {
			me._ht_info_image_b2b__img.style.visibility='hidden';
			me._ht_info_image_b2b__imgo.style.visibility='inherit';
		}
		me._ht_info_image_b2b.onmouseout=function (e) {
			me._ht_info_image_b2b__img.style.visibility='inherit';
			me._ht_info_image_b2b__imgo.style.visibility='hidden';
		}
		me._ht_info_image_b2b.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_info_b2b.appendChild(me._ht_info_image_b2b);
		el=me._tt_information_b2b=document.createElement('div');
		els=me._tt_information_b2b__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_information_b2b";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_information_b2b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_information_b2b.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_information_b2b.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_information_b2b.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_information_b2b.style[domTransition]='left 0s, top 0s';
				if (me._tt_information_b2b.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_information_b2b.style.top='-47px';
					me._tt_information_b2b.ggUpdatePosition(true);
				}
				else {
					me._tt_information_b2b.ggDx=0;
					me._tt_information_b2b.style.top='24px';
					me._tt_information_b2b.ggUpdatePosition(true);
				}
			}
		}
		me._tt_information_b2b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_info_b2b'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_information_b2b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_information_b2b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_information_b2b.style[domTransition]='left 0s, top 0s';
				if (me._tt_information_b2b.ggCurrentLogicStateVisible == 0) {
					me._tt_information_b2b.style.visibility=(Number(me._tt_information_b2b.style.opacity)>0||!me._tt_information_b2b.style.opacity)?'inherit':'hidden';
					me._tt_information_b2b.ggVisible=true;
				}
				else {
					me._tt_information_b2b.style.visibility="hidden";
					me._tt_information_b2b.ggVisible=false;
				}
			}
		}
		me._tt_information_b2b.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_info_b2b.appendChild(me._tt_information_b2b);
		el=me._ht_info_customimage=document.createElement('div');
		els=me._ht_info_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_info_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_info_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_customimage.style[domTransition]='';
				if (me._ht_info_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_info_customimage.style.visibility="hidden";
					me._ht_info_customimage__img.src = '';
					me._ht_info_customimage.ggVisible=false;
				}
				else {
					me._ht_info_customimage.style.visibility=(Number(me._ht_info_customimage.style.opacity)>0||!me._ht_info_customimage.style.opacity)?'inherit':'hidden';
					me._ht_info_customimage.ggSubElement.src=me._ht_info_customimage.ggText;
					me._ht_info_customimage.ggVisible=true;
				}
			}
		}
		me._ht_info_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_info_customimage.clientWidth;
			var parentHeight = me._ht_info_customimage.clientHeight;
			var img = me._ht_info_customimage__img;
			var aspectRatioDiv = me._ht_info_customimage.clientWidth / me._ht_info_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_info_b2b.appendChild(me._ht_info_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_info_b2b;
	};
	function SkinHotspotClass_ht_image(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 200px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_image.onclick=function (e) {
			player.setVariableValue('vis_image_popup', true);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_image']=true;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_image.ontouchend=function (e) {
			me.elementMouseOver['ht_image']=false;
			me._tt_ht_image.logicBlock_visible();
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image_image=document.createElement('div');
		els=me._ht_image_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk2LjMsNDE0LjdoNDIuN3YtNDRoLTQyLjdWNDE0Ljd6IE0tMTU1LjUsNDEyLjlILTE4M2wxOS0xOC42YzAuMy0wLjMsMC42LTAuNCwxLTAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC40LDAsMC43LDAuMSwxLDAuNGw2LjUsNi40VjQxMi45eiBNLTE2Mi45LDM3NmMyLjIsMCw0LDEuOCw0LDRjMCwyLjItMS44LDQtNCw0Yy0yLjIsMC00LTEuOC00LTQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNjYuOCwzNzcuOC0xNjUuMSwzNzYtMTYyLjksMzc2eiBNLTE5NC41LDM5Ny44bDkuNy05LjRjMC4zLTAu'+
			'MywwLjYtMC40LDEtMC40YzAuNCwwLDAuNywwLjEsMSwwLjRsMTEuMiwxMC45bC0xMy45LDEzLjZoLTkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7TC0xOTQuNSwzOTcuOEwtMTk0LjUsMzk3Ljh6Ii8+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Uy0xNDQsMzQwLjktMTc1LDM0MC45eiBNLTE0OS41LDQyNS41YzAsMS4zLTEsMi4zLTIuMywyLjNoLTQ2LjRjLTEuMywwLTIuMy0xLTIuMy0yLjN2LTU3Yz'+
			'AtMS4zLDEtMi4zLDIuMy0yLjNoNDYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS4zLDAsMi4zLDEsMi4zLDIuM0wtMTQ5LjUsNDI1LjVMLTE0OS41LDQyNS41eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNTEuOCwzNjYuMmgtNDYuNGMtMS4zLDAtMi4zLDEtMi4zLDIuM3Y1N2MwLDEuMywxLDIuMywyLjMsMi4zaDQ2LjRjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNTcmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xNDkuNSwzNjcuMi0xNTAuNSwzNjYuMi0xNTEuOCwzNjYuMnogTS0xNTMuNyw0MTQuN2gtNDIu'+
			'N3YtNDRoNDIuN1Y0MTQuN3oiLz4KICAgPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeT0iMzc5LjkiIGN4PSItMTYyLjkiIHI9IjQiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzEuNywzOTkuM2wtMTEuMi0xMC45Yy0wLjMtMC4zLTAuNi0wLjQtMS0wLjRzLTAuNywwLjEtMSwwLjRsLTkuNyw5LjR2MTUuMWg5TC0xNzEuNywzOTkuM3oiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjMsMzkzLjljLTAuNCwwLTAuNywwLjEtMSwwLjRsLTE5LDE4LjZoMjcuNXYtMTIuMmwtNi41LTYuNEMtMTYyLjIsMzk0LTE2Mi42LDM5My45LTE2MywzOTMuOXoiLz4KICA8L2c+CiA8L2'+
			'c+Cjwvc3ZnPgo=';
		me._ht_image_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_image_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGQ9Ik0tMTk4LjcsNDE2LjZoNDcuNHYtNDguOWgtNDcuNFY0MTYuNnogTS0xNTMuMyw0MTQuNmgtMzAuNmwyMS4xLTIwLjZjMC4zLTAuMywwLjctMC41LDEuMS0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAuNCwwLDAuOCwwLjIsMS4xLDAuNWw3LjIsNy4xVjQxNC42eiBNLTE2MS41LDM3My42YzIuNCwwLDQuNCwyLDQuNCw0LjRjMCwyLjQtMiw0LjQtNC40LDQuNHMtNC40LTItNC40LTQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE2NS45LDM3NS42LTE2NCwzNzMuNi0xNjEuNSwzNzMuNnogTS0xOTYuNywz'+
			'OTcuOWwxMC43LTEwLjVjMC4zLTAuMywwLjctMC41LDEuMS0wLjVzMC44LDAuMiwxLjEsMC40bDEyLjQsMTIuMmwtMTUuNCwxNS4xaC0xMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE5Ni43LDM5Ny45TC0xOTYuNywzOTcuOXoiLz4KICAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Uy0xNDAuNiwzMzQuNi0xNzUsMzM0LjZ6IE0tMTQ2LjcsNDI4LjdjMCwxLjQtMS4xLDIuNi0yLjYsMi42aC01MS'+
			'42Yy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTYzLjRjMC0xLjQsMS4xLTIuNiwyLjYtMi42aDUxLjYmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzEuNCwwLDIuNiwxLjEsMi42LDIuNkwtMTQ2LjcsNDI4LjdMLTE0Ni43LDQyOC43eiIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNDkuMiwzNjIuOGgtNTEuNmMtMS40LDAtMi42LDEuMS0yLjYsMi42djYzLjRjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDUxLjZjMS40LDAsMi42LTEuMSwyLjYtMi42di02My40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTQ2LjcsMzYz'+
			'LjktMTQ3LjgsMzYyLjgtMTQ5LjIsMzYyLjh6IE0tMTUxLjMsNDE2LjZoLTQ3LjR2LTQ4LjloNDcuNFY0MTYuNnoiLz4KICAgPGNpcmNsZSBmaWxsPSIjRkZGRkZGIiBjeT0iMzc4IiBjeD0iLTE2MS41IiByPSI0LjQiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzEuMywzOTkuNWwtMTIuNC0xMi4yYy0wLjMtMC4zLTAuNy0wLjQtMS4xLTAuNGMtMC40LDAtMC44LDAuMi0xLjEsMC41bC0xMC43LDEwLjV2MTYuOGgxMCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE3MS4zLDM5OS41eiIvPgogICA8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNLTE2MS42LDM5My41Yy0wLjQsMC0wLj'+
			'gsMC4yLTEuMSwwLjVsLTIxLjEsMjAuNmgzMC42VjQwMWwtNy4yLTcuMUMtMTYwLjgsMzkzLjctMTYxLjIsMzkzLjUtMTYxLjYsMzkzLjUmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_image_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_image_image";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_image.style[domTransition]='';
				if (me._ht_image_image.ggCurrentLogicStateVisible == 0) {
					me._ht_image_image.style.visibility="hidden";
					me._ht_image_image.ggVisible=false;
				}
				else {
					me._ht_image_image.style.visibility=(Number(me._ht_image_image.style.opacity)>0||!me._ht_image_image.style.opacity)?'inherit':'hidden';
					me._ht_image_image.ggVisible=true;
				}
			}
		}
		me._ht_image_image.onmouseover=function (e) {
			me._ht_image_image__img.style.visibility='hidden';
			me._ht_image_image__imgo.style.visibility='inherit';
		}
		me._ht_image_image.onmouseout=function (e) {
			me._ht_image_image__img.style.visibility='inherit';
			me._ht_image_image__imgo.style.visibility='hidden';
		}
		me._ht_image_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_image.appendChild(me._ht_image_image);
		el=me._tt_ht_image=document.createElement('div');
		els=me._tt_ht_image__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_image";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_image.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_image.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_image.style.top='-47px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_image.ggDx=0;
					me._tt_ht_image.style.top='24px';
					me._tt_ht_image.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_image'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_image.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_image.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_image.style.visibility=(Number(me._tt_ht_image.style.opacity)>0||!me._tt_ht_image.style.opacity)?'inherit':'hidden';
					me._tt_ht_image.ggVisible=true;
				}
				else {
					me._tt_ht_image.style.visibility="hidden";
					me._tt_ht_image.ggVisible=false;
				}
			}
		}
		me._tt_ht_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_image.appendChild(me._tt_ht_image);
		el=me._ht_image_customimage=document.createElement('div');
		els=me._ht_image_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_image_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_image_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_image_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_image_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_image_customimage.style[domTransition]='';
				if (me._ht_image_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_image_customimage.style.visibility="hidden";
					me._ht_image_customimage__img.src = '';
					me._ht_image_customimage.ggVisible=false;
				}
				else {
					me._ht_image_customimage.style.visibility=(Number(me._ht_image_customimage.style.opacity)>0||!me._ht_image_customimage.style.opacity)?'inherit':'hidden';
					me._ht_image_customimage.ggSubElement.src=me._ht_image_customimage.ggText;
					me._ht_image_customimage.ggVisible=true;
				}
			}
		}
		me._ht_image_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_image_customimage.clientWidth;
			var parentHeight = me._ht_image_customimage.clientHeight;
			var img = me._ht_image_customimage__img;
			var aspectRatioDiv = me._ht_image_customimage.clientWidth / me._ht_image_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_image.appendChild(me._ht_image_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_image;
	};
	function SkinHotspotClass_ht_url_i(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_url_i=document.createElement('div');
		el.ggId="ht_url_i";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 250px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_i.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_url_i.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_userdata') == true)) || 
				((player.getVariableValue('vis_image_popup') == true)) || 
				((player.getVariableValue('vis_info_popup') == true)) || 
				((player.getVariableValue('vis_video_popup_file') == true)) || 
				((player.getVariableValue('vis_video_popup_url') == true)) || 
				((player.getVariableValue('vis_video_popup_vimeo') == true)) || 
				((player.getVariableValue('vis_video_popup_youtube') == true)) || 
				((player.getVariableValue('vis_website') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_i.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_i.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_i.style[domTransition]='';
				if (me._ht_url_i.ggCurrentLogicStateVisible == 0) {
					me._ht_url_i.style.visibility="hidden";
					me._ht_url_i.ggVisible=false;
				}
				else {
					me._ht_url_i.style.visibility=(Number(me._ht_url_i.style.opacity)>0||!me._ht_url_i.style.opacity)?'inherit':'hidden';
					me._ht_url_i.ggVisible=true;
				}
			}
		}
		me._ht_url_i.onclick=function (e) {
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				skin._web_page.ggText="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
				skin._web_page.ggTextDiv.innerHTML=skin._web_page.ggText;
				if (skin._web_page.ggUpdateText) {
					skin._web_page.ggUpdateText=function() {
						var hs="<iframe src=\""+me.hotspot.url+"\" width=\"100%\" height=\"100%\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\" frameborder= \"0\"><\/iframe>";
						if (hs!=this.ggText) {
							this.ggText=hs;
							this.ggTextDiv.innerHTML=hs;
							if (this.ggUpdatePosition) this.ggUpdatePosition();
						}
					}
				}
				if (skin._web_page.ggUpdatePosition) {
					skin._web_page.ggUpdatePosition();
				}
				skin._web_page.ggTextDiv.scrollTop = 0;
			}
			if (
				(
					((player.getVariableValue('opt_url') == true)) && 
					((player.getHasTouch() == false))
				)
			) {
				player.setVariableValue('vis_website', true);
			}
			if (
				(
					((player.getVariableValue('opt_url') == false)) || 
					((player.getHasTouch() == true))
				)
			) {
				player.openUrl(me.hotspot.url,me.hotspot.target);
			}
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_i.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_i.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_url_i']=true;
			me._tt_ht_url_2.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_i.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_url_i']=false;
			me._tt_ht_url_2.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_url_i.ontouchend=function (e) {
			me.elementMouseOver['ht_url_i']=false;
			me._tt_ht_url_2.logicBlock_visible();
		}
		me._ht_url_i.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_url_image_2=document.createElement('div');
		els=me._ht_url_image_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMXMyNS4xLDU2LjEsNTYuMSw1Ni4xYzMxLDAsNTYuMS0yNS4xLDU2LjEtNTYuMVMtMTQ0LDM0MC45LTE3NSwzNDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7eiBNLTE3OC4xLDM2MS4xbDYuMiwwYzMuNSwwLDYuNCwyLjksNi40LDYuNHYyLjljMCwzLjUtMi45LDYuNC02LjQsNi40aC02LjJjLTMuNSwwLTYuNC0yLjktNi40LTYuNGwwLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODQuNSwzNjQtMTgxLjYsMzYxLjEtMTc4LjEsMzYxLjF6IE0tMTY3LDQzMC40SC0xODNj'+
			'LTAuOCwwLTEuNS0wLjctMS41LTEuNWwwLTM3LjdjMC0wLjgsMC43LTEuNSwxLjUtMS41bDE1LjksMCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOCwwLDEuNSwwLjcsMS41LDEuNWwwLDM3LjdDLTE2NS41LDQyOS43LTE2Ni4yLDQzMC40LTE2Nyw0MzAuNHoiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNjUuNSwzOTEuMmMwLTAuOC0wLjctMS41LTEuNS0xLjVsLTE1LjksMGMtMC44LDAtMS41LDAuNy0xLjUsMS41bDAsMzcuN2MwLDAuOCwwLjcsMS41LDEuNSwxLjVoMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMC44LDAsMS'+
			'41LTAuNywxLjUtMS41TC0xNjUuNSwzOTEuMnoiLz4KICAgPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTS0xNzguMSwzNzYuOGg2LjJjMy41LDAsNi40LTIuOSw2LjQtNi40di0yLjljMC0zLjUtMi45LTYuNC02LjQtNi40bC02LjIsMGMtMy41LDAtNi40LDIuOS02LjQsNi40bDAsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg0LjUsMzc0LTE4MS42LDM3Ni44LTE3OC4xLDM3Ni44eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_url_image_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZpZXdCb3g9Ii0yNDAgMzMyIDEzMCAxMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeT0iMHB4IiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiBiYXNlUHJvZmlsZT0idGlueSIgdmVyc2lvbj0iMS4xIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O1MtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3OC41LDM1Ny4xbDYuOSwwYzMuOSwwLDcuMSwzLjIsNy4xLDcuMXYzLjNjMCwzLjktMy4yLDcuMS03LjEsNy4xaC02LjljLTMuOSwwLTcuMS0zLjItNy4xLTcuMWwwLTMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xODUuNiwzNjAuMy0xODIuNCwzNTcuMS0xNzguNSwzNTcuMXogTS0xNjYuMSw0'+
			'MzQuMWgtMTcuN2MtMC45LDAtMS43LTAuOC0xLjctMS43bDAtNDEuOWMwLTAuOSwwLjgtMS43LDEuNy0xLjdsMTcuNywwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LDAsMS43LDAuOCwxLjcsMS43bDAsNDEuOUMtMTY0LjQsNDMzLjMtMTY1LjIsNDM0LjEtMTY2LjEsNDM0LjF6Ii8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTY0LjQsMzkwLjVjMC0wLjktMC44LTEuNy0xLjctMS43bC0xNy43LDBjLTAuOSwwLTEuNywwLjgtMS43LDEuN2wwLDQxLjljMCwwLjksMC44LDEuNywxLjcsMS43aDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5Oy'+
			'YjeDk7YzAuOSwwLDEuNy0wLjgsMS43LTEuN0wtMTY0LjQsMzkwLjV6Ii8+CiAgIDxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0tMTc4LjUsMzc0LjZoNi45YzMuOSwwLDcuMS0zLjIsNy4xLTcuMXYtMy4zYzAtMy45LTMuMi03LjEtNy4xLTcuMWwtNi45LDBjLTMuOSwwLTcuMSwzLjItNy4xLDcuMWwwLDMuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE4NS41LDM3MS40LTE4Mi40LDM3NC42LTE3OC41LDM3NC42eiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_url_image_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_url_image_2";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_image_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_image_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_image_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_image_2.style[domTransition]='';
				if (me._ht_url_image_2.ggCurrentLogicStateVisible == 0) {
					me._ht_url_image_2.style.visibility="hidden";
					me._ht_url_image_2.ggVisible=false;
				}
				else {
					me._ht_url_image_2.style.visibility=(Number(me._ht_url_image_2.style.opacity)>0||!me._ht_url_image_2.style.opacity)?'inherit':'hidden';
					me._ht_url_image_2.ggVisible=true;
				}
			}
		}
		me._ht_url_image_2.onmouseover=function (e) {
			me._ht_url_image_2__img.style.visibility='hidden';
			me._ht_url_image_2__imgo.style.visibility='inherit';
		}
		me._ht_url_image_2.onmouseout=function (e) {
			me._ht_url_image_2__img.style.visibility='inherit';
			me._ht_url_image_2__imgo.style.visibility='hidden';
		}
		me._ht_url_image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._ht_url_i.appendChild(me._ht_url_image_2);
		el=me._tt_ht_url_2=document.createElement('div');
		els=me._tt_ht_url_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_url_2";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_url_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_url_2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_url_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_url_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_url_2.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url_2.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_url_2.style.top='-47px';
					me._tt_ht_url_2.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_url_2.ggDx=0;
					me._tt_ht_url_2.style.top='24px';
					me._tt_ht_url_2.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_url_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_url_i'] == true)) && 
				((me.hotspot.title != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_url_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_url_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_url_2.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_url_2.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_url_2.style.visibility=(Number(me._tt_ht_url_2.style.opacity)>0||!me._tt_ht_url_2.style.opacity)?'inherit':'hidden';
					me._tt_ht_url_2.ggVisible=true;
				}
				else {
					me._tt_ht_url_2.style.visibility="hidden";
					me._tt_ht_url_2.ggVisible=false;
				}
			}
		}
		me._tt_ht_url_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_url_i.appendChild(me._tt_ht_url_2);
		el=me._ht_url_customimage_1=document.createElement('div');
		els=me._ht_url_customimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_url_customimage_1.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_url_CustomImage_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_url_customimage_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_url_customimage_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_url_customimage_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_url_customimage_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_url_customimage_1.style[domTransition]='';
				if (me._ht_url_customimage_1.ggCurrentLogicStateVisible == 0) {
					me._ht_url_customimage_1.style.visibility="hidden";
					me._ht_url_customimage_1__img.src = '';
					me._ht_url_customimage_1.ggVisible=false;
				}
				else {
					me._ht_url_customimage_1.style.visibility=(Number(me._ht_url_customimage_1.style.opacity)>0||!me._ht_url_customimage_1.style.opacity)?'inherit':'hidden';
					me._ht_url_customimage_1.ggSubElement.src=me._ht_url_customimage_1.ggText;
					me._ht_url_customimage_1.ggVisible=true;
				}
			}
		}
		me._ht_url_customimage_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_url_customimage_1.clientWidth;
			var parentHeight = me._ht_url_customimage_1.clientHeight;
			var img = me._ht_url_customimage_1__img;
			var aspectRatioDiv = me._ht_url_customimage_1.clientWidth / me._ht_url_customimage_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_url_i.appendChild(me._ht_url_customimage_1);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.__div = me._ht_url_i;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_info_n') {
			hotspot.skinid = 'ht_info_n';
			hsinst = new SkinHotspotClass_ht_info_n(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_n_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_n_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_n_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_n_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_n_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_info_v') {
			hotspot.skinid = 'ht_info_v';
			hsinst = new SkinHotspotClass_ht_info_v(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_v_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_v_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_v_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_v_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_v_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_controll') {
			hotspot.skinid = 'ht_controll';
			hsinst = new SkinHotspotClass_ht_controll(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_node_enter_recycle') {
			hotspot.skinid = 'ht_node_enter_recycle';
			hsinst = new SkinHotspotClass_ht_node_enter_recycle(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_enter_recycle_mouseover();;
		} else
		if (hotspot.skinid=='ht_video_file') {
			hotspot.skinid = 'ht_video_file';
			hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_file_changenode();;
			me.callChildLogicBlocksHotspot_ht_video_file_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_file_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_file_hastouch();;
			me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_3d') {
			hotspot.skinid = 'ht_3d';
			hsinst = new SkinHotspotClass_ht_3d(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_3d_changenode();;
			me.callChildLogicBlocksHotspot_ht_3d_configloaded();;
			me.callChildLogicBlocksHotspot_ht_3d_mouseover();;
			me.callChildLogicBlocksHotspot_ht_3d_hastouch();;
			me.callChildLogicBlocksHotspot_ht_3d_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_3d2') {
			hotspot.skinid = 'ht_3d2';
			hsinst = new SkinHotspotClass_ht_3d2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_3d2_changenode();;
			me.callChildLogicBlocksHotspot_ht_3d2_configloaded();;
			me.callChildLogicBlocksHotspot_ht_3d2_mouseover();;
			me.callChildLogicBlocksHotspot_ht_3d2_hastouch();;
			me.callChildLogicBlocksHotspot_ht_3d2_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_url') {
			hotspot.skinid = 'ht_url';
			hsinst = new SkinHotspotClass_ht_url(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_url_changenode();;
			me.callChildLogicBlocksHotspot_ht_url_configloaded();;
			me.callChildLogicBlocksHotspot_ht_url_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_hastouch();;
			me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_video_youtube') {
			hotspot.skinid = 'ht_video_youtube';
			hsinst = new SkinHotspotClass_ht_video_youtube(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_video_youtube_changenode();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_hastouch();;
			me.callChildLogicBlocksHotspot_ht_video_youtube_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_form') {
			hotspot.skinid = 'ht_form';
			hsinst = new SkinHotspotClass_ht_form(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_form_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_form_changenode();;
			me.callChildLogicBlocksHotspot_ht_form_configloaded();;
			me.callChildLogicBlocksHotspot_ht_form_mouseover();;
			me.callChildLogicBlocksHotspot_ht_form_hastouch();;
			me.callChildLogicBlocksHotspot_ht_form_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_form_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_form_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_form_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_pdf') {
			hotspot.skinid = 'ht_pdf';
			hsinst = new SkinHotspotClass_ht_pdf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_pdf_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_pdf_changenode();;
			me.callChildLogicBlocksHotspot_ht_pdf_configloaded();;
			me.callChildLogicBlocksHotspot_ht_pdf_mouseover();;
			me.callChildLogicBlocksHotspot_ht_pdf_hastouch();;
			me.callChildLogicBlocksHotspot_ht_pdf_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_pdf_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_pdf_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_pdf_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_care') {
			hotspot.skinid = 'ht_care';
			hsinst = new SkinHotspotClass_ht_care(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_care_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_care_changenode();;
			me.callChildLogicBlocksHotspot_ht_care_configloaded();;
			me.callChildLogicBlocksHotspot_ht_care_mouseover();;
			me.callChildLogicBlocksHotspot_ht_care_hastouch();;
			me.callChildLogicBlocksHotspot_ht_care_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_care_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_care_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_care_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_insta') {
			hotspot.skinid = 'ht_insta';
			hsinst = new SkinHotspotClass_ht_insta(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_insta_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_insta_changenode();;
			me.callChildLogicBlocksHotspot_ht_insta_configloaded();;
			me.callChildLogicBlocksHotspot_ht_insta_mouseover();;
			me.callChildLogicBlocksHotspot_ht_insta_hastouch();;
			me.callChildLogicBlocksHotspot_ht_insta_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_insta_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_insta_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_insta_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_node_link') {
			hotspot.skinid = 'ht_node_link';
			hsinst = new SkinHotspotClass_ht_node_link(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_link_mouseover();;
		} else
		if (hotspot.skinid=='ht_node_exit') {
			hotspot.skinid = 'ht_node_exit';
			hsinst = new SkinHotspotClass_ht_node_exit(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_exit_mouseover();;
		} else
		if (hotspot.skinid=='Hotspot 1_1_1_1') {
			hotspot.skinid = 'Hotspot 1_1_1_1';
			hsinst = new SkinHotspotClass_hotspot_1_1_1_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		if (hotspot.skinid=='ht_linkedin') {
			hotspot.skinid = 'ht_linkedin';
			hsinst = new SkinHotspotClass_ht_linkedin(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_linkedin_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_linkedin_changenode();;
			me.callChildLogicBlocksHotspot_ht_linkedin_configloaded();;
			me.callChildLogicBlocksHotspot_ht_linkedin_mouseover();;
			me.callChildLogicBlocksHotspot_ht_linkedin_hastouch();;
			me.callChildLogicBlocksHotspot_ht_linkedin_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_linkedin_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_linkedin_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_linkedin_varchanged_vis_website();;
		} else
		if (hotspot.skinid=='ht_node_zoom') {
			hotspot.skinid = 'ht_node_zoom';
			hsinst = new SkinHotspotClass_ht_node_zoom(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_zoom_mouseover();;
		} else
		if (hotspot.skinid=='ht_node_business') {
			hotspot.skinid = 'ht_node_business';
			hsinst = new SkinHotspotClass_ht_node_business(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_business_mouseover();;
		} else
		if (hotspot.skinid=='ht_node_enter') {
			hotspot.skinid = 'ht_node_enter';
			hsinst = new SkinHotspotClass_ht_node_enter(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_enter_mouseover();;
		} else
		if (hotspot.skinid=='ht_node_nachh') {
			hotspot.skinid = 'ht_node_nachh';
			hsinst = new SkinHotspotClass_ht_node_nachh(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_nachh_mouseover();;
		} else
		if (hotspot.skinid=='PolyKaraf') {
			hotspot.skinid = 'PolyKaraf';
			hsinst = new SkinHotspotClass_polykaraf(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_polykaraf_changenode();;
			me.callChildLogicBlocksHotspot_polykaraf_varchanged_ht_ani2();;
		} else
		if (hotspot.skinid=='PolyTass') {
			hotspot.skinid = 'PolyTass';
			hsinst = new SkinHotspotClass_polytass(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_polytass_changenode();;
			me.callChildLogicBlocksHotspot_polytass_varchanged_ht_ani2();;
		} else
		if (hotspot.skinid=='ht_wall_k') {
			hotspot.skinid = 'ht_wall_k';
			hsinst = new SkinHotspotClass_ht_wall_k(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_wall_k_changenode();;
			me.callChildLogicBlocksHotspot_ht_wall_k_configloaded();;
			me.callChildLogicBlocksHotspot_ht_wall_k_hastouch();;
			me.callChildLogicBlocksHotspot_ht_wall_k_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_wall_k_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_wall_k_varchanged_vis_video_youtube();;
			me.callChildLogicBlocksHotspot_ht_wall_k_varchanged_vis_info_popup_v();;
		} else
		if (hotspot.skinid=='ht_info') {
			hotspot.skinid = 'ht_info';
			hsinst = new SkinHotspotClass_ht_info(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_info_b2b') {
			hotspot.skinid = 'ht_info_b2b';
			hsinst = new SkinHotspotClass_ht_info_b2b(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_b2b_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_b2b_configloaded();;
			me.callChildLogicBlocksHotspot_ht_info_b2b_mouseover();;
			me.callChildLogicBlocksHotspot_ht_info_b2b_hastouch();;
			me.callChildLogicBlocksHotspot_ht_info_b2b_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_image') {
			hotspot.skinid = 'ht_image';
			hsinst = new SkinHotspotClass_ht_image(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_image_changenode();;
			me.callChildLogicBlocksHotspot_ht_image_configloaded();;
			me.callChildLogicBlocksHotspot_ht_image_mouseover();;
			me.callChildLogicBlocksHotspot_ht_image_hastouch();;
			me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();;
		} else
		{
			hotspot.skinid = 'ht_url_i';
			hsinst = new SkinHotspotClass_ht_url_i(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_url_i_sizechanged();;
			me.callChildLogicBlocksHotspot_ht_url_i_changenode();;
			me.callChildLogicBlocksHotspot_ht_url_i_configloaded();;
			me.callChildLogicBlocksHotspot_ht_url_i_mouseover();;
			me.callChildLogicBlocksHotspot_ht_url_i_hastouch();;
			me.callChildLogicBlocksHotspot_ht_url_i_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_url_i_varchanged_vis_info_popup();;
			me.callChildLogicBlocksHotspot_ht_url_i_varchanged_vis_image_popup();;
			me.callChildLogicBlocksHotspot_ht_url_i_varchanged_vis_website();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_info_n']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_n'].length; i++) {
				hotspotTemplates['ht_info_n'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_v']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_v'].length; i++) {
				hotspotTemplates['ht_info_v'][i] = null;
			}
		}
		if(hotspotTemplates['ht_controll']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_controll'].length; i++) {
				hotspotTemplates['ht_controll'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_enter_recycle']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_enter_recycle'].length; i++) {
				hotspotTemplates['ht_node_enter_recycle'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				hotspotTemplates['ht_video_file'][i] = null;
			}
		}
		if(hotspotTemplates['ht_3d']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d'].length; i++) {
				hotspotTemplates['ht_3d'][i] = null;
			}
		}
		if(hotspotTemplates['ht_3d2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_3d2'].length; i++) {
				hotspotTemplates['ht_3d2'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url'].length; i++) {
				hotspotTemplates['ht_url'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_youtube']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_youtube'].length; i++) {
				hotspotTemplates['ht_video_youtube'][i] = null;
			}
		}
		if(hotspotTemplates['ht_form']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_form'].length; i++) {
				hotspotTemplates['ht_form'][i] = null;
			}
		}
		if(hotspotTemplates['ht_pdf']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_pdf'].length; i++) {
				hotspotTemplates['ht_pdf'][i] = null;
			}
		}
		if(hotspotTemplates['ht_care']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_care'].length; i++) {
				hotspotTemplates['ht_care'][i] = null;
			}
		}
		if(hotspotTemplates['ht_insta']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_insta'].length; i++) {
				hotspotTemplates['ht_insta'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_link']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_link'].length; i++) {
				hotspotTemplates['ht_node_link'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_exit']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_exit'].length; i++) {
				hotspotTemplates['ht_node_exit'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 1_1_1_1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1_1_1_1'].length; i++) {
				hotspotTemplates['Hotspot 1_1_1_1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_linkedin']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_linkedin'].length; i++) {
				hotspotTemplates['ht_linkedin'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_zoom']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_zoom'].length; i++) {
				hotspotTemplates['ht_node_zoom'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_business']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_business'].length; i++) {
				hotspotTemplates['ht_node_business'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_enter']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_enter'].length; i++) {
				hotspotTemplates['ht_node_enter'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node_nachh']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node_nachh'].length; i++) {
				hotspotTemplates['ht_node_nachh'][i] = null;
			}
		}
		if(hotspotTemplates['PolyKaraf']) {
			var i;
			for(i = 0; i < hotspotTemplates['PolyKaraf'].length; i++) {
				hotspotTemplates['PolyKaraf'][i] = null;
			}
		}
		if(hotspotTemplates['PolyTass']) {
			var i;
			for(i = 0; i < hotspotTemplates['PolyTass'].length; i++) {
				hotspotTemplates['PolyTass'][i] = null;
			}
		}
		if(hotspotTemplates['ht_wall_k']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_wall_k'].length; i++) {
				hotspotTemplates['ht_wall_k'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info'].length; i++) {
				hotspotTemplates['ht_info'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_b2b']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_b2b'].length; i++) {
				hotspotTemplates['ht_info_b2b'][i] = null;
			}
		}
		if(hotspotTemplates['ht_image']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_image'].length; i++) {
				hotspotTemplates['ht_image'][i] = null;
			}
		}
		if(hotspotTemplates['ht_url_i']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_url_i'].length; i++) {
				hotspotTemplates['ht_url_i'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinCloner_node_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 140px; height: 100px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.style.width=parameter.width;
		me.__div.style.height=parameter.height;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._node_image_cloner=document.createElement('div');
		els=me._node_image_cloner__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/node_image_cloner_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="node_Image_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 90px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_image_cloner.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._node_image_cloner.onclick=function (e) {
			if (
				(
					((me._node_image_cloner.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._node_image_cloner.onmouseover=function (e) {
			me.elementMouseOver['node_image_cloner']=true;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.onmouseout=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ontouchend=function (e) {
			me.elementMouseOver['node_image_cloner']=false;
			me._node_visited.logicBlock_bordercolor();
		}
		me._node_image_cloner.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_title=document.createElement('div');
		els=me._node_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="node_title";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : 1px;';
		hs+='cursor : pointer;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 136px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 100%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 136px;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: normal;';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 2px 1px 2px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._node_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.title == "")) || 
				((player.getVariableValue('opt_thumbnail_menu_tooltip') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._node_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._node_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._node_title.style[domTransition]='';
				if (me._node_title.ggCurrentLogicStateVisible == 0) {
					me._node_title.style.visibility="hidden";
					me._node_title.ggVisible=false;
				}
				else {
					me._node_title.style.visibility=(Number(me._node_title.style.opacity)>0||!me._node_title.style.opacity)?'inherit':'hidden';
					me._node_title.ggVisible=true;
				}
			}
		}
		me._node_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._node_image_cloner.appendChild(me._node_title);
		el=me._node_visited=document.createElement('div');
		el.ggId="node_visited";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 87px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_visited.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._node_visited.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me.elementMouseOver['node_image_cloner'] == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me._node_visited.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else if (
				((player.nodeVisited(me._node_visited.ggElementNodeId()) == true))
			)
			{
				newLogicStateBorderColor = 2;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._node_visited.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._node_visited.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._node_visited.style[domTransition]='border-color 0s';
				if (me._node_visited.ggCurrentLogicStateBorderColor == 0) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 1) {
					me._node_visited.style.borderColor="rgba(255,255,255,1)";
				}
				else if (me._node_visited.ggCurrentLogicStateBorderColor == 2) {
					me._node_visited.style.borderColor="rgba(209,209,209,1)";
				}
				else {
					me._node_visited.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._node_visited.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._node_image_cloner.appendChild(me._node_visited);
		me.__div.appendChild(me._node_image_cloner);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;} /* unvisited link */ a:link { color: white; } /* visited link */ a:visited { color: white; } /* mouse over link */ a:hover { color: white; } /* selected link */ a:active { color: white; }'));
	document.head.appendChild(style);
	me._button_mute.logicBlock_visible();
	me._information_ns.logicBlock_visible();
	me._information_n.logicBlock_visible();
	me._information_v.logicBlock_size();
	me._mousefollower.logicBlock_visible();
	me._tooltip.logicBlock_visible();
	me._coffee_info_vertuo_info_mouse_over.logicBlock_visible();
	me._tooltip_1.logicBlock_visible();
	me._popup_image_h.logicBlock_visible();
	me._popup_image_v.logicBlock_visible();
	me._information_b2b.logicBlock_size();
	me._info_text_body_b2b2.logicBlock_size();
	me._menu_background.logicBlock_alpha();
	me._menu_open.logicBlock_position();
	me._video_screentint_file.logicBlock_visible();
	me._screentint_info.logicBlock_visible();
	me._screentint_image.logicBlock_visible();
	me._video_screentint_youtube.logicBlock_visible();
	me._screen_tint_url.logicBlock_visible();
	me._video_popup_file.logicBlock_visible();
	me._popup_video_file.logicBlock_visible();
	me._video_popup_controls_file.logicBlock_visible();
	me._information.logicBlock_visible();
	me._information_v.logicBlock_visible();
	me._momento.logicBlock_visible();
	me._close_url_1.logicBlock_visible();
	me._vertuo.logicBlock_visible();
	me._close_url_2.logicBlock_visible();
	me._video_popup_youtube.logicBlock_visible();
	me._popup_video_youtube.logicBlock_visible();
	me._web_page.logicBlock_visible();
	me._image_popup.logicBlock_visible();
	me._popup_image_h.logicBlock_externalurl();
	me._popup_image_v.logicBlock_externalurl();
	me._information_b2b.logicBlock_visible();
	me._video_popup_close_file.logicBlock_visible();
	me._video_popup_close_youtube.logicBlock_visible();
	me._image_popup_close.logicBlock_visible();
	me._close_url.logicBlock_visible();
	player.addListener('sizechanged', function(args) { me._button_mute.logicBlock_visible();me._information_ns.logicBlock_visible();me._information_n.logicBlock_visible();me._information_v.logicBlock_size();me._mousefollower.logicBlock_visible();me._tooltip.logicBlock_visible();me._coffee_info_vertuo_info_mouse_over.logicBlock_visible();me._tooltip_1.logicBlock_visible();me._popup_image_h.logicBlock_visible();me._popup_image_v.logicBlock_visible();me._information_b2b.logicBlock_size();me._info_text_body_b2b2.logicBlock_size(); });
	player.addListener('changenode', function(args) { me._menu_background.logicBlock_alpha();me._menu_open.logicBlock_position();me._video_screentint_file.logicBlock_visible();me._screentint_info.logicBlock_visible();me._screentint_image.logicBlock_visible();me._video_screentint_youtube.logicBlock_visible();me._screen_tint_url.logicBlock_visible();me._button_mute.logicBlock_visible();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._information.logicBlock_visible();me._information_ns.logicBlock_visible();me._information_n.logicBlock_visible();me._information_v.logicBlock_visible();me._momento.logicBlock_visible();me._close_url_1.logicBlock_visible();me._vertuo.logicBlock_visible();me._close_url_2.logicBlock_visible();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me._web_page.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image_h.logicBlock_visible();me._popup_image_h.logicBlock_externalurl();me._popup_image_v.logicBlock_visible();me._popup_image_v.logicBlock_externalurl();me._information_b2b.logicBlock_visible();me._video_popup_close_file.logicBlock_visible();me._video_popup_close_youtube.logicBlock_visible();me._image_popup_close.logicBlock_visible();me._close_url.logicBlock_visible(); });
	player.addListener('configloaded', function(args) { me._mousefollower.logicBlock_visible();me._tooltip.logicBlock_visible();me._coffee_info_vertuo_info_mouse_over.logicBlock_visible();me._tooltip_1.logicBlock_visible(); });
	player.addListener('varchanged_vis_thumbnail_menu', function(args) { me._menu_background.logicBlock_alpha();me._menu_open.logicBlock_position(); });
	player.addListener('varchanged_vis_video_file', function(args) { me._video_screentint_file.logicBlock_visible();me._video_popup_file.logicBlock_visible();me._popup_video_file.logicBlock_visible();me._video_popup_controls_file.logicBlock_visible();me._video_popup_close_file.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._screentint_info.logicBlock_visible();me._information.logicBlock_visible(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me._screentint_image.logicBlock_visible();me._image_popup.logicBlock_visible();me._popup_image_h.logicBlock_visible();me._popup_image_v.logicBlock_visible();me._image_popup_close.logicBlock_visible(); });
	player.addListener('varchanged_vis_website', function(args) { me._screen_tint_url.logicBlock_visible();me._web_page.logicBlock_visible();me._close_url.logicBlock_visible(); });
	player.addListener('varchanged_vis_video_youtube', function(args) { me._video_screentint_youtube.logicBlock_visible();me._video_popup_youtube.logicBlock_visible();me._popup_video_youtube.logicBlock_visible();me._video_popup_close_youtube.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup_n', function(args) { me._information_ns.logicBlock_visible();me._information_n.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup_v', function(args) { me._information_v.logicBlock_visible(); });
	player.addListener('varchanged_vis_momento_3d', function(args) { me._momento.logicBlock_visible();me._close_url_1.logicBlock_visible(); });
	player.addListener('varchanged_vis_vertuo_3d', function(args) { me._vertuo.logicBlock_visible();me._close_url_2.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_b2b', function(args) { me._information_b2b.logicBlock_visible(); });
	player.addListener('varchanged_coffee_num', function(args) { me._popup_image_h.logicBlock_externalurl();me._popup_image_v.logicBlock_externalurl(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._node_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._node_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._node_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._node_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('varchanged_opt_thumbnail_menu_tooltip', function(args) { me._node_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip(); });
	player.addListener('sizechanged', function(args) { me.callChildLogicBlocksHotspot_ht_url_sizechanged();me.callChildLogicBlocksHotspot_ht_form_sizechanged();me.callChildLogicBlocksHotspot_ht_pdf_sizechanged();me.callChildLogicBlocksHotspot_ht_care_sizechanged();me.callChildLogicBlocksHotspot_ht_insta_sizechanged();me.callChildLogicBlocksHotspot_ht_linkedin_sizechanged();me.callChildLogicBlocksHotspot_ht_url_i_sizechanged(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_info_n_changenode();me.callChildLogicBlocksHotspot_ht_info_v_changenode();me.callChildLogicBlocksHotspot_ht_video_file_changenode();me.callChildLogicBlocksHotspot_ht_3d_changenode();me.callChildLogicBlocksHotspot_ht_3d2_changenode();me.callChildLogicBlocksHotspot_ht_url_changenode();me.callChildLogicBlocksHotspot_ht_video_youtube_changenode();me.callChildLogicBlocksHotspot_ht_form_changenode();me.callChildLogicBlocksHotspot_ht_pdf_changenode();me.callChildLogicBlocksHotspot_ht_care_changenode();me.callChildLogicBlocksHotspot_ht_insta_changenode();me.callChildLogicBlocksHotspot_ht_linkedin_changenode();me.callChildLogicBlocksHotspot_polykaraf_changenode();me.callChildLogicBlocksHotspot_polytass_changenode();me.callChildLogicBlocksHotspot_ht_wall_k_changenode();me.callChildLogicBlocksHotspot_ht_info_changenode();me.callChildLogicBlocksHotspot_ht_info_b2b_changenode();me.callChildLogicBlocksHotspot_ht_image_changenode();me.callChildLogicBlocksHotspot_ht_url_i_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_info_n_configloaded();me.callChildLogicBlocksHotspot_ht_info_v_configloaded();me.callChildLogicBlocksHotspot_ht_video_file_configloaded();me.callChildLogicBlocksHotspot_ht_3d_configloaded();me.callChildLogicBlocksHotspot_ht_3d2_configloaded();me.callChildLogicBlocksHotspot_ht_url_configloaded();me.callChildLogicBlocksHotspot_ht_video_youtube_configloaded();me.callChildLogicBlocksHotspot_ht_form_configloaded();me.callChildLogicBlocksHotspot_ht_pdf_configloaded();me.callChildLogicBlocksHotspot_ht_care_configloaded();me.callChildLogicBlocksHotspot_ht_insta_configloaded();me.callChildLogicBlocksHotspot_ht_linkedin_configloaded();me.callChildLogicBlocksHotspot_ht_wall_k_configloaded();me.callChildLogicBlocksHotspot_ht_info_configloaded();me.callChildLogicBlocksHotspot_ht_info_b2b_configloaded();me.callChildLogicBlocksHotspot_ht_image_configloaded();me.callChildLogicBlocksHotspot_ht_url_i_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_info_n_mouseover();me.callChildLogicBlocksHotspot_ht_info_v_mouseover();me.callChildLogicBlocksHotspot_ht_node_enter_recycle_mouseover();me.callChildLogicBlocksHotspot_ht_video_file_mouseover();me.callChildLogicBlocksHotspot_ht_3d_mouseover();me.callChildLogicBlocksHotspot_ht_3d2_mouseover();me.callChildLogicBlocksHotspot_ht_url_mouseover();me.callChildLogicBlocksHotspot_ht_video_youtube_mouseover();me.callChildLogicBlocksHotspot_ht_form_mouseover();me.callChildLogicBlocksHotspot_ht_pdf_mouseover();me.callChildLogicBlocksHotspot_ht_care_mouseover();me.callChildLogicBlocksHotspot_ht_insta_mouseover();me.callChildLogicBlocksHotspot_ht_node_link_mouseover();me.callChildLogicBlocksHotspot_ht_node_exit_mouseover();me.callChildLogicBlocksHotspot_ht_linkedin_mouseover();me.callChildLogicBlocksHotspot_ht_node_zoom_mouseover();me.callChildLogicBlocksHotspot_ht_node_business_mouseover();me.callChildLogicBlocksHotspot_ht_node_enter_mouseover();me.callChildLogicBlocksHotspot_ht_node_nachh_mouseover();me.callChildLogicBlocksHotspot_ht_info_mouseover();me.callChildLogicBlocksHotspot_ht_info_b2b_mouseover();me.callChildLogicBlocksHotspot_ht_image_mouseover();me.callChildLogicBlocksHotspot_ht_url_i_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_info_n_hastouch();me.callChildLogicBlocksHotspot_ht_info_v_hastouch();me.callChildLogicBlocksHotspot_ht_video_file_hastouch();me.callChildLogicBlocksHotspot_ht_3d_hastouch();me.callChildLogicBlocksHotspot_ht_3d2_hastouch();me.callChildLogicBlocksHotspot_ht_url_hastouch();me.callChildLogicBlocksHotspot_ht_video_youtube_hastouch();me.callChildLogicBlocksHotspot_ht_form_hastouch();me.callChildLogicBlocksHotspot_ht_pdf_hastouch();me.callChildLogicBlocksHotspot_ht_care_hastouch();me.callChildLogicBlocksHotspot_ht_insta_hastouch();me.callChildLogicBlocksHotspot_ht_linkedin_hastouch();me.callChildLogicBlocksHotspot_ht_wall_k_hastouch();me.callChildLogicBlocksHotspot_ht_info_hastouch();me.callChildLogicBlocksHotspot_ht_info_b2b_hastouch();me.callChildLogicBlocksHotspot_ht_image_hastouch();me.callChildLogicBlocksHotspot_ht_url_i_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_info_n_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_v_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_video_file_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_3d_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_3d2_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_url_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_video_youtube_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_form_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_pdf_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_care_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_insta_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_linkedin_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_wall_k_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_b2b_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_image_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_url_i_activehotspotchanged(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_form_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_pdf_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_care_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_insta_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_linkedin_varchanged_vis_info_popup();me.callChildLogicBlocksHotspot_ht_url_i_varchanged_vis_info_popup(); });
	player.addListener('varchanged_vis_image_popup', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_form_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_pdf_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_care_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_insta_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_linkedin_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_wall_k_varchanged_vis_image_popup();me.callChildLogicBlocksHotspot_ht_url_i_varchanged_vis_image_popup(); });
	player.addListener('varchanged_vis_website', function(args) { me.callChildLogicBlocksHotspot_ht_url_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_form_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_pdf_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_care_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_insta_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_linkedin_varchanged_vis_website();me.callChildLogicBlocksHotspot_ht_url_i_varchanged_vis_website(); });
	player.addListener('varchanged_vis_video_youtube', function(args) { me.callChildLogicBlocksHotspot_ht_wall_k_varchanged_vis_video_youtube(); });
	player.addListener('varchanged_vis_info_popup_v', function(args) { me.callChildLogicBlocksHotspot_ht_wall_k_varchanged_vis_info_popup_v(); });
	player.addListener('varchanged_ht_ani2', function(args) { me.callChildLogicBlocksHotspot_polykaraf_varchanged_ht_ani2();me.callChildLogicBlocksHotspot_polytass_varchanged_ht_ani2(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};