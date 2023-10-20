import hljs from 'highlight.js';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

export interface ErrorResponse {
	code: number;
	response: object;
}

export function formatCode<T extends Object>(res: T) {
	let highlightedCode = hljs.highlight(JSON.stringify(res, undefined, '\t'), {
		language: 'json'
	}).value;

	return html`<code class="theme1">${unsafeHTML(highlightedCode)}</code>`;
}

export async function createErr(err: any) {
	let status: number;
	let body: any;
	if (err.hasOwnProperty('$response')) {
		status = err.$response.status;
		body = JSON.parse(await err.$response.body.text());
	} else {
		status = err.status;
		body = await err.json();
	}

	return {
		code: status,
		response: body
	} as ErrorResponse;
}
