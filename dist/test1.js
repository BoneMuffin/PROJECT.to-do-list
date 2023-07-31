let doc = document;

function getNextStatus(currentStatus) {
  let statuses = ['undefined', 'started', 'halfway', 'done', 'canceled'];
  let currentIndex = statuses.indexOf(currentStatus);
  let nextIndex = (currentIndex + 1) % statuses.length;
  return statuses[nextIndex];
}

function createNote() {
  let note = document.createElement('div');
  note.classList.add('note');

  let todo = document.createElement('div');
  todo.classList.add('todo', 'undefined');

  let text = document.createElement('div');
  text.contentEditable = true;
  text.classList.add('text');
  text.textContent = 'Enter your note here';

  note.appendChild(todo);
  note.appendChild(text);

  return note;
}

doc.addEventListener('DOMContentLoaded', () => {
  let notesContainer = doc.querySelector('.notes');

  // Create initial notes
  for (let i = 0; i < 5; i++) {
    let note = createNote();
    notesContainer.appendChild(note);
  }

  // Event delegation for circle clicks
  notesContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo')) {
      let currentStatus = e.target.classList.contains('todo') ? 'undefined' : e.target.classList[1];
      let nextStatus = getNextStatus(currentStatus);

      e.target.classList.remove(currentStatus);
      e.target.classList.add(nextStatus);
    }
  });
});
