import React, { useState, useEffect } from "react";
import Cartcontaxt from "./context";

const Cartcontaxtprovider = (props) => {
  const locaktoken = localStorage.getItem("key");
  const [listitem, setlistitem] = useState([]);
  const [totalquantity, settotalquantity] = useState(0);
  const [totalamount, settotalamount] = useState(0);
  const [token, settoken] = useState(locaktoken);

  useEffect(() => {
    let email = localStorage.getItem("email");
    if (email) {
      fetch(
        `https://crudcrud.com/api/872a9fd2af484916878b85c2d89ca1c8/${email}`,
        {
          method: "GET",
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw new Error("somthing went wrong");
          } else {
            return res.json();
          }
        })
        .then((data) => {
          settotalquantity(0);
          data.map((item) => Additemhandler(item));
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, []);

  const islogged = !!token;
  const loginhandler = (data) => {
    settoken(data);
  };

  const Additemhandler = (item) => {
    settotalquantity((quntity) => quntity + 1);
    settotalamount((amount) => amount + item.price);
    setlistitem((items) => {
      const index = items.findIndex((itemss) => itemss.id === item.id);
      const iditem = items[index];
      if (iditem) {
        console.log(iditem);
        let updateitem = {
          ...iditem,
          quantity: iditem.quantity + 1,
        };
        let olditem = [...items];
        olditem[index] = updateitem;

        return olditem;
      } else {
        return [...items, item];
      }
    });
  };

  const obj = {
    token: token,
    loggedin: islogged,
    item: listitem,
    totalquantity: totalquantity,
    totalamount: totalamount,
    additem: Additemhandler,
    logedin: loginhandler,
  };
  return (
    <Cartcontaxt.Provider value={obj}>{props.children}</Cartcontaxt.Provider>
  );
};

export default Cartcontaxtprovider;
