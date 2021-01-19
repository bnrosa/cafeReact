import { gql } from "@apollo/client";

export const ADD_MENU_ITEM = gql`
  mutation($file: Upload!, $name: String!, $price: Int!, $type: String!) {
    addMenuItem(file: $file, name: $name, price: $price, type: $type) {
      id
      name
    }
  }
`;

export const UPDATE_MENU_ITEM = gql`
  mutation(
    $id: String!
    $file: Upload!
    $name: String!
    $price: Int!
    $type: String!
  ) {
    updateMenuItem(
      id: $id
      file: $file
      name: $name
      price: $price
      type: $type
    ) {
      id
      name
    }
  }
`;

export const GET_ITEMS = gql`
  query {
    items {
      id
      name
      price
      type
      photo
    }
  }
`;

export const GET_ITEM = gql`
  query($id: String!) {
    item(id: $id) {
      id
      name
      price
      type
      photo
    }
  }
`;

export const DELETE_ITEM = gql`
  mutation($id: String!) {
    deleteMenuItem(id: $id)
  }
`;
