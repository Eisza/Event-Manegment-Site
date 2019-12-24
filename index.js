
var users = [
    {
        name:"YasserRahmo",
        pass:"7amada",
        admin:true
    },
    {
        name:"EisaEssam",
        pass:"7amada",
        admin:true
    },
    {
        name:"AbdulrahmanAshraf",
        pass:"7amada",
        admin:true
    },
    {
        name:"EsraaOsama",
        pass:"7amada",
        admin:true
    },
    {
        name:"MohammedTarek",
        pass:"7amada",
        admin:true
    }
];

function isUser(username,password){
    for(var i = 0 ; i < users.length ; i++){
        if(users[i].name === username){
            if(users[i].pass === password){
                return users[i];
                
            }
        }
    }
    return false
}

var user;
var isLoggedIn = false;
var isAdmin = false;

if(window.location.href.indexOf("username=") > 0){
    var startIndexUsername = window.location.href.indexOf("username=") + 9;
    var endIndexUsername = window.location.href.indexOf("&password");

    var startIndexPassword = window.location.href.indexOf("password=") + 9;

    var username = window.location.href.substring(startIndexUsername,endIndexUsername);
    var password = window.location.href.substring(startIndexPassword);

    if(isUser(username,password)){
        user=isUser(username,password);
        isLoggedIn = true;
        isAdmin = user.admin;
        
    }
    else{
        user = {
            name:username,
            pass:password,
            admin:false
        }
        users.push(user);
        isLoggedIn = true;
        isAdmin = user.admin;
    }

    console.log(isLoggedIn);
    console.log(users);
}

function handleLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(isUser(username,password)){
        return true
    }
    if(!isLoggedIn){
        alert("ke5a");
        return false;
    }
}

function handleSignup(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log(username);
    for(var i = 0 ; i < users.length ; i++){
        if(users[i].name === username){
            alert("username already exist!")
            return false;
        }
        if(/\s/.test(username) || /\s/.test(password)){
            alert("username or password cant contain spaces!")
            return false;
        }
    }
    return true;
}

function loadLogin(){
    window.location.href = "login.html"
}

function handleLogout(){
    window.location.href = "index.html";
}

function loadSignup(){
    document.getElementById("signForm").innerHTML = `
    <img src="designs/logopic.png" alt="login logo" style="width:500px;height:450px;">
    <form onsubmit="javascript: return handleSignup()" action="index.html">
    <label for="username"> User Name: </label><br>
    <input type="text" name="username" class="loginbox" id="username"><br>
    <label for="password"> Password: </label><br>
    <input type="password" name="password" class="loginbox" id="password">
    <br>
    <button>Sign Up</button>
    <br>
    <p>already a member? click here to <a onclick="loadSignin()">sign in</a></p>
    </form>
    `
}

function loadSignin(){
    document.getElementById("signForm").innerHTML = `
    <img src="designs/logopic.png" alt="login logo" style="width:500px;height:450px;">
    <form onsubmit="javascript: return handleLogin()" action="index.html">
    <label for="username"> User Name: </label><br>
    <input type="text" name="username" class="loginbox" id="username"><br>
    <label for="password"> Password: </label><br>
    <input type="password" name="password" class="loginbox" id="password">
    <br>
    <button>Sign In</button>
    <br>
    <p>new here? click here to <a onclick="loadSignup()">sign up</a></p>
    </form>
    `
}

function loadAboutUs(){
    document.getElementById("container").innerHTML =`<div  class="paragraph" id="paragraph">
    <p>
        <h1>About Us</h1>
        <br>
        Unit 22 is an Egyptian company that was established in 2007 under the name “Masterpiece” that later in 2011 evolved to “The Hub Production” and starting 2016 “Unit 22” was brought to life! “Unit 22” is shielded with years of experience, in both local and regional events. Our professional team members are sharp event hunters with spines of talent and creativity, dedicated to make your brand stand out through exceptional event management services. Our fresh approach in event execution is tailored to suit your strategic vision and defined milestones. Aided by our network of preferred vendors, the industry’s top suppliers and connections to local and international entertainment providers, rest assured that your event will be the talk of town.
    </p>


</div>`
}
function loadHome(){
    document.getElementById("container").innerHTML ="";
}

