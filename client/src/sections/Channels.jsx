import { useState } from "react";
import { home, popular, all, up, down, about, advertise, help, blog, career, press, communities, best, topics, content, privacy, agree } from "../assets/icons"

const Channels = () => {

    const [isActive, setIsActive] = useState(false);
    const [select, setSelect ] = useState(down);
    return (
        <section className="border border-r-gray-400 flex flex-col xs:max-lg:hidden lg:w-[272px] h-full pl-5 pr-5 pt-3 pb-20 gap-2 text-sm fixed z-10 left-0 overflow-y-hidden hover:overflow-y-scroll bg-reddit-2">
            <section>
                <div className="channel flex gap-5 pl-4 pt-2 pb-2 rounded-lg">
                    <img src={home} />
                    <a href="./">Home</a>
                </div>
                <div className="channel flex gap-5 pl-4 pt-2 pb-2 rounded-lg">
                    <img src={popular} />
                    <a href="./">Popular</a>
                </div>
                <div className="channel flex gap-5 pl-4 pt-2 pb-2 rounded-lg">
                    <img src={all} />
                    <a href="./">All</a>
                </div>                
            </section>
            <hr></hr>
            <section>
                <div className="dropdown channel flex gap-5 pl-4 pt-2 pb-2 pr-4 justify-between rounded-lg">
                    <a href="./" className="text-slate-500">RESOURCES</a>
                    <button className="dropdown-btn hover:bg-transparent" onClick={event => {setIsActive(!isActive); select===down? setSelect(up):setSelect(down)}}><img src={select} /></button>
                </div>
                {isActive && (
                    <div className="dropdown-content">
                        <div className="dropdown-item channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg">
                            <img src={about} width={23} height={23}/>
                            <a href="./">About Reddit</a>
                        </div>
                        <div className="dropdown-item channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg">
                            <img src={advertise} />
                            <a href="./">Advertise</a>
                        </div>
                        <div className="dropdown-item channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg">
                            <img src={help} />
                            <a href="./">Help</a>
                        </div>  
                        <div className="dropdown-item channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg">
                            <img src={blog} />
                            <a href="./">Blog</a>
                        </div>  
                        <div className="dropdown-item channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg">
                            <img src={career} />
                            <a href="./">Careers</a>
                        </div>  
                        <div className="dropdown-item channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg">
                            <img src={press} />
                            <a href="./">Press</a>
                        </div> 
                    </div>
                )}
            </section>
            <hr></hr>
            <section>
                <div className="channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg">
                    <img src={communities} />
                    <a href="./">Communities</a>
                </div>  
                <div className="channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg">
                    <img src={best} />
                    <a href="./">Best of Reddit</a>
                </div>  
                <div className="channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg">
                    <img src={topics} />
                    <a href="./">Topics</a>
                </div>  
            </section>
            <hr></hr>
            <section>
                <div className="channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg ">
                    <img src={content} />
                    <a href="./">Content Policy</a>
                </div>  
                <div className="channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg">
                    <img src={privacy} />
                    <a href="./">Privacy Policy</a>
                </div>  
                <div className="channel flex gap-5 pl-6 pt-2 pb-2 rounded-lg">
                    <img src={agree} />
                    <a href="./">User Agreement</a>
                </div>  
            </section>
            <div className="text-xs text-slate-400 grow flex flex-col justify-end py-3">
                <a href="https://redditinc.com">Reddit, Inc. © 2024. All rights reserved.</a>
            </div>
        </section>
    );
}

export default Channels;