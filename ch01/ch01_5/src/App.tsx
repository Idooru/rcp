import * as D from './data';

export default function App() {
  return (
    <>
      <p>
        {D.randomName()} {D.randomJobTitle()} {D.randomDayMonthYear()}
      </p>
      <img src={D.randomAvatar()} height="50" />
      <img src={D.randomImage()} height="300" />
    </>
  );
}
