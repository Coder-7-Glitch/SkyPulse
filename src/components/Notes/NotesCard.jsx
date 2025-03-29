import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import DOMPurify from "dompurify";

const NotesCard = ({ note, setNoteView, deleteNote }) => {
  return (
    <div
      onClick={() => setNoteView(note)}
      className="flex h-full w-full flex-col overflow-hidden rounded-xl transition-all duration-300 cursor-pointer"
    >
      <div className="relative">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${note.background} overflow-hidden rounded-xl opacity-90`}
        ></div>
        <div className="absolute inset-0 rounded-xl bg-white/10 backdrop-blur-[1px]"></div>
        <div className="pointer-events-none absolute inset-0 m-1 rounded-xl border-2 border-dashed border-white/40"></div>
        <div className="relative z-10 p-6">
          <div className="prose prose-lg py-3">
            <div
              className="note-custom-html leading-relaxed text-zinc-700"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  note.content.length > 600
                    ? `${note.content.slice(0, 600)}...`
                    : note.content,
                ),
              }}
            ></div>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2 text-zinc-800">
              <FaRegCalendarCheck className="h-4 w-4" />
              <span className="text-sm font-medium">
                {new Date(note.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                deleteNote(note);
              }}
              className="text-red-600 hover:text-red-800"
            >
              <AiOutlineDelete size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
