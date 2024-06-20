import React, { useState, useRef, useEffect } from "react";
import { Editor, EditorState, RichUtils, ContentState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./RichTextEditor.css"; // Import CSS file for styling

const RichTextEditor = ({
  initialData,
  setter,
  setterOGObject,
  propertyToWrite,
}: {
  initialData: any;
  propertyToWrite: any;
  setterOGObject: any;
  setter: (data: any) => void;
}) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(ContentState.createFromText(initialData))
  );

  const editorRef = useRef<Editor>(null); // Use useRef with Editor type

  useEffect(() => {
    // Focus the editor when the component mounts
    if (editorRef.current) {
      editorRef.current.focus();
    }
  }, []);

  const handleKeyCommand = (command: string, editorState: EditorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const onChange = (newEditorState: EditorState) => {
    setEditorState(newEditorState);
    const contentState = newEditorState.getCurrentContent();
    setter({ ...setterOGObject, [propertyToWrite]: contentState.getPlainText() });
  };

  const handleInlineStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const focusEditor = () => {
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };

  return (
    <div className="rich-text-editor" onClick={focusEditor}>
      <div className="editor-toolbar">
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            handleInlineStyle("BOLD");
          }}
        >
          Bold
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            handleInlineStyle("ITALIC");
          }}
        >
          Italic
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            handleInlineStyle("STRIKETHROUGH");
          }}
        >
          Strikethrough
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            handleInlineStyle("UNDERLINE");
          }}
        >
          Underline
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            handleInlineStyle("CODE");
          }}
        >
          Monospace
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(
              RichUtils.toggleBlockType(editorState, "ordered-list-item")
            );
          }}
        >
          Ordered List
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(
              RichUtils.toggleBlockType(editorState, "unordered-list-item")
            );
          }}
        >
          Unordered List
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(
              RichUtils.toggleBlockType(editorState, "header-one")
            );
          }}
        >
          H1
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(
              RichUtils.toggleBlockType(editorState, "header-two")
            );
          }}
        >
          H2
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(
              RichUtils.toggleBlockType(editorState, "header-three")
            );
          }}
        >
          H3
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(
              RichUtils.toggleBlockType(editorState, "header-four")
            );
          }}
        >
          H4
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(
              RichUtils.toggleBlockType(editorState, "header-five")
            );
          }}
        >
          H5
        </button>
        <button
          className="toolbar-button"
          onMouseDown={(e) => {
            e.preventDefault();
            setEditorState(
              RichUtils.toggleBlockType(editorState, "header-six")
            );
          }}
        >
          H6
        </button>
      </div>
      <div className="editor-content" onClick={focusEditor}>
        <Editor
          ref={editorRef}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;
