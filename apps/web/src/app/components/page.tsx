import { codeToHtml } from "shiki"

import "./index.css"

const code = "const a = 1" // input code
const html = await codeToHtml(code, {
	lang: "tsx",
	theme: "vitesse-dark",

	// decorations: [
	// 	{
	// 		// line and character are 0-indexed
	// 		start: { line: 1, character: 0 },
	// 		end: { line: 1, character: 11 },
	// 		properties: { class: "highlighted-word" },
	// 	},
	// ],
})

export default function ComponentsOverviewPage() {
	return (
		<div className="flex justify-center items-center h-full w-full">
			<div className="p-4">
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
				<div className="w-72" dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	)
}
