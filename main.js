document.addEventListener("DOMContentLoaded" , function(){

    let myButton = document.getElementById("submit");
    let myInput1 = document.getElementById("task");

        myButton.disabled = true;
        myInput1.onkeyup = function (){
            if (myInput1.value.length >= 3) {
                myButton.disabled = false;
        }else{
            myButton.disabled = true;

        } ;

    }

    document.querySelector("form").onsubmit = function (){
        let myInput1 = document.getElementById("task").value;
        let li = document.createElement("li");
        li.innerHTML = myInput1;
        document.querySelector("#tasks").appendChild(li);
        document.getElementById("task").value =''; 
        return false
    }

})