import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import TopBar from '../components/TopBar'
import SideBar from '../components/SideBar'
import Calendar from '../components/Calendar'
import { useState, useEffect } from 'react'
import { days } from '../utils/constant'

const year = new Date().getFullYear()
const month = new Date().getMonth() + 1

export default function Home() {
  const [schedules, setSchedules] = useState([])
  const [openSidebar, setOpenSidebar] = useState(true)

   const checkToday = (date) => {
    const today = new Date().getDate()
    return date == today
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }

    return color
  }

  const generateDay = (date, paramsMonth) => {
    const newDate = new Date(`${year}-${paramsMonth}-${date}`)
    return days[newDate.getDay()]
  }

  const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate()
  }

  const assignSchedules = () => {
    let newSchedules = []

    Array.from(Array(daysInMonth(month, year))).map((day, index) => {
      newSchedules.push({
        date: index + 1,
        day: generateDay(index + 1, month),
        events: [],
        isToday: checkToday(index + 1)
      })
    })

    newSchedules[5].events.push({ name: 'meeting', color: getRandomColor() })
    newSchedules[5].events.push({ name: 'lunch', color: getRandomColor() })
    newSchedules[10].events.push({ name: 'meeting', color: getRandomColor() })

    setSchedules(newSchedules)
  }

  useEffect(() => {
    assignSchedules()
  }, [])

  return (
    <>
      <Head>
        <title>Calendar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container-fluid`}>
        <TopBar open={openSidebar} onToggle={() => setOpenSidebar(!openSidebar)} />

        <div className={`d-flex`}>
          {openSidebar && (
            <SideBar schedules={schedules} />
          )}
          <Calendar schedules={schedules} />
        </div>
      </main>
    </>
  )
}
