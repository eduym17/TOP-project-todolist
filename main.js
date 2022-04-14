import './style.css'

document.getElementById('date').innerText = new Date().getFullYear();

const toDo = document.createElement('div');
toDo.classList.add('toDo');

const toDoLeft = document.createElement('div');
toDoLeft.classList.add('toDoLeft');


toDo.appendChild(toDoLeft);

{/* <div class="toDo">
  <div class="toDoLeft">
    <input type="color" name="status" id="status">
    <input type="checkbox" name="status" id="status">
    <p>Nombre del proyecto</p>
  </div>
  <div class="toDoRight">
    <p>Date</p>
    <a href="/" class="edit">
      <svg xmlns="http://www.w3.org/2000/svg" class="editToDoIcon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
      </svg>
    </a>
    <a href="/" class="delete">
      <svg xmlns="http://www.w3.org/2000/svg" class="trashIcon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div> */}

// document.querySelector('#app').innerHTML = `
//   <h1>Holi crayoli</h1>
// `
