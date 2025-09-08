"use client"
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Download, 
  Mail, 
  ArrowRight, 
  Calendar,
  CreditCard,
  User,
  Building,
  Phone,
  FileText
} from 'lucide-react';

const SuccessPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
    
      

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Message */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful</h2>
            <p className="text-lg text-gray-600">
              Thank you for your purchase. Your subscription has been activated.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1  gap-8">
            
          

          
        

              {/* Support Information */}
              <div className="mt-6 bg-blue-50 rounded-lg border border-blue-200 p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Need Help?</h4>
                <p className="text-blue-700 text-sm mb-4">
                  If you have any questions about your purchase or need assistance, our support team is here to help.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>support@company.com</span>
                  </div>
                  <div className="flex items-center text-blue-700">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>+91 80-1234-5678</span>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="mt-6 bg-yellow-50 rounded-lg border border-yellow-200 p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">Important</h4>
                <ul className="text-yellow-700 text-sm space-y-2">
                  <li className="flex items-start">
                    <FileText className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Save this confirmation for your records</span>
                  </li>
                  <li className="flex items-start">
                    <Mail className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    <span>A detailed receipt has been sent to your email</span>
                  </li>
                </ul>
       
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center justify-center w-full max-w-md mx-auto p-4 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Transaction completed successfully</span>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Thank you for choosing our service. We're excited to have you on board!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;