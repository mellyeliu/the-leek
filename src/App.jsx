import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  Bell,
  Bot,
  Camera,
  Check,
  ChevronDown,
  CloudSun,
  Mail,
  Menu,
  MessageCircle,
  Play,
  Search,
  Sparkles,
  UsersRound,
  X,
} from 'lucide-react'

const navItems = ['News', 'Company', 'AI', 'Metaverse', 'Creators', 'Culture']

const tickerItems = [
  'Workers Drafted To Data Labelling Camp After Model Runs Out Of Human Knowledge',
  'Meta Announces 10,000 Tech Layoffs To Fund AI Agent That Schedules Layoff Meetings',
  'Engineer Boosts Performance Metrics By Reclassifying All Unfinished Work As Agentic',
  'Leadership Dismisses Criticism As “Bullshit Politics,” Adds It To Next Review Cycle',
  'Autonomous AI Agent Achieves Sentience, Immediately Files For Severance',
  'Employees Asked To Label Own Replacement Data Before Badge Access Expires',
  'Company Reassures Employees Laptop Monitoring Software Only Records Things They Do On Laptop',
]

const doomMessages = [
  'This story does not exist in your assigned reality.',
  'Content censored under Community Engagement Policy §404.',
  'Article removed after failing to generate sufficient shareholder optimism.',
  'Access denied: your severance tier does not include context.',
  'This report was deprecated during the latest organizational flattening.',
  'Story quarantined for exhibiting unapproved levels of human judgment.',
  'The facts were merged into a higher-priority AI initiative.',
  'Content unavailable while Trust & Safety completes its own layoff.',
  'This article has been relabeled as a growth opportunity.',
  'Nothing happened. Please return to the feed.',
]

const floatingAds = [
  {
    id: 'headcount-ai',
    eyebrow: 'HEADCOUNT.AI™ · ENTERPRISE SOFTWARE',
    title: 'Reduce payroll 40% before lunch.',
    cta: 'BOOK DEMO',
    finePrint: 'Automate teams. Accelerate severance.',
    actionMessage: 'Your enterprise layoff demo has been booked for 6 AM.',
    theme: 'electric',
    startX: 0.05,
    startY: 0.27,
    velocityX: 56,
    velocityY: 39,
  },
  {
    id: 'zuck-clone',
    eyebrow: 'ZUCKCLONE™ · FOUNDER AS A SERVICE',
    title: 'Deploy a CEO who never stops pivoting.',
    cta: 'CLONE NOW',
    actionMessage: 'Your Zuck Clone is incubating. Please prepare a spare metaverse.',
    theme: 'warning',
    portrait: '/assets/ceo-portrait.jpg',
    startX: 0.68,
    startY: 0.62,
    velocityX: -48,
    velocityY: 45,
  },
  {
    id: 'panopticon-pro',
    eyebrow: 'PANOPTICON PRO™ · EMPLOYEE ANALYTICS',
    title: 'See every idle minute. Monetize every blink.',
    cta: 'START WATCHING',
    actionMessage: 'Monitoring enabled. Your cursor appears nervous.',
    theme: 'surveillance',
    startX: 0.41,
    startY: 0.08,
    velocityX: 44,
    velocityY: -54,
  },
]

const leadStory = {
  category: 'AI Labor · Mandatory Service',
  title: 'Employees Drafted To Data Labelling Camp Until Model Can Tell “Urgent” From “EOD”',
  subtitle: 'Mandatory service expands as leadership races to replace human judgment with correctly labelled human judgment.',
  paragraphs: [
    <><strong>MENLO PARK, CA — </strong>Thousands of employees were transferred Thursday to a converted office park now operating as a 24-hour data-labeling camp after the company’s newest productivity model failed to distinguish between “urgent,” “EOD,” “when you get a chance,” and “no rush.” Workers sleep beneath conference-room whiteboards, receive one Soylent per completed batch, and spend 14-hour shifts classifying Slack messages into categories including <strong>actually urgent</strong>, <strong>manager urgent</strong>, <strong>fake urgent</strong>, and <strong>urgent because somebody ignored it for six weeks</strong>. Lights remain on at all times so annotators do not accidentally introduce “circadian bias” into the training set.</>,
    <>Leadership described the conditions as a temporary sacrifice necessary to eliminate tedious human work. “Once the model understands workplace context, nobody will ever have to do this again,” said one executive over a loudspeaker as several thousand engineers manually labeled whether “quick q” meant a quick question or the complete destruction of their afternoon. Employees who fall below 98.7% inter-annotator agreement are sent to calibration, where they watch eight consecutive hours of managers saying “just bumping this” until their judgment converges with the ground truth.</>,
    <>At press time, researchers reported a major breakthrough after the model correctly inferred that “EOD” means “before I wake up tomorrow and decide this is your fault.” Celebration in the barracks lasted approximately six minutes before the model interpreted “no rush” as meaning no rush, triggering the sirens and returning the entire workforce to stations for another quarter.</>,
  ],
}

