import React from "react";

export default function ItemForm(props) {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold text-lg p-4">{props.formName}</h2>
      </div>
      <form className="mt-8" onSubmit={(e) => props.handleSubmit(e)}>
        <div className="px-4 lg:px-12 max-w-lg ">
          <div className="py-1">
            <span className="px-1 text-sm text-gray-600">Name</span>
            <input
              className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600
                shadow-md focus:placeholder-gray-500 focus:bg-white
                focus:border-gray-600 focus:outline-none"
              type="text"
              placeholder="Name"
              value={props.name}
              onChange={(e) => props.setName(e.target.value)}
            />
          </div>
        </div>

        <div className="px-4 lg:px-12 max-w-lg ">
          <div className="py-1">
            <span className="px-1 text-sm text-gray-600">Price</span>
            <input
              className="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600
                shadow-md focus:placeholder-gray-500 focus:bg-white
                focus:border-gray-600 focus:outline-none"
              type="number"
              placeholder="Price"
              value={props.price}
              onChange={(e) => props.setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="px-4 lg:px-12 max-w-lg ">
          <div className="py-1">
            <span className="px-1 text-sm text-gray-600">Type</span>
            <select
              className="text-md block px-3 py-2 rounded-lg w-full
            bg-white border-2 border-gray-300 placeholder-gray-600
            shadow-md focus:placeholder-gray-500 focus:bg-white
            focus:border-gray-600 focus:outline-none"
              name="type"
              id="type"
              value={props.type}
              onChange={(e) => props.setType(e.target.value)}
            >
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Sushi">Sushi</option>
              <option value="Dessert">Dessert</option>
            </select>
          </div>
        </div>

        <div className="px-4 lg:px-12 max-w-lg ">
          <div className="py-1">
            <p className="px-1 pb-2 text-sm text-gray-600">Photo</p>
            <div className="py-2">
              <label
                className="bg-blue-500 text-white p-2 rounded
              text-base font-bold overflow-visible"
              >
                Chose photo
                <input
                  className="hidden"
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={(e) => props.setFile(e)}
                />
              </label>
            </div>
            <span className="text-xs">
              File: {props.photo ? props.photo.name : " "}
            </span>
          </div>
        </div>

        <button
          className="relative bg-blue-500 text-white p-2 rounded
          text-base font-bold overflow-visible"
          type="submit"
        >
          Save Item
        </button>
      </form>
    </div>
  );
}
