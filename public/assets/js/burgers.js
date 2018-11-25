//

$(function(){
    $(".devour").on("click", function(event) {
        let id = $(this).attr("data-id");
        // let devour = $(this).attr("value");
        console.log(id);
        let devourState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourState
        }).then(
            function() {
                console.log("changed devoured to", devourState);
                // Page reload for updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        //Make sure to preventDefault on submit
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bu").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                //reload page to get updated list
                location.reload();
            }
        );
    });
})