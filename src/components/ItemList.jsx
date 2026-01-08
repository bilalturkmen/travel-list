import SVGChecked from "../assets/checked";

function ItemList({
  sortedItems,
  totalItems,
  toggleCompletion,
  deleteItem,
  deleteAll,
  sortBy,
  setSortBy,
}) {
  if (!totalItems) {
    return (
      <main className="bg-amber-50">
        <div className="container p-5">
          <div className="w-full h-125 text-gray-300">
            <em>Start adding some items to your packing list 🚀</em>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-amber-50">
      <div className="container h-full p-5 ">
        <div className="flex flex-col justify-between min-h-full ">
          <div className="w-full mx-auto overflow-auto h-122 text-left border border-gray-300/50">
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-300/50">
                  <th className="px-4 py-3 w-2/3">Items</th>
                  <th className="px-4 py-3 text-nowrap">Item Status</th>
                  <th className="px-4 py-3 text-nowrap">Delete Item</th>
                </tr>
              </thead>
              <tbody>
                {sortedItems.map((item, index) => (
                  <tr key={index} className="border-b border-gray-300/50">
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center ${
                          item.completed ? "line-through" : ""
                        }`}
                      >
                        {item.completed && (
                          <span className="bg-gray-600 text-gray-50 size-4 mr-2 rounded-full inline-flex items-center justify-center">
                            <SVGChecked />
                          </span>
                        )}
                        {item.name} (x{item.quantity})
                      </span>
                    </td>
                    <td className="px-4 py-3 inline-flex items-center text-nowrap">
                      <input
                        type="checkbox"
                        checked={item.completed}
                        onChange={() => toggleCompletion(item.name)}
                        className="mr-1 size-5 cursor-pointer"
                      />
                      <label>Packed</label>
                    </td>

                    <td className="px-4 py-3">
                      <button
                        className={`inline-flex items-center text-nowrap ${
                          item.completed
                            ? "text-gray-400 cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                        onClick={() => deleteItem(item.name)}
                        disabled={item.completed}
                      >
                        &#x274c; Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="h-20 inline-flex justify-between items-center ">
            <button
              onClick={deleteAll}
              className="bg-cyan-500 text-white p-2 rounded"
            >
              Delete Entire List
            </button>
            <div className="relative">
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded border  border-cyan-300 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:border-cyan-500 text-base pl-3 pr-3"
              >
                <option value="input">Sort by input order</option>
                <option value="name">Sort by name</option>
                <option value="completed">Sort by completed status</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemList;
