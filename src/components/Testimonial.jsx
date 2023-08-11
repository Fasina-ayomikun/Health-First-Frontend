import React from "react";
import img from "../images/image1.jpg";
function Testimonial() {
  return (
    <section className='h-screen w-full   bg-background2 bg-cover bg-no-repeat object-cover '>
      <div className='w-full h-full bg-black opacity-70 flex items-center justify-center'>
        <div className='w-3/5 '>
          <p className='text-center text-xl lg:tex-3xl font-regular line-height tracking-wider text-white '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            corrupti nobis, mollitia, repellat, amet voluptates exercitationem
            facilis veritatis alias voluptatem odio sunt hic architecto aut
            itaque eaque deserunt numquam dolore unde! Quidem, animi ullam
            repudiandae aliquid repellendus in dicta id blanditiis corrupti,
            odit amet quibusdam nobis ipsum fugiat ab minima! Nostrum beatae
            iusto itaque rem nobis voluptas recusandae voluptatem saepe aut unde
            labore iste ad fugiat tenetur, quae, distinctio qui velit voluptates
            nam nobis!
          </p>
          <img
            src={img}
            alt=''
            className='w-20 m4-10  rounded-full object-cover aspect-square mx-auto'
          />
          <p className=' mt-3  font-medium text-grey text-center text-xl capitalize '>
            Ada James
          </p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
