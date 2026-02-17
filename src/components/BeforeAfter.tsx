const BeforeAfter = () => {
  const beforeItems = [
    { icon: 'warning', text: 'Fragmented email accounts (Shaw, Bluehost, Gmail)' },
    { icon: 'warning', text: 'Aging Windows 10 hardware nearing end-of-life' },
    { icon: 'warning', text: 'Files scattered across USB drives and local folders' },
    { icon: 'warning', text: 'Multiple logins and forgotten passwords' },
    { icon: 'warning', text: 'QuickBooks Desktop tied to one computer' },
    { icon: 'warning', text: 'Security vulnerabilities and update fatigue' },
  ];

  const afterItems = [
    { icon: 'check', text: 'Unified Microsoft 365 or Google Workspace' },
    { icon: 'check', text: 'Modern Windows 11 Pro workstations' },
    { icon: 'check', text: 'Secure cloud storage with proper permissions' },
    { icon: 'check', text: 'Single sign-on with password management' },
    { icon: 'check', text: 'QuickBooks Online with automatic backups' },
    { icon: 'check', text: 'Current, patched, and monitored systems' },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            The Transformation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how we transform chaotic technology environments into streamlined, secure systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Before Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl opacity-20 blur"></div>
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Before</h3>
              </div>

              <ul className="space-y-4">
                {beforeItems.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl opacity-20 blur"></div>
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">After</h3>
              </div>

              <ul className="space-y-4">
                {afterItems.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Transformation Arrow (Desktop) */}
        <div className="hidden md:flex justify-center mt-8">
          <div className="flex items-center space-x-4 text-gray-400">
            <div className="h-px w-24 bg-gradient-to-r from-red-300 to-gray-300"></div>
            <svg className="w-8 h-8 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="h-px w-24 bg-gradient-to-r from-gray-300 to-teal-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
