var checkboxes = $('.user-checkbox');
var total = checkboxes.length;
var checkall = $('#checkAll');

checkall.change(function () {
    checkboxes.prop('checked', $(this).is(':checked'));
})

checkboxes.change(function () {
    var count = checkboxes.filter(':checked').length;
    checkall.prop('checked', (count == total));
})
var menuOpened = false;
function menuClick() {
    if (menuOpened) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("content").style.marginLeft = "0";
        menuOpened = false;
    }
    else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("content").style.marginLeft = "250px";
        menuOpened = true;
    }    
}

function dropSubMenu() {
    document.getElementById("adminMenu").classList.toggle("show");
}