//index changes
window.onload = function(){
    if(user){
        document.getElementById("loginLink").setAttribute('onclick','handleLogout()');
        document.getElementById("loginLink").innerHTML = "<li>Logout</li>";
    }
}

var events = [
    {
        name:"first",
        _id:"001",
        date:"9/jan",
        description:"Middle East Music Event is showcasing the very best of the region's alternative talent and cutting-edge emerging artists, all on one line up for the first time. Non-stop music over two stages and three days.",
        status:true,
        participants:["abdo","bgdo"]
    },
    {
        name:"second",
        _id:"002",
        date:"12/jan",
        description:"Middle East Music Event is showcasing the very best of the region's alternative talent and cutting-edge emerging artists, all on one line up for the first time. Non-stop music over two stages and three days.",
        status:true,
        participants:["abdo","bgdo"]
    }
];
idCounter = 3;


function loadEvents(){
    var eventsString="" ;

    for(var i = 0; i < events.length ; i++){
        eventsString+=`
        <li>
            <div class="time" id="time">
                <h2>${events[i].date.split("/")[0]}<br><span>${events[i].date.split("/")[1]}</span><br><span>${events[i].status?`active`:`canceled`}</span></h2>
            </div>
            <div class="details" id="details">
                <h3>${events[i].name}</h3>
                <p>${events[i].description}</p>
                <a style="float: right;">Ps: ${events[i].participants.length}</a>
                ${user?`<a onclick="participate('${events[i]._id}')">sign in</a>`:``}
            </div>
        </li>
        <br>`;
    };
    document.getElementById("container").innerHTML ="<div class='events' id='events'><div class='content' id='content'><ul>"+
            eventsString+
            "</ul></div></div>";

    if(isAdmin){
        document.getElementById("content").innerHTML +=`
        <div>
            <label for="eventName">event name:</label>
            <input id="eventName" type="text">
            <br>
            <label for="eventDate">event date:</label>
            <input id="eventDate" type="text">
            <br>
            <label for="eventDesc">event desc.:</label>
            <input id="eventDesc" type="text">
            <br>
            <button onclick="addEvent()">add event</button>
        </div>
        
        `;
        for(var i = 0 ; i < events.length ; i++){
            var list=``;
            for(var j = 0 ; j < events[i].participants.length ; j++){
                list+= `<li>${events[i].participants[j]}</li><br>`
                
            }
            document.getElementById("events").innerHTML +=`
                <div class="lop">
                    <h5>participants of ${events[i].name}</h5>
                    <ol>
                    ${list}
                    </ol>
                </div>`
        }
    }
}

function participate(id){
    var found = false;
    for(var i = 0 ; i < events.length ; i++){
        if(events[i]._id == id){
            for(var j = 0 ; j < events[i].participants.length ; j++){
                if(events[i].participants[j]===user.name){
                    alert("already signed in");
                    found = true;
                }
            }
            if(!found){
                events[i].participants.push(user.name);
                console.log(events[i].participants)
            }
        }
    }
    loadEvents();
    
}
function addEvent(){
    if(document.getElementById("eventDate").value.indexOf("/") < 1){
        alert("date format must be d/m");
    }
    else if(!document.getElementById("eventName").value === ""){
        alert("must put name");
    }
    var newEvent = {
        name:document.getElementById("eventName").value,
        _id:`00${idCounter++}`,
        date: document.getElementById("eventDate").value,
        description:document.getElementById("eventDesc").value,
        status:true,
        participants:[]
    }
    events.push(newEvent);
    loadEvents();
}


