import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  console.log("gpt search");
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
