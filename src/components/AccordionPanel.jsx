import './AccordionPanel.css';

export default function AccordionPanel({
  title,
  isExpanded,
  onShow,
  children
}) {
  return (
    <section>
      <h3 onClick={onShow}>{(isExpanded ? '⮟' : '⮞') + ' ' + title}</h3>
      {isExpanded && (<p>{children}</p>)}
    </section>
  );
}
