$(document).ready(function() {
    // Select all td elements except the first one in each row and those with 'Not Available' content
    $("tbody td:not(:first-child):not(:contains('Not Available'))").addClass("selectable");

    $(".selectable").click(function() {
        // Toggle the 'selected' class when a selectable cell is clicked
        $(this).toggleClass("selected");
    });
});
