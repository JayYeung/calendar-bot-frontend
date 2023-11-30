import Head from 'next/head';
import { useState } from 'react';

export default function CalendarBot() {
  const [eventQuery, setEventQuery] = useState('');

  async function fetchFromBackend(query: string): Promise<string> {
    const backendUrl = `https://calendar-bot-backend.vercel.app/api/convert?text=${encodeURIComponent(query)}`;
    console.log("Backend URL:", backendUrl);
    const response = await fetch(backendUrl,{headers:{"Access-Control-Allow-Origin": "*"}});
    const data = await response.json();
    return data["link"];
  }

  const createEvent = async () => {
    console.log("Query:", eventQuery);
    const calendarLink = await fetchFromBackend(eventQuery);
    console.log("Google Calendar Link:", calendarLink);
    window.open(calendarLink, '_blank');
  };

  return (
    <>
      <Head>
        <title>Calendar Bot</title>
        <meta name="description" content="Automatically convert your events to google calendar links" />
      </Head>
      <div className="m-6 bg-gray-200 p-6 rounded-lg">
        <h1 className="mb-5 text-4xl text-gray-800">
          <span className="text-blue-600">Calendar</span>
          <span className="text-yellow-500">Bot</span>
        </h1>
        <div className="mb-5 space-y-4">
          <input
            type="text"
            id="eventQuery"
            placeholder="Enter event details"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            value={eventQuery}
            onChange={(e) => setEventQuery(e.target.value)}
          />
        </div>
        <button
          id="createEvent"
          className="w-full p-3 bg-red-600 text-white rounded hover:bg-green-700 transition-colors duration-300"
          onClick={createEvent}
        >
          Create Event
        </button>
      </div>
    </>
  );
}
