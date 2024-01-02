export default function ContactInfoForm() {
  return (
    <div className="">
      <h3 className="text-xl"> contact info </h3>
      <h6 className="text-gray-500">
        {" "}
        in the username slot, whatever you put is how i will refer to you{" "}
      </h6>
      <br />
      <br />
      <input type="email" placeholder="example@server.com" />
      <br />
      <input type="text" placeholder="carrots" />
      <br />
      <input type="text" placeholder="Judy" />
      <br />
      <input type="text" placeholder="H." />
      <br />
      <input type="text" placeholder="Hopps" />
      <br />
      <br />
    </div>
  );
}
