import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home/Home'
import { createContext, useMemo, useRef, useState, useEffect, useCallback } from 'react'
import Admin from './components/Admin/Admin'
import AddItem from './components/AddItem/AddItem'
import Collection from './components/Collection/Collection'
import Roadmap from './components/Roadmap/Roadmap'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import BlogSingle from './components/BlogSingle/BlogSingle'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Wrapper from './pages/Wrapper'
import ErrorPage from './pages/ErrorPage'

function App() {
  const ref1 = useRef(null)

  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items")
    return storedItems ? JSON.parse(storedItems) : [
      {
        id: '1',
        img: 'https://neoh-react.vercel.app/img/about/1.jpg',
        title1: 'The Rise of Neoh',
        title2: 'The Rise of Neoh',
        text1: 'As the first hero of the Neoh Universe, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life.',
        text2: 'The artwork has been hand-drawned by Robert Green in the traditional anime style and composited by Layla Efiyo.',
        btn1: 'OPENSEA',
        btn11: 'OPENSEA',
        btn2: 'DISCORD'        
      },
      {
        id: '2',
        img: 'https://neoh-react.vercel.app/img/about/2.jpg',
        title1: 'High Quality NFT Collection',
        title2: 'Thousands of Users',
        text1: 'Simply holding a Neoh will give you access to seasonal airdrops, merchandise, physical and digital artworks, collectibles and more.',
        text2: 'We understand the importance of the cross-over between these worlds and we truly believe to bridge these two together. Our goals will always be for the community - creating, building and innovating together with the commmunity.',
        btn1: 'MORE ABOUT US',
        btn11: 'JOIN COMMUNITY'
      }
    ]
  })

  const [items2] = useState([
    {
      id: '1',
      number: '01',
      title: 'Huge Collection',
      text: 'A collection of 5,000 unique NEOHs built to go beyond the digital space that will unlock numerous benefits for our community.',
      marTop: '35px'
    },
    {
      id: '2',
      number: '02',
      title: 'High Quality',
      text: 'The NEOH collection includes dozens of rare heads, costumes, and colorways of the artists palette. They are drawn with great care.'
    },
    {
      id: '3',
      number: '03',
      title: 'Top Resource',
      text: 'Tasty design resources made with care for each pixel. Tokens, NFTs, metaverse and game resources. Access additional drops.',
      marTop: '35px'
    },
    {
      id: '4',
      number: '04',
      title: 'Big Community',
      text: 'Be part of a community of neoh owners and create user generated items. Rent, advertise, lounch stores, create items.'
    }
  ])

  const [items3] = useState([
    {
      id: '1',
      img: 'https://neoh-react.vercel.app/img/drops/1.jpg',
      nikname: 'Neoh #4588'
    },
    {
      id: '2',
      img: 'https://neoh-react.vercel.app/img/drops/2.jpg',
      nikname: 'Neoh #4587'
    },
    {
      id: '3',
      img: 'https://neoh-react.vercel.app/img/drops/3.jpg',
      nikname: 'Neoh #4586'
    },
    {
      id: '4',
      img: 'https://neoh-react.vercel.app/img/drops/4.jpg',
      nikname: 'Neoh #4585'
    },
    {
      id: '5',
      img: 'https://neoh-react.vercel.app/img/drops/5.jpg',
      nikname: 'Neoh #4584'
    },
    {
      id: '6',
      img: 'https://neoh-react.vercel.app/img/drops/6.jpg',
      nikname: 'Neoh #4583'
    },
    {
      id: '7',
      img: 'https://neoh-react.vercel.app/img/drops/7.jpg',
      nikname: 'Neoh #4581'
    },
    {
      id: '8',
      img: 'https://neoh-react.vercel.app/img/drops/8.jpg',
      nikname: 'Neoh #4580'
    },
    {
      id: '9',
      img: 'https://neoh-react.vercel.app/img/drops/9.jpg',
      nikname: 'Neoh #4583'
    },
    {
      id: '10',
      img: 'https://neoh-react.vercel.app/img/drops/10.jpg',
      nikname: 'Neoh #4579'
    },
    {
      id: '11',
      img: 'https://neoh-react.vercel.app/img/drops/11.jpg',
      nikname: 'Neoh #4578'
    },
    {
      id: '12',
      img: 'https://neoh-react.vercel.app/img/drops/12.jpg',
      nikname: 'Neoh #4577'
    },
    {
      id: '13',
      img: 'https://neoh-react.vercel.app/img/drops/13.jpg',
      nikname: 'Neoh #5454'
    },
    {
      id: '14',
      img: 'https://neoh-react.vercel.app/img/drops/14.jpg',
      nikname: 'Neoh #4285'
    },
    {
      id: '15',
      img: 'https://neoh-react.vercel.app/img/drops/15.jpg',
      nikname: 'Neoh #4184'
    },
    {
      id: '16',
      img: 'https://neoh-react.vercel.app/img/drops/16.jpg',
      nikname: 'Neoh #2583'
    },
    {
      id: '17',
      img: 'https://neoh-react.vercel.app/img/drops/17.jpg',
      nikname: 'Neoh #1582'
    },
    {
      id: '18',
      img: 'https://neoh-react.vercel.app/img/drops/18.jpg',
      nikname: 'Neoh #3562'
    }
  ])

  const [items4] = useState([
    {
      id: '1',
      img1: 'https://neoh-react.vercel.app/img/timeline/1/1.jpg',
      img2: 'https://neoh-react.vercel.app/img/timeline/1/2.jpg',
      img3: 'https://neoh-react.vercel.app/img/timeline/1/3.jpg',
      date: 'May 05, 2022',
      title: 'New Character Set #12 is Coming Up'
    },
    {
      id: '2',
      img1: 'https://neoh-react.vercel.app/img/timeline/2/1.jpg',
      img2: 'https://neoh-react.vercel.app/img/timeline/2/2.jpg',
      img3: 'https://neoh-react.vercel.app/img/timeline/2/3.jpg',
      date: 'May 27, 2022',
      title: 'Female Character Set #20 is Coming Up'
    },
    {
      id: '3',
      img1: 'https://neoh-react.vercel.app/img/timeline/3/1.jpg',
      img2: 'https://neoh-react.vercel.app/img/timeline/3/2.jpg',
      img3: 'https://neoh-react.vercel.app/img/timeline/3/3.jpg',
      date: 'June 01, 2022',
      title: 'Mini Game Lounch For Community'
    },
    {
      id: '4',
      img1: 'https://neoh-react.vercel.app/img/timeline/4/1.jpg',
      img2: 'https://neoh-react.vercel.app/img/timeline/4/2.jpg',
      img3: 'https://neoh-react.vercel.app/img/timeline/4/3.jpg',
      date: 'June 07, 2022',
      title: 'New Character Set #15 is Coming Up'
    },
    {
      id: '5',
      img1: 'https://neoh-react.vercel.app/img/timeline/5/1.jpg',
      img2: 'https://neoh-react.vercel.app/img/timeline/5/2.jpg',
      img3: 'https://neoh-react.vercel.app/img/timeline/5/3.jpg',
      date: 'June 15, 2022',
      title: 'New Spirit Set #01 is Coming Up'
    },
    {
      id: '6',
      img1: 'https://neoh-react.vercel.app/img/timeline/6/1.jpg',
      img2: 'https://neoh-react.vercel.app/img/timeline/6/2.jpg',
      img3: 'https://neoh-react.vercel.app/img/timeline/6/3.jpg',
      date: 'June 23, 2022',
      title: 'New Haircut Collection #01 is Coming Up'
    },
    {
      id: '7',
      img1: 'https://neoh-react.vercel.app/img/timeline/7/1.jpg',
      img2: 'https://neoh-react.vercel.app/img/timeline/7/2.jpg',
      img3: 'https://neoh-react.vercel.app/img/timeline/7/3.jpg',
      date: 'July 01, 2022',
      title: 'New Haircut Collection #02 is Coming Up'
    },
  ])

  const [items5] = useState([
    {
      id: '1',
      img: '	https://neoh-react.vercel.app/img/investors/1.png'
    },
    {
      id: '2',
      img: '	https://neoh-react.vercel.app/img/investors/2.png'
    },
    {
      id: '3',
      img: '	https://neoh-react.vercel.app/img/investors/3.png'
    },
    {
      id: '4',
      img: '	https://neoh-react.vercel.app/img/investors/4.png'
    },
    {
      id: '5',
      img: '	https://neoh-react.vercel.app/img/investors/5.png'
    }
  ])

  const [news] = useState([
    {
      id: '1',
      date: 'June 01, 2022',
      title: 'Neohs NFT Goes Public In Nod To Crypto Adoption',
      text: 'Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.'
    },
    {
      id: '2',
      date: 'May 25, 2022',
      title: 'Bankman-Fried Would Like to Talk With Musk About Twitter',
      text: 'Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.'
    },
    {
      id: '3',
      date: 'May 13, 2022',
      title: 'Crypto-Focused Silvergate Jumps on Blowout Earnings Report',
      text: 'Morbi non dignissim erat, a blandit felis nec lorem vel orci varius congue ut vitae est.'
    }
  ])

  const [items6] = useState([
    {
      id: '1',
      icon: 'fa-brands fa-searchengin',
      title: 'Transparency',
      text: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.'
    },
    {
      id: '2',
      icon: 'fa-sharp fa-solid fa-people-group',
      title: 'Experienced Team',
      text: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.'
    },
    {
      id: '3',
      icon: 'fa-sharp fa-solid fa-key',
      title: 'Security Guarantee',
      text: 'Morbi non dignissim erat, a blandit felis. Suspendisse nec lorem vel orci varius congue ut vitae est.'
    }
  ])

  const [items7] = useState([
    {
      id: '1',
      img: 'https://neoh-react.vercel.app/img/author/1.jpg',
      name: 'Tom Mccarthy',
      occupation: '2D Artist'
    },
    {
      id: '2',
      img: 'https://neoh-react.vercel.app/img/author/2.jpg',
      name: 'Owen Bradley',
      occupation: '2D Artist'
    },
    {
      id: '3',
      img: 'https://neoh-react.vercel.app/img/author/3.jpg',
      name: 'Daniel Bradley',
      occupation: '2D Artist'
    },
    {
      id: '4',
      img: 'https://neoh-react.vercel.app/img/author/4.jpg',
      name: 'Skylar Jarvis',
      occupation: '2D Artist'
    },
    {
      id: '5',
      img: 'https://neoh-react.vercel.app/img/author/5.jpg',
      name: 'Avery Briggs',
      occupation: '2D Artist'
    },
    {
      id: '6',
      img: 'https://neoh-react.vercel.app/img/author/6.jpg',
      name: 'Bernard Green',
      occupation: '2D Artist'
    }
  ])

  const [comments] = useState([
    {
      id: '1',
      img: 'https://neoh-react.vercel.app/img/blog/comment-author1.jpg',
      name: 'Alex Brandon',
      date: 'MAY 9, 2022 AT 9:03 PM',
      text: 'Nam et malesuada ante, in convallis libero. Aenean sollicitudin egestas ante, eget porttitor leo fringilla sit amet. Nam cursus neque ligula, in egestas elit porttitor vel. Vestibulum ultricies tempus orci a auctor.'
    },
    {
      id: '2',
      img: 'https://neoh-react.vercel.app/img/blog/comment-author2.jpg',
      name: 'Meera',
      date: 'MAY 9, 2022 AT 9:03 PM',
      text: 'Proin ac leo non est imperdiet commodo. Donec dictum augue ut odio feugiat vulputate. Pellentesque ultricies augue in posuere ornare.'
    },
    {
      id: '3',
      img: 'https://neoh-react.vercel.app/img/blog/comment-author3.jpg',
      name: 'Rachel Perry',
      date: 'MAY 9, 2022 AT 9:03 PM',
      text: 'Cras sed velit vitae velit tincidunt venenatis nec in felis. Proin blandit elementum risus, sed mattis dui rhoncus vel. Sed maximus mauris fringilla purus auctor, eget convallis nulla facilisis.',
      text2: 'Morbi et lacinia ligula, id pharetra lorem. Phasellus posuere nibh et sem dapibus, ut eleifend ipsum eleifend. Pellentesque vel nibh aliquam leo efficitur bibendum vel sed mi. Ut pulvinar rutrum ante, at ultrices leo tincidunt eget.',
      text3: 'Suspendisse eget dui ac turpis consectetur sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ])

  const [articles] = useState([
    {
      id: '1',
      title: 'Use social media to jump-start your creative career.',
      date: 'Feb 30, 2023'
    },
    {
      id: '2',
      title: 'Staying at the Knickerbocker Mansion in Big Bear',
      date: 'Jul 15, 2020'
    },
    {
      id: '3',
      title: '10 Places to Visit in California (That Aren’t Los Angeles)',
      date: 'June 22, 2021'
    }
  ])

  const [images] = useState([
    {
      id: '1',
      img: 'https://neoh-react.vercel.app/img/drops/1.jpg',
      width: '400px',
      height: '310px'
    },
    {
      id: '2',
      img: 'https://neoh-react.vercel.app/img/drops/2.jpg',
      width: '400px',
      height: '310px'
    },
    {
      id: '3',
      img: 'https://neoh-react.vercel.app/img/drops/3.jpg',
      width: '400px',
      height: '310px'
    },
    {
      id: '4',
      img: 'https://neoh-react.vercel.app/img/drops/4.jpg',
      width: '615px',
      height: '460px'
    },
    {
      id: '5',
      img: 'https://neoh-react.vercel.app/img/drops/5.jpg',
      width: '615px',
      height: '460px'
    },
    {
      id: '6',
      img: 'https://neoh-react.vercel.app/img/drops/6.jpg',
      width: '290px',
      height: '230px'
    },
    {
      id: '7',
      img: 'https://neoh-react.vercel.app/img/drops/7.jpg',
      width: '290px',
      height: '230px'
    },
    {
      id: '8',
      img: 'https://neoh-react.vercel.app/img/drops/8.jpg',
      width: '290px',
      height: '230px'
    },
    {
      id: '9',
      img: 'https://neoh-react.vercel.app/img/drops/9.jpg',
      width: '290px',
      height: '230px'
    }
  ])

  const [adminMail, setAdminMail] = useState("admin@mail.ru")

  const [adminPassword, setAdminPassword] = useState("123456")

  const location = useLocation()

  const [routeName, setRouteName] = useState('')

  const [voiceName] = useState('Google UK English Female')
  
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items))
  }, [items])
  
  const addItem = useCallback((newItem) => {
    setItems([...items, newItem])
  }, [items])

  const updateItem = useCallback((itemId, updatedItem) => {
    setItems(items.map(item => {
      if (item.id === itemId) {
        return { ...item, ...updatedItem }
      }
      return item
    }))
  }, [items])

  const deleteItem = useCallback((itemId) => {
    setItems(items.filter(item => item.id !== itemId))
  }, [items])

  const handleClick = useCallback((ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }, [])
  
  const providerValue = useMemo(() => ({ref1, items, addItem, updateItem, deleteItem, items2, items3, items4, items5, handleClick, news, items6, items7, comments, articles, images, adminMail, adminPassword, setAdminMail, setAdminPassword}), [ref1, items, addItem, updateItem, deleteItem, items2, items3, items4, items5, handleClick, news, items6, items7, comments, articles, images, adminMail, adminPassword, setAdminMail, setAdminPassword])

  useEffect(() => {
    setRouteName(location.pathname)
  }, [location])

  useEffect(() => {
    const synth = window.speechSynthesis
    let utteranceText = routeName
    
    if (routeName === '/') {
      utteranceText = 'home'
    } else {
      utteranceText = routeName.replace('/', '')
    }
  
    const voices = synth.getVoices()
    const selectedVoice = voices.find((voice) => voice.name === voiceName || voice.lang === voiceName)
  
    if (selectedVoice) {
      const utterance = new SpeechSynthesisUtterance(utteranceText)
      utterance.voice = selectedVoice
      synth.speak(utterance)
    }
  }, [routeName, voiceName])
  
  return (
    <UseContext.Provider value={providerValue}>
      <Routes>
        <Route path='/' element={<Wrapper/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/additem' element={<AddItem/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/roadmap' element={<Roadmap/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/blog-single' element={<BlogSingle/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
    </UseContext.Provider>
  )
}

export default App
export const UseContext = createContext(null)
