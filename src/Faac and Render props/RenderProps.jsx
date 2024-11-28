import React, { useState } from 'react'

const RenderProps = () => {
  return (
    <div>
      <DataProvider render={(data) => <h1>{data}</h1>}/>

      <div className='app'>
        <h1>☃️ Temperature Converter 🌞</h1>
        <Input render={(value) => (
            <>
                <Kelvin value={value} />
                <Fahrenheit value={value} />
            </>
        )}/>
      </div>
    </div>
  )
}

export default RenderProps

//example
export const DataProvider = ({render}) =>{
    const data = 'Data from Render Props'
    return render(data)
}

//another example
export const Input = (props) => {
    const [value, setValue] = useState('')

    return(
        <>
            <input
                type='text'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder='Temp in degree celsius'
            />
            {props.render(value)}
        </>
    )
}

function Kelvin({ value }) {
  return <div className="temp">{parseInt(value || 0) + 273.15}K</div>;
}

function Fahrenheit({ value }) {
    return <div className="temp">{(parseInt(value || 0) * 9) / 5 + 32}°F</div>;
}