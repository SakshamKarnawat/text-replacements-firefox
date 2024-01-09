// (() => {

//     if (window.hasRun) {
//         print("already run");
//         return;
//     }
//     getTextReplacements();
//     window.hasRun = true;

//     async function getTextReplacements() {
//         console.log("getting text replacements");
//         let textReplacements = browser.storage.local.get("textReplacements");
//         return textReplacements
//     }

//     async function addTextReplacement(key, value) {
//         console.log("adding text replacement");
//         // let textReplacements = await getTextReplacements();
//         // textReplacements.push({ key, value });
//         // await browser.storage.local.set({ textReplacements });
//     }

//     browser.runtime.onMessage.addListener((message) => {
//         console.log("message: ", message);
//         if (message.command === "addTextReplacement") {
//             addTextReplacement(message.key, message.value);
//         } else if (message.command === "getTextReplacements") {
//             getTextReplacements();
//         }
//     });

// })();


browser.storage.local.get('replacements').then((data) => {
    const replacements = data.replacements || [];
    document.addEventListener('input', function (event) {
        replacements.forEach(replacement => {
            if (event.target.value === replacement.key) {
                event.target.value = replacement.value;
            }
        });
    });
});
