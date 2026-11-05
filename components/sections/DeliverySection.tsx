import { delivery } from "@/lib/services";

export default function DeliverySection() {
  return (
    <section className="section delivery-section" aria-labelledby="delivery-heading">
      <div className="shell">
        <div className="section-heading">
          <p className="eyebrow">How we work</p>
          <h2 id="delivery-heading">From the first brief to launch.</h2>
        </div>
        <ol className="delivery-list">
          {delivery.map(({ title, description }, index) => (
            <li key={title}>
              <span className="index-label">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
