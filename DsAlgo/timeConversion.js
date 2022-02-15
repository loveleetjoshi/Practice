function timeConversion(s) {
    // Write your code here
    let amORpm = s[s.length-2] + s[s.length-1];
    s=s.replace(amORpm , "")
    
    let hours = parseInt(s[0] + s[1]);
    
    if(amORpm === 'PM' && hours !== 12){
        hours += 12;
        s=s.split(':')
        s[0] = ''+hours;
        return s.join(':');
    }
    
    else if(amORpm === 'AM' && hours === 12){
        s=s.split(':')
        s[0] = '00';
        return s.join(':');
    }
     else{
         return s;
     }
}

const result=timeConversion('06:40:03AM');
console.log(result);