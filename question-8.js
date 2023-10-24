// Question #8: Fetching User List from Server


const getUser = function(){
    return fetch("https://jsonplaceholder.typicode.com/users");    
};

const displayUser = function (response) {
    return response.json();
};

const onSuccess = function(data){
    let newUser = data.map(getOnlyName)
    console.log(newUser)
    }

function getOnlyName(data){
    return data.name
}

getUser().then(displayUser).then(onSuccess)

