
export default function ProjectInfo({project}){
return <div className="info-grid">
<div className="info-box">YEAR<br/>{project.year}</div>
<div className="info-box">TYPE<br/>{project.type}</div>
<div className="info-box">DISCIPLINE<br/>Architecture</div>
<div className="info-box">TOOLS<br/>Rhino / Revit</div>
</div>
}
