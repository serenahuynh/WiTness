// submit phrase to void
$("#void-form").on("submit", function (event) {
    event.preventDefault();
    let input = $("#msg").val();

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

// BUTTONS
$("#void-logged-in-form").on("submit", function (event) {
    event.preventDefault();
    let input = $("#msg").val();

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
$("#post").on("click", function (event) {
    event.preventDefault();
    let input = $("#create-post-text").val();
    let profile = 1;

    if (input != "") {
        //create div
        let insert = `
        <div>
            <img src="${profile}"
            <div>${input}</div>
        </div>
        `;
    }
});
$("#like").on("click", function (event) {
    event.preventDefault();
    let points = 5;
    // add points to person's DB
});
$("#claim").on("click", function (event) {
    event.preventDefault();
    let points = 5;
    // add points to person's DB
});
$("#search").on("submit", function (event) {
    event.preventDefault();
    let input = $("#search-input").val();

    if (input != "") {
        // clear input box
        $("#search-input").val("");
    }
});