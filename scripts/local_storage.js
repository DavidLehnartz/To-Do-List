'use strict';

/* LOCAL STORAGE */


// Save To Local Storage
function saveToLocalStorage() {
    localStorage.setItem('notesTitle',JSON.stringify(allNotes.notesTitle));
    localStorage.setItem('archiveNotesTitle',JSON.stringify(allNotes.archiveNotesTitle));
    localStorage.setItem('trashNotesTitle',JSON.stringify(allNotes.trashNotesTitle));
    localStorage.setItem('notes',JSON.stringify(allNotes.notes));
    localStorage.setItem('archiveNotes',JSON.stringify(allNotes.archiveNotes));
    localStorage.setItem('trashNotes',JSON.stringify(allNotes.trashNotes));
    localStorage.setItem('date',JSON.stringify(allNotes.date));
    localStorage.setItem('archiveDates',JSON.stringify(allNotes.archiveDates));
    localStorage.setItem('trashDates',JSON.stringify(allNotes.trashDates));
}


// Get From Local Storage (INIT)
function GetFromLocalStorage() {
    if (localStorage.getItem('notesTitle')) {
        allNotes.notesTitle = JSON.parse(localStorage.getItem('notesTitle'));
    }
    if (localStorage.getItem('archiveNotesTitle')) {
        allNotes.archiveNotesTitle = JSON.parse(localStorage.getItem('archiveNotesTitle'));
    }
    if (localStorage.getItem('trashNotesTitle')) {
        allNotes.trashNotesTitle = JSON.parse(localStorage.getItem('trashNotesTitle'));
    }
    
    if (localStorage.getItem('notes')) {
        allNotes.notes = JSON.parse(localStorage.getItem('notes'));
    }
    if (localStorage.getItem('archiveNotes')) {
        allNotes.archiveNotes = JSON.parse(localStorage.getItem('archiveNotes'));
    }
    if (localStorage.getItem('trashNotes')) {
        allNotes.trashNotes = JSON.parse(localStorage.getItem('trashNotes'));
    }
    
    if (localStorage.getItem('date')) {
        allNotes.date = JSON.parse(localStorage.getItem('date'));
    }
    if (localStorage.getItem('archiveDates')) {
        allNotes.archiveDates = JSON.parse(localStorage.getItem('archiveDates'));
    }
    if (localStorage.getItem('trashDates')) {
        allNotes.trashDates = JSON.parse(localStorage.getItem('trashDates'));
    }

    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}
