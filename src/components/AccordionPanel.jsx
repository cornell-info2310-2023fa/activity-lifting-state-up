import './AccordionPanel.css';

export default function AccordionPanel({ title, children }) {
  return (
    <section>
      <h3>
        {/* Collapsed: '⮞' */}
        {'⮟' + ' ' + title}
      </h3>

      <p>{children}</p>
    </section>
  );
}
