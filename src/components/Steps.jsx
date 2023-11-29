import { assets } from "../store/Assets";

function Steps({ step }) {
  console.log(assets);

  return (
    <div>
      <ul>
        <ul>1</ul>
        <ul>2</ul>
        <ul>3</ul>
        <ul>4</ul>
      </ul>
    </div>
  );
}

export default Steps;
