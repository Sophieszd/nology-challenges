const user = {
    name: "Ellen Pieterson",
    dob: "02/02/1997",
    email: "ellen@rox.com",
    password: 1
}

console.log(user.name)
console.log(user["dob"]);

for (const key in user) {
    console.log(key);
    console.log(user[key]);
}

const users = [{
    name: "Andrew",
    dob: "07/06/1968",
    loginDetails: {
        email: "andy@old.com",
        password: "0lli3"
    },
    id: 7328478394,
    isAdmin: true
}, {
    name: "Sam",
    dob: "07/06/2004",
    loginDetails: {
        email: "sam@young.com",
        password: "tesco"
    },
    id: 7328478394,
    isAdmin: false

}, {
    name: "Sophie",
    dob: "29/10/1990",
    loginDetails: {
        email: "sophie@szmd.com",
        password: "code"
    },
    id: 70898,
    isAdmin: true
}];

console.log(users[0].loginDetails.email);

const names = [];
users.forEach((user) => {
    names.push(user.name)
    console.log(user.name);
})

users.splice(1,1);
console.log(users);