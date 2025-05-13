import LineChart  from './line-chart';
import styles from './dashboard.module.css';

export default function Dashboard(){
     return (
    <div className={styles.dashboard}>
      <LineChart  />
    </div>
  );
}