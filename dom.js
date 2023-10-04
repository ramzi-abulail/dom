function fillArray() {
    let input = "";
    let array = [];

    while (input !== null) {
       input = prompt("Enter your name , gender , age , drink (or click Cancel to stop):", "Value " + (array.length + 1));
       if (input !== null && input.trim() !== "") {
         array.push(input);
         displayArray(array);
       }
    }
   }

   function displayArray(arr) {
    let arrayList = document.getElementById("arrayList");
    arrayList.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
       let listItem = document.createElement("li");
       listItem.textContent = arr[i];
       arrayList.appendChild(listItem);
    }
   }
   f