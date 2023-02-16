import { ChangeEvent, useState } from 'react';
import styles from './Home.module.css';
import { IData } from './interfaces/index';
import { data } from './constants';

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [arr, setArr] = useState<IData[]>(data);

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTitle(evt.target.value);
  };

  const handleSubmit = (): void => {
    if (!title?.length) return;
    const newData = {
      title: title,
      id: new Date().getTime(),
      description: 'description',
    };
    console.log(newData);
    setArr([...arr, newData]);
    setTitle('');
  };

  const deleteItem = (id: number): void => {
    const newData = arr.filter((c) => c.id != id);
    setArr(newData);
    // setArr(arr.filter(item => item.id!== id));
  };

  return (
    <div className={styles.todo}>
      <h1 className={styles.title}>APP Todo</h1>
      <input
        placeholder="Enter todo"
        value={title}
        onChange={changeHandler}
        type="text"
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button}>
        Add todo
      </button>

      <div className={styles.card}>
        {arr.map((c) => (
          <div key={c.id} className={styles.cardItem}>
            <p>{c.title}</p>
            <div className={styles.delBtn}>
              <button onClick={() => deleteItem(c.id)}>Del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
