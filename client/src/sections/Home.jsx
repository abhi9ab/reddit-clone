import React from 'react'
import {
	Channels,
	Posts,
	Hero
} from "./";

const Home = () => {
  return (
    <>
    <section>
			<Hero />
		</section>
		<section className="grid grid-cols-1 md:grid-cols-[272px_1fr]">
            <Channels />
            <Posts />
        </section>
    </>
  )
}

export default Home