<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#07111f">
  <meta name="description" content="Abhishek Murapala — Network Engineer portfolio showcasing enterprise networking, ELV systems, routing & switching, and infrastructure deployments.">
  <title>Abhishek Murapala | Network Engineer</title>
  <link rel="stylesheet" href="style.css">
  <style>
    h1, h2, h3, .section-heading h2 {
      font-family: inherit !important;
      letter-spacing: -0.01em;
    }
    .content-section {
      padding-top: 52px !important;
      padding-bottom: 52px !important;
    }
    .section-heading {
      margin-bottom: 28px !important;
    }
    .doc-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
    }
    .doc-card {
      padding: 28px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 18px;
    }
    .doc-card-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    .doc-pill {
      display: inline-block;
      padding: 4px 12px;
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.12);
      border: 1px solid rgba(56, 189, 248, 0.28);
      border-radius: 999px;
    }
    .doc-card h3 {
      font-size: 1.3rem;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
    }
    .doc-card p {
      color: #94a3b8;
      font-size: 0.94rem;
      line-height: 1.6;
      margin: 0;
    }
    .doc-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 4px;
    }
    .doc-actions .button {
      padding: 10px 20px;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="network-background" aria-hidden="true">
    <div class="network-grid"></div>
    <div class="glow glow-one"></div>
    <div class="glow glow-two"></div>
    <div class="network-lines"></div>
    <div class="network-points"></div>
  </div>

  <header class="site-header">
    <a href="#home" class="brand" aria-label="Abhishek home">
      <span class="brand-mark">AM</span>
      <span class="brand-copy">
        <strong>Abhishek Murapala</strong>
        <small>NETWORK ENGINEER</small>
      </span>
    </a>

    <button class="menu-toggle" id="menuToggle"
      aria-label="Toggle navigation" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

    <nav class="nav-links" id="navLinks">
      <a href="#home" class="nav-link active">Home</a>
      <a href="#about" class="nav-link">About</a>
      <a href="#skills" class="nav-link">Skills</a>
      <a href="#experience" class="nav-link">Experience</a>
      <a href="#projects" class="nav-link">Projects</a>
      <a href="#certifications" class="nav-link">Education</a>
      <a href="#resume" class="nav-link">Resume</a>
      <a href="#contact" class="nav-link">Contact</a>
    </nav>
  </header>

  <main>
    <section class="hero section" id="home">
      <div class="hero-copy">
        <p class="eyebrow">HELLO, I'M</p>
        <h1>Abhishek <span>Murapala</span></h1>
        <h2>Network Engineer <span class="typing-cursor">|</span></h2>

        <p class="hero-description">
          Network Engineer with 1 year of hands-on enterprise deployment experience at SignUp Networks Pvt. Ltd., Chennai. Skilled in L2/L3 routing and switching, firewalls, ELV systems, structured cabling, and physical-to-data-link fault isolation.
        </p>

        <div class="hero-actions">
          <a class="button button-primary" href="#projects">
            <span class="button-icon">↗</span> Explore Projects
          </a>
          <a class="button button-outline" href="#contact">
            <span class="button-icon">✉</span> Contact Me
          </a>
        </div>

        <div class="hero-socials">
          <a class="social-link" href="https://www.linkedin.com/in/abhishek-murapala-401726280/"
             target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.2 9h3.6v11H3.2Zm5.8 0h3.4v1.5h.1a3.8 3.8 0 0 1 3.4-1.8c3.7 0 4.4 2.4 4.4 5.5V20h-3.6v-5.2c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V20H9Z"/>
            </svg>
          </a>
          <a class="social-link" href="mailto:abhishekmurapala@gmail.com"
             aria-label="Email">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm9 8L4 7v10h16V7Zm0-2.1L19.2 7H4.8Z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="hero-visual">
        <div class="photo-frame">
          <div class="photo-orbit orbit-one"></div>
          <div class="photo-orbit orbit-two"></div>
          <div class="photo-glow"></div>
          <img id="profilePhoto" src="profile.jpg"
               alt="Abhishek Murapala professional portrait">
          <div class="photo-placeholder" id="photoPlaceholder">
            <div class="placeholder-avatar">AM</div>
          </div>
        </div>
        <div class="floating-chip chip-top"><span>●</span> Networking &amp; ELV</div>
        <div class="floating-chip chip-bottom"><span>↗</span> CCNA Track</div>
      </div>

      <a class="scroll-hint" href="#about"><span></span> SCROLL TO EXPLORE</a>
    </section>

    <section class="section content-section" id="about">
      <div class="section-heading">
        <p class="eyebrow">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p>A concise overview of my engineering background and technical focus.</p>
      </div>

      <div class="about-layout">
        <div class="about-card glass-card">
          <div class="card-symbol">⌘</div>
          <h3>My Background</h3>
          <p>
            I am an Electronics and Communication Engineering (B.Tech) graduate from Sasi Institute of Technology and Engineering with one year of hands-on networking and ELV infrastructure experience at SignUp Networks Pvt. Ltd. in Chennai. My work spans routers, switches, firewalls, IP surveillance, wireless access points, biometric systems, and structured cabling.
          </p>
          <p>
            Currently deepening my expertise in VLAN segmentation, Spanning Tree Protocol (STP), OSPF/EIGRP routing, and enterprise network security as I prepare for CCNA certification.
          </p>
        </div>

        <div class="about-details">
          <div class="detail-card glass-card">
            <span class="detail-icon">🎓</span>
            <div><small>EDUCATION</small><strong>B.Tech — ECE (7.8 CGPA)</strong><p>Sasi Institute of Technology and Engineering</p></div>
          </div>
          <div class="detail-card glass-card">
            <span class="detail-icon">📍</span>
            <div><small>LOCATION</small><strong>Chennai, India</strong><p>Enterprise Networking &amp; ELV Systems</p></div>
          </div>
          <div class="detail-card glass-card">
            <span class="detail-icon">🎯</span>
            <div><small>CAREER FOCUS</small><strong>Routing, Switching &amp; Security</strong><p>Building resilient L2/L3 enterprise networks</p></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section content-section" id="skills">
      <div class="section-heading">
        <p class="eyebrow">WHAT I WORK WITH</p>
        <h2>Technical <span>Skills</span></h2>
        <p>Core competencies across routing, switching, ELV infrastructure, and diagnostics.</p>
      </div>

      <div class="skill-grid">
        <article class="skill-card glass-card">
          <div class="skill-art"><span aria-hidden="true">🌐</span><i></i><i></i></div>
          <h3>Routing &amp; Switching</h3>
          <p>LAN/WAN fundamentals, TCP/IP, IPv4 addressing, VLAN &amp; VTP, STP, OSPF, EIGRP, RIP, and Cisco switch/router configuration.</p>
          <div class="tag-list"><span>VLAN &amp; VTP</span><span>OSPF / EIGRP</span><span>STP</span><span>TCP/IP</span></div>
        </article>
        <article class="skill-card glass-card">
          <div class="skill-art"><span aria-hidden="true">📹</span><i></i><i></i></div>
          <h3>ELV &amp; IP Surveillance</h3>
          <p>End-to-end IP camera and NVR deployment, PoE switch integration, CCTV diagnostics, and enterprise ELV system support.</p>
          <div class="tag-list"><span>IP Cameras</span><span>NVR</span><span>PoE</span><span>ELV Systems</span></div>
        </article>
        <article class="skill-card glass-card">
          <div class="skill-art"><span aria-hidden="true">🗄️</span><i></i><i></i></div>
          <h3>Network Infrastructure</h3>
          <p>Structured cabling (Cat6/Fiber), patch panel termination, server rack installation, rack dressing, and wireless access points.</p>
          <div class="tag-list"><span>Structured Cabling</span><span>Rack Dressing</span><span>Access Points</span></div>
        </article>
        <article class="skill-card glass-card">
          <div class="skill-art"><span aria-hidden="true">💻</span><i></i><i></i></div>
          <h3>Tools &amp; Diagnostics</h3>
          <p>Network simulation and CLI access using Cisco Packet Tracer, PuTTY, HyperTerminal, AutoCAD layouts, and core CLI diagnostics.</p>
          <div class="tag-list"><span>Packet Tracer</span><span>PuTTY</span><span>HyperTerminal</span><span>AutoCAD</span></div>
        </article>
        <article class="skill-card glass-card">
          <div class="skill-art"><span aria-hidden="true">🔐</span><i></i><i></i></div>
          <h3>Firewalls &amp; Access Control</h3>
          <p>Basic firewall rule configuration, switch port security, biometric access control installation, and physical-layer security.</p>
          <div class="tag-list"><span>Firewalls</span><span>Biometrics</span><span>Port Security</span></div>
        </article>
        <article class="skill-card glass-card">
          <div class="skill-art"><span aria-hidden="true">📘</span><i></i><i></i></div>
          <h3>CCNA Track (In Progress)</h3>
          <p>Advancing practical expertise in IPv4/IPv6 subnetting, inter-VLAN routing, ACLs, NAT/PAT, and enterprise fault isolation.</p>
          <div class="tag-list"><span>CCNA Track</span><span>Subnetting</span><span>Troubleshooting</span></div>
        </article>
      </div>
    </section>

    <section class="section content-section" id="experience">
      <div class="section-heading">
        <p class="eyebrow">MY PROFESSIONAL JOURNEY</p>
        <h2>Work <span>Experience</span></h2>
        <p>Hands-on deployment and support across enterprise networking and ELV environments.</p>
      </div>

      <div class="timeline">
        <div class="timeline-marker"></div>
        <article class="experience-card glass-card">
          <div class="experience-top">
            <div><p class="eyebrow">PROFESSIONAL EXPERIENCE</p><h3>Network Engineer</h3></div>
            <span class="experience-label">1 Year · Chennai, India</span>
          </div>
          <p class="company-name">SignUp Networks Pvt. Ltd.</p>
          <p>Executed enterprise networking and ELV infrastructure rollouts at commercial client sites, including TD Connex and Tidel Park (Williams Lea).</p>
          <ul class="check-list">
            <li>Deployed and commissioned routers, Cisco switches, firewalls, wireless access points, IP cameras, and biometric access terminals across enterprise client facilities at TD Connex and Tidel Park.</li>
            <li>Executed end-to-end structured cabling, patch panel termination, PoE port mapping, and server rack installation/dressing to maintain clean physical-layer standards.</li>
            <li>Performed initial device configuration, IPv4 addressing, VLAN assignments, and console/CLI connectivity verification using Cisco Packet Tracer, PuTTY, and HyperTerminal.</li>
            <li>Diagnosed and resolved Layer 1 and Layer 2 connectivity issues—including cable faults, PoE power limits, IP conflicts, and NVR link drops—ensuring reliable uptime.</li>
            <li>Collaborated with project engineers during site testing, port labeling, and handover documentation for client sign-off.</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section content-section" id="projects">
      <div class="section-heading">
        <p class="eyebrow">PRACTICAL WORK &amp; LABS</p>
        <h2>Projects &amp; <span>Deployments</span></h2>
        <p>Enterprise infrastructure installations and technical engineering labs.</p>
      </div>

      <div class="project-grid">
        <article class="project-card glass-card">
          <div class="project-visual visual-network"><span>⌘</span><div class="visual-node n1"></div><div class="visual-node n2"></div><div class="visual-node n3"></div></div>
          <div class="project-body"><span class="project-type">ENTERPRISE INFRASTRUCTURE</span><h3>TD Connex — LAN &amp; Rack Deployment</h3><p>Deployed structured cabling, patch panels, and dressed server racks for a multi-zone workspace; verified end-to-end link continuity and switch port mapping prior to handover.</p><div class="tag-list"><span>LAN</span><span>Structured Cabling</span><span>Rack Dressing</span></div></div>
        </article>
        <article class="project-card glass-card">
          <div class="project-visual visual-camera"><span>◉</span><div class="scan-line"></div></div>
          <div class="project-body"><span class="project-type">ELV &amp; SURVEILLANCE</span><h3>Tidel Park — Connected Systems Rollout</h3><p>Installed and integrated IP surveillance cameras, NVR storage, enterprise Wi-Fi access points, and biometric access systems over PoE switching at Tidel Park (Williams Lea).</p><div class="tag-list"><span>IP Surveillance</span><span>Wi-Fi APs</span><span>Biometrics</span></div></div>
        </article>
        <article class="project-card glass-card">
          <div class="project-visual visual-lab"><span>⌁</span><div class="terminal-lines"><i></i><i></i><i></i><i></i></div></div>
          <div class="project-body"><span class="project-type">NETWORKING LAB</span><h3>Multi-VLAN Enterprise Topology (Packet Tracer)</h3><p>Configured a segmented branch network implementing VLANs, VTP, STP, OSPF/EIGRP routing, and inter-VLAN connectivity with full packet-flow validation.</p><div class="tag-list"><span>VLAN &amp; VTP</span><span>OSPF / EIGRP</span><span>Packet Tracer</span></div></div>
        </article>
      </div>
    </section>

    <section class="section content-section" id="certifications">
      <div class="section-heading">
        <p class="eyebrow">ACADEMIC &amp; LEADERSHIP CREDENTIALS</p>
        <h2>Education &amp; <span>Achievements</span></h2>
        <p>Engineering qualification, technical internships, and NCC leadership background.</p>
      </div>
      <div class="placeholder-grid">
        <div class="upload-card glass-card" style="cursor: default;">
          <span class="large-card-icon">🎓</span>
          <strong>B.Tech — Electronics &amp; Communication Engineering</strong>
          <span>Sasi Institute of Technology and Engineering (2022–2026) · 7.8 CGPA | Intermediate (+2): 93%</span>
          <span class="upload-badge">CCNA Routing &amp; Switching Track (In Progress)</span>
        </div>
        <div class="upload-card glass-card" style="cursor: default;">
          <span class="large-card-icon">🎖️</span>
          <strong>NCC Cadet &amp; Technical Internships</strong>
          <span>Completed NCC National Camps &amp; C-Certificate Training; Embedded Systems &amp; VLSI Internships (Skill Dzire / Microchip)</span>
          <span class="upload-badge">Leadership · Discipline · Teamwork</span>
        </div>
      </div>
    </section>

    <section class="section content-section" id="resume">
      <div class="section-heading">
        <p class="eyebrow">MY CAREER PROFILE</p>
        <h2>Resume &amp; <span>CV</span></h2>
        <p>View or download my verified career documents.</p>
      </div>

      <div class="doc-grid">
        <!-- Left Card: Resume -->
        <article class="doc-card glass-card">
          <div class="doc-card-header">
            <span class="doc-pill">ONE-PAGE SUMMARY</span>
            <h3>Network Engineer Resume</h3>
            <p>Focused snapshot of L2/L3 routing &amp; switching, Cisco IOS configuration, VLAN/OSPF labs, and enterprise LAN/WAN support skills.</p>
          </div>
          <div class="doc-actions">
            <a class="button button-primary" href="Abhishek_Murapala_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <span class="button-icon">↗</span> View Resume
            </a>
            <a class="button button-outline" href="Abhishek_Murapala_Resume.pdf" download="Abhishek_Murapala_Network_Engineer_Resume.pdf">
              <span class="button-icon">↓</span> Download
            </a>
          </div>
        </article>

        <!-- Right Card: CV -->
        <article class="doc-card glass-card">
          <div class="doc-card-header">
            <span class="doc-pill">DETAILED PROFILE</span>
            <h3>Curriculum Vitae (CV)</h3>
            <p>Comprehensive profile covering commercial ELV rollouts, structured cabling, PoE IP surveillance, fault isolation, and academic credentials.</p>
          </div>
          <div class="doc-actions">
            <a class="button button-primary" href="Abhishek_Murapala_CV.pdf" target="_blank" rel="noopener noreferrer">
              <span class="button-icon">↗</span> View CV
            </a>
            <a class="button button-outline" href="Abhishek_Murapala_CV.pdf" download="Abhishek_Murapala_Network_Engineer_CV.pdf">
              <span class="button-icon">↓</span> Download
            </a>
          </div>
        </article>
      </div>
    </section>

    <section class="section content-section" id="contact">
      <div class="section-heading">
        <p class="eyebrow">LET'S CONNECT</p>
        <h2>Contact <span>Me</span></h2>
        <p>Open to Network Engineer, NOC Engineer, and Infrastructure Support opportunities.</p>
      </div>
      <div class="contact-grid">
        <a class="contact-card glass-card" href="mailto:abhishekmurapala@gmail.com">
          <span class="contact-icon">✉</span>
          <span><small>EMAIL ME</small><strong>abhishekmurapala@gmail.com</strong></span>
          <span class="contact-arrow">↗</span>
        </a>
        <a class="contact-card glass-card" href="https://www.linkedin.com/in/abhishek-murapala-401726280/"
           target="_blank" rel="noopener noreferrer">
          <span class="contact-icon">in</span>
          <span><small>CONNECT ON</small><strong>LinkedIn Profile</strong></span>
          <span class="contact-arrow">↗</span>
        </a>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <a href="#home" class="footer-brand"><span class="brand-mark">AM</span> Abhishek Murapala</a>
    <p>Connecting Networks. Creating Opportunities.</p>
    <p>© <span id="currentYear"></span> Abhishek Murapala</p>
  </footer>

  <button class="back-to-top" id="backToTop" aria-label="Back to top">↑</button>
  <script src="script.js"></script>
</body>
</html>
