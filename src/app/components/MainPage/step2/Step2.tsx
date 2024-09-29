'use client'
import React, { useState } from 'react'
import SetUpStepper from '../../SetUpStepper/SetUpStepper'
import styles from './Step2.module.scss'
import { EditIcon } from '../step1/EditIcon'
import Image from 'next/image'

interface Step2Props {
  onNext: () => void
  handleReset: () => void
}

const Step2: React.FC<Step2Props> = ({ onNext, handleReset }) => {
  const [availableTime, setAvailableTime] = useState(1)
  const [availableCash, setAvailableCash] = useState(10)

  return (
    <div className={styles.stepContainer}>
      <div className={styles.header}>
        <p className={styles.tourInfo}>
          Tour de
          <span>Kraków</span>
          {/*TODO: */}
        </p>
        <button className={styles.editButton} onClick={handleReset}>
          <EditIcon />
        </button>
      </div>

      <h2 className={styles.title}>Kilka konkretów</h2>
      <p className={styles.subTitle}>Na całą wycieczkę</p>

      <div className={styles.lemurOptions}>
        <div className={styles.option}>
          <h4 className={styles.optionTitle}>Ile masz godzin?</h4>
          <div className={styles.counter}>
            <span>{availableTime}</span>
            <div className={styles.counterButtonsContainer}>
              <div className={styles.counterButtons}>
                <button
                  onClick={() =>
                    setAvailableTime((prev) => Math.max(0, prev - 0.5))
                  }
                >
                  -
                </button>

                <button
                  onClick={() =>
                    setAvailableTime((prev) => prev + 0.5)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <Image
            src="/ZegrarmistrzSwiataUrgundowy.png"
            className={styles.avatar}
            width={84}
            height={107}
            alt=""
          />
        </div>
        <div className={styles.option}>
          <h4 className={styles.optionTitle}>
            Jaki masz budżet?
          </h4>
          <div className={styles.counter}>
            <span>{availableCash}</span>
            <div className={styles.counterButtonsContainer}>
              <div className={styles.counterButtons}>
                <button
                  onClick={() =>
                    setAvailableCash((prev) => Math.max(0, prev - 10))
                  }
                >
                  -
                </button>

                <button
                  onClick={() =>
                    setAvailableCash((prev) => prev + 10)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <Image
            src="/Zielone.png"
            className={styles.avatar}
            width={84}
            height={107}
            alt=""
          />
        </div>
      </div>

      <SetUpStepper progress={66} label="2 z 3 kroków" />

      <button onClick={onNext} className={styles.nextButton}>
        Wybierz budżet i preferencje
      </button>
    </div>
  )
}

export default Step2
