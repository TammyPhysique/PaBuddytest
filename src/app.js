function talk() {
    var know = {
        

        "Good": "Good to hear ",
        "Not Good": "You want to talk?",
        "Bad": "That sound not ok, wanna talk?",
        "Not in the mood to talk": "Good to hear ",
        "Not Today": "Good to hear ",
        "You better not ask": "Good to hear ",
        "Doing Great": "Good to hear ",
        "I am well": "Good to hear ",
        "you tell me": "Good to hear ",
      
       

        "What can i do for you": "Search CodeWithRandom on Google>>Thank Me Later",
        "Your followers":
            "I have my family of 200000 members, i don't have follower ,have supportive Famiy ",
        ok: "Thank You So Much ",
        Bye: "Okay! Will meet soon..",
    };
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById("chatLog").innerHTML = know[user] + "<br>";
    } else {
        document.getElementById("chatLog").innerHTML =
            "Sorry,I didn't understand <br>";
    }
}
