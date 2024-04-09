
import inquirer from "inquirer";
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: "please type the url for conver the qr",
        name:"URL",//that is question
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    console.log(url);//only to check
    var qrimage=qr.image(url,{type:'png'}); //to initaize the variable url and type of formetwe want

    qrimage.pipe(fs.createWriteStream("website_url.png"));//file name assign in a
    fs.writeFile("URLText.txt",url,(error)=>
    {
    if(error)throw error
    console.log("file saved ");
    })
   
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });