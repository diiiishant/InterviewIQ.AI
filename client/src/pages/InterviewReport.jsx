import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ServerUrl } from '../App';
import Step3Report from '../components/Step3Report';
import SEO from '../components/SEO';

function InterviewReport() {
  const { id } = useParams()
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const result = await axios.get(ServerUrl + "/api/interview/report/" + id, { withCredentials: true })
        console.log(result.data);
        setReport(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchReport()
  }, [])

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEO 
          title="Loading Interview Report... - InterviewIQ.AI"
          description="Fetching your AI-powered mock interview report and feedback."
        />
        <p className="text-gray-500 text-lg">
          Loading Report...
        </p>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${report.role} Interview Report - InterviewIQ.AI`}
        description={`Detailed AI evaluation report for the ${report.role} mock interview. Overall Score: ${report.finalScore || 0}/10.`}
        keywords={`${report.role} interview, mock interview report, interview feedback, performance score`}
      />
      <Step3Report report={report} />
    </>
  );
}

export default InterviewReport