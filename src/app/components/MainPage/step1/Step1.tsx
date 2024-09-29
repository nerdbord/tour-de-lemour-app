'use client'
import React, { useState } from 'react'
import Button from '../../Button/Button'
import SetUpStepper from '../../SetUpStepper/SetUpStepper'
import Header from '../../Header/Header'
import styles from './Step1.module.scss'
import { EditIcon } from './EditIcon'
import Image from 'next/image'

interface Step1Props {
  onNext: () => void
  handleReset: () => void
}

const Step1: React.FC<Step1Props> = ({ onNext, handleReset }) => {
  const [adultLemurs, setAdultLemurs] = useState(0)
  const [babyLemurs, setBabyLemurs] = useState(0)

  return (
    <div className={styles.stepContainer}>
      {/* <Header location={'Kraków '} onChangeLocation={handleLocationChange} /> */}
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

      <h2 className={styles.title}>Ile Lemurów, wariacie?</h2>
      <p className={styles.subTitle}>Kogo zabierasz w tour ze sobą?</p>

      <div className={styles.lemurOptions}>
        <div className={styles.option}>
          <h4 className={styles.optionTitle}>Dorosłych Lemurów</h4>
          <div className={styles.counter}>
            <span>{adultLemurs}</span>
            <div className={styles.counterButtonsContainer}>
              <div className={styles.counterButtons}>
                <button
                  onClick={() =>
                    setAdultLemurs((prev) => Math.max(0, prev - 1))
                  }
                >
                  -
                </button>

                <button onClick={() => setAdultLemurs((prev) => prev + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
          <Image
            src="/BigLemur.png"
            className={styles.avatar}
            width={84}
            height={107}
            alt=""
          />
        </div>
        <div className={styles.option}>
          <h4 className={styles.optionTitle}>
            Baby Lemur <span>{'(do 12 lat)'}</span>
          </h4>
          <div className={styles.counter}>
            <span>{babyLemurs}</span>
            <div className={styles.counterButtonsContainer}>
              <div className={styles.counterButtons}>
                <button
                  onClick={() => setBabyLemurs((prev) => Math.max(0, prev - 1))}
                >
                  -
                </button>

                <button onClick={() => setBabyLemurs((prev) => prev + 1)}>
                  +
                </button>
              </div>
            </div>
          </div>
          <Image
            src="/BabyLemur.png"
            className={styles.avatar}
            width={84}
            height={107}
            alt=""
          />
        </div>
      </div>

      <SetUpStepper progress={33} label="Setup: 1 z 3 kroków" />

      <button onClick={onNext} className={styles.nextButton}>
        Wybierz czas
      </button>
    </div>
  )
}

export default Step1
