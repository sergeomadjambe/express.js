const notesList = document.getElementById('notesList');
const noteTitle = document.getElementById('noteTitle');
const noteText = document.getElementById('noteText');
const saveIcon = document.getElementById('saveIcon');
const writeIcon = document.getElementById('writeIcon');

// Load existing notes
function loadNotes() {
  // Fetch existing notes from localStorage, parse them, and display in the left-hand column
  const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];

  storedNotes.forEach((note, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = note.title;
    listItem.addEventListener('click', () => displayExistingNote(index));
    notesList.appendChild(listItem);
  });
}

// Display an existing note
function displayExistingNote(index) {
  const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  const note = storedNotes[index];

  noteTitle.value = note.title;
  noteText.value = note.text;
}

// Save a new note
function saveNote() {
  const newNote = {
    title: noteTitle.value,
    text: noteText.value
  };

  const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  storedNotes.push(newNote);
  localStorage.setItem('notes', JSON.stringify(storedNotes));

  // Refresh the notes list
  notesList.innerHTML = '';
  loadNotes();
}

// Show the save icon when the user inputs a new note
noteTitle.addEventListener('input', () => {
  saveIcon.style.display = 'block';
});

noteText.addEventListener('input', () => {
  saveIcon.style.display = 'block';
});

// Save the note when the save icon is clicked
saveIcon.addEventListener('click', saveNote);

// Clear the input fields when the write icon is clicked
writeIcon.addEventListener('click', () => {
  noteTitle.value = '';
  noteText.value = '';
});

// Initialize the notes page
loadNotes();
