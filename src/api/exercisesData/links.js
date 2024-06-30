
let resistanceBandLink = "https://amzn.to/3Jc03Vs";
let stabilityBallLink = "https://amzn.to/3JgEB1M";
let medicineBallLink = "https://amzn.to/3TX9NrJ";
let wheelRollerLink = "https://amzn.to/4avWm97";
let rollerLink = "https://amzn.to/3UaJijS";
let dumbbellLink = "https://amzn.to/49w99qT";
let ropeLink = "https://amzn.to/3xEm4JU";
let matLink = "https://amzn.to/3xujyWK";
let ezBarLink = "https://amzn.to/3VTFkgz";
let kettlebellLink = "https://amzn.to/3xEstVu";
let ellipticalMachineLink = "https://amzn.to/49wttbE";
let benchLink = "https://amzn.to/3V8RbH4";
let barbellLink = "https://amzn.to/4bsM4qL";


Exercises.map((item, index) => {
    item.id = `${index+1}`.padStart(4,"0");
    if(item.equipment === "stability ball"){
        item.amazonLink = stabilityBallLink;
    }
    else if(item.equipment === "medicine ball"){
        item.amazonLink = medicineBallLink;
    }
    else if(item.equipment === "resistance band"){
        item.amazonLink = resistanceBandLink;
    }
    else if(item.equipment === "dumbbell"){
        item.amazonLink = dumbbellLink;
    }
    else if(item.equipment === "wheel roller"){
        item.amazonLink = wheelRollerLink;
    }
    else if(item.equipment === "rope"){
        item.amazonLink = ropeLink;
    }
    else if(item.equipment === "ez bar"){
        item.amazonLink = ezBarLink;
    }
    else if(item.equipment === "elliptical machine"){
        item.amazonLink = ellipticalMachineLink;
    }
    else if(item.instructions.includes("mat")){
        item.amazonLink = matLink;
    }
    
})
console.log(Exercises);