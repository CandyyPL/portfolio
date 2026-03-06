import { type ReactNode } from 'react';

type Props = {
  url: string;
  linkStyle?: string;
  buttonStyle?: string;
  blank?: boolean;
  children: ReactNode;
};

export default function LinkButton({
  url,
  linkStyle,
  buttonStyle,
  blank,
  children,
}: Props) {
  return (
    <a
      href={url}
      target={blank ? '_blank' : '_self'}
      className={linkStyle}>
      <button className={buttonStyle}>{children}</button>
    </a>
  );
}
