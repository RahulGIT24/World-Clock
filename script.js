const sound = new Audio('./1.mp3')
const updateTime = () => {
    let d = new Date();
    unitedStates.innerHTML = d
        .toLocaleString("en-US", {
            timeZone: "America/Los_Angeles",
        })
        .split(", ")[1];
    india.innerHTML = d
        .toLocaleString("en-US", {
            timeZone: "Asia/Kolkata",
        })
        .split(", ")[1];
    china.innerHTML = d
        .toLocaleString("en-US", {
            timeZone: "Asia/Shanghai",
        })
        .split(", ")[1];
    let alarmHour = document.getElementById("alarm").value.split(":")[0]
    let alarmMin = document.getElementById("alarm").value.split(":")[1]
    if (d.getHours() == alarmHour && d.getMinutes() == alarmMin) {
        sound.play();
        document.getElementById("alarmStatus").innerText = "Alarm Ringing";
    }
};

const alarmStatus = () => {
    if(document.getElementById("alarm").value==''){
        document.getElementById("alarmStatus").innerText = "Please enter the time";
    }else{
        let alarmHour = document.getElementById("alarm").value.split(":")[0]
        let alarmMin = document.getElementById("alarm").value.split(":")[1]
        let status = `Alarm Set for ${alarmHour}:${alarmMin}`
        document.getElementById("alarmStatus").innerText = status;
    }
}

setInterval(() => {
    updateTime();
}, 1000);

