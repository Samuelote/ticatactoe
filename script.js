$(document).ready(function() {
  //HeadSHit
    $('#refresh').click(function() {
        window.location.href=window.location.href;
    });
  $('#restart').click(function() {
        window.location.href=window.location.href;
    });

    $("#play").hide();
    $("#refresh").hide();
    $("#restart").hide();

  // ONE PLAYA
    $("#single").click(function() {
      var playerOne = true;

  $("#refresh").delay(1000).fadeIn(400);
  $('#spaceship').slideUp(400);
  $("#slideTit").fadeOut(300);
  $("#title").fadeOut(300);
  $("#play").delay(1000).fadeIn(400);
      var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      $(".button").one("click", function change() {
           var num;
            var numero;
        while (num === undefined){
          min = Math.ceil(1);
          max = Math.floor(9);
          numero = Math.floor(Math.random() * (max - min)) + min;
          num = "#" + numero;
        }

                $(this).val()+$(this).val("X");

        if (($("#1").val() === "O" || $("#1").val() === "X") && ($("#2").val() === "O" || $("#2").val() === "X") && ($("#3").val() === "O" || $("#3").val() === "X") && ($("#4").val() === "O" || $("#4").val() === "X") && ($("#5").val() === "O" || $("#5").val() === "X") && ($("#6").val() === "O" || $("#6").val() === "X") && ($("#7").val() === "O" || $("#7").val() === "X") && ($("#8").val() === "O" || $("#8").val() === "X") && ($("#9").val() === "O" || $("#9").val() === "X")){
     $("#all").hide();
    $("#play").hide();
     $("#end").html("It's a draw!")
    $('#refresh').show();
         }
        else if (num === undefined || $(num).val() == "X" || $(num).val() == "O") {
          var checked = true;
          while (num === undefined || $(num).val() == "X" || $(num).val() == "O"){
          min = Math.ceil(1);
          max = Math.floor(9);
          numero = Math.floor(Math.random() * (max - min)) + min;
          num = "#" + numero;
          }
        }
        else {
           checked = !checked;
        }

        if (checked == true){
          $(this).val()+$(num).val("O");
        }



      });
      document.getElementById("1").addEventListener("click", myFunction);
      document.getElementById("2").addEventListener("click", myFunction);
      document.getElementById("3").addEventListener("click", myFunction);
      document.getElementById("4").addEventListener("click", myFunction);
      document.getElementById("5").addEventListener("click", myFunction);
      document.getElementById("6").addEventListener("click", myFunction);
      document.getElementById("7").addEventListener("click", myFunction);
      document.getElementById("8").addEventListener("click", myFunction);
      document.getElementById("9").addEventListener("click", myFunction);
function myFunction() {
   if ($("#1").val() === "X" && $("#2").val() === "X" && $("#3").val() === "X" || $("#4").val() === "X" && $("#5").val() === "X" && $("#6").val() === "X" || $("#7").val() === "X" && $("#8").val() === "X" && $("#9").val() === "X" || $("#1").val() === "X" && $("#4").val() === "X" && $("#7").val() === "X" || $("#2").val() === "X" && $("#5").val() === "X" && $("#8").val() === "X" || $("#3").val() === "X" && $("#6").val() === "X" && $("#9").val() === "X" || $("#1").val() === "X" && $("#5").val() === "X" && $("#9").val() === "X" || $("#3").val() === "X" && $("#5").val() === "X" && $("#7").val() === "X"){
     $("#all").delay(2000).fadeOut();
     $("#play").delay(2000).fadeOut();
     $("#end").html("You won!")
     $("#refresh").delay(2000).fadeOut();
     $('#restart').delay(2000).fadeIn();

   }
  else if ($("#1").val() === "O" && $("#2").val() === "O" && $("#3").val() === "O" || $("#4").val() === "O" && $("#5").val() === "0" && $("#6").val() === "O" || $("#7").val() === "O" && $("#8").val() === "O" && $("#9").val() === "O" || $("#1").val() === "O" && $("#4").val() === "O" && $("#7").val() === "O" || $("#2").val() === "O" && $("#5").val() === "O" && $("#8").val() === "O" || $("#3").val() === "O" && $("#6").val() === "O" && $("#9").val() === "O" || $("#1").val() === "O" && $("#5").val() === "O" && $("#9").val() === "O" || $("#3").val() === "O" && $("#5").val() === "O" && $("#7").val() === "O"){
     $("#all").delay(2000).fadeOut();
     $("#play").delay(2000).fadeOut();
     $("#end").html("The computer seems to be smarter!")
     $("#refresh").delay(2000).fadeOut();
     $('#restart').delay(2000).fadeIn();
   }

};
    });

// TWO PLAYAS
    $("#double").click(function() {
        var playerOne = true;
    $("#refresh").delay(1000).fadeIn(400);
    $('#spaceship').slideUp(400);
    $("#slideTit").fadeOut(300);
    $("#title").fadeOut(300);
    $("#play").delay(1000).fadeIn(400);

      // Switching between x and o
        $(".button").one('click', function change() {

            if (playerOne) {
                $(this).val()+$(this).val("X");
                $("#currentTurn").html("Cadet two's turn!");
            }
            else {
                $(this).val()+$(this).val("O");
              $("#currentTurn").html("Cadet one's turn!");
            }
          playerOne = !playerOne;


        });

      // Determining winner
      document.getElementById("1").addEventListener("click", myFunction);
      document.getElementById("2").addEventListener("click", myFunction);
      document.getElementById("3").addEventListener("click", myFunction);
      document.getElementById("4").addEventListener("click", myFunction);
      document.getElementById("5").addEventListener("click", myFunction);
      document.getElementById("6").addEventListener("click", myFunction);
      document.getElementById("7").addEventListener("click", myFunction);
      document.getElementById("8").addEventListener("click", myFunction);
      document.getElementById("9").addEventListener("click", myFunction);
function myFunction() {
   if ($("#1").val() === "X" && $("#2").val() === "X" && $("#3").val() === "X" || $("#4").val() === "X" && $("#5").val() === "X" && $("#6").val() === "X" || $("#7").val() === "X" && $("#8").val() === "X" && $("#9").val() === "X" || $("#1").val() === "X" && $("#4").val() === "X" && $("#7").val() === "X" || $("#2").val() === "X" && $("#5").val() === "X" && $("#8").val() === "X" || $("#3").val() === "X" && $("#6").val() === "X" && $("#9").val() === "X" || $("#1").val() === "X" && $("#5").val() === "X" && $("#9").val() === "X" || $("#3").val() === "X" && $("#5").val() === "X" && $("#7").val() === "X"){
     $("#all").delay(2000).fadeOut();
     $("#play").delay(2000).fadeOut();
     $("#end").html("Cadet two wins this one!")
     $("#refresh").delay(2000).fadeOut();
     $('#restart').delay(2000).fadeIn();
   }
  else if ($("#1").val() === "O" && $("#2").val() === "O" && $("#3").val() === "O" || $("#4").val() === "O" && $("#5").val() === "O" && $("#6").val() === "O" || $("#7").val() === "O" && $("#8").val() === "O" && $("#9").val() === "O" || $("#1").val() === "O" && $("#4").val() === "O" && $("#7").val() === "O" || $("#2").val() === "O" && $("#5").val() === "O" && $("#8").val() === "O" || $("#3").val() === "O" && $("#6").val() === "O" && $("#9").val() === "O" || $("#1").val() === "O" && $("#5").val() === "O" && $("#9").val() === "O" || $("#3").val() === "O" && $("#5").val() === "O" && $("#7").val() === "O"){
     $("#all").delay(2000).fadeOut();
     $("#play").delay(2000).fadeOut();
     $("#end").html("Cadet one wins this one!")
     $("#refresh").delay(2000).fadeOut();
     $('#restart').delay(2000).fadeIn();
   }
  else if (($("#1").val() === "O" || $("#1").val() === "X") && ($("#2").val() === "O" || $("#2").val() === "X") && ($("#3").val() === "O" || $("#3").val() === "X") && ($("#4").val() === "O" || $("#4").val() === "X") && ($("#5").val() === "O" || $("#5").val() === "X") && ($("#6").val() === "O" || $("#6").val() === "X") && ($("#7").val() === "O" || $("#7").val() === "X") && ($("#8").val() === "O" || $("#8").val() === "X") && ($("#9").val() === "O" || $("#9").val() === "X")){
     $("#all").delay(2000).fadeOut();
     $("#play").delay(2000).fadeOut();
     $("#end").html("It's a draw!")
     $("#refresh").delay(2000).fadeOut();
     $('#restart').delay(2000).fadeIn();
   }

};

    });


});
