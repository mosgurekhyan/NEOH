import { useNavigate } from 'react-router-dom'
import './Roadmap.css'
import Images from '../Images/Images'
import { useContext, useEffect } from 'react'
import { UseContext } from '../../App'

function Roadmap() {
  const navigate = useNavigate()
  const { ref1 } = useContext(UseContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div ref={ref1} className='roadmap'>
      <div className="share">
        <p>Share:</p>
        <a href="https://twitter.com"><i className="navIcon fa-brands fa-twitter"></i></a>
        <a href="https://facebook.com"><i className="navIcon fa-brands fa-facebook"></i></a>
        <a href="https://instagram.com"><i className="navIcon fa-brands fa-instagram"></i></a>
        <a href="https://pinterest.com"><i className="navIcon fa-brands fa-pinterest-p"></i></a>
        <a href="https://behance.net"><i className="navIcon fa-brands fa-behance"></i></a>
      </div>
      <div className="navigation">
        <p onClick={() => navigate('/')}>Home</p> /
        <p onClick={() => navigate('/blog')}>RoadMap</p> /
        <b>Mini Game Lounch for Community</b>
      </div>
      <img className='blogImg' src="https://neoh-react.vercel.app/img/blog/single.jpg" alt="" />
      <div className="roadDiv1">
        <div className="roadpolygon1">June 01, 2022</div>
        <div className="roadpolygon2">By Admin</div>
      </div>
      <h1>Neoh’s NFT Goes Public In Nod To Crypto Adoption</h1>
      <p>Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa dictum, vulputate neque ac, porta mauris. Sed sollicitudin nisi augue, a gravida turpis elementum vel. Curabitur sagittis quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed non ante malesuada, ultrices sem at, tempus libero. <br /><br />Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat. Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel neque et ex vestibulum elementum at sed lacus. Fusce imperdiet mauris ac mi viverra viverra. Maecenas pharetra nibh non arcu finibus, vel ultrices arcu porttitor. Quisque ac nisl id lectus faucibus pulvinar nec ut nisl. Duis ultricies ut lacus sed rutrum. <br /><br />Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat. Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel neque et ex vestibulum elementum at sed lacus. Fusce imperdiet mauris ac mi viverra viverra. Maecenas pharetra nibh non arcu finibus, vel ultrices arcu porttitor. Quisque ac nisl id lectus faucibus pulvinar nec ut nisl. Duis ultricies ut lacus sed rutrum. <br /><br />Suspendisse dignissim ultricies iaculis. Suspendisse ultrices turpis mi, non tincidunt orci interdum tempor. Praesent venenatis, lorem egestas consequat tempor, nunc neque venenatis risus, vitae interdum ipsum ipsum eget purus. Proin ac leo non est imperdiet commodo. Donec dictum augue ut odio feugiat vulputate. Pellentesque ultricies augue in posuere ornare. Pellentesque pretium non nunc ac sodales. <br /><br />Nam et malesuada ante, in convallis libero. Aenean sollicitudin egestas ante, eget porttitor leo fringilla sit amet. Nam cursus neque ligula, in egestas elit porttitor vel. Vestibulum ultricies tempus orci a auctor. Curabitur sed pretium lacus, eget cursus dui. Aliquam at ex sit amet urna interdum dignissim vel non dolor. Pellentesque mi nibh, sollicitudin at neque id, tincidunt molestie lorem. Nulla facilisi. Phasellus viverra mi ut sapien efficitur, sit amet suscipit lorem commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
      <Images/>
      <p>Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa dictum, vulputate neque ac, porta mauris. Sed sollicitudin nisi augue, a gravida turpis elementum vel. Curabitur sagittis quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed non ante malesuada, ultrices sem at, tempus libero. <br /><br />Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat. Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel neque et ex vestibulum elementum at sed lacus. Fusce imperdiet mauris ac mi viverra viverra. Maecenas pharetra nibh non arcu finibus, vel ultrices arcu porttitor. Quisque ac nisl id lectus faucibus pulvinar nec ut nisl. Duis ultricies ut lacus sed rutrum. <br /><br />Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat. Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel neque et ex vestibulum elementum at sed lacus. Fusce imperdiet mauris ac mi viverra viverra. Maecenas pharetra nibh non arcu finibus, vel ultrices arcu porttitor. Quisque ac nisl id lectus faucibus pulvinar nec ut nisl. Duis ultricies ut lacus sed rutrum. <br /><br />Suspendisse dignissim ultricies iaculis. Suspendisse ultrices turpis mi, non tincidunt orci interdum tempor. Praesent venenatis, lorem egestas consequat tempor, nunc neque venenatis risus, vitae interdum ipsum ipsum eget purus. Proin ac leo non est imperdiet commodo. Donec dictum augue ut odio feugiat vulputate. Pellentesque ultricies augue in posuere ornare. Pellentesque pretium non nunc ac sodales. <br /><br />Nam et malesuada ante, in convallis libero. Aenean sollicitudin egestas ante, eget porttitor leo fringilla sit amet. Nam cursus neque ligula, in egestas elit porttitor vel. Vestibulum ultricies tempus orci a auctor. Curabitur sed pretium lacus, eget cursus dui. Aliquam at ex sit amet urna interdum dignissim vel non dolor. Pellentesque mi nibh, sollicitudin at neque id, tincidunt molestie lorem. Nulla facilisi. Phasellus viverra mi ut sapien efficitur, sit amet suscipit lorem commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
    </div>
  )
}

export default Roadmap