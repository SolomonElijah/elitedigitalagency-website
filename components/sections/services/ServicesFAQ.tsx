import { Plus } from "lucide-react";

const questions = [
  { question: "What do you need to get started?", answer: "Send a short brief with your goals, budget range, and deadline. If you have an existing site, app, or design, include a link so we can see what you’re working with." },
  { question: "Can you take over an existing project?", answer: "Yes. We review the code and deployment setup first, then explain what can be kept and what needs work." },
  { question: "How long will my project take?", answer: "A small website typically takes two to three weeks. A web or mobile app often takes six to twelve weeks, depending on scope. We agree on a timeline in the proposal." },
  { question: "Can you help after launch?", answer: "We offer 30 days of post-launch support and can scope ongoing maintenance for updates, fixes, and hosting management." },
];

export default function ServicesFAQ() {
  return (
    <section className="section faq-section" aria-labelledby="faq-heading">
      <div className="shell reading-grid">
        <div>
          <p className="eyebrow">Planning a project</p>
          <h2 id="faq-heading">Common questions.</h2>
        </div>
        <div className="faq-list">
          {questions.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}<Plus size={18} aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
