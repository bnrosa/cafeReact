import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { UPDATE_MENU_ITEM, GET_ITEM } from "../queries";
import ItemForm from "../components/ItemForm";
import { useParams, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditItem() {
  const { id } = useParams();
  let history = useHistory();
  const [updateMenuItem, {}] = useMutation(UPDATE_MENU_ITEM);

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const { loading, error, data } = useQuery(GET_ITEM, {
    variables: { id },
  });

  useEffect(() => {
    if (!loading && data) {
      setName(data.item.name);
      setPrice(data.item.price);
      setType(data.item.type);
    }
  }, [loading, data]);

  const setFile = ({
    target: {
      validity,
      files: [file],
    },
  }) => {
    validity.valid && setPhoto(file);
  };

  const editSuccessToast = () =>
    toast.success("Item edited successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });

  const editErrorToast = (err) => {
    toast.error("Failed to edit item: " + err, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateMenuItem({
      variables: {
        id: id,
        name: name,
        file: photo,
        price: parseInt(price),
        type: type,
      },
    })
      .then(() => {
        editSuccessToast();
        history.push("/");
      })
      .catch((err) => {
        editErrorToast(err);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  return (
    <ItemForm
      id={id}
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
      formName={"Edit menu item"}
    />
  );
}
