//

$(function(){
    $(".change-devoured").on("click", function(event) {
        const id = $(this).data("id");
        const newDevour = $(this).data("newdevour");

        var newDevourState = {
            devour: newDevour
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log("changed devour to", newDevour);
                // Page reload for updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        //Make sure to preventDefault on submit
        event.preventDefault();

        var newBurger = {
            name: $("#bu").val().trim(),
            devour: $("[name=devour]:checked").val().trim();
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

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
        
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger", id);
                //reload the page to get the updated list
                location.reload();
            }
        );
    });
});