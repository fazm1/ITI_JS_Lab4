function displayUser() {
    var req = new XMLHttpRequest(); // make sure to run from live server.
    req.open("GET", "users.json");
    req.send();
    req.onreadystatechange = function () {
        if (req.readyState === 4) {
            var ok = new RegExp(/^2\d{2}/);
            var serverError = new RegExp(/^5\d{2}/);
            var clientError = new RegExp(/^4\d{2}/);
            if (String(req.status).match(ok)) {
                data = JSON.parse(req.responseText);
                for(var i = 0; i < data.users.length; i++){
                    if(document.getElementById("users").value.endsWith(data.users[i].name)){
                        document.getElementById("name").innerHTML = data.users[i].name;
                        document.getElementById("age").innerHTML = data.users[i].age;
                        document.getElementById("email").innerHTML = data.users[i].email;
                    }
                }
            }
            else if (String(req.status).match(serverError)) {
                console.error("Server Error");
            }
            else if (String(req.status).match(clientError)) {
                console.error("Client Error");
            }
        }
    };

}