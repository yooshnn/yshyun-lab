import Link from 'next/link';

const logoStyle = {
  userSelect: 'none',
  fontSize: '1.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const;

export const Logo = () => {
  // const responsiveStyle = {
  //   ...(isDesktop && { fontSize: '1.5rem' }),
  //   ...(isMobile && { padding: '0 1rem' }),
  // };

  return (
    <Link href="/" style={{ ...logoStyle }}>
      <div>
        <div>
          Mathematical
          <br />
          Intelligence Lab
        </div>
      </div>
    </Link>
  );
};
