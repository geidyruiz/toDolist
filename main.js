// JavaScript Document


let button1 = document.getElementById("add"); // create the variable to the button new activities
button1.onclick = newElement; // call the function newElement when the user click on button Add to list


function newElement() {

	let ul = document.querySelector('ul'); //select the list
	let newLi = document.createElement('li'); // create a new member in the list
	let inputUserValue = document.getElementById("inputuser").value; //get the input value of the user
	let text = document.createTextNode(inputUserValue); //create the textNode in order to add the input value of the user in html docuemnt
	newLi.appendChild(text); // the textNode is create inside the li as a new member

	if (inputUserValue === '') { //verified if  the user input new activity
		alert("Please input an activity to the list"); // if the input user value is empty  shoaw an alert
	} else { //if the input user value have information create element
		let checkbox = document.createElement('input'); //create the input element
		checkbox.type = "checkbox"; // defined the input as a checkbox
		checkbox.className = "check"; // defined the class name of checkbox
		let button = document.createElement('button'); //create the element button 
		button.innerHTML = "Delete"; // defined the label of the button that user will see
		button.className = "delete" //defined the class name of the button
		ul.appendChild(newLi); // Add the new item li inside ul
		newLi.appendChild(checkbox); //Add the new checkbox inside the li
		newLi.appendChild(button); //Add the new button inside the li
	}

	document.getElementById("inputuser").value = ""; //clean the text input with a empty value 

	let checkboxStatutus = document.getElementsByClassName("check"); //create the variable checkboxStatutus to target element checkbox with the className 
	//console.log(checkboxStatutus);
	for (i = 0; i < checkboxStatutus.length; i++) { //crete a loop to verified which checkbox was onclick
		checkboxStatutus[i].onclick = function () { //if the checkbox was onclick execute the function
			let li = this.parentElement; //create to variable to save the li element(Parent) when child checkbox(className"check")is onclick
			console.log(li);
			li.style.color = 'green';
			li.style.textDecoration = "line-through"; // change the textDecortion of the element li with a line over the text
			ul.appendChild(li); //put the element li that was onclick in the checkbox in the botton of the list
		}
	}
	let btnDelete = document.getElementsByClassName("delete"); //create the variable btnDelete to target element Delete button  with the className 
	//console.log(btnDelete);
	for (i = 0; i < btnDelete.length; i++) { //crete a loop to verified which Delete button was onClick
		btnDelete[i].onclick = function () { //if the Delete Button was onclick execute the function
			let li = this.parentElement; //create to variable that target the li element(Parent) when child button(className"delete")is onclick
			//console.log(li);
			let parent = li.parentElement //create a varible that target the parent (Ul) of child (li)
			//console.log(parent);//
			parent.removeChild(li); //remove the element li of the ul
		}
	}

}
