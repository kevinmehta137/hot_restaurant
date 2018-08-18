$(".newBooking").on("click", function(){
  event.preventDefault();

  		var newBooking = {
  			Guest Name $("#guestName").val().trim(),
  			Guest Cell: $("#guestCell").val().trim(),
  			Guest Email: $("#guestEmail").val().trim(),
          Guest ID: $("#guestID").val().trim(),
        Guest Group: $("#guestGroup").val().trim()
  		};

      // $.post("/api/tables", newBooking)??

      //    $.post('/tables', reservation)
       //.done(console.log)
       //.fail(console.error)

      .done(function(data) {
console.log(newBooking);

          if( === true){
            alert("Booking Accepted")
          }

          if(data === false){
            alert("You're Waitlisted. Please Check Back")
          }

        $("#guestName").val("");
        $("#guestCell").val("");
        $("#guestEmail").val("");
        $("#guestID").val("");
          $("#guestGroup").val().trim()

        });

  		