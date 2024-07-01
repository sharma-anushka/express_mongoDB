const mongoose = require('mongoose');
const Chat = require("./models/chat");

main()
.then(() =>{
    console.log("conncetions successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chitchat');
}

let allChats = [{
    from:"harvy",
    to: "bob",
    msg: "Are you coming to the meeting?",
    created_at: new Date()
},
{
    from: "charlie",
    to: "dave",
    msg: "Please review the document.",
    created_at: new Date()
},

{
    from: "eve",
    to: "frank",
    msg: "Happy birthday!",
    created_at: new Date()
},

{
    from: "grace",
    to: "heidi",
    msg: "Let's catch up later.",
    created_at: new Date()
},

{
    from: "ivan",
    to: "judy",
    msg: "Can you send me the report?",
    created_at: new Date()
},

{
    from: "karen",
    to: "leo",
    msg: "Meeting has been rescheduled.",
    created_at: new Date()
},

{
    from: "mallory",
    to: "nancy",
    msg: "Where are the keys?",
    created_at: new Date()
},

{
    from: "oscar",
    to: "peggy",
    msg: "Let's start the project tomorrow.",
    created_at: new Date()
},

{
    from: "quinn",
    to: "ruth",
    msg: "Lunch at 1 PM?",
    created_at: new Date()
},

{
    from: "sybil",
    to: "trent",
    msg: "Please join the conference call.",
    created_at: new Date()
}];


Chat.insertMany(allChats);