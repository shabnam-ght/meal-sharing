import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Alert from "react-popup-alert";

const API_URL = "/api";

function Meal({ oneMeal, updateReservation, allReservations, getMealPicture }) {
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
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-around",
        }}
      >
        <div>
          <p
            style={{
              color: "#fdf8e8",
              backgroundColor: "#ce8884",
              margin: "20px",
              fontSize: "40px",
            }}
          >
            {meal.title}
          </p>
          <p
            style={{
              color: "#fdf8e8",
              backgroundColor: "#ce8884",
              margin: "20px",
              fontSize: "20px",
            }}
          >
            {meal.description}
          </p>
          <img
            src={getMealPicture(meal.id)}
            style={{
              height: "50%",
              width: "50%",
              marginBottom: "50px",
            }}
          ></img>
        </div>
        {getReservations(meal.id) && (
          <div>
            <h1
              style={{
                fontSize: "40px",
                color: "#fdf8e8",
                backgroundColor: "#ce8884",
                margin: "20px",
              }}
            >
              Submit a new meal!
            </h1>
            <div style={{}}>
              <form onSubmit={handleSubmit}>
                <label
                  style={{
                    color: "#fdf8e8",
                    backgroundColor: "#ce8884",
                    marginRight: "20px",
                  }}
                >
                  PhoneNumber:
                </label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  style={{ marginBottom: "20px" }}
                />

                <br></br>
                <label
                  style={{
                    color: "#fdf8e8",
                    backgroundColor: "#ce8884",
                    marginRight: "20px",
                  }}
                >
                  Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  style={{ marginBottom: "20px" }}
                />

                <br />
                <label
                  style={{
                    color: "#fdf8e8",
                    backgroundColor: "#ce8884",
                    marginRight: "20px",
                  }}
                >
                  Email:
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  style={{ marginBottom: "20px" }}
                />
                <br />

                <label
                  style={{
                    color: "#fdf8e8",
                    backgroundColor: "#ce8884",
                    marginRight: "20px",
                  }}
                >
                  number of guests:
                </label>
                <input
                  type="text"
                  value={numberOfGuests}
                  onChange={handleNumberOfGuests}
                  style={{ marginBottom: "20px" }}
                />

                <br />

                <button
                  type="submit"
                  style={{
                    color: "#fdf8e8",
                    backgroundColor: "#ce8884",
                    margin: "20px",
                    borderRadius: "12px",
                    fontSize: "25px",
                    transitionDuration: "0.4s",
                  }}
                >
                  Submit Reservation
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
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
