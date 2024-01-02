export default function CharacterInfoForm() {
  return (
    <div>
      <h3> character(s) info</h3>
      <h6 className="text-gray-500">
        this is general, thing, more questions will be enquired later
      </h6>
      <div>
        <p> how many characters? </p>
        <input type="range" min="0" max="10" />
        <br />
        <br />
      </div>
    </div>
  );
}
