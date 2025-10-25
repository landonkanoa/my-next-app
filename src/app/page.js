import EmployeeCard from "./WelcomeMessage";
import Counter from "./counter";

export default function Home() {
  return (
    <main>
      <h1>Team Directory</h1>
      <EmployeeCard name="Michael Soler" role="Data" /> 
      <Counter />
    </main>
  );
}