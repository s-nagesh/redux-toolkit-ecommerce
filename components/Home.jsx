import React, { useState } from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import CardsData from "./CardData";
import Card from "react-bootstrap/Card";
import toast from "react-hot-toast";
import {useDispatch} from "react-redux"
import { addToCart } from "../Redux/features/cartSlice";

const Home = () => {
  const [cartData, setCartData] = useState(CardsData);
  const dispatch = useDispatch();

  const send = (e)=>{
    console.log("eeeee",e);
    dispatch(addToCart(e))
    toast.success("Item Added In You Cart")
  }
  return (
    <>
      <section className="iteam_section mt-4 container">
        <h2 className="px-4" style={{ fontWeight: 400 }}>
        पुण्यामधील हॉटेल फक्त 
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {cartData.map((element, index) => {
            return (
              <>
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="hove mb-4"
                >
                  <Card.Img
                    variant="top"
                    className="cd"
                    src={element.imgdata}
                  />
                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.dish}</h4>
                      <span>{element.rating}&nbsp;★</span>
                    </div>
                    <div className="lower_data d-flex justify-content-between ">
                      <h5>{element.address}</h5>
                      <span>₹ {element.price}</span>
                    </div>
                    <div className="extra"></div>
                    <div className="last_data d-flex justify-content-between align-items-center">
                      <img src={element.arrimg} className="limg" alt="" />
                      <Button
                        style={{
                          width: "150px",
                          background: "#ff3054db",
                          border: "none",
                        }}
                        className="mt-2 mb-2"
                        onClick={() => send(element)}
                      >
                        Add To Cart
                      </Button>
                      <img src={element.delimg} className="laimg" alt=""/>
                    </div>
                  </div>
                </Card>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
