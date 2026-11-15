import { useRef, useState } from 'react';
import SplitText from '../components/SplitText.jsx';
import Reveal from '../components/Reveal.jsx';

const EMAIL = 'kitonekd@gmail.com';
const ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;
const clean = (text) => text.replace(/[<>]/g, '').trim();

export default function Contact() {
  const [status, setStatus] = useState({ text: '', type: '' });
  const [sending, setSending] = useState(false);
  const lastSent = useRef(0);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;

    // Trap field: real visitors never see or fill this
    if (form.elements.website.value) return;

    if (Date.now() - lastSent.current < 30000) {
      setStatus({ text: 'Please wait a moment before sending another message.', type: 'bad' });
      return;
    }

    const name = clean(form.elements.name.value);
    const phone = clean(form.elements.phone.value);
    const email = clean(form.elements.email.value);
    const topic = clean(form.elements.topic.value);
    const message = clean(form.elements.message.value);

    if (name.length < 2 || message.length < 10) {
      setStatus({ text: 'Please enter your name and a message of at least 10 characters.', type: 'bad' });
      return;
    }
    if (!/^[+0-9 ()-]{9,15}$/.test(phone)) {
      setStatus({ text: 'Please enter a valid phone number.', type: 'bad' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ text: 'Please enter a valid email address.', type: 'bad' });
      return;
    }

    setSending(true);
    setStatus({ text: 'Sending...', type: '' });

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          topic,
          message,
          _subject: 'New enquiry from the Bubble Hearts website',
          _template: 'table',
          _captcha: 'false',
        }),
      });
      if (!response.ok) throw new Error('Request failed');
      lastSent.current = Date.now();
      form.reset();
      setStatus({ text: 'Thank you! Your message has been sent. We will be in touch soon.', type: 'ok' });
    } catch (error) {
      setStatus({ text: 'Sorry, something went wrong. Please use the WhatsApp button instead.', type: 'bad' });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>
          <SplitText as="h1" text="We would love to hear from you" />
          <p className="lead" style={{ marginTop: 20 }}>
            Ask about admission, fees or a school visit. You can also tap the WhatsApp button for a quick reply.
          </p>
        </div>
      </section>

      <section>
        <div className="container contact-grid">
          <Reveal>
            <h2>Get in touch</h2>
            <ul className="contact-list">
              <li><strong>Location</strong>Nairobi, Kenya</li>
              <li><strong>Phone and WhatsApp</strong><a href="tel:+254719719178">0719 719 178</a></li>
              <li><strong>School hours</strong>Monday to Friday, 7:30 am to 3:30 pm</li>
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <form className="enquiry" onSubmit={handleSubmit} noValidate>
              <h2>Send an enquiry</h2>

              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" autoComplete="name" maxLength="80" required />

              <label htmlFor="phone">Phone number</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" maxLength="15" required />

              <label htmlFor="email">Email address</label>
              <input id="email" name="email" type="email" autoComplete="email" maxLength="100" required />

              <label htmlFor="topic">What is your enquiry about?</label>
              <select id="topic" name="topic">
                <option>Admission</option>
                <option>Fees</option>
                <option>School visit</option>
                <option>Other</option>
              </select>

              <label htmlFor="message">Your message</label>
              <textarea id="message" name="message" maxLength="1000" required />

              <div className="hp" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" />
              </div>

              <div className="btn-row">
                <button className="btn" type="submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send enquiry'}
                </button>
              </div>
              <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.text}</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
