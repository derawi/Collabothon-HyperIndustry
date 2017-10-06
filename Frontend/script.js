$( document ).ready(function() {
    var dialog = document.querySelector('dialog');
    var showDialogButton = document.querySelector('#show-dialog');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });  
});

function assetAccept() {
    var dialog = document.querySelector('dialog');
    dialog.showModal();
}

function closeDialog() {
    var dialog = document.querySelector('dialog');
    dialog.close();
    
    $("#asset-card1").fadeOut();
}

