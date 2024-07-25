import React from "react";
import BrushWrap from "./BrushWrap";
import motto from "../assets/vision.png";
import { ImQuotesLeft } from "react-icons/im";
import { GiArrowScope } from "react-icons/gi";
import boy from "../assets/boy.png";

function AboutUs() {
  return (
    <div className="mb-20">
      <div className="aboutus"></div>
      <div className="px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
        <div>
          <div className="flex items-center justify-center">
            <BrushWrap name={"ABOUT US"} className="text-center" />
          </div>
        </div>
        <div className="mt-10">
          <div>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus, consectetur impedit distinctio fugit necessitatibus
              totam dolore deserunt illo facilis repudiandae est eaque? Animi
              assumenda sed quos voluptas quae cumque nostrum officia natus?
              Quod nihil voluptatum reprehenderit asperiores consectetur
              perspiciatis libero quidem eum, sint voluptatem est consequatur
              odit. Animi harum quam tempore perspiciatis eveniet saepe ipsam
              dicta, omnis ut. Id labore minima aspernatur tempore asperiores
              dignissimos pariatur repellat molestias, similique sint quos illo
              aperiam nulla eaque facilis at? Consequatur beatae, deserunt totam
              omnis modi sed fugiat aperiam necessitatibus et tempore sint
              reprehenderit ratione officia quibusdam eos harum perferendis
              error debitis ipsa repudiandae! Ipsa ea tempore fugit. Tenetur
              repudiandae accusamus earum corporis, velit inventore iure optio
              doloremque necessitatibus, eum molestiae assumenda praesentium
              obcaecati repellat consequuntur eveniet atque corrupti rem? Odio
              repellendus debitis laboriosam fuga blanditiis laudantium. Debitis
              tenetur nostrum, quae pariatur optio voluptas dignissimos
              mollitia, ipsum dicta a laudantium? Optio fugit dolore qui
              sapiente error quaerat pariatur quasi quos, delectus quae
              inventore animi dolor mollitia cupiditate commodi minima debitis
              maxime dolorum adipisci ducimus sit! Veritatis, cum
              exercitationem. Nisi animi, dicta, repellendus sunt dolorem
              recusandae cumque voluptates qui, dolore aut maxime cum mollitia
              eligendi! Incidunt iusto et aliquam assumenda autem culpa nesciunt
              ratione!
            </p>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-center">
              <BrushWrap name={"OUR MOTTO"} className="text-center" />
              <img src={motto} className="h-36" />
            </div>
            <div className="mt-5 flex flex-row justify-center">
              <div className="flex flex-row text-5xl">
                <ImQuotesLeft className="text-blue-500" />
              </div>
              <div className="mt-5">
                <p className="text-center italic max-w-6xl text-lg">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Corrupti illum ab dolorem nam blanditiis laboriosam accusamus,
                  adipisci nulla possimus nihil et quam temporibus non nisi
                  beatae voluptate voluptates consequatur libero, ipsum alias
                  explicabo minima? Repellat ex ea harum. Accusantium vel
                  perferendis vero, dignissimos voluptas neque doloribus
                  praesentium saepe odit aperiam?
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex items-center justify-center">
              <BrushWrap name={"OUR VISION"} className="text-center" />
            </div>
            <div className="flex flex-row w-full justify-between items-center">
              <div className="mt-5 flex flex-col w-full">
                <div className="mt-5 space-y-4 w-full">
                  <div className="flex flex-row items-center w-full bg-purple-500 px-10 py-4 rounded-full text-white gap-2">
                    <GiArrowScope className="text-4xl" />
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non ab aut ipsa totam quis molestiae quasi voluptates enim
                      ut neque.
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-full bg-purple-500 px-10 py-4 rounded-full text-white gap-2">
                    <GiArrowScope className="text-4xl" />
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non ab aut ipsa totam quis molestiae quasi voluptates enim
                      ut neque.
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-full bg-purple-500 px-10 py-4 rounded-full text-white gap-2">
                    <GiArrowScope className="text-4xl" />
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non ab aut ipsa totam quis molestiae quasi voluptates enim
                      ut neque.
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-full bg-purple-500 px-10 py-4 rounded-full text-white gap-2">
                    <GiArrowScope className="text-4xl" />
                    <p className="text-lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Non ab aut ipsa totam quis molestiae quasi voluptates enim
                      ut neque.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img src={boy} className="h-96"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
