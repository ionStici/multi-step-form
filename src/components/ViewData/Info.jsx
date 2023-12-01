function Info({ info }) {
  return (
    <ul>
      <li>
        <p>Name: </p>
        <p>{info.name}</p>
      </li>
      <li>
        <p>Email: </p>
        <p>{info.email}</p>
      </li>
      <li>
        <p>Tel: </p>
        <p>{info.tel}</p>
      </li>
    </ul>
  );
}

export default Info;
