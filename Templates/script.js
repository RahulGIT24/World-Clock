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
    };  
    //* Alarm Function
    const sound = new Audio("../Templates/1.mp3")
    const alarm = ()=>{
      let d = new Date;
      let alarmHour = document.getElementById("alarm").value.split(":")[0]
      let alarmMin = document.getElementById("alarm").value.split(":")[1]
      if(d.getHours()==alarmHour && d.getMinutes()==alarmMin){
        console.log("Alarm is ringing")
        sound.play();
      }
      console.log(alarmHour)
      console.log(alarmMin)
    }
  setInterval(() => {
    updateTime();
  }, 1000);