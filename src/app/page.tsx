'use server';

import { ArrowRightIcon } from 'lucide-react';
import { Link, Typography, Wrapper } from '@/components';
import { topics } from '@/components/pages/home/config';
import { Hero } from '@/components/pages/home/hero';
import { Topic, Topics } from '@/components/pages/home/topic/topic';

export default async function Home() {
  return (
    <>
      <Hero />
      <Wrapper>
        <Topics>
          {topics.map(({ title, paragraph }, index) => (
            <Topic title={title} index={index} key={`research-topic-${index}`}>
              <Typography as="p">{paragraph}</Typography>
              <Link href="/research" icon={ArrowRightIcon}>
                read more
              </Link>
            </Topic>
          ))}
        </Topics>
      </Wrapper>
    </>
  );
}
