import { Tldraw, track, useEditor } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { useYjsStore } from './useYjsStore'

const sweetClientToken = {
	url: 'wss://sweet-staging.learnmer.dev/doc/ws',
	docId: 'uXynWOmGwf6qie0eVB67y',
	token:
		'ARV1WHluV09tR3dmNnFpZTBlVkI2N3kB_f9Eku2NAQAAINNkJ5lwjZ3_atXylEPtBjfC4le9glyLkCDHT_xm3DoY',
}

export default function YjsExample() {
	const store = useYjsStore({
		clientToken: sweetClientToken,
	})

	return (
		<div className="tldraw__editor">
			<Tldraw
				autoFocus
				store={store}
				components={{
					SharePanel: NameEditor,
				}}
			/>
		</div>
	)
}

const NameEditor = track(() => {
	const editor = useEditor()

	const { color, name } = editor.user.getUserPreferences()

	return (
		<div style={{ pointerEvents: 'all', display: 'flex' }}>
			<input
				type="color"
				value={color}
				onChange={(e) => {
					editor.user.updateUserPreferences({
						color: e.currentTarget.value,
					})
				}}
			/>
			<input
				value={name}
				onChange={(e) => {
					editor.user.updateUserPreferences({
						name: e.currentTarget.value,
					})
				}}
			/>
		</div>
	)
})
