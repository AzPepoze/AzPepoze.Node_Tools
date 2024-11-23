const fs = require("fs");

/**
 * Replaces content in a file based on a regular expression.
 *
 * @param {string} path - The path to the file.
 * @param {RegExp} regex - The regular expression to match the content to replace.
 * @param {string} target - The string to replace the matched content with.
 */
function File_Content_Replace(path, regex, target) {
	try {
		// Read the file content
		const content = fs.readFileSync(path, "utf8");

		// Replace the content using the regex and target
		const updatedContent = content.replace(regex, target);

		// Write the updated content back to the file
		fs.writeFileSync(path, updatedContent, "utf8");

		console.log(`File updated successfully: ${path}`);
	} catch (error) {
		console.error(`Error processing the file at ${path}:`, error);
	}
}

module.exports = { File_Content_Replace };