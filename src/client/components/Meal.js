import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Alert from "react-popup-alert";

const API_URL = "/api";

function Meal({ oneMeal, updateReservation, allReservations }) {
  let params = useParams();
  let meal = oneMeal(parseInt(params.id));

  const [alert, setAlert] = useState({
    type: "error",
    text: "This is a alert message",
    show: false,
  });

  function onCloseAlert() {
    setAlert({
      type: "",
      text: "",
      show: false,
    });
  }

  function onShowAlert(type) {
    setAlert({
      type: type,
      text: "Demo alert",
      show: true,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const url = `${API_URL}/reservations/`;
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number_of_guests: parseInt(numberOfGuests),
        meal_id: parseInt(params.id),
        contact_phonenumber: phoneNumber,
        contact_name: name,
        contact_email: email,
      }),
    })
      .then((reponse) => reponse.json())
      .then(() => updateReservation(response));
  }
  function getReservations(mealid) {
    let numberOfPeople = 0;
    for (let i = 0; i < allReservations.length; i++) {
      if (allReservations[i].meal_id == mealid) {
        numberOfPeople += allReservations[i].number_of_guests;
      }
    }
    return numberOfPeople < meal.max_reservations;
  }

  const [numberOfGuests, setnumberOfGuests] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value);
  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleNumberOfGuests = (event) => setnumberOfGuests(event.target.value);

  return (
    <>
      <div>
        <p>{meal.title}</p>
        <p>{meal.description}</p>
      </div>
      {getReservations(meal.id) && (
        <div>
          <h1>Submit a new meal!</h1>
          <form onSubmit={handleSubmit}>
            <label>
              PhoneNumber:
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </label>
            <br></br>
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label>
              Email:
              <input type="text" value={email} onChange={handleEmailChange} />
            </label>
            <br />

            <label>
              number of guests:
              <input
                type="text"
                value={numberOfGuests}
                onChange={handleNumberOfGuests}
              />
            </label>
            <br />

            <button type="submit">Submit Reservation</button>
          </form>
        </div>
      )}

      <Alert
        header={"Header"}
        btnText={"Close"}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      />
    </>
  );
}

export default Meal;
