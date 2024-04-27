import React from 'react';

const _recentCard = () => {
	return (
        <div className='flex justify-center item-center w-full mb-3 bg-black'>
            <div className=' flex flex-col justify-start w-2/3 rounded-l-xl'>
                <div className=' flex gap-2 text-xs-sm items-center p-1 pl-2 pr-3'>
                    <div>
                        <img src="https://a.thumbs.redditmedia.com/wk4DdnifrZxOjoVTiBzk1jsK8RqACLAQi6TO4JMxCx0.png" className='w-6 rounded-full' alt="r/Whatcouldgowrong icon" />
                    </div>
                    <a className='hover:underline'>r/Whatcouldgowrong</a>   
                </div>
                <div className=' line-clamp-2 text-sm pl-2 pr-3 pt-1 pb-1 hover:underline text-gray-300'>
                    <p>
                        His tweet from 2017 caught my eye, someone made a comment in backwards text in 2021 saying Satoshin Nakamoto almost 3 years to the day of my discovery 
                        It looks possible that Satoshi Nakamoto is a combination of at least 3 people that were IBM researchers involved in early blockchain research work that predates bitcoin. 
                        OR it can be another person or group that admired their work and took a piece of each of their names.
                    </p>
                </div>
                <div className=' text-xs-sm flex gap-2 pl-2 pr-3 pt-2 pb-2'>
                    <p>1.1k upvotes</p>
                    <p>.</p>
                    <p>3 comments</p>
                </div>
		    </div>
            <div className='flex justify-center items-center w-1/3  rounded-r-xl'>
                <div className=' w-3/4 h-3/4'>
                    <img src="https://b.thumbs.redditmedia.com/T1Ba1htrxWUrsW4AyOw_6LwNewddIoNa_WlgJDAFuts.jpg" className='w-full h-full self-center rounded-lg' alt="r/redesign - The main thread of reddit takes up a tiny portion of the screen horizontally. This causes long titles to bunch up when they don't have to. Could it not be responsive to screen size? Example shown at 2560x1440." />
                </div>
            </div>
        </div>

	);
};

export default _recentCard;