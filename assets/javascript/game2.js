$(document).ready(function () {
    console.log("new js page in use")
    var player;
    var computer;
    var wins = 0;
    var initialattack = false;
    // =============== Character Data ===========================

    let characters = [
        { name: "Luke", hp: 120, ap: 8, cap: 10 },
        { name: "Vader", hp: 100, ap: 15, cap: 5 },
        { name: "Han", hp: 150, ap: 5, cap: 20 },
        { name: "Fett", hp: 180, ap: 2, cap: 25 }
    ]

    // ================== Create Character Tiles =====================

    for (var i = 0; i < characters.length; i++) {
        console.log(characters[i]);
        let person = $("<img>");
        person.addClass("guys pic");
        person.attr("id", characters[i].name)
        person.attr("src", "./assets/images/" + characters[i].name + ".jpg");
        person.attr("hp", characters[i].hp);
        person.attr("ap", characters[i].ap);
        person.attr("cap", characters[i].cap);
        $('#guys').append(person);
    }

    // ================= Character Selection ==========================

    $("#guys").on("click", ".guys", function () {
        console.log($(this));
        $(this).addClass("goodguy").removeClass("guys");
        $(".guys").toggleClass("guys bench")
        $("#goodguy").append(this);
        player = this;
        console.log($(player).attr("id"));
        $("#playername").text(player.id);
        attackincrease = parseInt($(player).attr("ap"))
        console.log("atk+" + attackincrease)
        $("#playerhp").text($(player).attr("hp"))
        $("#playerap").text($(player).attr("ap"))

    });

    let badguychosen = false;
    $("#guys").on("click", ".bench", function () {
        if (badguychosen === false) {
            badguychosen = true;
            console.log("this baddie" + this);
            $(this).toggleClass("bench badguy");
            $("#badguy").append(this);
            computer = this;
            initialattack = true;
            $("#computername").text($(computer).attr("id"))
            $("#computerhp").text($(computer).attr("hp"))
            $("#computerap").text($(computer).attr("ap"))
        }

    })

    // ====================== Battle ==========================================

    $("#attack").on("click", function () {
        if (initialattack === true) {
            console.log("attack logged");
            console.log(player);
            var goodguyname = parseInt($(player).attr("id"));
            console.log(goodguyname);
            var goodguyhp = parseInt($(player).attr("hp"));
            console.log("hp: " + goodguyhp);
            var goodguyap = parseInt($(player).attr("ap"));
            console.log("ap: " + goodguyap);

            // compters data=====================
            console.log(computer);

            var badguyname = parseInt($(computer).attr("id"));
            console.log(badguyname);
            var badguyhp = parseInt($(computer).attr("hp"));
            console.log("hp: " + badguyhp);
            var badguycap = parseInt($(computer).attr("cap"));
            console.log("cap: " + badguycap);



            var badguydamage = badguyhp - goodguyap;
            console.log(badguydamage);
            var goodguydamage = goodguyhp - badguycap;

            // console.log($(computer).attr("hp"))
            // var goodguyapincrease = parseInt($(player).attr("ap"));
            // console.log(goodguyapincrease)

            console.log(goodguyap)
            goodguyap += attackincrease
            // goodguyap += goodguyapincrease
            console.log(goodguyap)
            $(player).attr("ap", goodguyap);




            console.log("ap after increase" + goodguyap);
            $(computer).attr("hp", badguydamage);
            $(player).attr("hp", goodguydamage);
            console.log("player " + $(player).attr("hp"));
            console.log("computer " + $(computer).attr("hp"));
            console.log("atk+" + attackincrease);
            $("#playerhp").text($(player).attr("hp"));
            $("#playerap").text($(player).attr("ap"));
            $("#computerhp").text($(computer).attr("hp"));

            if (badguydamage < 1) {
                alert("you beat opponent")
                $("#badguy").empty();
                badguychosen = false;
                wins++;
                initialattack = false;
            }
            else if (goodguydamage < 1) {
                alert("you lost stop playing the game cuz there isn't a reset yet")

            }

            if (wins == 3) {
                alert("You've won the whole damn game dude!")
            }

        }
        // else{
        //     badguydamage -goodguyap;
        //     console.log(badguydamage);
        // }

    })



})