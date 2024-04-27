import { useState } from "react";
import { _recentCard } from "../components";
const Recent = () => {
    
    const [isActive, setIsActive] = useState(false);
    return (
    <div className=" xs:max-lm:hidden lm:max-lg:w-[340px] lg:w-[316px] h-full pb-20 fixed right-0 overflow-y-hidden hover:overflow-y-scroll bg-reddit-2">
        <div className=" flex flex-col justify-center items-start w-full mt-7">
            <div className="flex justify-between items-center rounded-xl w-full text-sm pt-3 pl-3 pr-3 pb-3 bg-black">
                <button  onClick={event => setIsActive(!isActive)} className="hover:bg-transparent text-gray-300">RECENT POSTS</button>
                <button className="hover:bg-transparent"  onClick={event => setIsActive(false)}>Clear</button>
            </div>
            { isActive &&
                <div>
                <_recentCard />
                </div>
            }
        </div>
    </div>  
    )
}

export default Recent;