import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

export default function ExploreMenu({ category, setCategory }) {
  return (
    <div className="explore-menu id='explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, quia
        autem recusandae sapiente odio rem cumque cupiditate esse id modi
        dolorum. Quod neque accusamus dicta quae? Commodi soluta vel eaque!
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, i) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={i}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : " "}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
