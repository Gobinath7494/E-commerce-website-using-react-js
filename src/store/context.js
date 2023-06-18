import React from "react";

const Cartcontaxt = React.createContext({
  token: "",
  loggedin: null,
  item: [],
  totalquantity: null,
  totalamount: null,
  additem: () => {},
  logedin: (token) => {},
});

export default Cartcontaxt;
