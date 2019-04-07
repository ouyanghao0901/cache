$("input[type='text']").on("input", function () {
    var user_id = $(this).val();
    $.get("/user_info/checkID", { user_id }, function (data) {
        if (data == "1") {
            $("input[name='user_id']").css("border-color", "red");
            $(".tip").css("display", "block");
        } else {
            $("input[name='user_id']").css("border-color", "#CCCCCC");
            $(".tip").css("display", "none");
        }
    });
});