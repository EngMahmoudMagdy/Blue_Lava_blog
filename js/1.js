<script type='text/javascript'> 
//<![CDATA[
 
jQuery(function(){
 
		jQuery.noConflict();
	
		jQuery('ul.sf-menu').superfish({
			delay:       200,                            // one second delay on mouseout 
			animation:   {'marginLeft':'0px',opacity:'show',height:'show'},  // fade-in and slide-down animation 
			speed:       'fast',                          // faster animation speed 
			autoArrows:  true,                           // disable generation of arrow mark-up 
			onBeforeShow:      function(){ this.css('marginLeft','20px'); },
			dropShadows: false                            // disable drop shadows 
		});
		
		jQuery('ul.sf-menu ul > li').addClass('noLava');
		jQuery('ul.sf-menu > li').addClass('top-level');
		
		jQuery('ul.sf-menu > li > a.sf-with-ul').parent('li').addClass('sf-ul');
		
				
		if (!(jQuery("#footer_widgets .block_b").length == 0)) {
			jQuery("#footer_widgets .block_b").each(function (index, domEle) {
				// domEle == this
				if ((index+1)%3 == 0) jQuery(domEle).after("<div class='clear'></div>");
			});
		};
		
		/* search form */
		
		jQuery('#search').toggle(
			function () {jQuery('#searchbox').animate({opacity:'toggle', marginLeft:'-210px'},500);},
			function () {jQuery('#searchbox').animate({opacity:'toggle', marginLeft:'-200px'}, 500);}
		);
		
		var $searchinput = jQuery("#header #searchbox input");
		var $searchvalue = $searchinput.val();
		
		$searchinput.focus(function(){
			if (jQuery(this).val() == $searchvalue) jQuery(this).val("");
		}).blur(function(){
			if (jQuery(this).val() == "") jQuery(this).val($searchvalue);
		});
		
	
		jQuery('ul.sf-menu li ul').append('<li class="bottom_bg noLava"></li>');
		
		var active_subpage = jQuery('ul.sf-menu ul li.current-cat, ul.sf-menu ul li.current_page_item').parents('li.top-level').prevAll().length;
		
		if (active_subpage) jQuery('ul.sf-menu').lavaLamp({ startItem: active_subpage });
		else jQuery('ul.sf-menu').lavaLamp();
			
		
					
			/* featured slider */
			
			jQuery('#spotlight').cycle({
				timeout: 0,
				speed: 1000, 
				fx: 'fade'
			});
			
			var $featured_item = jQuery('div.featitem');
			var $slider_control = jQuery('div#f_menu');
			var ordernum;
			var pause_scroll = false;
			var $featured_area = jQuery('div#featured_content');			
	 
			function gonext(this_element){
				$slider_control
				.children("div.featitem.active")
				.removeClass('active');
				this_element.addClass('active');
				ordernum = this_element.find("span.order").html();
				jQuery('#spotlight').cycle(ordernum - 1);
			} 
			
			$featured_item.click(function() {
				clearInterval(interval);
				gonext(jQuery(this)); 
				return false;
			});
			
			jQuery('a#previous, a#next').click(function() {
				clearInterval(interval);
				if (jQuery(this).attr("id") === 'next') {
					auto_number = $slider_control.children("div.featitem.active").prevAll().length+1;
					if (auto_number === $featured_item.length) auto_number = 0;
				} else {
					auto_number = $slider_control.children("div.featitem.active").prevAll().length-1;
					if (auto_number === -1) auto_number = $featured_item.length-1;
				};
				gonext($featured_item.eq(auto_number));
				return false;
			});
 
				
			
			var auto_number;
			var interval;
			
			$featured_item.bind('autonext', function autonext(){
				if (!(pause_scroll)) gonext(jQuery(this)); 
				return false;
			});
			
							interval = setInterval(function () {
					auto_number = $slider_control.find("div.featitem.active span.order").html();
					if (auto_number == $featured_item.length) auto_number = 0;
					$featured_item.eq(auto_number).trigger('autonext');
				}, 5000);
					
		});
