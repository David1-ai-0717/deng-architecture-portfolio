import {motion} from 'framer-motion';
import projects from '../data/projects';

export default function Home(){
return <>
<section className="hero">
<motion.h1 initial={{opacity:0,y:60}} animate={{opacity:1,y:0}}>DENG<br/>WEICHENG</motion.h1>
<p>Architecture Portfolio</p>
</section>
<section className="works">
<h2>Selected Works</h2>
{projects.map((p,i)=>
<a className="project" href={"/project/"+p.id} key={p.id}>
<span>0{i+1}</span>
<h3>{p.title}</h3>
<small>{p.year}</small>
<img src={p.cover}/>
</a>)}
</section>
</>
}