import React from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Main from '../components/Main';

export default function Initial() {
  return (
    <>
    <Header />
    <div className='flex h-screen w-screen overflow-hidden'>
      <Aside />
      <Main />
    </div>
    </>
  );
}