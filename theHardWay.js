function getNames() {
    $.get('https://api.github.com/users/lillianwakefield/repos', function(data){       
    data.forEach(repo =>{
                console.log(repo.name)
            })
        });
           
};

getNames(); 