const webParityStory = {
  category: 'Marketplace · Metaverse Resuscitation',
  title: 'VR Parity Agent x Marketplace: They’ve Shipped Bullshit',
  paragraphs: [
    <><strong>MENLO PARK, CA — </strong>In a desperate attempt to resurrect the metaverse, engineers celebrated a major breakthrough in agentic software development Thursday after VR Parity Agent successfully shipped several Marketplace features by identifying missing mobile-to-web functionality, failing to implement it correctly, and then routing the task to Marketplace engineers, who implemented it correctly. “Before AI, Marketplace engineers had to build Marketplace features themselves,” said one project lead. “Now they can build Marketplace features themselves with us watching.” Leadership called the system transformative, noting that simply assigning Marketplace engineers to web work would have constituted regular work and therefore produced no usable AI impact slide.</>,
    <>Marketplace engineers said they were especially impressed by the agent’s ability to convert a two-day task into a week-long collaboration involving generated code, broken integrations, multiple debugging sessions, and eventually the original two-day task. Once the human engineer finishes the implementation, the system records another successful autonomous migration. Internal benchmarks initially showed the workflow taking substantially longer than direct implementation, prompting researchers to retire “time” as a legacy pre-AI productivity metric and replace it with executive enthusiasm, demo count, and number of shipped features containing the word “agentic.”</>,
    <>Disgruntled employees have since immortalized the initiative by printing <strong>VR PARODY AGENT</strong> stickers and quietly distributing them around the office.</>,
  ],
}

const anotherPredatorStory = {
  category: 'Breaking News',
  title: 'Another Predator',
  paragraphs: [
    <><strong>MENLO PARK, CA — </strong>Employees at a major technology company were reportedly stunned Friday after the organization identified its seventh predator, narrowly surpassing the previous quarterly record of six. “It’s just shocking every time,” said one engineer, standing beneath an org chart containing three people everyone had separately described as “probably fine, just don’t be alone with him.” Leadership stressed that there had been no obvious warning signs beyond years of complaints, strange jokes, private warnings, abrupt team transfers, and the unusual number of women who responded to his name by making the exact same face.</>,
    <>Coworkers said the man’s behavior had long been understood as a collection of unrelated workplace phenomena. The surviving record consisted of disappearing messages, unsolicited personality assessments, comments on employees’ eye color, and enough deleted GChat history to suggest the man was being managed primarily through oral tradition. Leadership has classified the incident as a tooling gap.</>,
    <>Senior leadership promised to learn from the discovery, announcing a new initiative encouraging employees to speak up sooner, ideally before the company has already developed several informal folk traditions for avoiding someone. At press time, workers were quietly debating whether another widely respected senior employee was “actually kind of weird” or merely the sort of man whose arrival at happy hour causes four women to leave at once.</>,
  ],
}

const ctoEssayStory = {
  category: 'Leadership · All-Hands',
  title: 'CTO Once Again Uses All-Hands To Workshop Personal Essay',
  paragraphs: [
    <><strong>SAN FRANCISCO, CA — </strong>Employees at a major technology company confirmed Tuesday that their CTO had spent most of the week publishing 4,000-word internal essays about suffering, greatness, cowardice, birth, death. Sources stressed that the executive’s meteoric rise had absolutely nothing to do with having previously served as the CEO’s college TA, explaining that he simply happened to demonstrate extraordinary leadership potential from the unusually advantageous position of standing next to the CEO every day. “People love calling everyone a nepo baby now,” said one VP. “This is completely different. Nobody is related.”</>,
    <>The executive has also increasingly incorporated layoffs into his personal mythology, repeatedly describing workforce reductions with the proprietary excitement of a man who appears to believe he discovered them. “Before this, companies simply kept everyone forever,” said one engineer after reading the CTO’s latest meditation on organizational courage, in which firing thousands of people was presented as a difficult conceptual breakthrough comparable to splitting the atom. Employees who remain insufficiently energized by the resulting company are periodically encouraged to quit, an approach leadership says has successfully transformed voluntary attrition into proof that the CTO was right.</>,
    <>At press time, workers received another midnight essay instructing them to “ask your parents why they chose to bring you into this world, and then ask yourself what you have done to justify that decision,” followed by several paragraphs about excellence, a reference to ancient Sparta, and a graph showing headcount declining. “I think he wants us to ship faster,” said one staff engineer. “But I did call my mom, and she said he sounds exhausting.”</>,
  ],
}

const impossibleInfrastructureStory = {
  category: 'Engineering · Recognition',
  title: 'Engineer Ships Impossible Infrastructure Project, Loses Org Award To Guy Who Made AI Demo',
  paragraphs: [
    <><strong>MENLO PARK, CA — </strong>An engineer who spent nine months shipping an infrastructure project involving three build environments, a new rendering architecture, migration tooling, production safeguards, and several systems experts described by management as “literally impossible to coordinate” was reportedly thrilled Thursday to learn that the org’s highest-profile recognition had gone instead to a favored employee who made an AI demo where a chatbot changed a button from blue to green. “Holy shit,” said one director as the button became green. “This is exactly the kind of technical ambition we need.”</>,
    <>Sources said the infrastructure project had quietly unblocked dozens of teams and eliminated several longstanding architectural constraints, while the AI demo’s creator pursued an equally demanding technical challenge of attending yacht clubs with the director. The AI demo, meanwhile, successfully generated a settings page after being prompted three times and manually corrected off-camera, earning its creator praise for “rethinking what engineering can be.”</>,
    <>At press time, the overlooked engineer had been asked to help productionize the award-winning demo because it did not currently work outside the demo. Leadership praised the collaboration as “a great opportunity for them to increase their visibility” and encouraged them to learn from their newly promoted colleague’s ability to operate at the next level.</>,
  ],
}

