import React, { useState, useEffect } from "react";
import NotesCard from "../components/sidebar-Pages/Notes/NotesCard";
import AddNote from "../components/sidebar-Pages/Notes/AddNote";
import { ToastContainer } from "react-toastify";

const Notes = () => {
    const [addNote, setAddNote] = useState(false);
    const [notesData, setNotesData] = useState([]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotesData(savedNotes);
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notesData));
    }, [notesData]);

    const deleteNote = (noteToDelete) => {
        const updatedNotes = notesData.filter(note => note !== noteToDelete);
        setNotesData(updatedNotes);
    };

    return (
        <>
            <ToastContainer position="top-right" theme="light" />
            <div className="relative w-full py-6 lg:px-6 ps-[4rem] pe-[1rem]">
                <div className="mb-3">
                    <div>
                        <h1 className="font-worksans text-5xl font-medium text-text_Color">Notes</h1>
                        <p className="text-zinc-400">Keep all your notes organized and accessible.</p>
                    </div>
                    <div className="fixed bottom-10 right-10">
                        <button
                            onClick={() => setAddNote(!addNote)}
                            className="group cursor-pointer outline-none duration-300 hover:rotate-90"
                        >
                            <svg
                                className="fill-none stroke-text_Color duration-300 group-hover:fill-teal-800 group-active:fill-teal-600 group-active:stroke-teal-200 group-active:duration-0"
                                viewBox="0 0 24 24"
                                height="50px"
                                width="50px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeWidth="1.5" d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"></path>
                                <path strokeWidth="1.5" d="M8 12H16"></path>
                                <path strokeWidth="1.5" d="M12 16V8"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {notesData.length > 0 ? (
                    <div className="mt-10 grid grid-cols-3 gap-4 w-full">
                        {notesData.map((note, index) => (
                            <NotesCard
                                key={index}
                                note={note}
                                deleteNote={deleteNote}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-zinc-400">No notes available. Click the + button to add a note.</p>
                )}
            </div>
            {addNote && <AddNote setAddNote={setAddNote} setNotesData={setNotesData} />}
        </>
    );
};

export default Notes;