'use strict';

/* MAIN SCRIPT */


// Array for all notes
let allNotes = {
    'notesTitle': [],
    'notes': [],
    'archiveNotesTitle': [],
    'archiveNotes': [],
    'trashNotesTitle': [],
    'trashNotes': [],
}

/* let notes = []; */


// Initialize
function init() {
    isInputEmpty();
}


// Render Notes
function renderNotes() {
    let noteContentRef = document.getElementById('notes');
    noteContentRef.innerHTML = '';
    for (let indexNotes = 0; indexNotes < allNotes.notes.length; indexNotes++) {
        noteContentRef.innerHTML += getNotesTemplate(indexNotes);
    }
}


// Add Title and Notes
function addTitleAndNote() {
    let inputNoteTitleRef = document.getElementById('input_title');
    let inputNoteTitle = inputNoteTitleRef.value;
    let inputNoteRef = document.getElementById('input_note');
    let inputNote = inputNoteRef.value;

    allNotes.notes.push(inputNote);
    allNotes.notesTitle.push(inputNoteTitle);

    renderNotes();
    clearInput();
    isInputEmpty();
    console.table(allNotes.notes);
    console.table(allNotes.notesTitle);
}


// If Input Is Empty Don`t Submit
function isInputEmpty() {
    let inputNoteTitle = document.getElementById('input_title').value;
    let inputNote = document.getElementById('input_note').value;

    if (inputNoteTitle === "" || inputNote === "") {
        document.getElementById('button').disabled = true;
    } else {
        document.getElementById('button').disabled = false;
    }
}


// Clear Input
function clearInput() {
    document.getElementById('input_title').value = "";
    document.getElementById('input_note').value = "";
}