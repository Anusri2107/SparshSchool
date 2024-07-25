import React from "react";
import BrushWrap from "./BrushWrap";
import schoolbuilding from "../assets/schoolbuilding.jpg";
import Teacher from "./Teacher";

function SixMileBranch() {
  return (
    <div className="mb-20">
      <div className="sixmile"></div>
      <div className="px-5 py-3 lg:px-10 mt-10 xl:px-20 xl:py-5">
        <div>
          <div className="flex items-center justify-center">
            <BrushWrap
              name={"SPARSH SCHOOL SIX MILE"}
              className="text-center"
            />
          </div>
        </div>
        <div className="mt-10">
          <div className="flex flex-row gap-10">
            <div className="w-1/3">
              <img src={schoolbuilding} />
            </div>
            <div className="w-2/3">
              <p className="text-lg text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error
                totam hic, atque nesciunt, sapiente eaque officiis non,
                cupiditate facere exercitationem quasi molestias aut mollitia
                aliquid omnis obcaecati ut doloribus alias quas! Rem esse
                aliquam, recusandae ipsum eaque debitis aperiam neque voluptatem
                asperiores praesentium architecto rerum saepe, ipsa numquam
                mollitia porro eligendi alias, perferendis perspiciatis ad hic
                temporibus fugit dolorem! Quidem quam iusto cupiditate vero,
                nesciunt, voluptatibus error neque quisquam et pariatur natus
                ipsa sunt ducimus. Quaerat id maiores alias ipsam fuga, ipsum
                dolore natus! Magnam, sit rem modi facilis a illo numquam
                reiciendis alias iure eveniet rerum veniam et saepe accusamus
                qui in temporibus cum hic sed, est assumenda officia eius?
                Commodi nesciunt necessitatibus, quasi, magnam id veritatis
                alias animi deserunt suscipit incidunt sint dolore eos tempore
                architecto dolores facilis sed distinctio? Voluptates aspernatur
                recusandae nulla laboriosam velit officiis id tempora, tenetur
                dolores quibusdam minima inventore distinctio quisquam
                repellendus. Voluptas eius consectetur aliquam at, enim aperiam.
                Repudiandae error amet tempore est illo. Ipsa, debitis. Dolorem
                architecto, labore corporis laborum eius veniam quae dolore
                maiores nobis quibusdam libero vitae dolorum qui recusandae,
                doloribus illo id magni nulla ipsum voluptatem? Deleniti cum eum
                minima amet consectetur harum optio, iure illo molestiae velit,
                totam placeat minus sit cumque obcaecati itaque! Sunt, a
                blanditiis beatae ullam nemo iste unde itaque dicta quo libero
                possimus error atque, quis quidem.
              </p>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex items-center justify-center">
              <BrushWrap name={"TEACHERS"} className="text-center" />
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-5 justify-evenly">
            <Teacher/>
            <Teacher/>
            <Teacher/>
            <Teacher/>
            <Teacher/>
            <Teacher/>
            <Teacher/>
            <Teacher/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SixMileBranch;
