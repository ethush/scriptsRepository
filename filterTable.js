/*
//HTML SECTION
<html>
   <input type="text" id="filter_input"  placeholder="Some descriptive text...">
   <div id="table_div"></div>
</html>

//Some CSS style for example
#filter_input {
    background-image: url('/css/searchicon.png'); /* Add a search icon to input */
    background-position: 10px 12px; /* Position the search icon */
    background-repeat: no-repeat; /* Do not repeat the icon image */
    width: 100%; /* Full-width */
    font-size: 16px; /* Increase font-size */
    padding: 12px 20px 12px 40px; /* Add some padding */
    border: 1px solid #ddd; /* Add a grey border */
    margin-bottom: 12px; /* Add some space below the input */
  }
*/
//JAVASCRIPT INIT
document.getElementById("filter_input").addEventListener("keyup", function(){
  appendFilter("filter_input", "table_div")
});


function appendFilter(element, table) => {
    var input, filter, table, tr, td, i, txtValue;

    input = document.getElementById(element);
    filter = input.value.toUpperCase();
    table = document.getElementById(table);
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows except header, and hide those who don't match the search query
    // You can modify "i" to zero in order of you table structure
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
