function processData(returnDate, dueDate) {
    //Enter your code here
    // input = input.split('\n');
    // let returnDate = input[0].split(' ');
    // let dueDate = input[1].split(' ');
    let fine = 0;
    
    if(returnDate[2] > dueDate[2]){
        console.log(10000);
    }else if(returnDate[1] > dueDate[1] && returnDate[2] === dueDate[2]){
        let monthsLate = returnDate[1] - dueDate[1];
        // console.log('hii')
        fine = monthsLate * 500 ;
        console.log(fine);
    }else if(returnDate[0] > dueDate[0] && returnDate[1] === dueDate[1] && returnDate[2] === dueDate[2]){
        let daysLate = returnDate[0] - dueDate[0];
        fine = daysLate * 15;
        console.log(fine);
    }else{
        console.log('hii')
        console.log(fine);
    }
}

processData(['24', '12', '1898'],['18', '9', '1898'])