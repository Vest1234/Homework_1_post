const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const gameElement = [rock, paper, scissors]

rock.addEventListener

rock.addEventListener("click", 
    function(){
        console.log("rock")
    }
)
paper.addEventListener("click",
    function () {
        console.log("paper")
    }
  )

scissors.addEventListener("click",
    function () {
        console.log("scissors")
    }
)


console.log(Math.random(0,1,2))




