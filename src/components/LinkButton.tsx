import { type ReactNode } from 'react';

type Props = {
  url: string;
  linkStyle?: string;
  buttonStyle?: string;
  children: ReactNode;
};

export default function LinkButton({
  url,
  linkStyle,
  buttonStyle,
  children,
}: Props) {
  return (
    <a
      href={url}
      className={linkStyle}>
      <button className={buttonStyle}>{children}</button>
    </a>
  );
}
