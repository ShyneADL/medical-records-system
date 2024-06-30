import React from 'react'

const Pill = ({first, second, third, activePill, setActivePill}) => {
  return (
    <div class="container">
	<div class="tabs">
	<input type="radio" id="radio-1" name="tabs" checked={activePill === first} onChange={() => setActivePill(first)} />
      <label className="tab" htmlFor="radio-1">{first}</label>

      <input type="radio" id="radio-2" name="tabs" checked={activePill === second} onChange={() => setActivePill(second)} />
      <label className="tab" htmlFor="radio-2">{second}</label>

      <input type="radio" id="radio-3" name="tabs" checked={activePill === third} onChange={() => setActivePill(third)} />
      <label className="tab" htmlFor="radio-3">{third}</label>

      <span className="glider"></span> 
	</div>
</div>
  )
}

export default Pill
