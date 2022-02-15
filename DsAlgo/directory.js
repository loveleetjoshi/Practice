function processData(input) {
    //Enter your code here
    input = input.split('\n');
    let numOfEntries = +input[0];
    let directory = [];
    
    for(let i=1; i<numOfEntries+1; i++){
        let entry = input[i].split(" ");
        
        directory[i-1] = {
            name: entry[0],
            phoneNumber: +entry[1]
        }
    }
    
    for(let i=numOfEntries+1; i<input.length; i++){
        let output = directory.find((entry) => entry.name === input[i])
        
        if(output === undefined){
            console.log("Not Found");
        } else{
            let name = output.name;
            let phoneNumber = output.phoneNumber;
            
            console.log(name + "=" + phoneNumber);
        }
        // console.log(output)
    }
    // console.log(directory)
}

processData(
    '3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry'
)