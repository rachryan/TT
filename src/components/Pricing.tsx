const Pricing = () => {
  const packages = [
    {
      name: 'Quick Tidy',
      description: 'Perfect for small businesses needing targeted improvements.',
      priceRange: '$1,500 - $3,500',
      features: [
        'Technology audit & assessment',
        'Up to 5 workstations',
        'Email migration (single provider)',
        'Basic cloud storage setup',
        '30-day support included',
      ],
      highlighted: false,
    },
    {
      name: 'Full Tidy',
      description: 'Comprehensive modernization for growing businesses.',
      priceRange: '$5,000 - $12,000',
      features: [
        'Complete technology audit',
        'Up to 15 workstations',
        'Full Microsoft 365 deployment',
        'Cloud storage & permissions',
        'Hardware procurement assistance',
        'QuickBooks Online migration',
        '90-day priority support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise Tidy',
      description: 'Tailored solutions for complex environments.',
      priceRange: 'Custom',
      features: [
        'Enterprise-wide assessment',
        'Unlimited workstations',
        'Multi-location deployments',
        'Custom integrations',
        'Dedicated project manager',
        'Ongoing managed services',
        '12-month support contract',
      ],
      highlighted: false,
    },
  ];

  const additionalCosts = [
    { item: 'Windows 11 Pro Workstation', range: '$800 - $1,500', note: 'Per device' },
    { item: 'Microsoft 365 Business', range: '$12.50 - $22/user/mo', note: 'Monthly subscription' },
    { item: 'Cloud Storage (1TB)', range: 'Included with M365', note: 'Per user' },
    { item: 'Additional Support Hours', range: '$125/hour', note: 'After included hours' },
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <span className="text-teal-600 font-medium text-sm uppercase tracking-wider">Transparent Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Project Ranges
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clear, upfront pricing so you know what to expect. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                pkg.highlighted
                  ? 'bg-teal-600 text-white shadow-xl scale-105'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal-800 text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-4 ${pkg.highlighted ? 'text-teal-100' : 'text-gray-600'}`}>
                {pkg.description}
              </p>

              <div className={`text-3xl font-bold mb-6 ${pkg.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {pkg.priceRange}
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className={`w-5 h-5 mr-2 flex-shrink-0 ${pkg.highlighted ? 'text-teal-200' : 'text-teal-500'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className={`text-sm ${pkg.highlighted ? 'text-teal-50' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 px-6 rounded-lg font-medium transition-all ${
                  pkg.highlighted
                    ? 'bg-white text-teal-600 hover:bg-teal-50'
                    : 'bg-teal-600 text-white hover:bg-teal-700'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Additional Costs Table */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Additional Costs Reference
          </h3>
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Item</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Range</th>
                  <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Note</th>
                </tr>
              </thead>
              <tbody>
                {additionalCosts.map((cost, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="py-4 px-6 text-sm text-gray-900">{cost.item}</td>
                    <td className="py-4 px-6 text-sm text-teal-600 font-medium">{cost.range}</td>
                    <td className="py-4 px-6 text-sm text-gray-500">{cost.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-500 mt-4">
            * All prices are estimates. Final pricing depends on specific requirements and scope.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