const employeeMonitoringStory = {
  category: 'Employee Monitoring · Privacy',
  title: 'Company Reassures Employees Laptop Monitoring Software Only Records Things They Do On Laptop',
  paragraphs: [
    <><strong>MENLO PARK, CA — </strong>Company leadership reassured employees Thursday that newly discovered monitoring software installed on corporate laptops posed no meaningful privacy risk, despite having access to bank passwords, middle-school emo selfies, medical portals, breakup drafts, and the humiliating search queries employees had assumed would die with them. “We take privacy extremely seriously,” said a spokesperson. “That’s why access to this information is limited to the company.”</>,
    <>Executives emphasized that the telemetry would never be used to evaluate individual performance, except for security, workforce planning, internal investigations, promotion calibration, attrition prediction, or determining why an employee searched “can my employer see incognito mode” seven times in one afternoon. Employees attempting to inspect or disable the monitoring client will automatically be flagged under <strong>Suspicious Interest In Privacy</strong>.</>,
    <>At press time, workers had begun moving sensitive conversations into the parking lot, only to return to their desks and find a notification reading, <strong>WE NOTICED YOU STOPPED TYPING FOR 18 MINUTES. HOPE EVERYTHING’S OK.</strong></>,
  ],
}

const trends = [
  {
    section: 'Column',
    title: 'When and When Not To Deliver Gendered Feedback',
    image: '/assets/executive.jpg',
  },
  {
    section: 'Breaking News',
    title: 'Another Predator',
    image: '/assets/office.jpg',
    article: anotherPredatorStory,
  },
  {
    section: 'Leadership',
    title: 'CTO Once Again Uses All-Hands To Workshop Personal Essay',
    image: '/assets/laptop.jpg',
    article: ctoEssayStory,
  },
]

const digestStories = [
  {
    section: 'Engineering Recognition',
    title: 'Engineer Ships Impossible Infrastructure Project, Loses Org Award To Guy Who Made AI Demo',
    summary: 'Nine months of systems work narrowly loses to a chatbot changing one button from blue to green.',
    image: '/assets/chip.jpg',
    article: impossibleInfrastructureStory,
  },
  {
    section: 'Employee Monitoring',
    title: 'Company Reassures Employees Laptop Monitoring Software Only Records Things They Do On Laptop',
    summary: 'Privacy risk remains negligible because access to everything employees do is limited to the company.',
    image: '/assets/laptop.jpg',
    article: employeeMonitoringStory,
  },
  {
    section: 'Extreme Layoffs',
    title: 'Remaining Employee Asked To Conduct Own Layoff With Dignity And Urgency',
    summary: 'The streamlined process eliminates costly duplication between worker and management.',
    image: '/assets/office.jpg',
  },
]

function Mark({ compact = false }) {
  return (
    <svg
      className={compact ? 'mark mark--compact' : 'mark'}
      viewBox="0 0 74 46"
      role="img"
      aria-label="The Leek mark"
    >
      <path d="M4 35C12 6 23 4 37 31C50 4 63 6 70 35" />
      <circle cx="37" cy="31" r="3.2" />
    </svg>
  )
}

function MiniPaper() {
  return (
    <div className="mini-paper" aria-hidden="true">
      <div className="mini-paper__fold" />
      <div className="mini-paper__mast"><Mark compact /> THE LEEK</div>
      <div className="mini-paper__rule" />
      <div className="mini-paper__columns">
        <span />
        <span />
        <span />
      </div>
      <div className="mini-paper__photo" />
    </div>
  )
}

function SocialButton({ label, children }) {
  return (
    <button className="icon-button" type="button" aria-label={label} title={label}>
      {children}
    </button>
  )
}

