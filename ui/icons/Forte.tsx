import { IconProps } from './IconProps';

type ForteProps = IconProps;

function Forte(props: ForteProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 117.86 117.9"
      fill="#242424"
      aria-hidden={true}
      {...props}
    >
      <polygon points="40.04 86.32 40.04 63.23 64.49 63.23 64.49 54.82 40.04 54.82 40.04 40.13 64.49 40.13 64.49 31.72 31.63 31.72 31.63 86.32 40.04 86.32" />
      <rect x="64.49" y="77.92" width="24.33" height="8.41" />
      <path d="M0,0V117.9H117.86V0ZM109.46,109.49H8.41V8.41H109.46Z" />
    </svg>
  );
}

export default Forte;
