'use strict';

/* MAIN SCRIPT */


// Array for all notes
let allNotes = {
    'notesTitle': [],
    'archiveNotesTitle': [],
    'trashNotesTitle': [],
    'notes': [],
    'archiveNotes': [],
    'trashNotes': [],
}


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


// Render Notes To Archive
function renderArchiveNotes() {
    let archiveContentRef = document.getElementById('archive');
    archiveContentRef.innerHTML = '';
    for (let indexArchiveNotes = 0; indexArchiveNotes < allNotes.archiveNotes.length; indexArchiveNotes++) {
        archiveContentRef.innerHTML += getArchiveTemplate(indexArchiveNotes);
    }
}


// Render Notes To Trash
function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash');
    trashContentRef.innerHTML = '';
    for (let indexTrashNotes = 0; indexTrashNotes < allNotes.trashNotes.length; indexTrashNotes++) {
        trashContentRef.innerHTML += getTrashTemplate(indexTrashNotes);
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


// Push Note From Notes To Archive
function pushNoteToArchive(indexNotes) {
    let archiveNote = allNotes.notes.splice(indexNotes, 1);
    allNotes.archiveNotes.push(archiveNote[0]);

    let archiveNoteTitle = allNotes.notesTitle.splice(indexNotes, 1);
    allNotes.archiveNotesTitle.push(archiveNoteTitle[0])

    renderNotes();
    renderArchiveNotes();
}


// Push Note From Notes To Trash
function pushNoteToTrash(indexNotes) {
    let note = allNotes.notes.splice(indexNotes, 1);
    allNotes.trashNotes.push(note[0]);

    let noteTitle = allNotes.notesTitle.splice(indexNotes, 1);
    allNotes.trashNotesTitle.push(noteTitle[0]);

    renderNotes();
    renderTrashNotes();
}


// Push Note From Archive To Trash
function pushArchiveNoteToTrash(indexArchiveNotes) {
    let trashNote = allNotes.archiveNotes.splice(indexArchiveNotes, 1);
    allNotes.trashNotes.push(trashNote[0]);

    let trashNoteTitle = allNotes.archiveNotesTitle.splice(indexArchiveNotes, 1);
    allNotes.trashNotesTitle.push(trashNoteTitle[0])

    renderArchiveNotes();
    renderTrashNotes();
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