//const myList = document.getElementById('myList');
var listItem = '';
function getNames() {
    $.get('https://api.github.com/users/lillianwakefield/repos', function(data){       
    data.forEach(repo =>{
                listItem +=  '<li>' + repo.name + '</li>';
                $('#myList').html(listItem);;
            })
        });
           
}
$(document).ready(function() {
    getNames(); 
})