import React, { useEffect, useRef, useState } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { toast } from "react-toastify";

const AddNote = ({ setAddNote, setNotesData }) => {
  const editorRef = useRef(null);
  const [quillInstance, setQuillInstance] = useState(null);
  const [data, setData] = useState({
    title: "",
    content: "",
    background: "bg-white",
  });

  const addNote = () => {
    if (!data.content.trim()) {
      toast.error("Note content cannot be empty!");
      return;
    }

    setNotesData((prevNotes) => [
      ...prevNotes,
      {
        title: data.title,
        content: data.content,
        background: data.background,
        createdAt: new Date(),
      },
    ]);

    toast.success("Note saved successfully!");
    setAddNote(false);
  };

  useEffect(() => {
    if (!editorRef.current) return;

    const quill = new Quill(editorRef.current, { theme: "snow" });
    setQuillInstance(quill);

    quill.on("text-change", () => {
      const delta = quill.getContents();
      let extractedTitle = "";

      for (let op of delta.ops) {
        if (op.attributes?.header === 1 || op.attributes?.header === 2) {
          extractedTitle = op.insert.trim();
          break;
        }
      }

      if (!extractedTitle) {
        extractedTitle = quill
          .getText()
          .trim()
          .split(" ")
          .slice(0, 5)
          .join(" ");
      }

      setData((prevData) => ({
        ...prevData,
        title: extractedTitle,
        content: quill.root.innerHTML,
      }));
    });

    return () => setQuillInstance(null);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f1f1f1a] backdrop-blur-sm">
      <div className="min-h-[70vh] w-[80%] max-w-[800px] rounded-xl bg-[#1b1b1b] border border-gray-700 p-4 px-5 py-5">
        <h1 className="font-worksans text-4xl font-medium text-text_Color">
          Write a new note
        </h1>
        <p className="text-zinc-400">
          Title will be taken from the first H1/H2 header or first few words.
        </p>
        <div
          className={`mt-2 h-[250px] rounded-md pb-[44px] text-zinc-900 ${data.background}`}
        >
          <div ref={editorRef} className="h-full w-full p-2" />
        </div>
        <div className="mt-8 flex gap-3">
          <button
            className="rounded-md bg-text_Color px-5 py-2"
            onClick={addNote}
          >
            Save
          </button>
          <button
            className="rounded-md border-2 border-text_Color px-5 py-2 text-text_Color "
            onClick={() => setAddNote(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
