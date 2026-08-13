export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export type GallerySection = {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
};

export const gallerySections: GallerySection[] = [
  {
    id: "oktoberfest",
    title: "Oktoberfest",
    description:
      "Crowd control and gate security across the festival's biggest days — from beer tent watch to wristband checks.",
    images: [
      {
        src: "/images/gallery-okt-01.webp",
        alt: "M&G Security watching over the Oktoberfest beer tent crowd",
        caption: "Oktoberfest beer tent under the lights",
      },
      {
        src: "/images/gallery-okt-02.webp",
        alt: "M&G Security patrolling the Oktoberfest festival grounds",
        caption: "Festival grounds during Oktoberfest",
      },
      {
        src: "/images/gallery-okt-03.webp",
        alt: "M&G Security staff at the Oktoberfest tent entrance",
        caption: "Evening crowd inside the Oktoberfest tent",
      },
      {
        src: "/images/gallery-okt-04.webp",
        alt: "M&G Security guard checking wristbands at Oktoberfest",
        caption: "Gate check at the Oktoberfest entrance",
      },
    ],
  },
  {
    id: "arena-sporting",
    title: "Arena & Sporting Events",
    description:
      "Bag checks, concourse direction, and crowd management at Berks County's largest venues.",
    images: [
      {
        src: "/images/gallery-arena-01.webp",
        alt: "M&G Security stationed along the arena concourse",
        caption: "Packed arena during an evening game",
      },
      {
        src: "/images/gallery-arena-02.webp",
        alt: "M&G Security guard directing spectators at the arena",
        caption: "Directing foot traffic on the arena concourse",
      },
      {
        src: "/images/gallery-arena-03.webp",
        alt: "M&G Security screening guests at a sporting event",
        caption: "Bag check at a sporting event entrance",
      },
      {
        src: "/images/gallery-arena-04.webp",
        alt: "M&G Security managing the arena entry line",
        caption: "Crowd arriving at the arena at night",
      },
    ],
  },
  {
    id: "school-community",
    title: "School & Community Events",
    description:
      "A calm, professional presence at gymnasiums, fields, and campus events across the county.",
    images: [
      {
        src: "/images/gallery-school-01.webp",
        alt: "M&G Security at a community event in a school gym",
        caption: "Community event in a school gymnasium",
      },
      {
        src: "/images/gallery-school-02.webp",
        alt: "M&G Security monitoring a school event entrance",
        caption: "School campus event entrance",
      },
      {
        src: "/images/gallery-school-03.webp",
        alt: "M&G Security patrolling a school community festival",
        caption: "Outdoor community festival on a school field",
      },
      {
        src: "/images/gallery-school-04.webp",
        alt: "M&G Security walking a school hallway during an event",
        caption: "Evening event in a school hallway",
      },
    ],
  },
  {
    id: "our-team",
    title: "Our Team",
    description:
      "Active and retired law enforcement professionals who carry the M&G standard at every post.",
    images: [
      {
        src: "/images/gallery-team-01.webp",
        alt: "M&G Security team standing at attention",
        caption: "Guards standing at attention",
      },
      {
        src: "/images/gallery-team-02.webp",
        alt: "M&G Security team briefing before a shift",
        caption: "Morning team briefing",
      },
      {
        src: "/images/gallery-team-03.webp",
        alt: "M&G Security professional on duty",
        caption: "A guard on duty",
      },
      {
        src: "/images/gallery-team-04.webp",
        alt: "M&G Security officers walking a patrol together",
        caption: "Two guards on patrol together",
      },
    ],
  },
  {
    id: "operations-patrol",
    title: "Operations & Patrol",
    description:
      "Night patrols, site checks, and radio coordination that keep properties secure around the clock.",
    images: [
      {
        src: "/images/gallery-ops-01.webp",
        alt: "M&G Security patrol vehicle at a commercial site",
        caption: "Patrol vehicle at dusk",
      },
      {
        src: "/images/gallery-ops-02.webp",
        alt: "M&G Security guard on a night patrol",
        caption: "Night patrol with flashlight",
      },
      {
        src: "/images/gallery-ops-03.webp",
        alt: "M&G Security inspecting a construction site perimeter",
        caption: "Sunrise site perimeter check",
      },
      {
        src: "/images/gallery-ops-04.webp",
        alt: "M&G Security guard coordinating by radio",
        caption: "Radio check at a site entrance",
      },
    ],
  },
  {
    id: "festivals-events",
    title: "Festivals & Major Events",
    description:
      "Front-barrier coverage, traffic control, and perimeter security for large public gatherings.",
    images: [
      {
        src: "/images/gallery-fest-01.webp",
        alt: "M&G Security at the festival main stage barrier",
        caption: "Main stage crowd at a festival",
      },
      {
        src: "/images/gallery-fest-02.webp",
        alt: "M&G Security directing traffic at a street festival",
        caption: "Street festival traffic control",
      },
      {
        src: "/images/gallery-fest-03.webp",
        alt: "M&G Security on patrol at the county fair",
        caption: "County fairgrounds patrol",
      },
      {
        src: "/images/gallery-fest-04.webp",
        alt: "M&G Security checking tickets at a major event",
        caption: "Major event entrance checkpoint",
      },
    ],
  },
];