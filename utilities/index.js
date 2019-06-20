// Utilities
// ------------------------

// Output a component with a code block
export function componentOutput(output, wrapper) {
    let markup = output.replace(/[\u00A0-\u9999<>\&]/gim, (i) => '&#' + i.charCodeAt(0) + ';').trim()

	return `
		<div class="${wrapper}">
			${output}
		</div>
		<p>&nbsp;</p>
		<hr>
        <pre><code>${markup}</code></pre>
	`
}
