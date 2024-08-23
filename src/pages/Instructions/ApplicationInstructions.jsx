import React, { useState } from 'react';
import './ApplicationInstructions.css'; // Import custom CSS file
import Topnav from '../Navbar/Topnav';

const instructionsData = [
  {
    title: 'First-Year Freshman Students',
    content: (
      <>
        <p>You will apply as a first-year freshman if you are a high school senior or if you graduated high school/GED but never attended a college or university.</p>
        <h4>We're Test Optional</h4>
        <p>Applicants have the option to apply for admission with or without a test score for the following academic terms: spring 2025, summer 2025, and fall 2025. Applicants are not disadvantaged by applying without a test score.</p>
        <h4>APPLY ONLINE</h4>
        <p>Complete the University of Houston application for admission using The Common Application. On your application, you will select whether you want your application to be reviewed with a test score or without a test score. Be sure to complete the short admissions essay and tell us about your extracurricular activities.</p>
        <h4>APPLICATION FEES</h4>
        <p>Pay the nonrefundable $75 application fee ($90 for international students) with a credit card or debit card. Payment can be made in your myUH self-service portal or before submitting the admissions application. First-time freshmen may qualify for an application fee waiver. Simply complete the National Association for College Admissions Counseling Fee Waiver Form and submit a PDF copy through your myUH account.</p>
        <h4>SUBMIT YOUR TRANSCRIPT</h4>
        <p>Pick one of the following options to submit your most recent high school transcript information:</p>
        <ul>
          <li>Self-report your transcript information. Visit your task list in your my.uh.edu self-service portal to self-report your transcript information. You'll only report your math, science, English, and social studies classes.</li>
          <li>Ask your school administrator to send your official transcript data electronically through an EDI (Electronic Data Interchange) system, e.g., TREx (for Texas institutions).</li>
        </ul>
        <p>We do not accept hard copy transcripts. Applicants are required to self-report academic information or provide using an EDI.</p>
        <h4>SUBMIT TEST SCORES</h4>
        <p>If you are applying for admissions with a test score, have your ACT or SAT score(s) sent directly from the testing agency to us. Our code for ACT is 4236; SAT is 6870. If you are applying for admissions without a test score, skip this step.</p>
        <h4>Deadlines</h4>
        <ul>
          <li>Spring 2025 Application Deadline: Dec. 2, 2024 Supporting Information Due: Dec. 9, 2024</li>
          <li>Summer 2025 Application Deadline: May 5, 2025 Supporting Information Due: May 12, 2025</li>
          <li>Fall 2025 Application Deadline: June 2, 2025 Supporting Information Due: June 9, 2025</li>
          <li>Fall 2025 Scholarship Priority Deadlines Application Deadline: Nov. 1, 2024 Supporting Information Due: Nov. 8, 2024</li>
        </ul>
        <p>*Supporting information includes application fee, self-reporting transcript information, test scores (if applicable). If applying without test scores, supporting information also includes your essay and resume. You can request to change to admissions without a test score by submitting this form.</p>
      </>
    ),
  },
  {
    title: 'Transfer Students',
    content: (
      <>
        <p>You will apply as a transfer if you have earned 15 or more transferable hours of college credit after high school graduation.</p>
        <p>Complete the University of Houston application for admission using The Common Application.</p>
        <h4>APPLICATION FEES</h4>
        <p>Pay the nonrefundable $75 application fee ($90 for international students) with a credit card or debit card. Payment can be made in your myUH self-service portal or before submitting the admissions application.</p>
        <p>If you will have fewer than 15 semester hours (30 for business majors) at the time of applying, have your high school transcript and ACT or SAT score(s) sent to the University of Houston, Office of Undergraduate Admissions, 4434 University Drive, Houston, TX 77004. Our code for ACT is 4236; SAT is 6870.</p>
        <h4>SUBMIT OFFICIAL TRANSCRIPTS</h4>
        <p>Submit official college transcripts from all colleges or universities attended. Ask your college or university registrar to send your transcript data electronically through an EDI (Electronic Data Interchange) system, e.g., Speede. You may also upload a PDF copy of your transcript to your myUH self-service portal.</p>
        <h4>Deadlines</h4>
        <ul>
          <li>Spring 2025 Application Deadline: Dec. 2, 2024 Supporting Information Due: Dec. 18, 2024</li>
          <li>Summer 2025 Application Deadline: May 5, 2025 Supporting Information Due: May 12, 2025</li>
          <li>Fall 2025 Application Deadline: June 23, 2025 Supporting Information Due: June 30, 2025</li>
        </ul>
        <p>*Supporting information includes application fee and official transcript(s) from all attended institution(s).</p>
      </>
    ),
  },
  {
    title: 'International Students',
    content: (
      <>
        <p>You will apply as an international student if you want to attend the University of Houston with citizenship from a country outside the U.S.</p>
        <p>Complete the University of Houston application for admission using The Common Application.</p>
        <h4>APPLICATION FEES</h4>
        <p>Pay the nonrefundable $90 application fee with a credit card or debit card. Payment can be made in your myUH self-service portal or before submitting the admissions application.</p>
        <h4>SUBMIT TEST SCORES</h4>
        <p>Have your official test scores sent directly from the testing agency. Our code for ACT is 4236; SAT is 6870; TOEFL is 6870. There is no institutional code for IELTS or Duolingo English Test scores. For IELTS and Duolingo English Test scores, the testing agency should send score reports to University of Houston, Office of Undergraduate Admissions.</p>
        <h4>SUBMIT ACADEMIC RECORDS</h4>
        <p>For International Freshman: Submit official high school (secondary school) transcripts, mark sheets, external exam results, and certificates for years 9-12 (or equivalent years). Academic records not issued in English must be submitted in the original language and include a certified literal English translation.</p>
        <p>For International Transfer: Submit official academic credentials (transcripts, mark sheets, and degree certificates) from all post-secondary schools (universities and colleges) attended whether in the USA or in another country.</p>
        <h4>OPTIONS FOR SUBMITTING TRANSCRIPTS</h4>
        <ul>
          <li>Upload to myUH self-service (Schools Outside US): Follow the Upload Transcript Guide to upload a copy of your official international academic records to your my.uh.edu self-service portal. Uploaded transcripts are considered unofficial but can complete an application for admission consideration. Please note, if admitted, UH will require submission of official final academic records before enrollment.</li>
          <li>Send Electronically: Ask your school administrator to send your official transcripts electronically through a secure electronic transcript service such as: TREx, SPEEDE, Common App, Naviance, Parchment, etc.</li>
          <li>Send by Postal Mail: Official transcripts can be mailed in an institutional-sealed envelope to: Office of Admission, University of Houston-Welcome Center, 4434 University Drive, Houston, TX 77204, U.S.A.</li>
        </ul>
        <p>*Official transcripts must either state “official”, have your institution's seal, a signature by a school official, or official watermark. It is up to the discretion of the Office of Admissions to determine the validity of the transcript and the office reserves the right to request additional or different copies if needed.</p>
        <h4>SUBMIT OTHER DOCUMENTS</h4>
        <p>Submit a copy of your passport ID page(s). F-1s in the U.S. are required to submit a copy of page 1 and 2 of the SEVIS I-20 and a copy of their I-94 record. J-1s in the U.S. are required to submit a copy of page 1 of the DS-2019 and a copy of their I-94 record.</p>
        <p>Submit financial documents. Acceptable financial documents include: statement from the bank signed by agent or bank stamp/seal; letter written from bank with the amount clearly indicated in U.S. dollars; checking, savings, or certificate of deposit statements; scholarship letters; or letters showing government funding.</p>
        <h4>Deadlines</h4>
        <ul>
          <li>Spring 2025 Application Deadline: Nov. 4, 2024 Supporting Information Due: Nov. 11, 2024</li>
          <li>Summer 2025 Application Deadline: April 1, 2025 Supporting Information Due: April 8, 2025</li>
          <li>Fall 2025 Application Deadline: May 5, 2025 Supporting Information Due: May 12, 2025</li>
        </ul>
        <p>*Supporting information includes application fee and official transcript(s) from all attended institution(s).</p>
      </>
    ),
  },
  {
    title: 'Post-Baccalaureate Students',
    content: (
      <>
        <p>Post-baccalaureate applicants are those who have completed the equivalent of a bachelor's degree prior to enrolling in UH. Post-baccalaureate students can take undergraduate courses, pursue a second degree, or meet the prerequisites needed for the graduate majors.</p>
        <p>Complete the University of Houston Transfer application for admission using the ApplyTexas Application.</p>
        <h4>APPLICATION FEES</h4>
        <p>Pay the nonrefundable $75 application fee ($90 for international students) with a credit card or debit card. Payment can be made in your myUH self-service portal or before submitting the admissions application.</p>
        <h4>SUBMIT OFFICIAL TRANSCRIPTS</h4>
        <p>Have your most recent colleges or university transcript sent to the University of Houston. Ask your college or university registrar to send your transcript data electronically through an EDI (Electronic Data Interchange) system, e.g., Speede.</p>
        <h4>Deadlines</h4>
        <ul>
          <li>Spring 2025 Application Deadline: Dec. 2, 2024 Supporting Information Due: Dec. 18, 2024</li>
          <li>Summer 2025 Application Deadline: May 5, 2025 Supporting Information Due: May 12, 2025</li>
          <li>Fall 2025 Application Deadline: June 23, 2025 Supporting Information Due: June 30, 2025</li>
        </ul>
        <p>*Supporting information includes application fee and official transcript(s) from all attended institution(s).</p>
      </>
    ),
  },
  {
    title: 'Transient / Visiting Students',
    content: (
      <>
        <p>A Visiting Student (sometimes referred to as a Transient Student) can take undergraduate courses at the University of Houston, but is not seeking a degree.</p>
        <p>Complete the University of Houston transient application for admission using the ApplyTexas Application.</p>
        <h4>APPLICATION FEES</h4>
        <p>Pay the nonrefundable $75 application fee ($90 for international students) with a credit card or debit card. Payment can be made in your myUH self-service portal or before submitting the admissions application.</p>
        <h4>SUBMIT OFFICIAL TRANSCRIPTS</h4>
        <p>Have your most recent college or university transcript sent to the University of Houston. Ask your college or university registrar to send your transcript data electronically through an EDI (Electronic Data Interchange) system, e.g., Speede.</p>
        <h4>Deadlines</h4>
        <ul>
          <li>Fall 2024 Application Deadline: Aug. 9, 2024 Supporting Information Due: Aug. 16, 2024</li>
          <li>Spring 2025 Application Deadline: Dec. 2, 2024 Supporting Information Due: Dec. 18, 2024</li>
          <li>Summer 2025 Application Deadline: May 23, 2025 Supporting Information Due: May 30, 2025</li>
          <li>Fall 2025 Application Deadline: Aug. 1, 2025 Supporting Information Due: Aug. 8, 2025</li>
        </ul>
        <p>*Supporting information includes application fee and official transcript(s) from all attended institution(s).</p>
      </>
    ),
  },
];

const ApplicationInstructions = () => {
    const [openSection, setOpenSection] = useState(null);
  
    const handleToggle = (index) => {
      setOpenSection(openSection === index ? null : index);
    };
  
    return (
      <div>
        <Topnav />
        <div className="instructions-container">
          {instructionsData.map((section, index) => (
            <div key={index} className="instruction-section">
              <button
                className="section-title"
                onClick={() => handleToggle(index)}
              >
                {section.title}
              </button>
              <div
                className={`section-content ${openSection === index ? 'open' : ''}`}
              >
                {section.content}
              </div>
            </div>
          ))}
          <div className="register-container">
            <a href="/registerstudent" className="register-button">Register Here</a>
          </div>
        </div>
      </div>

    );
  };
  
  export default ApplicationInstructions;
