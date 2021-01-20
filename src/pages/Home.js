import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { GET_ITEMS } from "../queries";
import { useQuery } from "@apollo/client";
import Card from "../components/Card";

export default function Home() {
  const { loading, error, data, refetch } = useQuery(GET_ITEMS);

  useEffect(() => {
    if (!loading && data) {
      refetch();
    }
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  return (
    <main>
      <div className="flex justify-between">
        <h2 className="font-bold text-lg px-4">Menu</h2>
        <Link to={"/createMenuItem"}>
          <button
            className="relative bg-blue-500 text-white p-2 rounded
          text-base font-bold overflow-visible"
          >
            Add menu item
          </button>
        </Link>
      </div>

      <div className="w-full h-full flex flex-wrap items-center justify-around">
        {data.items.map(({ id, name, price, type, photo }, index) => {
          return (
            <Card
              id={id}
              name={name}
              type={type}
              key={index}
              photo={photo}
              price={price}
              refetch={refetch}
            />
          );
        })}
      </div>
    </main>
  );
}
