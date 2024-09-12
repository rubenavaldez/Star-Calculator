const inquirer = require("inquirer")



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
        message:"What is the flux of the star in scientific notation? (ex:1.84e-8)",
        name:"flux"
    }

])
.then((answers)=>{
       
        function LumonistyCalculator(starName, fluxString, parralax) {
            let flux = eval(fluxString)
            //console.log(flux)
            let C = 9.94 * (10 ** 6)
            let paraSquare = parseFloat(parralax) ** 2
            let fluxPara = flux / paraSquare
            let lumonisty = C * Math.PI * fluxPara
            let distance = 1 / parralax
            return `
           \\   /  
            .-.
        -- (   ) --
            '-'
           /   \\               
            
            ${starName} has a luminosity of ${lumonisty.toFixed(2)}L(sun).
                It's distance from earth is ${distance.toFixed(2)} parsec
                That is ${(distance * 3.26).toFixed(2)} light years away from earth` 
        
        
        }
    
        console.log(LumonistyCalculator(answers.starName, answers.flux, answers.parralax))

})
.catch((err)=>{
    if(err.isTtyError){

        console.log(err.isTtyError)
    }else{
        console.log(err)
    }
})
