"use client";  // Make this a client component

import { useEffect, useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    setYear(currentYear)
  }, [])

  return (
    <footer style={{ textAlign: 'center', marginTop: '20px', padding: '10px', background: '#f0f0f0' }}>
      <p>
        <small>
          <strong>&copy; PT FIRST MEO INDONESIA {year} &ndash; All Rights Reserved.</strong>
        </small>
      </p>
    </footer>
  )
}
