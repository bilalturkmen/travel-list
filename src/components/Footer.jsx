import Attribution from "../assets/attribution";

function Footer({ totalItems, completedItems, completionPercentage }) {
  return (
    <footer className="bg-cyan-300">
      <div className="container p-5">
        <div className="">
          <p>
            You have {totalItems} items on your list, and you already packed{" "}
            {completedItems} ({completionPercentage}%)
          </p>
        </div>
        <div>
          <Attribution />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
