const inquirer = require("inquirer")






// Start inquirer 
inquirer.prompt([
    {
        type:"input",
        message:"What is the anme of the star",
        name:"name"        
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
