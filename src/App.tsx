import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Download, 
  Smartphone, 
  Monitor, 
  Github, 
  Star,
  Play,
  Clipboard,
  Shield,
  Lock,
  Code,
  Network,
  Zap,
  Cpu,
  Database,
  Battery,
  Users,
  Image as ImageIcon,
  Type,
  BarChart,
  List,
  Plus,
  PartyPopper,
  Sparkles,
  Paperclip
} from 'lucide-react';

function FloatingClips() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {[...Array(12)].map((_, i) => {
        const size = Math.random() * 40 + 20;
        return (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 360,
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              rotate: Math.random() * 360 + 180,
            }}
            transition={{
              duration: Math.random() * 30 + 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute text-cyan-500"
          >
            <Paperclip style={{ width: size, height: size }} />
          </motion.div>
        );
      })}
    </div>
  );
}

function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <img src="/logo/nobg/Web/android-chrome-512x512.png" alt="ClipSync Logo" className={className} />
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0B0B0B]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-cyan-400">
          <Logo className="w-7 h-7" />
          <span className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
            ClipSync <Clipboard className="w-5 h-5 text-zinc-500" />
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#upcoming" className="hover:text-white transition-colors">Upcoming</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
            <Github className="w-4 h-4" /> GitHub Repository
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#0B0B0B] overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Row 1: Repository Badges */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-10"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-zinc-300 transition-colors">
              <Star className="w-4 h-4 text-yellow-500" /> Star <span className="text-white font-semibold">1.2k</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 px-4 py-2 rounded-full text-sm font-medium text-zinc-300 transition-colors">
              <Github className="w-4 h-4" /> View Repository
            </a>
          </motion.div>

          {/* Row 2: Main Headline & Sub-headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
              ClipSync.
            </h1>
            <p className="text-xl text-cyan-400 font-medium max-w-xl">
              Copy on your phone. Paste on your PC. No cloud, no lag, just pure synchronization.
            </p>
          </motion.div>

          {/* Row 3: Download Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 w-full"
          >
            <div className="flex flex-col items-center lg:items-start gap-2 w-full sm:w-auto">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Download (Free Beta)</span>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 px-8 py-4 rounded-xl font-bold transition-colors shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                <Monitor className="w-5 h-5" />
                Download for Windows
              </button>
            </div>
            <div className="flex flex-col items-center lg:items-start gap-2 w-full sm:w-auto">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Download (Free Beta)</span>
              <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-100 hover:bg-white text-zinc-950 px-8 py-4 rounded-xl font-bold transition-colors">
                <Smartphone className="w-5 h-5" />
                Download for Android
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Mockups */}
        <div className="relative w-full mt-12 lg:mt-0 flex items-center justify-center" style={{ height: '520px' }}>
          {/* Outer container sized to fit both devices */}
          <div className="relative" style={{ width: '480px', height: '480px' }}>

            {/* PC Mockup — top-left, z-10 (behind clip) */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: -40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ position: 'absolute', top: '0px', left: '0px', width: '300px', zIndex: 10 }}
            >
              {/* Screen body */}
              <div style={{ width: '100%', aspectRatio: '16/10', background: '#27272a', borderRadius: '14px', border: '1px solid #3f3f46', padding: '6px', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.8)' }}>
                <div style={{ width: '100%', height: '100%', background: '#09090b', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                  <video
                    src="/videos/hero/pc.mp4"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
                    autoPlay muted playsInline
                    onTimeUpdate={(e) => { const v = e.currentTarget; if (v.duration && v.currentTime >= v.duration - 0.1) { v.currentTime = 0; v.play().catch(()=>{}); } }}
                  />
                </div>
              </div>
              {/* Monitor stand */}
              <div style={{ margin: '0 auto', width: '110%', height: '14px', background: '#3f3f46', borderRadius: '0 0 10px 10px', marginLeft: '-5%', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }} />
              <div style={{ margin: '0 auto', width: '30%', height: '10px', background: '#52525b', borderRadius: '0 0 6px 6px' }} />
            </motion.div>

            {/* Paperclip — centered diagonally at 45°, z-20 (above PC, below phone) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(45deg)',
                zIndex: 20,
                color: '#22d3ee',
                filter: 'drop-shadow(0 0 20px rgba(6,182,212,0.8))',
              }}
            >
              <Paperclip style={{ width: '140px', height: '140px' }} strokeWidth={1.2} />
            </motion.div>

            {/* Phone Mockup — bottom-right, z-30 (in front of clip) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{ position: 'absolute', bottom: '0px', right: '0px', width: '140px', aspectRatio: '9/16', zIndex: 30 }}
            >
              <div style={{ width: '100%', aspectRatio: '9/16', background: '#18181b', borderRadius: '28px', border: '5px solid #27272a', padding: '5px', boxShadow: '0 30px 60px -15px rgba(0,0,0,0.9)', position: 'relative' }}>
                {/* Front camera notch */}
                <div style={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', width: '14px', height: '14px', background: '#000', borderRadius: '50%', zIndex: 5 }} />
                <div style={{ width: '100%', height: '100%', background: '#09090b', borderRadius: '22px', overflow: 'hidden', position: 'relative' }}>
                  <video
                    src="/videos/hero/mobile.mp4"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
                    autoPlay muted playsInline
                    onTimeUpdate={(e) => { const v = e.currentTarget; if (v.duration && v.currentTime >= v.duration - 0.1) { v.currentTime = 0; v.play().catch(()=>{}); } }}
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}

function VisionStatement() {
  return (
    <section className="py-24 px-6 bg-[#0B0B0B]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
          Clipboard Sync ecosystem made possible on Android & Windows.
        </h2>
        <p className="text-sm italic text-zinc-500 mb-8">
          "Core features that make finding, inspecting, and managing clips feel like second nature."
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <span className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium text-zinc-300">Encrypted</span>
          <span className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium text-zinc-300">No need to change default keyboard!</span>
          <span className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium text-zinc-300">Open source</span>
          <span className="px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-sm font-medium text-zinc-300">Free</span>
        </div>
      </motion.div>
    </section>
  );
}

function FeatureCard({ title, description, videoSrc, orientation }: { title: string, description: string, videoSrc: string, orientation?: 'landscape' | 'portrait' }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="bg-[#111111] border border-white/5 rounded-2xl p-8 flex flex-col overflow-hidden group hover:border-white/10 transition-colors relative"
    >
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="mb-8 relative z-10">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-zinc-400 leading-relaxed">{description}</p>
      </div>
      <div className={`flex-1 relative rounded-xl bg-[#1A1A1A] border border-white/5 overflow-hidden flex items-center justify-center group-hover:border-cyan-500/20 transition-colors z-10 shadow-inner ${orientation === 'portrait' ? 'aspect-[9/16] max-h-[400px]' : 'aspect-video'}`}>
        <video 
          src={videoSrc} 
          className="absolute inset-0 w-full h-full object-contain"
          autoPlay
          muted 
          playsInline
          onTimeUpdate={(e) => { const v = e.currentTarget; if (v.duration && v.currentTime >= v.duration - 0.1) { v.currentTime = 0; v.play().catch(()=>{}); } }}
        />
      </div>
    </motion.div>
  );
}

function VisualFeaturesGrid() {
  return (
    <section id="features" className="py-12 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <FeatureCard
            title="Quick-Paste Overlay"
            description="Instant Access. Zero Friction. Trigger the vault with a Windows hotkey or an Android Quick Settings Tile. Paste your history without leaving your active app."
            videoSrc="/videos/features/quick-paste-overlay.mp4"
            orientation="portrait"
          />
          <FeatureCard
            title="Smart Pinning & Vault"
            description="Essential Snippets, Always Ready. Pin frequently used links, addresses, or code blocks. Store up to 50 items locally in a high-speed SQLite database."
            videoSrc="/videos/features/smart-pin-delete.mp4"
            orientation="portrait"
          />
          <FeatureCard
            title="Seamless Mesh Sync"
            description="One Network. Infinite Devices. Create a secure P2P mesh connecting all your Android and Windows hardware simultaneously. Copy once, sync everywhere instantly."
            videoSrc="/videos/features/seamless-mesh.mp4"
            orientation="landscape"
          />
          <FeatureCard
            title="Foreign Network Sync"
            description="Connect Anywhere. Our WebRTC and MQTT signaling allow devices to find each other even on different, restricted, or foreign networks."
            videoSrc="/videos/features/foreign-network.mp4"
            orientation="landscape"
          />
        </div>
      </div>
    </section>
  );
}

function NonVisualFeatures() {
  return (
    <section className="py-24 px-6 bg-[#111111] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">The Core Technology: Secure, Fast, Transparent</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {/* Security & Privacy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">Security & Privacy</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                  <Lock className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">AES-256 End-to-End Encryption (E2EE)</h4>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                  <Database className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Zero-Knowledge Architecture</h4>
                  <p className="text-sm text-zinc-500 mt-1">No Cloud Storage</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                  <Code className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">100% Open Source and Audit-Transparent</h4>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* System & Connection */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold text-white">System & Connection</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                  <Network className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Direct Peer-to-Peer (P2P) Data Transfer</h4>
                  <p className="text-sm text-zinc-500 mt-1">Powered by WebRTC</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                  <Zap className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Decentralized Signaling and Discovery</h4>
                  <p className="text-sm text-zinc-500 mt-1">Using MQTT</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                  <Cpu className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Low-Level Native Hooks</h4>
                  <p className="text-sm text-zinc-500 mt-1">Win32 API Listener, Android Accessibility Service</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                  <Database className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Efficient Local SQLite Clip History</h4>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                  <Zap className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Very Quick Response Time</h4>
                  <p className="text-sm text-zinc-500 mt-1">Instant Sync</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                  <Users className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Account-Free Device Pairing</h4>
                  <p className="text-sm text-zinc-500 mt-1">No passwords or emails required</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                  <Battery className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Optimized Background Processes</h4>
                  <p className="text-sm text-zinc-500 mt-1">Zero Battery Drain</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center shrink-0 border border-white/5">
                  <Network className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-zinc-200">Currently supports a mesh connection of up to 3 devices simultaneously.</h4>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How it works
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            See ClipSync in action. A seamless experience across all your devices.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(6,182,212,0.1)] bg-zinc-900"
        >
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=placeholder" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

function UpcomingRoadmap() {
  const roadmapItems = [
    { icon: <ImageIcon className="w-5 h-5" />, text: "Image Copy-Paste Support (Beyond current text)" },
    { icon: <List className="w-5 h-5" />, text: "Expanded Clipboard History with Target of 100+ Clips" },
    { icon: <Plus className="w-5 h-5" />, text: "Expansion to 4+ Multiple Device Connections (Scaling the Mesh)" }
  ];

  return (
    <section id="upcoming" className="py-24 px-6 bg-[#111111] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Upcoming & Planned Features Roadmap</h2>
        </motion.div>

        <div className="grid gap-4">
          {roadmapItems.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#111111] border border-white/5 rounded-xl p-6 flex items-center gap-4 hover:border-white/10 hover:bg-white/[0.02] transition-colors group cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 group-hover:bg-cyan-500/10 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-lg font-medium text-zinc-200 group-hover:text-white transition-colors">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <section id="pricing" className="py-32 px-6 bg-[#0B0B0B] border-t border-white/5 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={() => setShowConfetti(true)}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 mb-6 relative">
          <PartyPopper className="w-8 h-8" />
          <AnimatePresence>
            {showConfetti && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 1, scale: 0, x: 0, y: 0 }}
                    animate={{ 
                      opacity: 0, 
                      scale: 1.5, 
                      x: (Math.random() - 0.5) * 150, 
                      y: (Math.random() - 0.5) * 150 - 50,
                      rotate: Math.random() * 360
                    }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute text-cyan-400"
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                ))}
              </>
            )}
          </AnimatePresence>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pricing<br/><span className="text-cyan-400">Completely Free</span></h2>
        <p className="text-xl text-zinc-400 leading-relaxed mb-8">
          Currently in Public Beta, all ClipSync features are completely free to use. Join us on our journey.
        </p>
        <p className="text-zinc-300 mb-4 font-medium">Want to donate to the dev?</p>
        <a href="https://buymeacoffee.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#FFDD00] hover:bg-[#FFDD00]/90 text-black px-6 py-3 rounded-xl font-bold transition-colors">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.216 10.281c.026-.184.044-.37.044-.562 0-2.072-1.609-3.75-3.594-3.75H16V4.5C16 3.673 15.327 3 14.5 3h-9C4.673 3 4 3.673 4 4.5v10C4 15.327 4.673 16 5.5 16h9c.827 0 1.5-.673 1.5-1.5v-1.031h.668c1.985 0 3.594-1.678 3.594-3.75.001-.192-.017-.378-.046-.562zM14.5 14.5h-9v-10h9v10zm2.168-2.531H16V5.469h.668c1.158 0 2.094.982 2.094 2.188 0 1.205-.936 2.188-2.094 2.188zM4 18h12v1.5H4z"/></svg>
          Buy Me a Coffee
        </a>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-16 px-6 bg-[#0B0B0B] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-3 px-10 py-5 rounded-2xl font-bold bg-zinc-100 hover:bg-white text-zinc-950 transition-colors mb-16 shadow-xl"
        >
          <Github className="w-6 h-6" />
          View Repository on GitHub
        </motion.a>
        
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-medium text-zinc-400">
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Documentation</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        
        <p className="text-zinc-600 text-sm">
          &copy; {new Date().getFullYear()} ClipSync. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen selection:bg-cyan-500/30 overflow-x-hidden">
      <FloatingClips />
      <Navbar />
      <main>
        <Hero />
        <VisionStatement />
        <VisualFeaturesGrid />
        <NonVisualFeatures />
        <HowItWorks />
        <UpcomingRoadmap />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

