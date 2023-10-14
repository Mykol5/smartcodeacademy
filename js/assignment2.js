document.addEventListener("DOMContentLoaded", function () {
    const runButton = document.getElementById("run-button");
    const pythonCode = document.getElementById("python-code");
    const resultOutput = document.getElementById("result-output");

    runButton.addEventListener("click", function () {
        // Clear previous result
        resultOutput.textContent = "";

        // Get Python code from the textarea
        const code = pythonCode.value;

        try {
            // Execute Python code using Skulpt
            Sk.configure({ output: function (text) { resultOutput.textContent += text; } });
            const myPromise = Sk.misceval.asyncToPromise(function () {
                return Sk.importMainWithBody("<stdin>", false, code, true);
            });

            myPromise.then(function (mod) { }, function (err) {
                resultOutput.textContent = "An error occurred: " + err.toString();
            });

        } catch (error) {
            // Handle and display any errors
            resultOutput.textContent = "An error occurred: " + error.message;
        }
    });
});
