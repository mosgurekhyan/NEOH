import { useNavigate } from 'react-router-dom'
import './BlogSingle.css'
import Comments from '../Comments/Comments'
import Articles from '../Articles/Articles'
import { useContext, useEffect } from 'react'
import { UseContext } from '../../App'

function BlogSingle() {
  const navigate = useNavigate()
  const { ref1 } = useContext(UseContext)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div ref={ref1} className='blogSingle'>
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
        <p onClick={() => navigate('/blog')}>Blog</p> /
        <b>Neoh’s NFT Goes Public in Nod to Crypto Adoption</b>
      </div>
      <img className='blogImg' src="https://neoh-react.vercel.app/img/blog/single.jpg" alt="" />
      <div className="blogSingleDiv">
        <div className="blogSingleDiv1">
          <div className="polygons">
            <div className="polygon6">June 01, 2022</div>
            <div className="polygon7">By Admin</div>
            <div className="polygon8">3 Comments</div>
          </div>
          <h1>Neoh’s NFT Goes Public In Nod To Crypto Adoption</h1>
          <h4>TOKENS, NFTS, CRYPTO</h4>
          <p>Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia. Nunc eu massa dictum, vulputate neque ac, porta mauris. Sed sollicitudin nisi augue, a gravida turpis elementum vel. Curabitur sagittis quis diam et rhoncus. Nam pellentesque imperdiet aliquet. Sed non ante malesuada, ultrices sem at, tempus libero. <br /><br />Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat. Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel neque et ex vestibulum elementum at sed lacus. Fusce imperdiet mauris ac mi viverra viverra. Maecenas pharetra nibh non arcu finibus, vel ultrices arcu porttitor. Quisque ac nisl id lectus faucibus pulvinar nec ut nisl. Duis ultricies ut lacus sed rutrum. <br /><br />Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci, eleifend euismod justo. Quisque luctus turpis eu tristique feugiat. Praesent ac magna feugiat, interdum lacus ac, interdum dui. Pellentesque id quam quis enim malesuada rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vel neque et ex vestibulum elementum at sed lacus. Fusce imperdiet mauris ac mi viverra viverra. Maecenas pharetra nibh non arcu finibus, vel ultrices arcu porttitor. Quisque ac nisl id lectus faucibus pulvinar nec ut nisl. Duis ultricies ut lacus sed rutrum. <br /><br />Suspendisse dignissim ultricies iaculis. Suspendisse ultrices turpis mi, non tincidunt orci interdum tempor. Praesent venenatis, lorem egestas consequat tempor, nunc neque venenatis risus, vitae interdum ipsum ipsum eget purus. Proin ac leo non est imperdiet commodo. Donec dictum augue ut odio feugiat vulputate. Pellentesque ultricies augue in posuere ornare. Pellentesque pretium non nunc ac sodales. <br /><br />Nam et malesuada ante, in convallis libero. Aenean sollicitudin egestas ante, eget porttitor leo fringilla sit amet. Nam cursus neque ligula, in egestas elit porttitor vel. Vestibulum ultricies tempus orci a auctor. Curabitur sed pretium lacus, eget cursus dui. Aliquam at ex sit amet urna interdum dignissim vel non dolor. Pellentesque mi nibh, sollicitudin at neque id, tincidunt molestie lorem. Nulla facilisi. Phasellus viverra mi ut sapien efficitur, sit amet suscipit lorem commodo. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
          <div className="blogSingleDiv11">
            <img src="https://neoh-react.vercel.app/img/blog/author.jpg" alt="" />
            <div className="blogSingleDiv11Data">
              <h3>Josephine Sanchez</h3>
              <p>Josephine is a writer, editor, etc.-er who muses about life, design and travel for friendship, food, fun and more.</p>
              <div>
                <a href="https://twitter.com"><i className="navIcon fa-brands fa-twitter"></i></a>
                <a href="https://facebook.com"><i className="navIcon fa-brands fa-facebook"></i></a>
                <a href="https://instagram.com"><i className="navIcon fa-brands fa-instagram"></i></a>
                <a href="https://pinterest.com"><i className="navIcon fa-brands fa-pinterest-p"></i></a>
                <a href="https://behance.net"><i className="navIcon fa-brands fa-behance"></i></a>
              </div>
            </div>
          </div>
          <Comments/>
        </div>
        <div className="blogSingleDiv2"> 
          <div className="blog1">
            <img src="https://neoh-react.vercel.app/img/widgets/about.jpg" alt="" />
          </div>
          <h3 className='blogH3'>MARIA BLONDE</h3>
          <a className='blogA' href="mailto:mariablonde@gmail.com">mariablonde@gmail.com</a>
          <p className='blogabout'>I want your outer personal style to reflect the inner you. I understand the importance of creating an interior that gives a sense of solace</p>
          <img className='signature' src="https://neoh-react.vercel.app/img/widgets/about-sign.png" alt="" />
          <div className="polygon9">
            <span>SUBSCRIBE & FOLLOW</span>
          </div>
          <div className="blogIcons">
            <a href="https://facebook.com"><i className="navIcon fa-brands fa-facebook"></i></a>
            <a href="https://twitter.com"><i className="navIcon fa-brands fa-twitter"></i></a>
            <a href="https://youtube.com"><i className="navIcon fa-brands fa-youtube"></i></a>
            <a href="https://instagram.com"><i className="navIcon fa-brands fa-instagram"></i></a>
            <a href="https://soundcloud.com"><i className="navIcon fa-brands fa-soundcloud"></i></a>
            <a href="https://vk.com"><i className="navIcon fa-brands fa-vk"></i></a>
          </div>
          <img className='blog1Img' src="https://neoh-react.vercel.app/img/widgets/banner.jpg" alt="" />
          <div className="blog2">
            <i className="fa-solid fa-envelope-open-text"></i>
            <h2>Newsletter</h2>
            <p>Get to know about the latest trends, the best in crypto.</p>
            <input placeholder='Email Address' type="text" />
            <button>SUBSCRIBE</button>
          </div>
          <div className="polygon9">
            <span>TOP ARTICLES</span>
          </div>
          <Articles/>
        </div>
      </div>
    </div>
  )
}

export default BlogSingle