/****         Animations       ****/

// Show / Hide element with some id on html page

// function changeVisibility(id) {
//     var e = document.getElementById(id);
//     if (e.style.display == 'block') {
//         e.style.display = 'none';
//     } else {
//         e.style.display = 'block';
//     }
// }

// new version show/hide element with some id on html page with animation
function changeVisibility(id) {
    $('#' + id).slideToggle(200);
}


/****         LOGIC       ****/