//]]>
</script>
<!-- page navi start -->
<script type='text/javascript'>;
var home_page='/';
var urlactivepage=location.href;
var postperpage=2; /*  ?? ????? ??? ???? ??? ??????*/
var numshowpage=6; /* ??? ?? ?? ??????? ???? ????? ????? */
var upPageWord ='??????';
var downPageWord ='??????';
</script>;
<script type='text/javascript'>
//<![CDATA[
var nopage
var jenis
var nomerhal
var lblname1
halamanblogger()
function loophalaman(banyakdata){
var html=''
nomerkiri=parseInt(numshowpage/2)
if(nomerkiri==numshowpage-nomerkiri){
numshowpage=nomerkiri*2+1}
mulai=nomerhal-nomerkiri
if(mulai<1)mulai=1
maksimal=parseInt(banyakdata/postperpage)+1
if(maksimal-1==banyakdata/postperpage)maksimal=maksimal-1
akhir=mulai+numshowpage-1
if(akhir>maksimal)akhir=maksimal
html+="<span class='showpageOf'>  ???? "+nomerhal+'  ??  '+maksimal+"</span>"
var prevnomer=parseInt(nomerhal)-1
if(nomerhal>1){
if(nomerhal==2){
if(jenis=="page"){
html+='<span class="showpage"><a href="'+home_page+'">'+upPageWord+'</a></span>'
}else{
html+='<span class="showpageNum"><a href="/search/label/'+lblname1+'?&max-results='+postperpage+'">'+upPageWord+'</a></span>'}
}else{
if(jenis=="page"){
html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+prevnomer+');return false">'+upPageWord+'</a></span>'
}else{
html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+prevnomer+');return false">'+upPageWord+'</a></span>'}}}
if(mulai>1){
if(jenis=="page"){
html+='<span class="showpageNum"><a href="'+home_page+'">1</a></span>'
}else{
html+='<span class="showpageNum"><a href="/search/label/'+lblname1+'?&max-results='+postperpage+'">1</a></span>'}}
if(mulai>2){
html+=' <span style="float:right;color:gray;padding:5px 4px;"> ~ </span> '}
for(var jj=mulai;jj<=akhir;jj++){
if(nomerhal==jj){
html+='<span class="showpagePoint">'+jj+'</span>'
}else if(jj==1){
if(jenis=="page"){
html+='<span class="showpageNum"><a href="'+home_page+'">1</a></span>'
}else{
html+='<span class="showpageNum"><a href="/search/label/'+lblname1+'?&max-results='+postperpage+'">1</a></span>'}
}else{
if(jenis=="page"){
html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+jj+');return false">'+jj+'</a></span>'
}else{
html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+jj+');return false">'+jj+'</a></span>'}}}
if(akhir<maksimal-1){
html+='<span style="float:right;color:gray;padding-right: 4px;padding: 5px 4px;"> ~ </span>'}
if(akhir<maksimal){
if(jenis=="page"){
html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+maksimal+');return false">'+maksimal+'</a></span>'
}else{
html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+maksimal+');return false">'+maksimal+'</a></span>'}}
var nextnomer=parseInt(nomerhal)+1
if(nomerhal<maksimal){
if(jenis=="page"){
html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+nextnomer+');return false">'+downPageWord+'</a></span>'
}else{
html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+nextnomer+');return false">'+downPageWord+'</a></span>'}}
var pageArea=document.getElementsByName("pageArea")
var blogPager=document.getElementById("blog-pager")
for(var p=0;p<pageArea.length;p++){
pageArea[p].innerHTML=html}
if(pageArea&&pageArea.length>0){
html=''}
if(blogPager){
blogPager.innerHTML=html}}
function hitungtotaldata(root){
var feed=root.feed
var totaldata=parseInt(feed.openSearch$totalResults.$t,10)
loophalaman(totaldata)}
function halamanblogger(){
var thisUrl=urlactivepage
if(thisUrl.indexOf("/search/label/")!=-1){
if(thisUrl.indexOf("?updated-max")!=-1){
lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?updated-max"))
}else{
lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?&max"))}}
if(thisUrl.indexOf("?q=")==-1&&thisUrl.indexOf(".html")==-1){
if(thisUrl.indexOf("/search/label/")==-1){
jenis="page"
if(urlactivepage.indexOf("#PageNo=")!=-1){
nomerhal=urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length)
}else{
nomerhal=1}
document.write("<script src=\""+home_page+"feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata\"><\/script>")
}else{
jenis="label"
if(thisUrl.indexOf("&max-results=")==-1){
postperpage=20}
if(urlactivepage.indexOf("#PageNo=")!=-1){
nomerhal=urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length)
}else{
nomerhal=1}
document.write('<script src="'+home_page+'feeds/posts/summary/-/'+lblname1+'?alt=json-in-script&callback=hitungtotaldata&max-results=1" ><\/script>')}}}
function redirectpage(numberpage){
jsonstart=(numberpage-1)*postperpage
nopage=numberpage
var nBody=document.getElementsByTagName('head')[0]
var newInclude=document.createElement('script')
newInclude.type='text/javascript'
newInclude.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost")
nBody.appendChild(newInclude)}
function redirectlabel(numberpage){
jsonstart=(numberpage-1)*postperpage
nopage=numberpage
var nBody=document.getElementsByTagName('head')[0]
var newInclude=document.createElement('script')
newInclude.type='text/javascript'
newInclude.setAttribute("src",home_page+"feeds/posts/summary/-/"+lblname1+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost")
nBody.appendChild(newInclude)}
function finddatepost(root){
post=root.feed.entry[0]
var timestamp1=post.published.$t.substring(0,19)+post.published.$t.substring(23,29)
var timestamp=encodeURIComponent(timestamp1)
if(jenis=="page"){
var alamat="/search?updated-max="+timestamp+"&max-results="+postperpage+"#PageNo="+nopage
}else{
var alamat="/search/label/"+lblname1+"?updated-max="+timestamp+"&max-results="+postperpage+"#PageNo="+nopage}
location.href=alamat}
//]]></script>
<style>#blog-pager{width:70%;margin:0 auto}.showpageArea,.showpageArea a,.showpageNum a,.showpageOf,.showpage a:link,.showpageNum a:link{color:#666}.showpageArea{margin:10px 5px 3px 5px;padding:0;font-size:12px}.showpageArea,.showpageArea a,.showpageNum a,.showpage a{float:left}.showpageArea,.showpageArea a,.showpageNum a,.showpagePoint,.showpageOf,.showpage a,.showpage a:link,.showpageNum a:link{display:inline}.showpageArea a,.showpageNum a,.showpageOf,.showpage a,.showpage a:link,.showpageNum a:link{background:#fff}.showpageArea a,.showpageNum a,.showpage a{padding:4px 7px}.showpageArea a,.showpageNum a,.showpagePoint,.showpageOf,.showpage a,.showpage a:link,.showpageNum a:link{margin:0 5px 0 0;border-radius:25px;-webkit-border-radius:25px}.showpageArea a,.showpageNum a,.showpageNum a:hover,.showpagePoint,.showpageOf,.showpage a,.showpage a:hover,.showpage a:link,.showpageNum a:link{text-decoration:none}.showpageArea a,.showpageNum a,.showpagePoint,.showpageOf,.showpage a:link,.showpageNum a:link{border:1px solid silver}.showpageNum a:hover{background:silver!important;border:1px solid silver!important}.showpagePoint{background:silver;text-shadow:0 1px 2px black;color:white}.showpagePoint,.showpageOf,.showpage a:link,.showpageNum a:link{padding:2px 6px;float:right}.showpageOf{font-family:tahoma}.showpage a{border:1px solid #b9a2a2;color:#674d4d}.showpage a:hover{ background: none repeat scroll 0 0 silver !important;
    border: 1px solid silver !important;}</style>
