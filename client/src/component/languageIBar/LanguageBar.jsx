import { languageMap } from 'common/options';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './LanguageBar.module.css';

const languages = {
  인기: [
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Svelte',
    'Nextjs',
    'Nodejs',
    'Java',
    'Spring',
    'Go',
    'Nestjs',
  ],
  프론트엔드: ['JavaScript', 'TypeScript', 'React', 'Vue', 'Svelte', 'Nextjs'],
  백엔드: [
    'Java',
    'Spring',
    'Nodejs',
    'Nestjs',
    'Go',
    'Kotlin',
    'Express',
    'MySQL',
    'MongoDB',
    'Python',
    'Django',
    'php',
    'GraphQL',
    'Firebase',
  ],
  모바일: ['Flutter', 'Swift', 'Kotlin', 'ReactNative', 'Unity'],
  기타: ['AWS', 'Kubernetes', 'Docker', 'Git', 'Figma', 'Zeplin', 'Jest', 'C'],
  모두보기: [
    'JavaScript',
    'TypeScript',
    'React',
    'Vue',
    'Svelte',
    'Nextjs',
    'Nodejs',
    'Java',
    'Spring',
    'Go',
    'Nestjs',
    'Kotlin',
    'Express',
    'MySQL',
    'MongoDB',
    'Python',
    'Django',
    'php',
    'GraphQL',
    'Firebase',
    'Flutter',
    'Swift',
    'ReactNative',
    'Unity',
    'AWS',
    'Kubernetes',
    'Docker',
    'Git',
    'Figma',
    'Zeplin',
    'Jest',
  ],
};

const LanguageBar = ({ onIconClick }) => {
  const { subject, selected } = useSelector((state) => state.language);

  return (
    <ul className={styles.languages}>
      {languages[subject].map((language, idx) => {
        const isSelected = selected.includes(languageMap[language]);
        return (
          <li
            key={idx}
            className={`${styles.languageIcon} ${
              !selected.length || isSelected === true ? styles.full : styles.transparent
            }`}
            onClick={() => onIconClick(language, isSelected)}
          >
            <img
              className={styles.logo}
              src={`/images/languages/${languageMap[language]}.svg`}
              alt={language}
            />
            <span className={styles.languageName}>{language}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default LanguageBar;
