import './ProjectCard.module.scss'

const ProjectCard = () => {
  return (
    <article className='card-wrapper'>
      <section className='image'>
        <img src='https://placehold.co/320x180' alt='' />
      </section>
      <section className='under-image'>
        <header>
          <h1>Witryna Lakiernii Proszkowej DUST</h1>
        </header>
        <summary>
          Był to mój pierwszy komercyjny projekt. Lakiernia DUST to firma specjalizująca się w
          usługach z zakresu malowania proszkowego oraz obróbki strumieniowo-ściernej.
        </summary>
        <div className='techs'>
          <i className='devicon-javascript-plain'></i>
          <i className='devicon-javascript-plain'></i>
          <i className='devicon-javascript-plain'></i>
        </div>
      </section>
    </article>
  )
}

export default ProjectCard
