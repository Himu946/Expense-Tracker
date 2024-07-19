// Handles the form submission
function handleFormSubmit(event) {
  event.preventDefault();
  const name = event.target.username.value;
  const email = event.target.email.value;
  const phone = event.target.phone.value;

  const obj = {
    name,
    email,
    phone
  };

  // Save the user data in localStorage
  localStorage.setItem(obj.email, JSON.stringify(obj));
  // Display the user on the screen
  showUserOnScreen(obj);
}

// Displays the user data on the screen
function showUserOnScreen(obj) {
  const parent = document.getElementById('user-list');
  const li = document.createElement('li');
  li.id = obj.email;
  li.innerHTML = `${obj.name} - ${obj.email} - ${obj.phone} <button onclick="deleteUser('${obj.email}')">delete</button>`;

  // Create and append the edit button
  const edit = document.createElement('button');
  edit.textContent = 'edit';
  edit.onclick = function() {
    deleteUser(obj.email);
    // Populate the input fields with existing values for editing
    document.getElementById('username').value = obj.name;
    document.getElementById('email').value = obj.email;
    document.getElementById('phone').value = obj.phone;
  };
  li.appendChild(edit);
  parent.appendChild(li);
}

// Deletes the user data from localStorage and the screen
function deleteUser(email) {
  localStorage.removeItem(email);
  const elementToRemove = document.getElementById(email);
  if (elementToRemove) {
    elementToRemove.remove();
  }
}
