import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

export function NewFoundPage() {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>You shoud login!</div>;
  }

  return (
    <div
      className="md:h-[calc(100vh-4rem)]  md:h-[calc(100vh-5rem)]
    flex flex-col gap-6 p-4
    "
    >
      <h1 className="text-xl font-light">Share a New Found</h1>
      <form className="flex flex-col gap-6  flex-1 mb-6">
        <button className="w-max p-2 shadow-md rounded-xl text-sm bg-blue-500 text-white">
          Add a cover image
        </button>
        <input
          type="text"
          placeholder="My amazing found..."
          className="text-4xl font-semibold bg-transparent  outline-none"
        />
        {/* CATEGORIES */}
        <div
        className="flex items-center gap-4 "
        >
          <label className="text-sm"  htmlFor="">Choose a category</label>
          <select name="cat" id="" className="p-2 rounded-xl bg-white/20 shadow-md">
            <option className="bg-slate-900/80" value="general">General</option>
            <option className="bg-slate-900/80" value="ui">UI</option>
            <option className="bg-slate-900/80" value="react">React</option>
            <option className="bg-slate-900/80" value="node">Node</option>
            <option className="bg-slate-900/80" value="back">Back</option>
            <option className="bg-slate-900/80" value="test">Test</option>
          </select>
        </div>
        <textarea className="p-4 rounded-xl bg-white/20 shadow-md outline-none"  name="desc" placeholder="Describe your found..." />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className="flex-1  rounded-xl bg-white/20 shadow-md "
        />
        <button className= "w-max bg-blue-500 rounded-xl py-3 px-4 text-white font-medium" >Send</button>
      </form>
    </div>
  );
}
