const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
    let markdown = markdownInput.value;

    const lines = markdown.split("\n");

    const html = lines.map(line => {

        // H1
        if (/^\s#\s+/.test(" " + line)) {
            line = line.replace(/^\s*#\s+(.*)$/, "<h1>$1</h1>");
        }

        // H2
        else if (/^\s##\s+/.test(" " + line)) {
            line = line.replace(/^\s*##\s+(.*)$/, "<h2>$1</h2>");
        }

        // H3
        else if (/^\s###\s+/.test(" " + line)) {
            line = line.replace(/^\s*###\s+(.*)$/, "<h3>$1</h3>");
        }

        // Blockquote
        else if (/^\s>\s+/.test(" " + line)) {
            line = line.replace(/^\s*>\s+(.*)$/, "<blockquote>$1</blockquote>");
        }

        // Image
        else if (/^!\[(.*?)\]\((.*?)\)$/.test(line)) {
            line = line.replace(
                /^!\[(.*?)\]\((.*?)\)$/,
                '<img alt="$1" src="$2">'
            );
        }

        // Link
        else if (/^\[(.*?)\]\((.*?)\)$/.test(line)) {
            line = line.replace(
                /^\[(.*?)\]\((.*?)\)$/,
                '<a href="$2">$1</a>'
            );
        }

        // Bold (**text**)
        else if (/^\*\*(.*?)\*\*$/.test(line)) {
            line = line.replace(
                /^\*\*(.*?)\*\*$/,
                "<strong>$1</strong>"
            );
        }

        // Bold (__text__)
        else if (/^__(.*?)__$/.test(line)) {
            line = line.replace(
                /^__(.*?)__$/,
                "<strong>$1</strong>"
            );
        }

        // Italic (*text*)
        else if (/^\*(.*?)\*$/.test(line)) {
            line = line.replace(
                /^\*(.*?)\*$/,
                "<em>$1</em>"
            );
        }

        // Italic (_text_)
        else if (/^_(.*?)_$/.test(line)) {
            line = line.replace(
                /^_(.*?)_$/,
                "<em>$1</em>"
            );
        }

        // Formatage imbriqué
        line = line
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/__(.*?)__/g, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/g, "<em>$1</em>")
            .replace(/_(.*?)_/g, "<em>$1</em>");

        return line;

    }).join("");

    return html;
}

markdownInput.addEventListener("input", () => {
    const html = convertMarkdown();

    htmlOutput.textContent = html;
    preview.innerHTML = html;
});