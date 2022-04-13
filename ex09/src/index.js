const users = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    {
        id: 3,
        firstName: "Jim",
        lastName: "Carrey",
        age: 54,
        gender: "male"
    },
    {
        id: 4,
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    },
]

function getUsers() {
    var output = "";
    users.forEach((element) => {
        output += element.id + " - " + element.firstName + " " + element.lastName + " is " + element.age + ", " + element.gender + "\n";
    });
    console.log(output);
    return output;
}

function findUserById(id) {
    try {
        var users = _.find(users, function (val, key) {
            if (val.id === id) {
                return true;
            }
            return false;
        });
        var iFindUser = user.id + user.firstName + user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender;
        console.log(iFindUser);
    } catch (error) {
        error.message = "Cannot read property 'id'";
        console.log(error.message);
        return error.message;
    }

}

getUsers();
findUserById(1);

module.exports = findUserById;