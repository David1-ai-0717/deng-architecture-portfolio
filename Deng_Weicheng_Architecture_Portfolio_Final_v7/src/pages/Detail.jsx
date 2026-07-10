import {useParams} from 'react-router-dom';
import projects from '../data/projects';

export default function Detail(){
const p=projects.find(x=>x.id===useParams().id);
return <main className="detail">
<img className="cover" src={p.cover}/>
<h1>{p.title}</h1>
<h3>{p.en}</h3>
<p>{p.description}</p>
<h2>Design Process</h2>
<p>Research → Site Analysis → Concept → Form Generation → Final Presentation</p>
<div className="gallery">
{p.gallery.map(x=><img src={x}/>)}
</div>
</main>
}