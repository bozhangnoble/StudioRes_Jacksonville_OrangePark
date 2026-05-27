import './App.css'
import { useState } from 'react'
import Award from 'lucide-react/dist/esm/icons/award.js'
import BriefcaseBusiness from 'lucide-react/dist/esm/icons/briefcase-business.js'
import Check from 'lucide-react/dist/esm/icons/check.js'
import ChefHat from 'lucide-react/dist/esm/icons/chef-hat.js'
import Clock from 'lucide-react/dist/esm/icons/clock.js'
import DoorOpen from 'lucide-react/dist/esm/icons/door-open.js'
import Dumbbell from 'lucide-react/dist/esm/icons/dumbbell.js'
import KeyRound from 'lucide-react/dist/esm/icons/key-round.js'
import Luggage from 'lucide-react/dist/esm/icons/luggage.js'
import Mail from 'lucide-react/dist/esm/icons/mail.js'
import MapPin from 'lucide-react/dist/esm/icons/map-pin.js'
import Navigation from 'lucide-react/dist/esm/icons/navigation.js'
import ParkingCircle from 'lucide-react/dist/esm/icons/circle-parking.js'
import Phone from 'lucide-react/dist/esm/icons/phone.js'
import Route from 'lucide-react/dist/esm/icons/route.js'
import Shield from 'lucide-react/dist/esm/icons/shield.js'
import Shirt from 'lucide-react/dist/esm/icons/shirt.js'
import Smartphone from 'lucide-react/dist/esm/icons/smartphone.js'
import Star from 'lucide-react/dist/esm/icons/star.js'
import Users from 'lucide-react/dist/esm/icons/users.js'
import Wifi from 'lucide-react/dist/esm/icons/wifi.js'
import heroImage from './assets/JAXRS-Hero.jpg'
import room1 from './assets/JAXRS-Room-Q1-1.jpg'
import room2 from './assets/JAXRS-Room-Q1-2.jpg'
import room3 from './assets/JAXRS-Room-2Q-1.jpg'
import room4 from './assets/JAXRS-Room-2Q-2.jpg'
import room5 from './assets/JAXRS-Room-2Q-3.jpg'
import lobby1 from './assets/JAXRS-Lobby-1.jpg'
import familyArrival from './assets/military-family-arrival.png'
import suiteWorkspace from './assets/extended-stay-workspace.png'
import marriottBonvoyLogo from './assets/Marriott-Bonvoy-Logo.png'
import studioResLogo from './assets/StudioRes-logo.jpg'

const marriottUrl = 'https://www.marriott.com/en-us/hotels/jaxrs-studiores-jacksonville-orange-park/overview/'
const militaryRateUrl = 'https://www.marriott.com/event-reservations/reservation-link.mi?id=1768847508272&key=CORP&app=resvlink'
const hotelAddress = '8045 Parramore Road, Jacksonville, FL 32244'
const mapQuery = encodeURIComponent(`StudioRes by Marriott Jacksonville Orange Park ${hotelAddress}`)
const directionsBase = 'https://www.google.com/maps/dir/?api=1'

const installations = [
  {
    name: 'NAS Jacksonville',
    label: 'Primary military access point',
    detail: 'Route from the hotel to Naval Air Station Jacksonville for base visits, duty travel, PCS support, and family stays.',
    query: 'Naval Air Station Jacksonville, Jacksonville, FL',
    featured: true,
  },
  {
    name: 'Naval Station Mayport',
    label: 'Navy regional access',
    detail: 'Useful for guests splitting time between Orange Park, south Jacksonville, and Mayport assignments.',
    query: 'Naval Station Mayport, Jacksonville, FL',
  },
  {
    name: 'Blount Island Command',
    label: 'Marine Corps logistics access',
    detail: 'A practical extended-stay option for defense contractors and recurring regional visits.',
    query: 'Blount Island Command, Jacksonville, FL',
  },
  {
    name: 'USCG Sector Jacksonville',
    label: 'Coast Guard access',
    detail: 'Convenient regional positioning for Coast Guard guests and families visiting the Jacksonville area.',
    query: 'USCG Sector Jacksonville, Jacksonville, FL',
  },
  {
    name: 'Camp Blanding JTC',
    label: 'Training center access',
    detail: 'A Jacksonville-area home base for longer trips connected to North Florida training and support work.',
    query: 'Camp Blanding Joint Training Center, Starke, FL',
  },
  {
    name: '125th Fighter Wing',
    label: 'Air National Guard access',
    detail: 'Supports broader Jacksonville military travel, including guests connected to the Air National Guard.',
    query: '125th Fighter Wing, Jacksonville, FL',
  },
]

