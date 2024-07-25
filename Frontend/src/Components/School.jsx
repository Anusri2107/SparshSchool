import React from "react";
import Features from "./Features";
import BrushWrap from "./BrushWrap";
import schoolboy from "../assets/schoolboy.png";

function School() {
  return (
    <div className="px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
      <div className="flex items-center justify-center">
        <img src={schoolboy} className="h-56" />
        <BrushWrap name={"OUR SCHOOL"} className="text-center" />
      </div>
      <div className="flex flex-col gap-5 xl:gap-0 xl:flex-row items-start justify-center xl:justify-around mt-10">
        <div className="">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            aliquam possimus beatae rerum eligendi nostrum incidunt dicta,
            harum, sequi alias consequuntur quod ipsam debitis voluptates eaque
            fugit perspiciatis qui reiciendis! Aliquid sed commodi ullam neque
            laudantium mollitia laborum tempore ea facere, soluta hic dolores
            eligendi velit illum labore reiciendis perferendis numquam eos vel
            est! Officiis numquam perspiciatis eveniet eos rerum ratione a
            soluta earum fugit est deleniti atque dolore alias tenetur, quasi
            quam assumenda mollitia placeat! Repellat, commodi reiciendis,
            itaque nostrum eligendi dolores repellendus unde nihil quo aut vel
            assumenda quos veniam nam blanditiis ipsa necessitatibus facere
            deserunt impedit dolorem dolore quas minima nesciunt repudiandae?
            Unde, consequuntur consequatur aspernatur iste, hic iure laborum rem
            cumque placeat sit odit dignissimos dolores. Ipsa harum accusamus
            inventore quaerat voluptates eaque, cum nihil voluptatem deleniti
            odit, assumenda, deserunt molestiae. Saepe magnam quas a facilis,
            fugit amet, culpa vero doloremque quam ea dolore. Hic nostrum nobis
            ipsam expedita tempore officiis sint eaque voluptatibus ipsum
            debitis! Libero quasi nam magnam totam animi soluta ipsam provident,
            fuga unde adipisci ullam doloribus nihil sint ducimus distinctio
            voluptatibus explicabo, officia molestias nulla cumque, est et eius
            ex. Perspiciatis dolore ducimus vitae, sit vel fuga atque mollitia
            laborum commodi esse.
          </p>
        </div>
        <div>
          <Features />
        </div>
      </div>
    </div>
  );
}

export default School;
