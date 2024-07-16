import "./App.css";
import Header from "./Header";
import Content1 from "./Content1";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import AddItem from "./AddItem";
import Search from "./Search";
import apiRequest from "./apiRequest";

function App() {
  const [list, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");

  const [search, setSearch] = useState("");

  const [fetchItems, setFetchItems] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const API_URL = "http://localhost:3500/items";

  console.log(fetchItems);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received");
        console.log(response);
        const listItems = await response.json();
        console.log(listItems);
        setFetchItems(null);
        setItems(listItems);
      } catch (error) {
        setFetchItems(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []);

  const addItem = async (text) => {
    const id = list.length ? parseInt(list[list.length - 1].id) + 1 : 1
    const listItem = { id, text, checked: false };
    const newListItems = [...list, listItem];
    setItems(newListItems);

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listItem),
    };

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchItems(result);
  };

  const handleChangeCheck = async (id) => {
    const listItems = list.map((listItem) => {
      return listItem.id === id
        ? { ...listItem, checked: !listItem.checked }
        : listItem;
    });
    setItems(listItems);

    const myItems = listItems.filter((item) => item.id === id);
    console.log(myItems);

    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myItems[0].checked }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchItems(result);
  };

  const handleClickDelete = async (id) => {
    const itemToDelete = list.find((listItem) => listItem.id === id);
    if (itemToDelete && itemToDelete.checked) {
      const updatedList = list.filter((listItem) => listItem.id !== id);
      setItems(updatedList);
    }
    const deleteOptions = {
      method :  "DELETE"
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchItems(result);
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem.trim() === "") return;
    console.log(newItem);
    addItem(newItem);
    setNewItem("");
  };

  return (
    <>
      <Header title={"My first React Exercise"} />

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p>Loading items..</p>}
        {fetchItems && <p>{`Error:${fetchItems}`}</p>}
        {!isLoading && !fetchItems && (
          <Content1
            list={list.filter((item) =>
              item.text.toLowerCase().includes(search.toLocaleLowerCase())
            )}
            handleChangeCheck={handleChangeCheck}
            handleClickDelete={handleClickDelete}
          />
        )}
      </main>

      <Footer length={list.length} />
    </>
  );
}

export default App;
