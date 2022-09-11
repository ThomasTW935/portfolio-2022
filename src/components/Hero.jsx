import programmingGif from '../assets/programming.gif'
export default function Hero() {
  
  return (
    <div id='hero' className='container'>
      <section id='hero-text' className='row'>
        <div className=''>Hi! there,</div>
        <div>I'm <span>Daryl Thomas</span></div>
        <div>I'm a <span>Full Stacked Developer</span></div>
      </section>
      <section id='hero-gif' className='row justify-content-end h-100'>
        <div className='col-5'>
          <img src={programmingGif} alt='programming'/>
        </div>
      </section>
    </div>
  );
}
