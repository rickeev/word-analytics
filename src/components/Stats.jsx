export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label={"Words"} />
      <Stat number={stats.numberOfCharacters} label={"Characters"} />
      <Stat number={stats.instagramCharactersLeft} label="Instagram" />
      <Stat number={stats.facebookCharactersLeft} label={"Facebook"} />
    </section>
  )
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span className={`stats__number ${number < 0 ? 'stat__number--limit' : ''}`}>{number}</span>
      <h2 className="stats-heading">{label}</h2>
    </section>
  )
}
