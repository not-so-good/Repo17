const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    },
]

function getUsers() {
    var output = "";
    users.forEach((element) =>{
        output += element.firstName + " " + element.lastName + " is " + element.age + ", " + element.gender + "\n"; 
    });
    console.log(output);
    return output;
}

function findUser(lastName, gender) {
    try{
        var user = _.find(users, function(val, key){
            if(val.lastName === lastName && val.gender === gender){
                return true;
            }
            return false;
        });
        var iFindUser = user.firstName = user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender;
        console.log(iFindUser); 
        return iFindUser;
    } catch(error){
        error.message = "Cannot read property 'firstName' of undefined";
        console.log(error.message);
        return error.message;
    }
}

getUsers();
findUser("Doe", "male");

module.exports = findUser;