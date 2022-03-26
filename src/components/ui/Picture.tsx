interface Props {
  className?: string;
  srcSet: {
    small: string;
    small2x: string;
    medium: string;
    medium2x: string;
    large: string;
    large2x: string;
  };
  alt?: string;
}

const Picture = ({
  className,
  srcSet: { small, small2x, medium, medium2x, large, large2x },
  alt = '',
}: Props) => {
  return (
    <picture className={className}>
      <source srcSet={`${small}, ${small2x} 2x`} media="(max-width:734px)" />
      <source srcSet={`${medium}, ${medium2x} 2x`} media="(max-width:1068px)" />
      <source srcSet={`${large}, ${large2x} 2x`} media="(min-width:0px)" />
      <img src={large} alt={alt} />
    </picture>
  );
};

export default Picture;
