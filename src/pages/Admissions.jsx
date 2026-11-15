import { Link } from 'react-router-dom';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const STEPS = [
  { title: 'Enquire', text: 'Send us an enquiry on this website or message us on WhatsApp. We reply quickly.' },
  { title: 'Visit the school', text: 'Come and see the classrooms, meet the teachers and ask us anything.' },
  { title: 'Apply', text: 'Complete the admission form and submit the documents listed below.' },
  { title: 'Welcome day', text: 'Your child joins us, and we make sure the first day is warm and happy.' },
];

const DOCUMENTS = [
  'A copy of the child\'s birth certificate',
  'Two recent passport size photographs',
  'Immunisation card',
  'Parent or guardian national ID copy',
];

export default function Admissions() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Admissions</span>
          <SplitText as="h1" text="Joining Bubble Hearts is easy" />
          <p className="lead" style={{ marginTop: 20 }}>
            We welcome new children throughout the year, subject to space in each class.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <span className="eyebrow">How it works</span>
          <SplitText text="Four simple steps" />
          <div className="steps">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="step">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container split-layout">
          <Reveal>
            <span className="eyebrow">What to bring</span>
            <h2>Documents needed</h2>
            <ul className="contact-list">
              {DOCUMENTS.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="cta">
              <h2>Ready to enrol?</h2>
              <p className="lead">Send us an enquiry and we will guide you through everything.</p>
              <div className="btn-row" style={{ justifyContent: 'center' }}>
                <Link to="/contact" className="btn">Enquire now</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
