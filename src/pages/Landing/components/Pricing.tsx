import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const plans = [
  {
    name: 'Open Source',
    price: 'Free',
    description: 'Self-host forever. Full access to every feature.',
    cta: 'Get Started',
    ctaLink: '/register',
    highlighted: false,
    features: [
      'Unlimited feature flags',
      'Unlimited projects',
      'A/B testing with Z-test engine',
      'Analytics & event tracking',
      'Python SDK',
      'REST API access',
      'Docker deployment',
    ],
  },
  {
    name: 'Cloud',
    price: 'Coming Soon',
    description: 'Fully managed FlagBase. No ops required.',
    cta: 'Join Waitlist',
    ctaLink: '/register',
    highlighted: true,
    features: [
      'Everything in Open Source',
      'Managed infrastructure',
      'Automatic backups',
      'Team collaboration',
      'SSO & RBAC',
      'Priority support',
      'SLA guarantee',
    ],
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-white/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-indigo-400 mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Simple, transparent<br />
            <span className="text-gray-400">no surprises.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={`relative rounded-xl p-6 flex flex-col ${
                plan.highlighted
                  ? 'bg-indigo-500/[0.06] border border-indigo-500/30'
                  : 'bg-[#0d1117] border border-white/[0.06]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent rounded-t-xl" />
              )}

              {/* Plan name */}
              <div className="mb-6">
                <p className={`text-xs font-medium uppercase tracking-widest mb-3 ${
                  plan.highlighted ? 'text-indigo-400' : 'text-gray-500'
                }`}>
                  {plan.name}
                </p>
                <p className="text-3xl font-bold text-white">{plan.price}</p>
                <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <div className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${
                      plan.highlighted ? 'bg-indigo-500/20' : 'bg-white/[0.04]'
                    }`}>
                      <Check className={`w-2.5 h-2.5 ${
                        plan.highlighted ? 'text-indigo-400' : 'text-gray-400'
                      }`} />
                    </div>
                    <span className="text-sm text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={plan.ctaLink}
                className={`w-full py-2.5 rounded-md text-sm font-medium text-center transition-colors ${
                  plan.highlighted
                    ? 'bg-indigo-500 hover:bg-indigo-400 text-white'
                    : 'bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.08]'
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing