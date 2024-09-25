'use strict';

/* TEMPLATES */

// Notes Template
function getNotesTemplate(indexNotes) {
    return `
           <div class="rendered-notes-wrapper">
                <div class="title">
                    <h4>$title</h4>
                </div>
                <div class="note">
                    <p>${notes[indexNotes]}</p>
                </div>
                <div class="note-footer">
                    <img class="notes-img" src="./assets/icons/archive_black.png" alt="archive">
                    <img class="notes-img" src="./assets/icons/trash_black.png" alt="trash">
                </div>
            </div>
    `;
}