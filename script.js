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
    'date': [],
}


// Initialize
function init() {
    isInputEmptyDisableBtn();
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


// Add Title and Notes To Notes
function addTitleAndNote() {
    let inputNoteTitleRef = document.getElementById('input_title');
    let inputNoteTitle = inputNoteTitleRef.value;
    let inputNoteRef = document.getElementById('input_note');
    let inputNote = inputNoteRef.value;
    let dueDateRef = document.getElementById('date');
    let dueDate = dueDateRef.value;

    allNotes.notes.push(inputNote);
    allNotes.notesTitle.push(inputNoteTitle);
    allNotes.date.push(dueDate);

    renderNotes();
    clearInput();
    isInputEmptyDisableBtn();
}


// Push Note From Notes To Archive
function pushNoteToArchive(indexNotes) {
    let archiveNoteTitle = allNotes.notesTitle.splice(indexNotes, 1);
    allNotes.archiveNotesTitle.push(archiveNoteTitle[0])

    let archiveNote = allNotes.notes.splice(indexNotes, 1);
    allNotes.archiveNotes.push(archiveNote[0]);

    renderNotes();
    renderArchiveNotes();
}


// Push Note From Notes To Trash
function pushNoteToTrash(indexNotes) {
    let noteTitle = allNotes.notesTitle.splice(indexNotes, 1);
    allNotes.trashNotesTitle.push(noteTitle[0]);

    let note = allNotes.notes.splice(indexNotes, 1);
    allNotes.trashNotes.push(note[0]);

    renderNotes();
    renderTrashNotes();
}


// Push Note From Archive To Trash
function pushArchiveNoteToTrash(indexArchiveNotes) {
    let trashNoteTitle = allNotes.archiveNotesTitle.splice(indexArchiveNotes, 1);
    allNotes.trashNotesTitle.push(trashNoteTitle[0])

    let trashNote = allNotes.archiveNotes.splice(indexArchiveNotes, 1);
    allNotes.trashNotes.push(trashNote[0]);

    renderArchiveNotes();
    renderTrashNotes();
}


// Restore Note From Archive To Notes
function restoreArchiveNoteToNotes(indexArchiveNotes) {
    let restoredNoteTitle = allNotes.archiveNotesTitle.splice(indexArchiveNotes, 1);
    allNotes.notesTitle.push(restoredNoteTitle[0]);

    let restoredArchiveNote = allNotes.archiveNotes.splice(indexArchiveNotes, 1);
    allNotes.notes.push(restoredArchiveNote[0]);

    renderArchiveNotes();
    renderNotes();
}


// Restore Note From Trash To Archive
function restoreNoteFromTrashToArchive(indexTrashNotes) {
    let restoredTrashNoteTitleToArchive = allNotes.trashNotesTitle.splice(indexTrashNotes, 1);
    allNotes.archiveNotesTitle.push(restoredTrashNoteTitleToArchive[0]);

    let restoredTrashNoteToArchive = allNotes.trashNotes.splice(indexTrashNotes, 1);
    allNotes.archiveNotes.push(restoredTrashNoteToArchive[0]);

    renderArchiveNotes();
    renderTrashNotes();
}


// Restore Notes From Trash To Notes
function restoreNotesFromTrashToNotes(indexTrashNotes) {
    let restoredTrashNoteTitleToNotes = allNotes.trashNotesTitle.splice(indexTrashNotes, 1);
    allNotes.notesTitle.push(restoredTrashNoteTitleToNotes[0]);

    let restoredTrashNoteToNotes = allNotes.trashNotes.splice(indexTrashNotes, 1);
    allNotes.notes.push(restoredTrashNoteToNotes[0]);

    renderTrashNotes();
    renderNotes();
}


// Delete Notes From Trash
function deleteNotesFromTrash(indexTrashNotes) {
    allNotes.trashNotesTitle.splice(indexTrashNotes, 1);
    allNotes.trashNotes.splice(indexTrashNotes,);

    if (allNotes.trashNotesTitle.length === 0 && allNotes.trashNotes.length === 0) {
        allNotes.trashNotesTitle = [];
        allNotes.trashNotes = [];
    }

    renderTrashNotes();
}


// If Input Is Empty Don`t Submit
function isInputEmptyDisableBtn() {
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