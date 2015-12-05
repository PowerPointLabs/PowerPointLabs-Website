
var CURRENT_TESTIMONIAL = 0;

function showTestimonials(){
	var TESTIMONIALS = new Array("I downloaded the PowerPoint Labs plugin...this is great! I can see a lot of different ways how I can use this to make better presentations and videos! It really enhances my ability to visually communicate complex topics. &nbsp&nbsp<i>-- Jeff</i>",
 	 "I will just say that your product is awesome and has helped so much in delivering presentations that would realistically have taken so much longer to produce. &nbsp&nbsp<i>-- Grant Roberts, UK</i>"
 	 ,"As I am a power user of PowerPoint, I truly appreciate those usable and powerful features that are provided with the plugin. &nbsp&nbsp<i>--Simon, Singapore</i>"
 	 ,"Just discovered this plug-in, and i have fallen in love with it, only after the first 10 pages of the tutorial! &nbsp&nbsp<i>--Migauel, Spain</i>"
 	 ,"Thanks guys for this awesome add-in. I´m looking forward to create awesome presentations with this features that you just gave me. &nbsp&nbsp<i>--Jarami</i>"
 	 ,"I've just tried out your software, and I must say it's a excellent idea to supercharge PowerPoint presentations. &nbsp&nbsp<i>-- Lasith, Japan</i>"
 	 ,"I want to thank you for developing such cool features for PowerPoint productivity. I already contacted a bunch of friends and encourage them to try it on. Specially, the Shapes Lab utility, it is one the greatest time savers I could find. &nbsp&nbsp<i>-- Jimmy, Peru</i>"
 	 ,"Awesome plug-in! Thank you so much. This really helps give PPT some of the features that Keynote shined at. (i.e. Magic Move, etc.) This will be a fantastic timesaver! &nbsp&nbsp<i>-- Joe, Minneapolis</i>"
 	 );
	  
	document.getElementById("testimonial-row").innerHTML = TESTIMONIALS[CURRENT_TESTIMONIAL];
	var size = TESTIMONIALS.length;
	CURRENT_TESTIMONIAL++;
	if (CURRENT_TESTIMONIAL>=size){
		CURRENT_TESTIMONIAL = 0;
	} 
	setTimeout("showTestimonials()",5000);
}
window.onload = showTestimonials;