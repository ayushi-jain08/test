import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchallUser = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://test-23y4.onrender.com/api/user/allusers",
          {
            method: "GET",
            mode: "cors",
          }
        );
        const data = await res.json();
        if (res.ok) {
          setDatas(data.user);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchallUser();
  }, []);
  return (
    <>
      <h2>All User Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {" "}
          <div>
            {datas?.map((item) => (
              <div key={item._id}>
                <h4>{item.name}</h4>
                <p>{item.email}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default App;
