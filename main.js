// submit phrase to void
$("#void-form").on("submit", function (event) {
    event.preventDefault();
    let input = $("#msg").val();
    console.log(input);

    // if input isn't empty, throw to void
    if (input != "") {
        // clear input box
        $("#msg").val("");

        $("#trash").text(input);
        $("#trash").css("display", "inline");
        $("#trash").addClass("animate");
        document.querySelector("#trash").addEventListener("animationend", function () {
            console.log("finished");
            $("#trash").text("");
            $("#trash").css("display", "none");
        });
    }
});