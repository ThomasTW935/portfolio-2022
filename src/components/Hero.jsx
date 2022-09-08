import programmingGif from '../assets/programming.gif'
export default function Hero() {
  
  return (
    <div className='row'>
      <section className='col'>
        <div>Hi! there,</div>
        <div>I'm Daryl Thomas</div>
        <div>I'm a Full Stacked Developer</div>
      </section>
      <section className='col'>
        <div>
          <img src={programmingGif} alt='programming'/>
        </div>
      </section>
    </div>
  );
}
