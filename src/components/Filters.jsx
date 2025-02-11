function Filters() {
  return (
    <div>
      <form className="p-4 m-4">
        <select name="sell_or_buy" id="sell_or_buy">
          <option value="buy">I want to buy </option>
          <option value="sell">I want to sell </option>
        </select>
        <input type="text" placeholder="Location" />
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Brand" />
        <input type="text" placeholder="Model" />
        <button type="submit">Search With Filters</button>
      </form>
    </div>
  );
}

export default Filters;
