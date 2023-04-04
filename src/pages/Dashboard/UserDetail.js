import React, { useState, useEffect } from "react";
import { useParams, useLocation, Link } from "react-router-dom";

//useLocation: Route'a veri taşıma

function UserDetail() {
  const { id } = useParams(); //parametre alıp kullanıcının detayını gösterdik
  const [user, setUser] = useState(location.state);
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    if (!user?.id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [id]);

  return (
    <div>
      <h2> Kullanıcı Detayları </h2>

      {user && <pre> {JSON.stringify(user, null, 2)} </pre>}
      <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcı</Link>
    </div>
  );
}

export default UserDetail;
