import { useUser } from "@clerk/clerk-react";

export function NewFoundPage() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div>You shoud login!</div>;
  }

  return (
    <div>
      <h1>Share a New Found</h1>
      <form action="">
        <button>Add cover image</button>
        <input type="text" placeholder="My amazing found" />
        {/* CATEGORIES */}
        <div>
            <label htmlFor="">Choose a category</label>
            <select name="cat" id="">
<option value="general">General</option>
<option value="ui">UI</option>
<option value="react">React</option>
<option value="node">Node</option>
<option value="back">Back</option>
<option value="test">Test</option>
            </select>
        </div>
      </form>
    </div>
  );
}