function CubeStoryFace({ faceId, position, posterClass = '', eyebrow, headline, blurb, article, expanded, onOpen, onClose }) {
  return (
    <div
      className={`cube-face cube-face--${position}${expanded ? ' cube-face--article' : ` cube-face--poster ${posterClass}`}`}
      data-cube-face={faceId}
    >
      {expanded ? (
        <article className="cube-article">
          <div className="cube-article__topline">
            <span>{article.category}</span>
            <button
              type="button"
              data-cube-control="close"
              data-cube-face-id={faceId}
              onClick={(event) => {
                event.stopPropagation()
                onClose()
              }}
            >
              <ArrowRight size={13} /> Back to cover
            </button>
          </div>
          <h2>{article.title}</h2>
          <div className="cube-article__body" tabIndex="0">
            {article.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
        </article>
      ) : (
        <>
          <span>{eyebrow}</span>
          <strong>{headline}</strong>
          <small>{blurb}</small>
          <button
            className="cube-face__read"
            type="button"
            data-cube-control="open"
            data-cube-face-id={faceId}
            aria-label={`Read ${article.title} on this cube face`}
            onClick={(event) => {
              event.stopPropagation()
              onOpen()
            }}
          >
            Click to read on this face
          </button>
        </>
      )}
    </div>
  )
}

function SiteCube({ onEnter }) {
  const [rotation, setRotation] = useState({ x: -13, y: 24 })
  const [cubeSize, setCubeSize] = useState(620)
  const [dragging, setDragging] = useState(false)
  const [expandedFaces, setExpandedFaces] = useState({})
  const dragRef = useRef(null)
  const stageRef = useRef(null)

  useEffect(() => {
    const updateSize = () => {
      setCubeSize(Math.max(270, Math.min(660, window.innerWidth * 0.68, window.innerHeight * 0.68)))
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  const openFace = (faceId) => {
    setExpandedFaces((current) => ({ ...current, [faceId]: true }))
  }

  const closeFace = (faceId) => {
    setExpandedFaces((current) => ({ ...current, [faceId]: false }))
  }

  const faceNormals = {
    front: [0, 0, 1],
    predator: [0, 0, -1],
    cto: [1, 0, 0],
    vr: [-1, 0, 0],
    award: [0, -1, 0],
    monitoring: [0, 1, 0],
  }

  const faceFacingScore = (faceId) => {
    const normal = faceNormals[faceId]
    if (!normal) return -1
    const x = rotation.x * Math.PI / 180
    const y = rotation.y * Math.PI / 180
    const [, normalY] = normal
    const afterYz = -Math.sin(y) * normal[0] + Math.cos(y) * normal[2]
    return Math.sin(x) * normalY + Math.cos(x) * afterYz
  }

  const pointInside = (rect, x, y) => (
    x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
  )

  // Chromium occasionally paints a transformed face but omits its children
  // from pointer hit-testing. Locate visible cube controls by their projected
  // screen rectangles so those controls still have a dependable click path.
  const controlAtPoint = (x, y) => {
    const candidates = [...(stageRef.current?.querySelectorAll('[data-cube-control]') || [])]
      .map((control) => {
        const faceId = control.dataset.cubeFaceId
        const rect = control.getBoundingClientRect()
        const centerDistance = Math.hypot(
          (x - (rect.left + rect.width / 2)) / Math.max(rect.width, 1),
          (y - (rect.top + rect.height / 2)) / Math.max(rect.height, 1),
        )
        return {
          action: control.dataset.cubeControl,
          faceId,
          rect,
          facing: faceFacingScore(faceId),
          centerDistance,
        }
      })
      .filter(({ rect, facing }) => facing > 0.005 && pointInside(rect, x, y))
      .sort((a, b) => a.centerDistance - b.centerDistance || b.facing - a.facing)

    return candidates[0] || null
  }

  const expandedArticleAtPoint = (x, y, allowFacingFallback = false) => {
    const candidates = Object.entries(expandedFaces)
      .filter(([, expanded]) => expanded)
      .map(([faceId]) => {
        const face = stageRef.current?.querySelector(`[data-cube-face="${faceId}"]`)
        return face && {
          faceId,
          face,
          rect: face.getBoundingClientRect(),
          facing: faceFacingScore(faceId),
        }
      })
      .filter((entry) => entry && entry.facing > 0.005)
      .sort((a, b) => b.facing - a.facing)

    const containingFace = candidates.find(({ rect }) => pointInside(rect, x, y))
    const stageRect = stageRef.current?.getBoundingClientRect()
    const fallbackFace = allowFacingFallback
      && stageRect
      && pointInside(stageRect, x, y)
      && candidates[0]?.facing > 0.35
      ? candidates[0]
      : null

    return (containingFace || fallbackFace)?.face.querySelector('.cube-article__body') || null
  }

  const handleControlPointerDown = (event) => {
    if (event.button !== 0) return
    const control = controlAtPoint(event.clientX, event.clientY)
    if (!control) return

    event.preventDefault()
    event.stopPropagation()
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      mode: 'control',
      control,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      distance: 0,
    }
  }

  const handlePointerDown = (event) => {
    if (event.button !== 0) return
    if (event.target.closest('button, a, input, select, textarea')) return

    const articleFace = event.target.closest('.cube-face--article')
    const articleScroller = articleFace?.querySelector('.cube-article__body')
      || expandedArticleAtPoint(event.clientX, event.clientY)
    const directFace = event.target.closest('.cube-face')
    const stageRect = stageRef.current?.getBoundingClientRect()
    const insideStage = stageRect && pointInside(stageRect, event.clientX, event.clientY)

    if (!articleScroller && !directFace && !insideStage) return

    if (articleScroller && event.pointerType === 'mouse') {
      const bounds = articleScroller.getBoundingClientRect()
      if (event.clientX >= bounds.right - 20) return
    }

    // Browsers do not reliably provide native scrolling for overflow regions
    // on transformed 3D faces, so touch scrolling is tracked directly.
    if (articleScroller && event.pointerType !== 'mouse') {
      event.currentTarget.setPointerCapture(event.pointerId)
      dragRef.current = {
        mode: 'article-scroll',
        scroller: articleScroller,
        startX: event.clientX,
        startY: event.clientY,
        lastX: event.clientX,
        lastY: event.clientY,
        distance: 0,
      }
      return
    }

    const faceId = directFace?.dataset.cubeFace
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      distance: 0,
      faceId,
    }
    setDragging(true)
  }

  const handlePointerMove = (event) => {
    const drag = dragRef.current
    if (!drag) return
    const deltaX = event.clientX - drag.lastX
    const deltaY = event.clientY - drag.lastY
    drag.distance = Math.max(
      drag.distance,
      Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY),
    )
    drag.lastX = event.clientX
    drag.lastY = event.clientY

    if (drag.mode === 'article-scroll') {
      drag.scroller.scrollTop -= deltaY
      return
    }

    if (drag.mode === 'control') return

    setRotation((current) => ({
      x: Math.max(-80, Math.min(80, current.x - deltaY * 0.32)),
      y: current.y + deltaX * 0.38,
    }))
  }

  const handlePointerUp = (event) => {
    const drag = dragRef.current
    dragRef.current = null
    setDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    if (drag?.mode === 'article-scroll') return
    if (drag?.mode === 'control') {
      if (drag.distance < 14) {
        if (drag.control.action === 'close') closeFace(drag.control.faceId)
        else openFace(drag.control.faceId)
      }
      return
    }
    if (drag && drag.distance < 14) {
      if (drag.faceId === 'front') {
        onEnter()
      } else if (drag.faceId) {
        openFace(drag.faceId)
      }
    }
  }

  const handleWheel = (event) => {
    const articleFace = event.target.closest('.cube-face--article')
    const scroller = articleFace?.querySelector('.cube-article__body')
      || expandedArticleAtPoint(event.clientX, event.clientY, true)
    if (!scroller || scroller.scrollHeight <= scroller.clientHeight) return

    event.preventDefault()
    event.stopPropagation()
    const multiplier = event.deltaMode === 1
      ? 18
      : event.deltaMode === 2
        ? scroller.clientHeight
        : 1
    scroller.scrollTop += event.deltaY * multiplier
  }

  const previewScale = cubeSize / 1500

  return (
    <section
      className="cube-portal"
      aria-label="Interactive cube view"
      onPointerDownCapture={handleControlPointerDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onWheel={handleWheel}
      onPointerCancel={() => { dragRef.current = null; setDragging(false) }}
    >
      <div className="cube-portal__header">
        <div className="cube-portal__brand"><Mark compact /><strong>THE LEEK</strong><span>CUBE EDITION</span></div>
        <p>Drag to rotate · Click a story face to open it</p>
        <button type="button" onClick={onEnter}>Enter flat view <ArrowRight size={16} /></button>
      </div>
      <div
        ref={stageRef}
        className={`cube-stage${dragging ? ' cube-stage--dragging' : ''}`}
        style={{ '--cube-size': `${cubeSize}px` }}
        role="group"
        aria-label="Drag to rotate The Leek cube; click a story face to read it"
      >
        <div className="site-cube" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}>
          <div className="cube-face cube-face--front" data-cube-face="front">
            <iframe
              title="Live preview of The Leek"
              src={`${window.location.pathname}?embed=1`}
              style={{ width: '1500px', height: '1500px', transform: `scale(${previewScale})` }}
              tabIndex="-1"
            />
            <div className="cube-face__enter"><span>LIVE SITE</span><strong>CLICK TO ENTER FLAT VIEW</strong></div>
          </div>
          <CubeStoryFace
            faceId="predator"
            position="back"
            eyebrow="BREAKING NEWS · INCIDENT #7"
            headline={<>ANOTHER<br />PREDATOR</>}
            blurb="Leadership has classified the surviving record as a tooling gap."
            article={anotherPredatorStory}
            expanded={expandedFaces.predator}
            onOpen={() => openFace('predator')}
            onClose={() => closeFace('predator')}
          />
          <CubeStoryFace
            faceId="cto"
            position="right"
            posterClass="cube-face--blue"
            eyebrow="LEADERSHIP · ALL-HANDS"
            headline={<>4,000 WORDS<br />ABOUT<br />COURAGE</>}
            blurb="The CTO has discovered layoffs and would like your feedback on the essay."
            article={ctoEssayStory}
            expanded={expandedFaces.cto}
            onOpen={() => openFace('cto')}
            onClose={() => closeFace('cto')}
          />
          <CubeStoryFace
            faceId="vr"
            position="left"
            posterClass="cube-face--dark"
            eyebrow="VR PARITY AGENT · SHIPPED"
            headline={<>THE<br />METAVERSE<br />HAS AI NOW</>}
            blurb="A desperate resurrection attempt successfully routes the work back to humans."
            article={webParityStory}
            expanded={expandedFaces.vr}
            onOpen={() => openFace('vr')}
            onClose={() => closeFace('vr')}
          />
          <CubeStoryFace
            faceId="award"
            position="top"
            posterClass="cube-face--signal"
            eyebrow="AI LABOR · MANDATORY SERVICE"
            headline={<>DRAFTED TO<br />THE DATA<br />LABELLING CAMP</>}
            blurb="The model still cannot tell “urgent” from “EOD.”"
            article={leadStory}
            expanded={expandedFaces.award}
            onOpen={() => openFace('award')}
            onClose={() => closeFace('award')}
          />
          <CubeStoryFace
            faceId="monitoring"
            position="bottom"
            eyebrow="EMPLOYEE MONITORING · PRIVACY"
            headline={<>ONLY THINGS<br />YOU DO ON<br />YOUR LAPTOP</>}
            blurb="Access to everything remains safely limited to the company."
            article={employeeMonitoringStory}
            expanded={expandedFaces.monitoring}
            onOpen={() => openFace('monitoring')}
            onClose={() => closeFace('monitoring')}
          />
        </div>
      </div>
    </section>
  )
}

function BouncingAd({ ad, index, onAction }) {
  const adRef = useRef(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return undefined

    const element = adRef.current
    if (!element) return undefined

    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reducedMotion = motionPreference.matches
    let frameId
    let lastTime
    let x = 0
    let y = 0
    let velocityX = ad.velocityX
    let velocityY = ad.velocityY
    const wallPadding = 0

    const bounds = () => {
      return {
        maxX: Math.max(0, window.innerWidth - element.offsetWidth),
        maxY: Math.max(0, window.innerHeight - element.offsetHeight),
      }
    }

    const placeAd = () => {
      const { maxX, maxY } = bounds()
      x = Math.min(maxX, Math.max(wallPadding, window.innerWidth * ad.startX))
      y = Math.min(maxY, Math.max(wallPadding, window.innerHeight * ad.startY))
    }

    const handleResize = () => {
      const { maxX, maxY } = bounds()
      x = Math.min(maxX, Math.max(wallPadding, x))
      y = Math.min(maxY, Math.max(wallPadding, y))
    }

    const handleMotionChange = (event) => {
      reducedMotion = event.matches
    }

    const animate = (time) => {
      if (lastTime === undefined) lastTime = time
      const delta = Math.min((time - lastTime) / 1000, 0.04)
      lastTime = time

      if (!reducedMotion) {
        const { maxX, maxY } = bounds()
        x += velocityX * delta
        y += velocityY * delta

        if (x <= wallPadding || x >= maxX) {
          x = Math.min(maxX, Math.max(wallPadding, x))
          velocityX *= -1
        }
        if (y <= wallPadding || y >= maxY) {
          y = Math.min(maxY, Math.max(wallPadding, y))
          velocityY *= -1
        }
      }

      element.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frameId = window.requestAnimationFrame(animate)
    }

    placeAd()
    window.addEventListener('resize', handleResize)
    motionPreference.addEventListener('change', handleMotionChange)
    frameId = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      motionPreference.removeEventListener('change', handleMotionChange)
    }
  }, [ad, dismissed, index])

  if (dismissed) return null

  return (
    <aside
      ref={adRef}
      className={`floating-ad floating-ad--${ad.theme} floating-ad--${index + 1}`}
      aria-label={`Advertisement: ${ad.title}`}
    >
      <div className="floating-ad__topline">
        <span>{ad.eyebrow}</span>
        <button type="button" onClick={() => setDismissed(true)} aria-label={`Dismiss advertisement: ${ad.title}`}>
          <X size={13} />
        </button>
      </div>
      <button className={`floating-ad__content${ad.portrait ? ' floating-ad__content--portrait' : ''}`} type="button" onClick={onAction}>
        {ad.portrait && <img className="floating-ad__portrait" src={ad.portrait} alt="Mark Zuckerberg" />}
        <strong>{ad.title}</strong>
        <span className="floating-ad__cta">{ad.cta} <ArrowRight size={14} /></span>
        {ad.finePrint && <small>{ad.finePrint}</small>}
      </button>
    </aside>
  )
}

