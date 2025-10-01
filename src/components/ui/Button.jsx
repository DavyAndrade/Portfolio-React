export default function Button({ style, text, action, icon }) {
  return (
    <button className={style} onClick={action}>
      {icon}
      {text}
    </button>
  );
}
