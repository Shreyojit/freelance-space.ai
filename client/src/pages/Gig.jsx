import React from "react";
import Slide from "../component/Slide";
import { Link, useParams } from "react-router-dom";


function Gig() {
  const { id } = useParams();
  return (
    <div className="flex justify-center py-8">
      <div className="w-[1400px] flex gap-12 px-4">
      <div className="w-2/3 flex flex-col gap-5">
  <span className="font-light text-sm text-gray-600 uppercase">Liverr &gt; Graphics &amp; Design &gt;</span>
  <h1 className="text-3xl font-semibold">I will create ai generated art for you</h1>

  <div className="flex items-center gap-3">
    <img
      className="w-8 h-8 rounded-full object-cover"
      src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
      alt="user"
    />
    <span className="font-medium">Anna Bell</span>
    <div className="flex gap-1 items-center">
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <span className="font-bold text-yellow-500 ml-1">5</span>
    </div>
  </div>

   {/* Slider Wrapper */}
<div className="my-5 overflow-hidden rounded-lg bg-[#F5F5F5]">
  <Slide slidesToShow={1} arrowsScroll={1}>
    <img
      className="w-full max-h-[500px] object-contain"
      src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
      alt="artwork"
    />
    <img
      className="w-full max-h-[500px] object-contain"
      src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
      alt="artwork"
    />
    <img
      className="w-full max-h-[500px] object-contain"
      src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
      alt="artwork"
    />
  </Slide>
</div>


  <h2 className="text-2xl font-semibold">About This Gig</h2>
  <p className="text-lg text-gray-800">
    I use an AI program to create images based on text prompts. This means I can help you to create a vision you have through a textual description of your scene without requiring any reference images. Some things I've found it often excels at are: Character portraits (E.g. a picture to go with your DnD character) Landscapes (E.g. wallpapers, illustrations to compliment a story) Logos (E.g. Esports team, business, profile picture) You can be as vague or as descriptive as you want. Being more vague will allow the AI to be more creative which can sometimes result in some amazing images. You can also be incredibly precise if you have a clear image of what you want in mind. All of the images I create are original and will be found nowhere else. If you have any questions you're more than welcome to send me a message.
  </p>

  {/* About the Seller Section */}
  <div className="mt-10">
    <h2 className="text-2xl font-semibold">About The Seller</h2>
    <div className="flex items-center gap-4">
      <img
        className="w-16 h-16 rounded-full object-cover"
        src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt="user"
      />
      <div>
        <span className="font-medium">Anna Bell</span>
        <div className="flex gap-1 items-center">
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <span className="font-bold text-yellow-500 ml-1">5</span>
    </div>
        <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Contact Me</button>
      </div>
    </div>

    


    <div class="border border-light-gray rounded-lg p-5 mt-5">
  <div class="flex justify-between flex-wrap">
    <div class="w-72 flex flex-col gap-2.5 mb-5">
      <span class="font-light">From</span>
      <span class="text-gray-600">USA</span>
    </div>
    <div class="w-72 flex flex-col gap-2.5 mb-5">
      <span class="font-light">Member since</span>
      <span class="text-gray-600">Aug 2022</span>
    </div>
    <div class="w-72 flex flex-col gap-2.5 mb-5">
      <span class="font-light">Avg. response time</span>
      <span class="text-gray-600">4 hours</span>
    </div>
    <div class="w-72 flex flex-col gap-2.5 mb-5">
      <span class="font-light">Last delivery</span>
      <span class="text-gray-600">1 day</span>
    </div>
    <div class="w-72 flex flex-col gap-2.5 mb-5">
      <span class="font-light">Languages</span>
      <span class="text-gray-600">English</span>
    </div>
  </div>
  <div class="border-t border-light-gray mb-5"/>
  <p>
    My name is Anna, I enjoy creating AI generated art in my spare
    time. I have a lot of experience using the AI program and that
    means I know what to prompt the AI with to get a great and
    incredibly detailed result.
  </p>
</div>


























  </div>

  <div className="mt-12">
  <h2>Reviews</h2>

  {/* First Review */}
  <div className="flex flex-col gap-5 my-5">
    <div className="flex items-center gap-2">
      <img
        className="h-12 w-12 rounded-full"
        src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <div className="flex flex-col ">
        <span>Garner David</span>
        <div className="flex items-center gap-1 text-gray-500">
          <img
            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
            alt=""
            className="w-5"
          />
          <span>United States</span>
        </div>
      </div>
    </div>
    <div className="flex gap-1 items-center">
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <span className="font-bold text-yellow-500 ml-1">5</span>
    </div>
    <p>
      I just want to say that art_with_ai was the first, and after this, the
      only artist Ill be using on Fiverr. Communication was amazing, each and
      every day he sent me images that I was free to request changes to. They
      listened, understood, and delivered above and beyond my expectations. I
      absolutely recommend this gig, and know already that Ill be using it again
      very very soon.
    </p>
    <div className="helpful flex items-center gap-2">
      <span>Helpful?</span>
      <img src="/img/like.png" alt="" className="w-3.5" />
      <span>Yes</span>
      <img src="/img/dislike.png" alt="" className="w-3.5" />
      <span>No</span>
    </div>
  </div>
  <hr className="border-0.5 border-lightgray my-12" />

  {/* Second Review */}
  <div className="flex flex-col gap-5 my-5">
    <div className="flex items-center gap-2">
      <img
        className="h-12 w-12 rounded-full"
        src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
      <div className="flex flex-col ">
        <span>Sidney Owen</span>
        <div className="flex items-center gap-1 text-gray-500">
          <img
            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
            alt=""
            className="w-5"
          />
          <span>Germany</span>
        </div>
      </div>
    </div>
    <div className="flex gap-1 items-center">
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <img src="/img/star.png" alt="" className="h-3.5 w-3.5" />
      <span className="font-bold text-yellow-500 ml-1">5</span>
    </div>
    <p>
      The work done by art_with_ai is outstanding! The level of detail in the AI-generated art is simply incredible. I’ve ordered multiple pieces, and every time they exceed my expectations. This artist is a true professional!
    </p>
    <div className="helpful flex items-center gap-2">
      <span>Helpful?</span>
      <img src="/img/like.png" alt="" className="w-3.5" />
      <span>Yes</span>
      <img src="/img/dislike.png" alt="" className="w-3.5" />
      <span>No</span>
    </div>
  </div>
  <hr className="border-0.5 border-lightgray my-12" />

  {/* Additional Reviews can be added in the same way */}
</div>

 


</div>

<div className="w-1/3 border border-lightgray p-5 rounded-md flex flex-col gap-5 h-max max-h-[500px] sticky top-[150px]">
  <div className="flex items-center justify-between">
    <h3 className="font-medium">1 AI generated image</h3>
    <h2 className="font-light">$ 59.99</h2>
  </div>
  <p className="text-gray-500 my-2">I will create a unique high quality AI generated image based on a description that you give me</p>
  <div className="details flex items-center justify-between text-sm">
    <div className="item flex items-center gap-2">
      <img className="w-5" src="/img/clock.png" alt="" />
      <span>2 Days Delivery</span>
    </div>
    <div className="item flex items-center gap-2">
      <img className="w-5" src="/img/recycle.png" alt="" />
      <span>3 Revisions</span>
    </div>
  </div>
  <div className="features">
    <div className="item flex items-center gap-2 text-gray-500 text-sm mb-1">
      <img className="w-3.5" src="/img/greencheck.png" alt="" />
      <span>Prompt writing</span>
    </div>
    <div className="item flex items-center gap-2 text-gray-500 text-sm mb-1">
      <img className="w-3.5" src="/img/greencheck.png" alt="" />
      <span>Artwork delivery</span>
    </div>
    <div className="item flex items-center gap-2 text-gray-500 text-sm mb-1">
      <img className="w-3.5" src="/img/greencheck.png" alt="" />
      <span>Image upscaling</span>
    </div>
    <div className="item flex items-center gap-2 text-gray-500 text-sm mb-1">
      <img className="w-3.5" src="/img/greencheck.png" alt="" />
      <span>Additional design</span>
    </div>
  </div>
  <Link to={`/pay/${id}`}>
  <button className="bg-[#1dbf73] p-2 text-white font-medium border-none text-lg cursor-pointer">Continue</button>
  </Link>
  
</div>


      </div>
    </div>
  );
}

export default Gig;