const audienceCards = [
  {
    icon: Luggage,
    title: 'PCS and Relocation Stays',
    desc: 'Settle into a studio-style room with a kitchen, work area, laundry access, and room for real routines while housing plans come together.',
  },
  {
    icon: Clock,
    title: 'TDY, TAD and Training Travel',
    desc: 'Built for more than a quick overnight: flexible extended stays, 24-hour fitness access, and easy parking after long duty days.',
  },
  {
    icon: Users,
    title: 'Military Families and Visitors',
    desc: 'A comfortable place for family visits near NAS Jacksonville, with pet-friendly rooms and space to cook instead of eating out every meal.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Defense Contractors',
    desc: 'A steady Orange Park base for recurring base work, project teams, vendor visits, and longer assignments across the Jacksonville military network.',
  },
]

const amenities = [
  { icon: ChefHat, title: 'In-Room Kitchen', desc: 'Stovetop, full-size refrigerator and microwave' },
  { icon: ParkingCircle, title: 'Free Parking', desc: 'Complimentary on-site parking for guests' },
  { icon: Shirt, title: 'On-Site Laundry', desc: 'Helpful for multi-week and monthly stays' },
  { icon: Dumbbell, title: 'Fitness Center', desc: 'Keep your routine while away from home' },
  { icon: KeyRound, title: 'Mobile Key', desc: 'Use Marriott mobile key where available' },
  { icon: DoorOpen, title: 'Pet-Friendly', desc: '2 pets, up to 75 lbs each, with fee' },
  { icon: Wifi, title: 'Free WiFi', desc: 'Work, stream and stay connected' },
  { icon: Award, title: 'Marriott Bonvoy', desc: 'Earn points on eligible extended stays' },
]

const faqs = [
  {
    q: 'How close are you to NAS Jacksonville?',
    a: 'StudioRes Jacksonville Orange Park is positioned off I-295 and Collins Road in south Jacksonville. Use the map and directions link on this page for the current route to NAS Jacksonville, since gate traffic and route conditions can change.',
  },
  {
    q: 'Do you offer military rates?',
    a: 'Yes. The Military Appreciation booking link is featured on this page, and you can also call the hotel at (904) 579-8150 for help with eligible rates and longer-stay questions.',
  },
  {
    q: 'Is this a good setup for PCS or temporary housing?',
    a: 'Yes. The property is designed for extended stays, with studio-style rooms, kitchens, work space, free parking, on-site laundry, and Marriott Bonvoy participation.',
  },
  {
    q: 'What is included in the kitchen?',
    a: 'Each studio includes a stovetop, full-size refrigerator, and microwave. Guests should plan to bring or purchase their own cookware and utensils.',
  },
  {
    q: 'Is parking included?',
    a: 'Yes. Marriott lists complimentary on-site parking for this hotel.',
  },
  {
    q: 'What is the pet policy?',
    a: 'Marriott lists the hotel as pet-friendly for up to 2 pets, 75 lbs maximum each, with a $150 non-refundable fee.',
  },
  {
    q: 'Do you have airport or base shuttle service?',
    a: 'Marriott lists no shuttle service for this property, so guests should plan to drive, rideshare, or arrange transportation.',
  },
  {
    q: 'What are check-in and checkout times?',
    a: 'Marriott lists check-in at 3:00 pm and checkout at 11:00 am.',
  },
]

