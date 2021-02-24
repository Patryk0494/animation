import './App.css';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger} from "gsap/ScrollTrigger"
import { ReactComponent as Taken } from "./assets/taken.svg";

function App() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;
  
    const ufo = elements.getElementById('ufo');
    const taken = elements.getElementById('taken');
    const witness = elements.getElementById('witness');
    const rays = elements.getElementById('rays');
    
    gsap.set([ufo, ...rays.children], {autoAlpha: 0})
    gsap.set(ufo, {x: '90%'})

    const tl = gsap.timeline({defaults: {ease: 'circ'}})

    tl.fromTo( ufo, {scale: 0.2}, {duration: 3, scale:1, autoAlpha: 1, x: 0})
    .to(rays.children, {duration: 1.5, autoAlpha:1, ease: 'rough', stagger: 0.2})
    .to(taken, {delay: -1, duration: 1.5, y: '-=300', autoAlpha: 0})
    .to(witness, {delay: -1.2, duration: 1.5, x: 100})
    .to(rays, {duration: .5, autoAlpha: 0})
    .to(ufo, {duration: 2, scale: 4, x: '-200%', y: '-200%', autoAlpha: 0})
  })


  return (
    <div className="App" ref={wrapper}>
        <Taken />
    </div>
  );
}

export default App;