<!-- page navi end -->
<script type="text/javascript">
if (window.jstiming) window.jstiming.load.tick('widgetJsBefore');
</script><script type="text/javascript" src="https://www.blogger.com/static/v1/widgets/2076720373-widgets.js"></script>
<script type="text/javascript" src="https://apis.google.com/js/plusone.js"></script>
<script type='text/javascript'>
if (typeof(BLOG_attachCsiOnload) != 'undefined' && BLOG_attachCsiOnload != null) { window['blogger_templates_experiment_id'] = "templatesV1";window['blogger_blog_id'] = '4990330965617944796';BLOG_attachCsiOnload(''); }_WidgetManager._Init('//www.blogger.com/rearrange?blogID\x3d4990330965617944796','//gfdjgoigrre.blogspot.com/','4990330965617944796');
_WidgetManager._SetDataContext([{'name': 'blog', 'data': {'blogId': '4990330965617944796', 'bloggerUrl': 'http://www.blogger.com', 'title': 'fdgsfjgoij', 'pageType': 'index', 'url': 'http://gfdjgoigrre.blogspot.com/', 'canonicalUrl': 'http://gfdjgoigrre.blogspot.com/', 'canonicalHomepageUrl': 'http://gfdjgoigrre.blogspot.com/', 'homepageUrl': 'http://gfdjgoigrre.blogspot.com/', 'blogspotFaviconUrl': 'http://gfdjgoigrre.blogspot.com/favicon.ico', 'enabledCommentProfileImages': true, 'adultContent': false, 'disableAdSenseWidget': false, 'analyticsAccountNumber': '', 'searchLabel': '', 'searchQuery': '', 'pageName': '', 'pageTitle': 'fdgsfjgoij', 'encoding': 'UTF-8', 'locale': 'ar', 'localeUnderscoreDelimited': 'ar', 'isPrivate': false, 'isMobile': false, 'isMobileRequest': false, 'mobileClass': '', 'isPrivateBlog': false, 'languageDirection': 'rtl', 'feedLinks': '\74link rel\75\42alternate\42 type\75\42application/atom+xml\42 title\75\42fdgsfjgoij - Atom\42 href\75\42http://gfdjgoigrre.blogspot.com/feeds/posts/default\42 /\76\n\74link rel\75\42alternate\42 type\75\42application/rss+xml\42 title\75\42fdgsfjgoij - RSS\42 href\75\42http://gfdjgoigrre.blogspot.com/feeds/posts/default?alt\75rss\42 /\76\n\74link rel\75\42service.post\42 type\75\42application/atom+xml\42 title\75\42fdgsfjgoij - Atom\42 href\75\42http://www.blogger.com/feeds/4990330965617944796/posts/default\42 /\76\n', 'meTag': '\74link rel\75\42me\42 href\75\42http://www.blogger.com/profile/15787003124676098701\42 /\76\n', 'openIdOpTag': '\74link rel\75\42openid.server\42 href\75\42http://www.blogger.com/openid-server.g\42 /\76\n\74link rel\75\42openid.delegate\42 href\75\42http://gfdjgoigrre.blogspot.com/\42 /\76\n', 'latencyHeadScript': '\74script type\75\42text/javascript\42\76(function() { var b\75window,f\75\42chrome\42,g\75\42tick\42,k\75\42jstiming\42;(function(){function d(a){this.t\75{};this.tick\75function(a,d,c){var e\75void 0!\75c?c:(new Date).getTime();this.t[a]\75[e,d];if(void 0\75\75c)try{b.console.timeStamp(\42CSI/\42+a)}catch(h){}};this[g](\42start\42,null,a)}var a;b.performance\46\46(a\75b.performance.timing);var n\75a?new d(a.responseStart):new d;b.jstiming\75{Timer:d,load:n};if(a){var c\75a.navigationStart,h\75a.responseStart;0\74c\46\46h\76\75c\46\46(b[k].srt\75h-c)}if(a){var e\75b[k].load;0\74c\46\46h\76\75c\46\46(e[g](\42_wtsrt\42,void 0,c),e[g](\42wtsrt_\42,\42_wtsrt\42,h),e[g](\42tbsd_\42,\42wtsrt_\42))}try{a\75null,\nb[f]\46\46b[f].csi\46\46(a\75Math.floor(b[f].csi().pageT),e\46\0460\74c\46\46(e[g](\42_tbnd\42,void 0,b[f].csi().startE),e[g](\42tbnd_\42,\42_tbnd\42,c))),null\75\75a\46\46b.gtbExternal\46\46(a\75b.gtbExternal.pageT()),null\75\75a\46\46b.external\46\46(a\75b.external.pageT,e\46\0460\74c\46\46(e[g](\42_tbnd\42,void 0,b.external.startE),e[g](\42tbnd_\42,\42_tbnd\42,c))),a\46\46(b[k].pt\75a)}catch(p){}})();b.tickAboveFold\75function(d){var a\0750;if(d.offsetParent){do a+\75d.offsetTop;while(d\75d.offsetParent)}d\75a;750\76\75d\46\46b[k].load[g](\42aft\42)};var l\75!1;function m(){l||(l\75!0,b[k].load[g](\42firstScrollTime\42))}b.addEventListener?b.addEventListener(\42scroll\42,m,!1):b.attachEvent(\42onscroll\42,m);\n })();\74/script\076', 'mobileHeadScript': '', 'view': '', 'dynamicViewsCommentsSrc': '//www.blogblog.com/dynamicviews/4224c15c4e7c9321/js/comments.js', 'dynamicViewsScriptSrc': '//www.blogblog.com/dynamicviews/cda3ddef07a85452', 'plusOneApiSrc': 'https://apis.google.com/js/plusone.js', 'sf': 'n'}}, {'name': 'skin', 'data': {'vars': {}, 'override': ''}}, {'name': 'view', 'data': {'classic': {'name': 'classic', 'url': '?view\75classic'}, 'flipcard': {'name': 'flipcard', 'url': '?view\75flipcard'}, 'magazine': {'name': 'magazine', 'url': '?view\75magazine'}, 'mosaic': {'name': 'mosaic', 'url': '?view\75mosaic'}, 'sidebar': {'name': 'sidebar', 'url': '?view\75sidebar'}, 'snapshot': {'name': 'snapshot', 'url': '?view\75snapshot'}, 'timeslide': {'name': 'timeslide', 'url': '?view\75timeslide'}}}]);
_WidgetManager._RegisterWidget('_NavbarView', new _WidgetInfo('Navbar1', 'navbar', null, document.getElementById('Navbar1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HeaderView', new _WidgetInfo('Header1', 'header', null, document.getElementById('Header1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML3', 'main', null, document.getElementById('HTML3'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_BlogView', new _WidgetInfo('Blog1', 'main', null, document.getElementById('Blog1'), {'cmtInteractionsEnabled': false, 'lightboxEnabled': true, 'lightboxModuleUrl': 'https://www.blogger.com/static/v1/jsbin/965606219-lbx__ar.js', 'lightboxCssUrl': 'https://www.blogger.com/static/v1/v-css/2392111094-lightbox_bundle_rtl.css'}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML2', 'sidebar', null, document.getElementById('HTML2'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML4', 'sidebar', null, document.getElementById('HTML4'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_HTMLView', new _WidgetInfo('HTML1', 'sidebar', null, document.getElementById('HTML1'), {}, 'displayModeFull'));
_WidgetManager._RegisterWidget('_PopularPostsView', new _WidgetInfo('PopularPosts1', 'block2', null, document.getElementById('PopularPosts1'), {}, 'displayModeFull'));
</script>