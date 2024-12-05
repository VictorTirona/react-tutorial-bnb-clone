function greeting(name){
    let timeOfDay;
    const date = new Date();
    const hours = date.getHours();

    if (hours>=4 && hours<12){
        timeOfDay = "morning"
    } else if (hours>=12 && hours<16){
        timeOfDay = "afternoon"
    } else if (hours>=16 && hours<20){
        timeOfDay = "evening"
    } else if (hours>=20 || hours<4){
        timeOfDay = "night"
    }
    console.log(`Good ${timeOfDay}, ${name}`)
}

greeting("Bob")


