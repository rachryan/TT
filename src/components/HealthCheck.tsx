import { useState } from 'react';

const HealthCheck = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: 'What operating system are your main computers running?',
      options: [
        { value: 'win11', label: 'Windows 11', score: 0 },
        { value: 'win10', label: 'Windows 10', score: 2 },
        { value: 'older', label: 'Windows 8 or older', score: 4 },
        { value: 'mixed', label: 'Mixed / Not sure', score: 3 },
      ],
    },
    {
      question: 'Where is your important business data stored?',
      options: [
        { value: 'cloud', label: 'Cloud storage (OneDrive, Google Drive)', score: 0 },
        { value: 'server', label: 'Local server with backups', score: 1 },
        { value: 'local', label: 'Local computers only', score: 3 },
        { value: 'usb', label: 'USB drives / External hard drives', score: 4 },
      ],
    },
    {
      question: 'How do you manage business email?',
      options: [
        { value: 'm365', label: 'Microsoft 365 / Google Workspace', score: 0 },
        { value: 'provider', label: 'ISP email (Shaw, etc.)', score: 3 },
        { value: 'hosting', label: 'Web hosting email (Bluehost, etc.)', score: 2 },
        { value: 'multiple', label: 'Multiple different systems', score: 4 },
      ],
    },
    {
      question: 'How old is your primary business computer?',
      options: [
        { value: 'new', label: 'Less than 2 years', score: 0 },
        { value: 'moderate', label: '2-4 years', score: 1 },
        { value: 'old', label: '4-6 years', score: 3 },
        { value: 'ancient', label: 'More than 6 years', score: 4 },
      ],
    },
    {
      question: 'Do you have a documented password management system?',
      options: [
        { value: 'manager', label: 'Yes, using a password manager', score: 0 },
        { value: 'spreadsheet', label: 'Spreadsheet or document', score: 2 },
        { value: 'memory', label: 'We remember them / sticky notes', score: 4 },
        { value: 'same', label: 'We use the same password everywhere', score: 5 },
      ],
    },
  ];

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let total = 0;
    Object.entries(answers).forEach(([qIndex, answer]) => {
      const question = questions[parseInt(qIndex)];
      const option = question.options.find(o => o.value === answer);
      if (option) total += option.score;
    });
    return total;
  };

  const getResultMessage = () => {
    const score = calculateScore();
    if (score <= 5) {
      return {
        status: 'Excellent',
        color: 'teal',
        message: 'Your technology infrastructure is in great shape! Consider a maintenance review to keep things running smoothly.',
        action: 'Schedule a Quick Review',
      };
    } else if (score <= 12) {
      return {
        status: 'Moderate Risk',
        color: 'yellow',
        message: 'There are some areas that could use improvement. A technology audit would help identify quick wins.',
        action: 'Book a Technology Audit',
      };
    } else {
      return {
        status: 'High Risk',
        color: 'red',
        message: 'Your systems have significant vulnerabilities. We recommend a comprehensive modernization plan.',
        action: 'Schedule Urgent Consultation',
      };
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  const result = getResultMessage();

  return (
    <section id="health-check" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="text-teal-600 font-medium text-sm uppercase tracking-wider">Free Assessment</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
            System Health Check
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take our quick assessment to identify potential risks and opportunities in your technology setup.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {!showResults ? (
              <>
                {/* Progress Bar */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Question {currentQuestion + 1} of {questions.length}</span>
                    <span>{Math.round(((currentQuestion) / questions.length) * 100)}% Complete</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-500 transition-all duration-300"
                      style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option.value)}
                      className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all duration-200 group"
                    >
                      <div className="flex items-center">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover:border-teal-500 mr-4 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-transparent group-hover:bg-teal-500"></div>
                        </div>
                        <span className="text-gray-700 group-hover:text-gray-900">{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Results */}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${
                    result.color === 'teal' ? 'bg-teal-100' :
                    result.color === 'yellow' ? 'bg-yellow-100' : 'bg-red-100'
                  }`}>
                    {result.color === 'teal' ? (
                      <svg className="w-10 h-10 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : result.color === 'yellow' ? (
                      <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    ) : (
                      <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>

                  <h3 className={`text-2xl font-bold mb-2 ${
                    result.color === 'teal' ? 'text-teal-600' :
                    result.color === 'yellow' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {result.status}
                  </h3>

                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    {result.message}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#contact" className="btn-primary">
                      {result.action}
                    </a>
                    <button onClick={resetQuiz} className="btn-secondary">
                      Take Again
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCheck;
