import React from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import Main from '../components/Main';

export default function Initial() {
  return (
    <>
    <div className='flex flex-col h-screen w-screen'>
      <Header />
      <div className="flex overflow-hidden">
        <Aside />
        <Main />
      </div>
    </div>
    </>
  );
}