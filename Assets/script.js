$(document).ready(); {
    
    // Displays the Current Day
    $("#currentDay").text('Today is ' + moment().format('MMMM Do YYYY, h:mm:ss a'));

    

    

    // Gets the input value and stores it
        $('.saveBtn').on('click', function(e){
            
            var input = $(this).siblings(".event").val()
            
            var time = $(this).siblings(".event").attr("id")
            

            localStorage.setItem(time, input)
           
        })

        // Displays color depending on the time
        
        $(".event").each(function() {
        var timeSlot = parseInt($(this).attr("id").split("-")[1]);
        console.log("Timeslot: "+timeSlot);

        var currentTime = moment().format('HH').split(":");
        console.log("CurrentTime: "+currentTime);
    
        
        if (timeSlot < parseInt(currentTime[0])) {
            $(this).addClass('past');
        }
        else if (parseInt(currentTime[0]) === timeSlot) {
            console.log("Greater");
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        else {
            console.log("Less");
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future')
        }
        
    } )
        // A loop for the times 9-17
            var displayTask = function(){

            for (i=9; i<18; i++)

        //$(".slot #"+i+"").val(localStorage.getItem(i))
        $("#hour-"+i).val(localStorage.getItem("hour-"+i));
        }
        displayTask();    
        
}
































