import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const PROGRAMMES = [
  { icon: 'B', title: 'Baby Class', age: 'About 1.5 to 2.5 years', text: 'Gentle routines, sensory play, songs and rhymes in a nurturing space.' },
  { icon: 'P', title: 'Playgroup', age: 'About 2.5 to 3.5 years', text: 'Early social skills, language, movement and creative play.' },
  { icon: 'N', title: 'Nursery (PP1)', age: 'About 3.5 to 4.5 years', text: 'Letters, sounds, numbers and shapes, learned through games and stories.' },
  { icon: 'K', title: 'Kindergarten (PP2)', age: 'About 4.5 to 6 years', text: 'Reading, writing and maths readiness for a confident start in Grade 1.' },
];

const AREAS = [
  { title: 'Language and literacy', text: 'Stories, phonics, early reading and writing.' },
  { title: 'Numbers and maths', text: 'Counting, patterns, shapes and problem solving.' },
  { title: 'Creative arts', text: 'Drawing, painting, music, dance and craft.' },
  { title: 'Physical play', text: 'Outdoor games and activities that build strength and coordination.' },
  { title: 'Social and emotional growth', text: 'Sharing, kindness, confidence and good manners.' },
  { title: 'Discovery of the world', text: 'Nature, environment and simple science through hands-on activities.' },
];

export default function Programmes() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Programmes</span>
          <SplitText as="h1" text="Learning for every stage" />
          <p className="lead" style={{ marginTop: 20 }}>
            From a child's first days at school to being ready for primary, each class is shaped around how little ones learn best.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid">
            {PROGRAMMES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="card">
                  <div className="icon">{p.icon}</div>
                  <h3>{p.title}</h3>
                  <p><strong>{p.age}</strong></p>
                  <p>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="container">
          <span className="eyebrow">Every day</span>
          <SplitText text="What children explore" />
          <div className="grid">
            {AREAS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="card">
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
