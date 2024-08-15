import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar({ onSubmit }) {
  const handleSubmit = e => {
    const query = e.target.elements.input.value.trim();
    e.preventDefault();
    if (query === '') {
      toast.error('Write some text');
      return;
    }
    onSubmit(query);
    e.target.reset();
  };

  return (
    <header className={css.header}>
      <div>
        <Toaster position="top-right" />
      </div>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="input"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          <CiSearch />
        </button>
      </form>
    </header>
  );
}
