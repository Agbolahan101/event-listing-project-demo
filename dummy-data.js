const DUMMY_EVENTS = [
  {
    id: "e1",
    title: "ALIBABA LIVE IN LAGOS",
    description:
      "The Alibaba January 1st concert, organized by the renowned comedian Alibaba, will be held for the seventh year in a row on January 1st, 2022, at the Eko Hotels Convention Center in Victoria Island, Lagos",
    location: "Eko Convention Center",
    date: "2022-01-01",
    image: "images/alibaba-consert.jpg",
    isFeatured: true,
  },
  {
    id: "e2",
    title: "AY LIVE LONDON",
    description:
      "Nollypeak and Corporate World Entertainment present their annual popular comedy show AY Live in London with popular comedian AY taking over London with his Army of comdeians which includes Kenny Blaq, Akpororo, Gordons, Lasisi, Akapella & Many More.",
    location: "Light House 262-274 CAMBERWELL ROAD, SES ODP LONDON",
    date: "2022-10-30",
    image: "images/ay-live-london.webp",
    isFeatured: true,
  },
  {
    id: "e3",
    title: "COOL FM PRAISE JAM ",
    description: "",
    location: "Eko Convention Center",
    date: "2022-04-18",
    image: "images/Cool-Fm-praise-jam.jpg",
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
