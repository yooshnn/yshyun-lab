'use client';

import React from 'react';
import { TLectureSelected } from '@/app/lecture/types';
import {
  Button,
  NavToggle,
  NavToggles,
  Spacer,
  Typography,
} from '@/components';
import styles from './lecture.module.scss';

export const NavComponent = () => (
  <NavToggles>
    <NavToggle
      url="/lecture?filter=undergraduate"
      label="학부"
      paramKey="filter"
      value="undergraduate"
      fallback
    />
    <NavToggle
      url="/lecture?filter=postgraduate"
      label="대학원"
      paramKey="filter"
      value="postgraduate"
    />
  </NavToggles>
);

export const LecturesComponent = ({
  lectures,
  filter,
}: {
  lectures: TLectureSelected[];
  filter: string;
}) => {
  const initialLimit = 5;

  const [limit, setLimit] = React.useState(initialLimit);
  const full = limit >= lectures.length;

  const handleClick = () => {
    if (full) setLimit(initialLimit);
    else setLimit((pre) => Math.min(lectures.length, pre + 5));
  };

  return (
    <Lectures>
      {lectures.slice(0, limit).map(({ year, postgraduate, undergraduate }) => (
        <Lecture
          key={`lecture;year:${year}`}
          year={year}
          data={filter === 'postgraduate' ? postgraduate : undergraduate}
        />
      ))}
      {lectures.length > initialLimit && (
        <Button onClick={handleClick}>{full ? 'fold' : 'show more'}</Button>
      )}
    </Lectures>
  );
};

const Lectures = ({ children }: React.PropsWithChildren) => (
  <div className={styles.wrapper}>{children}</div>
);

interface ItemProps {
  year: number;
  data: { spring: string[]; fall: string[] };
}

const Lecture = ({ year, data }: ItemProps) => {
  return (
    <div className={styles.container}>
      <Typography as="h3">{year}</Typography>
      {data.fall.length !== 0 && (
        <div className={styles.semester}>
          <h4>Fall</h4>
          <ul>
            {data.fall.map((i) => (
              <li key={`lecture;year:${year};semester:fall;title:${i}`}>{i}</li>
            ))}
          </ul>
        </div>
      )}
      <Spacer />
      {data.spring.length !== 0 && (
        <div className={styles.semester}>
          <h4>Spring</h4>
          <ul>
            {data.spring.map((i) => (
              <li key={`lecture;year:${year};semester:spring;title:${i}`}>
                {i}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
