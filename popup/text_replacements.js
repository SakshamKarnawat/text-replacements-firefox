// function handleResponse(message) {
//     console.log(`Message from the background script: ${message.response}`);
// }

// function handleError(error) {
//     console.log(`Error: ${error}`);
// }

const addButton = document.getElementById("add");
var key = document.getElementById("key");
var value = document.getElementById("value");

document.addEventListener('DOMContentLoaded', function () {
    getTextReplacements().then((data) => {
        const replacements = data.replacements || [];

        const tbody = document.querySelector('tbody');

        replacements.forEach((replacement) => {
            const newRow = tbody.insertRow();

            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);

            cell1.textContent = replacement.key;
            cell2.textContent = replacement.value;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                deleteRow(newRow);
            });

            cell3.appendChild(deleteButton);
        });
    });
});

addButton.addEventListener("click", (e) => {
    addTextReplacement(key.value, value.value);
});

function getTextReplacements() {
    return browser.storage.local.get("replacements")
}

function addTextReplacement(key, value) {
    getTextReplacements().then(async (data) => {
        const replacements = data.replacements || [];
        replacements.push({ key, value });
        await browser.storage.local.set({ replacements: replacements });

        if (key && value) {
            const tbody = document.querySelector('tbody');

            const newRow = tbody.insertRow();

            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);

            cell1.textContent = key;
            cell2.textContent = value;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function () {
                deleteRow(newRow);
            });

            cell3.appendChild(deleteButton);

            document.getElementById('key').value = '';
            document.getElementById('value').value = '';
        }

        clearInputFields();


    });
}

function deleteRow(row) {
    const tbody = row.parentNode;

    const keyToDelete = row.cells[0].textContent.trim();

    tbody.removeChild(row);

    browser.storage.local.get('replacements').then(async (data) => {
        const replacements = data.replacements || {};

        for (let i = 0; i < replacements.length; i++) {
            if (replacements[i].key === keyToDelete) {
                replacements.splice(i, 1);
                break;
            }
        }

        await browser.storage.local.set({ replacements: replacements });

    });
}

function clearInputFields() {
    key.value = "";
    value.value = "";
}

// function listenForClicks() {

//     addButton.addEventListener("click", (e) => {
//         console.log("key: ", key.value);
//         console.log("value: ", value.value);

//         browser.runtime.sendMessage({
//             command: "addTextReplacement",
//             key: document.getElementById("key").value,
//             value: document.getElementById("value").value
//         });

//         // adding.then(handleResponse, handleError);
//     });
// }


// function reportExecuteScriptError(error) {
//     document.querySelector("#popup-content").classList.add("hidden");
//     document.querySelector("#error-content").classList.remove("hidden");
//     console.error(`Failed to execute text_replacements content script: ${error.message}`);
// }


// /**
// * When the popup loads, inject a content script into the active tab,
// * and add a click handler.
// * If we couldn't inject the script, handle the error.
// */
// // browser.tabs.executeScript({ file: "/content_scripts/storage.js" })
// //     .then(listenForClicks)
// //     .catch(reportExecuteScriptError);
