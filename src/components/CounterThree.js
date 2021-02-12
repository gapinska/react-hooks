import React, { useState } from "react"

const CounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" })
  return (
    <form>
      <label>
        First name:
        <input
          type="text/>"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
      </label>

      <label>
        Last name:
        <input
          type="text/>"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </label>

      <h2>Your first name is : {name.firstName}</h2>
      <h2>Your last name is : {name.lastName}</h2>
    </form>
  )
}

export default CounterThree
