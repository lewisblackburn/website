interface Props {
  width?: number;
  height?: number;
}

const NoteIcon = ({ width = 24, height = 24 }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
  >
    <path fill="none" stroke="none" d="M0 0h24v24H0V0z"></path>
    <path
      stroke="none"
      d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"
    ></path>
  </svg>
);

export default NoteIcon;
