function highlight() {
    //Write your code here
	 var paraEle = document.getElementById("para");
            var strongEle = document.querySelectorAll('strong');
            strongEle.forEach((el) => { el.style.color = "rgb(0, 128, 0)"; })


}


function return_normal() {
    //Write your code here
var strongEle = document.querySelectorAll('strong');
            strongEle.forEach((el) => { el.style.color = "rgb(0, 0, 0)"; })
    
}
