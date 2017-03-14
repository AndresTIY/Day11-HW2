## Create a form
- include a 'submit' button
- when the user submits, run a FUNCTION that validates their input
- if the input is invalid, inform user that they need to fill out more information.
- if input is valid, put the input in an object and print that object to the CONSOLE
- start with ONE form with only ONE input (can multiple inputs go in a form?)YES IT can

created input, gave it id name of "fname". picked it out with document.query, saved to a var in js.
- current obstacle. when name is entered, how do you retrieve it?
- firstname.value gives me first name put in. var firstname = document.get....
- firstname should have one capital letter or should it convert first letter to capital?
- instructions only mention valid vs invalid
- valid = capital letter
- code isn't pretty, hoping there's ways to make it look better and keep it DRY
- I can create functions for each input area and then put it in the eventListener! YES
- 70% done with the form and there is a lot of repetitive code. I'm sure it can be cleaned up
