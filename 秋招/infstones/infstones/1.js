const { useState } = React
const { Input, Button, Select } = antd

const LeftInput = (props) => {
  const { setSelect, options } = props
  function handleChange (e) {
    // console.log(e);
    // console.log(e.target.value);
    setSelect(e);
  }

  return (
    <>
      <Select id="leftInput"
        defaultValue="bitCoin"
        onChange={handleChange}
        style={{ width: 120 }}
        options={options}
      />
    </>
  )
}

const RightInput = (props) => {
  const { setSelect, options } = props
  return (
    <>
      <Select id="rightInput"
        defaultValue="bitCoin"
        style={{ width: 120 }}
        options={options}
      />
    </>
  )
}

const Swap = () => {
  return (
    <Button id="swap">swap</Button>
  )
}
const TransformDetails = (props) => {
  const { value, from, to, options } = props
  return (
    <div>{value}-- {options[from].label}
      =
      {100}-- {options[to].label}</div>
  )
}
const Buttons = () => {

  return (
    <div>
      <Button >Refresh</Button>
      <Button>Save this Conversion</Button>
    </div>
  )
}
const Footer = () => {
  return (
    <div>Your conversion is available at: https://coinmarketcap.com/converter/xau/usd
    </div>
  )
}

const App = () => {
  const [inputValue, setInputValue] = useState(1)
  const [select1, setSelect1] = useState(1);
  const [select2, setSelect2] = useState(2);
  const options =
    [
      {
        value: '1',
        label: 'Not Identified',
      },
      {
        value: '2',
        label: 'Closed',
      },
      {
        value: '3',
        label: 'Closed12',
      },
      {
        value: '4',
        label: 'Closedqwe',
      },
      {
        value: '5',
        label: 'Closedqew',
      }
    ]

  return (
    <div id="box">
      <h1 id='title'>Cryptocurrency Converter Calculator</h1>
      <Input id="input" value={inputValue} />
      <div id="content">
        <div id="inputContent">
          <LeftInput setSelect={setSelect1} options={options} />
          <Swap />
          <RightInput setSelect={setSelect2} options={options} />
        </div>

      </div>
      <TransformDetails value={inputValue} from={select1} to={select2} options={options} />
      <Buttons />
      <Footer />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
)