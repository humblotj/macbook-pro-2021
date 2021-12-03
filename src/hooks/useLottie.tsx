import lottie from 'lottie-web';

const useLottie = () => {
  const loadAnimation = (
    lottieRef: React.RefObject<HTMLDivElement>,
    animationData: any,
  ) =>
    lottie.loadAnimation({
      container: lottieRef.current!,
      animationData,
      renderer: 'canvas' as any,
      autoplay: false,
      loop: false,
    });

  return loadAnimation;
};

export default useLottie;
