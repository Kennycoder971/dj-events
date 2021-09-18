import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";
import EventItem from "@/components/EventItem";
import Link from "next/link";

export default function Home({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {!events.length && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length && (
        <Link href="/events">
          <a className="btn-secondary">See all events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events: events.events,
      revalidate: 1,
    },
  };
}
