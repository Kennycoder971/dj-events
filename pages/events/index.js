import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";

export default function Events({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1> Events</h1>
      {events.length && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events: events.events.slice(0, 3),
      revalidate: 1,
    },
  };
}
