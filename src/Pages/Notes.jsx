import React, { useEffect, useState } from "react";
import NotesCard from "../components/sidebar-Pages/Notes/NotesCard";
import { BsPlus } from "react-icons/bs";
import AddNote from "../components/sidebar-Pages/Notes/AddNote";
import ViewNote from "../components/sidebar-Pages/Notes/ViewNote";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { IoSparkles } from "react-icons/io5";
import { FiFileText } from "react-icons/fi";
import EditNote from "../components/sidebar-Pages/Notes/EditNote";
import Loader from "../components/loader/Loader"

const Notes = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [addNote, setAddNote] = useState(false);
    const [viewNote, setViewNote] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Filter");
    const [notesData, setNotesData] = useState([]);
    const [editNote, setEditNote] = useState(null);
    const [loading, setLoading] = useState(false);
    const [noteView, setNoteView] = useState(null);


    const headers = {
        authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTEwZDdiYmNiM2I2NWM2MmYzM2QzNiIsImVtYWlsIjoic2hhaGJhemFuc2FyaTgxOTlAZ21haWwuY29tIiwidXNlcm5hbWUiOiJTaGFoYmF6X0NvZGVyIiwiaWF0IjoxNzQyOTgxMTY2LCJleHAiOjE3NDM1ODU5NjZ9.K74NBmMFM64SrXOEgPwdHVUFWwMcm4lAXA3mWfPXAJ8",
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    const getData = async () => {
        setLoading(true);
        try {
            const res = await axios.get("http://localhost:3000/api/notes/get-notes", {
                headers,
            });
            setNotesData(res.data.data);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <ToastContainer position="top-right" theme="light" />
            <div className="relative">
                <div className="lg:px-12 ps-[4rem] pe-[1rem] mb-3">
                    <div>
                        <h1 className="font-worksans text-5xl font-medium text-text_Color">
                            Notes
                        </h1>
                        <p className="text-zinc-400">
                            With all of the styling tool options available in today's market
                        </p>
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
                                <path
                                    strokeWidth="1.5"
                                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                ></path>
                                <path strokeWidth="1.5" d="M8 12H16"></path>
                                <path strokeWidth="1.5" d="M12 16V8"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                {loading ? (
                    <div className="h-[70vh] w-full">
                        <Loader />
                    </div>
                ) : notesData.length > 0 ? (
                    <div className="mt-10 grid grid-cols-3 gap-4">
                        {Array.isArray(notesData) &&
                            notesData.map((note, index) => (
                                <NotesCard
                                    key={index}
                                    note={note}
                                    setNoteView={setNoteView}
                                    setViewNote={setViewNote}
                                    viewNote={viewNote}
                                />
                            ))}
                    </div>
                ) : (
                    <div className="mt-6 flex w-64 flex-col items-center rounded-xl border border-[#404040] bg-black bg-gradient-to-b px-4 py-10 shadow-sm transition-all duration-300 hover:shadow-md">
                        <div className="group relative mb-6">
                            <div className="to-text_Color-foreground/20 absolute -inset-1 rounded-full bg-gradient-to-r from-text_Color/20 opacity-80 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                            <FiFileText className="relative h-14 w-14 text-text_Color/80 transition-colors duration-200 group-hover:text-text_Color" />
                            <IoSparkles className="absolute -right-2 -top-2 h-5 w-5 animate-pulse text-yellow-400" />
                        </div>

                        <h1 className="text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
                            No notes{" "}
                            <span
                                onClick={() => setAddNote(true)}
                                className="group relative inline-block cursor-pointer text-text_Color"
                            >
                                <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transform bg-text_Color transition-transform duration-300 group-hover:scale-x-100"></span>
                                added
                            </span>
                        </h1>

                        <p className="mt-3 text-center font-medium text-gray-500 dark:text-gray-400">
                            Start by adding your first note!
                        </p>

                        <button
                            onClick={() => setAddNote(true)}
                            className="mt-6 flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 font-medium text-text_Color transition-all duration-300"
                        >
                            <BsPlus className="h-4 w-4" />
                            Add Note
                        </button>
                    </div>
                )}
            </div>
            {addNote && <AddNote setAddNote={setAddNote} getData={getData} />}
            {viewNote && (
                <ViewNote
                    setViewNote={setViewNote}
                    noteView={noteView}
                    getData={getData}
                />
            )}
            {/* <EditNote/> */}
        </>
    );
};

export default Notes;
