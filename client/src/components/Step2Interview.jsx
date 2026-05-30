import React, { useRef, useState } from 'react'
import malevideo from "../assets/video/male-ai.mp4"
import femalevideo from "../assets/video/female-ai.mp4"
import Timer from './Timer'
import { motion, scale } from "motion/react"
import { FaMicrophone, FaMicrophoneSlash} from "react-icons/fa"

function Step2Interview(interviewData, onFinish) {
const { interviewId, questions, userName } = interviewData;
const [isIntroPhase, setIsIntroPhase] = useState(true);

const [isMicOn, setIsMicOn] = useState(true);
const recognitionRef = useRef(null);
const [isAIPlaying, setIsAIPlaying] = useState(false);

const [currentIndex, setCurrentIndex] = useState(0);  
const [answer, setAnswer] = useState("");
const [feedback, setFeedback] = useState("");
const [timeLeft, setTimeLeft] = useState(
  questions?.[0]?.timelimit || 60 
);  

const [selectedVoice, setSelectedVoice] = useState(null);
const [isSubmitting, setIsSubmitting] = useState(false);
const [voiceGender, setVoiceGender] = useState("female");
const [subtitle, setSubtitle] = useState("");
const videoRef = useRef(null);

const currentQuestion = questions[currentIndex];
  return (
    <div className='min-h-screen bg-linear-to-br from-emerald-50 via-white 
    to-teal-100 flex items-center justify-center p-4 sm:p-6'>
      <div className='w-full max-w-350 min-h-[80vh] bg-white rounded-3xl 
      shadow-2xl border border-gray-200 flex flex-col lg:flex-row overflow-hidden'>

        {/* video section */}
        <div className='w-full lg:w-[35%] bg-white flex flex-col items-center 
        p-6 space-y-6 border-rborder-gray-200'>
          <div>
            <video src={femalevideo} muted playsInline preload="auto"
              className='w-full max-w-md rounded-2xl outline-hidden shadow-xl' />
          </div>

          <div className='w-full max-w-md bg-white border border-gray-200 
          rounded-2xl shadow-md p-6 space-y-5'>
            <div className='flex justify-between items-center'>
              <span className='text-green-500 text-sm'>
                Interview Status
              </span>
              <span className='text-sm font-semibold text-emerald-600'>
                AI Speaking
              </span>
            </div>
            <div className='h-px bg-gray-200'></div>

            <div className='flex justify-center'>
              <Timer timeLeft="30" totalTime="60" />
            </div>
            <div className='h-px bg-gray-200'></div>
            <div className='grid grid-cols-2 gap-6 text-center'>
              <div>
                <span className='text-2xl font-bold text-emerald-600'>1</span>
                <span className='text-sm text-gray-400'>Current Questions</span>
              </div>
              <div>
                <span className='text-2xl font-bold text-emerald-600'>5</span>
                <span className='text-sm text-gray-400'>Total Questions</span>
              </div>
            </div>

          </div>
        </div>

        {/*Text section*/}
        <div className='flex-1 flex flex-col p-4 sm:p-6 md:p-8  relative'>
          <h2 className='text-xl sm:text-2xl font-bold text-emerald-600 mb-6'>AI smart interview</h2>
          <div className='relative mb-6 bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm'>
            <p className=' text-sm sm:text-sm text-gray-400 mb-2'>
              Question 1 of 5
            </p>
            <div className='text-base sm:text-lg font-semibold text-gray-800 leading-relaxed'>{currentQuestion?.question}</div>
          </div>

          <textarea
            placeholder='Type your answer here...'
            className='flex-1 bg-gray-100 p-4 sm:p-6 rounded-2xl resize-none 
          outline-none border  border-gray-200 focus:ring-2 
          focus:ring-emerald-500 transition text-gray-800'/>

          <div className='flex items-center gap-4 mt-6'>
            <motion.button 
          whileTap={{scale:0.9}}
            className='w-12 h-12 sm:w-14 sm:h-14 flex items-center 
            justify-center rounded-full bg-black text-white shadow-lg'> 
              <FaMicrophone size={20} />
            </motion.button>  

            <motion.button 
            whileTap={{scale:0.95}}
            className='flex-1 bg-gradient-to-r from-emerald-600 to-teal-500
             text-white py-3 sm:py-4 rounded-2xl shadow-lg hover:opacity-90 transition font-semibold'>
              Submit Answer
             </motion.button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Step2Interview