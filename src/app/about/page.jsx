import Image from 'next/image'
import React from 'react';
import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>    
        {/* parent continaer p[ostion should be relative] */}
        <Image src="/about.png" alt="" fill />
      </div>
    </div>
  )
}

export default AboutPage