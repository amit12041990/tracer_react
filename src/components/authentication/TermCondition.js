import React, { useEffect } from 'react';

const TermsModal = ({ show, handleClose }) => {
  useEffect(() => {
    if (show) {
      const modal = new window.bootstrap.Modal(document.getElementById('termsModal'));
      modal.show();
    }
  }, [show]);

  return (
    <div className="modal fade" id="termsModal" tabIndex="-1" aria-labelledby="termsModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="termsModalLabel">Terms & Conditions</h5>
            <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <h4>Introduction</h4>
            <p>Welcome to our app, designed to monitor and enhance children's activities on the internet. By using this app, you agree to the following terms and conditions. Please read them carefully.</p>

            <h4>App Features</h4>
            <p>Our app provides the following features:</p>
            <ul>
              <li><strong>Activity Monitoring</strong>: The app tracks the child's browsing data and input text to analyze various aspects such as language proficiency, emotional state, and tonality.</li>
              <li><strong>Time Tracking</strong>: The app records the number of hours the child spends online.</li>
              <li><strong>Data Analysis</strong>: The app uses the collected data to generate insights aimed at improving the child's language skills and overall online behavior.</li>
              <li><strong>Parental Control</strong>: All data collection and analysis are conducted under the explicit permission of the parent or guardian.</li>
            </ul>

            <h4>Data Collection and Usage</h4>
            <ul>
              <li><strong>Browsing Data</strong>: We collect information on the websites visited by the child to understand their interests and behavior online.</li>
              <li><strong>Input Text</strong>: The app monitors the text input by the child to evaluate language use, emotional expression, and tonality.</li>
              <li><strong>Usage Time</strong>: The app tracks the duration of the child's online activity.</li>
            </ul>

            <h4>Parental Permission</h4>
            <ul>
              <li>Parents or guardians must provide explicit consent for the app to monitor and analyze their child's online activities.</li>
              <li>The app will not collect or use any data without parental approval.</li>
            </ul>

            <h4>Data Privacy and Security</h4>
            <p>We prioritize the security and privacy of your child's data. All collected information is stored securely and is only accessible to authorized personnel. The data will be used solely for the purpose of improving the child's language skills and online behavior.</p>

            <h4>Child Improvement Program</h4>
            <p>The insights generated by the app aim to support the child's development by identifying areas for improvement and providing tailored recommendations. Parents will receive regular reports on their child's progress and activity.</p>

            <h4>User Responsibilities</h4>
            <ul>
              <li>Parents are responsible for ensuring that the child understands the purpose of the app and consents to its use.</li>
              <li>Users must not misuse the app or interfere with its operation.</li>
            </ul>

            <h4>Limitation of Liability</h4>
            <p>We strive to provide accurate and beneficial insights; however, we do not guarantee the accuracy or completeness of the data analysis. We are not liable for any damages arising from the use of the app.</p>

            <h4>Changes to Terms and Conditions</h4>
            <p>We may update these terms and conditions from time to time. Users will be notified of any significant changes. Continued use of the app after changes have been made constitutes acceptance of the new terms.</p>

            <h4>Contact Us</h4>
            <p>If you have any questions or concerns about these terms and conditions, please contact us at [support@example.com].</p>

            <p>By downloading and using our app, you agree to these terms and conditions. If you do not agree with any part of these terms, please do not use our app.</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