function directionsUrl(destination) {
  return `${directionsBase}&origin=${encodeURIComponent(hotelAddress)}&destination=${encodeURIComponent(destination)}`
}

function App() {
  const [stayDays, setStayDays] = useState(30)
  const dailySavings = 750 / 30
  const savings = {
    totalSavings: Math.round(dailySavings * stayDays),
    withoutKitchen: Math.round((1500 / 30) * stayDays),
    withKitchen: Math.round((750 / 30) * stayDays),
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand-lockup">
            <div>
              <img src={studioResLogo} alt="StudioRes" className="studiores-logo" />
              <div className="brand-subtitle">by Marriott</div>
            </div>
            <div className="brand-divider" />
            <img src={marriottBonvoyLogo} alt="Marriott Bonvoy" className="bonvoy-logo" />
          </div>
          <div className="topbar-actions">
            <a href="tel:+19045798150" className="phone-link">
              <Phone size={17} />
              <span>(904) 579-8150</span>
            </a>
            <button onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-primary btn-small">
              Book Now
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <img src={heroImage} alt="StudioRes Jacksonville Orange Park exterior" className="hero-image" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <Shield size={18} />
              Military Appreciation Rates Available
            </div>
            <h1>Extended Stays Near NAS Jacksonville</h1>
            <p>
              A smart Orange Park home base for PCS moves, TDY travel, military families, and defense contractors working across Jacksonville.
            </p>
            <div className="hero-actions">
              <a href={militaryRateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                <Star size={20} />
                Book Military Rate
              </a>
              <a href={directionsUrl('Naval Air Station Jacksonville, Jacksonville, FL')} target="_blank" rel="noopener noreferrer" className="btn btn-light">
                <Navigation size={20} />
                Directions to NAS Jax
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="container proof-grid">
          <ProofItem icon={MapPin} label="Address" title="8045 Parramore Road" detail="Jacksonville, FL 32244" />
          <ProofItem icon={Route} label="Base Access" title="NAS Jacksonville Focused" detail="Map and directions built around the NAS route" />
          <ProofItem icon={ChefHat} label="Extended Stay" title="Kitchen, Laundry, Parking" detail="A better setup for weeks or months" />
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionIntro
            eyebrow="Military Location Advantage"
            title="See The Route From Orange Park To NAS Jacksonville"
            copy="Use the live map to confirm current drive times, route options, and gate traffic before you book. The hotel is positioned for guests who need a practical south Jacksonville base."
          />
          <div className="map-layout">
            <div className="map-frame">
              <iframe
                title="Map to StudioRes by Marriott Jacksonville Orange Park"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="installation-stack">
              {installations.slice(0, 3).map((installation) => (
                <InstallationCard key={installation.name} installation={installation} />
              ))}
            </div>
          </div>
          <div className="mini-installation-grid">
            {installations.slice(3).map((installation) => (
              <a key={installation.name} href={directionsUrl(installation.query)} target="_blank" rel="noopener noreferrer" className="mini-card">
                <strong>{installation.name}</strong>
                <span>{installation.label}</span>
                <em>
                  Open directions
                  <Navigation size={15} />
                </em>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split-large">
          <div>
            <SectionIntro
              eyebrow="Who We Serve"
              title="Built For Military Travel That Lasts Longer Than A Weekend"
              copy="StudioRes gives military-connected guests a steady place to land: a real kitchen, separate zones for sleeping and working, on-site laundry, free parking, and Marriott reliability."
            />
            <div className="audience-grid">
              {audienceCards.map((card) => (
                <FeatureCard key={card.title} {...card} />
              ))}
            </div>
          </div>
          <div className="image-stack">
            <img src={familyArrival} alt="Military family arriving for an extended stay" />
            <img src={suiteWorkspace} alt="Extended-stay suite workspace and kitchen" />
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split">
          <div>
            <div className="eyebrow gold-text">Military Appreciation</div>
            <h2>Full Kitchen Comfort With A Longer-Stay Budget In Mind</h2>
            <p className="dark-copy">
              Dining out adds up fast during a PCS transition, training assignment, or long contractor stay. A kitchen gives you more control over cost, meals, and schedule.
            </p>
            <div className="savings-metrics">
              <Metric label="1 Month Estimate" value="$750 saved" />
              <Metric label="3 Months Estimate" value="$2,250 saved" />
              <Metric label="6 Months Estimate" value="$4,500 saved" />
            </div>
          </div>
          <div className="calculator">
            <h3>Calculate Food Savings</h3>
            <label htmlFor="stay-days">How many days will you stay?</label>
            <div className="calculator-row">
              <input
                id="stay-days"
                type="number"
                min="1"
                value={stayDays}
                onChange={(event) => setStayDays(Math.max(1, parseInt(event.target.value) || 1))}
              />
              <button onClick={() => setStayDays((prev) => prev + 1)}>+1</button>
              <button onClick={() => setStayDays((prev) => Math.max(1, prev - 1))}>-1</button>
              <span>days</span>
            </div>
            <div className="calculator-total">
              <span>Estimated savings</span>
              <strong>${savings.totalSavings.toLocaleString()}</strong>
              <em>over {stayDays} days</em>
            </div>
            <div className="calculator-comparison">
              <Metric label="Eating out estimate" value={`$${savings.withoutKitchen.toLocaleString()}`} />
              <Metric label="Kitchen estimate" value={`$${savings.withKitchen.toLocaleString()}`} />
            </div>
            <p>Estimate assumes $1,500/month eating out compared with $750/month using the in-room kitchen for more meals.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro
            center
            eyebrow="Room Setup"
            title="Studio-Apartment Comfort Near Jacksonville Bases"
            copy="Real hotel photos, real extended-stay function: kitchens, seating, work zones, and the Marriott name behind your stay."
          />
          <div className="room-feature-grid">
            <RoomFeature image={room2} title="Cook On Your Schedule" alt="StudioRes in-room kitchen">
              A stovetop, full-size refrigerator, microwave, and counter space help make long stays more practical.
            </RoomFeature>
            <RoomFeature image={room1} title="Space To Sleep, Work And Reset" alt="StudioRes living and sleeping area">
              Studio-style layouts create more breathing room than a traditional overnight hotel room.
            </RoomFeature>
          </div>
          <div className="room-gallery">
            <img src={room3} alt="Two queen studio room" />
            <img src={room4} alt="Studio room view" />
            <img src={room5} alt="Studio layout" />
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <SectionIntro
            center
            eyebrow="Amenities"
            title="Extended-Stay Basics That Matter"
            copy="Corrected from Marriott's official listing: kitchen, complimentary parking, mobile key, fitness, business support, and pet-friendly rooms."
          />
          <div className="amenity-grid">
            {amenities.map((amenity) => (
              <AmenityCard key={amenity.title} {...amenity} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <img src={lobby1} alt="StudioRes lobby" className="rounded-media" />
          <div>
            <SectionIntro
              eyebrow="Marriott Reliability"
              title="A Familiar Brand For Unfamiliar Orders"
              copy="Whether the stay is planned months ahead or shaped by changing orders, StudioRes brings Marriott-backed consistency to extended military travel in Jacksonville."
            />
            <div className="check-list">
              {[
                'Marriott Bonvoy participation for eligible stays',
                'Brand-new property designed for extended-stay value',
                'Professional hotel team available for group and longer-stay questions',
              ].map((item) => (
                <div key={item}>
                  <Check size={23} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="section booking-section">
        <div className="container booking-container">
          <h2>Book Your Military-Friendly Extended Stay</h2>
          <p>
            Use the Military Appreciation link, book through Marriott, or contact the hotel for group, government, contractor, and longer-stay questions.
          </p>
          <div className="booking-grid">
            <BookingCard icon={Shield} title="Military Appreciation" copy="Special booking path for active duty, veterans, and military families.">
              <a href={militaryRateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                <Star size={19} />
                Book Military Rate
              </a>
            </BookingCard>
            <BookingCard icon={Smartphone} title="Marriott Booking" copy="Book direct, confirm amenities, and manage eligible Marriott Bonvoy details.">
              <a href={marriottUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book on Marriott.com
              </a>
            </BookingCard>
          </div>
          <div id="contact" className="contact-grid">
            <a href="tel:+19045798150">
              <Phone size={29} />
              <strong>Call The Hotel</strong>
              <span>(904) 579-8150</span>
            </a>
            <a href="mailto:sales@hotelmc.net">
              <Mail size={29} />
              <strong>Email Sales</strong>
              <span>sales@hotelmc.net</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container faq-container">
          <h2>Military Stay Questions</h2>
          <div className="faq-list">
            {faqs.map((faq) => (
              <div key={faq.q} className="faq-card">
                <h3>{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img src={studioResLogo} alt="StudioRes" className="footer-logo" />
            <p>by Marriott</p>
            <p>Extended-stay comfort near NAS Jacksonville.</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>8045 Parramore Road</p>
            <p>Jacksonville, FL 32244</p>
            <a href="tel:+19045798150">(904) 579-8150</a>
            <a href="mailto:sales@hotelmc.net">sales@hotelmc.net</a>
          </div>
          <div>
            <h3>Quick Links</h3>
            <a href="#booking">Book Now</a>
            <a href={marriottUrl} target="_blank" rel="noopener noreferrer">Book on Marriott.com</a>
            <a href={militaryRateUrl} target="_blank" rel="noopener noreferrer">Military Appreciation Rate</a>
            <a href={directionsUrl('Naval Air Station Jacksonville, Jacksonville, FL')} target="_blank" rel="noopener noreferrer">Directions to NAS Jacksonville</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; 2026 StudioRes Jacksonville Orange Park. Part of Marriott International, Inc.</p>
        </div>
      </footer>
    </div>
  )
}

function SectionIntro({ eyebrow, title, copy, center = false }) {
  return (
    <div className={`section-intro ${center ? 'centered' : ''}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <p>{copy}</p>
    </div>
  )
}

function ProofItem({ icon: Icon, label, title, detail }) {
  return (
    <div className="proof-item">
      <Icon size={30} />
      <div>
        <span>{label}</span>
        <strong>{title}</strong>
        <p>{detail}</p>
      </div>
    </div>
  )
}

function InstallationCard({ installation }) {
  return (
    <div className={`installation-card ${installation.featured ? 'featured' : ''}`}>
      <div className="installation-title-row">
        <h3>{installation.name}</h3>
        {installation.featured && <span>Primary</span>}
      </div>
      <strong>{installation.label}</strong>
      <p>{installation.detail}</p>
      <a href={directionsUrl(installation.query)} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-compact">
        <Navigation size={17} />
        Open Directions
      </a>
    </div>
  )
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="feature-card">
      <Icon size={34} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

function Metric({ label, value }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

function RoomFeature({ image, alt, title, children }) {
  return (
    <div className="room-feature">
      <img src={image} alt={alt} />
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  )
}

function AmenityCard({ icon: Icon, title, desc }) {
  return (
    <div className="amenity-card">
      <div className="amenity-icon">
        <Icon size={29} />
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}

function BookingCard({ icon: Icon, title, copy, children }) {
  return (
    <div className="booking-card">
      <Icon size={42} />
      <h3>{title}</h3>
      <p>{copy}</p>
      {children}
    </div>
  )
}

export default App
