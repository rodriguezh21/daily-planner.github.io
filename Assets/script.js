$(document).ready(); {
    
    // Displays the Current Day
    $("#currentDay").text('Today is ' + moment().format('MMMM Do YYYY, h:mm:ss a'));

    // Gets the input value and stores it
        $('.saveBtn').on('click', function(e){
            
            var input = $(this).siblings(".event").val()
            
            var time = $(this).siblings(".event").attr("id")
            

            localStorage.setItem(time, input)
           
        })

        // An attempt to change the color of the booking once clicked
        $('saveBtn').on('click', function (){
            $('.event').backgroundColor = red;
        })
        // A loop for the times 9-17
            var displayTask = function(){

            for (i=9; i<18; i++)

      $(".slot #"+i+"").val(localStorage.getItem(i))


        }
        displayTask();

        
}
































