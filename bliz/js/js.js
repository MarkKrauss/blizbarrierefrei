$(document).ready(function() {
	
	/*
	 *  Hover Main Menü:
	 * 
	 *	Öffnen des Unter-Menüs beim Überfahren mit der Maus oder mit dem Fokuspunkt von der Tabtaste
	 * 
	 * */
	function hoverMenu(a){
		//With Mouse
		$("."+a+"a").hover(function(){
			$(this).children().eq(1).fadeIn("fast");
		},function(){
			$(this).children().eq(1).fadeOut("fast");
		});
		//With Tabulator
		$("."+a+"a").focusin(function(){
			$(this).children().eq(1).fadeIn(10);
		});
		$("."+a+"a").focusout(function(){
			$(this).children().eq(1).fadeOut(10);
		});
	}
	hoverMenu("studium");
	hoverMenu("projekte");
	hoverMenu("fachbereich");
	hoverMenu("international");
	
	
	/*
	 *	Zeige skiplinks an, wenn mit der Tabtaste der Fokus gesetzt ist.
	 * */ 
	$("#skiplinks li").focusin(function(){
		$(this).css({"top":"0px"});
	});
	$("#skiplinks li").focusout(function(){
		$(this).css({"top":"-43px"});
	});


	/*
	 *	Setzt das Menü und das Logo an den Fensteranfang wenn man zu weit 
	 * 	nach unten scrollt und somit den Header(Navigation) optisch verlässt.
	 * 
	 * 	Bug, wenn man nicht scrollt sondern nur mit der Tastatur steuert, da
	 *  der Befehl auf das Scrollverhalten des Users reagiert.
	 * */
	$(window).scroll(function(){
		if($(this).scrollTop()>100){
			$("#wrapper-nav").css({"position":"fixed"});
			$(".submenu").css({"position":"fixed","top":"59px"});
			$("#iconLogo").show();
		}else{
			$("#wrapper-nav").css({"position":"relative","top":"0"});
			$(".submenu").css({"position":"absolute","top":"59px"});
			$("#iconLogo").hide();
		}
	});
	
	
	/*
	 *	setzt Klasse "Aktive" zur Navigation wenn der Punkt angeklickt wird.
	 * 	Die Aktive Seite bekommt einen Grünen Hintergrund.
	 * */
	function addActive(s){
		if($("#mininavi a").hasClass(""+s)){
			$("."+s+"a").addClass("active");
		}	
	}
	addActive("studium");
	addActive("projekte");
	addActive("fachbereich");
	addActive("international");
	
	
	/*
	 *	Scrollt das Fenster nach oben.
	 * 	Focus startet auch am Anfang.
	 * */
	$("#scroll_top button").click(function() {
    	$('html, body').animate({
	        scrollTop: $("#header").offset().top
	    }, 1000);
	    $("#skiplinks").focus();
	});


	/*
	 *	Pfeiltastennutzung in Navigation(ErsterOrdnung) füt Links/Rechts Steuerung
	 * */ 
	$("#mainnav .firstlink").focus(function() {
		$("#mainnav .firstlink").keyup(function(e) {
	        if (e.keyCode == 37) 
	        {  
	            $(this).parent().prev().children(".firstlink").focus();
	        }
	        if(e.keyCode==39)
	        {	            
	            $(this).parent().next().children(".firstlink").focus();
	        }
	  	});      
	});
	
	/*
	 *	Infobox für die Steuerung der Navigation und Hinweis auf "Sidebar"
	 * */
	$("#info button").click(function() {
		$("#infobox").show();
		$("#infobox h1").focus();
	});
	$("#infoclose").click(function() {
		$("#infobox").hide();
		$("#info button").focus();
	});
	
	//toDo: Markiert sidebar aktive Seite(Link)
	/*
	var currPage =$("#mininavi span").last().attr('class');
	$(".sidebox li a ."+currPage).attr("id",currPage);
	*/
	
	
});