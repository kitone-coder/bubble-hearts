import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const VALUES = [
  { icon: 'L', title: 'Love', text: 'Every child is known, welcomed and celebrated for who they are.' },
  { icon: 'C', title: 'Curiosity', text: 'We encourage questions, exploring and discovering through play.' },
  { icon: 'R', title: 'Respect', text: 'Kind words, good manners and care for others and for our environment.' },
  { icon: 'F', title: 'Faith in every child', text: 'We believe every child can grow, learn and shine at their own pace.' },
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About us</span>
          <SplitText as="h1" text="A second home for your child" />
          <p className="lead" style={{ marginTop: 20 }}>
            Bubble Hearts School is a kindergarten in Nairobi built on one simple idea: children learn best when they feel loved and safe.
          </p>
        </div>
      </section>

      <section>
        <div className="container split-layout">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2>Small hearts, big beginnings</h2>
            <p className="lead">
              Bubble Hearts was started by a mother and teacher who wanted a place where little ones could take their first
              steps in learning with warmth and confidence. Today we continue that mission, one happy child at a time.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="panel">Learning with joy</div>
          </Reveal>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <span className="eyebrow">What we stand for</span>
          <SplitText text="Our values" />
          <div className="grid">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <div className="card">
                  <div className="icon">{v.icon}</div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container split-layout">
          <Reveal>
            <div className="panel blue">Safe. Caring. Fun.</div>
          </Reveal>
          <Reveal delay={0.15}>
            <span className="eyebrow">Our teachers</span>
            <h2>People who truly care</h2>
            <p className="lead">
              Our teachers are patient, trained and passionate about early childhood. They guide each child gently,
              keep parents informed, and make every classroom a happy place to be.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
