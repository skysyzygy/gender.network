import React, {useRef} from 'react';

const Loader = () => {

    const redLoader = useRef(Math.random() < 0.5);

    const loader = redLoader.current ?
    <div suppressHydrationWarning style={{ backgroundColor: "red" }} key="red">
      <div suppressHydrationWarning>RED</div>
    </div>:
    <div suppressHydrationWarning style={{ backgroundColor: "blue" }} key="blue">
      <div suppressHydrationWarning>BLUE</div>
    </div>

  return (
    <div suppressHydrationWarning className="full-screen-loader">
      {loader}
    </div>
  )
};

export default Loader;