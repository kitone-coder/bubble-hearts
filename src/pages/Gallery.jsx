import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const TILES = [
  'Story time',
  'Painting day',
  'Outdoor play',
  'Music and dance',
  'Building blocks',
  'Sports day',
  'Graduation',
  'Birthday fun',
  'Learning together',
];

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Gallery</span>
          <SplitText as="h1" text="Moments we love" />
          <p className="lead" style={{ marginTop: 20 }}>
            A peek into everyday life at Bubble Hearts School.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="gallery">
            {TILES.map((t, i) => (
              <Reveal key={t} delay={(i % 3) * 0.1}>
                <div className="tile">{t}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
