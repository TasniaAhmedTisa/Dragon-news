import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} className="">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Spain win 2-1 against Germany in extra time to reach Euro 2024 semifinals...</Marquee>
            

        </div>
    );
};

export default LatestNews;