import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MENU_ITEM } from "../queries";
import ItemForm from "../components/ItemForm";
import { toast } from "react-toastify";

export default function CreateItem() {
  const [addMenuItem, { loading, error }] = useMutation(ADD_MENU_ITEM);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const creatSuccessToast = () =>
    toast.success("Item created successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });

  const setFile = ({
    target: {
      validity,
      files: [file],
    },
  }) => {
    setPhoto(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addMenuItem({
      variables: {
        name: name,
        file: photo,
        price: parseInt(price),
        type: type,
      },
    }).then(() => {
      creatSuccessToast();
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  return (
    <ItemForm
      name={name}
      price={price}
      type={type}
      photo={photo}
      setPrice={setPrice}
      setName={setName}
      setFile={setFile}
      setPhoto={setPhoto}
      setType={setType}
      handleSubmit={handleSubmit}
      formName={"Add menu item"}
    />
  );
}
