const inquirer = require("inquirer")






// Start inquirer 
inquirer.prompt([
    {
        type:"input",
        message:"What is the name of the star?",
        name:"starName"        
    },
    {
        type:"input",
        message: "What is the parralax of the star?",
        name:"parralax"
    },
    {
        type:"input",
        message:"What is the flux of the star in scientific notation?\nex:1.84e-8",
        name:"flux"
    }

])
.then((answers)=>{


        console.log(answers)
    


})
.catch((err)=>{
    if(err.isTtyError){

        console.log(err.isTtyError)
    }else{
        console.log(err)
    }
})
