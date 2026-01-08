function InputSection({
  inputValue,
  setInputValue,
  quantity,
  setQuantity,
  addItem,
  handleKeyDown,
}) {
  return (
    <section className="bg-amber-400">
      <div className="container flex sm:flex-row justify-between flex-col items-center p-5 gap-3">
        <div className="text-xl font-semibold ">
          What do you need for your 😍 trip?
        </div>
        <div className="inline-flex sm:flex-row flex-col items-center justify-center sm:gap-0 gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full rounded border  focus:ring-2 focus:ring-gray-800  focus:border-gray-800 text-base outline-none text-gray-900 py-1 px-3 mx-1 leading-8 transition-colors duration-200 ease-in-out"
            placeholder="Add a new item..."
          />

          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            onKeyDown={handleKeyDown}
            className="w-15 rounded border  focus:ring-2 focus:ring-gray-800  focus:border-gray-800 text-base outline-none text-gray-900 py-1 px-2 mx-1 leading-8"
            min="1"
          />

          <button
            className=" bg-gray-800 border-0 py-2 px-4 focus:ring-2 focus:ring-gray-800  focus:border-gray-800 outline-none text-amber-300 hover:text-gray-50 rounded md:mt-0 mx-1 cursor-pointer"
            onClick={addItem}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}

export default InputSection;
