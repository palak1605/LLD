import { useEffect, useState } from "react";

const SearchUi = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    // Debouncing
    const s = setTimeout(() => {
      fetchData();
    }, 300);
    return () => clearTimeout(s);
  }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      const data = await fetch(
        "https://www.google.com/complete/search?client=firefox&q=" + searchText
      );
      const json = await data.json();
      console.log(json[1]);
      cache[searchText] = json[1];
      setSearchResults(json[1]);
    }
  };

  return (
    <div style={{ margin: "40px" }}>
      <input
        type="text"
        style={{
          border: "1px solid black",
          padding: "8px",
          width: "384px", // Tailwind's w-96 is equivalent to 24rem which is 384px
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)", // shadow-lg equivalent
        }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsResultVisible(true)}
        onBlur={() => setIsResultVisible(false)}
      />
      {searchResults.length > 1 && isResultVisible && (
        <ul
          style={{
            padding: "8px",
            border: "1px solid black",
            width: "384px",
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
            marginTop: "4px", // Adding some spacing between input and results
          }}
        >
          {searchResults.map((r) => (
            <li
              key={r}
              style={{
                padding: "8px",
                cursor: "pointer",
                backgroundColor: "#fff",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#f5f5f5")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
            >
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUi;
