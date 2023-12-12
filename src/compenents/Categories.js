import "../styles/Categorie.css";

function Categories({ activeCategorie, categories, setActiveCategorie }) {
  return (
    <div className="lmj-categories">
      <select
        value={activeCategorie}
        onChange={(e) => setActiveCategorie(e.target.value)}
        className="lmj-categories-select"
      >
        <option value="">---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategorie("")}>Reinitialiser</button>
    </div>
  );
}
export default Categories;
