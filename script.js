let old_id = "0";
let old_menu = "0";

function display(id) {
    if (id == old_id) {
        var old = document.getElementById(old_id);
        old.style.height = "20vh";
        old_id = "0";
    } else {
        if (old_id == "0") {
            var elmt = document.getElementById(id);
            elmt.style.height = "50vh";
            old_id = id;
        } else {
            var elmt = document.getElementById(id);
            var old = document.getElementById(old_id);
            old.style.height = "20vh";
            elmt.style.height = "50vh";
            old_id = id;
        }
    }
}

function new_page(id) {
    let new_id = id + "+";
    if (old_menu == "0") {
        var elmt = document.getElementById(new_id);
        elmt.style.visibility = "visible";
    } else {
        var elmt = document.getElementById(new_id);
        var old = document.getElementById(old_menu);
        old.style.visibility = "hidden";
        elmt.style.visibility = "visible";
    }
    old_menu = new_id;

}