import { Link } from 'react-router-dom'
import { ArrowRight, Github as GithubIcon } from 'lucide-react'

const FlagMockup = () => {
  const flags = [
    { name: 'new-checkout-flow', status: true, env: 'Production', rollout: 100 },
    { name: 'ai-recommendations', status: true, env: 'Staging', rollout: 45 },
    { name: 'dark-mode-v2', status: false, env: 'Production', rollout: 0 },
    { name: 'experimental-search', status: true, env: 'Development', rollout: 20 },
  ]

  const envColor: Record<string, string> = {
    Production: 'text-emerald-400 bg-emerald-400/10',
    Staging: 'text-yellow-400 bg-yellow-400/10',
    Development: 'text-blue-400 bg-blue-400/10',
  }

  return (
    <div className="relative rounded-xl border border-white/[0.08] bg-[#0d1117] overflow-hidden shadow-2xl">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-[#0d1117]">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-gray-500 font-mono">flagbase / my-app / flags</span>
      </div>

      {/* Table header */}
      <div className="grid grid-cols-12 px-4 py-2 border-b border-white/[0.04] text-xs text-gray-500 font-medium uppercase tracking-wider">
        <span className="col-span-5">Flag Name</span>
        <span className="col-span-2 text-center">Status</span>
        <span className="col-span-3">Environment</span>
        <span className="col-span-2 text-right">Rollout</span>
      </div>

      {/* Rows */}
      {flags.map((flag, i) => (
        <div
          key={i}
          className={`grid grid-cols-12 px-4 py-3 items-center border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors ${
            i === 1 ? 'bg-indigo-500/[0.04]' : ''
          }`}
        >
          {/* Flag name */}
          <div className="col-span-5 flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${flag.status ? 'bg-emerald-400' : 'bg-gray-600'}`} />
            <span className="text-sm font-mono text-gray-200">{flag.name}</span>
          </div>

          {/* Toggle */}
          <div className="col-span-2 flex justify-center">
            <div className={`w-9 h-5 rounded-full relative transition-colors ${flag.status ? 'bg-indigo-500' : 'bg-gray-700'}`}>
              <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${flag.status ? 'translate-x-4' : 'translate-x-0.5'}`} />
            </div>
          </div>

          {/* Environment */}
          <div className="col-span-3">
            <span className={`text-xs px-2 py-0.5 rounded-md font-medium ${envColor[flag.env]}`}>
              {flag.env}
            </span>
          </div>

          {/* Rollout */}
          <div className="col-span-2 flex flex-col items-end gap-1">
            <span className="text-xs text-gray-400">{flag.rollout}%</span>
            <div className="w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-500 rounded-full"
                style={{ width: `${flag.rollout}%` }}
              />
            </div>
          </div>
        </div>
      ))}

      {/* Bottom bar */}
      <div className="px-4 py-2.5 flex items-center justify-between">
        <span className="text-xs text-gray-600">4 flags · last updated 2 mins ago</span>
        <span className="text-xs text-indigo-400 cursor-pointer hover:text-indigo-300 transition-colors">
          View all →
        </span>
      </div>

      {/* Glow effect on mockup */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.06] pointer-events-none" />
    </div>
  )
}

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 100%)',
        }}
      />

      {/* Subtle glow — indigo, single use */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-30 blur-[120px] bg-indigo-600 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-xs text-gray-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Open source · Self-hostable · v2.0 now live
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
            Ship faster.<br />
            <span className="text-gray-400">Control everything.</span>
          </h1>

          {/* Subtext */}
          <p className="max-w-xl mx-auto text-lg text-gray-500 leading-relaxed mb-10">
            Feature flags and A/B testing for developers who care about clean architecture. Self-host in minutes, integrate with one line of Python.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white text-sm font-medium transition-colors"
              >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Link>
                <a
              href="https://github.com/avdheshMANDLOI/Flagbase_Version2"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.06] text-white text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>

        {/* Mockup */}
        <div className="max-w-3xl mx-auto">
          <FlagMockup />
        </div>
      </div>
    </section>
  )
}

export default Hero