import { Link } from 'react-router-dom';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const FEES = [
  { cls: 'Baby Class', term: 'KES 0', note: 'Add the real fee' },
  { cls: 'Playgroup', term: 'KES 0', note: 'Add the real fee' },
  { cls: 'Nursery (PP1)', term: 'KES 0', note: 'Add the real fee' },
  { cls: 'Kindergarten (PP2)', term: 'KES 0', note: 'Add the real fee' },
];

const EXTRAS = [
  { title: 'Registration fee', text: 'One-time fee when your child joins. Add the real amount.' },
  { title: 'Uniform', text: 'School uniform is available through the school. Add details.' },
  { title: 'Meals and transport', text: 'Ask us about meal plans and transport options.' },
];

export default function Fees() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Fees</span>
          <SplitText as="h1" text="Clear, fair and simple" />
          <p className="lead" style={{ marginTop: 20 }}>
            We keep our fees transparent so parents can plan with confidence.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Class</th><th>Fee per term</th><th>Notes</th></tr>
                </thead>
                <tbody>
                  {FEES.map((f) => (
                    <tr key={f.cls}><td>{f.cls}</td><td>{f.term}</td><td>{f.note}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="note">Fees are payable per term. M-Pesa and bank payments are accepted. Fees may be reviewed from time to time.</p>
          </Reveal>

          <div className="grid">
            {EXTRAS.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <div className="card">
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="btn-row">
            <Link to="/contact" className="btn">Ask about fees</Link>
          </div>
        </div>
      </section>
    </>
  );
}
