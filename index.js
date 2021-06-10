const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
const laptops = {};
const laprange = {};
rl.question("Enter the number of laptop: ", (n) => {
    if(Number(n.trim()))
    getUserInput(1,n);
    else
    {
        console.log("Invalid input");
        rl.close();
    }
     
});

function getUserInput(k,n) {
    rl.question(`Price & Rating(e.g 5000 4) laptop-${k}: `, (answer) => {
        let linput = answer.split(" ");
        if(!linput[0].trim() || !linput[1].trim()) {
            console.log("Invalid input");
            rl.close();
        }
        laptops[linput[0].trim()]= linput[1].trim();
          if (k < n) {
            getUserInput(k+1,n);
        } else {
                              
            //console.log(`Input Items ${JSON.stringify(laptops)}`);
            rl.question(`Number of Task(Laptop Result) between [1-${n}]: `,(l) => {
                if(Number(l.trim()) && Number(l.trim())<=n)
                getInputforOutput(1,l);
                else
                {
                    console.log("Invalid Input");
                    rl.close();
                }
               }); 
            
        }
    }); 
}
var result = -1;
var ratingCollection = {};
function getInputforOutput(k,n) {
    rl.question(`Enter Price Range(e.g 100 200)-${k}: `, (answer) => {
        let linput = answer.split(" ");
        if(!linput[0].trim() ||!linput[1].trim()) {
            console.log("Invalid input");
            rl.close();
        }
        laprange[linput[0]]= linput[1];
          if (k < n) {
            getInputforOutput(k+1,n);
        } else {              
            let min = linput[0];
            let max = linput[1];
            var sortedArr = Object.keys(laptops).sort();
            // no result found
            if(Number(min)>Number(sortedArr[sortedArr.length-1]) || Number(max)<Number(sortedArr[0]))
            console.log(`No Result Found: ${result}`);
            else
            {
               sortedArr.forEach(function(v) {
                if(v>=min && v<=max)
                ratingCollection[v] = laptops[v];
               })
               result = Object.values(ratingCollection).sort().splice(Object.values(ratingCollection).length-n,n);
               console.log(`Matched Laptop: ${result.join("\n")}`); 
            }            
            //console.log(`Range Items ${JSON.stringify(laprange)}`);
            rl.close();
        }
    }); 
}
