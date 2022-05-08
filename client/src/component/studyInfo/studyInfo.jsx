import { formatDate } from 'common/utils';
import { ContactPoint } from 'component/contactPoint';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './studyInfo.module.css';

export const StudyInfo = () => {
  const read = useSelector((state) => state.read);

  return (
    <ul className={styles.studyGrid}>
      <li className={styles.contentWrapper}>
        <span className={styles.title}>모집 구분</span>
        <span className={styles.content}>{read.post.type.label}</span>
      </li>
      <li className={styles.contentWrapper}>
        <span className={styles.title}>진행 방식</span>
        <span className={styles.content}>{read.post.onlineOrOffline.label}</span>
      </li>
      <li className={styles.contentWrapper}>
        <span className={styles.title}>모집 인원</span>
        <span className={styles.content}>{read.post.recruits.label}</span>
      </li>
      <li className={styles.contentWrapper}>
        <span className={styles.title}>시작 예정</span>
        <span className={styles.content}>{formatDate(read.post.startDate)}</span>
      </li>
      <li className={styles.contentWrapper}>
        <span className={styles.title}>연락 방법</span>
        <ContactPoint contactPoint={read.post.contactPoint} contactType={read.post.contactType} />
      </li>
      <li className={styles.contentWrapper}>
        <span className={styles.title}>예상 기간</span>
        <span className={styles.content}>{read.post.expectedPeriod.label}</span>
      </li>
      <li className={styles.contentWrapper}>
        <span className={styles.title}>사용 언어</span>
        <ul className={styles.languageList}>
          {read.post.language.map((lang, i) => (
            <li key={i} className={styles.language}>
              <img
                className={styles.languageImage}
                src={`/images/languages/${lang.value}.svg`}
                alt='language'
              />
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
};
