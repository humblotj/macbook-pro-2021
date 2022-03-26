import { HTMLProps, MouseEvent, ReactNode } from 'react';

interface Props extends HTMLProps<HTMLAnchorElement> {
  onClick?: () => void;
  children?: ReactNode;
}

const FakeLink = ({
  href = '',
  className,
  onClick = () => {},
  children = null,
}: Props) => {
  const onFakeLinkClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a
      href={href}
      className={(className || null) as string}
      onClick={onFakeLinkClick}
    >
      {children}
    </a>
  );
};

export default FakeLink;
