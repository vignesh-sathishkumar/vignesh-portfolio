import { useState } from 'react'
import { LayoutDashboard, UserRound, BriefcaseBusiness, Layers3, FolderKanban, Mail, Menu, X, ArrowUpRight, Github, Linkedin, Download, ExternalLink, MapPin, ChevronRight, BarChart3, Database, Code2, Workflow, Target, CheckCircle2, BookOpen, TrendingUp } from 'lucide-react'
import './App.css'
import { portfolio } from './data/portfolioData'

const GITHUB = portfolio.projectGithub
const INVENTORY_GITHUB = portfolio.inventoryProject.github
const INVENTORY_DASHBOARD = '/inventory-dashboard/index.html'
const inventoryShot = { src: '/images/Inventory_Stockout_Dashboard.png', label: 'Inventory and stockout intelligence dashboard' }
const nav = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'about', label: 'About me', icon: UserRound },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness },
  { id: 'skills', label: 'Skills', icon: Layers3 },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'contact', label: 'Contact', icon: Mail },
]
const skills = portfolio.skills.map((skill, index) => ({ ...skill, icon: [Workflow, BarChart3, Code2][index] }))
const kpis = [
  { value: '3,000', label: 'Opportunities analyzed', icon: Database },
  { value: '907', label: 'Won opportunities', icon: CheckCircle2 },
  { value: '45.95%', label: 'Closed win rate', icon: Target },
  { value: '106.02%', label: 'Target achievement', icon: TrendingUp },
]
const shots = [
  { src: '/images/NexaCloud_Complete_Dashboard_Overview.png', label: 'Dashboard overview' },
  { src: '/images/NexaCloud_Dashboard_KPIs_Revenue_Insights.png', label: 'Revenue & KPI insights' },
  { src: '/images/NexaCloud_Dashboard_WinRate_SalesRep.png', label: 'Win rate & sales performance' },
]
function App() {
  const [active, setActive] = useState('overview')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const go = (id) => { setActive(id); setMobileOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }
  return <div className="shell">
    <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
      <div className="brand"><span className="brand-mark">VS<span>.</span></span><div><strong>Vignesh S.</strong><small>Portfolio / 2026</small></div><button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={20}/></button></div>
      <div className="side-label">NAVIGATION</div>
      <nav aria-label="Main navigation">{nav.map(({ id, label, icon: Icon }) => <button key={id} onClick={() => go(id)} className={`nav-item ${active === id ? 'active' : ''}`}><Icon size={18}/><span>{label}</span>{active === id && <span className="nav-dot"/>}</button>)}</nav>
      <div className="side-bottom"><div className="availability"><span className="pulse"/> Open to opportunities</div><p>Business Analyst · Operations · Pre-sales</p><a href={GITHUB} target="_blank" rel="noreferrer" className="sidebar-link"><Github size={16}/> View GitHub <ArrowUpRight size={15}/></a></div>
    </aside>
    {mobileOpen && <button className="overlay" onClick={() => setMobileOpen(false)} aria-label="Close navigation"/>}
    <main className="main">
      <header className="topbar"><button className="menu-button" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={23}/></button><div className="breadcrumb">PORTFOLIO <ChevronRight size={14}/> <span>OVERVIEW</span></div><div className="topbar-right"><span className="location"><MapPin size={14}/> {portfolio.preferredLocations}</span><span className="avatar">VS</span></div></header>
      <div className="content">
        <section id="overview" className="section hero"><div className="eyebrow"><span className="eyebrow-line"/> BUSINESS ANALYSIS · OPERATIONS · SOLUTIONING</div><div className="hero-grid"><div><h1>Turning complex processes into <em>clear business outcomes.</em></h1><p className="lead">{portfolio.summary}</p><div className="actions"><button className="btn primary" onClick={() => go('projects')}>Explore my work <ArrowUpRight size={17}/></button><a className="btn secondary" href="/resume/Vignesh_Sathishkumar_Resume.pdf" download>Download resume <Download size={16}/></a></div></div><div className="hero-panel"><div className="panel-top"><span>CAREER SNAPSHOT</span><span className="spark">✦</span></div><div className="big-number">4.5
           <span>years</span>
        </div><p>Enterprise banking and telecom experience at Infosys (Feb 2022 – Jan 2026).</p><div className="panel-rule"/><div className="panel-row"><span>Background</span><strong>Technology + MBA</strong></div><div className="panel-row"><span>Current focus</span><strong>Business & Operations</strong></div><div className="panel-row"><span>Location preference</span><strong>Bengaluru / Chennai</strong></div></div></div></section>
        <section id="about" className="section"><div className="section-heading"><div><span className="section-kicker">01 / INTRODUCTION</span><h2>About me</h2></div></div><div className="about-grid"><div className="surface about-text">{portfolio.about.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div><div className="surface focus-card"><span className="section-kicker">WHAT I BRING</span><div><CheckCircle2 size={18}/> Enterprise delivery experience</div><div><CheckCircle2 size={18}/> Cross-functional coordination</div><div><CheckCircle2 size={18}/> Analytical project portfolio</div><div><CheckCircle2 size={18}/> Business + technical perspective</div></div></div></section>
        <section id="experience" className="section"><div className="section-heading"><div><span className="section-kicker">02 / BACKGROUND</span><h2>Professional experience</h2></div></div><div className="timeline">{portfolio.experience.map(job => <div className="timeline-item surface" key={job.company}><div className="timeline-top"><div><h3>{job.title} <span>· {job.company}</span></h3><p>{job.subtitle}</p></div><span className="date">{job.dates}</span></div><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></div>)}</div><div className="section-heading extra-heading"><div><span className="section-kicker">EDUCATION</span><h2>Academic background</h2></div></div><div className="timeline">{portfolio.education.map(item => <div className="timeline-item surface" key={item.degree}><div className="timeline-top"><div><h3>{item.degree}</h3><p>{item.institution}</p></div><span className="date">{item.dates}</span></div></div>)}</div></section>
        <section id="skills" className="section"><div className="section-heading"><div><span className="section-kicker">03 / CAPABILITIES</span><h2>Skills & toolkit</h2></div></div><div className="skill-grid">{skills.map(({label,icon:Icon,items})=><div className="surface skill-card" key={label}><div className="skill-head"><span className="skill-icon"><Icon size={20}/></span><h3>{label}</h3></div><div className="chips">{items.map(item=><span className="chip" key={item}>{item}</span>)}</div></div>)}</div><p className="fine-print">Skills span professional experience, training and portfolio practice; proficiency varies by tool.</p><div className="surface certifications"><h3>Certifications</h3><div className="chips">{portfolio.certifications.map(item => <span className="chip" key={item}>{item}</span>)}</div></div></section>
        <section className="section metrics-section"><div className="section-heading compact"><div><span className="section-kicker">FEATURED PROJECT METRICS</span><h2>Analytics at a glance</h2></div><span className="tiny-tag">SYNTHETIC DATASET</span></div><div className="metrics">{kpis.map(({value,label,icon:Icon}) => <div className="metric" key={label}><div className="metric-icon"><Icon size={19}/></div><strong>{value}</strong><span>{label}</span></div>)}</div></section>
        <section id="projects" className="section"><div className="section-heading"><div><span className="section-kicker">04 / SELECTED WORK</span><h2>Featured project</h2></div><a className="text-link" href={GITHUB} target="_blank" rel="noreferrer">GitHub repository <ArrowUpRight size={16}/></a></div><article className="project surface"><div className="project-copy"><div className="project-tag"><span className="pulse"/> FEATURED CASE STUDY</div><h3>Revenue & Sales Operations Intelligence</h3><p>An end-to-end analytics portfolio project using generated CRM-style data, Python validation, Excel Power Query, PivotTables, KPI reporting and an interactive sales performance dashboard.</p><div className="project-chips"><span>Excel</span><span>Power Query</span><span>Python</span><span>GitHub</span><span>Sales Analytics</span></div><div className="project-actions"><a href={GITHUB} target="_blank" rel="noreferrer" className="btn primary">View source & README <ExternalLink size={16}/></a></div><small>Demonstration project using synthetic data; figures do not represent actual company results.</small></div><button className="project-preview" onClick={() => setSelectedImage(shots[0])} aria-label="Open dashboard screenshot"><img src={shots[0].src} alt="NexaCloud sales dashboard overview"/><span>VIEW DASHBOARD <ArrowUpRight size={15}/></span></button></article><div className="gallery">{shots.map((shot) => <button className="gallery-card" key={shot.src} onClick={() => setSelectedImage(shot)}><img src={shot.src} alt={shot.label}/><span>{shot.label} <ArrowUpRight size={15}/></span></button>)}</div><div className="section-heading extra-heading"><div><span className="section-kicker">PORTFOLIO PROJECT 02 / OPERATIONS ANALYTICS</span><h2>Inventory &amp; Stockout Intelligence</h2></div><span className="tiny-tag">SYNTHETIC DATASET</span></div>
          <article className="project surface inventory-project">
            <div className="project-copy">
              <div className="project-tag"><span className="pulse"/> OPERATIONS ANALYTICS CASE STUDY</div>
              <h3>{portfolio.inventoryProject.title}</h3>
              <p>{portfolio.inventoryProject.description}</p>
              <div className="inventory-stat-grid">{portfolio.inventoryProject.stats.map(stat => <div className="inventory-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
              <div className="project-chips">{portfolio.inventoryProject.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
              <div className="project-actions inventory-actions">
                <a href={INVENTORY_DASHBOARD} target="_blank" rel="noreferrer" className="btn primary">Explore live dashboard <ExternalLink size={16}/></a>
                <a href={INVENTORY_GITHUB} target="_blank" rel="noreferrer" className="btn secondary"><Github size={16}/> Source &amp; README</a>
              </div>
              <small>Demonstration using generated retail data. The live browser dashboard is complete; Power BI DAX measures are supplied, but no native .pbix report is included.</small>
            </div>
            <button className="project-preview" onClick={() => setSelectedImage(inventoryShot)} aria-label="Open inventory dashboard screenshot"><img src={inventoryShot.src} alt="Inventory and stockout intelligence dashboard"/><span>VIEW DASHBOARD PREVIEW <ArrowUpRight size={15}/></span></button>
          </article>
          <div className="section-heading extra-heading"><div><span className="section-kicker">PROFESSIONAL WORK</span><h2>Enterprise projects</h2></div></div><div className="timeline">{portfolio.professionalProjects.map(item => <div className="surface professional-project" key={item.name}><h3>{item.name}</h3><p>{item.description}</p></div>)}</div></section>
        <section id="contact" className="section contact-section"><div className="contact-box"><div><span className="section-kicker">05 / GET IN TOUCH</span><h2>Let's connect about what comes next.</h2><p>Exploring opportunities in business analysis, operations, solutioning and related roles.</p></div><div className="contact-actions"><a href={GITHUB} target="_blank" rel="noreferrer" className="btn primary"><Github size={17}/> GitHub profile</a><a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="btn secondary"><Linkedin size={16}/> LinkedIn</a><a href={`mailto:${portfolio.email}`} className="btn secondary"><Mail size={16}/> {portfolio.email}</a></div></div></section>
        <footer>© {new Date().getFullYear()} {portfolio.name} <span>Built with React & Vite</span></footer>
      </div>
    </main>
    {selectedImage && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.label} onClick={() => setSelectedImage(null)}><button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close image"><X size={22}/></button><img src={selectedImage.src} alt={selectedImage.label} onClick={e=>e.stopPropagation()}/><p>{selectedImage.label}</p></div>}
  </div>
}
export default App
