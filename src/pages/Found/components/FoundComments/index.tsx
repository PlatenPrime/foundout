import { FoundComment } from "./FoundComment";

export default function FoundComments() {
  return (
    <div className="flex flex-col gap-8 lg:w-3/5">
      <h2 className="text-xl text-gray-300 underline">Comments</h2>
      <div className=" w-full flex items-center justify-between gap-2 " >
        <textarea placeholder="Write a comment..." className="w-full rounded-xl p-4 bg-gray-500/30 " />
        <button className="bg-blue-500 rounded-xl py-3 px-4 text-white font-medium" >Send</button>
      </div>
      <FoundComment/>
      <FoundComment/>
      <FoundComment/>
      <FoundComment/>
      <FoundComment/>
      <FoundComment/>
      <FoundComment/>
      <FoundComment/>
    </div>
  );
}
