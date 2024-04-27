import React, { useState } from 'react'
import { Nav } from '../components'
import { checkbox, up, info, down, postlogo } from "../assets/icons"
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const navigate = useNavigate();
    const selected = document.querySelector(".selected img");

    const [community, setCommunity] = useState("Choose a community");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [isActive, setIsActive] = useState(false);
    const [select, setSelected] = useState(down);

    async function onSubmitForm(event) {
        event.preventDefault();
        try {
            const body = { title, description, community }
            const response = await fetch("http://localhost:3000/posts",{
                method: "POST",
                headers: { 
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
    <div className='relative bg-reddit-2 flex flex-col'>
        <Nav />
        <div className=' flex w-full h-full justify-center items-start mt-20'>
            <div className=' flex justify-center items-start w-[1100px] xs:max-lg:px-12'>
                <form className=' flex flex-col w-[734px] xs:max-lm:w-full'  onSubmit={onSubmitForm}>
                    <div className=' flex justify-between items-center p-2'>
                        <p className='font-semibold text-lg'>Create a post</p>
                        <p className='font-medium text-sm'>DRAFTS</p>
                    </div>
                    <hr></hr>
                    <div className='bg-reddit-hover rounded-xl my-5'>
                        <div className='dropdown  relative flex justify-start items-center w-full mt-3 mb-2'>
                            {/* <select className='bg-reddit-2 font-sm text-sm-xs py-2 px-4 rounded-md border border-white ' value={community} onChange={event => setCommunity(event.target.value)}>
                                <option value="" disabled hidden>Choose a community</option>
                                <option value="r/whatcouldgowrong">r/whatcouldgowrong</option>
                                <option value="r/confession">r/confession</option>
                            </select> */}
                            <div className='flex flex-col w-2/6 '>
                                <div className='flex gap-6 justify-between item-center relative pl-6 pr-2 py-3 rounded-lg hover:bg-reddit-hover border border-gray-300'>
                                    <button onClick={event => setIsActive(!isActive)} type='button' value={community}>{community}</button>
                                    <button className='selected' onClick={event => {setIsActive(!isActive); select===up?setSelected(down):setSelected(up)}} type='button'><img src={select}/></button>
                                </div>
                                {isActive &&
                                    <div className='flex flex-col  px-3 py-2 bg-reddit-2 rounded-xl absolute top-14 w-60'>
                                        <button className='flex flex-col hover:bg-reddit-hover py-2 px-2 rounded-lg' value="r/changemyview" onClick={event => {setCommunity(event.target.value); setIsActive(!isActive); setSelected(down)}} type='button'>
                                            r/changemyview
                                            <p className='text-xs-sm font-light text-gray-400'>301,456,234 members</p>
                                        </button>
                                        <button className='flex flex-col hover:bg-reddit-hover py-2 px-2 rounded-lg' value="r/confession" onClick={event => {setCommunity(event.target.value); setIsActive(!isActive); setSelected(down)}} type='button'>
                                            r/confession
                                            <p className='text-xs-sm font-light text-gray-400'>103,556,244 members</p>
                                        </button>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className=' flex flex-col w-full justify-center items-center'>
                            <div className=' flex w-full items-center mb-3'>
                                <div className=' flex justify-center items-center w-full h-full py-3 font-medium'>
                                    <p>Post</p>
                                </div>
                                <div className=' flex justify-center items-center w-full h-full py-3 font-medium'>
                                    <p>Image & Video</p>
                                </div>
                                <div className=' flex justify-center items-center w-full h-full py-3 font-medium'>
                                    <p>Link</p>
                                </div>
                                <div className=' flex justify-center items-center w-full h-full py-3 font-medium'>
                                    Poll
                                </div>
                            </div>
                            <div className=' flex flex-col item-start justify-center w-full px-3'>
                                <div className='border border-gray-300 flex justify-between rounded-sm text-gray-500 mb-2 min-h-10'>
                                    <textarea name='title' type="text" value={title} onChange={event => setTitle(event.target.value)} placeholder='Title' className='bg-transparent w-full min-h-10 py-2 px-4'/>
                                </div>
                                <div className='border border-gray-300 flex justify-between mb-3 min-h-36'>   
                                    <textarea name='text' type="text" value={description} onChange={event => setDescription(event.target.value)} placeholder='Text (optional)' className='w-full bg-transparent min-h-36 py-2 px-4'/>
                                </div>
                                <div className=' flex justify-end p-3 gap-2 font-medium'>
                                    <button className=' px-4 py-1 rounded-full' type='submit' name='save' onClick={() => navigate(-1)}>
                                        Save Draft
                                    </button>
                                    <button className=' px-4 py-1 rounded-full bg-white text-black' type='submit' name='post' >
                                        Post
                                    </button>
                                </div>
                                <div className=' flex flex-col w-full gap-2 text-sm font-medium py-4'>
                                    <div className='flex gap-2 items-center'>
                                        <img src={checkbox} />
                                        <p>Send me post reply notifications</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <a className='text-link-color'>Connect accounts to share your post</a>
                                        <img src={info} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className='flex flex-col w-[326px] xs:max-lm:hidden'>
                    <div className='bg-reddit-2 rounded-md font-semibold font-sans flex flex-col justify-start items-start mt-7 mb-3 mx-5 p-3'>
                        <div className='flex gap-2 items-center py-1'>
                            <img src={postlogo}/>
                            <p>Posting to Reddit</p>
                        </div>
                        <hr></hr>
                        <div className='py-3 text-sm w-full'>
                            <p>1. Remember the human</p>
                        </div>
                        <hr></hr>
                        <div className='py-3 text-sm w-full'>
                            <p>2. Behave like you would in real life</p>
                        </div>
                        <hr></hr>
                        <div className='py-3 text-sm w-full'>
                            <p>3. Look for the original source of content</p>
                        </div>
                        <hr></hr>
                        <div className='py-3 text-sm w-full'>
                            <p>4. Search for duplicates before posting</p>
                        </div>
                        <hr></hr>
                        <div className='py-3 text-sm w-full'>
                            <p>5. Read the community’s rules</p>
                        </div>
                        <hr></hr>
                    </div>
                    <div className='flex text-xs-sm font-medium mx-5 items-start  pr-10'>
                        <p>Please be mindful of reddit's <span className='text-link-color'>content policy</span> and practice good <span className='text-link-color'>reddiquette</span>.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Create