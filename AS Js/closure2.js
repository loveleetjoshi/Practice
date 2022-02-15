// SetTmeOut + Closure

var ab=0;
function a() {
    var b= 1;
    for (var i = 1; i <=5; i++) {
        // debugger;
        function close(j) {
            setTimeout(function (){
                console.log(j);
            },j * 1000)
        }

        close(i);
    }

    console.log("Hello")
}

a();