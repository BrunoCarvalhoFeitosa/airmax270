$(document).ready(function() {
    $("#name").css("text-transform", "capitalize"),
        $("#card").mask("0000 0000 0000 0000"),
        $("#expiration").mask("00/00"),
        $("#cvv").mask("000")
});