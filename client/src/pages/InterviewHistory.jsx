import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ServerUrl } from '../App.jsx'
function InterviewHistory() {
    const [interviews, setInterviews] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const getMyInterview = async () => {
            try {
                const result = await axios.get(ServerUrl + "/api/interview/get-interview", { withCredentials: true })
                console.log(result.data)
                setInterviews(result.data)

            } catch (error) {

            }
        }
        getMyInterview()
    }, [])

    return (
        <div>History of all interviews</div>
    )
}

export default InterviewHistory