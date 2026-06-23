import React, { useState } from 'react'
import Step1SetUp from '../components/Step1SetUp'
import Step2Interview from '../components/Step2Interview'
import Step3Report from '../components/Step3Report'
import SEO from '../components/SEO';
 
 function InterviewPage() {
    const [step,setStep] = useState(1)
    const [interviewData,setInterviewData] = useState(null)
   return (
     <div className='min-h-screen bg-gray-50'>
        <SEO 
          title="Mock Interview Session - InterviewIQ.AI"
          description="Conduct your real-time voice-based mock interview with adaptive AI feedback."
          keywords="AI interview session, voice interview, HR interview practice, tech interview practice"
        />
        {step===1 && (
            <Step1SetUp onStart={(data)=>{
                setInterviewData(data);
                setStep(2)}}/>
        )}

        {step===2 && (
            <Step2Interview interviewData={interviewData}
            onFinish={(report)=>{setInterviewData(report);
                setStep(3)}}/>
        )}

        {step===3 && (
            <Step3Report report={interviewData}/>
        )}
     </div>
   )
 }
    
 export default InterviewPage
