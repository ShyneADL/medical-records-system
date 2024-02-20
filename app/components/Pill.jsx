import React from 'react'

const Pill = ({first, second, third}) => {
  return (
    <div class="container">
	<div class="tabs">
		<input type="radio" id="radio-1" name="tabs" />
		<label class="tab" for="radio-1">{first}</label>
		<input type="radio" id="radio-2" name="tabs" />
		<label class="tab" for="radio-2">{second}</label>
		<input type="radio" id="radio-3" name="tabs" />
		<label class="tab" for="radio-3">{third}</label>
		<span class="glider"></span>
	</div>
</div>
  )
}

export default Pill
