import Head from 'next/head';
import { useState } from 'react';

export default function CarbonBiologicalPump() {
  const [showIntro, setShowIntro] = useState(false);
  const [showPhotosynthesis, setShowPhotosynthesis] = useState(false);
  const [showJourney, setShowJourney] = useState(false);
  const [showMicrobial, setShowMicrobial] = useState(false);
  const [showImpact, setShowImpact] = useState(false);

  return (
    <>
      <Head>
        <title>Carbon Biological Pump</title>
        <meta name="description" content="In-depth Exploration of the Carbon Biological Pump and Its Impact on Earth's Climate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="bg-cover min-h-screen" style={{ backgroundImage: "url('/ocean-deep.jpg')" }}>

        <header className="py-6 bg-opacity-80 bg-indigo-700 text-white">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold">Exploring the Carbon Biological Pump</h1>
            <p className="italic text-lg mt-2">By Joshua Xiong</p>
          </div>
        </header>

        <main className="container mx-auto p-6 bg-white rounded shadow-lg mt-6 mb-6">
          <section>
            <h2 className="text-3xl font-semibold">Introduction to the Carbon Biological Pump</h2>
            {showIntro ? (
              <>
            <p>The biological carbon pump is an essential yet often overlooked component of the global carbon cycle. It plays a pivotal role in regulating Earth's climate by managing atmospheric carbon dioxide levels through a series of complex biological and chemical processes...</p>
                <img src="/carbon-cycle.png" alt="Carbon Cycle" className="mt-4 w-full rounded" />
              </>
            ) : (
              <button onClick={() => setShowIntro(true)} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800 transition duration-300">Click Here to learn more!</button>
            )}
          </section>

          {showIntro && (
            <section className="mt-6">
              <h2 className="text-3xl font-semibold">The Role of Photosynthesis and Phytoplankton</h2>
              {showPhotosynthesis ? (
                <>
            <p>Phytoplankton, microscopic organisms in the ocean, are the starting point of this incredible process. Through photosynthesis, they absorb carbon dioxide and sunlight to produce oxygen and sugars, setting the stage for carbon sequestration...</p>
                  <img src="/phytoplankton.jpeg" alt="Phytoplankton" className="mt-4 w-full rounded" />
                </>
              ) : (
                <button onClick={() => setShowPhotosynthesis(true)} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800 transition duration-300">Discover More</button>
              )}
            </section>
          )}

          {showPhotosynthesis && (
            <section className="mt-6">
              <h2 className="text-3xl font-semibold">Journey of Organic Matter: From Surface to Depths</h2>
              {showJourney ? (
                <>
            <p>A significant portion of the organic matter produced by phytoplankton, along with dead organisms, forms what is known as 'marine snow.' This material slowly descends to the ocean floor, carrying trapped atmospheric carbon deep into the ocean...</p>
                  <img src="/marine-snow.jpeg" alt="Marine Snow" className="mt-4 w-full rounded" />
                </>
              ) : (
                <button onClick={() => setShowJourney(true)} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800 transition duration-300">Explore Further</button>
              )}
            </section>
          )}

          {showJourney && (
            <section className="mt-6">
              <h2 className="text-3xl font-semibold">Microbial Activity and Deep-Sea Carbon Storage</h2>
              {showMicrobial ? (
                <>
            <p>In the deep ocean, microbes break down this sunken organic matter. This process releases carbon dioxide back into the ocean, where it can be stored in deep-sea sediments for centuries, contributing to the long-term storage of carbon...</p>
                  <img src="/deep-sea-microbes.jpeg" alt="Deep Sea Microbes" className="mt-4 w-full rounded" />
                </>
              ) : (
                <button onClick={() => setShowMicrobial(true)} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800 transition duration-300">Learn More</button>
              )}
            </section>
          )}

          {showMicrobial && (
            <section className="mt-6">
              <h2 className="text-3xl font-semibold">Impact of Eutrophication and Climate Change</h2>
              {showImpact ? (
                <>
            <p>Eutrophication and climate change pose significant threats to the efficiency of the carbon biological pump. These factors can disrupt the delicate balance of ocean ecosystems, affecting the pump's ability to sequester carbon effectively...</p>
                  <img src="/eutrophication.jpeg" alt="Eutrophication" className="mt-4 w-full rounded" />
                </>
              ) : (
                <button onClick={() => setShowImpact(true)} className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-800 transition duration-300">Discover More</button>
              )}
            </section>
          )}
        </main>

        <footer className="py-4 text-center text-gray-600 bg-opacity-80 bg-indigo-700">
          &copy; 2023 . All rights reserved. By Joshua Xiong
        </footer>
      </div>
    </>
  );
}
