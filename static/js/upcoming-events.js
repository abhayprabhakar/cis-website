const eventsData = [
    {
      title: "Tech Summit 2025",
      date: "March 10, 2025",
      description: "Join us for an exciting tech summit featuring industry leaders.",
      image: "https://source.unsplash.com/400x250/?technology,conference"
    },
    {
      title: "AI Workshop",
      date: "April 5, 2025",
      description: "A hands-on workshop exploring AI and Machine Learning.",
      image: "https://source.unsplash.com/400x250/?ai,workshop"
    },
    {
      title: "Hackathon 2025",
      date: "May 15, 2025",
      description: "Compete in a 24-hour coding challenge and win prizes!",
      image: "https://edison365.com/?seraph_accel_gi=wp-content%2Fuploads%2F2022%2F03%2FHow-do-hackathons-work.png&n=iNf2OlXUkWEBkZdk37MnnA"
    }
  ];
  
  function createEventCard(event) {
    const card = document.createElement("div");
    card.className = "event-card";
  
    const image = document.createElement("img");
    image.className = "event-image";
    image.src = event.image;
    image.alt = event.title;
  
    const date = document.createElement("div");
    date.className = "event-date";
    date.textContent = event.date;
  
    const title = document.createElement("div");
    title.className = "event-title";
    title.textContent = event.title;
  
    const description = document.createElement("div");
    description.className = "event-description";
    description.textContent = event.description;
  
    card.appendChild(image);
    card.appendChild(date);
    card.appendChild(title);
    card.appendChild(description);
  
    return card;
  }
  
  const eventsContainer = document.getElementById("events-container");
  eventsData.forEach((event) => {
    const card = createEventCard(event);
    eventsContainer.appendChild(card);
  });
  