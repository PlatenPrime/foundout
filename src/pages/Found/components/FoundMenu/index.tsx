import FoundMenuActions from "./FoundMenuActions";
import { FoundMenuAuthor } from "./FoundMenuAuthor";
import { FoundMenuCategories } from "./FoundMenuCategories";
import { FoundMenuSearch } from "./FoundMenuSearch";

export function FoundMenu() {
  return (
    <div className=" sticky px-4 h-max top-8">
      <FoundMenuAuthor />

      <FoundMenuActions />

      <FoundMenuCategories />

      <FoundMenuSearch />
    </div>
  );
}
