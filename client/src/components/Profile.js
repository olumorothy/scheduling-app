import { useParams } from "react-router-dom";

export default function Profile() {
  const { id } = useParams();
  return (
    <main>
      <div style={{ width: "70%" }}>
        <h2>Hey, Moroti</h2>
        <p>Here is your schedule: WAT</p>
        <table>
          <tbody>
            <tr>
              <td>Mon</td>
              <td>8:00am</td>
              <td>10:00pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
