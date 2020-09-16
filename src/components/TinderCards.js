import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./css/TinderCards.css";
import db from "../db/axios";
function TinderCards() {
  const [people, setPeople] = useState([]);
  const swiped = (dir, name) => {};

  const outOFFframe = (name) => {};

  useEffect(() => {
    async function fetchPeople() {
      const res = await db.get("/tinder/cards");
      setPeople(res.data);
    }
    fetchPeople();
  }, []);
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOFFframe(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.profile.profilePic})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
