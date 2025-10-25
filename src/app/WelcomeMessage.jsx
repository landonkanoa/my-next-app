export default function EmployeeCard({ name, role }) {
    return (
        <div className="card">
            <h3>{name}</h3>
            <p>Role: {role}</p>
        </div>
    );
}