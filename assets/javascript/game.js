$(document).ready(function () {
    // NEEDED VARIABLES================
    /*  player = the person playing game
        computer = the current opponent
    
        4 characters = objects containing properties of healthpoints HP, attackpower AP, counterattackpower CAP,
        */
    let player;
    let opponents = [];
    let computer = new Object;

       let characters = [{name:"Luke", hp:120, ap:8, cap:10}, 
       {name:"Vader", hp:100, ap:15, cap:5}, 
       {name:"Han", hp:150, ap:5, cap:20}, 
       {name:"Boba Fett", hp:180, ap:2, cap:25}]

       console.log(characters[1].name)

    //    let lukebtn = $("#luke")
    //    let vaderbtn = $("#vader")
    //     let goodguy = $(".goodguy")
    // NEEDED FUNCTIONS================
    var playerchosen = false;
    var computerchosen = false;

    var luke = $("<img>");
    luke.addClass("guys pic");
    luke.attr("id", "luke");
    luke.attr("src", "./assets/images/Luke-Skywalker.jpg");
    luke.attr("alt", "luke");
    luke.attr("ap", 8);
    luke.attr("cap", 20);
    luke.attr("hp", 100);
    $("#guys").append(luke);
    var vader = $("<img>");
    vader.addClass("guys pic");
    vader.attr("id", "vader");
    vader.attr("src", "./assets/images/vader.jpg");
    vader.attr("alt", "vader");
    vader.attr("ap", 8);
    vader.attr("cap", 20);
    vader.attr("hp", 100);
    $("#guys").append(vader);
    var han = $("<img>");
    han.addClass("guys pic");
    han.attr("id", "han");
    han.attr("src", "./assets/images/han_solo-150x150.jpg");
    han.attr("alt", "han");
    han.attr("ap", 8);
    han.attr("cap", 20);
    han.attr("hp", 100);
    $("#guys").append(han);
    var fett = $("<img>");
    fett.addClass("guys pic");
    fett.attr("id", "fett");
    fett.attr("src", "./assets/images/fett.jpg");
    fett.attr("alt", "fett");
    fett.attr("ap", 8);
    fett.attr("cap", 20);
    fett.attr("hp", 100);
    $("#guys").append(fett);

    //   we need to change img addresses  ===  cycle through these and add them into the guys div
    // let characters = [luke, vader, han, fett];


    $("#guys").on("click", ".guys", function () {
        console.log($(this));
        $(this).addClass("goodguy").removeClass("guys");
        $(".guys").toggleClass("guys bench")
        console.log("second" + this);
        // $("#guys").empty();
        $("#goodguy").append(this);
        // var player = characters[0]
        // console.log(player)
        // console.log("inside " + player)
        // return player;
        // //add class of player, If characters dont have class of player a
        // vaderbtn.append($(.guys));
    });
    
    
    $("#guys").on("click", ".bench", function() {
        if (playerchosen === false) {
            playerchosen = true;
                console.log("baddie" + ($(this)));
                $(this).toggleClass("bench badguy");
                $("#badguy").append(this);
                
            }
    })

    $("#attack").on("click", function(){
        
    })

    /* Action 1 - Select Character(object)
            a.- click select character assigning that character (object) = player
            b.- remaing characters move to middle row
    
    
    
    
        Action 2 - Select Opponent
            a.- click select character assigning that character (object) = computer
            b.- opponent moves to bottom row
    
        Action 3 - Battle
            a. attack button click begins battle
            b. computer HP - player AP
            c. player HP - computer CAP
            d. If player HP <= 0 GAMEOVER  elseif computer HP <= 0 disapear opponent
    
        Action 4 - Select Opponent
    
        Action 5 - Battle
    
        Action 6 - Select Opponent
    
        Action 7 - Battle
    
        Action 8 - End Game/Reset
            a. if computer HP <= 0 && no remaining characters exist gameover-reset game
    
    */



    // GAME PLAY=======================})
});