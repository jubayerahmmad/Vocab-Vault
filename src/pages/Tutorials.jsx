import React from "react";
import { Helmet } from "react-helmet-async";
import CommonBanner from "../components/CommonBanner";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Tutorials = () => {
  return (
    <div>
      <Helmet>
        <title>Tutorials | Vocab Vault</title>
      </Helmet>
      <CommonBanner></CommonBanner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        {/* embedded video */}
        <div className="border rounded-xl p-4">
          <iframe
            height="350"
            src="https://www.youtube.com/embed/kJQjXAVEWt0?si=PrcSfF4beFsGtWqA"
            title="YouTube video player"
            className="w-full rounded-xl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* embedded video */}
        <div className="border rounded-xl p-4">
          <iframe
            height="350"
            src="https://www.youtube.com/embed/FRV9fvWjMHA?si=tauCRCKTo-NDGfTO"
            title="YouTube video player"
            className="w-full rounded-xl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* embedded video */}
        <div className="border rounded-xl p-4">
          <iframe
            height="350"
            src="https://www.youtube.com/embed/lbDxhlPSMxs?si=2pKiQsV6Gw6ewFJo"
            title="YouTube video player"
            className="w-full rounded-xl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* embedded video */}
        <div className="border rounded-xl p-4">
          <iframe
            height="350"
            src="https://www.youtube.com/embed/K6NSvBvQYBY?si=lGHIKrregG-IHQiu"
            title="YouTube video player"
            className="w-full rounded-xl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* embedded video */}
        <div className="border rounded-xl p-4">
          <iframe
            height="350"
            src="https://www.youtube.com/embed/Xdvd9h8mgJQ?si=8gVKum5kMpP9nu_u"
            title="YouTube video player"
            className="w-full rounded-xl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* embedded video */}
        <div className="border rounded-xl p-4">
          <iframe
            height="350"
            src="https://www.youtube.com/embed/fVNMU4xj9Nk?si=7pWtPmYuBMFqjCPU"
            title="YouTube video player"
            className="w-full rounded-xl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* embedded video */}
        <div className="border rounded-xl p-4">
          <iframe
            height="350"
            src="https://www.youtube.com/embed/AqfQQZVmTUw?si=Fhe0xrhR0iEI-BpL"
            title="YouTube video player"
            className="w-full rounded-xl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* embedded video */}
        <div className="border rounded-xl p-4">
          <iframe
            height="350"
            src="https://www.youtube.com/embed/bmpPhSNt1J4?si=7gfb3FS1PrcZh2SD"
            title="YouTube video player"
            className="w-full rounded-xl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {/* embedded video */}
        <div className="border rounded-xl p-4">
          <iframe
            height="350"
            src="https://www.youtube.com/embed/MGOvu-0gGXk?si=5LiGePCxoSDaJutP"
            title="YouTube video player"
            className="w-full rounded-xl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="mb-4 flex justify-between">
        <Link to="/letsLearn">
          <button className="btn bg-cyan-500 text-white">
            Learn Vocabularies
          </button>
        </Link>
        <a
          href="https://www.youtube.com/playlist?list=PLv63dFTP4Sjq6knRsZQI-bTnRE38cZZoy"
          className="hover:underline underline-offset-4 decoration-cyan-900 font-bold flex items-center gap-2"
          target="_blank"
        >
          Watch Full Playlist on YouTube{" "}
          <span className="btn btn-xs text-cyan-500 btn-circle">
            <FaArrowRight></FaArrowRight>
          </span>
        </a>
      </div>
      {/* <div className="mb-4"></div> */}
    </div>
  );
};

export default Tutorials;
