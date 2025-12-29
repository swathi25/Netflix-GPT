import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  return (
    <div className="pt-36 flex justify-center">
      <form className=" w-1/2  bg-black  items-center grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9 "
          type="text"
          placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button className="px-3 py-2 bg-red-700 text-white rounded-lg col-span-2">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
