import CoursePageComp from '@/src/components/CoursePageComp';
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import LessonMenu from './lessons/LessonMenu';
import LessonPage from './lessons/[id]';

const Lessons = ({ lessons }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>DVF - קורס עריכת וידאו בכדורגל - שיעורי הקורס</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lesson-page">
        <div className="lesson-menu">
          <LessonMenu lessons={lessons} />
        </div>
        <div className="lesson-content">
          {router.query.lessonId ? (
            <LessonPage lessonId={router.query.lessonId} />
          ) : (
            <h1>Select a lesson from the menu</h1>
          )}
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps({ req }) {
  const host = `${req.headers['x-forwarded-proto']}://${req.headers['host']}`;
  const response = await axios.get(`${host}/api/lessons`);
  const lessons = response.data;
  return {
    props: {
      lessons,
    },
  };
}

export default Lessons;
