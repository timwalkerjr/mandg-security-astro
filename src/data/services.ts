// Service detail content + per-route SEO, one entry per service page.
// Drives /security-services/[slug] via getStaticPaths. Paragraphs and
// features are ported verbatim from the SPA's page components.

export type ServiceDetailData = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  paragraphs: string[];
  features: string[];
  metaTitle: string;
  metaDescription: string;
};

export const serviceDetails: ServiceDetailData[] = [
  {
    slug: "apartment-complex",
    icon: "ri-building-line",
    title: "Apartment complex security",
    tagline: "We'll keep your apartment complex safe",
    paragraphs: [
      "Let M&G Security help to improve the quality of life in your apartment complex. Our highly trained professionals walk the beat and get to know the residents, building trust and familiarity that turns a security presence into a genuine community asset.",
      "A visible, approachable guard does more than deter crime — they spot maintenance issues early, assist residents with concerns, and create an environment where people feel safe coming home at any hour. Our team understands the balance between vigilance and hospitality that makes apartment living secure and welcoming.",
      "Whether your property needs nightly patrols, weekend coverage, or a dedicated on-site presence, M&G Security tailors its services to your community's schedule and budget. We provide detailed activity logs and maintain open communication with property management so you always know what's happening on your grounds.",
    ],
    features: [
      "24/7 or scheduled shift coverage",
      "Resident concern and complaint handling",
      "Parking lot and garage patrols",
      "Visitor and guest verification",
      "Emergency response coordination",
      "Lease enforcement support",
      "Noise and disturbance mitigation",
      "Detailed incident reporting",
    ],
    metaTitle: "Apartment Complex Security | M&G Security — Berks County, PA",
    metaDescription:
      "Professional apartment complex security in Berks County, PA. M&G Security provides 24/7 or scheduled guard coverage, resident concern handling, and patrols by law enforcement-trained officers.",
  },
  {
    slug: "auctions",
    icon: "ri-auction-line",
    title: "Auction security",
    tagline: "We'll keep your auction safe",
    paragraphs: [
      "M&G Security has provided on site security for major sports auctions for decades. We have stood watch over millions of dollars worth of merchandise of great sports legends such as Babe Ruth, Jackie Robinson, Roy Campanella, Mike Schmidt and many others.",
      "Our professional staff has had the honor of standing guard for Donovan McNabb, Frank Robinson, Jim Rice and Hall of Fame Baseball Great Willie Mays.",
      "Whether your auction features high-value memorabilia, estate collections, or commercial assets, M&G Security brings the same level of professionalism and vigilance. Our law enforcement-trained team manages crowd flow, secures merchandise, and protects both equipment and cash so your sale stays focused on the bids.",
    ],
    features: [
      "Traffic and crowd flow management",
      "Asset and merchandise protection",
      "Parking lot and load-out security",
      "Bidder dispute de-escalation",
      "Loading and unloading area oversight",
      "Cash and payment point security",
      "Perimeter and access control",
      "Pre-event site assessment",
    ],
    metaTitle: "Auction Security | M&G Security — Berks County, PA",
    metaDescription:
      "Auction security from M&G Security. Decades of experience guarding high-value memorabilia and merchandise with crowd control, asset protection, and cash-point security in Berks County, PA.",
  },
  {
    slug: "concert-security",
    icon: "ri-mic-line",
    title: "Concert security",
    tagline: "We'll keep your concert safe",
    paragraphs: [
      "In most every instance when a large public gathering takes place, like a concert with thousands of guests, there are security issues. M&G Security provides professional venue security that keeps performers, staff, and audiences safe so the show goes on without interruption.",
      "Concert security demands a unique combination of vigilance and customer service. Our guards are trained to spot intoxicated or disruptive individuals, enforce venue policies, and handle medical emergencies while maintaining a professional demeanor that respects concertgoers' experience.",
      "We have provided security for concerts and live performances at venues throughout southeastern Pennsylvania, including the Santander Arena in Reading. Whether it's a local band at a small venue or a major touring act at a large arena, M&G Security brings the same level of professionalism and preparedness to every show.",
    ],
    features: [
      "Entry point screening and ticket verification",
      "Stage and performer area protection",
      "Crowd barrier and pit monitoring",
      "Alcohol and substance enforcement",
      "Emergency evacuation coordination",
      "VIP, backstage, and green room security",
      "Parking lot and tailgate oversight",
      "Lost and found assistance",
    ],
    metaTitle: "Concert Security | M&G Security — Berks County, PA",
    metaDescription:
      "Concert and live-performance venue security from M&G Security. Entry screening, crowd barrier monitoring, and evacuation coordination at venues across southeastern PA, including Santander Arena.",
  },
  {
    slug: "construction-sites",
    icon: "ri-hammer-line",
    title: "Construction site security",
    tagline: "We'll keep your construction site safe",
    paragraphs: [
      "Our security guards are cross trained to provide you the best possible services. In today's environment, criminals are not only stealing heavy equipment but also precious metals. Theft of copper wire, equipment, tools and vandalism to job sites is why it is cost effective to hire M&G Security to protect your assets.",
      "A single theft incident can cost a contractor thousands of dollars in lost equipment and project delays. Our guards maintain a visible presence that deters criminals, patrol the perimeter to spot unauthorized access, and document all activity so you have a clear record of site security.",
      "M&G Security has protected construction sites for Monty's Construction and other contractors throughout Berks County. Our team understands the rhythms of construction work — we coordinate with site supervisors, respect active work zones, and adjust our patrol patterns to match your project schedule.",
    ],
    features: [
      "After-hours and overnight patrols",
      "Equipment and material theft prevention",
      "Vandalism and trespassing deterrence",
      "Contractor and subcontractor access control",
      "Fire watch and safety observation",
      "Incident reporting and documentation",
      "Perimeter fence and gate monitoring",
      "Coordination with site supervisors",
    ],
    metaTitle: "Construction Site Security | M&G Security — Berks County, PA",
    metaDescription:
      "Construction site security in Berks County, PA. M&G Security deters equipment theft, copper and material loss, and vandalism with after-hours patrols and perimeter monitoring.",
  },
  {
    slug: "festivals-major-events",
    icon: "ri-music-line",
    title: "Festival & event security",
    tagline: "We'll keep your festival or major event safe",
    paragraphs: [
      "M&G Security has provided on site security for Festivals and Major Events since 1997. We have stood watch and monitored the crowds at major events such as the Reading Liederkranz Oktoberfest, Reading Motorcycle Clubs Annual Anniversary Bash and the Wall that Heals to name a few. Providing both parking and crowd control. These events have hundreds to thousands of people coming and going.",
      "Large public gatherings require specialized security planning that goes far beyond stationing a few guards at the gate. M&G Security brings decades of law enforcement and event security experience to ensure your large-scale event runs safely from setup to breakdown.",
      "Our team plans ahead — mapping entry and exit flows, identifying choke points, coordinating with local police and EMS, and positioning personnel where they can be most effective. Our guards are trained in crowd psychology, conflict de-escalation, and emergency response — skills honed through years of real law enforcement experience.",
    ],
    features: [
      "Perimeter and access point control",
      "Crowd density and flow monitoring",
      "Lost child and family reunification",
      "Vendor and staff credential verification",
      "Alcohol enforcement zone management",
      "Emergency medical liaison",
      "Parking and traffic coordination",
      "Stage and performance area security",
    ],
    metaTitle: "Festival & Major Event Security | M&G Security — Berks County, PA",
    metaDescription:
      "Festival and major event security since 1997. M&G Security provides crowd control, parking, and perimeter security for large public gatherings across Berks County, PA.",
  },
  {
    slug: "high-school-events",
    icon: "ri-school-line",
    title: "High school event security",
    tagline: "We'll keep your high school event safe",
    paragraphs: [
      "M&G Security was founded for the purpose of providing security at sporting events for local high schools. The professional staff hired to provide security makes sure that everyone has a great time and stays safe.",
      "M&G Security has provided crowd control at football and basketball events for as many as 100 people to 10,000 people. Our goal is to make sure that you and your children stay safe.",
      "School events present distinct security challenges — excited crowds, minors, alcohol and substance concerns, and the emotional intensity of rivalry games. Our team includes active and retired law enforcement officers who understand how to enforce rules firmly while maintaining the supportive, community-oriented atmosphere that makes school events special.",
    ],
    features: [
      "Sporting event crowd management",
      "Prom and graduation security",
      "Parking lot and entryway control",
      "Student conflict de-escalation",
      "Coordination with school resource officers",
      "Alcohol and substance screening",
      "Parent and visitor verification",
      "Post-event building sweep and lockdown",
    ],
    metaTitle: "High School Event Security | M&G Security — Berks County, PA",
    metaDescription:
      "High school event security from M&G Security. Crowd control for football, basketball, proms, and graduations — staffed by active and retired law enforcement across Berks County, PA.",
  },
  {
    slug: "private-investigation",
    icon: "ri-search-line",
    title: "Private investigation",
    tagline: "Our discreet private investigators can find the information you need",
    paragraphs: [
      "M&G Security handles private investigations that are fitted to your needs. We handle domestic cases, family matters, workers comp cases and surveillance. Our licensed investigators serve individuals, attorneys, insurance companies, and businesses throughout Pennsylvania with thorough, legally sound investigative work.",
      "Our investigative division is led by experienced professionals with backgrounds in law enforcement and criminal investigation. We understand the legal standards required for evidence collection, chain of custody, and court-ready documentation. Every case receives the same meticulous attention, whether it's a simple background check or a complex surveillance operation.",
      "We maintain strict confidentiality in all investigations. Our clients include law firms seeking witness location and asset verification, insurance companies investigating fraud claims, and individuals dealing with sensitive personal matters. We provide clear, detailed reports and are available to testify in court when needed.",
    ],
    features: [
      "Surveillance and witness location",
      "Background and asset checks",
      "Accident investigation and reconstruction",
      "Insurance fraud investigation",
      "Child custody and divorce case support",
      "Workers' compensation verification",
      "Missing person and skip tracing",
      "Court testimony and legal documentation",
    ],
    metaTitle: "Private Investigation | M&G Security — Pennsylvania",
    metaDescription:
      "Licensed private investigators serving individuals, attorneys, and insurance companies across Pennsylvania. Surveillance, background checks, and court-ready documentation from M&G Security.",
  },
  {
    slug: "restaurant-maintenance",
    icon: "ri-restaurant-line",
    title: "Restaurant maintenance security",
    tagline: "We'll keep your restaurant safe after hours",
    paragraphs: [
      "Several major restaurant Chains have contracted to M&G Security to provide services after hours. When the dining room closes, we step in and provide a high quality of security service while routine maintenance is being provided.",
      "Our personnel will work those late night hours so that management and staff can go home and relax knowing that their restaurant is in safe hands.",
      "Overnight break-ins, vandalism, and theft of alcohol, equipment, and cash are persistent risks for hospitality businesses. Our guards provide visible deterrence, patrol interior and exterior spaces, monitor loading docks and delivery areas, and respond immediately to alarm activations or suspicious activity.",
    ],
    features: [
      "Overnight and after-hours patrols",
      "Maintenance period site security",
      "Delivery and loading dock monitoring",
      "Alcohol and inventory protection",
      "Vandalism and break-in deterrence",
      "Keyholder and alarm response",
      "Contractor access control",
      "Interior and exterior perimeter checks",
    ],
    metaTitle: "Restaurant Maintenance Security | M&G Security — Berks County, PA",
    metaDescription:
      "After-hours restaurant and hospitality security from M&G Security. Overnight patrols, maintenance-period coverage, and alarm response protecting Berks County establishments.",
  },
  {
    slug: "sporting-events",
    icon: "ri-basketball-line",
    title: "Sporting event security",
    tagline: "We'll keep your sporting event safe",
    paragraphs: [
      "M&G Security understands that your goal is not only to reduce risk and liability, but also to ensure that your guests enjoy their experience in the most secure environment possible. From high school tournaments and college games to professional arena events, we ensure that athletes can compete and fans can cheer in a safe, controlled environment.",
      "Sporting events bring together passionate crowds, alcohol sales, rival fan bases, and high-value athletes and equipment — all in one venue. Our team plans security around the unique risks of each event, positioning guards at critical points, monitoring crowd behavior, and maintaining clear communication with venue management and local authorities.",
      "We have provided security for the Reading Royals at the Santander Arena, high school playoff games, wrestling tournaments, and amateur sporting events across Berks County. Whether your event draws 200 or 20,000 spectators, M&G Security scales its team and strategy to match.",
    ],
    features: [
      "Player, coach, and team area protection",
      "Spectator crowd control and section monitoring",
      "Parking lot and traffic flow management",
      "Concourse and concession security",
      "Ticket gate and entry screening",
      "Post-game crowd dispersal",
      "VIP and press box security",
      "Emergency medical and evacuation coordination",
    ],
    metaTitle: "Sporting Event Security | M&G Security — Berks County, PA",
    metaDescription:
      "Sporting event security from M&G Security. Crowd control, gate screening, and team-area protection for high school, college, and arena events including the Reading Royals at Santander Arena.",
  },
];
