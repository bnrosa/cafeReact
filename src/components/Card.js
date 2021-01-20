import React from "react";
import { Link } from "react-router-dom";
import { DELETE_ITEM } from "../queries";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { SERVER_URL } from "../index.js";

export default function Navbar(props) {
  const [deleteItem] = useMutation(DELETE_ITEM);

  const deleteSuccessToast = () =>
    toast.success("Item deleted successfully !", {
      position: toast.POSITION.TOP_RIGHT,
    });

  const deleteErrorToast = (err) => {
    toast.error("Failed to delete item: " + err, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleDelete = () => {
    deleteItem({
      variables: {
        id: props.id,
      },
    })
      .then(() => {
        deleteSuccessToast();
        props.refetch();
      })
      .catch((err) => {
        deleteErrorToast(err);
      });
  };
  return (
    <article className="overflow-hidden rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 plan-card m-2">
      <img
        alt="Placeholder"
        className="block h-auto w-full"
        src={SERVER_URL + props.photo}
      />
      <header className="flex items-center justify-between leading-tight py-2 px-4 md:p-4">
        <h1 className="text-lg">
          <span className="no-underline hover:underline text-gray-600 text-base">
            {props.type}
          </span>
        </h1>
        <p className="text-gray-400 text-sm">${props.price}</p>
      </header>
      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <p className="ml-2 text-lg bold">{props.name}</p>
        <div>
          <Link
            className="bg-green-400 hover:bg-grey text-grey-darkest
          font-bold py-2 px-2 mx-1 rounded inline-flex items-center"
            to={"/editMenuItem/" + props.id}
          >
            <svg
              className="w-4 h-4 lg:w-6 lg:h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
              <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
            </svg>
          </Link>
          <button
            className="bg-red-400 hover:bg-grey text-grey-darkest
          font-bold py-2 px-2 mx-1 rounded inline-flex items-center"
            onClick={handleDelete}
          >
            <svg
              className="w-4 h-4 lg:w-6 lg:h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      </footer>
    </article>
  );
}
