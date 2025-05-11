
import CountdownTimer from './CountdownTimer';
import RegistrationForm from './RegistrationForm';

const CTASection = () => {
  return (
    <section id="register" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Take Your Trading to the <span className="text-trading-gold">Next Level</span>
              </h2>
              
              <p className="text-gray-600 mb-8">
                Join our exclusive algorithmic trading program and get access to professional-grade strategies that have helped thousands of traders achieve consistent profits. Limited spots available for our next cohort.
              </p>
              
              <div className="mb-8">
                <CountdownTimer />
              </div>
              
              <div className="bg-trading-blue text-white p-6 rounded-lg mb-6">
                <h4 className="font-bold text-xl mb-2">What You'll Get</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-trading-gold mr-2">✓</span>
                    Lifetime access to our algorithmic trading course
                  </li>
                  <li className="flex items-start">
                    <span className="text-trading-gold mr-2">✓</span>
                    6 ready-to-implement trading strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-trading-gold mr-2">✓</span>
                    Private community membership
                  </li>
                  <li className="flex items-start">
                    <span className="text-trading-gold mr-2">✓</span>
                    Weekly live trading sessions
                  </li>
                  <li className="flex items-start">
                    <span className="text-trading-gold mr-2">✓</span>
                    Personal strategy review session
                  </li>
                </ul>
              </div>
            </div>
            
            <div>
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
