'use strict';

/* MAIN SCRIPT */


// Array for all notes
/* let allNotes = {
    'notesTitle': [],
    'notes': [],
    'archiveNotesTitle': [],
    'archiveNotes': [],
    'trashNotesTitle': [],
    'trashNotes': [],
} */

let notes = [];


// Initialize
function init() {

}


// Render Notes
function renderNotes() {
    let noteContentRef = document.getElementById('notes');
    noteContentRef.innerHTML = '';
    for (let indexNotes = 0; indexNotes < notes.length; indexNotes++) {
        noteContentRef.innerHTML += getNotesTemplate(indexNotes);
    }
}


// Add Title and Notes
function addTitleAndNote() {
    let inputNoteRef = document.getElementById('input_note');
    let inputNote = inputNoteRef.value;

    notes.push(inputNote);

    renderNotes();
}
