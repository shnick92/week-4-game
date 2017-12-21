$(document).ready(function(){

			var goal = Math.floor(Math.random() * 101) + 19;
			var value1 = Math.floor(Math.random() * 12) + 1;
			var value2 = Math.floor(Math.random() * 12) + 1;
			var value3 = Math.floor(Math.random() * 12) + 1;
			var value4 = Math.floor(Math.random() * 12) + 1;
			var total = 0;
			var wins = 0;
			var losses = 0;

			$("#number-to-guess").append(goal);

    		$(".crystal-1").on("click", function(){
        		$("#crystal1").append(value1);
        		total += value1;
        		console.log(value1)
    		})

    		$(".crystal-2").on("click", function(){
        		$("#crystal2").append(value2);
        		total += value2;
        		console.log(value2)
    		})

    		$(".crystal-3").on("click", function(){
        		$("#crystal3").append(value3);
        		total += value3;
        		console.log(value3)
    		})

    		$(".crystal-4").on("click", function(){
        		$("#crystal4").append(value4);
        		total += value4;
        		console.log(value4)
    		})

			$('.crystal').on("click", function(){
				$("#score").text(total)
			})

			$(".crystal").on('click', function tally(){
				if (total == goal) {
					wins = wins + 1;
					$('#wins').text(wins);
					reset();
				}
				else if (total > goal) {
					losses = losses + 1;
					$('#losses').text(losses);
					reset();					
				}
			})

			function reset() {
				total = 0;
				$("#number-to-guess").html("");
				goal = Math.floor(Math.random() * 101) + 19;
				value1 = Math.floor(Math.random() * 12) + 1;
				value2 = Math.floor(Math.random() * 12) + 1;
				value3 = Math.floor(Math.random() * 12) + 1;
				value4 = Math.floor(Math.random() * 12) + 1;
				$("#number-to-guess").append(goal);
				$("#score").text(total)
			}

});