var pptlabs = pptlabs||{};

(function(testimonial) {
    var currentTestimonial = 0;
    testimonial.showTestimonials = function() {
        var TESTIMONIALS = new Array(
        "I want to thank you for developing such cool features for PowerPoint productivity. I already contacted a bunch of "
          + "friends and encourage them to try it on. Specially, the Shapes Lab utility, it is one the greatest time savers I "
          + "could find. &nbsp&nbsp<i>-- Jimmy, Peru</i>"
        ,"Awesome plug-in! Thank you so much. This really helps give PPT some of the features that Keynote shined at. (i.e. "
          + "Magic Move, etc.) This will be a fantastic timesaver! &nbsp&nbsp<i>-- Joe, Minneapolis</i>"
        ,"I will just say that your product is awesome and has helped so much in delivering presentations that would " 
          + "realistically have taken so much longer to produce. &nbsp&nbsp<i>-- Grant Roberts, UK</i>"
        ,"The magnifying glass alone is priceless. It's spot on as far as meeting a need. &nbsp&nbsp<i>-- Lauren, New Zealand</i>"
        ,"The demo/activity slide deck was wonderful. ‘out of the box’ and working near instantly. &nbsp&nbsp<i>-- Robert, Chicago</li>"
        ,"Just wanted to say this add on is absolutely fantastic and a real help when developing my eLearning materials."
          + "&nbsp&nbsp<i>-- Ian, UK</li>"
        ,"As I am a power user of PowerPoint, I truly appreciate those usable and powerful features that are provided "
          + "with the plugin. &nbsp&nbsp<i>--Simon, Singapore</i>"
        ,"Just discovered this plug-in, and i have fallen in love with it, only after the first 10 pages of the tutorial! "
          + "&nbsp&nbsp<i>--Migauel, Spain</i>"
        ,"I've just tried out your software, and I must say it's a excellent idea to supercharge PowerPoint presentations."
          + " &nbsp&nbsp<i>-- Lasith, Japan</i>"
        ,"This looks fantastic - very impressive and relevant additional functionality. &nbsp&nbsp<i>-- Weir, New Zealand</i>"
        ,"Dear PowerpointLabs. Your add-in is so awesome. &nbsp&nbsp<i>-- Phung, Vietnam</li>"
        ,"This looks awesome - Thanks for making it! &nbsp&nbsp<i>--Tash, New Zealand</li>"
        ,"While I have just started to run through the tutorial for your PowerPoint plug-in. It is very impressive. "
          + "&nbsp&nbsp<i>-- Dan, Australia</li>"
        ,"It looks fabulous, and you have done a wonderful job. &nbsp&nbsp<i>--Walt, Nebraska</li>"
        ,"A True useful tool. Kudos to developers. &nbsp&nbsp<i>--Mahesh, India</li>"
        ,"I have to say, I'm very impressed with what I see in this so far. &nbsp&nbsp<i>-- Ray, USA</li>"
        ,"I downloaded the PowerPoint Labs plugin...this is great! I can see a lot of different "
          + "ways how I can use this to make better presentations and videos! It really enhances my ability to visually "
          + "communicate complex topics. &nbsp&nbsp<i>-- Jeff</i>"
        ,"Thanks guys for this awesome add-in. I´m looking forward to create awesome presentations with this features that "
          + "you just gave me. &nbsp&nbsp<i>--Jarami</i>"
        ,"Your plugin is BRILLIANT!... Thank You very much for it! &nbsp&nbsp<i>--Maciej, Poland</i>"
        ,"Your plug-in is pretty amazing. Well done and thank you for sharing. &nbsp&nbsp<i>-- Michael, USA</i>"
         );
        document.getElementById("testimonial-row").innerHTML = TESTIMONIALS[currentTestimonial];
        var size = TESTIMONIALS.length;
        currentTestimonial++;
        if (currentTestimonial >= size){
            currentTestimonial = 0;
        } 
        setTimeout("pptlabs.showTestimonials()",8500);
    };
})(pptlabs);

(function(usersCount) {
    usersCount.usersCounter = function(currentDate, baseDate, newUsersPerHour, baseUser) {
        var errorMsg = "Thousands of";
        if (!currentDate || !baseDate) {
            return errorMsg;
        }
        var currBaseDateDifference = new Date(currentDate - baseDate);
        if (currBaseDateDifference < 0) {
            return errorMsg;
        }

        var date = currBaseDateDifference.getDate();
        var month = currBaseDateDifference.getMonth();
        var year = currBaseDateDifference.getFullYear() - 1970;
        var numOfMonths = month + year * 12;
        var numOfDays = date + numOfMonths * 30;
        var numOfHours = numOfDays * 24;
        var numberOfUsers = numOfHours * newUsersPerHour;
        numberOfUsers += baseUser;
        return usersCount.formatNumber(numberOfUsers);
    };

    usersCount.formatNumber = function(number) {
        number += '';
        var expression = /(\d+)(\d{3})/;
        while (expression.test(number)) {
            number = number.replace(expression, '$1' + ',' + '$2');
        }
        return number;
    };
})(pptlabs);

$(function() {
    pptlabs.showTestimonials();
    // Parameters for the estimation calculation
    var baseDate = new Date('November 30, 2015 00:00:00');  //The date the parameters were adjusted
    var baseUsers = 150000;     //The submission count on the above date
    var newUsersPerHour = 21; //The rate at which the new users is growing
    //set the submission count in the page
    var e = document.getElementById("user-count-numbers-row");
    var currentDate = new Date();
    e.innerHTML = pptlabs.usersCounter(currentDate, baseDate, newUsersPerHour, baseUsers);
});