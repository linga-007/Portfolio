import logo from './logo.svg';
import Nav from './Components/Nav/Nav';
import './App.css';
import Profiles from './Components/Profiles/Profiles';
import Home from './Components/Home.jsx/Home';
import Intro from './Components/Home.jsx/Intro';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Experience from './Components/Experience/Experience';
import Contact from './Components/Contact/Contact';
import Coding from './Components/Coding/Coding';
import linkedin from '../src/images/linkedin.svg'
import github from '../src/images/github.svg'
import instagram from '../src/images/instagram.svg'
function App() {
  return (
    <>
      <div className='flex justify-center items-center'>
        <Nav />
        <main className=''> 
          <Home />
          <Profiles />
          <Intro />
          <Skills />  
          <Projects/>
          <Coding />
          <Experience/>
          <Contact />
          <footer>
           <div className='mt-20 w-full bg-gray-700 h-fit flex justify-center items-center p-2 text-lg font-semibold flex-col gap-2 text-white'>
            <p>
              Built by Lingesh K V 🤝
            </p>
            <p>
            © 2024 Lingeshwaran K V. All rights reserved.
            </p>
            <div className='flex justify-evenly gap-5 items-center'>
              <a href="https://github.com/linga-007" target="_blank">
              <svg width="30px" height="30px" viewBox="0 0 20 20" version="1.1">
              <title>github [#142]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-140.000000, -7559.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      id="github-[#142]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
              </a>
              <a href="https://www.linkedin.com/in/lingeshwaran-k-v-581b57259/" target="_blank">
                <img src={linkedin} alt="LinkedIn logo" width={40} height={40} />
              </a>
              <a href="https://www.instagram.com/lingeshwarankv/" target="_blank">
              <img src={instagram} alt="instagram logo" width={30} height={30} /></a>
            </div>
           </div>
          </footer>
        </main>
      </div>
    </>
  );
}

export default App;
