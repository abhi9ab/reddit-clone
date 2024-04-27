import React, { useEffect, useState } from 'react'
import { down, sort} from "../assets/icons";
import { Card } from "../components";
import Recent from "./Recent";

const Posts = () => {
    const [ posts, setPosts ] = useState([]);
    const getPost = async () => {
        try {
            const response = await fetch("http://localhost:3000/");
            const jsonData = await response.json();
            setPosts(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getPost();
    },[]);


    return  (
        <section className=" flex w-full h-full justify-center xs:max-2xl:absolute xs:pl-0 lg:pl-[272px] xs:pr-0 lm:max-lg:pr-[340px] lg:pr-[316px] 2xl:w-[100vw] bg-reddit-2">
            <div className="flex flex-col items-start 2xl:w-[848px] ">
                <div className="flex justify-start items-center p-2 w-full">
                    <button className="flex pr-1 pl-1 rounded-full">
                        <div className="text-sm pt-1.5 pb-1.5 pl-2 pr-2">
                            Best
                        </div>
                        <div className="pt-2 pr-0.5 "><img src={down} width={15} /></div>
                    </button>

                    <button className="flex pr-1 pl-1 rounded-full">
                        <div className="pt-2 pb-2 pl-3 pr-2">
                            <img src={sort} />
                        </div>
                        <div className="pt-2 pr-1.5 "><img src={down} width={15} /></div>
                    </button>
                </div>
                {posts.map((post, index) => (
                    <div className='w-full pr-3' key={index}>
                        <Card key={index} id={post.id} title={post.title} description={post.description} community={post.community}/>
                        <hr></hr>
                    </div>
                ))}
            </div>   
            <div>
                <Recent />
            </div>
        </section>
    )
}

export default Posts;