import React from "react";
import BrushWrap from "./BrushWrap";
import principal from "../assets/principal.jpg";
import { ImQuotesLeft } from "react-icons/im";

function PrincipalsDesk() {
  return (
    <div className="mb-20">
      <div className="principal"></div>
      <div className="px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
        <div>
          <div className="flex items-center justify-center">
            <BrushWrap name={"PRINCIPAL'S MESSAGE"} className="text-center" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <div className="w-1/2">
            <img src={principal} />
            <div className="text-center">
              <span className="text-2xl font-bold">Principal's Name</span><br/>
              <span className="text-xl font-semibold">Principal, Sparsh School</span>
            </div>
          </div>
          <div className="w-1/2 text-center text-lg flex flex-row">
            <div>
              <ImQuotesLeft className="text-2xl text-purple-500"/>
            </div>
            <p className="mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad quod
              debitis eveniet commodi nostrum saepe, dolore sequi quas eius iure
              suscipit vero dolores omnis. Accusantium natus cupiditate,
              asperiores, minima atque impedit distinctio aperiam modi sequi
              laudantium animi fugiat. Pariatur, facilis numquam recusandae
              similique, omnis obcaecati, reprehenderit consequuntur unde atque
              voluptas aperiam. Cupiditate, dicta quidem quaerat magni error
              beatae, maxime aliquam autem amet a velit, perferendis voluptates
              ducimus. Facere delectus maiores alias sunt asperiores porro
              expedita tempore quod voluptatibus eveniet nesciunt, praesentium
              assumenda pariatur necessitatibus, maxime repudiandae iste, ex aut
              repellat. Eaque amet deleniti suscipit nam quibusdam a hic, ipsam
              natus vitae explicabo perspiciatis blanditiis tenetur iste!
              Asperiores at iusto sed et, ducimus laudantium enim quis omnis.
              Maiores eaque enim ad doloribus quasi beatae temporibus aliquid
              officia ea. Ut voluptatibus quam alias ducimus ipsum cumque
              adipisci commodi a. Numquam eligendi id voluptatem quisquam
              pariatur, explicabo praesentium, veniam quos molestiae architecto
              optio recusandae? Neque, eligendi. Ullam suscipit asperiores
              temporibus dolorem porro voluptatum, itaque sit dolor ipsa qui
              tempore doloribus corrupti nobis, in doloremque natus consequuntur
              aperiam odit iste, quos ex provident. Ducimus dignissimos hic,
              atque voluptatibus numquam explicabo exercitationem natus repellat
              laudantium nam fugiat veniam excepturi cupiditate accusantium.
              Omnis voluptate temporibus saepe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrincipalsDesk;
