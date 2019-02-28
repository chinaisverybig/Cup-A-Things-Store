//referenced https://www.w3schools.com/howto/howto_css_animated_search.asp
// referenced https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

function toggleSearchbar(){
  var searchbar = document.getElementById("searchbar");

  if (searchbar.style.display === "none" || searchbar.style.display ===""){
    searchbar.style.display = "block";
  } else {
    searchbar.style.display ="none";

  }
}