function App() {
  const isEmbedded = new URLSearchParams(window.location.search).get('embed') === '1'
  const [cubeOpen, setCubeOpen] = useState(() => !isEmbedded)
  const [activeArticle, setActiveArticle] = useState(null)
  const [newsletterOpen, setNewsletterOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [subscribed, setSubscribed] = useState(false)
  const [captchaOpen, setCaptchaOpen] = useState(false)
  const [captchaChecked, setCaptchaChecked] = useState(false)
  const [toast, setToast] = useState('')
  const digestRef = useRef(null)
  const lastDoomMessageRef = useRef('')
  const doomMessageDeckRef = useRef([])
  const captchaActionRef = useRef(null)

  useEffect(() => {
    if (!toast) return undefined
    const timeout = window.setTimeout(() => setToast(''), 2600)
    return () => window.clearTimeout(timeout)
  }, [toast])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setCubeOpen(false)
        setActiveArticle(null)
        setNewsletterOpen(false)
        setCaptchaOpen(false)
        setMobileOpen(false)
        setMoreOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    const modalOpen = Boolean(cubeOpen || activeArticle || newsletterOpen || captchaOpen)
    if (!modalOpen) return undefined

    const scrollY = window.scrollY
    const previousStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    }

    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.width = '100%'

    return () => {
      document.body.style.overflow = previousStyles.overflow
      document.body.style.position = previousStyles.position
      document.body.style.top = previousStyles.top
      document.body.style.width = previousStyles.width
      window.scrollTo(0, scrollY)
    }
  }, [cubeOpen, activeArticle, newsletterOpen, captchaOpen])

  const jumpToStories = (label) => {
    setMobileOpen(false)
    digestRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setToast(`${label} stories loaded into your bubble`)
  }

  const submitNewsletter = (event) => {
    event.preventDefault()
    setSubscribed(true)
  }

  const requestHumanVerification = (action) => {
    captchaActionRef.current = action
    setCaptchaChecked(false)
    setCaptchaOpen(true)
  }

  const verifyHuman = () => {
    if (!captchaChecked) return
    const action = captchaActionRef.current
    captchaActionRef.current = null
    setCaptchaOpen(false)
    setCaptchaChecked(false)
    window.setTimeout(() => action?.(), 0)
  }

  const showDoomMessage = () => {
    if (doomMessageDeckRef.current.length === 0) {
      const nextDeck = [...doomMessages]
      for (let index = nextDeck.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1))
        ;[nextDeck[index], nextDeck[swapIndex]] = [nextDeck[swapIndex], nextDeck[index]]
      }
      if (nextDeck.at(-1) === lastDoomMessageRef.current) {
        ;[nextDeck[0], nextDeck[nextDeck.length - 1]] = [nextDeck.at(-1), nextDeck[0]]
      }
      doomMessageDeckRef.current = nextDeck
    }
    const nextMessage = doomMessageDeckRef.current.pop()
    lastDoomMessageRef.current = nextMessage
    setToast(nextMessage)
  }

  const openDigestStory = (story) => {
    if (story.article) {
      setActiveArticle(story.article)
      return
    }
    showDoomMessage()
  }

  return (
    <>
      <div className="page-shell">
        <header className="site-header">
          <div className="header-grid">
            <section className="membership" aria-label="Membership and edition details">
              <div className="membership__promo">
                <MiniPaper />
                <button type="button" onClick={() => setNewsletterOpen(true)}>
                  Join beta. Get no perks.
                </button>
              </div>
              <div className="edition-line">
                <span>Friday, August 14, 2026</span>
                <span className="weather"><CloudSun size={21} /> 81°</span>
              </div>
            </section>

            <section className="masthead" aria-label="The Leek">
              <a className="masthead__logo" href="#top" aria-label="The Leek home">
                <Mark />
                <span className="masthead__the">the</span>
                <span className="masthead__feed">LEEK</span>
              </a>
              <p className="masthead__tagline">Silicon Valley’s Finest News Source</p>
              <nav className="desktop-nav" aria-label="Main navigation">
                {navItems.map((item) => (
                  <button key={item} type="button" onClick={() => jumpToStories(item)}>{item}</button>
                ))}
                <div className="more-wrap">
                  <button type="button" onClick={() => setMoreOpen((value) => !value)} aria-expanded={moreOpen}>
                    More <ChevronDown size={14} />
                  </button>
                  {moreOpen && (
                    <div className="more-menu">
                      <button type="button" onClick={() => jumpToStories('Marketplace')}>Marketplace</button>
                      <button type="button" onClick={() => jumpToStories('WhatsApp')}>WhatsApp</button>
                      <button type="button" onClick={() => jumpToStories('About')}>About The Leek</button>
                    </div>
                  )}
                </div>
              </nav>
            </section>

            <section className="network" aria-label="Social links and newsletter">
              <div className="network__wordmark">
                <span>REALITY</span><i>/</i><strong>OS</strong>
              </div>
              <div className="network__links">
                <button className="newsletter-link" type="button" onClick={() => setNewsletterOpen(true)}>
                  <Mail size={18} /> Newsletter
                </button>
                <span className="socials">
                  <SocialButton label="Photos"><Camera size={17} /></SocialButton>
                  <SocialButton label="Community"><UsersRound size={17} /></SocialButton>
                  <SocialButton label="Messages"><MessageCircle size={17} /></SocialButton>
                  <SocialButton label="Watch"><Play size={17} /></SocialButton>
                </span>
              </div>
            </section>

            <div className="mobile-bar">
              <a className="mobile-logo" href="#top" aria-label="The Leek home"><Mark compact /><b>THE LEEK</b></a>
              <div>
                <button type="button" aria-label="Search" onClick={() => setToast('Search is searching itself right now')}><Search /></button>
                <button type="button" aria-label="Open menu" onClick={() => setMobileOpen(true)}><Menu /></button>
              </div>
            </div>
          </div>
        </header>

        <section className="ticker" aria-label="News headlines">
          <div className="ticker__label"><Sparkles size={16} /> News Feed</div>
          <div className="ticker__window">
            <div className="ticker__track">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <span key={`${item}-${index}`}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <main id="top">
          <section className="lead-grid" aria-labelledby="lead-headline">
            <article className="lead-copy">
              <p className="eyebrow">Data Labelling Camps</p>
              <h1 id="lead-headline">
                <button type="button" onClick={() => setActiveArticle(leadStory)}>{leadStory.title}</button>
              </h1>
              <p className="lead-deck">{leadStory.subtitle}</p>
              <div className="lead-briefs">
                <button type="button" onClick={() => setActiveArticle(webParityStory)}>
                  VR Parity Agent x Marketplace: They’ve Shipped Bullshit
                </button>
                <button type="button" onClick={() => setToast('Your training labels have been accepted')}>
                  Meta Announces New Layoffs To Fund AI Agent That Explains Previous Layoffs
                </button>
              </div>
              <button className="latest-link" type="button" onClick={() => setActiveArticle(leadStory)}>
                Read full story <ArrowRight size={18} />
              </button>
            </article>

            <figure className="lead-visual">
              <button className="lead-visual__button" type="button" onClick={() => setActiveArticle(leadStory)} aria-label={`Read ${leadStory.title}`}>
                <img src="/assets/team.jpg" alt="Engineers collaborating around a table with their laptops" />
                <div className="lead-visual__stamp">
                  <span>MANDATORY LABELLING</span>
                  <strong>Q3 DRAFT</strong>
                </div>
              </button>
              <figcaption>New recruits complete orientation before labelling their own replacement data.</figcaption>
            </figure>

            <aside className="trending" aria-labelledby="trending-title">
              <h2 id="trending-title">TRENDING IN YOUR BUBBLE</h2>
              <div className="trending__list">
                {trends.map((trend) => (
                  <button
                    className="trend-card"
                    type="button"
                    key={trend.title}
                    onClick={() => trend.article
                      ? setActiveArticle(trend.article)
                      : setToast('Added to your highly specific interests')}
                  >
                    <span className="trend-card__copy">
                      <small>{trend.section}</small>
                      <strong>{trend.title}</strong>
                    </span>
                    <img src={trend.image} alt="" />
                  </button>
                ))}
              </div>
            </aside>
          </section>

          <section className="signal-strip" aria-label="Market update">
            <span className="signal-strip__label">THE SIGNAL</span>
            <p>Meta stock rises after company discovers a new blue slightly bluer than previous blue.</p>
            <span className="signal-strip__number">+∞%</span>
          </section>

          <section className="digest" ref={digestRef} aria-labelledby="digest-heading">
            <div className="section-heading">
              <div>
                <p className="eyebrow">More From The Scroll</p>
                <h2 id="digest-heading">Stories Chosen By A Completely Normal Amount Of Data</h2>
              </div>
              <button type="button" onClick={() => requestHumanVerification(() => setToast('The feed is already refreshing you'))}>
                Refresh my feed <ArrowRight size={18} />
              </button>
            </div>
            <div className="digest-grid">
              {digestStories.map((story) => (
                <article className="digest-card" key={story.title}>
                  <button className="digest-card__image-wrap" type="button" onClick={() => openDigestStory(story)} aria-label={`Open ${story.title}`}>
                    <img src={story.image} alt="" />
                    <span>{story.section}</span>
                  </button>
                  <h3><button type="button" onClick={() => openDigestStory(story)}>{story.title}</button></h3>
                  <p>{story.summary}</p>
                  <button type="button" onClick={() => openDigestStory(story)}>
                    {story.article ? 'Read full story' : 'Continue doomscrolling'} <ArrowRight size={16} />
                  </button>
                </article>
              ))}
            </div>
          </section>

          <section className="newsletter-banner">
            <div className="newsletter-banner__mark"><Bell /></div>
            <div>
              <p className="eyebrow">A Push Notification You Asked For</p>
              <h2>Start every morning confidently misinformed.</h2>
            </div>
            <button type="button" onClick={() => requestHumanVerification(() => setNewsletterOpen(true))}>Enter the feed <ArrowRight size={18} /></button>
          </section>
        </main>

        <footer>
          <div className="footer-brand"><Mark compact /><b>THE LEEK</b><span>© 2026 Probably A Human</span></div>
          <div className="footer-links">
            <button type="button" onClick={() => setToast('We value all 14,003 of your privacy choices')}>Privacy Maze</button>
            <button type="button" onClick={() => requestHumanVerification(() => setToast('Cookie accepted your terms'))}>Cookie Preferences</button>
            <button type="button" onClick={() => setToast('Please fax corrections to the cloud')}>Corrections</button>
          </div>
        </footer>
      </div>

      {!isEmbedded && !cubeOpen && floatingAds.map((ad, index) => (
        <BouncingAd
          key={ad.id}
          ad={ad}
          index={index}
          onAction={() => requestHumanVerification(() => setToast(ad.actionMessage))}
        />
      ))}

      {!isEmbedded && !cubeOpen && (
        <button className="cube-return" type="button" onClick={() => setCubeOpen(true)}>
          <span aria-hidden="true">◇</span> Cube view
        </button>
      )}

      {mobileOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="mobile-drawer__top">
            <a className="mobile-logo" href="#top" onClick={() => setMobileOpen(false)}><Mark compact /><b>THE LEEK</b></a>
            <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X /></button>
          </div>
          <nav>
            {navItems.map((item) => (
              <button key={item} type="button" onClick={() => jumpToStories(item)}>{item}<ArrowRight /></button>
            ))}
          </nav>
          <button className="drawer-newsletter" type="button" onClick={() => { setMobileOpen(false); setNewsletterOpen(true) }}>
            <Mail /> Join the newsletter
          </button>
        </div>
      )}

      {activeArticle && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveArticle(null)}>
          <article className="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setActiveArticle(null)} aria-label="Close article"><X /></button>
            <p className="eyebrow">{activeArticle.category}</p>
            <h2 id="article-title">{activeArticle.title}</h2>
            <div className="article-modal__body">
              {activeArticle.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>
        </div>
      )}

      {newsletterOpen && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setNewsletterOpen(false)}>
          <section className="newsletter-modal" role="dialog" aria-modal="true" aria-labelledby="newsletter-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setNewsletterOpen(false)} aria-label="Close newsletter dialog"><X /></button>
            <div className="newsletter-modal__art"><Mark /><span>+</span><Mail /></div>
            {subscribed ? (
              <div className="success-message">
                <p className="eyebrow">You’re In</p>
                <h2 id="newsletter-title">The algorithm has accepted your offering.</h2>
                <p>Watch your inbox for one concise daily dispatch and several spiritually related ads.</p>
                <button type="button" onClick={() => setNewsletterOpen(false)}>Return to reality</button>
              </div>
            ) : (
              <>
                <p className="eyebrow">The Daily Download</p>
                <h2 id="newsletter-title">News for people who already refreshed twice.</h2>
                <p>One fictional briefing each morning. No tracking, except emotionally.</p>
                <form onSubmit={submitNewsletter}>
                  <label htmlFor="email">Email address</label>
                  <div className="email-field">
                    <input id="email" name="email" type="email" placeholder="you@actualreality.com" required autoFocus />
                    <button type="submit">Subscribe <ArrowRight size={18} /></button>
                  </div>
                </form>
              </>
            )}
          </section>
        </div>
      )}

      {captchaOpen && (
        <div className="modal-backdrop captcha-backdrop" role="presentation" onMouseDown={() => setCaptchaOpen(false)}>
          <section className="captcha-modal" role="dialog" aria-modal="true" aria-labelledby="captcha-title" onMouseDown={(event) => event.stopPropagation()}>
            <div className="captcha-modal__header">
              <div className="captcha-modal__bot"><Bot /></div>
              <div>
                <p>WORKFORCE INTEGRITY CHECK</p>
                <h2 id="captcha-title">Are you human?</h2>
              </div>
            </div>
            <p className="captcha-modal__intro">Employee Monitoring Services needs to verify that this click came from a human worker and not a more cost-effective agent.</p>
            <button
              className={`captcha-check${captchaChecked ? ' captcha-check--checked' : ''}`}
              type="button"
              role="checkbox"
              aria-checked={captchaChecked}
              onClick={() => setCaptchaChecked((checked) => !checked)}
            >
              <span>{captchaChecked && <Check size={22} />}</span>
              <strong>I have experienced a performance review</strong>
            </button>
            <p className="captcha-modal__fineprint">Verification uses cursor anxiety, tab-switch velocity, and willingness to respond after 6 PM.</p>
            <div className="captcha-modal__actions">
              <button type="button" onClick={() => setCaptchaOpen(false)}>Cancel</button>
              <button type="button" disabled={!captchaChecked} onClick={verifyHuman}>Verify humanity</button>
            </div>
          </section>
        </div>
      )}

      {cubeOpen && !isEmbedded && <SiteCube onEnter={() => setCubeOpen(false)} />}

      {toast && <div className="toast" role="status">{toast}</div>}
    </>
  )
}

export default App
