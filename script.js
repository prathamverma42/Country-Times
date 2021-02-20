let a, time, date;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    time = a.toLocaleTimeString();
//  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    date = a.toLocaleDateString(undefined,options);
    document.getElementById('time').innerHTML = time + " on " + date;
},1000);