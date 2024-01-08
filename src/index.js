document.addEventListener("DOMContentLoaded", () => {
  //get the form
  let form = document.querySelector('#create-task-form')
  //add an event 'submit'
  form.addEventListener('submit',(e) => {
    //method to prevent default behaviour from form
    e.preventDefault();

    //get value from the form input
    let taskDescription = e.target['new-task-description'].value

    //create a new li element to represent the task
    let li = document.createElement('li')
    li.textContent = taskDescription

    //append the new task to the ul with id 'tasks'
    let ul = document.querySelector('#tasks')
    ul.appendChild(li);

    //button to remove tasks from list
    let btn = document.createElement('button')
    //add a click event to buton
    btn.addEventListener('click', handleDelete)
    //add a span element between the text and the button
    let spaceSpan = document.createElement('span')
    spaceSpan.textContent = ' ';
    li.appendChild(spaceSpan);

    btn.textContent = 'x'
    li.appendChild(btn);

    //a delete function to remove tasks from list
    function handleDelete(e){
      e.target.parentNode.remove();
    }
    //clear the form input after adding the task
    e.target['new-task-description'].value = '';

    //reset the form when user is done
    e.target.reset();



  })
});








