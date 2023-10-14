// Get elements
const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const runButton = document.getElementById('run-button');
const resultFrame = document.getElementById('result-frame');

// Run code when the "Run" button is clicked
runButton.addEventListener('click', () => {
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = `<script>${jsCode.value}</script>`;
    
    // Create an HTML document with the user's code
    const documentContent = `
        <html>
            <head>
                <title>Assignment Result</title>
                ${css}
            </head>
            <body>
                ${html}
                ${js}
            </body>
        </html>
    `;

    // Update the iframe content
    resultFrame.srcdoc = documentContent;
});

// Resize the iframe when the window size changes
window.addEventListener('resize', () => {
    const windowHeight = window.innerHeight;
    resultFrame.style.height = `${windowHeight - 300}px`;
});
