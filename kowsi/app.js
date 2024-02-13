let val = 10
{
    
    console.log(val)
    val = 20 + 2344
    console.log(val.toString())
    arr = [1,2,3,4,5,8]
    arr.forEach(element => {
        if (element===1){
            return console.log(`this is invalid number ${element}`)
        }
        return console.log( element+2)
        
    });
}

var figlet = require("figlet");

figlet("Hello MFs", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

figlet.text(
    "Boo!",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );