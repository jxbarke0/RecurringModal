//function to show Dropdown Contact Modal after 30 seconds, then 2 minutes, then 5 minutes
$(document).ready(function () {
    localStorage.closeCount;
    var timer;

    //tracks how many times the modal has been closed in local storage
    function closeCounter() {
        if (typeof Storage !== "undefined") {
            if (localStorage.closeCount) {
                localStorage.closeCount = Number(localStorage.closeCount);
            } else {
                localStorage.closeCount = 0;
            }
        }
        else {
            console.log("This browser does not support local storage.");
        }
    }

    //function to show modal
    function showContactModal() {
        $('#dropdownContact').modal("show");
    }

    //for testing, uncomment the two lines below to remove close count in local storage,
    //save, refresh page (console should read "undefined"), comment the lines back out, save, refresh page
    //localStorage.removeItem("closeCount"); 
    //console.log(localStorage.closeCount);

    //every time the modal is closed, add to the close count
    $('#dropdownContact').on('hidden.bs.modal', function () {
        closeCounter();
        localStorage.closeCount = Number(localStorage.closeCount);
        localStorage.closeCount++;
        //console.log(localStorage.closeCount + ' = modal closed count');

        //if they haven't closed it 3 times, restart the timer
        if (Number(localStorage.closeCount) === 1) {
            clearTimeout(timer);
            setTimeout(showContactModal, 120000);
        }
        if (Number(localStorage.closeCount) === 2) {
            clearTimeout(timer);
            setTimeout(showContactModal, 300000);
        }
    });

    //if they click do not show again, close count is set to 3 so it doesn't show again
    $('#doNotShow').on('click', function doNotShowAgain() {
        localStorage.closeCount = 3;
    });

    //this function is called if the form submission is successful and the success modal shows
    var wasSuccessful = $('#successIndicator').html();
    if (wasSuccessful === "success") {
        $('#successModal').modal('show');

        $('#successModal').on('shown.bs.modal', function doNotShowAgain() {
            localStorage.closeCount = 3;
            clearTimeout(timer);
        });
    }

    //only show the modal after 30 seconds if it hasn't yet been closed
    if (Number(localStorage.closeCount) < 1 || isNaN(localStorage.closeCount) || localStorage.closeCount === "undefined") {
        timer = setTimeout(showContactModal, 30000);
    }

    //clear the timer if it started before determining local storage contents
    if (localStorage.closeCount > 2) {
        clearTimeout(timer);
    }
});
