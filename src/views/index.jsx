import { Image } from 'antd';
import React from 'react';
import antdImg from "../card.png"
function Home() {
  return (
   <Image src={antdImg} preview={false} height="100vh" width="100%" />
  )
}

export default Home;