import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#3f51b5"
        ariaLabel="ball-triangle-loading"
        visible={true}
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
        }}
      />
    </>
  );
};
