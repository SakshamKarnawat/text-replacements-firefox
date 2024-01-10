const addButton = document.getElementById("add");
const key = document.getElementById("key");
const value = document.getElementById("value");

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