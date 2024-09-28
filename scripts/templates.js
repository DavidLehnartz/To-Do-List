'use strict';

/* TEMPLATES */

// Notes Template
function getNotesTemplate(indexNotes) {
    return `
           <div class="rendered-notes-wrapper">
                <div class="title">
                    <h4>${allNotes.notesTitle[indexNotes]}</h4>
                    <p>${allNotes.date[indexNotes]}</p>
                </div>
                <div class="note">
                    <p>${allNotes.notes[indexNotes]}</p>
                </div>
                <div class="note-footer">
                    <img onclick="pushNoteToArchive(${indexNotes})" class="notes-img" src="./assets/icons/archive_black.png" alt="archive">
                    <img onclick="pushNoteToTrash(${indexNotes})" class="notes-img" src="./assets/icons/trash_black.png" alt="trash">
                </div>
            </div>
    `;
}


// Archive Template
function getArchiveTemplate(indexArchiveNotes) {
    return `
            <div class="rendered-notes-wrapper">
                <div class="title">
                    <h4>${allNotes.archiveNotesTitle[indexArchiveNotes]}</h4>
                    <p>${allNotes.archiveDates[indexArchiveNotes]}</p>
                </div>
                <div class="note">
                    <p>${allNotes.archiveNotes[indexArchiveNotes]}</p>
                </div>
                <div class="note-footer">
                    <img onclick="restoreArchiveNoteToNotes(${indexArchiveNotes})" class="notes-img" src="./assets/icons/notez_black.png" alt="notes">
                    <img onclick="pushArchiveNoteToTrash(${indexArchiveNotes})" class="notes-img" src="./assets/icons/trash_black.png" alt="trash">
                </div>
            </div>
    `;
}


// Trash Template
function getTrashTemplate(indexTrashNotes) {
    return `
            <div class="rendered-notes-wrapper">
                <div class="title">
                    <h4>${allNotes.trashNotesTitle[indexTrashNotes]}</h4>
                     <p>${allNotes.trashDates[indexTrashNotes]}</p>
                </div>
                <div class="note">
                    <p>${allNotes.trashNotes[indexTrashNotes]}</p>
                </div>
                <div class="note-footer">
                    <img onclick="restoreNotesFromTrashToNotes(${indexTrashNotes})" class="notes-img" src="./assets/icons/notez_black.png" alt="notes">
                    <img onclick="restoreNoteFromTrashToArchive(${indexTrashNotes})" class="notes-img" src="./assets/icons/archive_black.png" alt="archive">
                    <img onclick="deleteNotesFromTrash(${indexTrashNotes})" class="notes-img" src="./assets/icons/trash_black.png" alt="trash">
                </div>
            </div>
    `;
}