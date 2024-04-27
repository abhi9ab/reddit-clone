import { useState } from "react";
import { dropdown, upvote, downvote, messagebox, share, save, hide, report } from "../assets/icons";
import ReactTimeAgo from "react-time-ago";

const Card = (props) => {
    const time = Date.now()
    const [isActive, setIsActive] = useState(false);
    const [ like, setLike ] = useState(0);
    return (
    <div className=' bg-reddit-2 flex flex-col relative w-full p-1 pr-3 pl-3 hover:bg-reddit-bg rounded-lg ml-2 mr-2 mb-1 mt-1 '>
        <div className=' flex gap-2 text-xs-sm items-center p-1 pl-2 pr-3'>
            <div>
                <img src="https://a.thumbs.redditmedia.com/wk4DdnifrZxOjoVTiBzk1jsK8RqACLAQi6TO4JMxCx0.png" className='w-7 rounded-full' alt="r/Whatcouldgowrong icon" />
            </div>
            <a className='font-bold'>{props.community}</a>
            <div className="text-gray-300">
                <ReactTimeAgo date={time} locale="en-US"/>
            </div>
            <div className='dropdown flex flex-col rounded-full px-1 absolute right-3 top-2 text-base'>
                <button className='dropdown-btn  rounded-full p-1' onClick={event => setIsActive(!isActive)}><img src={dropdown} width={20} /></button>
                {isActive && 
                    <div className='menu py-2'>
                        <div className='flex gap-3 mx-5'>
                            <img src={save}/>
                            <p>Save</p>
                        </div>
                        <div className='flex gap-3 mx-5'>
                            <img src={hide}/>
                            <p>Hide</p>
                        </div>
                        <div className='flex gap-3 mx-5'>
                            <img src={report}/>
                            <p>Report</p>
                        </div>
                    </div>
                }

            </div>
        </div>
        <div className='text-lm font-bold font-montserrat  p-1 pl-2 pr-3'>
            <p>{props.title}</p>
        </div>
        
        <div className='text-sm  p-1 pl-3 pr-3 line-clamp-6 text-gray-300'>
            <p>{props.description}</p>
        </div>
        <div className='flex justify-start gap-3 text-sm items-center p-1 pl-2 pr-3'>
            <div className='flex justify-between  gap-2 p-1 pl-2 pr-2 rounded-full bg-reddit-hover'>
                <button onClick={() => setLike(like+1)}><img src={upvote}/></button>
                <p>{like}</p>
                <button onClick={() => setLike(like-1)}><img src={downvote} /></button>
            </div>
            <div className='flex justify-between  gap-2 p-1 pl-2 pr-2 rounded-full bg-reddit-hover hover:cursor-pointer'>
                <button><img src={messagebox}/></button>
                <p>0</p>
            </div>
            <div className='flex justify-between  gap-2 p-1 pl-2 pr-2 rounded-full bg-reddit-hover hover:cursor-pointer'>
                <button><img src={share} /></button>
                <p>Share</p>
            </div>
        </div>
    </div>
    )
}

export default Card