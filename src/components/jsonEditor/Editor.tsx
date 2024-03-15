import React, { useRef } from 'react'
import ReactDOM from 'react-dom';
import Editor from '@monaco-editor/react';

type Props = {
    addjson: (value: any) => void
}

export const JsonEditor = (props: Props) => {
    const editorRef: any = useRef(null);
    function handleEditorDidMount(editor: any, monaco: any) {
        editorRef.current = editor;
    }
    function handleEditorChange(value: any, event: any) {
        props.addjson(value);

    }

    return (
        <>

            <Editor
                height="90vh"
                defaultLanguage='json'
                defaultValue=""
                onMount={handleEditorDidMount}
                // theme='vs-dark'
                onChange={handleEditorChange}

            />
        </>
    )
}