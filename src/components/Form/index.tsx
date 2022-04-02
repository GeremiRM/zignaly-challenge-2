interface FormProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Form: React.FC<FormProps> = ({ value, onChange }) => {
  return (
    <form className="form">
      <label htmlFor="searchInput">Search</label>
      <input value={value} id="searchInput" onChange={onChange} />
    </form>
  );
};
