import { ReactNode, MouseEvent } from 'react';

interface Props {
  className?: string | null;
  onClick?: () => void;
  children?: ReactNode;
}

const FakeLink = ({
  className = null,
  onClick = () => {},
  children = null,
}: Props) => {
  const onFakeLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a href="" className={className as string} onClick={onFakeLinkClick}>
      {children}
    </a>
  );
};

export default FakeLink;
