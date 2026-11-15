import { Link } from 'react-router-dom';
import SplitText from '../components/SplitText.jsx';
import GradientText from '../components/GradientText.jsx';
import Reveal from '../components/Reveal.jsx';
import CountUp from '../components/CountUp.jsx';
import FloatingBubbles from '../components/FloatingBubbles.jsx';

const REASONS = [
  { icon: 'T', title: 'Caring Teachers', text: 'Patient, trained teachers who treat every child like family.' },
  { icon: 'S', title: 'A Safe Environment', text: 'A secure compound and close supervision from arrival to pick-up.' },
  { icon: 'P', title: 'Learning Through Play', text: 'Songs, stories, art and games that build confidence and curiosity.' },
  { icon: 'R', title: 'Ready for Primary', text: 'Early reading, writing and number skills for a smooth start in Grade 1.' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <FloatingBubbles />
        <div className="container">
          <span className="eyebrow">Kindergarten in Nairobi</span>
          <SplitText as="h1" text="Where little hearts learn and grow" />
          <Reveal delay={0.4}>
            <p className="lead">
              Bubble Hearts School is a warm, safe and joyful place where every child is loved,
              encouraged and prepared for a <GradientText>bright future</GradientText>.
            </p>
            <div className="btn-row">
              <Link to="/admissions" className="btn">Enrol your child</Link>
              <Link to="/contact" className="btn ghost">Send an enquiry</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="eyebrow">Why Bubble Hearts</span>
          <SplitText text="A school your child will love" />
          <p className="lead">We blend play, early learning and kindness so every day feels like an adventure.</p>
          <div className="grid">
            {REASONS.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.1}>
                <div className="card">
                  <div className="icon">{r.icon}</div>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container stats">
          <div className="stat"><strong><CountUp to={100} suffix="%" /></strong><span>Love and care</span></div>
          <div className="stat"><strong><CountUp to={15} suffix=":1" /></strong><span>Children per teacher, at most</span></div>
          <div className="stat"><strong><CountUp to={5} /></strong><span>Learning areas every day</span></div>
          <div className="stat"><strong><CountUp to={7} /></strong><span>Hours of safe, joyful learning</span></div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="cta">
              <SplitText text="Come and see us" />
              <p className="lead">Book a visit, meet our teachers and see where your child will grow.</p>
              <div className="btn-row" style={{ justifyContent: 'center' }}>
                <Link to="/contact" className="btn">Book a visit</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
